# Roadmap: Meraki District v1.0 Production Polish

## Overview

Five phases take Meraki District from a working front door to a production-ready site. Each phase targets one coherent concern: dead code and broken links first (zero-risk wins), then functional forms, legal content, accessibility compliance, and finally SEO and performance optimization. Every phase delivers something a visitor would notice.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Quick Wins** - Remove dead code and fix broken links across the site
- [ ] **Phase 2: Forms** - Build functional email collection on Apply page and footer newsletter
- [ ] **Phase 3: Legal Pages** - Create substantive Privacy Policy and Terms of Service content
- [ ] **Phase 4: Accessibility** - Systematic audit and fixes for WCAG AA compliance
- [ ] **Phase 5: SEO & Performance** - Per-page meta, sitemap, image optimization, robots.txt

## Phase Details

### Phase 1: Quick Wins
**Goal**: Every link on the site resolves and no dead code ships to production
**Depends on**: Nothing (first phase)
**Requirements**: CLEAN-01, CLEAN-02, LINK-01, LINK-03
**Success Criteria** (what must be TRUE):
  1. nuxt.config.ts contains no Three.js references (transpile, vite exclude)
  2. InstitutionsGrid.vue has no empty CSS rules or orphaned selectors
  3. Footer social links (Instagram, LinkedIn) removed — no broken href="#" links remain
  4. Every internal navigation link (nav, footer, institution cards) resolves to a real page with no 404s
**Plans**: TBD

Plans:
- [ ] 01-01: TBD

### Phase 2: Forms
**Goal**: Visitors can submit their email on the Apply page and subscribe to the newsletter from the footer
**Depends on**: Phase 1
**Requirements**: FORM-01, FORM-02, FORM-03, FORM-04
**Success Criteria** (what must be TRUE):
  1. Apply page displays an email input field with a submit button
  2. Submitting an email on the Apply page stores it in localStorage and confirms success to the user
  3. Footer newsletter form collects and stores email submissions in localStorage
  4. Both forms show clear success feedback on valid submission and error feedback on invalid input (empty, malformed email)
**Plans**: TBD

Plans:
- [ ] 02-01: TBD

### Phase 3: Legal Pages
**Goal**: Privacy Policy and Terms of Service pages contain real, substantive content appropriate for a creative platform
**Depends on**: Phase 1
**Requirements**: LEGAL-01, LEGAL-02
**Success Criteria** (what must be TRUE):
  1. Privacy Policy page covers data collection, cookies, third-party services, and user rights
  2. Terms of Service page covers acceptable use, intellectual property, liability limitations, and account terms
  3. Both pages are accessible from the footer and render with the site's editorial styling
**Plans**: TBD

Plans:
- [ ] 03-01: TBD

### Phase 4: Accessibility
**Goal**: Any user, regardless of input method or assistive technology, can navigate and use every page on the site
**Depends on**: Phase 2 (forms must exist before testing their accessibility)
**Requirements**: A11Y-01, A11Y-02, A11Y-03, A11Y-04, A11Y-05
**Success Criteria** (what must be TRUE):
  1. All decorative images have alt="" and all content images have descriptive alt text
  2. Every interactive element (links, buttons, form inputs) shows a visible focus indicator when tabbed to
  3. A user can navigate the entire site using only keyboard (Tab, Enter, Escape) with a logical tab order
  4. A "Skip to content" link appears on every page when the user presses Tab
  5. All text meets WCAG AA contrast ratios (4.5:1 for body text, 3:1 for large text) against its background
**Plans**: TBD

Plans:
- [ ] 04-01: TBD

### Phase 5: SEO & Performance
**Goal**: Search engines can index every page with accurate metadata and the site loads with optimized assets
**Depends on**: Phase 3 (legal pages must exist to get their own meta)
**Requirements**: PERF-01, PERF-02, PERF-03, PERF-04
**Success Criteria** (what must be TRUE):
  1. Every page (home, about, apply, each institution, privacy, terms, the-road) has a unique meta description and og:title
  2. /sitemap.xml returns a valid sitemap listing all public pages
  3. Hero image serves as WebP with smaller file size than the current PNG
  4. /robots.txt exists and allows search engine crawling of public pages
**Plans**: TBD

Plans:
- [ ] 05-01: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Quick Wins | 0/? | Not started | - |
| 2. Forms | 0/? | Not started | - |
| 3. Legal Pages | 0/? | Not started | - |
| 4. Accessibility | 0/? | Not started | - |
| 5. SEO & Performance | 0/? | Not started | - |
