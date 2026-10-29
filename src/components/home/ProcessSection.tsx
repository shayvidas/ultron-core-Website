import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ProcessTimeline } from "@/components/interactive/ProcessTimeline";
import { processSteps } from "@/content/process";

export function ProcessSection() {
  return (
    <Section aria-labelledby="process-heading">
      <Container>
        <SectionHeading
          id="process-heading"
          eyebrow="Our process"
          title="From First Conversation to Working Solution."
        />
        <ProcessTimeline steps={processSteps} />
      </Container>
    </Section>
  );
}
