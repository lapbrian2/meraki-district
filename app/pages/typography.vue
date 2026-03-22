<template>
  <div ref="pageRef" class="typo-page">

    <!-- 1. Hero -->
    <section class="typo-hero spatial-depth">
      <div class="typo-hero-inner">
        <p class="typo-overline stamped-overline reveal">Type System</p>
        <h1 class="typo-hero-title word-reveal">The Archival Voice</h1>
        <p class="typo-hero-sub reveal">
          Typography defines institutional authority. Every weight, every
          tracking value, every pairing choice shapes how the road speaks.
        </p>
      </div>
    </section>

    <!-- 2. Type Scale Specimens -->
    <section class="typo-section">
      <h2 class="typo-section-title word-reveal">Type Scale Specimens</h2>
      <p class="typo-section-desc reveal">Newsreader at three weights — the range that carries the brand voice.</p>
      <div class="typo-specimens">
        <div
          v-for="spec in specimens"
          :key="spec.weight"
          class="typo-specimen-card vellum-card reveal"
        >
          <div class="typo-specimen-meta">
            <span class="typo-specimen-weight">{{ spec.weight }}</span>
            <span class="typo-specimen-name">{{ spec.name }}</span>
          </div>
          <p
            class="typo-specimen-text"
            :style="{ fontWeight: spec.weight, fontStyle: spec.italic ? 'italic' : 'normal' }"
          >
            {{ spec.specimen }}
          </p>
        </div>
      </div>
    </section>

    <!-- 3. Pairing Rules -->
    <section class="typo-section">
      <h2 class="typo-section-title word-reveal">Pairing Rules</h2>
      <p class="typo-section-desc reveal">Newsreader carries display and editorial weight. Manrope handles interface and body.</p>
      <div class="typo-pairings">
        <div class="typo-pair-card vellum-card reveal">
          <p class="typo-pair-label">Heading + Body</p>
          <div class="typo-pair-example">
            <h3 class="typo-pair-heading">Twelve Districts, One Road</h3>
            <p class="typo-pair-body">
              A creative network built for practitioners who hold ambition and
              integrity as a single standard. Where craft meets culture, and every
              maker finds their district.
            </p>
          </div>
        </div>
        <div class="typo-pair-card vellum-card reveal">
          <p class="typo-pair-label">Label + Description</p>
          <div class="typo-pair-example">
            <p class="typo-pair-overline">Meraki Studio</p>
            <p class="typo-pair-desc">
              Where visual art meets machine intelligence — a space for creators
              working at the boundary of human expression and computational vision.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Letter-Spacing Scale -->
    <section class="typo-section">
      <h2 class="typo-section-title word-reveal">Letter-Spacing Scale</h2>
      <p class="typo-section-desc reveal">Four tracking values govern spatial rhythm across the system.</p>
      <div class="typo-tracking-grid">
        <div
          v-for="track in trackingScale"
          :key="track.name"
          class="typo-tracking-card vellum-card reveal"
        >
          <p class="typo-tracking-value">{{ track.value }}</p>
          <p class="typo-tracking-name">{{ track.name }}</p>
          <p
            class="typo-tracking-sample"
            :style="{ letterSpacing: track.value }"
          >
            MERAKI ROAD
          </p>
        </div>
      </div>
    </section>

    <!-- 5. The Hierarchy -->
    <section class="typo-section">
      <h2 class="typo-section-title word-reveal">The Hierarchy</h2>
      <p class="typo-section-desc reveal">The full type scale from display to caption — every level of the voice.</p>
      <div class="typo-hierarchy">
        <div
          v-for="level in hierarchy"
          :key="level.label"
          class="typo-hierarchy-row reveal"
        >
          <span class="typo-hierarchy-label">{{ level.label }}</span>
          <div class="typo-hierarchy-rule" />
          <p
            class="typo-hierarchy-sample"
            :style="{
              fontFamily: level.font,
              fontSize: level.size,
              fontWeight: level.weight,
              fontStyle: level.italic ? 'italic' : 'normal',
              letterSpacing: level.tracking,
              lineHeight: level.leading,
              textTransform: level.transform || 'none',
            }"
          >
            {{ level.text }}
          </p>
        </div>
      </div>
    </section>

    <!-- 6. Line-Draw Hover -->
    <section class="typo-section">
      <h2 class="typo-section-title word-reveal">Line-Draw Hover</h2>
      <p class="typo-section-desc reveal">
        The signature interaction — a gold underline draws left to right on hover.
      </p>
      <div class="typo-linedraw-demo reveal">
        <a href="#" class="typo-linedraw-link line-draw" @click.prevent>Explore the Districts</a>
        <a href="#" class="typo-linedraw-link line-draw" @click.prevent>Read the Manifesto</a>
        <a href="#" class="typo-linedraw-link line-draw" @click.prevent>View the Collective</a>
        <a href="#" class="typo-linedraw-link line-draw" @click.prevent>Apply for Residency</a>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

