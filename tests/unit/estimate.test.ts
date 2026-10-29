import { describe, it, expect } from "vitest";
import { estimate } from "@/lib/utils/estimate";

describe("estimate", () => {
  it("computes weekly hours from the inputs", () => {
    // 2 people * 15 min * 10/week = 300 min/week = 5 hours
    const r = estimate({ employees: 2, minutesPerTask: 15, occurrencesPerWeek: 10, removablePercent: 0 });
    expect(r.weeklyHours).toBe(5);
    expect(r.weeklyHoursSaved).toBe(0);
  });

  it("applies the removable percentage to savings", () => {
    const r = estimate({ employees: 2, minutesPerTask: 15, occurrencesPerWeek: 10, removablePercent: 50 });
    expect(r.weeklyHours).toBe(5);
    expect(r.weeklyHoursSaved).toBe(2.5);
  });

  it("scales weekly savings to a month (x4.33)", () => {
    const r = estimate({ employees: 1, minutesPerTask: 60, occurrencesPerWeek: 1, removablePercent: 100 });
    expect(r.weeklyHoursSaved).toBe(1);
    expect(r.monthlyHoursSaved).toBe(4.3);
  });

  it("clamps negative and out-of-range inputs to zero/100", () => {
    const r = estimate({ employees: -5, minutesPerTask: 10, occurrencesPerWeek: 10, removablePercent: 150 });
    expect(r.weeklyHours).toBe(0);
    expect(r.weeklyHoursSaved).toBe(0);
  });

  it("handles NaN inputs gracefully", () => {
    const r = estimate({ employees: NaN, minutesPerTask: NaN, occurrencesPerWeek: NaN, removablePercent: NaN });
    expect(r.weeklyHours).toBe(0);
    expect(r.monthlyHoursSaved).toBe(0);
  });
});
