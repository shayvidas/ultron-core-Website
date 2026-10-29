import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/content/services";
import { solutions } from "@/content/solutions";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/layout/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-2)]">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm text-[var(--color-text-dim)]">
              {siteConfig.description}
            </p>
            {/* Contact + social render only when configured (never placeholders). */}
            <div className="flex flex-col gap-2 text-sm">
              {siteConfig.contactEmail ? (
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="inline-flex items-center gap-2 text-[var(--color-text-dim)] hover:text-[var(--color-cyan)]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.contactEmail}
                </a>
              ) : null}
              {siteConfig.social.linkedin ? (
                <a
                  href={siteConfig.social.linkedin}
                  className="inline-flex items-center gap-2 text-[var(--color-text-dim)] hover:text-[var(--color-cyan)]"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              ) : null}
            </div>
          </div>

          <FooterColumn title="Services">
            {services.slice(0, 6).map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.nav}
              </FooterLink>
            ))}
            <FooterLink href="/services">All services</FooterLink>
          </FooterColumn>

          <FooterColumn title="Solutions">
            {solutions.map((s) => (
              <FooterLink key={s.slug} href={`/solutions/${s.slug}`}>
                {s.nav}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            <FooterLink href="/pricing">Pricing</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/work">Our Work</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/terms">Terms</FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-text-dim)] sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Founder-led AI automation &amp; software engineering.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-dim)]">
        {title}
      </h2>
      <ul className="flex flex-col gap-2">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-[var(--color-text-dim)] hover:text-[var(--color-cyan)]">
        {children}
      </Link>
    </li>
  );
}
