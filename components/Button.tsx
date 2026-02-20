import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export function Button({ className, type, ...props }: Props) {
  return (
    <button
      type={type ?? "button"}
      className={cn(
        "inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-300 disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
      {...props}
    />
  );
}