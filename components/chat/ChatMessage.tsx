"use client";

import { Bot } from "lucide-react";
import type { ChatMessage as ChatMessageType } from "@/lib/chat/types";

export function ChatMessage({
  message,
  isStreaming,
}: {
  message: ChatMessageType;
  isStreaming?: boolean;
}) {
  const isUser = message.role === "user";
  const isEmpty = message.content.length === 0;

  return (
    <div className={`flex gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] shadow-sm">
          <Bot className="h-4 w-4 text-white" />
        </div>
      )}

      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "rounded-br-md bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] text-white"
            : "rounded-bl-md border border-black/5 bg-slate-50 text-slate-800"
        }`}
      >
        {isEmpty && isStreaming ? (
          <span className="typing-dots inline-flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
          </span>
        ) : (
          <span className="whitespace-pre-wrap">{message.content}</span>
        )}
      </div>
    </div>
  );
}
