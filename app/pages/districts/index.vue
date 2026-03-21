<template>
  <div ref="pageRef" class="districts-page">
    <!-- Hero -->
    <section class="st-hero">
      <div class="st-hero-inner">
        <p class="st-overline reveal">Districts</p>
        <h1 class="st-display word-reveal">The Ecosystem</h1>
        <p class="st-subtitle reveal">
          Eleven districts, each with its own mandate. One shared infrastructure.
        </p>
        <div class="st-rule reveal" aria-hidden="true" />
      </div>
    </section>

    <!-- District Grid -->
    <section ref="gridSection" class="st-grid-section">
      <div class="st-grid-wrap">
        <!-- Flagship row: hero card full-width -->
        <NuxtLink
          :to="'/districts/' + districts[0].slug"
          class="st-card st-card--flagship reveal"
          :style="{ '--card-accent': districts[0].accentColor }"
        >
          <div class="st-card-icon">
            <span class="material-symbols-outlined">architecture</span>
          </div>
          <div class="st-card-body">
            <span class="st-card-number">{{ districts[0].number }}</span>
            <h3 class="st-card-name">{{ districts[0].name }}</h3>
            <p class="st-card-type">{{ districts[0].type }}</p>
            <p class="st-card-desc">{{ districts[0].description }}</p>
            <span class="st-card-link">Explore <span aria-hidden="true">&rarr;</span></span>
          </div>
          <span class="st-card-badge" :class="'st-badge--' + districts[0].status">
            {{ districts[0].status === 'active' ? 'Active' : districts[0].status === 'coming-soon' ? 'Coming soon' : 'In development' }}
          </span>
        </NuxtLink>

        <!-- Main grid: remaining 10 districts -->
        <div class="st-grid">
          <NuxtLink
            v-for="d in districts.slice(1)"
            :key="d.slug"
            :to="'/districts/' + d.slug"
            class="st-card reveal"
            :class="'st-status--' + d.status"
            :style="{ '--card-accent': d.accentColor }"
          >
            <div class="st-card-icon">
              <span class="material-symbols-outlined">{{ getIcon(d.slug) }}</span>
            </div>
            <div class="st-card-body">
              <span class="st-card-number">{{ d.number }}</span>
              <h3 class="st-card-name">{{ d.name }}</h3>
              <p class="st-card-type">{{ d.type }}</p>
              <p class="st-card-desc">{{ d.description }}</p>
              <span class="st-card-link">Explore <span aria-hidden="true">&rarr;</span></span>
            </div>
            <span class="st-card-badge" :class="'st-badge--' + d.status">
              {{ d.status === 'active' ? 'Active' : d.status === 'coming-soon' ? 'Coming soon' : 'In development' }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Footer CTA -->
    <section class="st-footer">
      <div class="st-footer-grid">
        <NuxtLink to="/the-road" class="st-footer-card reveal">
          <span class="st-footer-overline">Publishing & Editorial</span>
          <h3 class="st-footer-title">The Road</h3>
          <p class="st-footer-desc">Essays, dispatches, and cultural criticism for creators who think deeply.</p>
          <span class="st-footer-link">Read <span aria-hidden="true">&rarr;</span></span>
        </NuxtLink>
        <NuxtLink to="/about" class="st-footer-card reveal">
          <span class="st-footer-overline">About</span>
          <h3 class="st-footer-title">Our Story</h3>
          <p class="st-footer-desc">The origin, the founders, and the principles.</p>
          <span class="st-footer-link">Learn more <span aria-hidden="true">&rarr;</span></span>
        </NuxtLink>
        <NuxtLink to="/apply" class="st-footer-card st-footer-card--accent reveal">
          <span class="st-footer-overline">Join</span>
          <h3 class="st-footer-title">Express Interest</h3>
          <p class="st-footer-desc">For creators ready to go further.</p>
          <span class="st-footer-link">Apply <span aria-hidden="true">&rarr;</span></span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapScrollReveal, waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'
import { districts } from '~/composables/useDistricts'

const pageRef = ref<HTMLElement | null>(null)
const gridSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(pageRef, '.reveal', { stagger: 0.06 })
useWordReveal(pageRef, '.word-reveal')

const iconMap: Record<string, string> = {
  'voight-studio': 'architecture',
  'the-road': 'edit_road',
  'meridian': 'explore',
  'fieldwork': 'science',
  'the-provenance': 'inventory_2',
  'basecamp': 'groups',
  'common-ground': 'event',
  'the-mint': 'storefront',
  'the-seal': 'verified',
  'the-collective': 'handshake',
  'the-frame': 'videocam',
}

function getIcon(slug: string): string {
  return iconMap[slug] || 'circle'
}

let ctx: gsap.Context | null = null

onMounted(async () => {
  if (!gridSection.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  await waitForAncestorAnimations(gridSection.value)
  if (!gridSection.value) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.st-card')

    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: (i % 2) * 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, gridSection.value)
})

onUnmounted(() => {
  ctx?.revert()
})

useHead({
  title: 'Districts \u2014 Meraki Road',
  meta: [
    { name: 'description', content: 'Navigate the eleven districts of Meraki Road. A cultural ecosystem built for AI-native creators.' },
  ],
})
</script>

<style scoped>
/* ─── Design Tokens (Stitch dark theme) ─── */
.districts-page {
  --st-ink: #FAFAF9;
  --st-gold: #B8964E;
  --st-bg: #09090B;
  --st-surface: #18181B;
  --st-muted: #A1A1AA;
  --st-border: #27272A;
  --st-rule: rgba(250, 250, 249, 0.12);
  background: var(--st-bg);
  color: var(--st-ink);
}

/* ─── Hero ─── */
.st-hero {
  padding: calc(var(--space-32, 8rem) + 3rem) var(--content-padding, 2rem) var(--space-16, 4rem);
  max-width: 64rem;
  margin: 0 auto;
}

.st-hero-inner {
  max-width: 48rem;
}

.st-overline {
  font-family: 'Outfit', var(--font-body, sans-serif);
  font-size: 0.6875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--st-gold);
  margin-bottom: 1rem;
}

