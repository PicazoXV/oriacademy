"use client";

import { Bot } from "lucide-react";

const quickActions = [
  "Recomiéndame un curso",
  "Horarios y precios",
  "Talleres de verano",
  "Contactar con ORI",
];

export function QuickActions({ onSelect }: { onSelect: (text: string) => void }) {
  return (
    <div className="flex flex-col items-start gap-4 p-4">
      <div className="flex gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[rgb(var(--brand-mint))] to-[rgb(var(--brand-lilac))] shadow-sm">
          <Bot className="h-4 w-4 text-white" />
        </div>
        <div className="max-w-[80%] rounded-2xl rounded-bl-md border border-black/5 bg-slate-50 px-4 py-2.5 text-sm leading-relaxed text-slate-800">
          ¡Hola! Soy <strong>ORI</strong>, el asistente virtual de ORI Academy.
          Puedo ayudarte con información sobre cursos, horarios, precios y más.
          ¿En qué te puedo ayudar?
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pl-10">
        {quickActions.map((action) => (
          <button
            key={action}
            onClick={() => onSelect(action)}
            className="rounded-full border border-[rgb(var(--brand-mint))/30] bg-[rgb(var(--brand-mint))/8] px-3.5 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-[rgb(var(--brand-mint))/18] hover:border-[rgb(var(--brand-mint))/50]"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}
