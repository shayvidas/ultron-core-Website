import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/interactive/FAQAccordion";
import { LeadCTA } from "@/components/contact/LeadCTA";
import { pricingPackages, pricingDisclaimer, pricingFaqs } from "@/content/pricing";
import { cn } from "@/lib/utils/cn";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description:
    "Transparent introductory pricing in USD. Start small with a pilot, prove value, and scale — from a free discovery call to custom engineering engagements.",
  path: "/pricing",
});

export default function PricingPage() {
  const packages = pricingPackages.filter((p) => p.visible);

  return (
    <>
      <Section className="pb-0">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
          <div className="mt-6">
            <SectionHeading
              as="h1"
              eyebrow="Pricing"
              title="Practical Technology. Transparent Starting Prices."
              subtitle="Start small, prove value, and scale when it makes sense. We offer affordable introductory packages and custom solutions designed around your business."
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.id}
                className={cn(
                  "surface-card card-accent flex flex-col gap-5 p-6",
                  pkg.featured && "ring-1 ring-[var(--color-red-border)]",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-base font-semibold">{pkg.name}</h2>
                  {pkg.featured ? <Badge tone="cyan">Most popular</Badge> : null}
                </div>

                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-3xl font-bold">{pkg.price}</span>
                    {pkg.cadence ? (
                      <span className="text-sm text-[var(--color-text-dim)]">{pkg.cadence}</span>
                    ) : null}
                  </div>
                  {pkg.promo ? (
                    <p className="mt-2 inline-block rounded-full border border-[var(--color-red-border)] bg-[rgba(229,57,53,0.08)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-red-bright)]">
                      {pkg.promo}
                    </p>
                  ) : null}
                </div>

                <p className="text-sm text-[var(--color-text-dim)]">{pkg.description}</p>

                <ul className="flex flex-col gap-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-red-bright)]" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                  {pkg.exclusions?.map((e) => (
                    <li key={e} className="flex items-start gap-2.5 text-sm text-[var(--color-text-dim)]">
                      <X className="mt-0.5 h-4 w-4 shrink-0 opacity-60" aria-hidden="true" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-2">
                  <Button
                    href={pkg.cta.href}
                    variant={pkg.featured ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {pkg.cta.label}
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-bg-2)] p-5 text-sm text-[var(--color-text-dim)]">
            {pricingDisclaimer}
          </p>
        </Container>
      </Section>

      <Section tone="muted" aria-labelledby="pricing-faq-heading">
        <Container className="max-w-3xl">
          <SectionHeading id="pricing-faq-heading" eyebrow="FAQ" title="Pricing Questions" align="center" />
          <div className="mt-10">
            <FAQAccordion items={pricingFaqs} idBase="pricing-faq" />
          </div>
        </Container>
      </Section>

      <LeadCTA
        heading="Not Sure Which Package Fits?"
        text="Book a free discovery call and we'll point you to the right starting point — or tell you honestly if you don't need us yet."
      />
    </>
  );
}
