# Requirements: Meraki District

**Defined:** 2026-03-14
**Core Value:** The site must communicate the gravity, taste, and institutional quality of Meraki District.

## v1.0 Requirements

Requirements for production polish. Each maps to roadmap phases.

### Cleanup

- [ ] **CLEAN-01**: Dead Three.js config removed from nuxt.config.ts (transpile + vite exclude references)
- [ ] **CLEAN-02**: Stale CSS cleaned from InstitutionsGrid.vue (empty rules from removed image)

### Forms

- [ ] **FORM-01**: Apply page has email input field with submit button
- [ ] **FORM-02**: Apply page form stores submissions (localStorage until backend exists)
- [ ] **FORM-03**: Footer newsletter form collects and stores email submissions
- [ ] **FORM-04**: Both forms show success/error feedback states to user

### Links & Navigation

- [ ] **LINK-01**: Footer Instagram link points to real Meraki District URL (or placeholder page)
- [ ] **LINK-02**: Footer LinkedIn link points to real Meraki District URL (or placeholder page)
- [ ] **LINK-03**: All internal navigation links resolve correctly (no dead hrefs)

### Legal

- [ ] **LEGAL-01**: Privacy policy page has substantive content covering data collection, cookies, third-party services
- [ ] **LEGAL-02**: Terms of service page has substantive content covering usage, intellectual property, liability

### Accessibility

- [ ] **A11Y-01**: All decorative images use alt="" and content images have meaningful alt text
- [ ] **A11Y-02**: Focus states visible on all interactive elements (links, buttons, form inputs)
- [ ] **A11Y-03**: Keyboard navigation works through all pages (logical tab order, Enter to activate links)
- [ ] **A11Y-04**: Skip-to-content link on every page
- [ ] **A11Y-05**: Color contrast meets WCAG AA on all text elements

### SEO & Performance

- [ ] **PERF-01**: Each page has unique meta description and og:title
- [ ] **PERF-02**: Sitemap.xml generated via Nuxt module
- [ ] **PERF-03**: Hero image (hero-bg.png) converted to WebP for smaller payload
- [ ] **PERF-04**: robots.txt properly configured

## v2.0 Requirements (Future)

### Backend Infrastructure

- **INFRA-01**: Supabase auth/db integration
- **INFRA-02**: Sanity CMS for The Road editorial
- **INFRA-03**: Stripe payments for The Mint
- **INFRA-04**: Circle community integration for Basecamp
- **INFRA-05**: Ghost newsletter for Dispatch

### Content

- **CONT-01**: Real editorial content for institution detail pages
- **CONT-02**: The Road launch articles
- **CONT-03**: Rachel's headshot for About page

## Out of Scope

| Feature | Reason |
|---------|--------|
| Supabase auth/db | Separate infrastructure milestone |
| Sanity CMS | Separate content milestone |
| Stripe payments | Separate monetization milestone |
| Domain purchase | Operational decision, not code |
| Real institution content | Requires editorial from Brian/Rachel |
| Mobile app | Web-first strategy |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| (populated by roadmapper) | | |

**Coverage:**
- v1.0 requirements: 18 total
- Mapped to phases: 0
- Unmapped: 18

---
*Requirements defined: 2026-03-14*
*Last updated: 2026-03-14 after initial definition*
