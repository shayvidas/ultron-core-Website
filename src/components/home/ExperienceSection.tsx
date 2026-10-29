import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { experienceCompanies, experienceIntro } from "@/content/company";

/**
 * "The experience behind Ultron Core" — founder career background, positioned
 * near the hero as an early credibility moment.
 *
 * HONESTY: these are PRIOR EMPLOYERS of the founders, shown as experience, NOT
 * Ultron Core clients. Company names are rendered as styled TEXT treatments
 * (no third-party trademarked logos) to avoid implying a client relationship.
 */
export function ExperienceSection() {
  return (
    <Section tone="muted" aria-labelledby="experience-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-red-bright)]">
            The experience behind Ultron Core
          </span>
          <h2 id="experience-heading" className="text-h2 mt-4">
            We&apos;ve Built and Led Engineering at Companies You Know.
          </h2>
          <p className="text-lead mx-auto mt-4">{experienceIntro}</p>
        </div>

        {/* Styled text "logo" band — not reproductions of trademarked logos. */}
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {experienceCompanies.map((c) => (
            <li
              key={c.name}
              className="group flex flex-col items-center justify-center gap-1 rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-6 text-center transition-colors hover:border-[var(--color-red-border)]"
            >
              <span className="font-display text-lg font-bold tracking-tight text-[var(--color-text)]">
                {c.name}
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--color-text-dim)]">
                {c.sector}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-xs text-[var(--color-text-dim)]">
          Companies listed reflect the founders&apos; prior professional experience — not Ultron
          Core client engagements.
        </p>
      </Container>
    </Section>
  );
}
