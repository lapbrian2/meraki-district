<template>
  <div v-if="district" ref="root" :style="{ '--color-accent': district.accentColor, '--color-accent-accessible': district.accentColorAccessible }">
    <!-- Hero -->
    <section ref="heroSection" class="q-hero">
      <div class="q-hero-image-wrap parallax-container">
        <NuxtImg
          :src="district.image"
          :alt="`${district.name} \u2014 ${district.type}`"
          class="q-hero-image"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          width="1400"
          height="750"
        />
        <div class="q-hero-overlay" />
      </div>
      <div class="q-hero-content section-default">
        <p class="overline">{{ district.type }}</p>
        <h1 ref="heroTitle" class="q-hero-title" :style="{ fontVariationSettings: district.fontVariation }">{{ district.name }}</h1>
        <span class="q-hero-number">{{ district.number }}</span>
      </div>
    </section>

    <!-- District Navigator -->
    <nav class="q-nav" aria-label="District navigation">
      <div class="section-default q-nav-inner">
        <NuxtLink
          v-for="d in districts"
          :key="d.slug"
          :to="'/districts/' + d.slug"
          class="q-nav-dot"
          :class="{ 'q-nav-active': d.slug === slug }"
          :style="{ '--dot-color': d.accentColor }"
          :aria-label="d.name"
          :aria-current="d.slug === slug ? 'page' : undefined"
        >
          <span class="q-nav-num">{{ d.number }}</span>
        </NuxtLink>
      </div>
    </nav>

    <!-- Body -->
    <section ref="bodySection" class="q-body section">
      <div class="section-narrow">
        <div class="q-rule" aria-hidden="true" />
        <p class="q-long reveal">{{ district.longDescription }}</p>
      </div>
    </section>

    <!-- Pull Quote -->
    <section ref="quoteSection" class="q-quote section-dark">
      <div class="section-default q-quote-inner">
        <blockquote class="q-quote-text">
          <p class="word-reveal">&ldquo;{{ district.pullQuote }}&rdquo;</p>
        </blockquote>
      </div>
    </section>

    <!-- Offerings -->
    <section ref="offeringsSection" class="q-offerings section">
      <div class="section-default">
        <p class="overline reveal">What you&rsquo;ll find</p>
        <div class="q-offerings-grid">
          <div
            v-for="(item, i) in district.offerings"
            :key="i"
            class="q-offering reveal"
          >
            <span class="q-offering-index">{{ String(i + 1).padStart(2, '0') }}</span>
            <p class="q-offering-name">{{ item }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- From This District (active only) -->
    <section v-if="district.status === 'active'" ref="fromSection" class="q-from section-dark">
      <div class="section-default">
        <p class="overline reveal">From This District</p>
        <div class="q-from-content reveal">
          <template v-if="district.slug === 'the-road'">
            <p class="q-from-body">
              The Road publishes weekly. Long-form essays, cultural criticism, and field dispatches
              from practitioners who treat writing as a creative discipline.
            </p>
            <NuxtLink to="/the-road" class="q-from-link">Read the latest &rarr;</NuxtLink>
          </template>
          <template v-else-if="district.slug === 'voight-studio'">
            <p class="q-from-body">
              Voight Studio is currently accepting select engagements. Design strategy, brand identity,
              creative direction, and visual systems for ventures building at the edge.
            </p>
            <NuxtLink to="/apply" class="q-from-link">Start a conversation &rarr;</NuxtLink>
          </template>
        </div>
      </div>
    </section>

    <!-- Status -->
    <section ref="statusSection" class="q-status-section section">
      <div class="section-narrow">
        <div class="q-status reveal" :class="'q-status--' + district.status">
          <div class="q-status-marker" />
          <div>
            <p class="q-status-label">Status</p>
            <p class="q-status-text">
              <template v-if="district.status === 'active'">
                This district is live. {{ district.statusNote || '' }}
              </template>
              <template v-else-if="district.status === 'coming-soon'">
                {{ district.statusNote || 'Coming soon.' }}
              </template>
              <template v-else>
                This district is in development. Every detail is being built with the same standard we apply to the work itself.
              </template>
            </p>
          </div>
        </div>

        <div class="q-cta reveal">
          <p class="q-cta-text">
            Want to be notified when {{ district.name }} opens?
          </p>
          <NuxtLink to="/apply" class="q-cta-button">Express interest &rarr;</NuxtLink>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- Explore More -->
    <section ref="navSection" class="q-explore section">
      <div class="section-default">
        <p class="overline reveal">Explore more</p>
        <div class="q-explore-grid">
          <NuxtLink
            v-if="prev"
            :to="'/districts/' + prev.slug"
            class="q-explore-card reveal"
          >
            <div class="q-explore-image parallax-container">
              <NuxtImg :src="prev.image" :alt="prev.name" loading="lazy" decoding="async" width="600" height="338" />
            </div>
            <div class="q-explore-info">
              <span class="q-explore-type">{{ prev.type }}</span>
              <h3>{{ prev.name }}</h3>
            </div>
          </NuxtLink>
          <NuxtLink
            v-if="next"
            :to="'/districts/' + next.slug"
            class="q-explore-card reveal"
          >
            <div class="q-explore-image parallax-container">
              <NuxtImg :src="next.image" :alt="next.name" loading="lazy" decoding="async" width="600" height="338" />
            </div>
            <div class="q-explore-info">
              <span class="q-explore-type">{{ next.type }}</span>
              <h3>{{ next.name }}</h3>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="not-found section">
    <div class="section-narrow">
      <h1>District not found</h1>
      <p><NuxtLink to="/districts">Back to all districts</NuxtLink></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useParallax } from '~/composables/useParallax'
