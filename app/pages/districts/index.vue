<template>
  <div ref="pageRef" class="districts-page">
    <!-- Hero -->
    <section class="dp-hero">
      <h1 class="dp-display word-reveal">Eleven districts, one road.</h1>
      <p class="dp-subtitle reveal">
        Each with its own mandate. Each built to serve a different dimension of creative practice.
        This is the directory.
      </p>
      <div class="dp-rule reveal" aria-hidden="true" />
    </section>

    <!-- Phase I — Active Districts (hero-sized alternating cards) -->
    <section ref="activeSection" class="dp-active">
      <p class="dp-section-label reveal">
        <span class="dp-label-dot dp-dot--active" />
        Active
      </p>

      <div
        v-for="(d, i) in active"
        :key="d.slug"
        class="dp-hero-card vellum-card reveal"
        :class="{ 'dp-hero-card--flipped': i % 2 !== 0 }"
      >
        <div class="dp-hero-card-image grayscale-hover">
          <NuxtLink :to="`/districts/${d.slug}`" tabindex="-1" aria-hidden="true">
            <NuxtImg
              :src="d.image"
              :alt="d.name"
              loading="lazy"
              width="900"
              height="600"
            />
          </NuxtLink>
        </div>
        <div class="dp-hero-card-content">
          <span class="dp-hero-number">{{ d.number }}</span>
          <span class="dp-badge dp-badge--active">
            <span class="dp-badge-dot dp-badge-dot--active" />
            Active
          </span>
          <span class="dp-hero-type">{{ d.type }}</span>
          <h2 class="dp-hero-name">{{ d.name }}</h2>
          <p class="dp-hero-subtitle">{{ d.subtitle }}</p>
          <p class="dp-hero-desc">{{ d.longDescription || d.description }}</p>
          <NuxtLink :to="`/districts/${d.slug}`" class="dp-enter-btn">
            Enter District →
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Phase II — Coming Soon (medium text-dominant cards) -->
    <section ref="comingSection" class="dp-coming">
      <p class="dp-section-overline reveal">Emerging Territories</p>
      <p class="dp-section-label reveal">
        <span class="dp-label-dot dp-dot--coming" />
        Coming Soon
      </p>

      <div class="dp-coming-grid">
        <NuxtLink
          v-for="d in comingSoon"
          :key="d.slug"
          :to="`/districts/${d.slug}`"
          class="dp-coming-card vellum-card reveal"
        >
          <span class="dp-coming-number">{{ d.number }}</span>
          <span class="dp-badge dp-badge--coming">
            <span class="dp-badge-dot dp-badge-dot--coming" />
            Coming Soon
          </span>
          <span class="dp-coming-type">{{ d.type }}</span>
          <h3 class="dp-coming-name">{{ d.name }}</h3>
          <p class="dp-coming-subtitle">{{ d.subtitle }}</p>
          <p class="dp-coming-desc">{{ d.description }}</p>
          <span v-if="d.statusNote" class="dp-status-note">{{ d.statusNote }}</span>
        </NuxtLink>
      </div>
    </section>

    <!-- Future Frontiers — In Development (compact grid) -->
    <section ref="devSection" class="dp-dev">
      <p class="dp-section-overline reveal">Future Frontiers</p>
      <p class="dp-section-label reveal">
        <span class="dp-label-dot dp-dot--dev" />
        In Development
      </p>

      <div class="dp-dev-grid">
        <div
          v-for="d in development"
          :key="d.slug"
          class="dp-dev-card reveal"
        >
          <span class="dp-dev-number">{{ d.number }}</span>
          <span class="dp-badge dp-badge--dev">
            <span class="dp-badge-dot dp-badge-dot--dev" />
            In Development
          </span>
          <h3 class="dp-dev-name">{{ d.name }}</h3>
          <p class="dp-dev-subtitle">{{ d.subtitle }}</p>
          <span class="dp-dev-type">{{ d.type }}</span>
        </div>
      </div>
    </section>

    <!-- Footer CTA -->
    <section class="dp-cta-section">
      <div class="dp-cta-inner reveal">
        <h2 class="dp-cta-title word-reveal">Ready to walk the road?</h2>
        <p class="dp-cta-sub">For creators building at the intersection of craft and computation.</p>
        <NuxtLink to="/apply" class="dp-cta-btn">Express Interest →</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'
import { districts } from '~/composables/useDistricts'

const pageRef = ref<HTMLElement | null>(null)
const activeSection = ref<HTMLElement | null>(null)
const comingSection = ref<HTMLElement | null>(null)
const devSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(pageRef, '.reveal', { stagger: 0.06 })
useWordReveal(pageRef, '.word-reveal')

// Group by status
const active = districts.filter(d => d.status === 'active')
const comingSoon = districts.filter(d => d.status === 'coming-soon')
const development = districts.filter(d => d.status === 'development')

useHead({
  title: 'Districts — Meraki Road',
  meta: [
    { name: 'description', content: 'Eleven districts, one road. Navigate the creative infrastructure of Meraki Road.' },
  ],
})
</script>

