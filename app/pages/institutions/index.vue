<template>
  <div>
    <section ref="section" class="page-hero section">
      <div class="section-default">
        <p class="overline reveal">The Ecosystem</p>
        <h1 class="page-hero-title reveal">
          Ten institutions.<br>One district.
        </h1>
        <p class="page-hero-sub reveal">
          Each institution is a world unto itself, united by a shared belief:
          the most meaningful work grows from ambition held alongside integrity.
        </p>
      </div>
    </section>
    <SectionDivider />
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal')

useHead({
  title: 'Institutions — Meraki District',
  meta: [
    { name: 'description', content: 'Ten institutions within one district. A cultural ecosystem for AI-native creators.' },
  ],
})
</script>

<style scoped>
.page-hero {
  padding-top: calc(var(--space-48) + 4rem);
  padding-bottom: var(--space-24);
}

.page-hero-title {
  font-size: var(--text-display);
  line-height: var(--leading-tight);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
}

.page-hero-sub {
  font-size: var(--text-h4);
  font-weight: 400;
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
}

@media (max-width: 768px) {
  .page-hero {
    padding-top: calc(var(--space-24) + 3rem);
    padding-bottom: var(--space-12);
  }
}
</style>