import { useTilt } from '~/composables/useInteractions'
import { districts, useDistrict } from '~/composables/useDistricts'

const route = useRoute()

const slug = computed(() => route.params.slug as string)
const district = computed(() => useDistrict(slug.value))
const currentIndex = computed(() => districts.findIndex(i => i.slug === slug.value))
const prev = computed(() => currentIndex.value > 0 ? districts[currentIndex.value - 1] : null)
const next = computed(() => currentIndex.value < districts.length - 1 ? districts[currentIndex.value + 1] : null)

useHead(computed(() => ({
  title: district.value ? district.value.name + ' \u2014 Meraki Road' : 'Meraki Road',
  meta: district.value ? [
    { name: 'description', content: district.value.description },
    { property: 'og:title', content: district.value.name + ' \u2014 Meraki Road' },
    { property: 'og:description', content: district.value.description },
  ] : [],
})))

const root = ref<HTMLElement | null>(null)
const heroSection = ref<HTMLElement | null>(null)
const heroTitle = ref<HTMLElement | null>(null)
const bodySection = ref<HTMLElement | null>(null)
const quoteSection = ref<HTMLElement | null>(null)
const offeringsSection = ref<HTMLElement | null>(null)
const statusSection = ref<HTMLElement | null>(null)
const navSection = ref<HTMLElement | null>(null)

// Composable-driven animations (run once on mount)
useGsapScrollReveal(bodySection, '.reveal', { stagger: 0.1 })
useGsapScrollReveal(offeringsSection, '.reveal', { stagger: 0.08 })
const fromSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(fromSection, '.reveal', { stagger: 0.1 })
useGsapScrollReveal(statusSection, '.reveal', { stagger: 0.1 })
useGsapScrollReveal(navSection, '.reveal', { stagger: 0.12 })
useParallax(heroSection, '.q-hero-image', { speed: 0.08 })
useTilt(navSection, '.q-explore-card', { maxRotation: 2 })

let ctx: gsap.Context | null = null

/**
 * Split text into word-reveal spans and animate.
 * Reproduces useWordReveal logic inline so it can re-run on slug changes.
 */
