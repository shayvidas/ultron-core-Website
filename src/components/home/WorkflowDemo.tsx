import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ScenarioExplorer } from "@/components/interactive/ScenarioExplorer";

export function WorkflowDemo() {
  return (
    <Section aria-labelledby="workflow-heading">
      <Container>
        <SectionHeading
          id="workflow-heading"
          eyebrow="How it works"
          title="See What Happens When Your Systems Start Working Together."
          subtitle="Pick an example below to see a typical automation — the trigger, the steps, the systems involved, and where a person stays in control."
        />
        <div className="mt-10">
          <ScenarioExplorer />
        </div>
      </Container>
    </Section>
  );
}
