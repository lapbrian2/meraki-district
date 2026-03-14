<template>
  <section ref="section" class="cta section section-dark">
    <div class="cta-bg-pattern" aria-hidden="true">
      <div class="cta-line" v-for="n in 5" :key="n" />
    </div>
    <div class="section-narrow cta-inner">
      <p class="overline reveal">Join the District</p>
      <h2 class="cta-title word-reveal">
        The district is open.
      </h2>
      <p class="cta-body reveal">
        We are accepting applications from creators, researchers, and builders
        with a demonstrated body of work. No follower counts. No application fees.
        Just evidence of practice.
      </p>
      <NuxtLink to="/apply" class="cta-button reveal">Apply Now</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'
import { useMagnetic } from '~/composables/useInteractions'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal')
useWordReveal(section, '.word-reveal', { stagger: 0.08 })
useMagnetic(section, '.cta-button', { strength: 0.25 })
</script>

<style scoped>
.cta {
  padding-top: var(--space-32);
  padding-bottom: var(--space-32);
  position: relative;
  overflow: hidden;
}

.cta-bg-pattern {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 var(--content-padding);
  pointer-events: none;
}

.cta-line {
  width: 1px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(184, 150, 78, 0.06) 30%,
    rgba(184, 150, 78, 0.06) 70%,
    transparent 100%
  );
}

.cta-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
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

.cta-button:focus-visible {
  outline: 2px solid var(--color-dark-text);
  outline-offset: 4px;
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

  .cta-bg-pattern {
    display: none;
  }
}
</style>
