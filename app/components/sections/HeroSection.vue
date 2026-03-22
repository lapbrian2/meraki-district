<template>
  <section ref="hero" class="hero spatial-depth">
    <div class="hero-bg-wrap" aria-hidden="true">
      <img
        src="/images/hero-bg-new.webp"
        alt=""
        class="hero-bg-image"
        loading="eager"
      />
    </div>
    <div class="hero-layout">
      <!-- Left: editorial text stack -->
      <div class="hero-text">
        <p class="hero-overline stamped-overline">Est. 2026</p>
        <h1 ref="heroTitle" class="hero-title reveal-text ink-reveal">
          <span class="hero-title-line">Where craft</span>
          <span class="hero-title-accent">meets culture.</span>
        </h1>
        <p class="hero-sub">
          Twelve districts built for creators who hold ambition
          and integrity as a single standard.
        </p>
        <div class="hero-ctas">
          <NuxtLink to="/districts" class="hero-cta-primary">Explore the Districts</NuxtLink>
          <NuxtLink to="/the-road" class="hero-cta-secondary">Read the Manifesto</NuxtLink>
        </div>
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
const heroTitle = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(async () => {
  if (!hero.value) return

  // Ink-reveal Intersection Observer for hero title
  if (heroTitle.value && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )
    observer.observe(heroTitle.value)
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  await waitForAncestorAnimations(hero.value)
  if (!hero.value) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo('.hero-overline', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.3)
      .fromTo('.hero-title-line', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' }, 0.5)
      .fromTo('.hero-title-accent', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' }, 0.7)
      .fromTo('.hero-sub', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9 }, 1.0)
      .fromTo('.hero-ctas', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 1.3)
      .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.8 }, 1.8)

    // Parallax: background image moves slower than content on scroll
    gsap.to('.hero-bg-image', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

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
  position: relative;
  overflow: hidden;
}

.hero-bg-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.hero-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: sepia(10%) contrast(1.05);
  transition: transform 8s ease-out;
}

/* Slow Ken Burns drift on load */
.hero:hover .hero-bg-image {
  transform: scale(1.03);
}

/* Gradient overlay — dark at bottom/left for text, transparent at top/right to show image */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to right, rgba(9,9,11,0.85) 0%, rgba(9,9,11,0.5) 50%, rgba(9,9,11,0.2) 100%),
    linear-gradient(to top, rgba(9,9,11,0.9) 0%, transparent 40%);
  pointer-events: none;
  z-index: 1;
}

/* Layout — single column, text left, image shows through on right */
.hero-layout {
  position: relative;
  z-index: 2;
  max-width: var(--width-wide);
  margin: 0 auto;
  padding: var(--space-24) var(--content-padding);
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
  font-weight: 500;
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
  animation-delay: 0.4s;
  text-shadow: 0 2px 40px rgba(184,150,78,0.15), 0 4px 20px rgba(0,0,0,0.5);
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
  color: var(--color-dark-text);
  max-width: 42ch;
  font-weight: 400;
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-12);
  text-align: left;
  text-shadow: 0 2px 8px rgba(0,0,0,0.6);
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
    font-size: clamp(2.5rem, 8vw, 3.5rem);
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
    width: 100%;
  }

  .hero-cta-primary {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
  }

  .hero-cta-secondary {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .hero-scroll {
    bottom: var(--space-6);
  }
}
</style>
