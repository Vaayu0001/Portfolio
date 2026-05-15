"use client";

import { ArrowDown, GitBranch, Link } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { profile } from "@/content/profile";
import { useEffect, useState } from "react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const maxScroll = 520;
  const progress = Math.min(scrollY / maxScroll, 1);
  const opacity = 1 - progress * 0.35;
  const translateY = progress * 34;

  return (
    <section className="relative min-h-[92vh] overflow-hidden pb-16 pt-8 md:pt-10">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 88% 10%, rgba(138,106,47,0.14) 0%, rgba(138,106,47,0.04) 38%, rgba(0,0,0,0) 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-25" style={{
        backgroundImage:
          "linear-gradient(rgba(97,92,85,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(97,92,85,0.12) 1px, transparent 1px)",
        backgroundSize: "52px 52px",
      }} />

      <Image
        alt="Adarsh Singh professional portrait"
        className="pointer-events-auto absolute right-6 top-24 z-10 h-[280px] w-[280px] rounded-full border border-[#d9d0c0] object-cover object-center shadow-[0_24px_52px_rgba(35,30,24,0.20)] transition-transform duration-500 ease-out hover:scale-[1.03] sm:right-10 sm:h-[320px] sm:w-[320px] md:right-14 md:top-20 md:h-[380px] md:w-[380px]"
        height={400}
        width={400}
        priority
        src="/images/adarsh-profile.jpg"
        style={{
          transform: `translateY(${progress * 22}px)`,
        }}
      />

      <div className="section-shell relative z-10">
        <nav
          aria-label="Primary navigation"
          className="flex items-center justify-end py-4"
        >
          <div className="hidden items-center gap-5 text-sm font-semibold text-muted md:flex">
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
          <div
            className="max-w-5xl pr-0 md:pr-[420px]"
            style={{
              opacity,
              transform: `translateY(${translateY}px)`,
              transition: "opacity 0.2s linear, transform 0.2s linear",
            }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Portfolio
            </p>
            <h1 className="mt-6 max-w-[14ch] font-display text-[clamp(2.6rem,6vw,5rem)] leading-tight tracking-tight text-ink [text-wrap:balance] animate-fade-in-up [animation-delay:100ms]">
              {profile.fullName}
            </h1>
            <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-accent">
              Full-Stack + AI Systems Engineer
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted md:text-xl">
              Building high-performance, scalable systems with a focus on real-world impact, intelligent automation, and clean architecture.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-muted">
              Open to internships, high-impact collaborations, and software engineering opportunities.
            </p>
          </div>

          <div className="mt-10 relative z-20">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#dac59f]/55 via-[#f0e2ca]/45 to-[#d5bb8f]/55 blur-sm" />
            <div className="relative flex flex-wrap items-center gap-3 rounded-2xl border border-[#d7ccba] bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(244,238,228,0.88))] p-2 shadow-[0_18px_40px_rgba(32,27,22,0.16)]">
              <ButtonLink
                href="/ADARSH_RESUME.pdf"
                rel="noreferrer"
                target="_blank"
                variant="primary"
                className="px-5 py-2.5"
              >
                <Link aria-hidden="true" size={18} />
                View Resume
              </ButtonLink>

              <ButtonLink
                eventPayload={{ destination: "github" }}
                href={profile.github}
                rel="noreferrer"
                target="_blank"
                className="px-4 py-2"
              >
                <GitBranch aria-hidden="true" size={18} />
                GitHub
              </ButtonLink>

              <ButtonLink
                eventPayload={{ destination: "linkedin" }}
                href={profile.linkedin}
                rel="noreferrer"
                target="_blank"
                className="px-4 py-2"
              >
                <Link aria-hidden="true" size={18} />
                LinkedIn
              </ButtonLink>
            </div>
          </div>
        </div>

        <a
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-accent"
          href="#about"
        >
          <ArrowDown aria-hidden="true" size={16} />
          View selected work
        </a>
      </div>
    </section>
  );
}
