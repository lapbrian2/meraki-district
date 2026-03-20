<template>
  <section ref="section" class="districts">
    <div class="districts-hero section-dark">
      <div class="section-wide districts-hero-content">
        <p class="overline reveal">The Ecosystem</p>
        <h2 class="districts-title word-reveal">
          Eleven districts along one road.
        </h2>
      </div>
    </div>
    <div class="section-wide districts-body">

      <div class="districts-grid">
        <NuxtLink
          v-for="inst in districts"
          :key="inst.name"
          :to="`/districts/${inst.slug}`"
          class="inst-card"
          :class="[`inst-${inst.layout}`]"
        >
          <div class="inst-image-wrap reveal-image">
            <img
              class="inst-image"
              :src="inst.image"
              :alt="`${inst.name} — ${inst.type}`"
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
import { useTilt } from '~/composables/useInteractions'
import { useWordReveal } from '~/composables/useWordReveal'
import { districts } from '~/composables/useDistricts'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal', { stagger: 0.08 })
useTilt(section, '.inst-card', { maxRotation: 2.5 })
useWordReveal(section, '.word-reveal')

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
    const cards = gsap.utils.toArray<HTMLElement>('.reveal-image')

    // Group cards by visual row for grid-aware stagger
    const rows: Map<number, { el: HTMLElement; left: number }[]> = new Map()
    cards.forEach((el) => {
      const rect = el.getBoundingClientRect()
      // Round to nearest 50px to group cards on the same visual row
      const rowKey = Math.round(rect.top / 50) * 50
      if (!rows.has(rowKey)) rows.set(rowKey, [])
      rows.get(rowKey)!.push({ el, left: rect.left })
    })

    // Sort each row left-to-right, then animate with position-based delay
    const sortedRows = [...rows.entries()].sort((a, b) => a[0] - b[0])

    sortedRows.forEach(([, rowCards]) => {
      rowCards.sort((a, b) => a.left - b.left)

      rowCards.forEach((card, colIndex) => {
        // Alternate wipe direction: left cards wipe from left, right cards from right
        const isLeftCard = colIndex === 0
        const fromClip = isLeftCard
          ? 'inset(0 100% 0 0)'   // wipe from left
          : 'inset(0 0 0 100%)'   // wipe from right

        gsap.fromTo(card.el,
          { clipPath: fromClip },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.1,
            delay: colIndex * 0.12,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: card.el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    })
  }, section.value)
})

onUnmounted(() => {
  ctx?.revert()
})

</script>

<style scoped>
.districts-hero {
  position: relative;
  overflow: hidden;
  padding: var(--space-24) var(--content-padding) var(--space-12);
}

.districts-body {
  background-color: var(--color-background);
  padding: var(--space-12) var(--content-padding) var(--space-16);
}

.districts-title {
  margin-top: var(--space-4);
  font-size: var(--text-h1);
  line-height: var(--leading-snug);
  color: var(--color-dark-text);
}

/* ─── Grid ─── */
.districts-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-4);
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
  margin-bottom: var(--space-3);
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
  margin-bottom: var(--space-1);
}

.inst-number {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-text-muted);
}

.inst-dot {
  width: 3px;
  height: 3px;
  border-radius: 0;
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
  margin-bottom: var(--space-1);
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
  line-height: var(--leading-normal);
}

.inst-hero .inst-desc {
  max-width: 55ch;
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .districts-hero {
    padding: var(--space-16) var(--content-padding) var(--space-8);
  }

  .districts-body {
    padding: var(--space-8) var(--content-padding) var(--space-16);
  }

  .districts-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
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
  .districts-grid {
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
