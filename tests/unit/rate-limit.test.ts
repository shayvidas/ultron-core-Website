import { describe, it, expect } from "vitest";
import { rateLimit } from "@/lib/utils/rate-limit";

describe("rateLimit", () => {
  it("allows up to the limit then blocks", () => {
    const key = `test-${Math.random()}`;
    const limit = 3;
    expect(rateLimit(key, limit, 60_000).allowed).toBe(true);
    expect(rateLimit(key, limit, 60_000).allowed).toBe(true);
    expect(rateLimit(key, limit, 60_000).allowed).toBe(true);
    expect(rateLimit(key, limit, 60_000).allowed).toBe(false);
  });

  it("tracks remaining count", () => {
    const key = `test-${Math.random()}`;
    const first = rateLimit(key, 5, 60_000);
    expect(first.remaining).toBe(4);
  });

  it("resets after the window elapses", () => {
    const key = `test-${Math.random()}`;
    rateLimit(key, 1, 1); // window of 1ms
    // Busy-wait a tick so the window expires.
    const start = Date.now();
    while (Date.now() - start < 3) {
      /* spin */
    }
    expect(rateLimit(key, 1, 1).allowed).toBe(true);
  });
});