function wordReveal(el: HTMLElement, opts: { stagger?: number; duration?: number; y?: number } = {}) {
  const { stagger = 0.07, duration = 1.1, y = 70 } = opts
  const text = el.textContent || ''
  const words = text.trim().split(/\s+/)
  el.style.display = 'flex'
  el.style.flexWrap = 'wrap'
  el.style.columnGap = '0.27em'
  el.innerHTML = words.map(word =>
    '<span class="wr-mask" style="display:inline-flex;overflow:hidden;vertical-align:bottom;padding-bottom:0.1em">' +
    '<span class="wr-word" style="display:inline-block;will-change:transform">' + word + '</span>' +
    '</span>'
  ).join('')

  gsap.from(el.querySelectorAll('.wr-word'), {
    yPercent: y,
    duration,
    stagger,
    ease: 'power2.out',
  })
}

/**
 * Split quote text and animate with ScrollTrigger.
 */
function quoteWordReveal(el: HTMLElement) {
  const text = el.textContent || ''
  const words = text.trim().split(/\s+/)
  el.style.display = 'flex'
  el.style.flexWrap = 'wrap'
  el.style.columnGap = '0.27em'
  el.style.justifyContent = 'center'
  el.innerHTML = words.map(word =>
    '<span class="wr-mask" style="display:inline-flex;overflow:hidden;vertical-align:bottom;padding-bottom:0.1em">' +
    '<span class="wr-word" style="display:inline-block;will-change:transform">' + word + '</span>' +
    '</span>'
  ).join('')

  gsap.from(el.querySelectorAll('.wr-word'), {
    yPercent: 70,
    duration: 1.2,
    stagger: 0.04,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el.closest('.q-quote') || el,
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
  })
}

function initAnimations() {
  if (!root.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  gsap.registerPlugin(ScrollTrigger)
  ctx?.revert()

  ctx = gsap.context(() => {
    // Hero image zoom entrance
    gsap.from('.q-hero-image', {
      scale: 1.1,
      duration: 1.8,
      ease: 'power3.out',
    })

    // Hero content staggered entrance
    gsap.from('.q-hero-content .overline', {
      opacity: 0,
      y: 15,
      duration: 0.6,
      ease: 'power3.out',
      delay: 0.3,
    })

    gsap.from('.q-hero-number', {
      opacity: 0,
      y: 10,
      duration: 0.5,
      ease: 'power3.out',
      delay: 0.8,
    })

    // Hero title word-reveal
    if (heroTitle.value) {
      wordReveal(heroTitle.value, { stagger: 0.06, duration: 1.0, y: 80 })
    }

    // Body content entrance: slide up from below
    gsap.from('.q-body', {
      y: 60,
      opacity: 0,
      duration: 1.0,
      ease: 'power3.out',
      delay: 0.4,
    })

    // Gold rule draw
    gsap.from('.q-rule', {
      scaleX: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.q-rule',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    // Pull quote word-reveal on scroll
    const quoteP = root.value?.querySelector('.q-quote-text .word-reveal')
    if (quoteP) {
      quoteWordReveal(quoteP as HTMLElement)
    }
  }, root.value)
}

onMounted(async () => {
  if (!root.value) return
  await waitForAncestorAnimations(root.value)
  if (!root.value) return
  initAnimations()
})

watch(slug, async () => {
  ctx?.revert()
  window.scrollTo(0, 0)
  await nextTick()
  await nextTick()
  initAnimations()
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped>
/* Hero */
.q-hero {
  position: relative;
  height: 75vh;
  min-height: 450px;
  max-height: 750px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

.q-hero-image-wrap {
  position: absolute;
  inset: 0;
}

.q-hero-image {
  width: 100%;
  height: 130%;
  top: -15%;
  position: relative;
  object-fit: cover;
  will-change: transform;
  filter: grayscale(1);
  transition: filter 0.6s ease;
}

.q-hero:hover .q-hero-image {
  filter: grayscale(0);
}

.q-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(9, 9, 11, 0.88) 0%,
    rgba(9, 9, 11, 0.35) 45%,
    rgba(9, 9, 11, 0.08) 100%
  );
  box-shadow: inset 0 0 120px rgba(0, 0, 0, 0.5);
}

.q-hero-content {
  position: relative;
  z-index: 1;
  padding-bottom: var(--space-16);
  width: 100%;
}

.q-hero-content .overline {
  color: var(--color-accent);
  margin-bottom: var(--space-3);
}

.q-hero-title {
  font-size: var(--text-display);
  color: var(--color-dark-text);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
}

.q-hero-number {
  position: absolute;
  bottom: var(--space-16);
  right: var(--content-padding);
  font-family: var(--font-mono);
  font-size: clamp(4rem, 8vw, 7rem);
  color: var(--color-accent);
  letter-spacing: var(--tracking-ultra-wide);
  opacity: 0.12;
  line-height: 1;
  pointer-events: none;
}

/* District Navigator — museum wayfinding strip */
.q-nav {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 10;
}

.q-nav-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: var(--space-3) 0;
  position: relative;
}

/* Connecting line between all dots */
.q-nav-inner::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - var(--content-padding) * 2);
  max-width: 440px;
  height: 1px;
  background: var(--color-border);
  pointer-events: none;
}

.q-nav-dot {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-image: none;
  text-decoration: none;
  position: relative;
  z-index: 1;
  transition: transform var(--duration-normal) var(--ease-out);
}

.q-nav-dot:hover {
  transform: scale(1.15);
}

/* Node circle on the line */
.q-nav-dot::before {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-border);
  transition: width var(--duration-normal) var(--ease-out),
              height var(--duration-normal) var(--ease-out),
              background var(--duration-normal) var(--ease-out),
              box-shadow var(--duration-normal) var(--ease-out);
}

