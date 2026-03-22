<template>
  <div class="circuit-page">

    <!-- ============================================
         HERO — The Circuit introduction
    ============================================= -->
    <section ref="heroSection" class="circuit-hero section section-dark">
      <div class="section-default">
        <p class="overline reveal">The Circuit</p>
        <h1 class="circuit-hero-title word-reveal">
          <em>Where the work meets its audience.</em>
        </h1>
        <p class="circuit-hero-sub reveal">
          A curated index of exhibitions, residencies, and gatherings across
          the global creative frontier. Each event is selected by the Meraki Road
          curatorial committee for its commitment to craft over spectacle.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         SIDEBAR NAV — Exhibition categories
    ============================================= -->
    <section ref="categoriesSection" class="circuit-categories section section-dark">
      <div class="section-wide">
        <div class="categories-grid">
          <div
            v-for="cat in categories"
            :key="cat.label"
            class="category-card vellum-card reveal"
            :class="{ 'category-card--active': activeCategory === cat.key }"
            @click="activeCategory = cat.key"
          >
            <span class="category-icon material-symbols-outlined">{{ cat.icon }}</span>
            <span class="category-label">{{ cat.label }}</span>
            <span class="category-count">{{ cat.count }}</span>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         FEATURED EXHIBITIONS — Large-format cards
    ============================================= -->
    <section ref="exhibitionsSection" class="circuit-exhibitions section section-dark">
      <div class="section-wide">
        <div class="exhibitions-header">
          <p class="overline reveal">Featured Exhibitions</p>
          <h2 class="exhibitions-title word-reveal"><em>Currently on view</em></h2>
        </div>

        <div class="exhibitions-stack">
          <article
            v-for="(exhibition, i) in exhibitions"
            :key="exhibition.title"
            class="exhibition-card vellum-card reveal"
            :class="{ 'exhibition-card--flipped': i % 2 !== 0 }"
          >
            <div class="exhibition-image-wrap grayscale-hover">
              <NuxtImg
                :src="exhibition.image"
                :alt="exhibition.title"
                class="exhibition-image archival-image"
                loading="lazy"
                width="800"
                height="500"
              />
              <span v-if="exhibition.status" class="exhibition-badge">{{ exhibition.status }}</span>
            </div>
            <div class="exhibition-body">
              <span class="exhibition-location">{{ exhibition.location }}</span>
              <h3 class="exhibition-title"><em>{{ exhibition.title }}</em></h3>
              <p class="exhibition-dates">{{ exhibition.dates }}</p>
              <p class="exhibition-statement">{{ exhibition.statement }}</p>
              <div class="exhibition-meta-row">
                <span v-if="exhibition.venue" class="exhibition-venue">{{ exhibition.venue }}</span>
                <span v-if="exhibition.fellows" class="exhibition-fellows">{{ exhibition.fellows }} Fellows</span>
              </div>
              <NuxtLink :to="exhibition.ctaLink" class="exhibition-cta">
                {{ exhibition.ctaLabel }} &rarr;
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         TOURING SCHEDULE — City/Venue grid
    ============================================= -->
    <section ref="touringSection" class="circuit-touring section section-dark">
      <div class="section-wide">
        <div class="touring-header">
          <p class="overline reveal">Touring Schedule</p>
          <h2 class="touring-title word-reveal"><em>Where we go next</em></h2>
        </div>

        <div class="touring-grid">
          <div
            v-for="city in touringSchedule"
            :key="city.name"
            class="touring-card reveal"
          >
            <span class="touring-city">{{ city.name }}</span>
            <span class="touring-venue">{{ city.venue }}</span>
            <span class="touring-date">{{ city.date }}</span>
            <span v-if="city.confirmed" class="touring-confirmed">Confirmed</span>
            <span v-else class="touring-pending">Pending</span>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PAST EXHIBITIONS — Compact archive
    ============================================= -->
    <section ref="archiveSection" class="circuit-archive section section-dark">
      <div class="section-wide">
        <div class="archive-header">
          <p class="overline reveal">Archive</p>
          <h2 class="archive-title word-reveal"><em>Past exhibitions</em></h2>
        </div>

        <div class="archive-list">
          <div
            v-for="past in pastExhibitions"
            :key="past.title"
            class="archive-item reveal"
          >
            <span class="archive-year">{{ past.year }}</span>
            <span class="archive-name">{{ past.title }}</span>
            <span class="archive-location">{{ past.location }}</span>
            <span class="archive-type">{{ past.type }}</span>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — Submit a proposal
    ============================================= -->
    <section ref="ctaSection" class="circuit-cta section section-dark">
      <div class="section-narrow cta-inner">
        <p class="overline reveal">Open Call</p>
        <h2 class="cta-title word-reveal">
          <em>Have a body of work that deserves a room?</em>
        </h2>
        <p class="cta-sub reveal">
          The Circuit accepts exhibition proposals on a rolling basis.
          Selected proposals receive curatorial support, venue coordination,
          and placement within the Meraki Road archive.
        </p>
        <NuxtLink to="/apply" class="cta-button-gold reveal">
          Submit an Exhibition Proposal &rarr;
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

