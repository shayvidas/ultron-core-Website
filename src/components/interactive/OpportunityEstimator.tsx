"use client";

import { useState } from "react";
import { estimate, type EstimateInput } from "@/lib/utils/estimate";
import { Card } from "@/components/ui/Card";

const defaults: EstimateInput = {
  employees: 3,
  minutesPerTask: 10,
  occurrencesPerWeek: 20,
  removablePercent: 60,
};

function NumberInput({
  label,
  name,
  value,
  min,
  max,
  suffix,
  onChange,
}: {
  label: string;
  name: string;
  value: number;
  min: number;
  max: number;
  suffix?: string;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
        {suffix ? <span className="ml-1 text-xs text-[var(--color-text-dim)]">({suffix})</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        value={Number.isNaN(value) ? "" : value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-2)] px-4 py-3 focus:border-[var(--color-cyan)] focus:outline-none"
      />
    </div>
  );
}

/**
 * Automation Opportunity Estimator. Pure, transparent arithmetic from
 * lib/utils/estimate (unit-tested). Illustrative only — no monetary values,
 * no ROI claims. Results update in a polite live region.
 */
export function OpportunityEstimator() {
  const [input, setInput] = useState<EstimateInput>(defaults);
  const result = estimate(input);
  const set = (k: keyof EstimateInput) => (v: number) => setInput((prev) => ({ ...prev, [k]: v }));

  return (
    <Card className="bg-[var(--color-bg-2)]">
      <h3 className="text-h3">Automation Opportunity Estimator</h3>
      <p className="mt-2 text-sm text-[var(--color-text-dim)]">
        A rough sense of how much time a repetitive task costs — and how much could potentially be
        freed up.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <NumberInput label="People doing the task" name="employees" value={input.employees} min={0} max={1000} onChange={set("employees")} />
        <NumberInput label="Minutes per task" name="minutesPerTask" value={input.minutesPerTask} min={0} max={480} suffix="minutes" onChange={set("minutesPerTask")} />
        <NumberInput label="Times per week, each person" name="occurrencesPerWeek" value={input.occurrencesPerWeek} min={0} max={1000} onChange={set("occurrencesPerWeek")} />
        <NumberInput label="Share that could be automated" name="removablePercent" value={input.removablePercent} min={0} max={100} suffix="%" onChange={set("removablePercent")} />
      </div>

      <div
        className="mt-6 grid gap-4 sm:grid-cols-3"
        aria-live="polite"
        aria-atomic="true"
      >
        <Metric label="Hours spent / week" value={result.weeklyHours} />
        <Metric label="Hours potentially saved / week" value={result.weeklyHoursSaved} highlight />
        <Metric label="Hours potentially saved / month" value={result.monthlyHoursSaved} highlight />
      </div>

      <p className="mt-5 text-xs text-[var(--color-text-dim)]">
        Illustrative estimate only. Actual savings depend on process design, implementation, and
        operating conditions. This does not represent guaranteed results or monetary savings.
      </p>
    </Card>
  );
}

function Metric({ label, value, highlight }: { label: string; value: number; highlight?: boolean }) {
  return (
    <div className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
      <p className="text-xs text-[var(--color-text-dim)]">{label}</p>
      <p className={`mt-1 font-display text-2xl font-semibold ${highlight ? "text-[var(--color-cyan)]" : ""}`}>
        {value}
      </p>
    </div>
  );
}
