/**
 * Minimal in-memory fixed-window rate limiter. Suitable for a single-instance
 * deployment or best-effort protection. For multi-instance/serverless, swap for
 * a shared store (e.g. Upstash Redis) behind the same interface.
 */
interface Window {
  count: number;
  resetAt: number;
}

const store = new Map<string, Window>();

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
}

export function rateLimit(key: string, limit = 5, windowMs = 60_000): RateLimitResult {
  const now = Date.now();
  const existing = store.get(key);

  if (!existing || now >= existing.resetAt) {
    const resetAt = now + windowMs;
    store.set(key, { count: 1, resetAt });
    return { allowed: true, remaining: limit - 1, resetAt };
  }

  existing.count += 1;
  const allowed = existing.count <= limit;
  return { allowed, remaining: Math.max(0, limit - existing.count), resetAt: existing.resetAt };
}

// Opportunistic cleanup so the map doesn't grow unbounded.
export function sweepRateLimitStore(now = Date.now()): void {
  for (const [key, win] of store) {
    if (now >= win.resetAt) store.delete(key);
  }
}
