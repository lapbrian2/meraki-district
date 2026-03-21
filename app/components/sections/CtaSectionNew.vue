<template>
  <section ref="section" class="cta-new">
    <!-- Giant watermark -->
    <span class="cta-new-watermark" aria-hidden="true">MERAKI ROAD</span>

    <div class="section-narrow cta-new-inner">
      <h2 class="cta-new-heading word-reveal">
        Meet on
      </h2>
      <h2 class="cta-new-heading cta-new-heading--gold word-reveal">
        Meraki Road.
      </h2>

      <p class="cta-new-subtitle reveal">
        A cultural ecosystem for creators who refuse to separate ambition from integrity
      </p>

      <NuxtLink to="/apply" class="cta-new-button reveal">
        Start Your Journey
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'
import { useMagnetic } from '~/composables/useInteractions'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal', { stagger: 0.12 })
useWordReveal(section, '.word-reveal', { stagger: 0.06, duration: 1.2 })
useMagnetic(section, '.cta-new-button', { strength: 0.2 })
</script>

<style scoped>
.cta-new {
  position: relative;
  overflow: hidden;
  background-color: var(--color-surface);
  padding: calc(var(--space-48) * 2) var(--content-padding);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ─── Watermark ─── */
.cta-new-watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-display);
  font-size: 30vw;
  font-weight: 300;
  font-style: italic;
  letter-spacing: var(--tracking-tight);
  white-space: nowrap;
  color: var(--color-ink);
  opacity: 0.03;
  pointer-events: none;
  user-select: none;
  line-height: 1;
}

/* ─── Content ─── */
.cta-new-inner {
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-new-heading {
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 300;
  font-style: italic;
  color: var(--color-ink);
  letter-spacing: var(--tracking-hero);
  line-height: var(--leading-display);
  margin: 0;
  justify-content: center;
}

.cta-new-heading--gold {
  color: var(--color-gold);
}

.cta-new-subtitle {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-top: var(--space-8);
  margin-bottom: var(--space-12);
  max-width: 50ch;
  text-align: center;
}

/* ─── Button ─── */
.cta-new-button {
  display: inline-block;
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-background);
  background-color: var(--color-gold);
  background-image: none;
  padding: var(--space-5) var(--space-16);
  border: none;
  transition: background-color var(--duration-normal) ease,
              transform var(--duration-fast) ease,
              box-shadow var(--duration-normal) ease;
}

.cta-new-button:hover {
  background-color: #a07f3e;
  background-size: 0;
  box-shadow: 0 4px 24px rgba(184, 150, 78, 0.25);
}

.cta-new-button:active {
  transform: scale(0.98);
}

.cta-new-button:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .cta-new {
    padding: var(--space-32) var(--content-padding);
  }

  .cta-new-watermark {
    font-size: 50vw;
  }

  .cta-new-button {
    width: 100%;
    text-align: center;
    padding: var(--space-5) var(--space-8);
  }
}
</style>