const pageRef = ref<HTMLElement | null>(null)
useGsapScrollReveal(pageRef, '.reveal', { stagger: 0.12 })
useWordReveal(pageRef, '.word-reveal')

useHead({
  title: 'Typography — Meraki Road',
  meta: [
    { name: 'description', content: 'The typographic system behind Meraki Road — weights, pairings, tracking, and hierarchy.' },
  ],
})

useSeoMeta({
  ogTitle: 'Typography — Meraki Road',
  ogDescription: 'The typographic system behind Meraki Road — weights, pairings, tracking, and hierarchy.',
  ogImage: 'https://meraki-district.vercel.app/images/og-default.png',
  twitterTitle: 'Typography — Meraki Road',
  twitterDescription: 'The typographic system behind Meraki Road — weights, pairings, tracking, and hierarchy.',
})

// Specimens data
const specimens = [
  { weight: 200, name: 'Light', specimen: 'Quiet Reflections', italic: true },
  { weight: 400, name: 'Regular', specimen: 'Archival Standard', italic: false },
  { weight: 800, name: 'Black', specimen: 'Bold Proclamation', italic: false },
]

// Tracking scale
const trackingScale = [
  { name: 'Tight', value: '-0.02em' },
  { name: 'Normal', value: '0em' },
  { name: 'Wide', value: '0.05em' },
  { name: 'Widest', value: '0.2em' },
]

// Hierarchy levels
const hierarchy = [
  {
    label: 'Display',
    font: "var(--font-display)",
    size: 'var(--text-display)',
    weight: 300,
    italic: true,
    tracking: 'var(--tracking-hero)',
    leading: 'var(--leading-display)',
    text: 'Where craft meets culture.',
  },
  {
    label: 'Overline',
    font: "var(--font-body)",
    size: 'var(--text-overline)',
    weight: 500,
    italic: false,
    tracking: 'var(--tracking-widest)',
    leading: 'var(--leading-normal)',
    transform: 'uppercase',
    text: 'Est. 2026',
  },
  {
    label: 'Pull Quote',
    font: "var(--font-display)",
    size: 'var(--text-h2)',
    weight: 300,
    italic: true,
    tracking: 'var(--tracking-tight)',
    leading: 'var(--leading-snug)',
    text: 'Meet you at Meraki Road.',
  },
  {
    label: 'Body',
    font: "var(--font-body)",
    size: 'var(--text-body)',
    weight: 400,
    italic: false,
    tracking: 'var(--tracking-normal)',
    leading: 'var(--leading-relaxed)',
    text: 'A creative network built for practitioners who hold ambition and integrity as a single standard.',
  },
  {
    label: 'Caption',
    font: "var(--font-body)",
    size: 'var(--text-caption)',
    weight: 400,
    italic: false,
    tracking: 'var(--tracking-wide)',
    leading: 'var(--leading-normal)',
    text: 'Visual Art & AI — Meraki Studio',
  },
]
</script>

<style scoped>
/* ─── Page ─── */
.typo-page {
  background: var(--color-background);
  color: var(--color-text);
  min-height: 100vh;
}

/* ─── Hero ─── */
.typo-hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-32) var(--content-padding) var(--space-16);
  background: var(--color-dark-bg);
  position: relative;
}

.typo-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(184,150,78,0.06) 100%);
  pointer-events: none;
}

.typo-hero-inner {
  position: relative;
  z-index: 1;
  max-width: 680px;
}

