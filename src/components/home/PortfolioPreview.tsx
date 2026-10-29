import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/content/projects";

export function PortfolioPreview() {
  return (
    <Section aria-labelledby="portfolio-heading">
      <Container>
        <SectionHeading
          id="portfolio-heading"
          eyebrow="Selected work"
          title="Solutions in Action."
          subtitle="Ultron Core is a new company, so these are clearly labeled concept and internal demonstration projects — not client work. We'll add case studies as real projects are completed and clients approve."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/work" variant="secondary">
            See Our Work
          </Button>
        </div>
      </Container>
    </Section>
  );
}
