import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card } from "@/components/ui/Card";
import { problemCards } from "@/content/differentiators";

export function ProblemSection() {
  return (
    <Section tone="muted" aria-labelledby="problem-heading">
      <Container>
        <SectionHeading
          id="problem-heading"
          eyebrow="The problem"
          title="You're Not Short on Tools. You're Short on Time."
          subtitle="Most businesses already have the tools they need. The money and the hours disappear in the gaps between them — copying information, chasing requests, and repeating the same tasks every single day."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problemCards.map((card) => (
            <Card key={card.title}>
              <h3 className="text-base font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-dim)]">{card.body}</p>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-center text-lg font-medium">
          We help you <span className="gradient-text">connect the pieces.</span>
        </p>
      </Container>
    </Section>
  );
}
