import type { ContactInput } from "@/lib/validation/contact";

export interface SanitizedLead extends ContactInput {
  submittedAt: string;
}

export type SendResult = { ok: true } | { ok: false; error: string };

export interface LeadProvider {
  /** Whether real delivery is configured (credentials present). */
  isConfigured(): boolean;
  send(lead: SanitizedLead): Promise<SendResult>;
}

/**
 * Dev/console provider. Logs ONLY non-sensitive metadata (never the message
 * body, email, phone, or other PII) so local development has visibility
 * without leaking personal data. Reports isConfigured() = false so the API
 * treats the form as NOT production-ready.
 */
class ConsoleProvider implements LeadProvider {
  isConfigured(): boolean {
    return false;
  }
  async send(lead: SanitizedLead): Promise<SendResult> {
    // Intentionally minimal: no PII, no message content.
    console.info(
      `[lead:console] received category=${lead.category} at=${lead.submittedAt} (dev provider — not delivered)`,
    );
    return { ok: false, error: "not_configured" };
  }
}

/**
 * Generic transactional-email provider (Resend-compatible HTTP API shape).
 * Enabled when LEAD_PROVIDER=email and the required env vars are present.
 * The destination and sender are server-side only; no secrets reach the client.
 */
class EmailProvider implements LeadProvider {
  private apiKey = process.env.LEAD_EMAIL_API_KEY ?? "";
  private from = process.env.LEAD_EMAIL_FROM ?? "";
  private to = process.env.LEAD_EMAIL_TO ?? "";

  isConfigured(): boolean {
    return Boolean(this.apiKey && this.from && this.to);
  }

  async send(lead: SanitizedLead): Promise<SendResult> {
    if (!this.isConfigured()) return { ok: false, error: "not_configured" };

    const subject = `New inquiry: ${lead.category} — ${lead.company}`;
    // The notification email contains the lead details for the founders only.
    const lines = [
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      `Company: ${lead.company}`,
      lead.website ? `Website: ${lead.website}` : null,
      lead.phone ? `Phone: ${lead.phone}` : null,
      lead.companySize ? `Company size: ${lead.companySize}` : null,
      lead.budget ? `Budget: ${lead.budget}` : null,
      lead.timeline ? `Timeline: ${lead.timeline}` : null,
      lead.contactMethod ? `Preferred contact: ${lead.contactMethod}` : null,
      `Category: ${lead.category}`,
      `Submitted: ${lead.submittedAt}`,
      "",
      "Message:",
      lead.description,
    ].filter(Boolean);

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: this.from,
          to: [this.to],
          reply_to: lead.email,
          subject,
          text: lines.join("\n"),
        }),
      });

      if (!res.ok) {
        // Do not log the response body (may echo PII); log only status.
        console.error(`[lead:email] provider responded ${res.status}`);
        return { ok: false, error: "delivery_failed" };
      }
      return { ok: true };
    } catch {
      console.error("[lead:email] network error during delivery");
      return { ok: false, error: "delivery_failed" };
    }
  }
}

let cached: LeadProvider | null = null;

export function getLeadProvider(): LeadProvider {
  if (cached) return cached;
  cached = process.env.LEAD_PROVIDER === "email" ? new EmailProvider() : new ConsoleProvider();
  return cached;
}

/**
 * Future integration seams — intentionally NOT implemented for first launch.
 * Add a provider here (HubSpot, Google Sheets, Notion, n8n webhook, etc.) that
 * implements LeadProvider, and select it via LEAD_PROVIDER.
 */
