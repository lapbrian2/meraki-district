<template>
  <div class="basecamp-page">

    <!-- ============================================
         HERO — Full-width with overline
    ============================================= -->
    <section ref="heroSection" class="basecamp-hero section section-dark">
      <div class="section-wide">
        <p class="overline reveal">District 06 &mdash; First Steps</p>
        <h1 class="hero-title word-reveal">
          <em>You made it here. Now let&rsquo;s begin.</em>
        </h1>
        <p class="hero-sub reveal">
          Basecamp is where new practitioners arrive, orient themselves, and
          take the first steps toward becoming part of something deliberate.
          No rush. No performance. Just honest foundations.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PROTOCOL — The arrival process
    ============================================= -->
    <section ref="protocolSection" class="protocol section">
      <div class="section-default">
        <div class="protocol-header">
          <p class="overline reveal">The Arrival</p>
          <h2 class="protocol-title word-reveal"><em>Orientation is not instruction.</em></h2>
          <p class="protocol-desc reveal">
            You won&rsquo;t sit through lectures. The protocol is designed to
            help you understand how this place works, what it values, and whether
            that resonates with how you already practice.
          </p>
        </div>
        <NuxtLink to="/apply" class="protocol-cta reveal">Begin Your Orientation &rarr;</NuxtLink>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         TRAINING GRID — 4 foundation cards
    ============================================= -->
    <section ref="trainingSection" class="training section section-dark">
      <div class="section-wide">
        <div class="training-header">
          <p class="overline reveal">Foundations</p>
          <h2 class="training-title word-reveal"><em>Four pillars of entry.</em></h2>
          <p class="training-desc reveal">
            Each practitioner moves through the same four areas before they
            choose a direction. These aren&rsquo;t tests &mdash; they&rsquo;re calibration.
          </p>
        </div>

        <div class="training-grid">
          <article
            v-for="pillar in pillars"
            :key="pillar.title"
            class="training-card vellum-card reveal"
          >
            <span class="training-card-number">{{ pillar.number }}</span>
            <h3 class="training-card-title"><em>{{ pillar.title }}</em></h3>
            <p class="training-card-desc">{{ pillar.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         GUIDES — Practitioner mentors
    ============================================= -->
    <section ref="guidesSection" class="guides section">
      <div class="section-wide">
        <div class="guides-header">
          <p class="overline reveal">Your Guides</p>
          <h2 class="guides-title word-reveal"><em>Practitioners who&rsquo;ve walked the path.</em></h2>
          <p class="guides-desc reveal">
            Senior members who volunteer their time to help new arrivals find
            their footing. Not gatekeepers &mdash; translators.
          </p>
        </div>

        <div class="guides-grid">
          <article
            v-for="guide in guides"
            :key="guide.name"
            class="guide-card reveal"
          >
            <div class="guide-avatar">
              <span class="material-symbols-outlined guide-icon">person</span>
            </div>
            <h3 class="guide-name">{{ guide.name }}</h3>
            <p class="guide-role">{{ guide.role }}</p>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         INITIATION — The commitment moment
    ============================================= -->
    <section ref="initiationSection" class="initiation section section-dark">
      <div class="section-narrow initiation-inner">
        <div class="initiation-rule" aria-hidden="true" />
        <p class="overline reveal">The Threshold</p>
        <blockquote class="initiation-quote word-reveal">
          <em>&ldquo;You don&rsquo;t join a community. You become part of its
          memory. The work you carry forward is the proof you were here.&rdquo;</em>
        </blockquote>
        <NuxtLink to="/apply" class="initiation-cta reveal">Step Through &rarr;</NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapScrollReveal, waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

/* -- SEO ---------------------------------------- */
useHead({
  title: 'Basecamp — Meraki Road',
  meta: [
    { name: 'description', content: 'Basecamp: the onboarding sanctuary at Meraki Road. Where new practitioners arrive, orient, and begin their creative journey.' },
  ],
})

useSeoMeta({
  ogTitle: 'Basecamp — Meraki Road',
  ogDescription: 'The onboarding sanctuary at Meraki Road. Where new practitioners arrive, orient, and begin their creative journey.',
  twitterTitle: 'Basecamp — Meraki Road',
  twitterDescription: 'The onboarding sanctuary at Meraki Road. Where new practitioners arrive, orient, and begin their creative journey.',
})

/* -- Hero --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Protocol ----------------------------------- */
const protocolSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(protocolSection, '.reveal')
useWordReveal(protocolSection, '.word-reveal')

/* -- Training ----------------------------------- */
const trainingSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(trainingSection, '.reveal', { stagger: 0.08 })
useWordReveal(trainingSection, '.word-reveal')

/* -- Guides ------------------------------------- */
const guidesSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(guidesSection, '.reveal', { stagger: 0.1 })
useWordReveal(guidesSection, '.word-reveal')

/* -- Initiation --------------------------------- */
const initiationSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(initiationSection, '.reveal')
useWordReveal(initiationSection, '.word-reveal')

/* -- Custom GSAP -------------------------------- */
let ctx: gsap.Context | null = null

onMounted(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  gsap.registerPlugin(ScrollTrigger)

  if (heroSection.value) {
    await waitForAncestorAnimations(heroSection.value)
  }

  ctx = gsap.context(() => {
    const rule = initiationSection.value?.querySelector('.initiation-rule')
    if (rule) {
      gsap.from(rule, {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: rule,
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

/* -- Data --------------------------------------- */
const pillars = [
  {
    number: '01',
    title: 'Language & Culture',
    description: 'Learn the shared vocabulary. Not jargon for its own sake — the precise terms that let practitioners across disciplines communicate without losing nuance.',
  },
  {
    number: '02',
    title: 'Spatial Awareness',
    description: 'Understand the architecture of the districts. How spaces connect, where resources live, and the etiquette of moving between communities.',
  },
  {
    number: '03',
    title: 'Practice & Presence',
    description: 'The rhythm of contribution. How work flows through the collective — from drafts to critique to publication. Showing up consistently matters more than showing off.',
  },
  {
    number: '04',
    title: 'Archival Responsibility',
    description: 'Everything created here is preserved and attributed. Understanding the archive is understanding the weight of what you add to it.',
  },
]

const guides = [
  { name: 'Nadia Osei', role: 'Senior Practitioner — Visual Systems' },
  { name: 'Luca Moretti', role: 'Community Architect — District Relations' },
  { name: 'Yuki Tanaka', role: 'Ethics & Standards — Practice Review' },
]
</script>

<style scoped>
/* =============================================
   HERO
   ============================================= */
.basecamp-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  background-color: var(--color-background);
}

.hero-title {
  font-size: var(--text-display);
  font-family: var(--font-display);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  color: var(--color-ink);
  max-width: 16ch;
}

.hero-sub {
  font-size: var(--text-h4);
  font-weight: 400;
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 48ch;
}

@media (max-width: 768px) {
  .basecamp-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-12);
  }
}

/* =============================================
   PROTOCOL — The arrival process
   ============================================= */
.protocol {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-surface);
  border-top: 1px solid var(--rule-color);
  border-bottom: 1px solid var(--rule-color);
}

.protocol-header {
  text-align: center;
  margin-bottom: var(--space-12);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.protocol-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);
}

.protocol-title em { font-style: italic; }

.protocol-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
}

.protocol-cta {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-bg);
  padding: var(--space-4) var(--space-8);
  background-image: none;
  background-color: var(--color-gold);
  margin: 0 auto;
  transition: opacity var(--duration-normal) ease, transform var(--duration-normal) ease;
}

.protocol-cta:hover { opacity: 0.9; transform: translateY(-1px); }
.protocol-cta:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 4px; }

