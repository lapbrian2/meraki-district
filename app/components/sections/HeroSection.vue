<template>
  <section ref="hero" class="hero">
    <div class="hero-content">
      <p class="overline reveal">Est. 2025</p>
      <h1 class="hero-title reveal">
        Where craft<br />meets culture
      </h1>
      <p class="hero-sub reveal">
        A cultural ecosystem for AI-native creators who refuse to choose
        between ambition and integrity.
      </p>
    </div>
    <div class="hero-scroll" aria-hidden="true">
      <span class="hero-scroll-line" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const hero = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(() => {
  if (!hero.value) return

  ctx = gsap.context(() => {
    // Selectors scoped to hero.value by gsap.context
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.overline', { opacity: 0, y: 20, duration: 0.6 }, 0.2)
      .from('.hero-title', { opacity: 0, y: 40, duration: 1 }, 0.4)
      .from('.hero-sub', { opacity: 0, y: 30, duration: 0.8 }, 0.7)
      .from('.hero-scroll', { opacity: 0, duration: 0.6 }, 1.2)
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
}

.hero-content {
  max-width: 800px;
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

.hero-scroll {
  position: absolute;
  bottom: var(--space-12);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
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
