<template>
  <section ref="section" class="districts-preview section-dark">
    <div class="section-wide districts-preview-inner">
      <div class="dp-header">
        <p class="overline reveal">The Ecosystem</p>
        <h2 class="word-reveal">Eleven districts, one road.</h2>
      </div>
      <div class="dp-grid">
        <NuxtLink
          v-for="d in districts"
          :key="d.slug"
          :to="`/districts/${d.slug}`"
          class="dp-card reveal"
          :style="{ '--color-accent': d.accentColor }"
        >
          <span class="dp-number">{{ d.number }}</span>
          <div class="dp-info">
            <span class="dp-type">{{ d.type }}</span>
            <h3 class="dp-name">{{ d.name }}</h3>
          </div>
        </NuxtLink>
      </div>
      <div class="dp-cta reveal">
        <NuxtLink to="/districts" class="dp-link">View all districts &rarr;</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'
import { districts } from '~/composables/useDistricts'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal', { stagger: 0.06 })
useWordReveal(section, '.word-reveal')
</script>

<style scoped>
.districts-preview {
  padding: var(--space-24) 0;
}

.dp-header {
  margin-bottom: var(--space-12);
}

.dp-header h2 {
  margin-top: var(--space-4);
  font-size: var(--text-h1);
  line-height: var(--leading-snug);
  color: var(--color-dark-text);
}

.dp-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(250, 250, 249, 0.06);
}

.dp-card {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  padding: var(--space-6) var(--space-8);
  background: var(--color-dark-bg);
  text-decoration: none;
  color: inherit;
  background-image: none;
  transition: background var(--duration-normal) ease;
}

.dp-card:hover {
  background: rgba(250, 250, 249, 0.04);
}

.dp-card:hover .dp-name {
  color: var(--color-accent);
}

.dp-card:hover .dp-number {
  opacity: 1;
  color: var(--color-accent);
}

.dp-number {
  font-family: var(--font-mono);
  font-size: var(--text-h3);
  font-weight: 300;
  letter-spacing: var(--tracking-mega-wide);
  color: var(--color-dark-muted);
  opacity: 0.4;
  transition: opacity var(--duration-normal) ease, color var(--duration-normal) ease;
  flex-shrink: 0;
  line-height: 1;
  padding-top: 0.15em;
}

.dp-type {
  font-size: var(--text-overline);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-accent);
  display: block;
  margin-bottom: var(--space-1);
}

.dp-name {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 400;
  color: var(--color-dark-text);
  line-height: var(--leading-snug);
  transition: color var(--duration-normal) ease;
}

.dp-cta {
  margin-top: var(--space-12);
  text-align: center;
}

.dp-link {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  transition: opacity var(--duration-fast) ease;
}

.dp-link:hover {
  opacity: 0.7;
}

/* Last card spans full width when odd count */
.dp-card:last-child:nth-child(3n+1) {
  grid-column: 1 / -1;
}

@media (max-width: 768px) {
  .dp-grid {
    grid-template-columns: 1fr;
  }

  .dp-card:last-child:nth-child(3n+1) {
    grid-column: auto;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .dp-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .dp-card:last-child:nth-child(3n+1) {
    grid-column: auto;
  }
}
</style>
