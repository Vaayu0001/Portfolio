"use client";

import { ArrowDown, GitBranch, Link } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { profile } from "@/content/profile";

export function Hero() {
  const headline = "Full-Stack Software Engineer specializing in scalable web architectures, algorithmic problem-solving, and AI-driven applications.";

  return (
    <section className="relative min-h-[92vh] overflow-hidden pb-16 pt-8 md:pt-10">
      <Image
        alt="Adarsh Singh GitHub profile image"
        className="absolute right-0 top-20 z-0 h-[520px] w-[520px] rounded-full object-cover opacity-10 grayscale md:right-20 md:top-16 md:opacity-20"
        height={520}
        priority
        src="/images/adarsh-avatar.png"
        width={520}
      />
      <div className="surface-grid absolute inset-0 z-0 opacity-60" />
      <div className="section-shell relative z-10">
        <nav
          aria-label="Primary navigation"
          className="flex items-center justify-between py-4"
        >
          <>
          </>
          <div className="hidden items-center gap-5 text-sm font-bold text-muted md:flex">
            <a className="transition hover:text-accent" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-accent" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-accent" href="#contact">
              Contact
            </a>
          </div>
        </nav>

        <div className="grid min-h-[72vh] items-center gap-12 py-16">
          <div className="reveal max-w-4xl">
            <p className="text-sm font-extrabold uppercase text-accent">
              Portfolio
            </p>
            <h1 className="mt-6 font-display text-6xl leading-none text-ink md:text-8xl">
              {profile.fullName}
            </h1>
            <p className="mt-3 text-sm font-semibold text-accent uppercase tracking-wide">
              Full-Stack + AI Systems Engineer
            </p>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-muted md:text-2xl">
              Building high-performance, scalable systems with a focus on real-world impact, intelligent automation, and clean architecture.
            </p>
            <p className="mt-5 max-w-2xl leading-8 text-muted">
              Open to internships, high-impact collaborations, and software engineering opportunities.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink
                href="/resume.pdf"
                rel="noreferrer"
                target="_blank"
                variant="secondary"
              >
                <Link aria-hidden="true" size={18} />
                View Resume
              </ButtonLink>
              <ButtonLink
                eventPayload={{ destination: "github" }}
                href={profile.github}
                rel="noreferrer"
                target="_blank"
              >
                <GitBranch aria-hidden="true" size={18} />
                GitHub
              </ButtonLink>
              <ButtonLink
                eventPayload={{ destination: "linkedin" }}
                href={profile.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                <Link aria-hidden="true" size={18} />
                LinkedIn
              </ButtonLink>
            </div>
          </div>
        </div>

        <a
          className="inline-flex items-center gap-2 text-sm font-bold text-muted transition hover:text-accent"
          href="#about"
        >
          <ArrowDown aria-hidden="true" size={16} />
          View selected work
        </a>
      </div>
    </section>
  );
}
