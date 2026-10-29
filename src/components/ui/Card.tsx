import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** When true, applies a subtle hover elevation (use for linked cards) */
  interactive?: boolean;
}

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        "surface-card p-6 sm:p-7",
        interactive &&
          "transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] motion-reduce:hover:translate-y-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
