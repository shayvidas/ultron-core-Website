import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";

/**
 * "Tool fatigue" hook — speaks directly to the exhaustion of endless AI tools
 * and empty promises, then pivots to the differentiator: we don't sell another
 * tool, we make the ones you have actually work.
 */
const tiredOf = [
  "Tired of AI videos promising yet another tool?",
  "Lost in a sea of apps that all promise “better”?",
  "Everyone's selling the future. Nobody's fixing your Tuesday.",
];

export function ToolFatigue() {
  return (
    <Section aria-labelledby="fatigue-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-red-bright)]">
            Let&apos;s be honest
          </span>

          <h2 id="fatigue-heading" className="text-h1 mt-5">
            Aren&apos;t You <span className="mark-swipe text-white">Exhausted</span> by the AI Hype?
          </h2>

          <ul className="mt-10 flex flex-col gap-3 text-left">
            {tiredOf.map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
              >
                <span
                  className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(229,57,53,0.14)] text-sm font-bold text-[var(--color-red-bright)]"
                  aria-hidden="true"
                >
                  ?
                </span>
                <span className="text-lg text-[var(--color-text)]">{line}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-[var(--radius-lg)] border border-[var(--color-red-border)] bg-[rgba(229,57,53,0.06)] p-8">
            <p className="text-h3 font-semibold">
              We don&apos;t sell you another tool.
            </p>
            <p className="text-lead mt-3">
              We make the ones you already pay for{" "}
              <span className="font-semibold text-[var(--color-text)]">actually work together</span>{" "}
              — and quietly do the repetitive work for you. No hype. No shelf-ware. Just hours back.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
