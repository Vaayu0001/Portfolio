"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { trackEvent, type PortfolioEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary: "border-accent bg-accent text-white shadow-lift hover:bg-accent-strong",
  secondary: "border-line bg-surface text-ink hover:border-accent hover:text-accent",
  ghost: "border-transparent bg-transparent text-ink hover:bg-accent-soft",
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-bold transition duration-200";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  eventName?: PortfolioEvent;
  eventPayload?: Record<string, string | number | boolean>;
  variant?: Variant;
};

export function ButtonLink({
  children,
  className,
  eventName = "cta_click",
  eventPayload,
  onClick,
  variant = "secondary",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(base, variants[variant], className)}
      onClick={(event) => {
        trackEvent(eventName, eventPayload);
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
};

export function Button({
  children,
  className,
  variant = "secondary",
  ...props
}: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
