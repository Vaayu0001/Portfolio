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
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <section
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl"
                key={group.title}
              >
                <h3 className="text-lg font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge
                      className={`transition-all duration-300 group-hover:scale-105 ${
                        isPlaceholder(skill) ? "border-accent text-accent" : ""
                      }`}
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
