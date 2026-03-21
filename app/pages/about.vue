<template>
  <div class="about-page">

    <!-- ============================================
         HERO — Asymmetric 7/5 grid
         Left: overline + display heading + subtitle
         Right: pull quote
    ============================================= -->
    <section ref="heroSection" class="about-hero section section-dark">
      <div class="section-wide">
        <div class="hero-grid">
          <div class="hero-left">
            <p class="overline reveal">About</p>
            <h1 class="about-hero-title word-reveal">
              The people behind the road.
            </h1>
            <p class="about-hero-sub reveal">
              Meraki Road was founded by two people who arrived at the same
              conclusion from opposite directions: the creators shaping this era
              deserve better infrastructure than what exists.
            </p>
          </div>
          <div class="hero-right reveal">
            <blockquote class="hero-quote">
              <p class="hero-quote-text">
                We kept looking for the place that took this work seriously.
                It didn&rsquo;t exist, so we built it.
              </p>
              <cite class="hero-quote-cite">&mdash; Brian &amp; Rachel</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         FOUNDERS — Staggered 3-col (2 founders, visual offset)
         Grayscale portraits, hover to color
    ============================================= -->
    <FoundersGrid />

    <!-- ============================================
         ORIGIN — Bordered section with hover state
         Overline > italic heading > rule > body
    ============================================= -->
    <section ref="originSection" class="origin section">
      <div class="origin-bg-wrap">
        <NuxtImg
          src="/images/origin-bg.webp"
          alt=""
          class="origin-bg-image"
          loading="lazy"
          decoding="async"
          width="1920"
          height="1080"
        />
        <div class="origin-bg-overlay" />
      </div>
      <div class="section-default origin-content">
        <div class="origin-grid">
          <div class="origin-header">
            <p class="overline reveal">The Origin</p>
            <h2 class="origin-title word-reveal">
              <em>We couldn&rsquo;t find what we were looking for.</em>
            </h2>
          </div>
          <div class="origin-body-col">
            <div class="origin-rule" aria-hidden="true" />
            <p class="origin-body reveal">
              We looked for something with weight. Something built like the institutions that shaped every creative discipline before this one&mdash;designed for creators working at the frontier of what&rsquo;s possible.
            </p>
            <p class="origin-body reveal">
              The gap is infrastructure. Places that take this work seriously. Standards that mean something. A publishing house, a credential, a research practice, a gathering place&mdash;all built around the conviction that AI-native creative work is a legitimate discipline that deserves legitimate support.
            </p>
            <p class="origin-body origin-body--coda reveal">
              We built it.
            </p>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PRINCIPLES — Staggered 3-column cards
         Ikigai Lab pattern: 0 / mt-16 / mt-32 offset
         Bordered cards with hover states
    ============================================= -->
    <section ref="principlesSection" class="principles section">
      <div class="section-wide">
        <div class="principles-header">
          <p class="overline reveal">How We Work</p>
          <h2 class="principles-title word-reveal"><em>Guiding principles</em></h2>
          <p class="principles-intro reveal">
            Three convictions that shape every decision at Meraki Road &mdash; from
            what we publish to who we invite.
          </p>
        </div>

        <div class="principles-stagger-grid">
          <article
            v-for="(principle, index) in principles"
            :key="principle.title"
            class="principle-card"
            :class="`principle-card--${index}`"
          >
            <span class="principle-number">{{ principle.number }}</span>
            <h3 class="principle-card-title">{{ principle.title }}</h3>
            <div class="principle-rule" aria-hidden="true" />
            <p class="principle-body">{{ principle.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ============================================
         CTA — Centered with bordered treatment
    ============================================= -->
    <section ref="ctaSection" class="cta section-dark">
      <div class="section-narrow cta-inner">
        <div class="cta-rule" aria-hidden="true" />
        <p class="overline reveal">Join Meraki Road</p>
        <h2 class="cta-title word-reveal">
          The road is open.
        </h2>
        <p class="cta-body reveal">
          We are accepting applications from creators, researchers, and builders
          with a demonstrated body of work. No follower counts. No application fees.
          Just evidence of practice.
        </p>
        <NuxtLink to="/apply" class="cta-button reveal">Express Interest &rarr;</NuxtLink>
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
import { useParallax } from '~/composables/useParallax'

/* ── SEO ─────────────────────────────────── */
useHead({
  title: 'About — Meraki Road',
  meta: [
    { name: 'description', content: 'The people behind Meraki Road. Two paths, one conviction: that AI-native creative work deserves real districts.' },
  ],
})

useSeoMeta({
  ogTitle: 'About — Meraki Road',
  ogDescription: 'The people behind Meraki Road. Two paths, one conviction: that AI-native creative work deserves real districts.',
  twitterTitle: 'About — Meraki Road',
  twitterDescription: 'The people behind Meraki Road. Two paths, one conviction: that AI-native creative work deserves real districts.',
})

/* ── Hero ────────────────────────────────── */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* ── Origin ──────────────────────────────── */
const originSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(originSection, '.reveal')
useParallax(originSection, '.origin-bg-image', { speed: 0.12 })
useWordReveal(originSection, '.word-reveal')

/* ── Principles ──────────────────────────── */
const principlesSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(principlesSection, '.reveal', { stagger: 0.1 })
useTilt(principlesSection, '.principle-card', { maxRotation: 2 })
useWordReveal(principlesSection, '.word-reveal')

/* ── CTA ─────────────────────────────────── */
const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal', { stagger: 0.08 })
useMagnetic(ctaSection, '.cta-button', { strength: 0.25 })

/* ── GSAP context for custom animations ─── */
let ctx: gsap.Context | null = null

onMounted(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  gsap.registerPlugin(ScrollTrigger)

  // Wait for hero to be ready
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

    /* Principle cards stagger entrance */
    const cards = principlesSection.value?.querySelectorAll('.principle-card')
    cards?.forEach((card) => {
      const number = card.querySelector('.principle-number')
      const title = card.querySelector('.principle-card-title')
      const rule = card.querySelector('.principle-rule')
      const body = card.querySelector('.principle-body')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      tl.fromTo(card,
        { '--border-scale': 0 },
        { '--border-scale': 1, duration: 0.8, ease: 'power2.inOut' },
      0)
      .from(number!, {
        opacity: 0, scale: 0.5, duration: 0.5, ease: 'power3.out',
      }, 0.2)
      .from(title!, {
        opacity: 0, y: 20, duration: 0.6, ease: 'power3.out',
      }, 0.3)
      .from(rule!, {
        scaleX: 0, duration: 0.6, ease: 'power2.inOut',
      }, 0.35)
      .from(body!, {
        opacity: 0, y: 15, duration: 0.6, ease: 'power3.out',
      }, 0.4)
    })

    /* CTA rule draw-in */
    const ctaRule = ctaSection.value?.querySelector('.cta-rule')
    if (ctaRule) {
      gsap.from(ctaRule, {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: ctaRule,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }
  })
})

onUnmounted(() => {
  ctx?.revert()
})

/* ── Data ────────────────────────────────── */
const principles = [
  {
    number: '01',
    title: 'Craft over convenience',
    body: 'We treat AI as a medium that demands mastery. The tool is available to everyone. The craft takes dedicated practice.',
  },
  {
    number: '02',
    title: 'Depth over output',
    body: 'We\u2019d rather publish one thing worth reading than ten things worth scrolling past. Volume is easy. Substance is the work.',
  },
  {
    number: '03',
    title: 'Earned, not purchased',
    body: 'Our credentials, our community, our standards\u2014they carry weight because they require demonstrated practice and real contribution.',
  },
]
</script>

<style scoped>
/* =============================================
   HERO — Asymmetric 7/5 grid
   ============================================= */
.about-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  background-color: var(--color-background);
}

