"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useChat } from "./ChatProvider";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { QuickActions } from "./QuickActions";

export function ChatPanel() {
  const { state, sendMessage, close } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [state.messages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [close]);

  const hasMessages = state.messages.length > 0;

  return (
    <motion.div
      ref={panelRef}
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.96 }}
      transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
      role="dialog"
      aria-modal="true"
      aria-label="Chat de ayuda de ORI Academy"
      id="ori-chat-panel"
      className="fixed bottom-24 right-4 z-[60] flex w-[360px] flex-col overflow-hidden rounded-3xl border border-black/10 bg-white/95 shadow-2xl backdrop-blur-xl sm:right-6 max-sm:inset-0 max-sm:bottom-0 max-sm:right-0 max-sm:w-full max-sm:rounded-none"
      style={{ height: "min(520px, calc(100vh - 120px))" }}
    >
      {/* Header */}
      <div className="relative shrink-0">
        <div className="h-1 bg-gradient-to-r from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))]" />
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <p className="text-sm font-extrabold text-slate-900">ORI Academy</p>
            <p className="text-xs text-slate-500">Asistente virtual</p>
          </div>
          <button
            onClick={close}
            aria-label="Cerrar chat"
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto chat-scrollbar">
        {!hasMessages ? (
          <QuickActions onSelect={sendMessage} />
        ) : (
          <div className="flex flex-col gap-3 p-4">
            {state.messages.map((msg, i) => (
              <ChatMessage
                key={msg.id}
                message={msg}
                isStreaming={
                  state.isStreaming && i === state.messages.length - 1
                }
              />
            ))}
          </div>
        )}
      </div>

      {/* Error */}
      {state.error && (
        <div className="mx-4 mb-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
          {state.error}
        </div>
      )}

      {/* Input */}
      <ChatInput onSend={sendMessage} disabled={state.isStreaming} />
    </motion.div>
  );
}
