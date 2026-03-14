<template>
  <section ref="section" class="cta section section-dark">
    <div class="section-narrow cta-inner">
      <p class="overline reveal">Join the District</p>
      <h2 class="cta-title reveal">
        Ready to build something<br />that matters?
      </h2>
      <p class="cta-body reveal">
        Applications are open for creators, thinkers, and builders who believe
        the best work is still ahead of us.
      </p>
      <NuxtLink to="/apply" class="cta-button reveal">Apply Now</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal')
</script>

<style scoped>
.cta {
  padding-top: var(--space-32);
  padding-bottom: var(--space-32);
}

.cta-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-title {
  font-size: var(--text-h1);
  margin-top: var(--space-6);
  margin-bottom: var(--space-6);
  color: var(--color-dark-text);
}

.cta-body {
  color: var(--color-dark-muted);
  margin-bottom: var(--space-12);
  line-height: var(--leading-relaxed);
  max-width: 45ch;
}

.cta-button {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  padding: var(--space-4) var(--space-12);
  border: 1px solid var(--color-gold);
  background-image: none;
  transition: background-color var(--duration-normal) ease,
              color var(--duration-normal) ease;
}

.cta-button:hover {
  background-color: var(--color-gold);
  color: var(--color-ink);
}

@media (max-width: 768px) {
  .cta {
    padding-top: var(--space-16);
    padding-bottom: var(--space-16);
  }

  .cta-button {
    width: 100%;
    text-align: center;
    padding: var(--space-4) var(--space-6);
  }
}
</style>
