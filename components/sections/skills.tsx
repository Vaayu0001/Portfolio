import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/content/profile";
import { isPlaceholder } from "@/lib/utils";

export function Skills() {
  return (
    <section className="py-24" id="skills">
      <div className="section-shell">
        <SectionHeading
          description="Grouped around the technologies and fundamentals visible in the current project work."
          eyebrow="Skills"
          title="A practical stack for web products and CS-heavy projects."
        />

        {skillGroups.length === 0 ? (
          <div className="mt-12">
            <EmptyState message="No skill groups are configured yet." />
          </div>
        ) : (
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <section
                className="rounded-card border border-line bg-surface p-6 shadow-soft"
                key={group.title}
              >
                <h3 className="text-xl font-extrabold text-ink">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge
                      className={isPlaceholder(skill) ? "border-accent text-accent" : ""}
                      key={skill}
                    >
                      {isPlaceholder(skill) ? "Resume skills pending" : skill}
                    </Badge>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