<style scoped>
.districts-page {
  background: var(--color-background);
  color: var(--color-ink, #FAFAF9);
}

/* ─── Hero ─── */
.dp-hero {
  padding: calc(var(--space-32) + 4rem) var(--content-padding) var(--space-16);
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
}

.dp-display {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: clamp(2.75rem, 6vw, 5rem);
  line-height: 1.05;
  letter-spacing: var(--tracking-tight);
  margin-bottom: var(--space-4);
  justify-content: center;
}

.dp-subtitle {
  font-size: 1.0625rem;
  font-weight: 300;
  color: var(--color-text-muted);
  line-height: 1.65;
  max-width: 44ch;
  margin: 0 auto;
}

.dp-rule {
  width: 4rem;
  height: 1px;
  background: var(--rule-color);
  margin: var(--space-8) auto 0;
}

/* ─── Section Labels ─── */
.dp-section-overline {
  font-size: var(--text-overline);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-gold);
  margin-bottom: var(--space-2);
}

.dp-section-label {
  font-size: var(--text-overline);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: var(--space-8);
}

.dp-label-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.dp-dot--active { background: #16A34A; }
.dp-dot--coming { background: var(--color-gold); }
.dp-dot--dev { background: var(--color-text-muted); opacity: 0.5; }

/* ─── Status Badges ─── */
.dp-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  padding: 0.25rem 0.625rem;
  border-radius: 2px;
  margin-bottom: var(--space-3);
}

.dp-badge--active {
  color: #16A34A;
  background: rgba(22, 163, 74, 0.08);
  border: 1px solid rgba(22, 163, 74, 0.2);
}

.dp-badge--coming {
  color: var(--color-gold);
  background: rgba(184, 150, 78, 0.08);
  border: 1px solid rgba(184, 150, 78, 0.2);
}

.dp-badge--dev {
  color: var(--color-text-muted);
  background: rgba(113, 113, 122, 0.08);
  border: 1px solid rgba(113, 113, 122, 0.15);
}

.dp-badge-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
}

.dp-badge-dot--active { background: #16A34A; }
.dp-badge-dot--coming { background: var(--color-gold); }
.dp-badge-dot--dev { background: var(--color-text-muted); }

/* ─── Phase I: Active — Hero Cards ─── */
.dp-active {
  padding: 0 var(--content-padding) var(--space-16);
  max-width: 76rem;
  margin: 0 auto;
}

.dp-hero-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border: 1px solid var(--rule-color);
  overflow: hidden;
  margin-bottom: var(--space-6);
  transition: border-color 0.4s ease;
  box-shadow: inset 0 0 80px rgba(0,0,0,0.4);
}

.dp-hero-card:last-child {
  margin-bottom: 0;
}

.dp-hero-card:hover {
  border-color: var(--color-gold);
}

/* Flip image/content sides on alternate cards */
.dp-hero-card--flipped .dp-hero-card-image {
  order: 2;
}

.dp-hero-card--flipped .dp-hero-card-content {
  order: 1;
}

.dp-hero-card-image {
  aspect-ratio: 3/2;
  overflow: hidden;
  position: relative;
}

.dp-hero-card-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.3) 100%);
  pointer-events: none;
  z-index: 1;
}

.dp-hero-card-image a {
  display: block;
  height: 100%;
  text-decoration: none;
  background-image: none;
}

.dp-hero-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.dp-hero-card:hover .dp-hero-card-image img {
  transform: scale(1.05);
}

.dp-hero-card-content {
  padding: var(--space-10) var(--space-12);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.dp-hero-number {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: clamp(3rem, 5vw, 5rem);
  line-height: 1;
  color: var(--color-text-muted);
  opacity: 0.15;
  margin-bottom: var(--space-2);
}

.dp-hero-type {
  font-size: 0.625rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--tracking-mega-wide);
  color: var(--color-gold);
  display: block;
  margin-bottom: var(--space-2);
}

.dp-hero-name {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: clamp(1.75rem, 3vw, 2.75rem);
  color: var(--color-ink, #FAFAF9);
  margin-bottom: var(--space-1);
  transition: color 0.3s ease;
}

.dp-hero-subtitle {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: var(--text-small);
  color: var(--color-gold);
  opacity: 0.6;
  margin-bottom: var(--space-4);
  letter-spacing: var(--tracking-wide);
}

.dp-hero-card:hover .dp-hero-name {
  color: var(--color-gold);
}

.dp-hero-desc {
  font-size: var(--text-small);
  font-weight: 300;
  line-height: 1.7;
  color: var(--color-text-muted);
  margin-bottom: var(--space-6);
  max-width: 48ch;
}

.dp-enter-btn {
  display: inline-flex;
  align-items: center;
  padding: var(--space-3) var(--space-8);
  background: var(--color-gold);
  color: var(--color-background);
  font-size: var(--text-overline);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  text-decoration: none;
  background-image: none;
  transition: opacity 0.3s ease, padding-left 0.3s ease;
  align-self: flex-start;
}

.dp-enter-btn:hover {
  opacity: 0.85;
  padding-left: var(--space-10);
}

/* ─── Phase II: Coming Soon — Medium Cards ─── */
.dp-coming {
  padding: var(--space-16) var(--content-padding);
  max-width: 76rem;
  margin: 0 auto;
  border-top: 1px solid var(--rule-color);
}

.dp-coming-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}

