import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { LeadCTA } from "@/components/contact/LeadCTA";
import { services } from "@/content/services";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "AI agents, business automation, AI engineering, systems integration, web development, custom software, AI consulting, and workflow rescue. Practical, hands-on delivery.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Section className="pb-0">
        <Container>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <div className="mt-6">
            <SectionHeading
              as="h1"
              eyebrow="Services"
              title="Technology That Solves Real Problems."
              subtitle="From AI consulting to hands-on engineering, here's how we help turn ideas into useful systems. Every engagement starts with your problem, not a tool."
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="surface-card group flex flex-col gap-4 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] motion-reduce:hover:translate-y-0"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-2)] text-[var(--color-cyan)]">
                  <ServiceIcon name={service.icon} />
                </span>
                <div>
                  <h2 className="text-base font-semibold">{service.title}</h2>
                  <p className="mt-2 text-sm text-[var(--color-text-dim)]">
                    {service.cardDescription}
                  </p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-cyan)]">
                  {service.cta}
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

      <LeadCTA
        heading="Not Sure Which Service Fits?"
        text="Tell us what you're trying to improve and we'll point you to the right starting point — or tell you honestly if you don't need us yet."
      />
    </>
  );
}
