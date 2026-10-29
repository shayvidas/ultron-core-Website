"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { recommendationOptions } from "@/lib/utils/recommend";
import { getService } from "@/content/services";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { cn } from "@/lib/utils/cn";

/**
 * Service Recommendation selector. One question, fixed rules, no storage, no
 * personal information, no AI call. Selecting an option reveals the matching
 * service with a link.
 */
export function RecommendationQuiz() {
  const [selected, setSelected] = useState<string | null>(null);
  const service = selected
    ? getService(recommendationOptions.find((o) => o.id === selected)?.serviceSlug ?? "")
    : undefined;

  return (
    <Card className="bg-[var(--color-bg-2)]">
      <h3 className="text-h3">What would you most like to improve?</h3>
      <p className="mt-2 text-sm text-[var(--color-text-dim)]">
        Pick one and we&apos;ll point you to a good starting point. Optional — nothing is stored.
      </p>

      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="What would you most like to improve?">
        {recommendationOptions.map((opt) => (
          <button
            key={opt.id}
            type="button"
            aria-pressed={selected === opt.id}
            onClick={() => setSelected(opt.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              selected === opt.id
                ? "border-[var(--color-red)] bg-[rgba(229,57,53,0.1)] text-[var(--color-red-bright)]"
                : "border-[var(--color-border)] text-[var(--color-text-dim)] hover:text-[var(--color-text)]",
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div aria-live="polite" className="mt-6">
        {service ? (
          <div className="flex flex-col gap-4 rounded-[var(--radius)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-2)] text-[var(--color-cyan)]">
                <ServiceIcon name={service.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-dim)]">
                  A good fit
                </p>
                <p className="text-base font-semibold">{service.title}</p>
                <p className="mt-1 text-sm text-[var(--color-text-dim)]">{service.cardDescription}</p>
              </div>
            </div>
            <Button href={`/services/${service.slug}`} className="shrink-0">
              Learn more
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        ) : null}
      </div>
    </Card>
  );
}
