/**
 * Privacy-conscious analytics seam. No analytics tool is wired up by default,
 * so trackEvent is a no-op until NEXT_PUBLIC_ANALYTICS_DOMAIN is configured and
 * a provider script is added. We NEVER pass personal form values as event data.
 */
export type AnalyticsEvent =
  | "cta_clicked"
  | "contact_form_opened"
  | "contact_form_submitted"
  | "service_page_visited"
  | "booking_link_clicked"
  | "portfolio_project_opened";

export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window === "undefined") return;
  if (!process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN) return;

  // Example seam for a privacy-conscious analytics provider (e.g. Plausible).
  // Only the event NAME is sent — never form field values or PII.
  const w = window as unknown as { plausible?: (name: string) => void };
  if (typeof w.plausible === "function") {
    w.plausible(event);
  }
}
