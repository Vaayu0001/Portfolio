import type { Metric } from "@/content/types";

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="rounded-card border border-line bg-page/70 p-4">
      <dt className="text-xs font-bold uppercase text-muted">{metric.label}</dt>
      <dd className="mt-2 text-2xl font-extrabold text-ink">{metric.value}</dd>
    </div>
  );
}
