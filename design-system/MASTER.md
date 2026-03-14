# Design System: Meraki District

Generated via ui-ux-pro-max search engine (BM25 + regex hybrid across 12 databases)
Date: 2026-03-13
Stack: Nuxt 4 + Custom CSS Variables + GSAP + Lenis + Three.js (selective)

---

## 1. Product & Reasoning Rule

- **Category match:** Museum/Gallery (Creative vertical)
- **Confidence:** High — cultural institution ecosystem for AI-native creators maps directly to Museum/Gallery with Creative Portfolio secondary influence
- **Pattern:** Minimalism + Motion-Driven
- **Style priority:** Editorial Grid, Exaggerated Minimalism, Swiss Modernism 2.0
- **Color mood:** Art-appropriate neutrals + Exhibition accents (near-monochrome with single warm accent)
- **Typography mood:** Serif editorial headings + clean sans body — authority without pretension
- **Effects:** Scroll-driven reveals, subtle parallax, entrance animations, smooth page transitions
- **Anti-patterns:** Neon accents, dense information grids, gamification elements, stock photography, particle backgrounds, template-feeling layouts

---

## 2. Style

**Primary style:** Editorial Grid / Exaggerated Minimalism hybrid

A gallery does not decorate — it presents. Every element either serves the work or gets removed.

### Key Properties

```css
--surface-radius: 0px;
--surface-border: none;
--surface-shadow: none;
--section-gap: clamp(6rem, 10vw, 12rem);
--content-max-width: 1200px;
--content-padding: clamp(1.5rem, 4vw, 4rem);
--bg-primary: var(--color-background);
--bg-inverted: var(--color-primary);
--rule-color: rgba(9, 9, 11, 0.12);
--rule-weight: 1px;
```

### Guiding Principles

1. **Whitespace is structural.** More space = more authority.
2. **Asymmetry over symmetry.** Intentional off-center placement.
3. **Typography carries the hierarchy.** Size and weight do all the work.
4. **Full-bleed images.** Photography breaks the grid. Text respects it.
5. **No ornamentation.** If it's not content, it's not there.

---

## 3. Color Palette

Near-monochrome with Meraki Gold as the single accent. Charcoal on cotton paper.

| Role       | Name          | Hex       | RGB              | Usage                                    |
|------------|---------------|-----------|------------------|------------------------------------------|
| Primary    | Ink           | `#09090B` | 9, 9, 11         | Headings, primary text, hero overlays    |
| Secondary  | Graphite      | `#18181B` | 24, 24, 27       | Navigation, footer background, UI chrome |
| Accent     | Meraki Gold   | `#B8964E` | 184, 150, 78     | Seal badges, active states, CTA hover    |
| Background | Gallery White | `#FAFAF9` | 250, 250, 249    | Page background (warm white, not blue)   |
| Surface    | Linen         | `#F5F5F0` | 245, 245, 240    | Subtle section differentiation           |
| Text       | Carbon        | `#1C1C1E` | 28, 28, 30       | Body text                                |
| Text Muted | Pewter        | `#71717A` | 113, 113, 122    | Captions, metadata, timestamps           |
| Border     | Smoke         | `#E4E4E7` | 228, 228, 231    | Hairline rules, subtle dividers          |
| Error      | Signal Red    | `#DC2626` | 220, 38, 38      | Error states, destructive actions        |
| Success    | Signal Green  | `#16A34A` | 22, 163, 74      | Success confirmations, active status     |

### Accent Rules

