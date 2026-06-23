"use client";

import { AnimatePresence } from "framer-motion";
import { ChatProvider, useChat } from "./ChatProvider";
import { ChatBubble } from "./ChatBubble";
import { ChatPanel } from "./ChatPanel";

function ChatWidgetInner() {
  const { state } = useChat();

  return (
    <>
      <AnimatePresence>{state.isOpen && <ChatPanel />}</AnimatePresence>
      <ChatBubble />
    </>
  );
}

export function ChatWidget() {
  return (
    <ChatProvider>
      <ChatWidgetInner />
    </ChatProvider>
  );
}
