"use client";

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, UserCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { workflowScenarios } from "@/content/workflows";
import { cn } from "@/lib/utils/cn";

/**
 * Interactive Example (clearly labeled). A tablist that switches between
 * illustrative workflows. No external systems, no API calls, no real data.
 * Keyboard: ArrowLeft/Right/Home/End move between tabs.
 */
export function ScenarioExplorer() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const current = workflowScenarios[active]!;

  function onKeyDown(e: React.KeyboardEvent) {
    const last = workflowScenarios.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabsRef.current[next]?.focus();
    }
  }

  return (
    <div className="surface-card p-5 sm:p-7">
      <div className="mb-5 flex items-center gap-2">
        <Badge tone="cyan">Interactive Example</Badge>
        <span className="text-xs text-[var(--color-text-dim)]">Illustrative — not connected to live systems</span>
      </div>

      <div
        role="tablist"
        aria-label="Example workflows"
        onKeyDown={onKeyDown}
        className="flex flex-wrap gap-2"
      >
        {workflowScenarios.map((s, i) => (
          <button
            key={s.id}
            ref={(el) => {
              tabsRef.current[i] = el;
            }}
            role="tab"
            id={`scenario-tab-${s.id}`}
            aria-selected={active === i}
            aria-controls={`scenario-panel-${s.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-[var(--radius-sm)] border px-4 py-2 text-sm font-medium transition-colors",
              active === i
                ? "border-[var(--color-red)] bg-[rgba(229,57,53,0.1)] text-[var(--color-red-bright)]"
                : "border-[var(--color-border)] text-[var(--color-text-dim)] hover:text-[var(--color-text)]",
            )}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`scenario-panel-${current.id}`}
        aria-labelledby={`scenario-tab-${current.id}`}
        className="mt-6"
      >
        <div className="flex flex-col gap-1 text-sm text-[var(--color-text-dim)]">
          <span>
            <span className="font-medium text-[var(--color-text)]">Trigger:</span> {current.trigger}
          </span>
        </div>

        <ol className="mt-5 flex flex-col gap-3">
          {current.steps.map((step, i) => (
            <li
              key={`${current.id}-${i}`}
              className="flex items-start gap-3 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-2)] p-3.5"
            >
              <span
                className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-strong)] text-xs font-semibold text-[var(--color-cyan)]"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium">{step.label}</span>
                  <span className="rounded-full border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-text-dim)]">
                    {step.system}
                  </span>
                  {step.humanReview ? (
                    <span className="inline-flex items-center gap-1 text-xs text-[#6ee7b7]">
                      <UserCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      Human in the loop
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-[var(--color-text-dim)]">{step.description}</p>
              </div>
              {i < current.steps.length - 1 ? (
                <ArrowRight
                  className="mt-2 hidden h-4 w-4 shrink-0 text-[var(--color-text-dim)] sm:block"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          ))}
        </ol>

        <div className="mt-5 flex items-center gap-2 rounded-[var(--radius-sm)] border border-[rgba(52,211,153,0.3)] bg-[rgba(52,211,153,0.06)] p-3.5 text-sm">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-[#6ee7b7]" aria-hidden="true" />
          <span>
            <span className="font-medium">Outcome:</span>{" "}
            <span className="text-[var(--color-text-dim)]">{current.outcome}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
