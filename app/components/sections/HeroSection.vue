<template>
  <section ref="hero" class="hero">
    <ClientOnly>
      <HeroCanvas />
    </ClientOnly>
    <div class="hero-content">
      <p class="hero-overline reveal">Est. 2025</p>
      <h1 class="hero-title reveal">
        Where craft<br />meets culture
      </h1>
      <p class="hero-sub reveal">
        A cultural ecosystem for AI-native creators who refuse to
        choose between ambition and integrity.
      </p>
      <div class="hero-rule reveal" aria-hidden="true" />
      <p class="hero-anchor reveal">
        Ten institutions. One district. A new standard for creative practice.
      </p>
    </div>
    <div class="hero-scroll" aria-hidden="true">
      <span class="hero-scroll-line" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'

const hero = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(async () => {
  if (!hero.value) return

  await waitForAncestorAnimations(hero.value)
  if (!hero.value) return

  ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.hero-overline', { opacity: 0, y: 20, duration: 0.6 }, 0.3)
      .from('.hero-title', { opacity: 0, y: 50, duration: 1.2, ease: 'power4.out' }, 0.5)
      .from('.hero-sub', { opacity: 0, y: 30, duration: 0.9 }, 0.9)
      .from('.hero-rule', { scaleX: 0, duration: 0.8, ease: 'power2.inOut' }, 1.2)
      .from('.hero-anchor', { opacity: 0, y: 15, duration: 0.7 }, 1.5)
      .from('.hero-scroll', { opacity: 0, duration: 0.8 }, 1.8)
  }, hero.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: var(--space-24) var(--content-padding);
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 800px;
  position: relative;
  z-index: 1;
}

.hero-overline {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.hero-title {
  font-size: var(--text-display);
  font-weight: 300;
  margin-top: var(--space-6);
  margin-bottom: var(--space-8);
}

.hero-sub {
  font-size: var(--text-h4);
  color: var(--color-text-muted);
  max-width: 50ch;
  margin: 0 auto;
  font-weight: 400;
  line-height: var(--leading-relaxed);
}

.hero-rule {
  width: 48px;
  height: 1px;
  background: var(--color-gold);
  margin: var(--space-8) auto;
  transform-origin: center;
}

.hero-anchor {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
  max-width: none;
}

.hero-scroll {
  position: absolute;
  bottom: var(--space-12);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  z-index: 1;
}

.hero-scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--color-ink), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
  50% { opacity: 1; transform: scaleY(1); }
}
</style>
