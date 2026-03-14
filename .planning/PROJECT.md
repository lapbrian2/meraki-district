# Meraki District

## What This Is

An editorial website for Meraki District — a cultural ecosystem of 10 interconnected institutions for AI-native creators. Built with Nuxt 4, Vue 3, GSAP ScrollTrigger, and Lenis smooth scroll. Custom CSS design token system (no Tailwind). The site is the front door: it communicates what Meraki District is, showcases the 10 institutions, and collects applications from prospective members.

## Core Value

The site must communicate the gravity, taste, and institutional quality of Meraki District — every page should feel like walking into a museum, not a startup landing page.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

- ✓ Homepage with 8 sections (Hero, Manifesto, Institutions Grid, Marquee, Philosophy, Featured, Seal, CTA) — v1.0
- ✓ About page (Hero, Founders Grid, Origin, Principles, CTA) — v1.0
- ✓ 10 institution detail pages with dynamic routing, prev/next navigation — v1.0
- ✓ The Road page with hero image — v1.0
- ✓ Hero background image (golden gallery interior) — v1.0
- ✓ Section background images: Philosophy (abstract geometric), Origin (ikigai silhouette) — v1.0
- ✓ The Road page hero (cobblestone alley) — v1.0
- ✓ Scrolling marquee strip with brand tenets — v1.0
- ✓ Fixed nav with transparent→solid scroll transition, mobile hamburger — v1.0
- ✓ Dark 4-column footer — v1.0
- ✓ GSAP scroll reveals via reusable composable — v1.0
- ✓ Lenis smooth scroll connected to ScrollTrigger — v1.0
- ✓ Page transitions (fade + Y-drift) — v1.0
- ✓ Full CSS design token system — v1.0
- ✓ Brand voice applied across all sections (meraki-voice skill) — v1.0
- ✓ Mobile responsive (768px breakpoint) — v1.0
- ✓ SEO: favicon, og:site_name, og:locale, canonical link — v1.0
- ✓ Error page (404 + generic errors) — v1.0

### Active

<!-- Current scope. Building toward these. -->

- [ ] Apply page has a functional email collection form
- [ ] Footer social links (Instagram, LinkedIn) point to real URLs
- [ ] Footer newsletter form collects email submissions
- [ ] Privacy and Terms pages have real content
- [ ] Dead Three.js config removed from nuxt.config.ts
- [ ] Accessibility audit and fixes (ARIA, keyboard nav, focus management)
- [ ] Image optimization (next-gen formats, proper sizing)
- [ ] Per-page SEO meta (unique descriptions per institution page)

### Out of Scope

<!-- Explicit boundaries. Includes reasoning to prevent re-adding. -->

- Supabase auth/db — separate milestone, backend infrastructure
- Sanity CMS — separate milestone, content management
- Stripe payments — separate milestone, monetization
- Circle community — separate milestone, community platform
- Domain purchase (merakidistrict.ai) — operational decision, not code
- Real content for institution detail pages — requires editorial from Brian/Rachel

## Context

- **Stack:** Nuxt 4 + Vue 3, GSAP + ScrollTrigger, Lenis, custom CSS variables
- **Deploy:** Vercel (auto-deploy from GitHub main branch)
- **Repo:** github.com/lapbrian2/meraki-district
- **Live:** https://meraki-district.vercel.app/
- **Design system:** `design-system/MASTER.md` — editorial minimalism, Cormorant Garamond + Geist, near-monochrome with Meraki Gold accent
- **Brand voice:** meraki-voice skill (skills-orchestrator) — no contrast templates, no fragment drama, direct affirmative statements
- **Partnership:** Brian (50%) + Rachel (50%), Meraki Productions Ltd.
- **EEXIST bug:** Edit/Write tools fail on paths with spaces — use `node -e` with fs for file modifications

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

## Current Milestone: v1.0 Production Polish

**Goal:** Make every page production-ready — functional forms, real links, accessibility, performance, complete content on legal pages.

**Target features:**
- Functional apply page with email collection
- Connected footer (social links, newsletter)
- Accessibility compliance
- Performance optimization
- Dead code cleanup
- Complete legal pages

---
*Last updated: 2026-03-14 after codebase audit*
