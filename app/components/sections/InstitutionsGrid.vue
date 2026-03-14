<template>
  <section ref="section" class="institutions section">
    <div class="section-wide">
      <div class="institutions-header">
        <p class="overline reveal">The Ecosystem</p>
        <h2 class="institutions-title reveal">
          Ten institutions. One district.
        </h2>
      </div>

      <div class="institutions-grid">
        <article
          v-for="inst in institutions"
          :key="inst.name"
          class="inst-card"
          :class="[`inst-${inst.layout}`]"
        >
          <div class="inst-image-wrap reveal-image">
            <div class="inst-image" />
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
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapScrollReveal, waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'

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

const institutions = [
  {
    number: '01', name: 'Voight Studio', type: 'Design Practice', layout: 'hero',
    description: 'Design and brand strategy for ventures building at the edge of what is possible. The flagship institution where client work meets creative ambition.',
  },
  {
    number: '02', name: 'The Road', type: 'Publishing & Editorial', layout: 'wide',
    description: 'Long-form storytelling and cultural criticism for the AI-native era.',
  },
  {
    number: '03', name: 'Meridian', type: 'Research & Strategy', layout: 'narrow',
    description: 'Frontier research translated into actionable creative intelligence.',
  },
  {
    number: '04', name: 'Fieldwork', type: 'Education', layout: 'narrow',
    description: 'Structured learning paths for creators who want depth, not shortcuts.',
  },
  {
    number: '05', name: 'The Provenance', type: 'Archive & Curation', layout: 'wide',
    description: 'A living archive of creative practice, process, and precedent.',
  },
  {
    number: '06', name: 'Basecamp', type: 'Community', layout: 'half',
    description: 'Where ambitious creators find their people and sharpen their practice.',
  },
  {
    number: '07', name: 'Common Ground', type: 'Events & Gatherings', layout: 'half',
    description: 'Intimate gatherings where ideas collide and collaborations ignite.',
  },
  {
    number: '08', name: 'The Mint', type: 'Creative Commerce', layout: 'wide',
    description: 'Ethical monetization infrastructure for independent creators.',
  },
  {
    number: '09', name: 'The Seal', type: 'Credentials & Standards', layout: 'narrow',
    description: 'A credentialing system that means something. Earned, not purchased.',
  },
  {
    number: '10', name: 'The Collective', type: 'Ventures & Partnerships', layout: 'closer',
    description: 'Strategic partnerships and ventures that extend the ecosystem beyond its walls.',
  },
]
</script>

<style scoped>
.institutions {
  background-color: var(--color-background);
}

.institutions-header {
  margin-bottom: var(--space-16);
}

.institutions-title {
  margin-top: var(--space-4);
  font-size: var(--text-h1);
  line-height: var(--leading-snug);
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
}

.inst-card:hover .inst-image {
  transform: scale(1.03);
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
  background: linear-gradient(145deg, #E8E7E3 0%, #DDDBD5 50%, #D5D4CE 100%);
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
