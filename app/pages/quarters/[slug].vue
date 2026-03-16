<template>
  <div v-if="quarter" ref="root">
    <!-- Hero -->
    <section class="q-hero">
      <div class="q-hero-image-wrap">
        <img
          :src="quarter.image"
          :alt="`${quarter.name} \u2014 ${quarter.type}`"
          class="q-hero-image"
          loading="eager"
        />
        <div class="q-hero-overlay" />
      </div>
      <div class="q-hero-content section-default">
        <p class="overline">{{ quarter.type }}</p>
        <h1 class="q-hero-title">{{ quarter.name }}</h1>
        <span class="q-hero-number">{{ quarter.number }}</span>
      </div>
    </section>

    <!-- Body -->
    <section ref="bodySection" class="q-body section">
      <div class="section-narrow">
        <div class="q-rule" aria-hidden="true" />
        <p class="q-long reveal">{{ quarter.longDescription }}</p>
      </div>
    </section>

    <!-- Pull Quote -->
    <section class="q-quote section-dark">
      <div class="section-default q-quote-inner">
        <blockquote class="q-quote-text reveal">
          <p>\u201c{{ quarter.pullQuote }}\u201d</p>
        </blockquote>
      </div>
    </section>

    <!-- Offerings -->
    <section ref="offeringsSection" class="q-offerings section">
      <div class="section-default">
        <p class="overline reveal">What you\u2019ll find</p>
        <div class="q-offerings-grid">
          <div
            v-for="(item, i) in quarter.offerings"
            :key="i"
            class="q-offering reveal"
          >
            <span class="q-offering-index">{{ String(i + 1).padStart(2, '0') }}</span>
            <p class="q-offering-name">{{ item }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Status -->
    <section ref="statusSection" class="q-status-section section">
      <div class="section-narrow">
        <div class="q-status reveal">
          <div class="q-status-marker" />
          <div>
            <p class="q-status-label">Status</p>
            <p class="q-status-text">
              This quarter is currently in development. We\u2019re building
              something worth waiting for.
            </p>
          </div>
        </div>

        <div class="q-cta reveal">
          <p class="q-cta-text">
            Want to be notified when {{ quarter.name }} opens?
          </p>
          <NuxtLink to="/apply" class="q-cta-button">Join the waitlist</NuxtLink>
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
            :to="'/quarters/' + prev.slug"
            class="q-explore-card reveal"
          >
            <div class="q-explore-image">
              <img :src="prev.image" :alt="prev.name" loading="lazy" />
            </div>
            <div class="q-explore-info">
              <span class="q-explore-type">{{ prev.type }}</span>
              <h3>{{ prev.name }}</h3>
            </div>
          </NuxtLink>
          <NuxtLink
            v-if="next"
            :to="'/quarters/' + next.slug"
            class="q-explore-card reveal"
          >
            <div class="q-explore-image">
              <img :src="next.image" :alt="next.name" loading="lazy" />
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
      <h1>Quarter not found</h1>
      <p><NuxtLink to="/quarters">Back to all quarters</NuxtLink></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useParallax } from '~/composables/useParallax'
import { quarters, useQuarter } from '~/composables/useQuarters'

const route = useRoute()

const slug = computed(() => route.params.slug as string)
const quarter = computed(() => useQuarter(slug.value))
const currentIndex = computed(() => quarters.findIndex(i => i.slug === slug.value))
const prev = computed(() => currentIndex.value > 0 ? quarters[currentIndex.value - 1] : null)
const next = computed(() => currentIndex.value < quarters.length - 1 ? quarters[currentIndex.value + 1] : null)

useHead(computed(() => ({
  title: quarter.value ? quarter.value.name + ' \u2014 Meraki District' : 'Meraki District',
  meta: quarter.value ? [
    { name: 'description', content: quarter.value.description },
    { property: 'og:title', content: quarter.value.name + ' \u2014 Meraki District' },
    { property: 'og:description', content: quarter.value.description },
  ] : [],
})))

const root = ref<HTMLElement | null>(null)
const bodySection = ref<HTMLElement | null>(null)
const offeringsSection = ref<HTMLElement | null>(null)
const statusSection = ref<HTMLElement | null>(null)
const navSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(bodySection, '.reveal', { stagger: 0.1 })
useGsapScrollReveal(offeringsSection, '.reveal', { stagger: 0.08 })
useGsapScrollReveal(statusSection, '.reveal', { stagger: 0.1 })
useGsapScrollReveal(navSection, '.reveal', { stagger: 0.12 })

let ctx: gsap.Context | null = null

function initAnimations() {
  if (!root.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  gsap.registerPlugin(ScrollTrigger)
  ctx?.revert()

  ctx = gsap.context(() => {
    // Hero image zoom
    gsap.from('.q-hero-image', {
      scale: 1.1,
      duration: 1.8,
      ease: 'power3.out',
    })

    // Hero parallax
    gsap.fromTo('.q-hero-image',
      { yPercent: -3 },
      {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: '.q-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    )

    // Rule draw
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

    // Quote entrance
    gsap.from('.q-quote-text', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.q-quote',
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    })
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
  await nextTick()
  await nextTick()
  window.scrollTo(0, 0)
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
}

.q-hero-content {
  position: relative;
  z-index: 1;
  padding-bottom: var(--space-16);
  width: 100%;
}

.q-hero-content .overline {
  color: var(--color-gold);
  margin-bottom: var(--space-3);
}

.q-hero-title {
  font-size: var(--text-display);
  color: var(--color-dark-text);
  line-height: var(--leading-tight);
}

.q-hero-number {
  display: block;
  margin-top: var(--space-4);
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-widest);
}

/* Body */
.q-body { padding-top: var(--space-24); }

.q-rule {
  width: 48px;
  height: 1px;
  background: var(--color-gold);
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
  color: var(--color-gold);
  letter-spacing: 0.1em;
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
  background: var(--color-gold);
  flex-shrink: 0;
  margin-top: var(--space-1);
  animation: statusPulse 2s ease-in-out infinite;
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
  color: var(--color-gold-accessible);
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
  border: 1px solid var(--color-ink);
  background-image: none;
  transition: border-color var(--duration-fast) ease, color var(--duration-fast) ease;
}

.q-cta-button:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
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
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.q-explore-info {
  padding: var(--space-6) var(--space-8);
}

.q-explore-type {
  font-size: 0.5625rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-gold);
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