/* -- SEO ---------------------------------------- */
useHead({
  title: 'The Circuit — Meraki Road',
  meta: [
    { name: 'description', content: 'The Circuit: a curated exhibition directory from Meraki Road. Exhibitions, residencies, and gatherings where the work meets its audience.' },
  ],
})

useSeoMeta({
  ogTitle: 'The Circuit — Meraki Road',
  ogDescription: 'A curated exhibition directory from Meraki Road. Exhibitions, residencies, and gatherings where the work meets its audience.',
  twitterTitle: 'The Circuit — Meraki Road',
  twitterDescription: 'A curated exhibition directory from Meraki Road. Exhibitions, residencies, and gatherings where the work meets its audience.',
})

/* -- Section refs ------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
const categoriesSection = ref<HTMLElement | null>(null)
const exhibitionsSection = ref<HTMLElement | null>(null)
const touringSection = ref<HTMLElement | null>(null)
const archiveSection = ref<HTMLElement | null>(null)
const ctaSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

useGsapScrollReveal(categoriesSection, '.reveal', { stagger: 0.08 })

useGsapScrollReveal(exhibitionsSection, '.reveal', { stagger: 0.12 })
useWordReveal(exhibitionsSection, '.word-reveal')

useGsapScrollReveal(touringSection, '.reveal', { stagger: 0.06 })
useWordReveal(touringSection, '.word-reveal')

useGsapScrollReveal(archiveSection, '.reveal', { stagger: 0.04 })
useWordReveal(archiveSection, '.word-reveal')

useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal')

/* -- State -------------------------------------- */
const activeCategory = ref('exhibitions')

/* -- Data --------------------------------------- */
interface Category {
  key: string
  icon: string
  label: string
  count: number
}

const categories: Category[] = [
  { key: 'exhibitions', icon: 'calendar_today', label: 'Exhibitions', count: 6 },
  { key: 'monographs', icon: 'folder_shared', label: 'Monographs', count: 12 },
  { key: 'submissions', icon: 'edit_note', label: 'Open Calls', count: 3 },
  { key: 'library', icon: 'auto_stories', label: 'Library', count: 48 },
]

interface Exhibition {
  title: string
  location: string
  image: string
  statement: string
  ctaLabel: string
  ctaLink: string
  dates: string
  venue?: string
  fellows?: number
  status?: string
}

const exhibitions: Exhibition[] = [
  {
    title: 'Vellum Residency',
    location: 'Milan, Italy',
    image: '/images/districts/the-frame.webp',
    statement: 'A month-long residency examining the intersection of analog printmaking and computational design. Twelve practitioners share a single press, trading parameters instead of plates.',
    ctaLabel: 'Request Private View',
    ctaLink: '/apply',
    dates: 'March 14 — April 18, 2026',
    venue: 'Galleria del Torchio',
    fellows: 12,
    status: 'Now Open',
  },
  {
    title: 'Kinetic Stills',
    location: 'Tokyo, Japan',
    image: '/images/districts/meridian.webp',
    statement: 'Moving image works frozen at their most decisive moment. Twelve practitioners, twelve frames, each selected from a corpus of ten thousand.',
    ctaLabel: 'View Monograph',
    ctaLink: '/apply',
    dates: 'May 2 — June 30, 2026',
    venue: 'Spiral Hall, Aoyama',
    fellows: 12,
  },
  {
    title: 'The Monolith',
    location: 'New York, USA',
    image: '/images/districts/the-collective.webp',
    statement: 'A group exhibition exploring architectural permanence in an era of digital ephemerality. Concrete, steel, and code share equal billing.',
    ctaLabel: 'Final Registration',
    ctaLink: '/apply',
    dates: 'July 10 — September 1, 2026',
    venue: 'Chelsea District, West 24th',
    fellows: 8,
    status: 'Final Call',
  },
]

