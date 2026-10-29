"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { nav } from "@/config/site";
import { services } from "@/content/services";
import { Button } from "@/components/ui/Button";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Close on Escape; trap focus within the panel while open.
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        className="absolute right-0 top-0 flex h-full w-[min(88vw,22rem)] flex-col gap-6 overflow-y-auto border-l border-[var(--color-border)] bg-[var(--color-bg-2)] p-6"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-text-dim)]">
            Menu
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-[var(--radius-sm)] border border-[var(--color-border)] p-2"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {nav.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="rounded-[var(--radius-sm)] px-3 py-3 text-base font-medium hover:bg-[var(--color-surface)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div>
          <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-dim)]">
            Services
          </p>
          <div className="flex flex-col">
            <Link
              href="/pricing"
              onClick={onClose}
              className="rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium hover:bg-[var(--color-surface)]"
            >
              Pricing
            </Link>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={onClose}
                className="rounded-[var(--radius-sm)] px-3 py-2 text-sm text-[var(--color-text-dim)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
              >
                {s.nav}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <Button href={nav.primaryCta.href} className="w-full" onClick={onClose}>
            {nav.primaryCta.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
