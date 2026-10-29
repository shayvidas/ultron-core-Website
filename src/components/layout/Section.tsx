import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Visual tone of the section background */
  tone?: "default" | "muted" | "contrast";
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "",
  muted: "bg-[var(--color-bg-2)]",
  contrast: "bg-[var(--color-surface)]",
};

export function Section({ children, className, id, tone = "default", ...aria }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-[var(--spacing-section)]", toneClasses[tone], className)}
      {...aria}
    >
      {children}
    </section>
  );
}
