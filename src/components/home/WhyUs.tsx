import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card } from "@/components/ui/Card";
import { differentiators } from "@/content/differentiators";

export function WhyUs() {
  return (
    <Section tone="muted" aria-labelledby="why-heading">
      <Container>
        <SectionHeading
          id="why-heading"
          eyebrow="Why Ultron Core"
          title="Experienced Engineering. Practical Thinking."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {differentiators.map((d) => (
            <Card key={d.title} className="flex gap-4">
              <span
                className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-cyan)]"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-base font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-dim)]">{d.body}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
