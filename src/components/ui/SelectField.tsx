import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Option[];
  error?: string;
  hint?: string;
  optional?: boolean;
  placeholder?: string;
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(function SelectField(
  { label, name, options, error, hint, optional, placeholder, className, ...rest },
  ref,
) {
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
      <select
        ref={ref}
        id={name}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        defaultValue=""
        className={cn(
          "w-full rounded-[var(--radius-sm)] border bg-[var(--color-bg-2)] px-4 py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-cyan)] transition-colors appearance-none",
          error ? "border-[#f87171]" : "border-[var(--color-border)]",
          className,
        )}
        {...rest}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error ? (
        <p id={errorId} role="alert" className="text-xs text-[#f87171]">
          {error}
        </p>
      ) : null}
    </div>
  );
});
