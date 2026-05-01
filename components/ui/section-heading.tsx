export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-extrabold uppercase text-accent">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-muted md:text-lg">{description}</p>
    </div>
  );
}
