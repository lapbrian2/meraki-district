<template>
  <section ref="sectionRef" class="districts-grid-section">
    <div class="dgs-inner">
      <div class="dgs-header">
        <p class="dgs-overline reveal">The Districts</p>
        <h2 class="dgs-title word-reveal">Eleven districts, one road.</h2>
        <div class="dgs-rule" aria-hidden="true" />
        <p class="dgs-sub reveal">Each built to serve a different dimension of creative practice.</p>
      </div>

      <div class="dgs-grid">
        <NuxtLink
          v-for="(d, i) in districts"
          :key="d.slug"
          :to="`/districts/${d.slug}`"
          class="dgs-card reveal"
          :class="{ 'dgs-elevated': i % 3 === 1 }"
        >
          <span class="dgs-icon material-symbols-outlined">{{ iconMap[d.slug] || 'category' }}</span>
          <span class="dgs-number">{{ d.number }}</span>
          <h3 class="dgs-name">{{ d.name }}</h3>
          <p class="dgs-type">{{ d.type }}</p>
          <p class="dgs-desc">{{ d.description }}</p>
          <span class="dgs-link">Explore →</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { districts } from '~/composables/useDistricts'
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

const sectionRef = ref<HTMLElement | null>(null)
useGsapScrollReveal(sectionRef, '.reveal', { stagger: 0.06 })
useWordReveal(sectionRef, '.word-reveal')

const iconMap: Record<string, string> = {
  'voight-studio': 'brush',
  'the-road': 'edit_road',
  'meridian': 'explore',
  'fieldwork': 'school',
  'the-provenance': 'inventory_2',
  'basecamp': 'groups',
  'common-ground': 'event',
  'the-mint': 'storefront',
  'the-seal': 'verified',
  'the-collective': 'handshake',
  'the-frame': 'movie',
}
</script>

<style scoped>
.districts-grid-section {
  padding: var(--space-32) var(--content-padding);
  background: var(--color-surface);
  border-top: 1px solid var(--rule-color);
  border-bottom: 1px solid var(--rule-color);
}

.dgs-inner {
  max-width: 1440px;
  margin: 0 auto;
}

.dgs-header {
  text-align: center;
  margin-bottom: var(--space-24);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dgs-overline {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}

.dgs-title {
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: italic;
  color: var(--color-ink);
  margin-bottom: var(--space-6);
}

.dgs-rule {
  width: 64px;
  height: 1px;
  background: var(--rule-color);
  margin-bottom: var(--space-6);
}

.dgs-sub {
  font-family: var(--font-body);
  font-size: var(--text-small);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
  max-width: 40rem;
  line-height: var(--leading-relaxed);
}

/* Bordered grid — 3 columns for 11 items */
.dgs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid var(--rule-color);
}

.dgs-card {
  padding: var(--space-10) var(--space-8);
  border-right: 1px solid var(--rule-color);
  border-bottom: 1px solid var(--rule-color);
  transition: background-color 0.5s var(--ease-out);
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  background-image: none;
}

/* Remove right border on every 3rd card */
.dgs-card:nth-child(3n) {
  border-right: none;
}

/* Remove bottom border on last row (items 10, 11 — and 12 if it existed) */
.dgs-card:nth-child(n+10) {
  border-bottom: none;
}

.dgs-card:hover {
  background: var(--color-background);
}

.dgs-elevated {
  background: rgba(184, 150, 78, 0.03);
}

.dgs-icon {
  font-size: 1.5rem;
  color: var(--color-gold);
  margin-bottom: var(--space-6);
  display: block;
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

.dgs-number {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  letter-spacing: var(--tracking-widest);
  color: var(--color-text-muted);
  opacity: 0.4;
  margin-bottom: var(--space-2);
}

.dgs-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-ink);
  margin-bottom: var(--space-2);
  transition: color 0.3s ease;
}

.dgs-card:hover .dgs-name {
  color: var(--color-gold);
}

.dgs-type {
  font-size: 0.5625rem;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}

.dgs-desc {
  font-size: var(--text-overline);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: auto;
  padding-bottom: var(--space-6);
}

.dgs-link {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  transition: padding-left 0.3s var(--ease-out);
}

.dgs-card:hover .dgs-link {
  padding-left: var(--space-2);
}

@media (max-width: 1024px) {
  .dgs-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .dgs-card:nth-child(3n) {
    border-right: 1px solid var(--rule-color);
  }

  .dgs-card:nth-child(2n) {
    border-right: none;
  }

  .dgs-card:nth-child(n+10) {
    border-bottom: 1px solid var(--rule-color);
  }

  .dgs-card:nth-child(n+11) {
    border-bottom: none;
  }
}

@media (max-width: 640px) {
  .dgs-grid {
    grid-template-columns: 1fr;
  }

  .dgs-card {
    border-right: none !important;
  }

  .dgs-card:last-child {
    border-bottom: none;
  }
}
</style>
