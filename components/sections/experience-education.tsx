import { GraduationCap, Route } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/content/experience";

export function ExperienceEducation() {
  return (
    <section className="border-y border-line bg-surface py-24" id="experience">
      <div className="section-shell">
        <SectionHeading
          description="Kept concise until the exact resume text is added. Sensitive academic marks and CGPA are intentionally excluded."
          eyebrow="Background"
          title="Experience and education, summarized for review."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {experience.map((entry, index) => {
            const Icon = index === 0 ? Route : GraduationCap;
            return (
              <Card className="p-6" key={entry.title}>
                <Icon aria-hidden="true" className="text-accent" size={28} />
                <p className="mt-5 text-sm font-bold uppercase text-muted">
                  {entry.period}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-ink">{entry.title}</h3>
                <p className="mt-1 font-bold text-accent">{entry.organization}</p>
                <p className="mt-5 leading-8 text-muted">{entry.summary}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
