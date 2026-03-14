<template>
  <section ref="section" class="institutions section">
    <div class="section-default">
      <p class="overline reveal">Ten Institutions</p>
      <h2 class="reveal">The ecosystem</h2>

      <div class="institutions-grid">
        <article
          v-for="inst in institutions"
          :key="inst.name"
          class="inst-card reveal"
        >
          <span class="inst-number">{{ inst.number }}</span>
          <h3 class="inst-name">{{ inst.name }}</h3>
          <p class="inst-type">{{ inst.type }}</p>
          <p class="inst-desc">{{ inst.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal', { stagger: 0.08 })

const institutions = [
  { number: '01', name: 'Voight Studio', type: 'Design Practice', description: 'Design and brand strategy for ventures building at the edge of what\u2019s possible.' },
  { number: '02', name: 'The Road', type: 'Publishing & Editorial', description: 'Long-form storytelling and cultural criticism for the AI-native era.' },
  { number: '03', name: 'Meridian', type: 'Research & Strategy', description: 'Frontier research translated into actionable creative intelligence.' },
  { number: '04', name: 'Fieldwork', type: 'Education', description: 'Structured learning paths for creators who want depth, not shortcuts.' },
  { number: '05', name: 'The Provenance', type: 'Archive & Curation', description: 'A living archive of creative practice, process, and precedent.' },
  { number: '06', name: 'Basecamp', type: 'Community', description: 'Where ambitious creators find their people and sharpen their practice.' },
  { number: '07', name: 'Common Ground', type: 'Events & Gatherings', description: 'Intimate gatherings where ideas collide and collaborations ignite.' },
  { number: '08', name: 'The Mint', type: 'Creative Commerce', description: 'Ethical monetization infrastructure for independent creators.' },
  { number: '09', name: 'The Seal', type: 'Credentials & Standards', description: 'A credentialing system that means something \u2014 earned, not purchased.' },
  { number: '10', name: 'The Collective', type: 'Ventures & Partnerships', description: 'Strategic partnerships and ventures that extend the ecosystem\u2019s reach.' },
]
</script>

<style scoped>
.institutions {
  background-color: var(--color-surface);
}

.institutions h2 {
  margin-top: var(--space-4);
  margin-bottom: var(--space-16);
}

.institutions-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-1);
}

.inst-card {
  padding: var(--space-8);
  background: var(--color-background);
  border-left: 2px solid transparent;
  cursor: pointer;
  transition: border-color var(--duration-normal) var(--ease-out),
              transform var(--duration-normal) var(--ease-out);
}

.inst-card:hover {
  border-left-color: var(--color-gold);
  transform: translateX(4px);
}

.inst-number {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-text-muted);
}

.inst-name {
  font-size: var(--text-h3);
  margin-top: var(--space-3);
  margin-bottom: var(--space-1);
}

.inst-type {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold-accessible);
  margin-bottom: var(--space-4);
}

.inst-desc {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
}

@media (max-width: 768px) {
  .institutions-grid {
    grid-template-columns: 1fr;
  }
}
</style>
