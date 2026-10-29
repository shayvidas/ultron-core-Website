import { Linkedin } from "lucide-react";
import type { Founder } from "@/types";

/**
 * HONESTY RULE: no fabricated photos or bios. A null portrait renders a
 * branded typographic avatar; a null bio renders a clearly-marked "pending"
 * note rather than invented text. LinkedIn renders only when set.
 */
export function FounderCard({ founder }: { founder: Founder }) {
  return (
    <article className="surface-card flex flex-col gap-5 p-7">
      <div className="flex items-center gap-4">
        {founder.portrait ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={founder.portrait}
            alt={founder.name}
            className="h-16 w-16 rounded-full object-cover"
          />
        ) : (
          <span
            className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-gradient-to-br from-[rgba(229,57,53,0.22)] to-[rgba(249,115,22,0.18)] font-display text-xl font-semibold text-[var(--color-text)]"
            aria-hidden="true"
          >
            {founder.initials}
          </span>
        )}
        <div>
          <h3 className="text-h3">{founder.name}</h3>
          <p className="text-sm text-[var(--color-cyan)]">{founder.title}</p>
        </div>
      </div>

      {founder.bio ? (
        <p className="text-sm leading-relaxed text-[var(--color-text-dim)]">{founder.bio}</p>
      ) : (
        <p className="rounded-[var(--radius-sm)] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-bg-2)] p-4 text-sm text-[var(--color-text-dim)]">
          Full profile coming soon.
        </p>
      )}

      {founder.linkedin ? (
        <a
          href={founder.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[var(--color-cyan)] hover:text-[var(--color-cyan-soft)]"
        >
          <Linkedin className="h-4 w-4" aria-hidden="true" />
          Connect on LinkedIn
        </a>
      ) : null}
    </article>
  );
}
