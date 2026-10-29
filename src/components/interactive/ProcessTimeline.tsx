import type { ProcessStep } from "@/types";

/** Static, server-rendered timeline. No client JS needed. */
export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="relative mt-12 grid gap-6 md:grid-cols-5">
      {/* connecting line on desktop */}
      <div
        className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-[var(--color-cyan)]/40 via-[var(--color-border-strong)] to-[var(--color-violet)]/30 md:block"
        aria-hidden="true"
      />
      {steps.map((step) => (
        <li key={step.step} className="relative flex flex-col gap-3">
          <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] font-display text-sm font-semibold text-[var(--color-cyan)]">
            {step.step}
          </span>
          <h3 className="text-base font-semibold">{step.title}</h3>
          <p className="text-sm text-[var(--color-text-dim)]">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
