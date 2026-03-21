<template>
  <section ref="hero" class="hero">
    <div class="hero-bg-wrap">
      <NuxtImg
        src="/images/hero-bg.webp"
        alt=""
        class="hero-bg-image"
        loading="eager"
        fetchpriority="high"
        width="1920"
        height="1080"
      />
      <div class="hero-bg-overlay" />
    </div>

    <div class="hero-layout">
      <!-- Left: editorial text stack -->
      <div class="hero-text">
        <p class="hero-overline">Est. 2026</p>
        <h1 class="hero-title">
          <span class="hero-title-line">Where craft</span>
          <span class="hero-title-accent">meets culture.</span>
        </h1>
        <p class="hero-sub">
          A cultural ecosystem built for creators who hold ambition
          and integrity as a single standard.
        </p>
        <div class="hero-ctas">
          <NuxtLink to="/districts" class="hero-cta-primary">Explore the Districts</NuxtLink>
          <NuxtLink to="/the-road" class="hero-cta-secondary">Read the Manifesto</NuxtLink>
        </div>
      </div>

      <!-- Right: architectural image with quote overlay -->
      <div class="hero-image-block reveal-image">
        <NuxtImg
          src="/images/origin-bg.webp"
          alt="Meraki Road"
          class="hero-feature-image"
          loading="eager"
          width="600"
          height="800"
        />
        <p class="hero-image-quote"><em>"Meet on Meraki Road"</em></p>
      </div>
    </div>

    <div class="hero-scroll" aria-hidden="true">
      <span class="hero-scroll-line" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'

const hero = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(async () => {
  if (!hero.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  await waitForAncestorAnimations(hero.value)
  if (!hero.value) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.hero-bg-image', { scale: 1.15, duration: 2.4, ease: 'power2.out' }, 0)
      .fromTo('.hero-overline', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.3)
      .fromTo('.hero-title-line', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' }, 0.5)
      .fromTo('.hero-title-accent', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' }, 0.7)
      .fromTo('.hero-sub', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9 }, 1.0)
      .fromTo('.hero-ctas', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 1.3)
      .fromTo('.hero-image-block', { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 1.4, ease: 'power2.out' }, 0.4)
      .fromTo('.hero-image-quote', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.7 }, 1.6)
      .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.8 }, 1.8)

    // Parallax: hero bg drifts slower than content
    gsap.fromTo('.hero-bg-image',
      { yPercent: -5 },
      {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: hero.value,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    )
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
  padding: var(--space-24) var(--content-padding);
  position: relative;
  overflow: hidden;
  background: #09090B;
}

.hero-bg-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-bg-image {
  width: 100%;
  height: 130%;
  top: -15%;
  position: relative;
  object-fit: cover;
  opacity: 0.2;
  will-change: transform;
}

.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(9, 9, 11, 0.5) 0%,
    rgba(9, 9, 11, 0.2) 40%,
    rgba(9, 9, 11, 0.3) 70%,
    rgba(9, 9, 11, 0.8) 100%
  );
}

/* Asymmetric two-column layout */
.hero-layout {
  position: relative;
  z-index: 1;
  max-width: var(--width-wide);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  gap: var(--space-16);
  align-items: center;
  width: 100%;
}

/* Left: text stack */
.hero-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-overline {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-6);
}

.hero-title {
  font-size: var(--text-display);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-display);
  letter-spacing: var(--tracking-hero);
  margin-bottom: var(--space-8);
  text-align: left;
}

.hero-title-line {
  display: block;
  color: var(--color-dark-text);
}

.hero-title-accent {
  display: block;
  color: var(--color-gold);
}

.hero-sub {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  max-width: 42ch;
  font-weight: 400;
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-12);
  text-align: left;
}

/* Dual CTA */
.hero-ctas {
  display: flex;
  align-items: center;
  gap: var(--space-8);
}

.hero-cta-primary {
  display: inline-block;
  padding: var(--space-3) var(--space-8);
  background: var(--color-gold);
  color: #09090B;
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  background-image: none;
  transition: background-color 0.3s var(--ease-out), transform 0.2s var(--ease-out);
}

.hero-cta-primary:hover {
  background: #C9A55E;
  transform: translateY(-1px);
}

.hero-cta-secondary {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  background-image: none;
  position: relative;
  padding-bottom: var(--space-1);
  transition: color 0.3s var(--ease-out);
}

.hero-cta-secondary::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--color-dark-muted);
  transition: background 0.3s var(--ease-out);
}

.hero-cta-secondary:hover {
  color: var(--color-dark-text);
}

.hero-cta-secondary:hover::after {
  background: var(--color-gold);
}

/* Right: feature image block */
.hero-image-block {
  position: relative;
  overflow: hidden;
}

.hero-feature-image {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  display: block;
  opacity: 0.85;
}

.hero-image-quote {
  position: absolute;
  bottom: var(--space-8);
  left: var(--space-6);
  right: var(--space-6);
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-dark-text);
  letter-spacing: var(--tracking-tight);
}

/* Scroll indicator */
.hero-scroll {
  position: absolute;
  bottom: var(--space-12);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  z-index: 1;
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

@media (prefers-reduced-motion: reduce) {
  .hero-scroll-line {
    animation: none;
    opacity: 0.5;
  }
}

@supports (min-height: 100svh) {
  .hero { min-height: 100svh; }
}

/* Tablet */
@media (max-width: 1024px) {
  .hero-layout {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }

  .hero-image-block {
    max-width: 480px;
  }

  .hero-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
  }
}

/* Mobile */
@media (max-width: 768px) {
  .hero {
    padding: var(--space-16) var(--content-padding);
  }

  .hero-layout {
    gap: var(--space-8);
  }

  .hero-image-block {
    display: none;
  }

  .hero-text {
    align-items: center;
    text-align: center;
  }

  .hero-title {
    text-align: center;
  }

  .hero-sub {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-ctas {
    flex-direction: column;
    gap: var(--space-4);
    align-items: center;
  }

  .hero-scroll {
    bottom: var(--space-6);
  }
}
</style>
