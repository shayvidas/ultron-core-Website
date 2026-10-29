import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  error?: string;
  hint?: string;
  optional?: boolean;
}

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  function TextareaField({ label, name, error, hint, optional, className, ...rest }, ref) {
    const errorId = `${name}-error`;
    const hintId = `${name}-hint`;
    const describedBy = cn(error ? errorId : undefined, hint ? hintId : undefined) || undefined;

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={name} className="text-sm font-medium text-[var(--color-text)]">
          {label}
          {optional ? (
            <span className="ml-1.5 text-xs font-normal text-[var(--color-text-dim)]">
              (optional)
            </span>
          ) : null}
        </label>
        {hint ? (
          <p id={hintId} className="text-xs text-[var(--color-text-dim)]">
            {hint}
          </p>
        ) : null}
        <textarea
          ref={ref}
          id={name}
          name={name}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(
            "w-full rounded-[var(--radius-sm)] border bg-[var(--color-bg-2)] px-4 py-3 text-[var(--color-text)] placeholder:text-[rgba(169,183,203,0.5)] focus:outline-none focus:border-[var(--color-cyan)] transition-colors min-h-32 resize-y",
            error ? "border-[#f87171]" : "border-[var(--color-border)]",
            className,
          )}
          {...rest}
        />
        {error ? (
          <p id={errorId} role="alert" className="text-xs text-[#f87171]">
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);
