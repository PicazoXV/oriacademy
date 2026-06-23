"use client";

import {
  createContext,
  useCallback,
  useContext,
  useReducer,
  type ReactNode,
} from "react";
import type { ChatAction, ChatState } from "@/lib/chat/types";

const initialState: ChatState = {
  isOpen: false,
  messages: [],
  isStreaming: false,
  error: null,
  hasBeenOpened: false,
};

function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case "TOGGLE_OPEN":
      return {
        ...state,
        isOpen: !state.isOpen,
        hasBeenOpened: true,
        error: null,
      };
    case "CLOSE":
      return { ...state, isOpen: false };
    case "ADD_USER_MESSAGE":
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: crypto.randomUUID(), role: "user", content: action.content },
        ],
        error: null,
      };
    case "START_STREAMING":
      return {
        ...state,
        isStreaming: true,
        messages: [
          ...state.messages,
          { id: crypto.randomUUID(), role: "assistant", content: "" },
        ],
      };
    case "APPEND_STREAM_CHUNK": {
      const msgs = [...state.messages];
      const last = msgs[msgs.length - 1];
      if (last?.role === "assistant") {
        msgs[msgs.length - 1] = { ...last, content: last.content + action.content };
      }
      return { ...state, messages: msgs };
    }
    case "FINISH_STREAMING":
      return { ...state, isStreaming: false };
    case "SET_ERROR":
      return { ...state, isStreaming: false, error: action.error };
    case "CLEAR_ERROR":
      return { ...state, error: null };
    default:
      return state;
  }
}

type ChatContextValue = {
  state: ChatState;
  sendMessage: (content: string) => Promise<void>;
  toggleOpen: () => void;
  close: () => void;
};

const ChatContext = createContext<ChatContextValue | null>(null);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  const toggleOpen = useCallback(() => dispatch({ type: "TOGGLE_OPEN" }), []);
  const close = useCallback(() => dispatch({ type: "CLOSE" }), []);

  const sendMessage = useCallback(
    async (content: string) => {
      const trimmed = content.trim();
      if (!trimmed) return;

      dispatch({ type: "ADD_USER_MESSAGE", content: trimmed });
      dispatch({ type: "START_STREAMING" });

      try {
        const allMessages = [
          ...state.messages.map((m) => ({ role: m.role, content: m.content })),
          { role: "user" as const, content: trimmed },
        ];

        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: allMessages }),
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(
            (data as { error?: string }).error ?? "Error del servidor",
          );
        }

        const reader = res.body!.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          dispatch({ type: "APPEND_STREAM_CHUNK", content: chunk });
        }

        dispatch({ type: "FINISH_STREAMING" });
      } catch (err) {
        dispatch({
          type: "SET_ERROR",
          error:
            err instanceof Error ? err.message : "Error enviando el mensaje.",
        });
      }
    },
    [state.messages],
  );

  return (
    <ChatContext value={{ state, sendMessage, toggleOpen, close }}>
      {children}
    </ChatContext>
  );
}

export function useChat(): ChatContextValue {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
}
