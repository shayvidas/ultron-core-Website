"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/types";
import { cn } from "@/lib/utils/cn";

/**
 * Accessible FAQ accordion. Each item is a native button with aria-expanded /
 * aria-controls. Supports ArrowUp/ArrowDown/Home/End roving between headers.
 */
export function FAQAccordion({ items, idBase = "faq" }: { items: Faq[]; idBase?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const buttonsRef = useRef<Array<HTMLButtonElement | null>>([]);

  function onKeyDown(e: React.KeyboardEvent, index: number) {
    const last = items.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowDown") next = index === last ? 0 : index + 1;
    else if (e.key === "ArrowUp") next = index === 0 ? last : index - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      buttonsRef.current[next]?.focus();
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        const headerId = `${idBase}-header-${i}`;
        const panelId = `${idBase}-panel-${i}`;
        return (
          <div key={item.q} className="surface-card overflow-hidden p-0">
            <h3>
              <button
                ref={(el) => {
                  buttonsRef.current[i] = el;
                }}
                id={headerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium sm:px-6"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={cn("h-5 w-5 shrink-0 text-[var(--color-cyan)] transition-transform", isOpen && "rotate-180")}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
              className="border-t border-[var(--color-border)] px-5 py-4 text-sm text-[var(--color-text-dim)] sm:px-6"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