.dp-coming-card {
  padding: var(--space-8) var(--space-6);
  border: 1px solid var(--rule-color);
  text-decoration: none;
  color: inherit;
  background-image: none;
  display: flex;
  flex-direction: column;
  transition: background 0.35s ease, border-color 0.35s ease;
}

.dp-coming-card:hover {
  background: var(--color-surface);
  border-color: rgba(184, 150, 78, 0.3);
}

.dp-coming-number {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1;
  color: var(--color-text-muted);
  opacity: 0.12;
  margin-bottom: var(--space-3);
}

.dp-coming-type {
  font-size: 0.5625rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--tracking-mega-wide);
  color: var(--color-gold);
  display: block;
  margin-bottom: var(--space-2);
}

.dp-coming-name {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: var(--text-h3);
  color: var(--color-ink, #FAFAF9);
  margin-bottom: var(--space-1);
  transition: color 0.3s ease;
}

.dp-coming-subtitle {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: 0.75rem;
  color: var(--color-gold);
  opacity: 0.5;
  margin-bottom: var(--space-3);
  letter-spacing: var(--tracking-wide);
}

.dp-coming-card:hover .dp-coming-name {
  color: var(--color-gold);
}

.dp-coming-desc {
  font-size: var(--text-small);
  font-weight: 300;
  line-height: 1.6;
  color: var(--color-text-muted);
}

.dp-status-note {
  font-size: var(--text-overline);
  color: var(--color-gold);
  opacity: 0.7;
  margin-top: var(--space-4);
  font-style: italic;
}

/* ─── Future Frontiers: In Development — Compact Grid ─── */
.dp-dev {
  padding: var(--space-16) var(--content-padding);
  max-width: 76rem;
  margin: 0 auto;
  border-top: 1px solid var(--rule-color);
}

.dp-dev-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-3);
}

.dp-dev-card {
  padding: var(--space-6) var(--space-4);
  border: 1px solid var(--rule-color);
  display: flex;
  flex-direction: column;
  opacity: 0.6;
  transition: opacity 0.35s ease, background 0.35s ease, border-color 0.35s ease;
}

.dp-dev-card:hover {
  opacity: 1;
  background: var(--color-surface);
  border-color: rgba(113, 113, 122, 0.3);
}

.dp-dev-number {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: clamp(1.5rem, 2vw, 2rem);
  line-height: 1;
  color: var(--color-text-muted);
  opacity: 0.15;
  margin-bottom: var(--space-3);
}

.dp-dev-name {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: 1.0625rem;
  color: var(--color-ink, #FAFAF9);
  margin-bottom: 0.125rem;
  transition: color 0.3s ease;
}

.dp-dev-subtitle {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: 0.625rem;
  color: var(--color-gold);
  opacity: 0.4;
  margin-bottom: 0.25rem;
  letter-spacing: var(--tracking-wide);
}

.dp-dev-card:hover .dp-dev-name {
  color: var(--color-gold);
}

.dp-dev-type {
  font-size: 0.5rem;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-text-muted);
}

/* ─── Footer CTA ─── */
.dp-cta-section {
  padding: var(--space-32) var(--content-padding);
  text-align: center;
  border-top: 1px solid var(--rule-color);
}

.dp-cta-inner {
  max-width: 40rem;
  margin: 0 auto;
}

.dp-cta-title {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: clamp(2rem, 4vw, 3.5rem);
  margin-bottom: var(--space-4);
  justify-content: center;
}

.dp-cta-sub {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  margin-bottom: var(--space-8);
}

.dp-cta-btn {
  display: inline-block;
  padding: var(--space-4) var(--space-10);
  background: var(--color-gold);
  color: var(--color-background);
  font-size: var(--text-overline);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  background-image: none;
  transition: opacity 0.3s ease;
}

.dp-cta-btn:hover { opacity: 0.85; }

/* ─── Responsive ─── */
@media (max-width: 1200px) {
  .dp-dev-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .dp-coming-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .dp-dev-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .dp-hero {
    padding-top: calc(var(--space-16) + 3rem);
  }

  .dp-hero-card {
    grid-template-columns: 1fr;
  }

  .dp-hero-card--flipped .dp-hero-card-image {
    order: 0;
  }

  .dp-hero-card--flipped .dp-hero-card-content {
    order: 0;
  }

  .dp-hero-card-content {
    padding: var(--space-6) var(--space-6) var(--space-8);
  }

  .dp-coming-grid {
    grid-template-columns: 1fr;
  }

  .dp-dev-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .dp-dev-grid {
    grid-template-columns: 1fr;
  }
}
</style>
