import { ArrowRight } from "lucide-react";
import { nav } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { BusyworkTransformer } from "@/components/interactive/BusyworkTransformer";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[720px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(229,57,53,0.22) 0%, rgba(249,115,22,0.1) 45%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative py-16 lg:py-24">
        <div className="animate-rise mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-red-border)] bg-[rgba(229,57,53,0.08)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-red-bright)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-red)]" aria-hidden="true" />
            AI Automation &amp; Software Engineering
          </span>

          <h1 className="text-mega mt-7 font-bold">
            Your team is doing a{" "}
            <span className="mark-swipe text-white">robot&apos;s job.</span>
          </h1>

          <p className="text-lead mx-auto mt-6 max-w-2xl">
            Every day, hours vanish into copy-paste, follow-ups, and re-typing data between tools we
            already pay for. We build the AI and automation that quietly does it for you — so your
            people do the work that actually matters.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={nav.primaryCta.href} size="lg">
              Book a Free Discovery Call
            </Button>
            <Button href="/pricing" variant="secondary" size="lg">
              See Pricing
            </Button>
          </div>

          <p className="mt-5 text-sm text-[var(--color-text-dim)]">
            Pilots from <span className="font-semibold text-[var(--color-text)]">$300</span> · most
            automations pay for themselves in weeks · no long contracts
          </p>
        </div>

        {/* Signature "busywork disappears" visual */}
        <div className="animate-rise mx-auto mt-14 max-w-4xl" style={{ animationDelay: "0.1s" }}>
          <div className="surface-card card-accent relative p-5 sm:p-8">
            <div className="mb-4 flex items-center justify-between text-xs font-medium uppercase tracking-[0.14em]">
              <span className="text-[var(--color-text-dim)]">Manual busywork</span>
              <span className="inline-flex items-center gap-1.5 text-[var(--color-red-bright)]">
                Automated <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="text-[#6ee7b7]">Done</span>
            </div>
            <BusyworkTransformer />
          </div>
        </div>
      </Container>
    </section>
  );
}