.typo-overline {
  color: var(--color-gold);
  font-family: var(--font-body);
  font-weight: 500;
  margin-bottom: var(--space-6);
}

.typo-hero-title {
  font-family: var(--font-display);
  font-size: var(--text-display);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-display);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
  margin-bottom: var(--space-8);
  text-shadow: 0 2px 40px rgba(184,150,78,0.15);
}

.typo-hero-sub {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 48ch;
  margin: 0 auto;
}

/* ─── Sections ─── */
.typo-section {
  padding: var(--section-gap) var(--content-padding);
  max-width: var(--content-max-width);
  margin: 0 auto;
}

.typo-section-title {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: italic;
  letter-spacing: var(--tracking-tight);
  margin-bottom: var(--space-4);
}

.typo-section-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-12);
  max-width: 52ch;
}

/* ─── Specimens ─── */
.typo-specimens {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.typo-specimen-card {
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.typo-specimen-meta {
  display: flex;
  align-items: baseline;
  gap: var(--space-4);
}

.typo-specimen-weight {
  font-family: var(--font-mono);
  font-size: var(--text-h2);
  color: var(--color-gold);
  letter-spacing: var(--tracking-tight);
  font-weight: 300;
}

.typo-specimen-name {
  font-family: var(--font-body);
  font-size: var(--text-small);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-text-muted);
}

.typo-specimen-text {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

/* ─── Pairings ─── */
.typo-pairings {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.typo-pair-card {
  padding: var(--space-8);
}

.typo-pair-label {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-gold);
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid rgba(184,150,78,0.15);
}

.typo-pair-example {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.typo-pair-heading {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
}

.typo-pair-body {
  font-family: var(--font-body);
  font-size: var(--text-body);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
}

.typo-pair-overline {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-gold);
  font-weight: 500;
}

.typo-pair-desc {
  font-family: var(--font-body);
  font-size: var(--text-body);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
}

/* ─── Tracking Scale ─── */
.typo-tracking-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

.typo-tracking-card {
  padding: var(--space-8);
  text-align: center;
}

.typo-tracking-value {
  font-family: var(--font-mono);
  font-size: var(--text-h3);
  color: var(--color-gold);
  margin-bottom: var(--space-2);
}

.typo-tracking-name {
  font-family: var(--font-body);
  font-size: var(--text-small);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-text-muted);
  margin-bottom: var(--space-6);
}

.typo-tracking-sample {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: 500;
  color: var(--color-text);
}

/* ─── Hierarchy ─── */
.typo-hierarchy {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.typo-hierarchy-row {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: var(--space-6);
  align-items: baseline;
  position: relative;
}

.typo-hierarchy-label {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-gold);
  font-weight: 500;
  padding-top: 0.2em;
}

.typo-hierarchy-rule {
  display: none;
}

.typo-hierarchy-sample {
  position: relative;
  padding-bottom: var(--space-6);
  border-bottom: 1px solid var(--color-border);
}

/* ─── Line-Draw Demo ─── */
.typo-linedraw-demo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-6);
}

.typo-linedraw-link {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  letter-spacing: var(--tracking-tight);
  color: var(--color-text);
  cursor: pointer;
  padding-bottom: 4px;
}

/* ─── Responsive ─── */
@media (max-width: 1024px) {
  .typo-specimens {
    grid-template-columns: 1fr;
  }

  .typo-pairings {
    grid-template-columns: 1fr;
  }

  .typo-tracking-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .typo-hero {
    min-height: 50vh;
    padding: var(--space-24) var(--content-padding) var(--space-12);
  }

  .typo-hero-title {
    font-size: clamp(2rem, 8vw, 3.5rem);
  }

  .typo-section {
    padding: var(--space-16) var(--content-padding);
  }

  .typo-hierarchy-row {
    grid-template-columns: 1fr;
    gap: var(--space-2);
  }

  .typo-tracking-grid {
    grid-template-columns: 1fr 1fr;
  }

  .typo-linedraw-link {
    font-size: var(--text-h3);
  }
}

@media (max-width: 480px) {
  .typo-tracking-grid {
    grid-template-columns: 1fr;
  }
}
</style>
