import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Props = HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export function Card({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white border border-slate-200 shadow-sm",
        className
      )}
      {...props}
    />
  );
}