import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { isPlaceholder } from "@/lib/utils";
import { certifications } from "@/content/certifications";

export function Certifications() {
  return (
    <section className="py-24" id="certifications">
      <div className="section-shell">
        <SectionHeading
          description="Verified credentials and achievements."
          eyebrow="Credentials"
          title="Certifications and achievements"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {certifications.map((certification) => (
            <Card className="p-6" key={certification.title}>
              <Award aria-hidden="true" className="text-accent" size={28} />
              <div className="mt-5">
                <Badge>
                  {isPlaceholder(certification.title)
                    ? "Pending"
                    : certification.issuer}
                </Badge>
              </div>
              <h3 className="mt-5 text-2xl font-extrabold text-ink">
                {isPlaceholder(certification.title)
                  ? "Add certification"
                  : certification.title}
              </h3>
              <p className="mt-3 leading-7 text-muted">
                {certification.status}
              </p>

              {certification.link && (
                <a
                  href={certification.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-accent underline"
                >
                  View Certificate
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
