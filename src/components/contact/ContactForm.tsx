"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { contactSchema, helpCategories, type ContactInput } from "@/lib/validation/contact";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics/events";
import { InputField } from "@/components/ui/InputField";
import { SelectField } from "@/components/ui/SelectField";
import { TextareaField } from "@/components/ui/TextareaField";
import { StatusMessage } from "@/components/ui/StatusMessage";
import { Button } from "@/components/ui/Button";

type SubmitState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export function ContactForm() {
  const [state, setState] = useState<SubmitState>({ kind: "idle" });
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  async function onSubmit(values: ContactInput) {
    setState({ kind: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
        fieldErrors?: Record<string, string>;
      };

      // Only treat an explicit server-confirmed ok:true as success.
      if (res.ok && data.ok === true) {
        setState({ kind: "success" });
        trackEvent("contact_form_submitted");
        reset();
        return;
      }

      if (data.fieldErrors) {
        for (const [field, message] of Object.entries(data.fieldErrors)) {
          setError(field as keyof ContactInput, { message });
        }
      }
      setState({
        kind: "error",
        message:
          data.message ??
          (siteConfig.contactEmail
            ? `Something went wrong. You can also email us at ${siteConfig.contactEmail}.`
            : "Something went wrong. Please try again."),
      });
    } catch {
      setState({
        kind: "error",
        message: siteConfig.contactEmail
          ? `We couldn't reach the server. You can also email us at ${siteConfig.contactEmail}.`
          : "We couldn't reach the server. Please check your connection and try again.",
      });
    }
  }

  if (state.kind === "success") {
    return (
      <StatusMessage status="success" title="Thanks — your message is on its way.">
        We&apos;ve received your inquiry and will get back to you soon. If anything is urgent, feel
        free to follow up.
      </StatusMessage>
    );
  }

  const submitting = state.kind === "submitting";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {state.kind === "error" ? (
        <StatusMessage status="error" title="We couldn't send that">
          {state.message}
        </StatusMessage>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <InputField label="Full name" {...register("name")} error={errors.name?.message} autoComplete="name" />
        <InputField
          label="Business email"
          type="email"
          {...register("email")}
          error={errors.email?.message}
          autoComplete="email"
        />
      </div>

      <InputField label="Company name" {...register("company")} error={errors.company?.message} autoComplete="organization" />

      <SelectField
        label="What do you need help with?"
        placeholder="Select an option"
        options={helpCategories.map((c) => ({ value: c.value, label: c.label }))}
        {...register("category")}
        error={errors.category?.message}
      />

      <TextareaField
        label="What would you like to improve?"
        hint="A sentence or two is plenty — what takes too much time, or what you'd like to build."
        {...register("description")}
        error={errors.description?.message}
      />

      {/* Optional details collapsed behind a disclosure to keep the form short.
          Phone / website are the only extras we keep; the rest were removed to
          reduce friction. */}
      <details className="group rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-bg-2)] px-4 py-3">
        <summary className="cursor-pointer list-none text-sm font-medium text-[var(--color-text-dim)] marker:hidden">
          <span className="inline-flex items-center gap-2">
            <span className="text-[var(--color-red-bright)] transition-transform group-open:rotate-45">
              +
            </span>
            Add phone or website (optional)
          </span>
        </summary>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <InputField label="Telephone" optional {...register("phone")} error={errors.phone?.message} autoComplete="tel" />
          <InputField label="Company website" optional {...register("website")} error={errors.website?.message} autoComplete="url" />
        </div>
      </details>

      {/* Privacy acknowledgment */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          {...register("consent")}
          aria-invalid={errors.consent ? true : undefined}
          aria-describedby={errors.consent ? "consent-error" : undefined}
          className="mt-1 h-4 w-4 accent-[var(--color-red)]"
        />
        <label htmlFor="consent" className="text-sm text-[var(--color-text-dim)]">
          I acknowledge the{" "}
          <a href="/privacy" className="text-[var(--color-red-bright)] hover:underline">
            privacy policy
          </a>{" "}
          and agree to be contacted about my inquiry.
        </label>
      </div>
      {errors.consent ? (
        <p id="consent-error" role="alert" className="-mt-3 text-xs text-[#f87171]">
          {errors.consent.message}
        </p>
      ) : null}

      {/* Honeypot — hidden from users and assistive tech. Bots tend to fill it. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company_url">Leave this field empty</label>
        <input id="company_url" type="text" tabIndex={-1} autoComplete="off" {...register("company_url")} />
      </div>

      <div>
        <Button type="submit" size="lg" disabled={submitting} aria-busy={submitting}>
          {submitting ? "Sending…" : "Send Inquiry"}
          {!submitting ? <Send className="h-4 w-4" aria-hidden="true" /> : null}
        </Button>
      </div>
    </form>
  );
}
