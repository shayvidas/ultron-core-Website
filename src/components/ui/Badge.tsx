import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type Tone = "neutral" | "cyan" | "violet" | "mint";

const tones: Record<Tone, string> = {
  neutral: "text-[var(--color-text-dim)] border-[var(--color-border)]",
  cyan: "text-[var(--color-red-bright)] border-[rgba(229,57,53,0.35)] bg-[rgba(229,57,53,0.08)]",
  violet: "text-[#fca5a5] border-[rgba(185,28,28,0.4)] bg-[rgba(185,28,28,0.1)]",
  mint: "text-[#fdba74] border-[rgba(249,115,22,0.35)] bg-[rgba(249,115,22,0.08)]",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
