<template>
  <section ref="section" class="institutions section">
    <div class="section-default">
      <p class="overline reveal">Ten Institutions</p>
      <h2 class="reveal">The ecosystem</h2>
      <p class="institutions-intro reveal">
        Each institution serves a distinct role. Together, they form the
        infrastructure that creative practice deserves but has never had.
      </p>

      <div class="institutions-grid">
        <article
          v-for="inst in institutions"
          :key="inst.name"
          class="inst-card reveal"
          :class="{ 'inst-featured': inst.featured }"
        >
          <div class="inst-meta">
            <span class="inst-number">{{ inst.number }}</span>
          </div>
          <div class="inst-body">
            <h3 class="inst-name">{{ inst.name }}</h3>
            <p class="inst-type">{{ inst.type }}</p>
            <p class="inst-desc">{{ inst.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal', { stagger: 0.06 })

const institutions = [
  { number: '01', name: 'Voight Studio', type: 'Design Practice', description: 'Design and brand strategy for ventures building at the edge of what is possible. The flagship institution where client work meets creative ambition.', featured: true },
  { number: '02', name: 'The Road', type: 'Publishing & Editorial', description: 'Long-form storytelling and cultural criticism for the AI-native era.' },
  { number: '03', name: 'Meridian', type: 'Research & Strategy', description: 'Frontier research translated into actionable creative intelligence.' },
  { number: '04', name: 'Fieldwork', type: 'Education', description: 'Structured learning paths for creators who want depth, not shortcuts.' },
  { number: '05', name: 'The Provenance', type: 'Archive & Curation', description: 'A living archive of creative practice, process, and precedent.' },
  { number: '06', name: 'Basecamp', type: 'Community', description: 'Where ambitious creators find their people and sharpen their practice.' },
  { number: '07', name: 'Common Ground', type: 'Events & Gatherings', description: 'Intimate gatherings where ideas collide and collaborations ignite.' },
  { number: '08', name: 'The Mint', type: 'Creative Commerce', description: 'Ethical monetization infrastructure for independent creators.' },
  { number: '09', name: 'The Seal', type: 'Credentials & Standards', description: 'A credentialing system that means something. Earned, not purchased.' },
  { number: '10', name: 'The Collective', type: 'Ventures & Partnerships', description: 'Strategic partnerships and ventures that extend the ecosystem beyond its walls.' },
]
</script>

<style scoped>
.institutions {
  background-color: var(--color-surface);
}

.institutions h2 {
  margin-top: var(--space-4);
  margin-bottom: var(--space-4);
}

.institutions-intro {
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-16);
  max-width: 55ch;
}

.institutions-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--rule-color);
}

.inst-card {
  padding: var(--space-8) var(--space-8) var(--space-8) var(--space-10);
  background: var(--color-background);
  border-left: 2px solid transparent;
  cursor: pointer;
  transition: border-color var(--duration-normal) var(--ease-out),
              background-color var(--duration-normal) ease;
  position: relative;
}

.inst-card:hover {
  border-left-color: var(--color-gold);
  background-color: var(--color-surface);
}

.inst-featured {
  grid-column: 1 / -1;
  display: flex;
  align-items: flex-start;
  gap: var(--space-12);
  padding: var(--space-12) var(--space-10);
}

.inst-featured .inst-meta {
  flex-shrink: 0;
}

.inst-featured .inst-name {
  font-size: var(--text-h2);
}

.inst-featured .inst-desc {
  max-width: 50ch;
}

.inst-number {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-text-muted);
  display: block;
  margin-bottom: var(--space-3);
}

.inst-name {
  font-size: var(--text-h3);
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

  .inst-featured {
    flex-direction: column;
    gap: var(--space-4);
    padding: var(--space-8) var(--space-8) var(--space-8) var(--space-10);
  }

  .inst-featured .inst-name {
    font-size: var(--text-h3);
  }
}
</style>
