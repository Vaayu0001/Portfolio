"use client";

import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-page px-6">
      <section className="max-w-xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase text-accent">
          Portfolio unavailable
        </p>
        <h1 className="font-display text-4xl text-ink">
          Something interrupted the page render.
        </h1>
        <p className="mt-4 text-muted">
          Retry the page. If this keeps happening, check the content files for malformed
          data.
        </p>
        <Button className="mx-auto mt-8" onClick={reset} variant="primary">
          <RotateCcw aria-hidden="true" size={18} />
          Retry
        </Button>
      </section>
    </main>
  );
}