@media (max-width: 768px) {
  .protocol { padding: var(--space-16) var(--content-padding); }
  .protocol-cta { width: 100%; text-align: center; min-height: 44px; display: inline-flex; align-items: center; justify-content: center; }
}

/* =============================================
   TRAINING GRID — 4 foundation cards
   ============================================= */
.training {
  padding: var(--space-32) var(--content-padding);
  background-color: var(--color-dark-bg);
  color: var(--color-dark-text);
}

.training-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.training-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);
}

.training-title em { font-style: italic; }

.training-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin: 0 auto;
}

.training-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid rgba(250, 250, 249, 0.08);
  max-width: 1000px;
  margin: 0 auto;
}

.training-card {
  padding: var(--space-12);
  border-right: 1px solid rgba(250, 250, 249, 0.08);
  border-bottom: 1px solid rgba(250, 250, 249, 0.08);
  transition: background-color 0.5s var(--ease-out);
  display: flex;
  flex-direction: column;
  cursor: default;
}

.training-card:nth-child(2n) { border-right: none; }
.training-card:nth-child(n+3) { border-bottom: none; }

.training-card:hover { background: rgba(255, 255, 255, 0.02); }

.training-card-number {
  font-family: var(--font-mono);
  font-size: var(--text-overline);
  letter-spacing: var(--tracking-wide);
  color: var(--color-gold);
  margin-bottom: var(--space-6);
}

.training-card-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
  transition: color 0.3s ease;
}

.training-card:hover .training-card-title { color: var(--color-gold); }

.training-card-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}

@media (max-width: 768px) {
  .training { padding: var(--space-16) var(--content-padding); }
  .training-grid { grid-template-columns: 1fr; }
  .training-card { border-right: none; border-bottom: 1px solid rgba(250, 250, 249, 0.08); }
  .training-card:last-child { border-bottom: none; }
}

/* =============================================
   GUIDES — Practitioner mentors
   ============================================= */
.guides {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-background);
}

.guides-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.guides-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);
}

.guides-title em { font-style: italic; }

.guides-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 48ch;
  margin: 0 auto;
}

.guides-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
  max-width: 900px;
  margin: 0 auto;
}

.guide-card {
  text-align: center;
  padding: var(--space-8);
}

.guide-avatar {
  width: 64px;
  height: 64px;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-6);
}

.guide-icon {
  font-size: 1.5rem;
  color: var(--color-text-muted);
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

.guide-name {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 400;
  font-style: italic;
  color: var(--color-ink);
  margin-bottom: var(--space-2);
}

.guide-role {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
}

@media (max-width: 768px) {
  .guides { padding: var(--space-16) var(--content-padding); }
  .guides-grid { grid-template-columns: 1fr; max-width: 320px; }
}

/* =============================================
   INITIATION — The commitment moment
   ============================================= */
.initiation {
  padding: var(--space-32) var(--content-padding);
}

.initiation-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.initiation-rule {
  width: 48px;
  height: 1px;
  background: var(--color-gold);
  margin-bottom: var(--space-12);
  transform-origin: center;
}

.initiation-quote {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  color: var(--color-dark-text);
  line-height: var(--leading-snug);
  margin-bottom: var(--space-12);
  max-width: 28ch;
}

.initiation-cta {
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

.initiation-cta:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
  background-color: rgba(184, 150, 78, 0.06);
}

.initiation-cta:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

@media (max-width: 768px) {
  .initiation { padding: var(--space-16) var(--content-padding); }
  .initiation-cta { width: 100%; text-align: center; padding: var(--space-4) var(--space-6); min-height: 44px; display: inline-flex; align-items: center; justify-content: center; }
}
</style>
