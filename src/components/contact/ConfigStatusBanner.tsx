import { StatusMessage } from "@/components/ui/StatusMessage";

/**
 * Founder/developer-only notice shown when the lead provider isn't configured.
 * Rendered only outside production so public visitors never see it.
 */
export function ConfigStatusBanner() {
  if (process.env.NODE_ENV === "production") return null;
  const configured = process.env.LEAD_PROVIDER === "email";
  if (configured) return null;

  return (
    <StatusMessage status="info" title="Developer note: contact form not production-ready">
      No lead-delivery provider is configured, so submissions will not be delivered. Set{" "}
      <code>LEAD_PROVIDER=email</code> plus <code>LEAD_EMAIL_API_KEY</code>,{" "}
      <code>LEAD_EMAIL_FROM</code>, and <code>LEAD_EMAIL_TO</code> in <code>.env.local</code> to
      enable delivery. This banner is hidden in production.
    </StatusMessage>
  );
}
