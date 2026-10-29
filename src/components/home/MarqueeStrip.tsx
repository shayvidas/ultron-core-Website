const items = [
  "Copy-pasting into the CRM",
  "Chasing follow-ups",
  "Re-typing invoices",
  "Updating 5 spreadsheets",
  "Forwarding the same email",
  "Manual status reports",
  "Routing inquiries by hand",
  "Reminding people to reply",
];

/**
 * Signature scrolling strip of painful manual tasks. Decorative personality —
 * duplicated once so the marquee loops seamlessly; frozen under reduced-motion.
 */
export function MarqueeStrip() {
  return (
    <div className="relative border-y border-[var(--color-border)] bg-[var(--color-bg-2)] py-4">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--color-bg-2)] to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--color-bg-2)] to-transparent"
        aria-hidden="true"
      />
      <div className="overflow-hidden" aria-label="Examples of repetitive work we automate">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <ul key={dup} className="flex items-center gap-8 pr-8" aria-hidden={dup === 1}>
              {items.map((item) => (
                <li key={item} className="flex items-center gap-8">
                  <span className="text-sm font-medium text-[var(--color-text-dim)]">{item}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-red)]" aria-hidden="true" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
