import { buildSystemPrompt } from "@/lib/chat/knowledge";
import { getMockResponse } from "@/lib/chat/mock-engine";
import type { ChatApiRequest, ChatRole } from "@/lib/chat/types";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "unknown";
}

function createMockStream(response: string): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  const words = response.split(/(\s+)/);
  let index = 0;

  return new ReadableStream({
    async pull(controller) {
      if (index >= words.length) {
        controller.close();
        return;
      }

      const chunk = words[index];
      controller.enqueue(encoder.encode(chunk));
      index++;

      await new Promise((resolve) => setTimeout(resolve, 30 + Math.random() * 20));
    },
  });
}

async function createClaudeStream(
  systemPrompt: string,
  messages: { role: ChatRole; content: string }[],
): Promise<ReadableStream<Uint8Array>> {
  const apiKey = process.env.ANTHROPIC_API_KEY!;
  const encoder = new TextEncoder();

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: systemPrompt,
      stream: true,
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Claude API error: ${res.status} ${error}`);
  }

  const reader = res.body!.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  return new ReadableStream({
    async pull(controller) {
      const { done, value } = await reader.read();

      if (done) {
        controller.close();
        return;
      }

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const data = line.slice(6);
        if (data === "[DONE]") {
          controller.close();
          return;
        }

        try {
          const parsed = JSON.parse(data);
          if (
            parsed.type === "content_block_delta" &&
            parsed.delta?.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(parsed.delta.text));
          }
        } catch {
          // skip malformed JSON lines
        }
      }
    },
  });
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return Response.json(
        { error: "Demasiadas solicitudes. Espera un momento." },
        { status: 429 },
      );
    }

    const body = (await req.json().catch(() => null)) as ChatApiRequest | null;
    if (!body?.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
      return Response.json({ error: "Mensajes inválidos." }, { status: 400 });
    }

    const messages = body.messages
      .slice(-20)
      .map((m) => ({
        role: m.role as ChatRole,
        content: String(m.content).slice(0, 500).trim(),
      }))
      .filter((m) => m.content.length > 0);

    if (messages.length === 0) {
      return Response.json({ error: "Mensaje vacío." }, { status: 400 });
    }

    const useRealAI = Boolean(process.env.ANTHROPIC_API_KEY);

    let stream: ReadableStream<Uint8Array>;

    if (useRealAI) {
      const systemPrompt = buildSystemPrompt();
      stream = await createClaudeStream(systemPrompt, messages);
    } else {
      const mockMessages = messages.map((m) => ({
        id: crypto.randomUUID(),
        ...m,
      }));
      const response = getMockResponse(mockMessages);
      stream = createMockStream(response);
    }

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Error procesando el mensaje." },
      { status: 500 },
    );
  }
}
