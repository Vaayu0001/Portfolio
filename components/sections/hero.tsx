"use client";

import { ArrowDown, GitBranch, Link } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { profile } from "@/content/profile";
import { useEffect, useState } from "react";

export function Hero() {
  const headline = "Full-Stack Software Engineer specializing in scalable web architectures, algorithmic problem-solving, and AI-driven applications.";

  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleMouse = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  const maxScroll = 500; // slower, smoother fade
  const progress = Math.min(scrollY / maxScroll, 1);
  const opacity = 1 - progress * 0.5; // 1 -> 0.5
  const translateY = progress * 60; // 0 -> 60px
  const scale = 1 - progress * 0.03; // 1 -> 0.97 subtle depth
  const blur = progress * 2; // 0px -> 2px
  const imageTranslateY = progress * 30; // slower than text

  // Magnetic hover and reactive shadow calculations
  const centerX = (typeof window !== "undefined" ? window.innerWidth : 0) * 0.75;
  const centerY = (typeof window !== "undefined" ? window.innerHeight : 0) * 0.4;

  // Magnetic hover (very subtle)
  const magneticX = (mouse.x - centerX) / 40;
  const magneticY = (mouse.y - centerY) / 40;

  // Shadow reacts to cursor
  const shadowX = (mouse.x - centerX) / 20;
  const shadowY = (mouse.y - centerY) / 20;

  // Subtle click sound feedback
  const playClick = () => {
    const audio = new Audio("/click.mp3");
    audio.volume = 0.05;
    audio.play().catch(() => {});
  };

  // Cinematic text reveal keyframes for the name
  const revealStyle = `
@keyframes textShimmer {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
`;

  return (
    <section className="relative min-h-[92vh] overflow-hidden pb-16 pt-8 md:pt-10">
      {/* Glass + gradient + cursor light */}
      <div
        className="pointer-events-none absolute right-8 top-24 z-0 h-[380px] w-[380px] rounded-full backdrop-blur-2xl opacity-40 md:right-20 md:top-20 md:h-[440px] md:w-[440px]"
        style={{
          background:
            `radial-gradient(60% 60% at 50% 50%, 
              rgba(${56 + progress * 80},${189 - progress * 60},${248 - progress * 40},0.25) 0%, 
              rgba(${168 - progress * 50},${85 + progress * 70},${247 - progress * 30},0.20) 40%, 
              rgba(0,0,0,0) 70%)`
        }}
      />
      <div
        className="pointer-events-none absolute z-0 h-[300px] w-[300px] rounded-full opacity-20 blur-3xl"
        style={{
          left: mouse.x - 150,
          top: mouse.y - 150,
          background: "radial-gradient(circle, rgba(99,102,241,0.4), transparent 70%)"
        }}
      />
      <Image
        alt="Adarsh Singh professional portrait"
        className="pointer-events-auto absolute right-12 top-24 z-10 h-[340px] w-[340px] rounded-full object-cover object-center shadow-2xl ring-1 ring-white/10 transition-transform duration-500 ease-out hover:scale-[1.05] md:right-20 md:top-20 md:h-[400px] md:w-[400px] animate-float"
        height={400}
        width={400}
        priority
        src="/images/adarsh-profile.jpg"
        style={{
          transform: `translateY(${imageTranslateY + magneticY}px) translateX(${magneticX}px)`,
          boxShadow: `${shadowX}px ${shadowY}px 40px rgba(0,0,0,0.25)`
        }}
      />
      <div className="surface-grid absolute inset-0 z-0 opacity-60" />
      <div className="section-shell relative z-10">
        <style>{revealStyle}</style>
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
          <div
            className="max-w-5xl pr-[420px] md:pr-[460px]"
            style={{
              opacity,
              transform: `translateY(${translateY}px) scale(${scale})`,
              filter: `blur(${blur}px)`,
              transition: "opacity 0.15s linear, transform 0.15s linear, filter 0.15s linear",
              willChange: "opacity, transform, filter"
            }}
          >
            <p className="text-sm font-extrabold uppercase text-accent">
              Portfolio
            </p>
            <h1 className="mt-6 font-display leading-tight tracking-tight text-[clamp(2.5rem,6vw,5rem)] max-w-[14ch] [text-wrap:balance] animate-fade-in-up [animation-delay:100ms]">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, 
                    hsl(${180 + progress * 40}, 60%, 40%), 
                    hsl(${220 + progress * 60}, 70%, 55%), 
                    hsl(${180 + progress * 40}, 60%, 40%)
                  )`,
                  backgroundSize: "200% 100%",
                  animation: "textShimmer 4s ease-in-out infinite"
                }}
              >
                {profile.fullName}
              </span>
            </h1>
            <p className="mt-4 text-sm font-semibold text-accent uppercase tracking-widest">
              Full-Stack + AI Systems Engineer
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted md:text-xl">
              Building high-performance, scalable systems with a focus on real-world impact, intelligent automation, and clean architecture.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-muted">
              Open to internships, high-impact collaborations, and software engineering opportunities.
            </p>
          </div>
          {/* CTA (ultra premium, no fade) */}
          <div className="mt-10 relative z-20">
            {/* Gradient ring */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500/30 via-cyan-400/20 to-violet-500/30 opacity-60 blur-sm" />

            {/* Glass container */}
            <div
              className="relative flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-2 shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300"
              style={{
                transform: `translate(${magneticX / 2}px, ${magneticY / 2}px)`,
                background: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, rgba(99,102,241,0.15), rgba(255,255,255,0.05) 40%)`
              }}
            >
              {/* Primary CTA */}
              <ButtonLink
                href="/resume.pdf"
                rel="noreferrer"
                target="_blank"
                variant="primary"
                className="group relative overflow-hidden rounded-xl px-5 py-2.5 transition-all duration-300 ease-out hover:-translate-y-[1px] hover:shadow-xl animate-pulse-subtle"
                onClick={playClick}
              >
                <span className="absolute inset-0 overflow-hidden rounded-xl">
                  <span className="absolute h-20 w-20 scale-0 rounded-full bg-white/20 opacity-0 transition-all duration-500 group-active:scale-150 group-active:opacity-100" />
                </span>
                <Link aria-hidden="true" size={18} />
                View Resume
              </ButtonLink>

              {/* Secondary CTAs */}
              <ButtonLink
                eventPayload={{ destination: "github" }}
                href={profile.github}
                rel="noreferrer"
                target="_blank"
                className="group rounded-xl px-4 py-2 transition-all duration-300 ease-out hover:-translate-y-[1px] hover:bg-white/10"
              >
                <GitBranch aria-hidden="true" size={18} />
                GitHub
              </ButtonLink>

              <ButtonLink
                eventPayload={{ destination: "linkedin" }}
                href={profile.linkedin}
                rel="noreferrer"
                target="_blank"
                className="group rounded-xl px-4 py-2 transition-all duration-300 ease-out hover:-translate-y-[1px] hover:bg-white/10"
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
