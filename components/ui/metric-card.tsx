import type { Metric } from "@/content/types";

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="group flex h-full flex-col items-center justify-center text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl">
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent" />
      </div>
      <dt className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wide text-muted/60 leading-tight">{metric.label}</dt>
      <dd className="mt-1 text-base sm:text-lg md:text-xl font-semibold text-ink leading-tight break-words hyphens-auto transition-transform duration-300 group-hover:scale-[1.03]">{metric.value}</dd>
    </div>
  );
}