.q-nav-dot:hover::before {
  width: 8px;
  height: 8px;
  background: var(--dot-color);
}

.q-nav-active::before {
  width: 10px;
  height: 10px;
  background: var(--color-gold);
  box-shadow: 0 0 8px rgba(184, 150, 78, 0.35);
}

/* Bottom indicator bar */
.q-nav-dot::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--dot-color);
  transition: width var(--duration-normal) var(--ease-out);
}

.q-nav-dot:hover::after,
.q-nav-active::after {
  width: 100%;
}

.q-nav-num {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-muted);
  opacity: 0;
  position: absolute;
  bottom: -14px;
  transition: color var(--duration-fast) ease,
              opacity var(--duration-normal) var(--ease-out);
  pointer-events: none;
}

.q-nav-dot:hover .q-nav-num,
.q-nav-active .q-nav-num {
  opacity: 1;
}

.q-nav-active .q-nav-num {
  color: var(--color-gold);
  font-weight: 600;
}

.q-nav-dot:hover .q-nav-num {
  color: var(--color-ink);
}

/* Body */
.q-body { padding-top: var(--space-24); }

.q-rule {
  width: 48px;
  height: 1px;
  background: var(--color-accent);
  margin-bottom: var(--space-12);
  transform-origin: left;
}

.q-long {
  font-size: var(--text-body);
  color: var(--color-text);
  line-height: var(--leading-relaxed);
  max-width: 60ch;
}

/* Pull Quote */
.q-quote {
  padding: var(--space-32) 0;
}

.q-quote-inner {
  display: flex;
  justify-content: center;
}

.q-quote-text {
  text-align: center;
  max-width: 700px;
}

.q-quote-text p {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-snug);
  color: var(--color-dark-text);
  max-width: none;
  font-variation-settings: 'WONK' 1, 'SOFT' 80;
}

/* Offerings */
/* From This District */
.q-from {
  padding: var(--space-16) 0;
}

.q-from-body {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
  margin-bottom: var(--space-6);
}

.q-from-link {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-accent);
  background-image: none;
  border-left: 2px solid var(--color-accent);
  padding-left: var(--space-4);
  transition: opacity var(--duration-fast) ease;
}

.q-from-link:hover {
  opacity: 0.7;
}

/* Offerings */
.q-offerings { padding-bottom: var(--space-16); }

.q-offerings .overline {
  margin-bottom: var(--space-12);
}

.q-offerings-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--color-border);
  border: 1px solid var(--color-border);
}

