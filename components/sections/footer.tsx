import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="bg-ink py-10 text-page">
      <div className="section-shell flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
        <p>
          {profile.fullName}
        </p>
        <div className="flex gap-5 font-bold">
          <a className="transition hover:text-accent-soft" href="#projects">
            Projects
          </a>
          <a
            className="transition hover:text-accent-soft"
            href={profile.github}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="transition hover:text-accent-soft"
            href={profile.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
