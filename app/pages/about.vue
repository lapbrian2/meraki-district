<template>
  <div class="about-page">

    <!-- ============================================
         HERO — Left-aligned, clean
         Overline + italic Fraunces heading + pull quote
    ============================================= -->
    <section ref="heroSection" class="about-hero section section-dark">
      <div class="section-default">
        <p class="overline reveal">About Meraki Road</p>
        <h1 class="about-hero-title word-reveal">
          <em>Built by practitioners, for practitioners.</em>
        </h1>
        <blockquote class="hero-quote reveal">
          <p class="hero-quote-text">
            We didn&rsquo;t set out to build a platform. We set out to build a
            sanctuary&mdash;a place where the work speaks first and the algorithm
            never gets a vote.
          </p>
          <cite class="hero-quote-cite">&mdash; Brian Lapinski</cite>
        </blockquote>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         ORIGIN NARRATIVE — "Bridging the Gap"
         Left-aligned body copy, warm palette
    ============================================= -->
    <section ref="originSection" class="origin section">
      <div class="section-default">
        <p class="overline reveal">The Origin</p>
        <h2 class="origin-title word-reveal">
          <em>Bridging the Gap Between Talent and Visibility</em>
        </h2>
        <div class="origin-rule reveal" aria-hidden="true" />
        <div class="origin-body-wrap">
          <p class="origin-body reveal">
            Meraki Road started with a question that wouldn&rsquo;t go away:
            why does discovery in creative fields still depend on algorithms
            that reward volume over craft?
          </p>
          <p class="origin-body reveal">
            Every platform optimises for engagement&mdash;likes, shares,
            follower counts. None of them were built to surface the
            practitioners doing rigorous, patient work at the edges of their
            disciplines. The people shaping what AI-native creativity actually
            looks like were invisible to the infrastructure that was supposed
            to serve them.
          </p>
          <p class="origin-body reveal">
            So we stopped looking. We built the institution ourselves&mdash;a
            publishing house, a credentialing body, a research practice, and a
            gathering place, all held together by one conviction: that this
            work deserves the same permanence and seriousness as every creative
            discipline that came before it.
          </p>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         FOUNDERS — Side-by-side cards (FoundersGrid)
    ============================================= -->
    <FoundersGrid />

    <SectionDivider />

    <!-- ============================================
         ETHOS — 2x3 grid of numbered principles
         Typography-driven, no background fills
    ============================================= -->
    <section ref="ethosSection" class="ethos section">
      <div class="section-wide">
        <div class="ethos-header">
          <p class="overline reveal">Our Ethos</p>
          <h2 class="ethos-title word-reveal"><em>Six Fundamental Principles</em></h2>
        </div>

        <div class="ethos-grid">
          <article
            v-for="principle in principles"
            :key="principle.number"
            class="ethos-card reveal"
          >
            <span class="ethos-number">{{ principle.number }}</span>
            <h3 class="ethos-card-title">{{ principle.title }}</h3>
            <p class="ethos-card-body">{{ principle.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — "The road is open." + dual buttons
    ============================================= -->
    <section ref="ctaSection" class="cta section-dark">
      <div class="section-narrow cta-inner">
        <h2 class="cta-title word-reveal">The road is open.</h2>
        <div class="cta-buttons reveal">
          <NuxtLink to="/apply" class="cta-button cta-button--primary">
            Join the District &rarr;
          </NuxtLink>
          <NuxtLink to="/archive" class="cta-button cta-button--secondary">
            View the Archive &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapScrollReveal, waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'
import { useMagnetic, useTilt } from '~/composables/useInteractions'

/* -- SEO ---------------------------------------- */
useHead({
  title: 'About \u2014 Meraki Road',
  meta: [
    { name: 'description', content: 'Built by practitioners, for practitioners. The people and principles behind Meraki Road.' },
  ],
})

useSeoMeta({
  ogTitle: 'About \u2014 Meraki Road',
  ogDescription: 'Built by practitioners, for practitioners. The people and principles behind Meraki Road.',
  twitterTitle: 'About \u2014 Meraki Road',
  twitterDescription: 'Built by practitioners, for practitioners. The people and principles behind Meraki Road.',
})

/* -- Hero --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Origin ------------------------------------- */
const originSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(originSection, '.reveal', { stagger: 0.12 })
useWordReveal(originSection, '.word-reveal')

/* -- Ethos -------------------------------------- */
const ethosSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ethosSection, '.reveal', { stagger: 0.1 })
useTilt(ethosSection, '.ethos-card', { maxRotation: 2 })
useWordReveal(ethosSection, '.word-reveal')

/* -- CTA ---------------------------------------- */
const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal', { stagger: 0.08 })
useMagnetic(ctaSection, '.cta-button', { strength: 0.25 })

/* -- Custom GSAP animations -------------------- */
let ctx: gsap.Context | null = null

onMounted(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  gsap.registerPlugin(ScrollTrigger)

  if (heroSection.value) {
    await waitForAncestorAnimations(heroSection.value)
  }

  ctx = gsap.context(() => {
    /* Origin rule draw-in */
    const originRule = originSection.value?.querySelector('.origin-rule')
    if (originRule) {
      gsap.from(originRule, {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: originRule,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }

    /* Ethos card stagger entrance */
    const cards = ethosSection.value?.querySelectorAll('.ethos-card')
    cards?.forEach((card) => {
      const number = card.querySelector('.ethos-number')
      const title = card.querySelector('.ethos-card-title')
      const body = card.querySelector('.ethos-card-body')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      tl.from(number!, {
        opacity: 0, scale: 0.5, duration: 0.5, ease: 'power3.out',
      }, 0)
      .from(title!, {
        opacity: 0, y: 20, duration: 0.6, ease: 'power3.out',
      }, 0.15)
      .from(body!, {
        opacity: 0, y: 15, duration: 0.6, ease: 'power3.out',
      }, 0.25)
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
})

/* -- Data --------------------------------------- */
const principles = [
  {
    number: '01',
    title: 'Invisible Shell',
    body: 'Technology should be the gallery frame, not the painting. Our infrastructure disappears so the work can breathe. Every interface decision serves the creator\u2019s intent, never the platform\u2019s.',
  },
  {
    number: '02',
    title: 'Radical Intent',
    body: 'We choose friction over frictionlessness. Slowing down is a feature. The things worth making resist convenience\u2014they demand presence, attention, and deliberate craft.',
  },
  {
    number: '03',
    title: 'Meritocratic Signal',
    body: 'Visibility here is earned through demonstrated practice, not purchased through promotion. Our credentialing carries weight because it cannot be gamed, only proven.',
  },
  {
    number: '04',
    title: 'Institutional Weight',
    body: 'We build for permanence. Every standard, every credential, every published work is designed to endure\u2014not trend. The road is meant to outlast any single season.',
  },
  {
    number: '05',
    title: 'Human Trace',
    body: 'Asymmetry and soul over algorithmic polish. We preserve the handmade quality in everything we publish\u2014the rough edges that prove a human was here and meant it.',
  },
  {
    number: '06',
    title: 'Sustained Presence',
    body: 'We favour slow engagement over viral moments. Depth compounds. The practitioners who stay and build are worth more to this ecosystem than the ones who pass through.',
  },
]
</script>

<style scoped>
/* =============================================
   HERO — Left-aligned, clean
   ============================================= */
.about-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  background-color: var(--color-background);
}

.about-hero-title {
  font-size: var(--text-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
  margin-top: var(--space-4);
  margin-bottom: var(--space-12);
  color: var(--color-ink);
  max-width: 18ch;
}

.about-hero-title em {
  font-family: var(--font-display);
  font-style: italic;
}

/* Pull quote */
.hero-quote {
  border-left: 2px solid var(--color-gold);
  padding-left: var(--space-8);
  margin: 0;
  max-width: 55ch;
}

.hero-quote-text {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  color: var(--color-ink);
}

.hero-quote-cite {
  display: block;
  margin-top: var(--space-4);
  font-family: var(--font-body);
  font-style: normal;
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
}

@media (max-width: 768px) {
  .about-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-12);
  }

  .hero-quote {
    padding-left: var(--space-6);
  }
}

/* =============================================
   ORIGIN — Left-aligned narrative
   ============================================= */
.origin {
  padding-top: var(--space-24);
  padding-bottom: var(--space-24);
  background-color: var(--color-surface);
}

.origin-title {
  font-size: var(--text-h1);
  font-weight: 300;
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-hero);
  color: var(--color-ink);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  max-width: 22ch;
}

.origin-title em {
  font-family: var(--font-display);
  font-style: italic;
}

.origin-rule {
  width: 48px;
  height: 1px;
  background: var(--color-gold);
  margin-bottom: var(--space-8);
  transform-origin: left;
}

.origin-body-wrap {
  max-width: 65ch;
}

.origin-body {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.origin-body:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .origin {
    padding-top: var(--space-16);
    padding-bottom: var(--space-16);
  }
}

/* =============================================
   ETHOS — 2x3 grid of numbered principles
   ============================================= */
.ethos {
  background-color: var(--color-background);
}

.ethos-header {
  margin-bottom: var(--space-16);
}

.ethos-title {
  margin-top: var(--space-4);
  margin-bottom: 0;
}

.ethos-title em {
  font-family: var(--font-display);
  font-style: italic;
}

/* 2-column, 3-row grid */
.ethos-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12) var(--space-16);
}

/* Card — typography-driven, no background fills */
.ethos-card {
  padding: var(--space-8) 0;
  border-top: 1px solid var(--rule-color);
  cursor: default;
  transition: border-color var(--duration-normal) ease;
}

.ethos-card:hover {
  border-color: var(--color-gold);
}

.ethos-number {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-mega-wide);
  color: var(--color-gold);
  display: block;
  margin-bottom: var(--space-3);
  transition: transform var(--duration-normal) ease;
}

