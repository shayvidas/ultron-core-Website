import { describe, it, expect } from "vitest";
import { buildMetadata, organizationJsonLd } from "@/lib/seo/metadata";

describe("buildMetadata", () => {
  it("applies the title template for page titles", () => {
    const m = buildMetadata({ title: "Services", path: "/services" });
    expect(m.title).toContain("Services");
    expect(m.title).toContain("Ultron Core");
  });

  it("sets a canonical URL", () => {
    const m = buildMetadata({ path: "/contact" });
    expect(m.alternates?.canonical).toContain("/contact");
  });

  it("includes Open Graph and Twitter image data", () => {
    const m = buildMetadata();
    expect(m.openGraph).toBeDefined();
    expect(m.twitter).toBeDefined();
  });
});

describe("organizationJsonLd", () => {
  it("emits ProfessionalService without fabricated address or ratings", () => {
    const data = organizationJsonLd() as Record<string, unknown>;
    expect(data["@type"]).toBe("ProfessionalService");
    // Honesty: no fake address/ratings when details aren't configured.
    expect(data).not.toHaveProperty("address");
    expect(data).not.toHaveProperty("aggregateRating");
  });
});