interface TouringCity {
  name: string
  venue: string
  date: string
  confirmed: boolean
}

const touringSchedule: TouringCity[] = [
  { name: 'Berlin', venue: 'KW Institute', date: 'Q4 2026', confirmed: true },
  { name: 'Seoul', venue: 'MMCA Gwacheon', date: 'Q1 2027', confirmed: true },
  { name: 'Mexico City', venue: 'Museo Tamayo', date: 'Q2 2027', confirmed: false },
  { name: 'London', venue: 'Serpentine North', date: 'Q3 2027', confirmed: false },
  { name: 'São Paulo', venue: 'Instituto Moreira Salles', date: 'Q4 2027', confirmed: false },
  { name: 'Geneva', venue: 'MAMCO', date: 'Q1 2028', confirmed: true },
]

interface PastExhibition {
  year: string
  title: string
  location: string
  type: string
}

const pastExhibitions: PastExhibition[] = [
  { year: '2025', title: 'Latent Garden', location: 'Zurich, Switzerland', type: 'Solo' },
  { year: '2025', title: 'The Weight of Inference', location: 'Berlin, Germany', type: 'Group' },
  { year: '2024', title: 'Residual Self', location: 'Shanghai, China', type: 'Solo' },
  { year: '2024', title: 'Synthetic Cartography', location: 'Taipei, Taiwan', type: 'Group' },
  { year: '2024', title: 'First Principles', location: 'Venice, Italy', type: 'Biennale' },
]
</script>

<style scoped>
/* ═══════════════════════════════════════════════
   CIRCUIT PAGE — Global Exhibition Index (Dark)
   ═══════════════════════════════════════════════ */

/* ─── Hero ─── */
.circuit-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  min-height: 60vh;
  display: flex;
  align-items: flex-end;
}

.circuit-hero-title {
  font-size: var(--text-display);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-display);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  max-width: 18ch;
}

.circuit-hero-sub {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
}

/* ─── Category Navigation ─── */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-8) var(--space-4);
  cursor: pointer;
  text-align: center;
  border: 1px solid var(--rule-color);
  transition: border-color var(--duration-normal) ease,
              background var(--duration-normal) ease;
}

.category-card:hover,
.category-card--active {
  border-color: rgba(184, 150, 78, 0.4);
  background: rgba(184, 150, 78, 0.04);
}

.category-icon {
  font-size: 1.5rem;
  color: var(--color-gold);
  opacity: 0.7;
}

.category-card--active .category-icon {
  opacity: 1;
}

.category-label {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-text);
}

.category-count {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  opacity: 0.6;
}

/* ─── Exhibitions Stack ─── */
.exhibitions-header {
  margin-bottom: var(--space-16);
}

.exhibitions-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.exhibitions-stack {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.exhibition-card {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 0;
  overflow: hidden;
  border: 1px solid var(--rule-color);
  transition: border-color 0.4s ease;
}

.exhibition-card:hover {
  border-color: rgba(184, 150, 78, 0.3);
}

.exhibition-card--flipped .exhibition-image-wrap {
  order: 2;
}

.exhibition-card--flipped .exhibition-body {
  order: 1;
}

.exhibition-image-wrap {
  overflow: hidden;
  aspect-ratio: 16 / 10;
  position: relative;
}

.exhibition-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.exhibition-badge {
  position: absolute;
  top: var(--space-4);
  left: var(--space-4);
  z-index: 2;
  font-family: var(--font-mono);
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-ink);
  background: var(--color-gold);
  padding: 4px 10px;
}

.exhibition-body {
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.exhibition-location {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-3);
}

.exhibition-title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  line-height: var(--leading-snug);
  margin-bottom: var(--space-2);
}

.exhibition-dates {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
  margin-bottom: var(--space-4);
  opacity: 0.7;
}

.exhibition-statement {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 40ch;
  margin-bottom: var(--space-4);
}