.st-display {
  font-family: 'Fraunces', var(--font-display, serif);
  font-style: italic;
  font-weight: 300;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--st-ink);
  margin-bottom: 1.25rem;
}

.st-subtitle {
  font-family: 'Outfit', var(--font-body, sans-serif);
  font-size: 1.0625rem;
  font-weight: 300;
  color: var(--st-muted);
  line-height: 1.6;
  max-width: 42ch;
}

.st-rule {
  width: 4rem;
  height: 1px;
  background: var(--st-rule);
  margin-top: 2rem;
}

/* ─── Grid Section ─── */
.st-grid-section {
  background: var(--st-bg);
  padding: 0 var(--content-padding, 2rem) var(--space-24, 6rem);
}

.st-grid-wrap {
  max-width: 76rem;
  margin: 0 auto;
}

/* ─── Card Grid (2-column bordered) ─── */
.st-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

/* ─── Card ─── */
.st-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  background: var(--st-surface);
  border-right: 1px solid var(--st-border);
  border-bottom: 1px solid var(--st-border);
  text-decoration: none;
  color: inherit;
  background-image: none;
  transition: background 0.35s ease;
  min-height: 16rem;
}

/* Remove right border on even (right-column) cards */
.st-grid .st-card:nth-child(2n) {
  border-right: none;
}

/* Add left border on the full grid */
.st-grid {
  border-left: 1px solid var(--st-border);
  border-top: 1px solid var(--st-border);
}

.st-card:hover {
  background: #1f1f23;
}

.st-card:hover .st-card-link {
  color: var(--st-gold);
}

.st-card:hover .st-card-icon .material-symbols-outlined {
  color: var(--card-accent, var(--st-gold));
}

/* ─── Flagship card (full-width) ─── */
.st-card--flagship {
  flex-direction: row;
  align-items: flex-start;
  gap: 2.5rem;
  padding: 3rem 2.5rem;
  border: 1px solid var(--st-border);
  margin-bottom: 0;
  min-height: 14rem;
}

.st-card--flagship .st-card-icon .material-symbols-outlined {
  font-size: 2.5rem;
}

.st-card--flagship .st-card-name {
  font-size: clamp(1.5rem, 3vw, 2rem);
}

.st-card--flagship .st-card-desc {
  max-width: 50ch;
}

/* ─── Card Icon ─── */
.st-card-icon {
  flex-shrink: 0;
  margin-bottom: 1.25rem;
}

