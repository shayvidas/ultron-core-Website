import { describe, it, expect } from "vitest";
import { contactSchema } from "@/lib/validation/contact";

const valid = {
  name: "Dana Cohen",
  email: "dana@acme.co",
  company: "Acme Co",
  category: "ai-consulting",
  description: "We spend hours copying leads between our form and CRM.",
  consent: true as const,
};

describe("contactSchema", () => {
  it("accepts a valid submission", () => {
    const r = contactSchema.safeParse(valid);
    expect(r.success).toBe(true);
  });

  it("rejects a missing/short name", () => {
    const r = contactSchema.safeParse({ ...valid, name: "D" });
    expect(r.success).toBe(false);
  });

  it("rejects an invalid email", () => {
    const r = contactSchema.safeParse({ ...valid, email: "not-an-email" });
    expect(r.success).toBe(false);
  });

  it("requires the privacy acknowledgment to be true", () => {
    const r = contactSchema.safeParse({ ...valid, consent: false });
    expect(r.success).toBe(false);
  });

  it("rejects a short description", () => {
    const r = contactSchema.safeParse({ ...valid, description: "too short" });
    expect(r.success).toBe(false);
  });

  it("rejects an unknown help category", () => {
    const r = contactSchema.safeParse({ ...valid, category: "something-else" });
    expect(r.success).toBe(false);
  });

  it("rejects a filled honeypot field", () => {
    const r = contactSchema.safeParse({ ...valid, company_url: "http://spam.example" });
    expect(r.success).toBe(false);
  });

  it("allows empty optional fields", () => {
    const r = contactSchema.safeParse({ ...valid, phone: "", website: "", budget: "" });
    expect(r.success).toBe(true);
  });
});
