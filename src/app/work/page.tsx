import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StatusMessage } from "@/components/ui/StatusMessage";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { LeadCTA } from "@/components/contact/LeadCTA";
import { projects } from "@/content/projects";

export const metadata: Metadata = buildMetadata({
  title: "Our Work",
  description:
    "Concept and internal demonstration projects from Ultron Core. We'll publish case studies as real client projects are completed.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <Section className="pb-0">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Our Work" }]} />
          <div className="mt-6">
            <SectionHeading
              as="h1"
              eyebrow="Our work"
              title="Solutions in Action."
              subtitle="Ultron Core is a new company. What you see here is honest about that: clearly labeled concept and internal demonstration projects — never client work presented as our own."
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <StatusMessage status="info" title="About these examples">
            These are demonstrations of the kind of work we build, not completed client
            engagements. As we deliver real projects — and clients approve public presentation — we
            will add full case studies with the problem, approach, implementation, and verified
            results.
          </StatusMessage>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      <LeadCTA
        heading="Want to Be Our Next Case Study?"
        text="We're taking on early projects now. If you have a problem worth solving, let's talk."
      />
    </>
  );
}
