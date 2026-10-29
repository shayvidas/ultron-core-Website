# Ultron Core — Tech Steering

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript (strict).
- Tailwind CSS v4 (CSS-first `@theme` tokens in `globals.css`).
- Zod v4 (validation, shared client/server), React Hook Form (contact form).
- Lucide icons for generic UI; original hand-authored SVGs for service icons and the hero diagram.
- Vitest + Testing Library (unit/component), Playwright (E2E), ESLint + Prettier.
- Do not add libraries without a clear purpose. No database for this marketing site. No paid backend/external service without explaining why.

## Rendering
- Static-first: marketing pages are SSG. Only `/api/contact` runs server-side (Node runtime).
- Minimize client JS and client components; isolate interactivity into small client islands; lazy-load noncritical visualizations.

## Conventions
- Single source of truth: all business details/links/SEO defaults live in `src/config/site.ts`. Null-typed fields are hidden by the UI when unset.
- Content lives in `src/content/*.ts` as typed data; pages are templates, not per-route copies.
- Use `buildMetadata()` for per-page metadata; JSON-LD uses only non-null real fields.
- Accessibility is a requirement, not a polish step: semantic landmarks, visible focus, keyboard support, `prefers-reduced-motion`, labeled SVGs, no clickable divs, no fake controls.
- Security: all secrets in env vars (`.env.example` documents them), never in client JS; server-side validation + sanitization; honeypot + rate limit on contact; no PII in logs; security headers in `next.config.ts`.
- Performance targets: LCP ≤2.5s, CLS ≤0.1, INP ≤200ms; Lighthouse Perf ≥90, A11y ≥95, SEO ≥95. Simplify any animation that hurts performance.

## Environment note
Node.js/npm are not installed on the current build machine. Code is authored but install/dev/build/test must run in a Node environment. Never report a test/build as passed unless it was actually executed.

## Commands (run in a Node environment)
- `npm install`
- `npm run dev` — local dev (run manually in a terminal; do not launch as a blocking agent command)
- `npm run build` / `npm start`
- `npm run typecheck` / `npm run lint`
- `npm run test` (Vitest, use run mode) / `npm run test:e2e` (Playwright)

## Git
- Repo initialized; commit after major milestones with meaningful messages. Never commit secrets or `.env`.