.exhibition-meta-row {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.exhibition-venue,
.exhibition-fellows {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
  opacity: 0.6;
}

.exhibition-cta {
  display: inline-block;
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-text);
  padding: var(--space-3) var(--space-6);
  border: 1px solid rgba(250, 250, 249, 0.2);
  background: transparent;
  background-image: none;
  transition: border-color var(--duration-normal) ease,
              color var(--duration-normal) ease,
              background-color var(--duration-normal) ease;
  align-self: flex-start;
}

.exhibition-cta:hover {
  border-color: var(--color-gold);
  color: var(--color-background);
  background-color: var(--color-gold);
  background-size: 0;
}

.exhibition-cta:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

/* ─── Touring Schedule ─── */
.touring-header {
  margin-bottom: var(--space-12);
}

.touring-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.touring-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}

.touring-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-6) var(--space-5);
  border: 1px solid var(--rule-color);
  transition: border-color 0.3s ease, background 0.3s ease;
}

.touring-card:hover {
  border-color: rgba(184, 150, 78, 0.3);
  background: rgba(184, 150, 78, 0.03);
}

.touring-city {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
}

.touring-venue {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
}

.touring-date {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
  opacity: 0.6;
}

.touring-confirmed {
  font-size: 0.5625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-success);
  margin-top: var(--space-2);
}

.touring-pending {
  font-size: 0.5625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-dark-muted);
  opacity: 0.5;
  margin-top: var(--space-2);
}

/* ─── Archive List ─── */
.archive-header {
  margin-bottom: var(--space-8);
}

.archive-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.archive-list {
  display: flex;
  flex-direction: column;
}

.archive-item {
  display: grid;
  grid-template-columns: 4rem 1fr 1fr auto;
  gap: var(--space-4);
  align-items: center;
  padding: var(--space-4) 0;
  border-bottom: 1px solid var(--rule-color);
  transition: opacity 0.3s ease;
}

.archive-item:first-child {
  border-top: 1px solid var(--rule-color);
}

.archive-item:hover {
  opacity: 0.7;
}

.archive-year {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
}

.archive-name {
  font-family: var(--font-display);
  font-size: var(--text-body);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
}

.archive-location {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
}

.archive-type {
  font-size: 0.5625rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-dark-muted);
  padding: 0.125rem 0.5rem;
  border: 1px solid var(--rule-color);
  white-space: nowrap;
}

/* ─── CTA Section ─── */
.circuit-cta {
  padding-top: var(--space-48);
  padding-bottom: var(--space-48);
}

.cta-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-title {
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  letter-spacing: var(--tracking-hero);
  line-height: var(--leading-snug);
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);
  max-width: 20ch;
}

.cta-sub {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin-bottom: var(--space-8);
}

.cta-button-gold {
  display: inline-block;
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  padding: var(--space-4) var(--space-8);
  border: 1px solid var(--color-gold);
  color: var(--color-background);
  background-color: var(--color-gold);
  background-image: none;
  transition: background-color var(--duration-normal) ease,
              border-color var(--duration-normal) ease;
}

.cta-button-gold:hover {
  background-color: var(--color-gold-accessible);
  border-color: var(--color-gold-accessible);
  background-size: 0;
}

.cta-button-gold:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

/* ─── Responsive ─── */
@media (max-width: 1024px) {
  .touring-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .circuit-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-16);
    min-height: auto;
  }

  .circuit-hero-title {
    max-width: none;
    font-size: clamp(2rem, 8vw, var(--text-display));
  }

  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .category-card {
    min-height: 44px;
    padding: var(--space-6) var(--space-3);
  }

  .exhibition-card {
    grid-template-columns: 1fr;
  }

  .exhibition-card--flipped .exhibition-image-wrap {
    order: 0;
  }

  .exhibition-card--flipped .exhibition-body {
    order: 0;
  }

  .exhibition-image-wrap {
    aspect-ratio: 16 / 9;
  }

  .exhibition-body {
    padding: var(--space-6);
  }

  .exhibition-cta {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .touring-grid {
    grid-template-columns: 1fr;
  }

  .archive-item {
    grid-template-columns: 3rem 1fr auto;
  }

  .archive-location {
    display: none;
  }

  .cta-title {
    font-size: clamp(1.75rem, 6vw, var(--text-h1));
  }

  .cta-button-gold {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
  }

  .circuit-cta {
    padding-top: var(--space-24);
    padding-bottom: var(--space-24);
  }
}
</style>
