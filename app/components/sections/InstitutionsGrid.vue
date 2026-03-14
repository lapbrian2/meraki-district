<template>
  <section ref="section" class="institutions">
    <div class="institutions-hero section-dark">
      <div class="institutions-hero-bg">
        <img
          src="/images/institutions-bg.jpg"
          alt=""
          class="institutions-hero-image"
          loading="lazy"
        />
        <div class="institutions-hero-overlay" />
      </div>
      <div class="section-wide institutions-hero-content">
        <p class="overline reveal">The Ecosystem</p>
        <h2 class="institutions-title reveal">
          Ten institutions within one district.
        </h2>
      </div>
    </div>
    <div class="section-wide institutions-body">

      <div class="institutions-grid">
        <NuxtLink
          v-for="inst in institutions"
          :key="inst.name"
          :to="`/institutions/${inst.slug}`"
          class="inst-card"
          :class="[`inst-${inst.layout}`]"
        >
          <div class="inst-image-wrap reveal-image">
            <img
              class="inst-image"
              :src="inst.image"
              :alt="inst.name"
              loading="lazy"
            />
          </div>
          <div class="inst-content reveal">
            <div class="inst-meta">
              <span class="inst-number">{{ inst.number }}</span>
              <span class="inst-dot" aria-hidden="true" />
              <span class="inst-type">{{ inst.type }}</span>
            </div>
            <h3 class="inst-name">{{ inst.name }}</h3>
            <p class="inst-desc">{{ inst.description }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapScrollReveal, waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'
import { institutions } from '~/composables/useInstitutions'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal', { stagger: 0.08 })

let ctx: gsap.Context | null = null

onMounted(async () => {
  if (!section.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    section.value.querySelectorAll('.reveal-image').forEach((el) => {
      ;(el as HTMLElement).style.clipPath = 'inset(0)'
    })
    return
  }

  await waitForAncestorAnimations(section.value)
  if (!section.value) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>('.reveal-image').forEach((el) => {
      gsap.fromTo(el,
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, section.value)
})

onUnmounted(() => {
  ctx?.revert()
})

</script>

<style scoped>
.institutions-hero {
  position: relative;
  overflow: hidden;
  padding: var(--space-32) var(--content-padding) var(--space-16);
}

.institutions-hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.institutions-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
}

.institutions-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(9, 9, 11, 0.5) 0%,
    rgba(9, 9, 11, 0.25) 50%,
    rgba(9, 9, 11, 0.6) 100%
  );
}

.institutions-hero-content {
  position: relative;
  z-index: 1;
}

.institutions-body {
  background-color: var(--color-background);
  padding: var(--space-16) var(--content-padding) var(--space-24);
}

.institutions-title {
  margin-top: var(--space-4);
  font-size: var(--text-h1);
  line-height: var(--leading-snug);
  color: var(--color-dark-text);
}

/* ─── Grid ─── */
.institutions-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6);
}

/* ─── Card base ─── */
.inst-card {
  cursor: pointer;
  position: relative;
  background-image: none;
}

.inst-card:hover .inst-image {
  transform: scale(1.04);
}

.inst-card:hover .inst-type {
  color: var(--color-gold);
}

.inst-card:hover .inst-name::after {
  transform: scaleX(1);
}

/* ─── Image container ─── */
.inst-image-wrap {
  overflow: hidden;
  margin-bottom: var(--space-4);
}

.inst-image {
  width: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--ease-out);
}

/* ─── Layout variants ─── */

/* Hero: full width, cinematic */
.inst-hero {
  grid-column: 1 / -1;
}
.inst-hero .inst-image {
  aspect-ratio: 21 / 9;
}

/* Closer: full width, banner-like */
.inst-closer {
  grid-column: 1 / -1;
}
.inst-closer .inst-image {
  aspect-ratio: 3 / 1;
}

/* Wide: 7 of 12 columns, landscape */
.inst-wide {
  grid-column: span 7;
}
.inst-wide .inst-image {
  aspect-ratio: 3 / 2;
}

/* Narrow: 5 of 12 columns, portrait */
.inst-narrow {
  grid-column: span 5;
}
.inst-narrow .inst-image {
  aspect-ratio: 4 / 5;
}

/* Half: equal split */
.inst-half {
  grid-column: span 6;
}
.inst-half .inst-image {
  aspect-ratio: 4 / 3;
}

/* ─── Content ─── */
.inst-content {
  padding-right: var(--space-4);
}

.inst-meta {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-2);
}

.inst-number {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-text-muted);
}

.inst-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--color-text-muted);
  opacity: 0.5;
}

.inst-type {
  font-size: var(--text-overline);
  transition: color var(--duration-fast) ease;
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold-accessible);
}

.inst-name {
  font-size: var(--text-h3);
  margin-bottom: var(--space-2);
  position: relative;
  display: inline-block;
}

.inst-name::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--color-gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s var(--ease-out);
}

.inst-hero .inst-name {
  font-size: var(--text-h2);
}

.inst-desc {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
}

.inst-hero .inst-desc {
  max-width: 55ch;
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .institutions-hero {
    padding: var(--space-16) var(--content-padding) var(--space-8);
  }

  .institutions-body {
    padding: var(--space-8) var(--content-padding) var(--space-16);
  }

  .institutions-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }

  .inst-hero,
  .inst-closer,
  .inst-wide,
  .inst-narrow,
  .inst-half {
    grid-column: 1 / -1;
  }

  .inst-image {
    aspect-ratio: 3 / 2 !important;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .institutions-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-8);
  }

  .inst-hero,
  .inst-closer {
    grid-column: 1 / -1;
  }

  .inst-wide,
  .inst-narrow,
  .inst-half {
    grid-column: span 1;
  }
}
</style>
