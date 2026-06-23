"use client";

import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useChat } from "./ChatProvider";

export function ChatBubble() {
  const { state, toggleOpen } = useChat();

  return (
    <div className="fixed bottom-4 right-4 z-[60] sm:bottom-6 sm:right-6">
      {!state.hasBeenOpened && !state.isOpen && (
        <span className="absolute inset-0 animate-ping rounded-full bg-[rgb(var(--brand-mint))] opacity-30" />
      )}
      <motion.button
        onClick={toggleOpen}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={state.isOpen ? "Cerrar chat" : "Abrir chat de ayuda"}
        aria-expanded={state.isOpen}
        aria-controls="ori-chat-panel"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] text-white shadow-lg shadow-[rgb(var(--brand-mint))/25] transition-shadow hover:shadow-xl"
      >
        <motion.div
          initial={false}
          animate={{ rotate: state.isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {state.isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}
