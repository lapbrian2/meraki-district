<template>
  <section ref="section" class="seal section">
    <div class="section-narrow">
      <p class="overline reveal">The Seal</p>
      <h2 class="reveal">Earned through practice</h2>
      <p class="seal-intro reveal">
        A four-tier credentialing system that recognises genuine creative mastery.
        Each level requires demonstrated practice, peer review, and real contribution.
      </p>

      <div class="seal-tiers">
        <div v-for="tier in tiers" :key="tier.name" class="seal-tier reveal">
          <div class="seal-marker" :style="{ borderColor: tier.color }" />
          <div>
            <h4>{{ tier.name }}</h4>
            <p>{{ tier.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal', { stagger: 0.1 })

const tiers = [
  { name: 'Associate', color: 'var(--color-text-muted)', description: 'Entry to the ecosystem. Complete foundational coursework and demonstrate active practice.' },
  { name: 'Verified', color: 'var(--color-ink)', description: 'Peer-reviewed portfolio. Consistent output quality and contribution to the community.' },
  { name: 'Master', color: 'var(--color-gold)', description: 'Recognised expertise. Published work, mentorship track record, and institutional impact.' },
  { name: 'Fellow', color: 'var(--color-gold)', description: 'Highest distinction. Sustained excellence and significant contribution to the field.' },
]
</script>

<style scoped>
.seal h2 {
  margin-top: var(--space-4);
  margin-bottom: var(--space-4);
}

.seal-intro {
  color: var(--color-text-muted);
  margin-bottom: var(--space-12);
  line-height: var(--leading-relaxed);
}

.seal-tiers {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.seal-tier {
  display: flex;
  align-items: flex-start;
  gap: var(--space-6);
  padding: var(--space-6) 0;
  border-bottom: 1px solid var(--color-border);
}

.seal-tier:last-child {
  border-bottom: none;
}

.seal-marker {
  width: 12px;
  height: 12px;
  border: 2px solid;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: var(--space-2);
}

.seal-tier h4 {
  margin-bottom: var(--space-2);
}

.seal-tier p {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
}
</style>
