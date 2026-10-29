# Launch Checklist

Work top to bottom. Items marked **[founder]** need a business/legal decision; **[run]** need a Node environment.

## 0. Environment (one-time)

- [ ] **[run]** Install Node.js ≥ 20.9 and npm (`brew install node` or nvm).
- [ ] **[run]** Install Xcode Command Line Tools for git (`xcode-select --install`).
- [ ] **[run]** `npm install` and `npx playwright install`.

## 1. Business details → `src/config/site.ts`

- [ ] **[founder]** Set `contactEmail` to a real destination address.
- [ ] **[founder]** Optionally set `phone`, `address`, `social.linkedin` (leave `null` to hide — never a placeholder).
- [ ] **[founder]** Confirm the wordmark, tagline, and description read correctly.

## 2. Brand & domain

- [ ] **[founder]** Confirm domain availability and purchase.
- [ ] **[founder]** Confirm company-name availability and trademark clearance.
- [ ] **[founder]** Confirm the original logo/mark is acceptable (no third-party trademarks).
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the production domain.

## 3. Founder content → `src/content/company.ts`

- [ ] **[founder]** Confirm Shay Vidas's title and bio.
- [ ] **[founder]** Provide Faisal's surname (if public), title, and bio (currently pending).
- [ ] **[founder]** Provide portraits (optional) or approve the typographic avatars.

## 4. Lead delivery (contact form)

- [ ] **[founder]** Choose an email provider and verify a sender domain/address.
- [ ] Set `LEAD_PROVIDER=email`, `LEAD_EMAIL_API_KEY`, `LEAD_EMAIL_FROM`, `LEAD_EMAIL_TO` in the host's env.
- [ ] **[run]** Submit a test inquiry and confirm it arrives. (Form is NOT production-ready until this passes.)

## 5. Booking

- [ ] **[founder]** Confirm a booking URL (e.g. Calendly) and set `NEXT_PUBLIC_BOOKING_URL`, or leave blank so CTAs route to `/contact`.

## 6. Privacy & terms

- [ ] **[founder]** Review the `/privacy` and `/terms` drafts with legal counsel.
- [ ] **[founder]** Confirm applicable Israeli + international data-protection obligations.
- [ ] Remove the `noIndex` flag from the legal pages once finalized (in their `buildMetadata` calls).

## 7. Analytics (optional)

- [ ] **[founder]** Decide whether to enable privacy-conscious analytics and document consent needs.
- [ ] Set `NEXT_PUBLIC_ANALYTICS_DOMAIN` and add the provider script if adopted.

## 8. Testing & quality

- [ ] **[run]** `npm run typecheck` — passes.
- [ ] **[run]** `npm run lint` — passes.
- [ ] **[run]** `npm run test:run` — unit/component tests pass.
- [ ] **[run]** `npm run test:e2e` — E2E tests pass.
- [ ] **[run]** `npm run build` — production build succeeds.
- [ ] **[run]** Lighthouse: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95 (record actual numbers).
- [ ] **[run]** Manual keyboard + screen-reader pass on home, a service page, and contact.
- [ ] **[run]** Visual check at 375 / 768 / 1440 / 1920 px.

## 9. Deployment

- [ ] Connect the Git repository to the host (Vercel recommended).
- [ ] Add all environment variables to the host (never commit them).
- [ ] Verify a preview deployment before promoting to production.
- [ ] Confirm HTTPS and the custom domain.
- [ ] **Rollback procedure:** in Vercel, promote the previous deployment (Deployments → prior build → "Promote to Production"), or `git revert` the offending commit and redeploy.

## 10. Final authorization

- [ ] **[founder]** Explicit sign-off to publish and to connect real customer services.

## Known limitations at first launch

- Contact form requires a configured provider (section 4).
- In-memory rate limiter is per-instance; use a shared store for multi-instance hosting.
- Hebrew/RTL is architecturally supported but not yet translated; no language switch ships until content exists.
