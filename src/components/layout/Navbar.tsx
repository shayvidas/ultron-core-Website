"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { nav } from "@/config/site";
import { services } from "@/content/services";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpenState, setMenuOpenState] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click / Escape.
  useEffect(() => {
    if (!servicesOpen) return;
    function onDown(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setServicesOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        scrolled
          ? "border-[var(--color-border)] bg-[rgba(7,11,20,0.72)] backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.main
              .filter((i) => i.href !== "/")
              .map((item) => {
                if (item.href === "/services") {
                  return (
                    <li key={item.href} ref={dropdownRef} className="relative">
                      <button
                        type="button"
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                        onClick={() => setServicesOpen((v) => !v)}
                        className={cn(
                          "flex items-center gap-1 rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium hover:text-[var(--color-cyan)]",
                          pathname.startsWith("/services") && "text-[var(--color-cyan)]",
                        )}
                      >
                        Services
                        <ChevronDown
                          className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")}
                          aria-hidden="true"
                        />
                      </button>
                      {servicesOpen ? (
                        <div className="absolute left-0 top-full mt-2 w-72 rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-surface)] p-2 shadow-[var(--shadow-elevate)]">
                          <Link
                            href="/services"
                            onClick={() => setServicesOpen(false)}
                            className="block rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium hover:bg-[var(--color-surface-2)]"
                          >
                            All Services
                          </Link>
                          <Link
                            href="/pricing"
                            onClick={() => setServicesOpen(false)}
                            className="block rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium hover:bg-[var(--color-surface-2)]"
                          >
                            Pricing
                          </Link>
                          <div className="my-1 h-px bg-[var(--color-border)]" />
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              onClick={() => setServicesOpen(false)}
                              className="block rounded-[var(--radius-sm)] px-3 py-2 text-sm text-[var(--color-text-dim)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-text)]"
                            >
                              {s.nav}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </li>
                  );
                }
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium hover:text-[var(--color-cyan)]",
                        active && "text-[var(--color-cyan)]",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button href={nav.primaryCta.href} size="sm" className="hidden sm:inline-flex">
            {nav.primaryCta.label}
          </Button>
          <button
            type="button"
            className="rounded-[var(--radius-sm)] border border-[var(--color-border)] p-2 lg:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpenState}
            onClick={() => setMenuOpenState(true)}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpenState} onClose={() => setMenuOpenState(false)} />
    </header>
  );
}
