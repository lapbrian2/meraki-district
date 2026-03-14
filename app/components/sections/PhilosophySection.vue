<template>
  <section ref="section" class="philosophy section section-dark">
    <div class="section-narrow">
      <p class="overline reveal">Philosophy</p>
      <blockquote class="philosophy-quote reveal">
        <p>We believe AI reveals who was actually creative all along.</p>
      </blockquote>
      <div class="philosophy-exposition">
        <p class="reveal">
          When the tools become accessible to everyone, the only differentiator
          is taste, judgment, and the willingness to go deeper than the first
          good output.
        </p>
        <p class="reveal">
          Every institution in Meraki District operates on a single principle:
          the work matters more than the tools. We build for creators who
          understand that mastery is a practice, not a destination.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal', { stagger: 0.12 })
</script>

<style scoped>
.philosophy {
  padding-top: var(--space-32);
  padding-bottom: var(--space-32);
}

.philosophy-quote {
  border-left: 2px solid var(--color-gold);
  padding-left: var(--space-8);
  margin: var(--space-12) 0;
}

.philosophy-quote p {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-snug);
  color: var(--color-dark-text);
  max-width: none;
}

.philosophy-exposition {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.philosophy-exposition p {
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}
</style>
