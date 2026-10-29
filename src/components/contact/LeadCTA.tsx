import { nav } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

interface LeadCTAProps {
  heading?: string;
  text?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

/**
 * Reusable conversion CTA. The primary button points to the configured booking
 * URL when set, otherwise to /contact (never a broken booking link).
 */
export function LeadCTA({
  heading = "Let's Build Something That Actually Makes Your Business Better.",
  text = "Tell us what takes too much time, what doesn't work well, or what you want to build. We'll help you explore practical next steps.",
  primaryLabel = nav.primaryCta.label,
  secondaryLabel = "Tell Us About Your Project",
}: LeadCTAProps) {
  return (
    <section className="py-[var(--spacing-section)]">
      <Container>
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-6 py-14 text-center sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(229,57,53,0.16), transparent 55%)",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-h2">{heading}</h2>
            <p className="text-lead mx-auto mt-5 max-w-xl">{text}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={nav.primaryCta.href} size="lg">
                {primaryLabel}
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
