import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { audienceCards } from "@/content/audiences";

export function WhoWeHelp() {
  return (
    <Section tone="muted" aria-labelledby="who-heading">
      <Container>
        <SectionHeading
          id="who-heading"
          eyebrow="Who we help"
          title="Built for Businesses That Want to Move Forward."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {audienceCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="surface-card group flex flex-col gap-4 p-7 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] motion-reduce:hover:translate-y-0"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-2)] text-[var(--color-cyan)]">
                <ServiceIcon name={card.icon} />
              </span>
              <h3 className="text-h3">{card.title}</h3>
              <p className="text-sm text-[var(--color-text-dim)]">{card.body}</p>
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-cyan)]">
                See solutions
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
  );
}
