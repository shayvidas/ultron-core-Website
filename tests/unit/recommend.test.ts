import { describe, it, expect } from "vitest";
import { recommendService, recommendationOptions } from "@/lib/utils/recommend";
import { getService } from "@/content/services";

describe("recommendService", () => {
  it("maps each option to a real, existing service", () => {
    for (const opt of recommendationOptions) {
      const slug = recommendService(opt.id);
      expect(slug).toBe(opt.serviceSlug);
      expect(getService(slug!)).toBeDefined();
    }
  });

  it("returns null for an unknown option", () => {
    expect(recommendService("does-not-exist")).toBeNull();
  });

  it("recommends automation for repetitive work", () => {
    expect(recommendService("repetitive")).toBe("business-automation");
  });
});
