import { About } from "@/components/sections/about";
import { CaseHighlights } from "@/components/sections/case-highlights";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { ExperienceEducation } from "@/components/sections/experience-education";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { projects } from "@/content/projects";
import { buildPersonSchema, buildProjectSchema, buildWebsiteSchema } from "@/lib/seo";

export default function Home() {
  const structuredData = [
    buildPersonSchema(),
    buildWebsiteSchema(),
    ...projects.map(buildProjectSchema),
  ];

  return (
    <>
      <ScrollProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CaseHighlights />
        <ExperienceEducation />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