.hero-grid {
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: var(--space-16);
  align-items: center;
}

.hero-left {
  /* Overline + display heading + subtitle */
}

.about-hero-title {
  font-size: var(--text-display);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  color: var(--color-ink);
}

.about-hero-sub {
  font-size: var(--text-h4);
  font-weight: 400;
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
}

/* Quote block — large italic serif */
.hero-quote {
  border-left: 2px solid var(--color-gold);
  padding-left: var(--space-8);
  margin: 0;
}

.hero-quote-text {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  color: var(--color-ink);
  max-width: none;
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

  .hero-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .hero-quote {
    padding-left: var(--space-6);
    margin-top: var(--space-4);
  }
}

/* =============================================
   ORIGIN — Bordered asymmetric two-column
   ============================================= */
.origin {
  padding-top: var(--space-24);
  padding-bottom: var(--space-24);
  position: relative;
  overflow: hidden;
  background-color: var(--color-dark-bg);
  color: var(--color-dark-text);
}

.origin h2,
.origin h3 {
  color: var(--color-dark-text);
}

.origin .overline {
  color: var(--color-gold);
}

.origin-bg-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.origin-bg-image {
  width: 100%;
  height: 130%;
  top: -15%;
  position: relative;
  object-fit: cover;
  opacity: 0.5;
  will-change: transform;
  filter: grayscale(1);
}

