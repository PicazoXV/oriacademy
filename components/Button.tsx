import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: Variant;
};

const styles: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost:
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-[rgb(var(--ink))/80] hover:bg-[rgb(var(--brand-mint))/10] hover:text-[rgb(var(--ink))]",
};

export function Button({ className, type, variant = "primary", ...props }: Props) {
  return (
    <button
      type={type ?? "button"}
      className={cn(
        "transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[rgb(var(--brand-mint))] disabled:pointer-events-none disabled:opacity-50",
        styles[variant],
        className
      )}
      {...props}
    />
  );
}