.q-offering {
  background: var(--color-background);
  padding: var(--space-8);
  transition: background 0.3s ease;
}

.q-offering:hover {
  background: var(--color-surface);
}

.q-offering-index {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  color: var(--color-accent);
  letter-spacing: var(--tracking-mega-wide);
  display: block;
  margin-bottom: var(--space-4);
}

.q-offering-name {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 400;
  letter-spacing: var(--tracking-snug);
  color: var(--color-ink);
  max-width: none;
}

/* Status */
.q-status {
  display: flex;
  align-items: flex-start;
  gap: var(--space-6);
  padding: var(--space-8);
  border: 1px solid var(--color-border);
}

.q-status-marker {
  width: 8px;
  height: 8px;
  background: var(--color-accent);
  flex-shrink: 0;
  margin-top: var(--space-1);
  animation: statusPulse 2s ease-in-out infinite;
}

.q-status--active .q-status-marker {
  background: var(--color-success);
  animation: none;
}

.q-status--coming-soon .q-status-marker {
  background: var(--color-accent);
}

@keyframes statusPulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

.q-status-label {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-accent-accessible);
  margin-bottom: var(--space-2);
  max-width: none;
}

.q-status-text {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
}

/* CTA */
.q-cta {
  margin-top: var(--space-16);
  padding-top: var(--space-8);
  border-top: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
}

.q-cta-text {
  font-size: var(--text-body);
  color: var(--color-text-muted);
}

.q-cta-button {
  flex-shrink: 0;
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-ink);
  padding: var(--space-3) var(--space-8);
  border: 1px solid var(--color-border);
  border-left: 2px solid var(--color-accent);
  background-image: none;
  transition: border-color var(--duration-fast) ease,
              color var(--duration-fast) ease,
              background-color var(--duration-fast) ease;
}

.q-cta-button:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  background-color: color-mix(in srgb, var(--color-accent) 6%, transparent);
}

/* Explore More */
.q-explore .overline { margin-bottom: var(--space-8); }

.q-explore-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--color-border);
  border: 1px solid var(--color-border);
}

.q-explore-card {
  display: block;
  background: var(--color-background);
  text-decoration: none;
  color: inherit;
  background-image: none;
  overflow: hidden;
  transition: background 0.3s ease;
}

.q-explore-card:hover {
  background: var(--color-surface);
}

.q-explore-card:hover .q-explore-image img {
  transform: scale(1.04);
}

.q-explore-image {
  aspect-ratio: 16/9;
  overflow: hidden;
}

.q-explore-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              filter 0.6s ease;
}

.q-explore-card:hover .q-explore-image img {
  filter: grayscale(0);
}

/* Parallax container interaction */
.parallax-container img {
  transition: transform 0.8s cubic-bezier(0.33, 1, 0.68, 1),
              filter 0.6s ease;
}

.parallax-container:hover img {
  transform: scale(1.08) translateY(-2%);
}

.q-explore-info {
  padding: var(--space-6) var(--space-8);
}

.q-explore-type {
  font-size: 0.5625rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-accent);
  display: block;
  margin-bottom: var(--space-2);
}

.q-explore-info h3 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: var(--text-h3);
  line-height: var(--leading-snug);
}

/* Not found */
.not-found {
  padding-top: calc(var(--space-32) + 3rem);
  min-height: 60vh;
}

.not-found h1 { margin-bottom: var(--space-4); }

/* Responsive */
@media (max-width: 768px) {
  .q-hero {
    height: 55vh;
    min-height: 320px;
  }

  .q-hero-content {
    padding-bottom: var(--space-8);
    padding-left: var(--content-padding);
    padding-right: var(--content-padding);
  }

  .q-quote { padding: var(--space-16) 0; }

  .q-quote-text p { font-size: var(--text-h2); }

  .q-offerings-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .q-cta {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }

  .q-cta-button {
    width: 100%;
    text-align: center;
    padding: var(--space-4) var(--space-6);
  }

  .q-explore-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .q-offerings-grid {
    grid-template-columns: 1fr;
  }
}
</style>
