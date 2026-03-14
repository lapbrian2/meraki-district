# Requirements: Meraki District

**Defined:** 2026-03-14
**Core Value:** The site must communicate the gravity, taste, and institutional quality of Meraki District.

## v1.1 Requirements

Requirements for v1.1 Launch Prep. Everything needed to share the URL publicly.

### SEO

- [ ] **SEO-01**: Every page has page-specific og:title and og:description meta tags (not just global fallback)
- [ ] **SEO-02**: Every page has canonical URL meta tag
- [ ] **SEO-03**: Default OG image (1200x630) created and referenced site-wide via og:image and twitter:image
- [ ] **SEO-04**: Institution detail pages generate dynamic og:title and og:description from institution data

### Analytics

- [ ] **ANLX-01**: Vercel Analytics installed and tracking page views on all routes
- [ ] **ANLX-02**: Vercel Web Vitals collection enabled

### Performance

- [ ] **PERF-01**: Remaining background images (origin-bg.jpg, philosophy-bg.jpg, the-road-hero.jpg) converted from JPG to WebP
- [ ] **PERF-02**: All component references updated to use WebP versions

## Future Requirements

Deferred to v2.0 or later.

### Backend Infrastructure

- **BACK-01**: Supabase auth and database integration
- **BACK-02**: Sanity CMS for content management
- **BACK-03**: Stripe payments for membership

### Dynamic OG

- **DOGI-01**: Per-institution dynamic OG images generated from data
- **DOGI-02**: Per-page unique OG images for About, The Road, Apply

## Out of Scope

| Feature | Reason |
|---------|--------|
| Domain purchase (merakidistrict.ai) | Operational decision, not code |
| Real content for institution detail pages | Requires editorial from Brian/Rachel |
| Dynamic per-page OG image generation | Static default sufficient for launch |
| Google Analytics / GA4 | Vercel Analytics is simpler and privacy-respecting |
| Visual/UX polish | Deferred to later milestone per Brian |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| SEO-01 | Phase 6 | Pending |
| SEO-02 | Phase 6 | Pending |
| SEO-03 | Phase 6 | Pending |
| SEO-04 | Phase 6 | Pending |
| ANLX-01 | Phase 7 | Pending |
| ANLX-02 | Phase 7 | Pending |
| PERF-01 | Phase 7 | Pending |
| PERF-02 | Phase 7 | Pending |

**Coverage:**
- v1.1 requirements: 8 total
- Mapped to phases: 8
- Unmapped: 0

---
*Requirements defined: 2026-03-14*
*Last updated: 2026-03-14 after roadmap creation*
