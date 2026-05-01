import { profile } from "@/content/profile";
import type { Project } from "@/content/types";
import { resolveContent } from "@/lib/utils";

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    url: profile.siteUrl,
    sameAs: [profile.github, profile.linkedin],
    jobTitle: resolveContent(profile.headline, profile.headlineFallback),
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.fullName} Portfolio`,
    url: profile.siteUrl,
    author: {
      "@type": "Person",
      name: profile.fullName,
    },
  };
}

export function buildProjectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.solution,
    url: project.repoUrl,
    creator: {
      "@type": "Person",
      name: profile.fullName,
    },
    programmingLanguage: project.stack,
  };
}
