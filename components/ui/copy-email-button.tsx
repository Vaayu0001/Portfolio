"use client";

import { Mail } from "lucide-react";
import { isPlaceholder } from "@/lib/utils";

export function CopyEmailButton({ email }: { email: string }) {
  const pending = isPlaceholder(email);

  function openEmail() {
    if (pending) {
      return;
    }


    window.location.href = `mailto:${email}`;
  }

  return (
    <button
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-line bg-surface px-4 py-2 text-sm font-bold text-ink transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-60"
      disabled={pending}
      onClick={openEmail}
      type="button"
    >
      <Mail aria-hidden="true" size={18} />
      {pending ? "Email pending" : "Email"}
    </button>
  );
}