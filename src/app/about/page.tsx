import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { FounderCard } from "@/components/ui/FounderCard";
import { LeadCTA } from "@/components/contact/LeadCTA";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { founders, mission, philosophy, values } from "@/content/company";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Ultron Core is a founder-led AI automation and software engineering consultancy. Meet the founders and read how we work.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section className="pb-0">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <div className="mt-6">
            <SectionHeading
              as="h1"
              eyebrow="About"
              title="A Small Team That Builds, Not Just Advises."
              subtitle="Ultron Core is a founder-led consultancy. We're deliberately small, which means the people who scope your project are the people who build it."
            />
          </div>
        </Container>
      </Section>

      {/* Founders */}
      <Section aria-labelledby="founders-heading">
        <Container>
          <SectionHeading id="founders-heading" eyebrow="The founders" title="Who You'll Work With" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {founders.map((f) => (
              <FounderCard key={f.name} founder={f} />
            ))}
          </div>
        </Container>
      </Section>

      <ExperienceSection />

      {/* Mission + Philosophy */}
      <Section tone="muted" aria-labelledby="mission-heading">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <Card className="flex flex-col gap-3">
              <h2 id="mission-heading" className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-cyan)]">
                Our mission
              </h2>
              <p className="text-h3">{mission}</p>
            </Card>
            <Card className="flex flex-col gap-3">
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-cyan)]">
                Our philosophy
              </h2>
              <p className="text-h3">{philosophy}</p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section aria-labelledby="values-heading">
        <Container>
          <SectionHeading id="values-heading" eyebrow="What we value" title="How We Operate" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title}>
                <h3 className="text-base font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-dim)]">{v.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <LeadCTA
        heading="Want to Work With Us?"
        text="We'd be glad to hear what you're trying to improve. No pressure, no jargon."
      />
    </>
  );
}
