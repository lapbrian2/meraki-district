<template>
  <div>
    <section ref="section" class="page-hero section section-dark">
      <div class="section-narrow">
        <p class="overline reveal">Join the District</p>
        <h1 class="page-hero-title reveal">
          Apply
        </h1>
        <p class="page-hero-sub reveal">
          Applications are open for creators, thinkers, and builders who believe
          the best work is still ahead of us.
        </p>
        <p class="page-hero-note reveal">
          Application process coming soon. Leave your email below and
          we&rsquo;ll notify you when applications open.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal')

useHead({
  title: 'Apply — Meraki District',
  meta: [
    { name: 'description', content: 'Apply to join Meraki District. For creators, thinkers, and builders.' },
  ],
})
</script>

<style scoped>
.page-hero {
  padding-top: calc(var(--space-48) + 4rem);
  padding-bottom: var(--space-32);
  min-height: 70vh;
  display: flex;
  align-items: center;
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
  margin-bottom: var(--space-6);
}

.page-hero-note {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 45ch;
}

@media (max-width: 768px) {
  .page-hero {
    padding-top: calc(var(--space-24) + 3rem);
    padding-bottom: var(--space-16);
    min-height: auto;
  }
}
</style>
