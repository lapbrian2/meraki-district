# Meraki District

## What This Is

An editorial website for Meraki District — a cultural ecosystem of 10 interconnected institutions for AI-native creators. Built with Nuxt 4, Vue 3, GSAP ScrollTrigger, and Lenis smooth scroll. Custom CSS design token system (no Tailwind). The site is the front door: it communicates what Meraki District is, showcases the 10 institutions, and collects applications from prospective members.

## Core Value

The site must communicate the gravity, taste, and institutional quality of Meraki District — every page should feel like walking into a museum, not a startup landing page.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

- ✓ Homepage with 8 sections (Hero, Manifesto, Institutions Grid, Marquee, Philosophy, Featured, Seal, CTA) — v0.1
- ✓ About page (Hero, Founders Grid, Origin, Principles, CTA) — v0.1
- ✓ 10 institution detail pages with dynamic routing, prev/next navigation — v0.1
- ✓ The Road page with hero image — v0.1
- ✓ Hero background image (golden gallery interior) — v0.1
- ✓ Section background images: Philosophy (abstract geometric), Origin (ikigai silhouette) — v0.1
- ✓ The Road page hero (cobblestone alley) — v0.1
- ✓ Scrolling marquee strip with brand tenets — v0.1
- ✓ Fixed nav with transparent→solid scroll transition, mobile hamburger — v0.1
- ✓ Dark 3-column footer with newsletter signup — v1.0
- ✓ GSAP scroll reveals via reusable composable — v0.1
- ✓ Lenis smooth scroll connected to ScrollTrigger — v0.1
- ✓ Page transitions (fade + Y-drift) — v0.1
- ✓ Full CSS design token system — v0.1
- ✓ Brand voice applied across all sections (meraki-voice skill) — v0.1
- ✓ Mobile responsive (768px breakpoint) — v0.1
- ✓ SEO: favicon, og:site_name, og:locale, canonical link — v0.1
- ✓ Error page (404 + generic errors) — v0.1
- ✓ Apply page email collection form with validation and feedback — v1.0
- ✓ Footer newsletter form with localStorage persistence — v1.0
- ✓ Dead Three.js config removed from nuxt.config.ts — v1.0
- ✓ Stale CSS cleaned from InstitutionsGrid.vue — v1.0
- ✓ Footer social links removed (no accounts yet) — v1.0
- ✓ Privacy Policy with substantive content — v1.0
- ✓ Terms of Service with substantive content — v1.0
- ✓ Skip-to-content link on every page — v1.0
- ✓ Focus-visible states on all interactive elements — v1.0
- ✓ Keyboard navigation with logical tab order — v1.0
- ✓ WCAG AA color contrast compliance — v1.0
- ✓ Content images have descriptive alt text — v1.0
- ✓ Hero image optimized to WebP (96% size reduction) — v1.0
- ✓ Sitemap.xml via @nuxtjs/sitemap — v1.0
- ✓ robots.txt configured — v1.0
- ✓ Homepage meta description and og:title — v1.0
- ✓ GSAP scope bugs fixed (institution detail pages) — v1.0
- ✓ Lenis HMR cleanup added — v1.0
- ✓ Safari -webkit-backdrop-filter support — v1.0

### Active

<!-- Next milestone scope. -->

(None yet — define with /gsd:new-milestone)

### Out of Scope

<!-- Explicit boundaries. Includes reasoning to prevent re-adding. -->

- Supabase auth/db — separate milestone, backend infrastructure
- Sanity CMS — separate milestone, content management
- Stripe payments — separate milestone, monetization
- Circle community — separate milestone, community platform
- Domain purchase (merakidistrict.ai) — operational decision, not code
- Real content for institution detail pages — requires editorial from Brian/Rachel
- Mobile app — web-first strategy

## Context

**Current state:** v1.0 shipped. Production-ready front door with functional forms, legal pages, accessibility compliance, and SEO optimization.

- **Stack:** Nuxt 4 + Vue 3, GSAP + ScrollTrigger, Lenis, custom CSS variables
- **Deploy:** Vercel (auto-deploy from GitHub main branch)
- **Repo:** github.com/lapbrian2/meraki-district
- **Live:** https://meraki-district.vercel.app/
- **Design system:** design-system/MASTER.md — editorial minimalism, Cormorant Garamond + Geist, near-monochrome with Meraki Gold accent
- **Brand voice:** meraki-voice skill (skills-orchestrator) — no contrast templates, no fragment drama, direct affirmative statements
- **Partnership:** Brian (50%) + Rachel (50%), Meraki Productions Ltd.
- **EEXIST bug:** Edit/Write tools fail on paths with spaces — use node -e with fs for file modifications
- **Codebase:** 28 files in app/, ~1,200 LOC added in v1.0

## Constraints

- **Styling:** Custom CSS variables only — no Tailwind (editorial sites need pixel-level control)
- **Animation:** GSAP + Lenis only — Three.js was removed (photos replaced 3D)
- **Voice:** All copy must follow meraki-voice skill guidelines
- **Anti-patterns:** No rounded corners, no shadows, no gradients, no icon grids, no emoji as design, no stock photos, no carousels

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Custom CSS over Tailwind | Editorial sites need pixel-level control | ✓ Good |
| Nuxt 4 over React | Brian has production Nuxt experience | ✓ Good |
| Three.js removed | Photos replaced 3D terrain, simpler and more on-brand | ✓ Good |
| Cormorant Garamond 300 for headings | Elegant serif matches institutional feel | — Pending (Rachel approval) |
| Meraki Gold as single accent | Restraint is the brand | ✓ Good |
| localStorage for email collection | Pragmatic pre-launch, Supabase in v2.0 | ✓ Good |
| @nuxtjs/sitemap over manual | Auto-generates from routes, zero maintenance | ✓ Good |
| WebP over PNG for hero | 96% size reduction, broad browser support | ✓ Good |
| Phases 3+4 as parallel agents | Independent concerns, 2x faster execution | ✓ Good |

---
*Last updated: 2026-03-14 after v1.0 milestone*
