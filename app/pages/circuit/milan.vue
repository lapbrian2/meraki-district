<template>
  <div class="milan-page">

    <!-- ============================================
         HERO — Exhibition introduction
    ============================================= -->
    <section ref="heroSection" class="milan-hero section-dark">
      <div class="hero-image-full">
        <div class="hero-gradient" />
        <div class="hero-content section-wide">
          <div class="hero-meta reveal">
            <span class="stamped-overline">Meraki Circuit</span>
            <span class="hero-district">District 12 &mdash; Milan</span>
          </div>
          <h1 class="hero-title word-reveal">
            <em>Milan Residency</em>
          </h1>
          <p class="hero-subtitle reveal">An Architectural Procedure</p>
          <p class="hero-registry reveal">Exhibition Ref. M-12-2026</p>
        </div>
      </div>
    </section>

    <!-- ============================================
         CURATOR'S STATEMENT — Pull quote
    ============================================= -->
    <section ref="statementSection" class="milan-statement section section-dark">
      <div class="section-narrow">
        <blockquote class="statement-quote reveal">
          <p><em>&ldquo;The Milan residency was never meant to be a simple habitation. It was a study in how limestone, shadow, and silence interact with the working archival mind.&rdquo;</em></p>
        </blockquote>
        <p class="statement-cite reveal">&mdash; Chief Curator, District 12</p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         EXHIBITION DETAILS — Metadata panel
    ============================================= -->
    <section ref="detailsSection" class="milan-details section section-dark">
      <div class="section-default">
        <div class="details-header">
          <p class="overline reveal">Exhibition Details</p>
          <h2 class="details-title word-reveal"><em>Procedural Overview</em></h2>
        </div>
        <div class="details-grid">
          <div class="detail-card reveal">
            <span class="detail-label">Location</span>
            <span class="detail-value">Milan, Italy</span>
          </div>
          <div class="detail-card reveal">
            <span class="detail-label">Classification</span>
            <span class="detail-value">Residency &amp; Exhibition</span>
          </div>
          <div class="detail-card reveal">
            <span class="detail-label">Duration</span>
            <span class="detail-value">12 Lunar Cycles</span>
          </div>
          <div class="detail-card reveal">
            <span class="detail-label">Status</span>
            <span class="detail-value detail-value--gold">Archived</span>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         TIMELINE — Procedural timeline
    ============================================= -->
    <section ref="timelineSection" class="milan-timeline section section-dark">
      <div class="section-default">
        <div class="timeline-header">
          <p class="overline reveal">Procedural Timeline</p>
          <h2 class="timeline-title word-reveal"><em>Phases of the Residency</em></h2>
        </div>

        <div class="timeline-grid">
          <div v-for="phase in phases" :key="phase.numeral" class="timeline-phase reveal">
            <div class="phase-marker">
              <span class="phase-numeral">{{ phase.numeral }}</span>
              <span class="phase-year">{{ phase.year }}</span>
            </div>
            <div class="phase-content">
              <h3 class="phase-title"><em>{{ phase.title }}</em></h3>
              <p class="phase-desc">{{ phase.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         FEATURED WORKS — Exhibition gallery
    ============================================= -->
    <section ref="worksSection" class="milan-works section section-dark">
      <div class="section-wide">
        <div class="works-header">
          <p class="overline reveal">Featured Works</p>
          <h2 class="works-title word-reveal"><em>Artifacts of the Residency</em></h2>
        </div>

        <div class="works-grid">
          <article
            v-for="(work, i) in works"
            :key="work.title"
            class="work-entry reveal"
            :class="`work-entry--${(i % 3) + 1}`"
          >
            <div class="work-meta">
              <span class="work-site">Site {{ String(i + 1).padStart(2, '0') }}</span>
              <span v-if="work.verified" class="seal-base seal-verified">Verified Artifact</span>
            </div>
            <div class="work-plate">
              <NuxtImg
                :src="work.image"
                :alt="work.title"
                class="work-image archival-image"
                loading="lazy"
                width="640"
                height="480"
              />
            </div>
            <div class="work-caption">
              <h3 class="work-title"><em>{{ work.title }}</em></h3>
              <span class="work-category">{{ work.category }}</span>
              <p class="work-desc">{{ work.description }}</p>
              <span class="work-ref">Archive Ref. {{ work.ref }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         VENUE — Site information
    ============================================= -->
    <section ref="venueSection" class="milan-venue section section-dark">
      <div class="section-default">
        <div class="venue-grid">
          <div class="venue-text">
            <p class="overline reveal">The Venue</p>
            <h2 class="venue-title word-reveal"><em>Palazzo della Permanente</em></h2>
            <p class="venue-desc reveal">
              Housed within a converted limestone atelier in Milan's Brera district,
              the residency occupied a space designed to blur the threshold between
              preservation and inhabitation. Every surface was selected for its capacity
              to age — to participate in the archival process rather than resist it.
            </p>
            <div class="venue-meta reveal">
              <div class="venue-meta-row">
                <span class="venue-meta-label">Address</span>
                <span class="venue-meta-value">Via Turati 34, Brera, Milan</span>
              </div>
              <div class="venue-meta-row">
                <span class="venue-meta-label">Coordinates</span>
                <span class="venue-meta-value">45.4732&deg; N, 9.1903&deg; E</span>
              </div>
              <div class="venue-meta-row">
                <span class="venue-meta-label">Capacity</span>
                <span class="venue-meta-value">120 visitors per session</span>
              </div>
            </div>
          </div>
          <div class="venue-image-wrap reveal">
            <NuxtImg
              src="/images/districts/fashion-atelier.webp"
              alt="Palazzo della Permanente, Milan"
              class="venue-image archival-image"
              loading="lazy"
              width="640"
              height="480"
            />
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         FEATURED CREATORS — Artists in residence
    ============================================= -->
    <section ref="creatorsSection" class="milan-creators section section-dark">
      <div class="section-default">
        <div class="creators-header">
          <p class="overline reveal">Artists in Residence</p>
          <h2 class="creators-title word-reveal"><em>The Practitioners</em></h2>
        </div>

        <div class="creators-grid">
          <article v-for="creator in featuredCreators" :key="creator.name" class="creator-card vellum-card reveal">
            <div class="creator-body">
              <span class="seal-base" :class="`seal-${creator.seal.toLowerCase()}`">{{ creator.seal }}</span>
              <h3 class="creator-name"><em>{{ creator.name }}</em></h3>
              <span class="creator-discipline">{{ creator.discipline }}</span>
              <p class="creator-contribution">{{ creator.contribution }}</p>
              <NuxtLink v-if="creator.slug" :to="`/creators/${creator.slug}`" class="creator-link">
                View Monograph &rarr;
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CIRCUIT NAV — Other exhibitions
    ============================================= -->
    <section ref="circuitNavSection" class="milan-circuit-nav section section-dark">
      <div class="section-default circuit-nav-inner">
        <p class="overline reveal">The Meraki Circuit</p>
        <h2 class="circuit-nav-title word-reveal"><em>Continue the circuit.</em></h2>
        <p class="circuit-nav-sub reveal">
          The Meraki Circuit connects residencies, exhibitions, and gatherings
          across the global creative frontier. Each event is selected for its
          commitment to craft over spectacle.
        </p>
        <NuxtLink to="/circuit" class="cta-button-gold reveal">
          View All Exhibitions &rarr;
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
  title: 'Milan Residency — Meraki Circuit — Meraki Road',
  meta: [
    { name: 'description', content: 'An architectural residency and exhibition in Milan. A study in limestone, shadow, and the working archival mind.' },
  ],
})

useSeoMeta({
  ogTitle: 'Milan Residency — Meraki Circuit — Meraki Road',
  ogDescription: 'An architectural residency and exhibition in Milan. A study in limestone, shadow, and the working archival mind.',
  twitterTitle: 'Milan Residency — Meraki Circuit — Meraki Road',
  twitterDescription: 'An architectural residency and exhibition in Milan. A study in limestone, shadow, and the working archival mind.',
})

/* -- Section refs ------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
const statementSection = ref<HTMLElement | null>(null)
const detailsSection = ref<HTMLElement | null>(null)
const timelineSection = ref<HTMLElement | null>(null)
const worksSection = ref<HTMLElement | null>(null)
const venueSection = ref<HTMLElement | null>(null)
const creatorsSection = ref<HTMLElement | null>(null)
const circuitNavSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

useGsapScrollReveal(statementSection, '.reveal')

useGsapScrollReveal(detailsSection, '.reveal', { stagger: 0.1 })
useWordReveal(detailsSection, '.word-reveal')

useGsapScrollReveal(timelineSection, '.reveal', { stagger: 0.12 })
useWordReveal(timelineSection, '.word-reveal')

useGsapScrollReveal(worksSection, '.reveal', { stagger: 0.15 })
useWordReveal(worksSection, '.word-reveal')

useGsapScrollReveal(venueSection, '.reveal', { stagger: 0.1 })
useWordReveal(venueSection, '.word-reveal')

useGsapScrollReveal(creatorsSection, '.reveal', { stagger: 0.1 })
useWordReveal(creatorsSection, '.word-reveal')

useGsapScrollReveal(circuitNavSection, '.reveal')
useWordReveal(circuitNavSection, '.word-reveal')

/* -- Data --------------------------------------- */
const phases = [
  {
    numeral: 'I',
    year: '2024',
    title: 'Inception',
    description: 'Geological survey of the Milan site. Material authentication of the limestone substrate. Environmental baseline recording across 90 days of seasonal variance.',
  },
  {
    numeral: 'II',
    year: '2025',
    title: 'The Residency',
    description: 'Twelve months of embedded practice. Artists working within the space, with the space — treating the venue as both studio and subject. Public access granted for curated viewing sessions.',
  },
  {
    numeral: 'III',
    year: '2026',
    title: 'The Exhibition',
    description: 'Public exhibition of residency outputs. Artifacts, documentation, and environmental records presented as a unified archival body. The space itself becomes the final exhibit.',
  },
  {
    numeral: 'IV',
    year: '2026',
    title: 'Archive',
    description: 'Permanent sequestration and digital migration. Every artifact catalogued, every environmental condition recorded. The residency enters the Provenance district as a sealed archive.',
  },
]

interface Work {
  title: string
  image: string
  category: string
  description: string
  ref: string
  verified: boolean
}

const works: Work[] = [
  {
    title: 'The Obsidian Fragment',
    image: '/images/districts/the-provenance.webp',
    category: 'Architecture',
    description: 'A structure designed as a measurement tool. Every angle calculated to align with the meridian at the summer solstice. The building itself is an instrument — legible only to those who understand what it measures.',
    ref: 'M-12-09',
    verified: true,
  },
  {
    title: 'Permanence Study No. 3',
    image: '/images/districts/fieldwork.webp',
    category: 'Material Science',
    description: 'A series of limestone panels exposed to accelerated weathering cycles. Each panel documents 200 years of simulated erosion, compressed into 30 days of controlled environmental stress.',
    ref: 'M-12-14',
    verified: false,
  },
  {
    title: 'The Brera Correspondence',
    image: '/images/districts/meridian.webp',
    category: 'Archival Document',
    description: 'A bound collection of 47 letters exchanged between resident practitioners during the residency. Each letter written on handmade paper produced from the venue\'s own limestone dust.',
    ref: 'M-12-22',
    verified: true,
  },
  {
    title: 'Shadow Catalogue',
    image: '/images/districts/the-collective.webp',
    category: 'Environmental Record',
    description: 'A photographic index of every shadow cast within the residency space, recorded at the same hour each day for twelve months. 365 exposures. The light tells the story of the year.',
    ref: 'M-12-31',
    verified: false,
  },
]

interface FeaturedCreator {
  name: string
  discipline: string
  seal: string
  contribution: string
  slug?: string
}

const featuredCreators: FeaturedCreator[] = [
  {
    name: 'Julian Vane',
    discipline: 'Architectural Ethics & Digital Preservation',
    seal: 'Fellow',
    contribution: 'Lead resident. Developed the environmental encoding methodology used across all four exhibition artifacts.',
    slug: 'julian-vane',
  },
  {
    name: 'Lira Okafor',
    discipline: 'Material Science & Conservation',
    seal: 'Verified',
    contribution: 'Conducted the accelerated weathering studies and established the limestone dust paper production process.',
  },
  {
    name: 'Matteo Bianchi',
    discipline: 'Architectural Photography',
    seal: 'Associate',
    contribution: 'Created the Shadow Catalogue and documented the full twelve-month residency in long-exposure archival prints.',
  },
]
</script>

<style scoped>
/* ═══════════════════════════════════════════════
   MILAN RESIDENCY — Circuit Exhibition (Dark)
   ═══════════════════════════════════════════════ */

/* ─── Hero ─── */
.milan-hero {
  position: relative;
  min-height: 75vh;
  display: flex;
  align-items: flex-end;
  background: var(--color-dark-bg);
}

.hero-image-full {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(135deg, #111113 0%, #1a1a1e 50%, #111113 100%);
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(9, 9, 11, 0.95) 0%,
    rgba(9, 9, 11, 0.4) 60%,
    rgba(9, 9, 11, 0.2) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: var(--space-16) var(--content-padding);
}

.hero-meta {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.hero-district {
  font-family: var(--font-mono);
  font-size: var(--text-overline);
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  opacity: 0.6;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 300;
  font-style: italic;
  letter-spacing: var(--tracking-hero);
  line-height: var(--leading-display);
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
}

.hero-subtitle {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-secondary);
  margin-bottom: var(--space-4);
}

.hero-registry {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  opacity: 0.4;
}

/* ─── Curator's Statement ─── */
.milan-statement {
  padding-top: var(--space-24);
  padding-bottom: var(--space-24);
}

.statement-quote {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  line-height: var(--leading-snug);
  text-align: center;
  margin-bottom: var(--space-6);
}

.statement-cite {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
  text-align: center;
  display: block;
}

/* ─── Exhibition Details ─── */
.details-header {
  margin-bottom: var(--space-12);
}

.details-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
}

.detail-card {
  border: 1px solid rgba(184, 150, 78, 0.15);
  padding: var(--space-6) var(--space-4);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.detail-label {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  font-weight: 400;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
}

.detail-value {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
}

.detail-value--gold {
  color: var(--color-gold);
}

/* ─── Procedural Timeline ─── */
.timeline-header {
  margin-bottom: var(--space-12);
}

.timeline-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.timeline-grid {
  display: flex;
  flex-direction: column;
}

.timeline-phase {
  display: grid;
  grid-template-columns: 10rem 1fr;
  gap: var(--space-8);
  padding: var(--space-8) 0;
  border-bottom: 1px solid var(--rule-color);
}

.timeline-phase:first-child {
  border-top: 1px solid var(--rule-color);
}

.phase-marker {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.phase-numeral {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-gold);
  line-height: 1;
}

.phase-year {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: var(--tracking-mega-wide);
  color: var(--color-dark-muted);
  opacity: 0.5;
}

.phase-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-3);
}

