import { SkeletonBlock } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-page px-6 py-12">
      <div className="mx-auto max-w-6xl space-y-5">
        <SkeletonBlock className="h-16 max-w-xl" />
        <SkeletonBlock className="h-80" />
        <SkeletonBlock className="h-48" />
      </div>
    </main>
  );
}
