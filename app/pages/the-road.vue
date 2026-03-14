<template>
  <div>
    <section ref="section" class="page-hero section section-dark">
      <div class="page-hero-bg-wrap">
        <img
          src="/images/the-road-hero.webp"
          alt=""
          class="page-hero-bg-image"
          loading="eager"
          fetchpriority="high"
        />
        <div class="page-hero-bg-overlay" />
      </div>
      <div class="section-default page-hero-content">
        <p class="overline reveal">Publishing &amp; Editorial</p>
        <h1 class="page-hero-title reveal">
          The Road
        </h1>
        <p class="page-hero-sub reveal">
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

useSeoMeta({
  ogTitle: 'The Road — Meraki District',
  ogDescription: 'Long-form storytelling and cultural criticism for the AI-native era.',
  twitterTitle: 'The Road — Meraki District',
  twitterDescription: 'Long-form storytelling and cultural criticism for the AI-native era.',
})
</script>

<style scoped>
.page-hero {
  padding-top: calc(var(--space-48) + 4rem);
  padding-bottom: var(--space-24);
  position: relative;
  overflow: hidden;
  min-height: 60vh;
  display: flex;
  align-items: flex-end;
}

.page-hero-bg-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.page-hero-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
}

.page-hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(9, 9, 11, 0.3) 0%,
    rgba(9, 9, 11, 0.15) 40%,
    rgba(9, 9, 11, 0.5) 70%,
    rgba(9, 9, 11, 0.8) 100%
  );
}

.page-hero-content {
  position: relative;
  z-index: 1;
}

.page-hero-title {
  font-size: var(--text-display);
  line-height: var(--leading-tight);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  color: var(--color-dark-text);
}

.page-hero-sub {
  font-size: var(--text-h4);
  font-weight: 400;
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
}

@media (max-width: 768px) {
  .page-hero {
    padding-top: calc(var(--space-24) + 3rem);
    padding-bottom: var(--space-12);
    min-height: 50vh;
  }
}
</style>