.phase-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
}

/* ─── Featured Works ─── */
.works-header {
  margin-bottom: var(--space-16);
}

.works-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-8);
}

.work-entry--1 {
  grid-column: 1 / 8;
}

.work-entry--2 {
  grid-column: 6 / 13;
  margin-top: var(--space-16);
}

.work-entry--3 {
  grid-column: 2 / 9;
}

.work-meta {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
}

.work-site {
  font-family: var(--font-mono);
  font-size: var(--text-overline);
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0.7;
}

.work-plate {
  overflow: hidden;
  margin-bottom: var(--space-4);
}

.work-image {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.7s ease, transform 0.7s ease;
}

.work-plate:hover .work-image {
  filter: grayscale(0);
  transform: scale(1.02);
}

.work-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-2);
}

.work-category {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0.7;
  display: block;
  margin-bottom: var(--space-2);
}

.work-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin-bottom: var(--space-3);
}

.work-ref {
  font-family: var(--font-mono);
  font-size: 0.5625rem;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  opacity: 0.4;
}

/* ─── Venue ─── */
.venue-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: start;
}

.venue-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);
}

.venue-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-8);
}

.venue-meta {
  display: flex;
  flex-direction: column;
}

.venue-meta-row {
  display: flex;
  justify-content: space-between;
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--rule-color);
}

