<template>
  <section ref="section" class="cta-new">
    <!-- Giant watermark — slow scroll reveal -->
    <div class="cta-new-watermark" aria-hidden="true">
      <span class="cta-new-watermark-track">
        <span v-for="(letter, i) in 'MERAKI'" :key="i" class="cta-new-watermark-letter" :style="{ animationDelay: `${i * 1.2}s` }">{{ letter }}</span>
      </span>
    </div>

    <div class="section-narrow cta-new-inner">
      <h2 class="cta-new-heading word-reveal">
        Meet on
      </h2>
      <h2 class="cta-new-heading cta-new-heading--gold word-reveal">
        Meraki Road.
      </h2>

      <p class="cta-new-subtitle reveal">
        Eleven districts for creators who refuse to separate ambition from integrity
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

/* ─── Watermark — slow letter drift ─── */
.cta-new-watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  user-select: none;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
}

.cta-new-watermark-track {
  display: flex;
  gap: 0.02em;
  animation: watermarkDrift 25s linear infinite alternate;
}

.cta-new-watermark-letter {
  font-family: var(--font-display);
  font-size: 30vw;
  font-weight: 300;
  font-style: italic;
  line-height: 1;
  color: var(--color-ink);
  opacity: 0;
  animation: letterReveal 3s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  display: inline-block;
}

@keyframes letterReveal {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translateY(20px);
  }
  100% {
    opacity: 0.04;
    filter: blur(0px);
    transform: translateY(0);
  }
}

@keyframes watermarkDrift {
  0% { transform: translateX(-3%); }
  100% { transform: translateX(3%); }
}

@media (prefers-reduced-motion: reduce) {
  .cta-new-watermark-letter {
    animation: none;
    opacity: 0.03;
    filter: none;
  }
  .cta-new-watermark-track {
    animation: none;
  }
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
  transform: translateY(-0.5rem);
  box-shadow: 0 8px 32px rgba(184, 150, 78, 0.35);
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

  .cta-new-watermark-letter {
    font-size: 50vw;
  }

  .cta-new-button {
    width: 100%;
    text-align: center;
    padding: var(--space-5) var(--space-8);
  }
}
</style>