.ethos-card:hover .ethos-number {
  transform: translateX(4px);
}

.ethos-card-title {
  font-size: var(--text-h3);
  font-weight: 600;
  margin-bottom: var(--space-3);
  transition: color var(--duration-normal) ease;
}

.ethos-card:hover .ethos-card-title {
  color: var(--color-gold-accessible);
}

.ethos-card-body {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 42ch;
}

@media (max-width: 768px) {
  .ethos-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}

/* =============================================
   CTA — Centered with dual buttons
   ============================================= */
.cta {
  padding: var(--space-32) var(--content-padding);
}

.cta-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-title {
  font-size: var(--text-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-12);
  letter-spacing: var(--tracking-hero);
}

.cta-buttons {
  display: flex;
  gap: var(--space-6);
  flex-wrap: wrap;
  justify-content: center;
}

.cta-button {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  padding: var(--space-4) var(--space-12);
  background-image: none;
  background-color: transparent;
  transition:
    border-color var(--duration-normal) ease,
    color var(--duration-normal) ease,
    background-color var(--duration-normal) ease;
}

.cta-button--primary {
  color: var(--color-dark-text);
  border: 1px solid rgba(250, 250, 249, 0.2);
  border-left: 2px solid var(--color-gold);
}

.cta-button--primary:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
  background-color: rgba(184, 150, 78, 0.06);
}

.cta-button--secondary {
  color: var(--color-dark-muted);
  border: 1px solid rgba(250, 250, 249, 0.1);
}

.cta-button--secondary:hover {
  border-color: rgba(250, 250, 249, 0.3);
  color: var(--color-dark-text);
}

.cta-button:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

@media (max-width: 768px) {
  .cta {
    padding: var(--space-16) var(--content-padding);
  }

  .cta-buttons {
    flex-direction: column;
    width: 100%;
  }

  .cta-button {
    width: 100%;
    text-align: center;
    padding: var(--space-4) var(--space-6);
  }
}
</style>
