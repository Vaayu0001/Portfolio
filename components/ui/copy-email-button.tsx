"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { isPlaceholder } from "@/lib/utils";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const pending = isPlaceholder(email);

  async function copyEmail() {
    if (pending) {
      return;
    }

    await navigator.clipboard.writeText(email);
    trackEvent("copy_email", { email: "copied" });
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-line bg-surface px-4 py-2 text-sm font-bold text-ink transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-60"
      disabled={pending}
      onClick={copyEmail}
      type="button"
    >
      {pending ? (
        <Mail aria-hidden="true" size={18} />
      ) : copied ? (
        <Check aria-hidden="true" size={18} />
      ) : (
        <Copy aria-hidden="true" size={18} />
      )}
      {pending ? "Email pending" : copied ? "Copied" : "Copy email"}
    </button>
  );
}
