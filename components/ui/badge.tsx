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
        "inline-flex rounded-[7px] border border-line bg-[#f7f3ea] px-3 py-1 text-xs font-semibold text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
