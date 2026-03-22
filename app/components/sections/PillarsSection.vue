<template>
  <section ref="sectionRef" class="districts-grid-section">
    <div class="dgs-inner">
      <div class="dgs-header">
        <p class="dgs-overline reveal">The Districts</p>
        <h2 class="dgs-title word-reveal">Twelve districts, one road.</h2>
        <div class="dgs-rule" aria-hidden="true" />
        <p class="dgs-sub reveal">Each built to serve a different dimension of creative practice.</p>
      </div>

      <div class="dgs-grid">
        <NuxtLink
          v-for="(d, i) in featured"
          :key="d.slug"
          :to="`/districts/${d.slug}`"
          class="dgs-card reveal"
          :class="{ 'dgs-elevated': i === 1 || i === 4 }"
        >
          <span class="dgs-icon material-symbols-outlined">{{ iconMap[d.slug] || 'category' }}</span>
          <h3 class="dgs-name">{{ d.name }}</h3>
          <p class="dgs-desc">{{ d.type }}</p>
          <span class="dgs-link">Explore →</span>
        </NuxtLink>
      </div>

      <div class="dgs-footer reveal">
        <NuxtLink to="/districts" class="dgs-view-all">View all 11 districts →</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { districts } from '~/composables/useDistricts'
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

const sectionRef = ref<HTMLElement | null>(null)
useGsapScrollReveal(sectionRef, '.reveal', { stagger: 0.08 })
useWordReveal(sectionRef, '.word-reveal')

// Show 6 key districts on homepage — full list lives at /districts
const featured = districts.slice(0, 6)

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

/* 3x2 bordered grid — matches Stitch layout */
.dgs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid var(--rule-color);
}

.dgs-card {
  padding: var(--space-12);
  border-right: 1px solid var(--rule-color);
  border-bottom: 1px solid var(--rule-color);
  transition: background-color 0.5s var(--ease-out);
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  background-image: none;
}

/* 3x2: remove right border on col 3 */
.dgs-card:nth-child(3n) {
  border-right: none;
}

/* 3x2: remove bottom border on row 2 */
.dgs-card:nth-child(n+4) {
  border-bottom: none;
}

.dgs-card:hover {
  background: var(--color-background);
}

.dgs-card:hover .dgs-name {
  color: var(--color-gold);
}

.dgs-elevated {
  background: rgba(184, 150, 78, 0.03);
}

.dgs-icon {
  font-size: 1.75rem;
  color: var(--color-gold);
  margin-bottom: var(--space-12);
  display: block;
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

.dgs-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-ink);
  margin-bottom: var(--space-4);
  transition: color 0.3s ease;
}

.dgs-desc {
  font-size: var(--text-overline);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-8);
}

.dgs-link {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  transition: padding-left 0.3s var(--ease-out);
  margin-top: auto;
}

.dgs-card:hover .dgs-link {
  padding-left: var(--space-2);
}

/* View all link */
.dgs-footer {
  text-align: center;
  margin-top: var(--space-16);
}

.dgs-view-all {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  border-bottom: 1px solid rgba(184, 150, 78, 0.3);
  padding-bottom: 0.25rem;
  transition: border-color 0.3s ease;
}

.dgs-view-all:hover {
  border-color: var(--color-gold);
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

  .dgs-card:nth-child(n+4) {
    border-bottom: 1px solid var(--rule-color);
  }

  .dgs-card:nth-child(n+5) {
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
