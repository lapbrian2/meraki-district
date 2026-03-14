<template>
  <section ref="section" class="manifesto section">
    <div class="section-narrow">
      <p class="overline reveal">Our Conviction</p>
      <h2 class="manifesto-text reveal">
        The future of creative practice isn't about choosing between human craft
        and machine capability. It's about building institutions worthy of both.
      </h2>
      <p class="manifesto-body reveal">
        Meraki District is a cultural ecosystem — ten institutions, each a world
        unto itself, united by a shared belief: that the most meaningful work
        happens when ambition meets integrity, and when creators have the space
        to pursue mastery without compromise.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal')
</script>

<style scoped>
.manifesto {
  padding-top: var(--space-32);
  padding-bottom: var(--space-32);
}

.manifesto-text {
  font-size: var(--text-h2);
  font-weight: 300;
  line-height: var(--leading-snug);
  margin-top: var(--space-8);
  margin-bottom: var(--space-8);
  max-width: none;
}

.manifesto-body {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
}
</style>
