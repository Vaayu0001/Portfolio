import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-[var(--radius-card)] border border-line bg-surface shadow-soft",
        className,
      )}
    >
      {children}
    </article>
  );
}
