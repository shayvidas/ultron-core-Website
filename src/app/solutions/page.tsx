import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RecommendationQuiz } from "@/components/interactive/RecommendationQuiz";
import { LeadCTA } from "@/components/contact/LeadCTA";
import { solutions } from "@/content/solutions";

export const metadata: Metadata = buildMetadata({
  title: "Solutions",
  description:
    "Solutions organized by the problem you're facing: small business operations, engineering teams, and customer operations.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <Section className="pb-0">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solutions" }]} />
          <div className="mt-6">
            <SectionHeading
              as="h1"
              eyebrow="Solutions"
              title="Organized Around Your Problem, Not Our Tools."
              subtitle="Start from where you are. Each path maps common problems to the services that solve them."
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="surface-card group flex flex-col gap-4 p-7 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] motion-reduce:hover:translate-y-0"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-cyan)]">
                  {solution.eyebrow}
                </span>
                <h2 className="text-h3">{solution.nav}</h2>
                <p className="text-sm text-[var(--color-text-dim)]">{solution.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-[var(--color-cyan)]">
                  Explore
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted" aria-labelledby="quiz-heading">
        <Container className="max-w-3xl">
          <SectionHeading
            id="quiz-heading"
            eyebrow="Not sure where to start?"
            title="Find a Starting Point in One Click."
            align="center"
          />
          <div className="mt-10">
            <RecommendationQuiz />
          </div>
        </Container>
      </Section>

      <LeadCTA />
    </>
  );
}
