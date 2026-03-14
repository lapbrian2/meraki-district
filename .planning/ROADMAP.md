# Roadmap: Meraki District

## Milestones

- [x] **v1.0 Production Polish** — Phases 1-5 (shipped 2026-03-14) [archive](milestones/v1.0-ROADMAP.md)
- [ ] **v1.1 Launch Prep** — Phases 6-7 (in progress)

## Phases

<details>
<summary>v1.0 Production Polish (Phases 1-5) — SHIPPED 2026-03-14</summary>

- [x] Phase 1: Quick Wins (1/1 plans) — completed 2026-03-14
- [x] Phase 2: Forms (1/1 plans) — completed 2026-03-14
- [x] Phase 3: Legal Pages (1/1 plans) — completed 2026-03-14
- [x] Phase 4: Accessibility (1/1 plans) — completed 2026-03-14
- [x] Phase 5: SEO & Performance (1/1 plans) — completed 2026-03-14

</details>

### v1.1 Launch Prep

- [ ] **Phase 6: Social Sharing & SEO** - Per-page OG meta, canonical URLs, and default OG image
- [ ] **Phase 7: Analytics & Image Optimization** - Vercel Analytics/Web Vitals and remaining WebP conversions

## Phase Details

### Phase 6: Social Sharing & SEO
**Goal**: Every page produces a rich, accurate social sharing preview when its URL is pasted on any platform
**Depends on**: Phase 5 (v1.0 SEO foundation — sitemap, robots.txt, homepage og:title already exist)
**Requirements**: SEO-01, SEO-02, SEO-03, SEO-04
**Success Criteria** (what must be TRUE):
  1. Pasting any page URL into Twitter/LinkedIn/iMessage shows a branded preview card with page-specific title and description (not generic fallback)
  2. Pasting an institution detail page URL shows that institution's name and description in the preview card
  3. Every page preview card displays the Meraki District OG image (1200x630)
**Plans**: TBD

### Phase 7: Analytics & Image Optimization
**Goal**: The site tracks visitor behavior and serves all images at optimal file sizes
**Depends on**: Phase 6 (analytics should track the final page state)
**Requirements**: ANLX-01, ANLX-02, PERF-01, PERF-02
**Success Criteria** (what must be TRUE):
  1. Vercel Analytics dashboard shows page view data for all routes
  2. Web Vitals scores (LCP, FID, CLS) are visible in the Vercel dashboard
  3. No JPG background images remain in the public/ directory — all converted to WebP and referenced correctly
**Plans**: TBD

## Progress

**Execution Order:**
Phases 6-7 execute sequentially within v1.1 Launch Prep milestone.

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 1. Quick Wins | v1.0 | 1/1 | Complete | 2026-03-14 |
| 2. Forms | v1.0 | 1/1 | Complete | 2026-03-14 |
| 3. Legal Pages | v1.0 | 1/1 | Complete | 2026-03-14 |
| 4. Accessibility | v1.0 | 1/1 | Complete | 2026-03-14 |
| 5. SEO & Performance | v1.0 | 1/1 | Complete | 2026-03-14 |
| 6. Social Sharing & SEO | v1.1 | 0/? | Not started | - |
| 7. Analytics & Image Optimization | v1.1 | 0/? | Not started | - |
