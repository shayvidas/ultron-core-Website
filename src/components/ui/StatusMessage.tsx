import type { ReactNode } from "react";
import { CheckCircle2, AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type Status = "success" | "error" | "info";

const config: Record<Status, { className: string; Icon: typeof Info; role: "status" | "alert" }> = {
  success: {
    className: "border-[rgba(52,211,153,0.4)] bg-[rgba(52,211,153,0.08)] text-[#6ee7b7]",
    Icon: CheckCircle2,
    role: "status",
  },
  error: {
    className: "border-[rgba(248,113,113,0.4)] bg-[rgba(248,113,113,0.08)] text-[#fca5a5]",
    Icon: AlertTriangle,
    role: "alert",
  },
  info: {
    className: "border-[var(--color-border)] bg-[var(--color-bg-2)] text-[var(--color-text-dim)]",
    Icon: Info,
    role: "status",
  },
};

export function StatusMessage({
  status,
  title,
  children,
  className,
}: {
  status: Status;
  title?: string;
  children?: ReactNode;
  className?: string;
}) {
  const { className: toneClass, Icon, role } = config[status];
  return (
    <div
      role={role}
      aria-live={status === "error" ? "assertive" : "polite"}
      className={cn("flex gap-3 rounded-[var(--radius-sm)] border p-4 text-sm", toneClass, className)}
    >
      <Icon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
      <div className="text-[var(--color-text)]">
        {title ? <p className="font-semibold">{title}</p> : null}
        {children ? <div className="text-[var(--color-text-dim)]">{children}</div> : null}
      </div>
    </div>
  );
}
