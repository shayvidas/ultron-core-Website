import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo/metadata";
import { solutions, getSolution } from "@/content/solutions";
import { getService } from "@/content/services";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { FAQAccordion } from "@/components/interactive/FAQAccordion";
import { OpportunityEstimator } from "@/components/interactive/OpportunityEstimator";
import { LeadCTA } from "@/components/contact/LeadCTA";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return buildMetadata({ title: "Solution" });
  return buildMetadata({
    title: solution.title,
    description: solution.summary,
    path: `/solutions/${solution.slug}`,
  });
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const related = solution.relatedServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: solution.title, path: `/solutions/${solution.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Section className="pb-0">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Solutions", href: "/solutions" },
              { label: solution.nav },
            ]}
          />
          <div className="mt-8">
            <SectionHeading
              as="h1"
              eyebrow={solution.eyebrow}
              title={solution.title}
              subtitle={solution.summary}
            />
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Talk to Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Problems */}
      <Section aria-labelledby="problems-heading">
        <Container>
          <SectionHeading id="problems-heading" eyebrow="Sound familiar?" title="Common Problems" />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {solution.problems.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-2)] p-4"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-violet)]" aria-hidden="true" />
                <span className="text-sm">{p}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* What we do */}
      <Section tone="muted" aria-labelledby="items-heading">
        <Container>
          <SectionHeading id="items-heading" eyebrow="What we do" title="How We Help" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solution.items.map((item) => (
              <Card key={item.title}>
                <Check className="h-5 w-5 text-[var(--color-mint)]" aria-hidden="true" />
                <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-dim)]">{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Estimator on the small-business solution */}
      {solution.slug === "small-business" ? (
        <Section aria-labelledby="estimator-heading">
          <Container className="max-w-3xl">
            <SectionHeading
              id="estimator-heading"
              eyebrow="Rough idea"
              title="What Could Automation Free Up?"
              align="center"
            />
            <div className="mt-10">
              <OpportunityEstimator />
            </div>
          </Container>
        </Section>
      ) : null}

      {/* Related services */}
      {related.length > 0 ? (
        <Section tone={solution.slug === "small-business" ? "muted" : "default"} aria-labelledby="related-heading">
          <Container>
            <SectionHeading id="related-heading" eyebrow="The services behind this" title="Related Services" />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="surface-card group flex flex-col gap-3 p-6 transition-colors hover:border-[var(--color-border-strong)]"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-2)] text-[var(--color-cyan)]">
                    <ServiceIcon name={r.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold">{r.nav}</h3>
                  <p className="text-sm text-[var(--color-text-dim)]">{r.cardDescription}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-[var(--color-cyan)]">
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {/* FAQ */}
      <Section tone={related.length > 0 && solution.slug !== "small-business" ? "muted" : "default"} aria-labelledby="solution-faq-heading">
        <Container className="max-w-3xl">
          <SectionHeading id="solution-faq-heading" eyebrow="FAQ" title="Common Questions" align="center" />
          <div className="mt-10">
            <FAQAccordion items={solution.faqs} idBase={`${solution.slug}-faq`} />
          </div>
        </Container>
      </Section>

      <LeadCTA />
    </>
  );
}
