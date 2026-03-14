<template>
  <section ref="section" class="about-hero section">
    <div class="section-default">
      <p class="overline reveal">About</p>
      <h1 class="about-hero-title reveal">
        The people behind<br>the district.
      </h1>
      <p class="about-hero-sub reveal">
        Meraki District was founded by two people who arrived at the same
        conclusion from opposite directions: the creators shaping this era
        deserve better infrastructure than what exists.
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
.about-hero {
  padding-top: calc(var(--space-48) + 4rem);
  padding-bottom: var(--space-24);
}

.about-hero-title {
  font-size: var(--text-display);
  line-height: var(--leading-tight);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
}

.about-hero-sub {
  font-size: var(--text-h4);
  font-weight: 400;
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
}
</style>
