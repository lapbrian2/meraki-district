<template>
  <section ref="section" class="cta">
    <div class="cta-wave" aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,70 1440,60 L1440,0 L0,0 Z" />
      </svg>
    </div>
    <div class="section-narrow cta-inner">
      <p class="cta-overline reveal">Join Meraki Road</p>
      <h2 class="cta-title word-reveal">
        The road is open.
      </h2>
      <p class="cta-body reveal">
        We are accepting applications from creators, researchers, and builders
        with a demonstrated body of work. No follower counts. No application fees.
        Just evidence of practice.
      </p>
      <NuxtLink to="/apply" class="cta-button reveal">Apply Now &rarr;</NuxtLink>
    </div>
    <div class="cta-wave cta-wave--bottom" aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,60 C360,0 720,120 1080,60 C1260,30 1380,50 1440,60 L1440,120 L0,120 Z" />
      </svg>
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
  background: var(--color-gold);
  padding: var(--space-24) var(--content-padding);
  position: relative;
  overflow: hidden;
}

.cta-wave {
  position: absolute;
  left: 0;
  right: 0;
  top: -1px;
  height: 80px;
  pointer-events: none;
}

.cta-wave svg {
  display: block;
  width: 100%;
  height: 100%;
}

.cta-wave path {
  fill: var(--color-dark-bg, #18181B);
}

.cta-wave--bottom {
  top: auto;
  bottom: -1px;
}

.cta-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
}

.cta-overline {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: rgba(9, 9, 11, 0.6);
  margin-bottom: var(--space-4);
}

.cta-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-ink);
  margin-bottom: var(--space-6);
}

.cta-body {
  color: rgba(9, 9, 11, 0.75);
  margin-bottom: var(--space-12);
  line-height: var(--leading-relaxed);
  max-width: 45ch;
  font-size: var(--text-body);
}

.cta-button {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-ink);
  padding: var(--space-4) var(--space-12);
  border: 1.5px solid var(--color-ink);
  background-image: none;
  background-color: transparent;
  transition: background-color var(--duration-normal) ease,
              color var(--duration-normal) ease;
}

.cta-button:hover {
  background-color: var(--color-ink);
  color: var(--color-gold);
}

.cta-button:focus-visible {
  outline: 2px solid var(--color-ink);
  outline-offset: 4px;
}

@media (max-width: 768px) {
  .cta {
    padding: var(--space-16) var(--content-padding);
  }

  .cta-button {
    width: 100%;
    text-align: center;
    padding: var(--space-4) var(--space-6);
  }

  .cta-wave {
    height: 48px;
  }
}
</style>
