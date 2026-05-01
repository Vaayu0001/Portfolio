"use client";
import { useState, useEffect, useRef } from "react";
import type { CSSProperties, MouseEvent } from "react";
import { ExternalLink, GitBranch } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { MetricCard } from "@/components/ui/metric-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/content/projects";
import Image from "next/image";

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (selectedProject) {
      const prevOverflow = document.body.style.overflow;
      const prevHeight = document.body.style.height;
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      return () => {
        document.body.style.overflow = prevOverflow;
        document.body.style.height = prevHeight;
      };
    }
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedProject]);

  useEffect(() => {
    if (selectedProject && modalRef.current) {
      modalRef.current.focus();
    }
  }, [selectedProject]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    (e.currentTarget as HTMLElement).style.setProperty("--mx", `${x / 20}px`);
    (e.currentTarget as HTMLElement).style.setProperty("--my", `${y / 20}px`);
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLElement).style.setProperty("--mx", `0px`);
    (e.currentTarget as HTMLElement).style.setProperty("--my", `0px`);
  };

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
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => {
              const imgSrc = ("image" in project && typeof project.image === "string") ? project.image : "/images/projects/placeholder.jpg";
              return (
              <Card
                className="group cursor-pointer relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.01] animate-fade-in-up"
                key={project.title ?? index}
              >
                <div
                  className="cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={
                    {
                      transform: "translate(var(--mx, 0px), var(--my, 0px))",
                      animationDelay: `${index * 80}ms`
                    } as CSSProperties
                  }
                >
                <div className="grid gap-0">
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={imgSrc}
                      alt={project.title ?? "project image"}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                  <div className="relative z-10 p-5 md:p-6 transition-transform duration-300 group-hover:translate-y-[-2px]">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge>{index === 0 ? "Flagship" : "Project"}</Badge>
                      <span className="text-sm font-bold text-muted">
                        {project.subtitle ?? ""}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-3xl tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
                      {project.title}
                    </h3>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.repoUrl ? (
                        <ButtonLink
                          onClick={(e) => e.stopPropagation()}
                          className="transition-transform duration-300 group-hover:translate-y-[-1px]"
                          eventName="project_open"
                          eventPayload={{ project: project.title ?? "project", type: "repo" }}
                          href={project.repoUrl}
                          rel="noreferrer"
                          target="_blank"
                          variant="primary"
                        >
                          <GitBranch aria-hidden="true" size={18} />
                          View repo
                        </ButtonLink>
                      ) : null}
                      {project.demoUrl ? (
                        <ButtonLink
                          onClick={(e) => e.stopPropagation()}
                          className="transition-transform duration-300 group-hover:translate-y-[-1px]"
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
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="px-4 py-2 text-sm font-medium rounded-lg border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-all duration-300"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
                </div>
              </Card>
              );
            })}
          </div>
        )}
      </div>
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/40 backdrop-blur-sm animate-fade-in"
          onClick={handleClose}
        >
          <div
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative w-[90%] max-w-2xl rounded-2xl border border-white/10 bg-surface p-6 shadow-2xl transform transition-all duration-300 ease-out animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="project-modal-title" className="text-2xl font-bold text-ink">
              {selectedProject.title}
            </h2>

            <div className="mt-4 grid gap-4 text-sm text-muted md:grid-cols-2">
              <p>
                <span className="font-bold text-ink">Problem:</span>{" "}
                {selectedProject.problem}
              </p>
              <p>
                <span className="font-bold text-ink">Solution:</span>{" "}
                {selectedProject.solution}
              </p>
            </div>

            <p className="mt-4 text-sm text-muted">
              <span className="font-bold text-ink">Role:</span>{" "}
              {selectedProject.role}
            </p>

            <p className="mt-3 text-sm text-muted">
              <span className="font-bold text-ink">Impact:</span>{" "}
              {selectedProject.impact}
            </p>

            <dl className="mt-5 grid gap-3 sm:grid-cols-3">
              {(selectedProject.metrics ?? []).map((metric: any) => (
                <MetricCard key={metric.label} metric={metric} />
              ))}
            </dl>

            <div className="mt-5 flex flex-wrap gap-2">
              {(selectedProject.stack ?? []).map((item: string) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              {selectedProject.repoUrl && (
                <ButtonLink href={selectedProject.repoUrl} target="_blank">
                  <GitBranch size={16} />
                  Repo
                </ButtonLink>
              )}
              {selectedProject.demoUrl && (
                <ButtonLink href={selectedProject.demoUrl} target="_blank">
                  <ExternalLink size={16} />
                  Live
                </ButtonLink>
              )}
            </div>

            <button
              className="mt-6 text-sm text-accent underline"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
