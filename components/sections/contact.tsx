import { GitBranch, Link } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <section className="border-y border-line bg-surface py-24" id="contact">
      <div className="section-shell grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <SectionHeading
          description="Use the links below for GitHub, LinkedIn, or direct email once the resume email placeholder is replaced."
          eyebrow="Contact"
          title="Open for relevant software opportunities."
        />
        <div className="flex flex-wrap gap-3">
          <CopyEmailButton email={profile.email} />
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
    </section>
  );
}