- Gold is **never** used for large fills. Thin underlines, seal icons, hover states, small badges only.
- Gold-on-dark (#B8964E on #18181B): 4.7:1 contrast (passes AA)
- Gold-on-light (#B8964E on #FAFAF9): 3.2:1 (decorative only, use #96783C for text = 4.5:1)

### Dark Sections

Background: #18181B | Text: #FAFAF9 | Muted: #A1A1AA | Accent: #B8964E

---

## 4. Typography

### Font Stack

| Role     | Font              | Weight       | Source      | Fallback                                 |
|----------|-------------------|--------------|-------------|------------------------------------------|
| Display  | Cormorant Garamond| 300, 500, 600| Google Fonts| Georgia, "Times New Roman", serif        |
| Body     | Geist             | 400, 500     | Vercel      | system-ui, -apple-system, sans-serif     |
| Mono     | Geist Mono        | 400          | Vercel      | "Courier New", monospace                 |

**Why:** Cormorant Garamond 300 commands through refinement, not volume. Geist is clean, in the Vercel ecosystem, doesn't compete with the serif.

### Type Scale

```css
--text-display:  clamp(3rem, 6vw, 5.5rem);
--text-h1:       clamp(2.25rem, 4vw, 3.5rem);
--text-h2:       clamp(1.75rem, 3vw, 2.5rem);
--text-h3:       clamp(1.25rem, 2vw, 1.75rem);
--text-h4:       clamp(1.1rem, 1.5vw, 1.25rem);
--text-body:     clamp(1rem, 1.1vw, 1.125rem);
--text-small:    clamp(0.8rem, 0.9vw, 0.875rem);
--text-caption:  0.75rem;
--text-overline: 0.6875rem;

--leading-tight: 1.1;  --leading-snug: 1.3;
--leading-normal: 1.6; --leading-relaxed: 1.8;

--tracking-tight: -0.02em;  --tracking-normal: 0;
--tracking-wide: 0.08em;    --tracking-widest: 0.15em;
```

### Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,600;1,300;1,500&display=swap" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/geist@1/dist/fonts/geist-sans/style.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/geist@1/dist/fonts/geist-mono/style.min.css" rel="stylesheet">
```

### Typographic Patterns

- **Display:** Cormorant 300, tracking-tight, leading-tight. Sentence case only.
- **Overlines:** Geist 500, tracking-widest, text-overline, UPPERCASE.
- **Body:** Geist 400, leading-normal, max 65ch.
- **Pull quotes:** Cormorant 300 italic, text-h2, thin left border in Gold.

---

## 5. Layout & Pattern

### Grid

```css
--grid-columns: 12;
--grid-gutter: clamp(1rem, 2vw, 2rem);
--grid-margin: clamp(1.5rem, 4vw, 4rem);
--width-narrow: 680px;  --width-default: 1000px;
--width-wide: 1200px;   --width-full: 100%;
```

### Spacing

```css
--space-1: 0.25rem; --space-2: 0.5rem;  --space-3: 0.75rem;
--space-4: 1rem;    --space-6: 1.5rem;  --space-8: 2rem;
--space-12: 3rem;   --space-16: 4rem;   --space-24: 6rem;
--space-32: 8rem;   --space-48: 12rem;
```

### Front Door Sections

1. **NAV** — fixed, transparent -> solid on scroll. Logo left, links center, CTA right.
2. **HERO** — full viewport. Cormorant 300 display headline, Geist subtitle, Three.js background, scroll indicator.
3. **MANIFESTO** — 680px narrow. 2-3 lines mission, editorial serif, centered.
4. **INSTITUTIONS GRID** — asymmetric editorial grid. Image + overline + title + one-liner per institution.
5. **PHILOSOPHY** — inverted (dark bg). Pull quote, Meraki Gold accent.
6. **FEATURED** — latest from The Road / Dispatch. 2-3 editorial cards.
7. **SEAL** — credential system teaser. 4 tiers, minimal visualization.
8. **CTA** — join / apply / subscribe. Single clean action.
9. **FOOTER** — dark, 4-column. Logo+tagline | Nav | Social | Legal.

### Breakpoints

375px | 768px | 1024px | 1440px. Grid: 12 -> 6 -> 4 -> 1.

---

## 6. Effects & Interactions

### GSAP + Lenis

```css
html.lenis, html.lenis body { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
```

**Scroll reveals:** opacity 0->1, translateY 40->0, 0.8s power3.out, 0.1s stagger, trigger 85%
**Nav:** transparent -> solid #FAFAF9 + hairline shadow, 0.3s
**Page transitions:** fade + 8px Y drift, 0.4s, out-in. No wipes.

### Three.js — Two Placements

1. **Hero:** Living texture behind content. Noise-displaced plane, sparse geometries (MeshToonMaterial), or minimal particle field (intentional, not random).
2. **Philosophy:** Single scroll-responsive 3D element. Rotates/morphs with scroll.

**Rules:** Always behind content. Render on demand (IntersectionObserver). Under 10k triangles total. Async loaded. prefers-reduced-motion = static fallback.

### Hover States

```css
a {
  text-decoration: none;
  background-image: linear-gradient(var(--color-accent), var(--color-accent));
  background-size: 0% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.3s ease;
}
a:hover { background-size: 100% 1px; }

.institution-card img {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.institution-card:hover img { transform: scale(1.03); }
```

### Motion Tokens

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--duration-fast: 150ms;   --duration-normal: 300ms;
--duration-slow: 600ms;   --duration-scroll: 800ms;
```

---

## 7. Anti-Patterns

- No rounded corners on containers (border-radius: 0 except avatars/pills)
- No drop shadows (spacing and bg contrast for elevation)
- No gradient section backgrounds (flat fills only)
- No icon grids (images + editorial type for institutions)
- No emoji as design (SVG or nothing)
- No skeleton loaders (simple fade-in)
- No blue links (underline-reveal only)
- No stock photography (curated or abstract placeholders)
- No particle backgrounds (generative art needs intent)
- No hamburger on desktop (full nav > 1024px)
- No notification badges (not a dashboard)
- No carousels (content is positioned)
- No parallax on text (images only)

---

## 8. Pre-Delivery Checklist

- [ ] SVG icons only, no emoji
- [ ] cursor-pointer on all clickables
- [ ] Hover transitions 150-300ms
- [ ] Contrast: 4.5:1 body, 3:1 large. Gold text #96783C on light bg.
- [ ] Focus rings: 2px solid accent, 2px offset
- [ ] prefers-reduced-motion respected
- [ ] Tested at 375/768/1024/1440
- [ ] Fonts loaded with display=swap + fallback stacks
- [ ] Every color has defined role
- [ ] Zero anti-pattern violations
- [ ] Three.js under 10k triangles, pauses off-screen, async
- [ ] GSAP ScrollTrigger killed on route change
- [ ] Lenis destroyed on unmount
- [ ] Gold accent: underlines/badges/hovers only
- [ ] All images have aspect-ratio or dimensions
- [ ] Body text max 65ch

---

## 9. Stack Guidelines — Nuxt 4

### Structure

```
app/components/layout/ (AppNav, AppFooter)
app/components/sections/ (Hero, Manifesto, InstitutionsGrid, Philosophy, Featured, Seal, Cta)
app/components/ui/ (BaseButton, BaseLink, SectionHeading)
app/composables/ (useLenis, useGsapScrollReveal, useThreeScene)
app/layouts/default.vue
app/pages/index.vue
app/assets/css/ (variables.css, base.css, transitions.css)
app/plugins/ (gsap.client.ts, lenis.client.ts)
```

### Key Patterns

**Auto-imports.** Components + composables. No manual imports.

**Client plugins (.client.ts):**
```ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default defineNuxtPlugin(() => {
  return { provide: { gsap, ScrollTrigger } }
})
```

**SSR safety.** No window/document outside onMounted() or .client.ts.

**Global CSS.** `nuxt.config.ts: css: ['~/assets/css/variables.css', '~/assets/css/base.css']`

**No Tailwind.** Custom properties + scoped style.

**GSAP cleanup:**
```ts
export function useGsapScrollReveal(selector, options = {}) {
  const { $gsap } = useNuxtApp()
  onMounted(() => {
    const ctx = $gsap.context(() => {
      $gsap.from(selector, {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: selector, start: 'top 85%',
          toggleActions: 'play none none none', ...options }
      })
    })
    onUnmounted(() => ctx.revert())
  })
}
```

**Three.js lazy:** `defineAsyncComponent(() => import('~/components/three/HeroCanvas.vue'))`

**Page transitions:** fade + 8px Y, 0.4s, out-in mode.

---

## Notes

**Typography:** Cormorant Garamond over Playfair/Bodoni/Libre Bodoni — lighter at 300 (galleries whisper), old-style numerals, better contrast with Geist, tall x-height at display sizes.

**Gold:** #B8964E — mid-warmth. Not yellow (casual), not rose (consumer luxury), not brass (corporate). Range: #A68942 (cooler) to #C9A85A (warmer).

**Rachel's input needed:** Serif heading font affects editorial tone. Cormorant Garamond is the data-driven rec but Rachel should weigh in on formality.
