import { AlertCircle } from "lucide-react";

export function EmptyState({ message }: { message: string }) {
  return (
    <div className="rounded-card border border-line bg-surface p-8 text-muted">
      <AlertCircle aria-hidden="true" className="mb-4 text-accent" size={24} />
      <p>{message}</p>
    </div>
  );
}
