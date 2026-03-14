<template>
  <div>
    <section ref="heroRef" class="page-hero section">
      <div class="section-default">
        <p class="overline reveal">The Ecosystem</p>
        <h1 class="page-hero-title word-reveal">
          Ten institutions.<br>One district.
        </h1>
        <p class="page-hero-sub reveal">
          Each institution is a world unto itself, united by a shared belief:
          the most meaningful work grows from ambition held alongside integrity.
        </p>
      </div>
    </section>

    <section ref="gridRef" class="inst-listing">
      <div class="section-wide">
        <div class="inst-grid">
          <NuxtLink
            v-for="inst in institutions"
            :key="inst.slug"
            :to="`/institutions/${inst.slug}`"
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
              <h2 class="inst-name">{{ inst.name }}</h2>
              <p class="inst-desc">{{ inst.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <SectionDivider />
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapScrollReveal, waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'
import { useTilt } from '~/composables/useInteractions'
import { useWordReveal } from '~/composables/useWordReveal'
import { institutions } from '~/composables/useInstitutions'

const heroRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

useGsapScrollReveal(heroRef, '.reveal')
useGsapScrollReveal(gridRef, '.reveal', { stagger: 0.08 })
useTilt(gridRef, '.inst-card', { maxRotation: 2.5 })
useWordReveal(heroRef, '.word-reveal')

let ctx: gsap.Context | null = null

onMounted(async () => {
  if (!gridRef.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gridRef.value.querySelectorAll('.reveal-image').forEach((el) => {
      ;(el as HTMLElement).style.clipPath = 'inset(0)'
    })
    return
  }

  await waitForAncestorAnimations(gridRef.value)
  if (!gridRef.value) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.reveal-image')

    const rows: Map<number, { el: HTMLElement; left: number }[]> = new Map()
    cards.forEach((el) => {
      const rect = el.getBoundingClientRect()
      const rowKey = Math.round(rect.top / 50) * 50
      if (!rows.has(rowKey)) rows.set(rowKey, [])
      rows.get(rowKey)!.push({ el, left: rect.left })
    })

    const sortedRows = [...rows.entries()].sort((a, b) => a[0] - b[0])

    sortedRows.forEach(([, rowCards]) => {
      rowCards.sort((a, b) => a.left - b.left)

      rowCards.forEach((card, colIndex) => {
        const isLeftCard = colIndex === 0
        const fromClip = isLeftCard
          ? 'inset(0 100% 0 0)'
          : 'inset(0 0 0 100%)'

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
  }, gridRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})

useHead({
  title: 'Institutions \u2014 Meraki District',
  meta: [
    { name: 'description', content: 'Ten institutions within one district. A cultural ecosystem for AI-native creators.' },
  ],
})

useSeoMeta({
  ogTitle: 'Institutions \u2014 Meraki District',
  ogDescription: 'Ten institutions within one district. A cultural ecosystem for AI-native creators.',
  twitterTitle: 'Institutions \u2014 Meraki District',
  twitterDescription: 'Ten institutions within one district. A cultural ecosystem for AI-native creators.',
})
</script>

<style scoped>
.page-hero {
  padding-top: calc(var(--space-48) + 4rem);
  padding-bottom: var(--space-24);
}

.page-hero-title {
  font-size: var(--text-display);
  line-height: var(--leading-tight);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
}

.page-hero-sub {
  font-size: var(--text-h4);
  font-weight: 400;
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
}

/* ── Grid ── */
.inst-listing {
  padding: var(--space-4) var(--content-padding) var(--space-24);
}

.inst-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6);
}

/* ── Card base ── */
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

/* ── Image container ── */
.inst-image-wrap {
  overflow: hidden;
  margin-bottom: var(--space-4);
}

.inst-image {
  width: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--ease-out);
}

/* ── Layout variants ── */
.inst-hero {
  grid-column: 1 / -1;
}
.inst-hero .inst-image {
  aspect-ratio: 21 / 9;
}

.inst-closer {
  grid-column: 1 / -1;
}
.inst-closer .inst-image {
  aspect-ratio: 3 / 1;
}

.inst-wide {
  grid-column: span 7;
}
.inst-wide .inst-image {
  aspect-ratio: 3 / 2;
}

.inst-narrow {
  grid-column: span 5;
}
.inst-narrow .inst-image {
  aspect-ratio: 4 / 5;
}

.inst-half {
  grid-column: span 6;
}
.inst-half .inst-image {
  aspect-ratio: 4 / 3;
}

/* ── Content ── */
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

/* ── Responsive ── */
@media (max-width: 768px) {
  .page-hero {
    padding-top: calc(var(--space-24) + 3rem);
    padding-bottom: var(--space-12);
  }

  .inst-listing {
    padding: var(--space-4) var(--content-padding) var(--space-16);
  }

  .inst-grid {
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
  .inst-grid {
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