.venue-meta-row:first-child {
  border-top: 1px solid var(--rule-color);
}

.venue-meta-label {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
}

.venue-meta-value {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-dark-text);
}

.venue-image-wrap {
  overflow: hidden;
}

.venue-image {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

/* ─── Featured Creators ─── */
.creators-header {
  margin-bottom: var(--space-12);
}

.creators-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.creators-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.creator-card {
  padding: var(--space-6);
}

.creator-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.creator-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
}

.creator-discipline {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
}

.creator-contribution {
  font-size: var(--text-small);
  color: var(--color-dark-secondary);
  line-height: var(--leading-relaxed);
}

.creator-link {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  transition: opacity 0.2s ease;
  margin-top: var(--space-2);
}

.creator-link:hover {
  opacity: 0.7;
}

/* ─── Circuit Nav CTA ─── */
.milan-circuit-nav {
  padding-top: var(--space-48);
  padding-bottom: var(--space-48);
}

.circuit-nav-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.circuit-nav-title {
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  letter-spacing: var(--tracking-hero);
  line-height: var(--leading-snug);
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);
}

.circuit-nav-sub {
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

/* ─── Reduced Motion ─── */
@media (prefers-reduced-motion: reduce) {
  .work-image {
    transition: none;
  }
  .work-plate:hover .work-image {
    transform: none;
  }
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .milan-hero {
    min-height: 60vh;
  }

  .hero-title {
    font-size: clamp(2.5rem, 10vw, 4rem);
  }

  .hero-content {
    padding: var(--space-8) var(--content-padding);
  }

  .hero-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-2);
  }

  .details-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .timeline-phase {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .phase-marker {
    flex-direction: row;
    align-items: baseline;
    gap: var(--space-3);
  }

  .works-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }

  .work-entry--1,
  .work-entry--2,
  .work-entry--3 {
    grid-column: 1 / -1;
    margin-top: 0;
  }

  .venue-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .creators-grid {
    grid-template-columns: 1fr;
  }

  .milan-circuit-nav {
    padding-top: var(--space-24);
    padding-bottom: var(--space-24);
  }

  .cta-button-gold {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
  }

  .creator-link {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }
}
</style>
