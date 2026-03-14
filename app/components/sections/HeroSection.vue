<template>
  <section ref="hero" class="hero">
    <div class="hero-bg-wrap">
      <img
        src="/images/hero-bg.png"
        alt=""
        class="hero-bg-image"
        loading="eager"
        fetchpriority="high"
      />
      <div class="hero-bg-overlay" />
    </div>
    <ClientOnly>
      <HeroCanvas />
    </ClientOnly>
    <div class="hero-content">
      <p class="hero-overline reveal">Est. 2025</p>
      <h1 class="hero-title reveal">
        Where craft<br />meets culture
      </h1>
      <p class="hero-sub reveal">
        A cultural ecosystem built for creators who hold ambition
        and integrity as a single standard.
      </p>
      <div class="hero-rule reveal" aria-hidden="true" />
      <p class="hero-anchor reveal">
        Ten institutions within one district, building a new standard for creative practice.
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

    tl.from('.hero-bg-image', { scale: 1.1, duration: 2.4, ease: 'power2.out' }, 0)
      .from('.hero-overline', { opacity: 0, y: 20, duration: 0.6 }, 0.3)
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
  background: var(--color-ink);
}

.hero-bg-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.35;
}

.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(9, 9, 11, 0.4) 0%,
    rgba(9, 9, 11, 0.15) 40%,
    rgba(9, 9, 11, 0.3) 70%,
    rgba(9, 9, 11, 0.7) 100%
  );
}

.hero-content {
  max-width: 800px;
  position: relative;
  z-index: 2;
}

.hero-overline {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
}

.hero-title {
  font-size: var(--text-display);
  font-weight: 300;
  margin-top: var(--space-6);
  margin-bottom: var(--space-8);
  color: var(--color-dark-text);
}

.hero-sub {
  font-size: var(--text-h4);
  color: var(--color-dark-muted);
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
  color: var(--color-dark-muted);
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
  z-index: 2;
}

.hero-scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--color-dark-muted), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
  50% { opacity: 1; transform: scaleY(1); }
}

@supports (min-height: 100svh) {
  .hero { min-height: 100svh; }
}

@media (max-width: 768px) {
  .hero {
    padding: var(--space-16) var(--content-padding);
  }

  .hero-sub {
    font-size: var(--text-body);
  }

  .hero-scroll {
    bottom: var(--space-6);
  }
}
</style>
