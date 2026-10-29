import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { getService, homepageServiceSlugs } from "@/content/services";

export function ServicesOverview() {
  const cards = homepageServiceSlugs
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <Section aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow="Services"
          title="Technology That Solves Real Problems."
          subtitle="From AI consulting to hands-on engineering, we help turn ideas into useful systems."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="surface-card group flex flex-col gap-4 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] motion-reduce:hover:translate-y-0"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-2)] text-[var(--color-cyan)]">
                <ServiceIcon name={service.icon} />
              </span>
              <div>
                <h3 className="text-base font-semibold">{service.nav}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-dim)]">
                  {service.cardDescription}
                </p>
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-cyan)]">
                Learn more
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/services" variant="secondary">
            Explore All Services
          </Button>
          <Button href="/pricing" variant="ghost">
            View Pricing
          </Button>
        </div>
      </Container>
    </Section>
  );
}
