import { SectionHeading } from "@/components/ui/section-heading";

export function CaseHighlights() {
  return (
    <section className="py-24" id="case-study">
      <div className="section-shell">
        <SectionHeading
          description="A closer look at the flagship project, highlighting AI-driven automation, system design, and real-world usability."
          eyebrow="Case Study"
          title="Synthezyy demonstrates AI-powered content generation within a scalable web system."
        />
        <div className="mt-6 max-w-3xl text-muted leading-7">
          <p>
            Synthezyy is an AI-powered collaborative workspace that enhances digital whiteboarding with real-time intelligence. It enables users to draw together while using AI to convert text prompts into structured flowcharts instantly.
          </p>

          <ul className="mt-4 list-disc pl-5 space-y-2">
            <li>
              <strong>Tech Stack:</strong> Python, JavaScript
            </li>
            <li>
              <strong>Core Feature:</strong> AI-assisted flowchart generation inside a collaborative environment
            </li>
            <li>
              <strong>Impact:</strong> Reduces manual effort and improves productivity in collaborative problem-solving
            </li>
          </ul>

          <div className="mt-4 flex gap-4">
            <a
              href="https://github.com/Vaayu0001/synthezyy"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-accent underline font-semibold"
            >
              View Code →
            </a>

            <a
              href="https://synthezyy.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-accent underline font-semibold"
            >
              Live Demo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