.st-card--flagship .st-card-icon {
  margin-bottom: 0;
  padding-top: 0.25rem;
}

.st-card-icon .material-symbols-outlined {
  font-size: 1.75rem;
  color: var(--st-muted);
  transition: color 0.3s ease;
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

/* ─── Card Body ─── */
.st-card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.st-card-number {
  font-family: 'Outfit', var(--font-body, sans-serif);
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  color: var(--st-muted);
  opacity: 0.5;
  margin-bottom: 0.5rem;
}

.st-card-name {
  font-family: 'Fraunces', var(--font-display, serif);
  font-style: italic;
  font-weight: 400;
  font-size: 1.375rem;
  line-height: 1.2;
  color: var(--st-ink);
  margin-bottom: 0.375rem;
}

.st-card-type {
  font-family: 'Outfit', var(--font-body, sans-serif);
  font-size: 0.625rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--st-muted);
  margin-bottom: 0.875rem;
}

.st-card-desc {
  font-family: 'Outfit', var(--font-body, sans-serif);
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.6;
  color: var(--st-muted);
  flex: 1;
}

.st-card-link {
  font-family: 'Outfit', var(--font-body, sans-serif);
  font-size: 0.6875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--st-muted);
  margin-top: 1.25rem;
  transition: color 0.3s ease;
}

/* ─── Status Badge ─── */
.st-card-badge {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  font-family: 'Outfit', var(--font-body, sans-serif);
  font-size: 0.5625rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  padding: 0.2rem 0.5rem;
  backdrop-filter: blur(8px);
}

.st-badge--active {
  color: #fff;
  background: rgba(22, 163, 74, 0.6);
}
.st-badge--coming-soon {
  color: var(--st-ink);
  background: rgba(184, 150, 78, 0.25);
  border: 1px solid rgba(184, 150, 78, 0.3);
}
.st-badge--development {
  color: var(--st-muted);
  background: rgba(250, 250, 249, 0.04);
  border: 1px solid var(--st-border);
}

/* ─── Status Dimming ─── */
.st-status--development {
  opacity: 0.7;
}
.st-status--development:hover {
  opacity: 1;
}

/* ─── Footer ─── */
.st-footer {
  padding: var(--space-16, 4rem) var(--content-padding, 2rem);
  background: var(--st-bg);
}

.st-footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  max-width: 76rem;
  margin: 0 auto;
  border-top: 1px solid var(--st-border);
  border-left: 1px solid var(--st-border);
}

.st-footer-card {
  display: block;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  background: var(--st-surface);
  background-image: none;
  border-right: 1px solid var(--st-border);
  border-bottom: 1px solid var(--st-border);
  transition: background 0.3s ease;
}

.st-footer-card:hover {
  background: #1f1f23;
}

.st-footer-card--accent {
  border-left: 2px solid var(--st-gold);
}

.st-footer-overline {
  font-family: 'Outfit', var(--font-body, sans-serif);
  font-size: 0.625rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--st-gold);
  display: block;
  margin-bottom: 0.75rem;
}

.st-footer-title {
  font-family: 'Fraunces', var(--font-display, serif);
  font-style: italic;
  font-weight: 400;
  font-size: 1.25rem;
  color: var(--st-ink);
  margin-bottom: 0.5rem;
}

.st-footer-desc {
  font-family: 'Outfit', var(--font-body, sans-serif);
  font-size: 0.8125rem;
  font-weight: 300;
  color: var(--st-muted);
  line-height: 1.55;
  margin-bottom: 1rem;
}

.st-footer-link {
  font-family: 'Outfit', var(--font-body, sans-serif);
  font-size: 0.6875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--st-gold);
}

.st-footer-card--accent .st-footer-title {
  color: var(--st-gold);
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .st-hero {
    padding-top: calc(var(--space-16, 4rem) + 3rem);
  }

  .st-display {
    font-size: clamp(2rem, 8vw, 2.75rem);
  }

  .st-grid {
    grid-template-columns: 1fr;
  }

  .st-grid .st-card {
    border-right: none;
  }

  .st-grid {
    border-right: 1px solid var(--st-border);
  }

  .st-card--flagship {
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 1.5rem;
  }

  .st-footer-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .st-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .st-footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .st-footer-card:first-child {
    grid-column: 1 / -1;
  }
}
</style>
