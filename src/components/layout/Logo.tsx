import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils/cn";

/**
 * Original Ultron Core mark, recreated in SVG from the approved artwork:
 * an angular "U" (charcoal blades) fused with a "C" (ring) and a red
 * circuit-node "core" at the center. Abstract and trademark-safe — no
 * humanoid/robot or third-party character imagery.
 */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      {/* Angular "U" — two charcoal blades */}
      <path
        d="M10 14 L20 14 L20 44 L26 50 L16 50 L10 44 Z"
        fill="#1b1d22"
        stroke="#2a2d34"
        strokeWidth="0.5"
      />
      <path d="M23 14 L31 14 L31 41 L27 47 L23 43 Z" fill="#101114" />

      {/* "C" ring (right side), slightly open toward the core */}
      <path
        d="M34 11 A21 21 0 1 0 34 53"
        fill="none"
        stroke="#23262d"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Circuit traces to the core */}
      <g stroke="#3a3d45" strokeWidth="2" strokeLinecap="round">
        <path d="M32 32 L32 20" />
        <path d="M32 32 L46 32" />
        <path d="M32 32 L24 44" />
      </g>
      <circle cx="32" cy="20" r="3" fill="#15151b" stroke="#4a4d55" strokeWidth="1.5" />
      <circle cx="46" cy="32" r="3" fill="#15151b" stroke="#4a4d55" strokeWidth="1.5" />
      <circle cx="24" cy="44" r="3" fill="#15151b" stroke="#4a4d55" strokeWidth="1.5" />

      {/* Red core */}
      <circle cx="32" cy="32" r="6.5" fill="#e53935" />
      <circle cx="32" cy="32" r="2.6" fill="#15151b" />
    </svg>
  );
}

/** Wordmark: "Ultron" in text color + "Core" in red, matching the artwork. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-base font-bold tracking-tight text-[var(--color-text)]",
        className,
      )}
    >
      Ultron<span className="text-[var(--color-red)]">Core</span>
    </span>
  );
}

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <LogoMark className="h-9 w-9" />
      {!compact ? <Wordmark /> : null}
    </Link>
  );
}
