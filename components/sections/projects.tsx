import { ExternalLink, GitBranch } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { MetricCard } from "@/components/ui/metric-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/content/projects";

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="border-y border-line bg-surface py-24" id="projects">
      <div className="section-shell">
        <SectionHeading
          description="Each project is framed around the problem, solution, stack, role, and reviewable source link."
          eyebrow="Featured Projects"
          title="Selected work with product context and technical depth."
        />

        {featuredProjects.length === 0 ? (
          <div className="mt-12">
            <EmptyState message="No featured projects are configured yet." />
          </div>
        ) : (
          <div className="mt-12 grid gap-6">
            {featuredProjects.map((project, index) => (
              <Card className="overflow-hidden" key={project.title}>
                <div className="grid gap-0">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge>{index === 0 ? "Flagship" : "Project"}</Badge>
                      <span className="text-sm font-bold text-muted">
                        {project.subtitle}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-4xl text-ink">
                      {project.title}
                    </h3>
                    <div className="mt-6 grid gap-5 text-sm leading-7 text-muted md:grid-cols-2">
                      <p>
                        <span className="font-extrabold text-ink">Problem:</span>{" "}
                        {project.problem}
                      </p>
                      <p>
                        <span className="font-extrabold text-ink">Solution:</span>{" "}
                        {project.solution}
                      </p>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-muted">
                      <span className="font-extrabold text-ink">Role:</span>{" "}
                      {project.role}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-muted">
                      <span className="font-extrabold text-ink">Impact:</span>{" "}
                      {project.impact}
                    </p>
                    <dl className="mt-6 grid gap-3 sm:grid-cols-3">
                      {project.metrics.map((metric) => (
                        <MetricCard key={metric.label} metric={metric} />
                      ))}
                    </dl>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <ButtonLink
                        eventName="project_open"
                        eventPayload={{ project: project.title, type: "repo" }}
                        href={project.repoUrl}
                        rel="noreferrer"
                        target="_blank"
                        variant="primary"
                      >
                        <GitBranch aria-hidden="true" size={18} />
                        View repo
                      </ButtonLink>
                      {project.demoUrl ? (
                        <ButtonLink
                          eventName="project_open"
                          eventPayload={{ project: project.title, type: "demo" }}
                          href={project.demoUrl}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <ExternalLink aria-hidden="true" size={18} />
                          Live demo
                        </ButtonLink>
                      ) : null}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
