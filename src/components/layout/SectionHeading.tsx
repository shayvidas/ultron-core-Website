import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: Heading = "h2",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "mx-auto max-w-2xl text-center items-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-cyan)]">
          {eyebrow}
        </span>
      ) : null}
      <Heading id={id} className={Heading === "h1" ? "text-h1" : "text-h2"}>
        {title}
      </Heading>
      {subtitle ? (
        <p className={cn("text-lead max-w-2xl", align === "center" && "mx-auto")}>{subtitle}</p>
      ) : null}
    </div>
  );
}
