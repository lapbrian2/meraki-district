<template>
  <div>
    <section ref="section" class="page-hero section">
      <div class="section-default">
        <p class="overline reveal">Publishing &amp; Editorial</p>
        <h1 class="page-hero-title reveal">
          The Road
        </h1>
        <p class="page-hero-sub reveal">
          Long-form storytelling and cultural criticism for the AI-native era.
          Long-form essays and cultural criticism shaped by creative practice.
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
  title: 'The Road — Meraki District',
  meta: [
    { name: 'description', content: 'Long-form storytelling and cultural criticism for the AI-native era.' },
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
