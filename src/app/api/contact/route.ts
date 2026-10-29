import { NextResponse, type NextRequest } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { getLeadProvider, type SanitizedLead } from "@/lib/email/provider";
import { rateLimit, sweepRateLimitStore } from "@/lib/utils/rate-limit";

export const runtime = "nodejs";

/** Collapse whitespace and strip control characters from free-text fields. */
function sanitizeText(value: string): string {
  return value
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: NextRequest) {
  // 1. Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, code: "bad_request", message: "Invalid request." },
      { status: 400 },
    );
  }

  // 2. Validate
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json(
      { ok: false, code: "validation_error", message: "Please fix the highlighted fields.", fieldErrors },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // 3. Honeypot — a filled honeypot means a bot. Return a benign 200 so the bot
  // can't distinguish it from success, but never deliver or store it.
  if (data.company_url && data.company_url.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // 4. Rate limit by IP (best-effort).
  sweepRateLimitStore();
  const limit = rateLimit(`contact:${clientIp(req)}`, 5, 60_000);
  if (!limit.allowed) {
    return NextResponse.json(
      { ok: false, code: "rate_limited", message: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  // 5. Provider configuration check.
  const provider = getLeadProvider();
  if (!provider.isConfigured()) {
    // 503: the form cannot deliver because no provider is configured. The
    // public UI shows a generic "temporarily unavailable" message; founders see
    // the dev config banner. We NEVER report success here.
    return NextResponse.json(
      {
        ok: false,
        code: "not_configured",
        message: "The contact form isn't fully configured yet.",
      },
      { status: 503 },
    );
  }

  // 6. Dispatch (with sanitized free text). No PII is logged anywhere.
  const lead: SanitizedLead = {
    ...data,
    name: sanitizeText(data.name),
    company: sanitizeText(data.company),
    description: sanitizeText(data.description),
    submittedAt: new Date().toISOString(),
  };

  const result = await provider.send(lead);
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, code: "delivery_failed", message: "We couldn't send your message. Please try again." },
      { status: 502 },
    );
  }

  // 7. Confirmed delivery only.
  return NextResponse.json({ ok: true }, { status: 200 });
}