.origin-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(24, 24, 27, 0.4) 0%,
    rgba(24, 24, 27, 0.1) 40%,
    rgba(24, 24, 27, 0.5) 100%
  );
  box-shadow: inset 0 0 120px rgba(0, 0, 0, 0.5);
}

.origin-content {
  position: relative;
  z-index: 1;
}

.origin-grid {
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: var(--space-16);
  align-items: start;
}

.origin-header {
  position: sticky;
  top: calc(var(--space-16) + 3rem);
}

.origin-title {
  font-size: var(--text-h1);
  font-weight: 300;
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
  margin-top: var(--space-8);
  margin-bottom: 0;
  max-width: none;
}

.origin-title em {
  font-style: italic;
}

.origin-rule {
  width: 48px;
  height: 1px;
  background: var(--color-gold);
  margin-bottom: var(--space-8);
  transform-origin: left;
}

.origin-body {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.origin-body--coda {
  margin-bottom: 0;
  color: var(--color-dark-text);
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  margin-top: var(--space-8);
}

@media (max-width: 768px) {
  .origin {
    padding-top: var(--space-16);
    padding-bottom: var(--space-16);
  }

  .origin-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .origin-header {
    position: static;
  }
}

/* =============================================
   PRINCIPLES — Staggered 3-column (Ikigai Lab)
   ============================================= */
.principles {
  background-color: var(--color-surface);
}

.principles-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.principles-title {
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);
}

.principles-title em {
  font-style: italic;
}

.principles-intro {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 45ch;
  margin: 0 auto;
}

/* Staggered 3-column grid */
.principles-stagger-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

/* Ikigai Lab stagger: col 1 normal, col 2 mt-16, col 3 mt-32 */
.principle-card--0 {
  margin-top: 0;
}

.principle-card--1 {
  margin-top: var(--space-16);
}

.principle-card--2 {
  margin-top: var(--space-32);
}

/* Card — bordered with hover */
.principle-card {
  padding: var(--space-8);
  border: 1px solid var(--rule-color);
  background-color: transparent;
  transition:
    border-color var(--duration-normal) ease,
    background-color var(--duration-normal) ease;
  cursor: default;
}

.principle-card:hover {
  border-color: var(--color-gold);
  background-color: rgba(184, 150, 78, 0.04);
}

.principle-number {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-mega-wide);
  color: var(--color-text-muted);
  display: block;
  margin-bottom: var(--space-4);
  transition: color var(--duration-normal) ease, transform var(--duration-normal) ease;
}

.principle-card:hover .principle-number {
  color: var(--color-gold);
  transform: scale(1.15);
  transform-origin: left center;
}

.principle-card-title {
  font-size: var(--text-h3);
  margin-bottom: var(--space-4);
  transition: color var(--duration-normal) ease;
}

.principle-card:hover .principle-card-title {
  color: var(--color-gold-accessible);
}

.principle-rule {
  width: 32px;
  height: 1px;
  background: var(--color-gold);
  margin-bottom: var(--space-4);
  transform-origin: left;
}

.principle-body {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
}

@media (max-width: 1024px) {
  .principles-stagger-grid {
    grid-template-columns: 1fr 1fr;
  }

  .principle-card--1 {
    margin-top: var(--space-12);
  }

  .principle-card--2 {
    margin-top: 0;
  }
}

@media (max-width: 768px) {
  .principles-stagger-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .principle-card--0,
  .principle-card--1,
  .principle-card--2 {
    margin-top: 0;
  }
}

/* =============================================
   CTA — Centered with rule
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

.cta-rule {
  width: 48px;
  height: 1px;
  background: var(--color-gold);
  margin-bottom: var(--space-12);
  transform-origin: center;
}

.cta-title {
  font-size: var(--text-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-6);
  letter-spacing: var(--tracking-hero);
}

.cta-body {
  color: var(--color-dark-muted);
  margin-bottom: var(--space-12);
  line-height: var(--leading-relaxed);
  max-width: 45ch;
  font-size: var(--text-body);
}

.cta-button {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-text);
  padding: var(--space-4) var(--space-12);
  border: 1px solid rgba(250, 250, 249, 0.2);
  border-left: 2px solid var(--color-gold);
  background-image: none;
  background-color: transparent;
  transition: border-color var(--duration-normal) ease,
              color var(--duration-normal) ease,
              background-color var(--duration-normal) ease;
}

.cta-button:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
  background-color: rgba(184, 150, 78, 0.06);
}

.cta-button:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

@media (max-width: 768px) {
  .cta {
    padding: var(--space-16) var(--content-padding);
  }

  .cta-button {
    width: 100%;
    text-align: center;
    padding: var(--space-4) var(--space-6);
  }
}
</style>
