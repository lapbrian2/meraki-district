# Requirements: Meraki District

**Defined:** 2026-03-14
**Core Value:** The site must communicate the gravity, taste, and institutional quality of Meraki District.

## v1.2 Requirements

Requirements for v1.2 Visual & Interaction Polish. Awwwards-quality editorial experience.

### Scroll-Driven Depth

- [x] **DEPTH-01**: Parallax effect on hero background image and dark section backgrounds (scroll-driven Y offset creates depth perception)
- [x] **DEPTH-02**: Scroll-scrubbed marquee strip (speed modulates with scroll velocity instead of fixed CSS animation)
- [x] **DEPTH-03**: Image fade-in transitions on lazy-loaded images (opacity + subtle scale on intersection)

### Text & Grid Animation

- [x] **TEXT-01**: SplitText character/word reveals on section headings (h1/h2 elements animate per-word or per-character on scroll)
- [x] **TEXT-02**: Grid-aware staggered card entrances on InstitutionsGrid and FoundersGrid (per-row stagger with directional reveals)

### Page Transitions & Micro-Interactions

- [x] **TRANS-01**: Enhanced page transitions beyond fade-out (clip-path wipe or slide-up reveal on route change)
- [x] **MICRO-01**: Hover parallax tilt on featured cards and institution cards (mouse-position-driven subtle 3D tilt)
- [x] **MICRO-02**: Magnetic hover effect on CTA buttons (button subtly follows cursor within proximity)

### Mobile Polish

- [x] **MOB-01**: Mobile-optimized animation performance (disable parallax, reduce particle counts, simplify tilt effects on touch devices)

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
| Custom cursor | Off-brand for editorial aesthetic — editorial sites use default cursor |
| Three.js background | Removed in v0.1, photos replaced 3D |
| Audio/sound design | Not appropriate for editorial site |
| Scroll-to-top button | Lenis handles smooth scroll, keyboard nav sufficient |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| DEPTH-01 | Phase 8 | Complete |
| DEPTH-02 | Phase 8 | Complete |
| DEPTH-03 | Phase 8 | Complete |
| TEXT-01 | Phase 9 | Complete |
| TEXT-02 | Phase 9 | Complete |
| TRANS-01 | Phase 10 | Complete |
| MICRO-01 | Phase 10 | Complete |
| MICRO-02 | Phase 10 | Complete |
| MOB-01 | Phase 10 | Complete |

**Coverage:**
- v1.2 requirements: 9 total
- Mapped to phases: 9
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-14*
