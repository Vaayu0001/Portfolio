import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-md border border-line bg-surface px-3 py-1 text-xs font-bold text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
