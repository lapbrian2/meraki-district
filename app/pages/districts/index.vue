<template>
  <div ref="pageRef" class="districts-page">
    <!-- Hero -->
    <section class="dp-hero">
      <h1 class="dp-display word-reveal">Twelve districts, one road.</h1>
      <p class="dp-subtitle reveal">
        Each with its own mandate. Each built to serve a different dimension of creative practice.
        This is the directory.
      </p>
      <div class="dp-rule reveal" aria-hidden="true" />
    </section>

    <!-- Phase I: Operational — Active Districts (full-width hero cards) -->
    <section ref="activeSection" class="dp-active">
      <p class="dp-phase-label reveal">Phase I: Operational</p>
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
          <span class="dp-stamp dp-stamp--active reveal">
            <span class="material-symbols-outlined dp-stamp-icon">verified</span>
            Operational
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

    <!-- Phase II: Emerging Territories — Coming Soon (medium cards, 3-col grid) -->
    <section ref="comingSection" class="dp-coming">
      <p class="dp-phase-label reveal">Phase II: Emerging Territories</p>
      <p class="dp-section-label reveal">
        <span class="dp-label-dot dp-dot--coming" />
        Coming Soon
      </p>

      <div class="dp-coming-grid">
        <div
          v-for="d in comingSoon"
          :key="d.slug"
          class="dp-coming-card vellum-card reveal"
        >
          <span class="dp-coming-number">{{ d.number }}</span>
          <h3 class="dp-coming-name">{{ d.name }}</h3>
          <span class="dp-coming-type">{{ d.type }}</span>
          <p class="dp-coming-desc">{{ d.description }}</p>
          <span class="dp-stamp dp-stamp--pending">Pending Deployment</span>
        </div>
      </div>
    </section>

    <!-- Future Frontiers — In Development (ultra-compact numbered list) -->
    <section ref="devSection" class="dp-dev">
      <p class="dp-phase-label reveal">Future Frontiers</p>
      <p class="dp-section-label reveal">
        <span class="dp-label-dot dp-dot--dev" />
        In Development
      </p>

      <ol class="dp-dev-list">
        <li
          v-for="d in development"
          :key="d.slug"
          class="dp-dev-item reveal"
        >
          <span class="dp-dev-number">{{ d.number }}</span>
          <span class="dp-dev-name">{{ d.name }}</span>
          <span class="dp-dev-tag">{{ d.type }}</span>
        </li>
      </ol>
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
    { name: 'description', content: 'Twelve districts, one road. Navigate the creative infrastructure of Meraki Road.' },
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
  text-shadow: 0 2px 40px rgba(184,150,78,0.15);
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

/* ─── Phase Labels ─── */
.dp-phase-label {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: var(--text-h3);
  color: var(--color-gold);
  margin-bottom: var(--space-3);
  letter-spacing: var(--tracking-snug);
}

/* ─── Section Labels ─── */
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

/* ─── Stamped Badges ─── */
.dp-stamp {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.5625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  padding: 0.3rem 0.75rem;
  border: 1.5px solid;
  margin-bottom: var(--space-3);
  align-self: flex-start;
}

.dp-stamp-icon {
  font-size: 12px;
}

.dp-stamp--active {
  color: #16A34A;
  border-color: rgba(22, 163, 74, 0.35);
  background: rgba(22, 163, 74, 0.06);
}

.dp-stamp--pending {
  color: var(--color-gold);
  border-color: rgba(184, 150, 78, 0.35);
  background: rgba(184, 150, 78, 0.06);
  margin-top: auto;
  padding-top: var(--space-4);
}

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
  margin-bottom: var(--space-3);
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

.dp-coming-card:hover .dp-coming-name {
  color: var(--color-gold);
}

.dp-coming-desc {
  font-size: var(--text-small);
  font-weight: 300;
  line-height: 1.6;
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
}

/* ─── Future Frontiers: In Development — Ultra-Compact List ─── */
.dp-dev {
  padding: var(--space-16) var(--content-padding);
  max-width: 76rem;
  margin: 0 auto;
  border-top: 1px solid var(--rule-color);
}

.dp-dev-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dp-dev-item {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--rule-color);
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.dp-dev-item:first-child {
  border-top: 1px solid var(--rule-color);
}

.dp-dev-item:hover {
  opacity: 0.8;
}

.dp-dev-number {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  font-weight: 400;
  color: var(--color-text-muted);
  min-width: 2rem;
  letter-spacing: var(--tracking-wide);
}

.dp-dev-name {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: var(--text-body);
  color: var(--color-ink, #FAFAF9);
}

.dp-dev-tag {
  font-size: 0.5625rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-text-muted);
  padding: 0.125rem 0.5rem;
  border: 1px solid var(--rule-color);
  margin-left: auto;
  white-space: nowrap;
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
@media (max-width: 1024px) {
  .dp-coming-grid {
    grid-template-columns: repeat(2, 1fr);
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

  .dp-enter-btn {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    width: 100%;
    justify-content: center;
  }

  .dp-coming-grid {
    grid-template-columns: 1fr;
  }

  .dp-coming-card {
    padding: var(--space-6) var(--space-5);
  }

  .dp-cta-btn {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
}
</style>
