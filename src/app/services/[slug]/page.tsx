import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo/metadata";
import { services, getService } from "@/content/services";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Disclosure } from "@/components/ui/Disclosure";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { ProcessTimeline } from "@/components/interactive/ProcessTimeline";
import { FAQAccordion } from "@/components/interactive/FAQAccordion";
import { LeadCTA } from "@/components/contact/LeadCTA";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return buildMetadata({ title: "Service" });
  return buildMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <Section className="pb-0">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.nav },
            ]}
          />
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-bg-2)] text-[var(--color-cyan)]">
                <ServiceIcon name={service.icon} className="h-7 w-7" />
              </span>
              <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-cyan)]">
                {service.eyebrow}
              </span>
              <h1 className="text-h1 mt-3">{service.title}</h1>
              <p className="text-lead mt-5 max-w-2xl">{service.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" size="lg">
                  {service.cta}
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  All Services
                </Button>
              </div>
            </div>

            {/* The problem */}
            <Card className="bg-[var(--color-bg-2)]">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-text-dim)]">
                The problem
              </h2>
              <p className="mt-3 text-sm leading-relaxed">{service.problem}</p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section aria-labelledby="capabilities-heading">
        <Container>
          <SectionHeading
            id="capabilities-heading"
            eyebrow="What we do"
            title="Capabilities"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {service.capabilities.map((c) => (
              <Card key={c.title}>
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-dim)]">{c.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Scenarios */}
      <Section tone="muted" aria-labelledby="scenarios-heading">
        <Container>
          <SectionHeading
            id="scenarios-heading"
            eyebrow="In practice"
            title="Example Business Scenarios"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {service.scenarios.map((s, i) => (
              <Card key={s.title}>
                <span className="font-display text-sm font-semibold text-[var(--color-cyan)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-dim)]">{s.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section aria-labelledby="process-heading">
        <Container>
          <SectionHeading
            id="process-heading"
            eyebrow="How we work"
            title="A Typical Implementation"
          />
          <ProcessTimeline steps={service.process} />
        </Container>
      </Section>

      {/* Includes + Technical considerations */}
      <Section tone="muted" aria-labelledby="includes-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading id="includes-heading" eyebrow="Deliverables" title="What's Included" />
              <ul className="mt-8 flex flex-col gap-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-mint)]" aria-hidden="true" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <SectionHeading
                eyebrow="For the technically minded"
                title="Technical Considerations"
              />
              <p className="text-sm text-[var(--color-text-dim)]">
                The benefits above matter most. If you want the engineering detail, it&apos;s here.
              </p>
              <Disclosure summary="Show technical considerations">
                <ul className="flex flex-col gap-2.5">
                  {service.techNotes.map((note) => (
                    <li key={note} className="flex items-start gap-2.5 text-[var(--color-text-dim)]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-cyan)]" aria-hidden="true" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </Disclosure>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section aria-labelledby="service-faq-heading">
        <Container className="max-w-3xl">
          <SectionHeading id="service-faq-heading" eyebrow="FAQ" title="Common Questions" align="center" />
          <div className="mt-10">
            <FAQAccordion items={service.faqs} idBase={`${service.slug}-faq`} />
          </div>
        </Container>
      </Section>

      {/* Related services */}
      {related.length > 0 ? (
        <Section tone="muted" aria-labelledby="related-heading">
          <Container>
            <SectionHeading id="related-heading" eyebrow="Explore more" title="Related Services" />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="surface-card group flex items-center justify-between gap-4 p-5 transition-colors hover:border-[var(--color-border-strong)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-2)] text-[var(--color-cyan)]">
                      <ServiceIcon name={r.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium">{r.nav}</span>
                  </div>
                  <ArrowRight
                    className="h-4 w-4 text-[var(--color-text-dim)] transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <LeadCTA heading="Ready to Talk?" text={`Tell us about your situation and we'll suggest a practical first step for ${service.nav.toLowerCase()}.`} />
    </>
  );
}
