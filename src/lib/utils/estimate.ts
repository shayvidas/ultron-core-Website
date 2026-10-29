export interface EstimateInput {
  /** Number of employees doing the task */
  employees: number;
  /** Minutes spent per task occurrence */
  minutesPerTask: number;
  /** Occurrences per week per employee */
  occurrencesPerWeek: number;
  /** Percentage (0–100) of the work potentially removable by automation */
  removablePercent: number;
}

export interface EstimateResult {
  /** Estimated hours spent on the task across the team each week */
  weeklyHours: number;
  /** Hypothetical hours potentially saved each week */
  weeklyHoursSaved: number;
  /** Hypothetical hours potentially saved each month (weekly x 4.33) */
  monthlyHoursSaved: number;
}

const WEEKS_PER_MONTH = 4.33;

/**
 * Transparent, illustrative time-savings math. Intentionally simple and
 * monetary-value-free. Negative/invalid inputs are clamped to zero.
 */
export function estimate(input: EstimateInput): EstimateResult {
  const employees = Math.max(0, input.employees || 0);
  const minutesPerTask = Math.max(0, input.minutesPerTask || 0);
  const occurrencesPerWeek = Math.max(0, input.occurrencesPerWeek || 0);
  const removable = Math.min(100, Math.max(0, input.removablePercent || 0)) / 100;

  const weeklyMinutes = employees * minutesPerTask * occurrencesPerWeek;
  const weeklyHours = weeklyMinutes / 60;
  const weeklyHoursSaved = weeklyHours * removable;
  const monthlyHoursSaved = weeklyHoursSaved * WEEKS_PER_MONTH;

  return {
    weeklyHours: round(weeklyHours),
    weeklyHoursSaved: round(weeklyHoursSaved),
    monthlyHoursSaved: round(monthlyHoursSaved),
  };
}

function round(n: number): number {
  return Math.round(n * 10) / 10;
}
