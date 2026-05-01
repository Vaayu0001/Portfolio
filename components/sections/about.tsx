import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/content/profile";
import { resolveContent } from "@/lib/utils";

export function About() {
  return (
    <section className="border-y border-line bg-surface py-24" id="about">
      <div className="section-shell grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          description="A concise snapshot of the work themes behind this portfolio."
          eyebrow="About"
          title="Building useful systems from strong fundamentals."
        />
        <div className="space-y-6 text-lg leading-9 text-muted">
          <p>{resolveContent(profile.about, profile.aboutFallback)}</p>
          <p>
            The portfolio emphasizes practical evidence: project scope, technical
            decisions, role clarity, and outcomes that can be reviewed directly through
            GitHub repositories.
          </p>
        </div>
      </div>
    </section>
  );
}
