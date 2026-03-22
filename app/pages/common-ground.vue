<template>
  <div class="common-ground-page">

    <!-- ============================================
         HERO — District 07 entry
    ============================================= -->
    <section ref="heroSection" class="cg-hero section section-dark">
      <div class="section-wide">
        <p class="overline reveal">District 07 &mdash; Convergence</p>
        <h1 class="hero-title word-reveal">
          <em>Where disciplines collide on purpose.</em>
        </h1>
        <p class="hero-sub reveal">
          Common Ground is the gathering point. Exhibitions, panels, workshops,
          live sessions &mdash; the physical and virtual spaces where practitioners
          from different districts meet, clash, and build something neither
          could make alone.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         FEATURED — Current exhibition/event
    ============================================= -->
    <section ref="featuredSection" class="featured section">
      <div class="section-wide">
        <div class="featured-card vellum-card reveal">
          <div class="featured-meta">
            <span class="featured-number">7.04</span>
            <span class="featured-gallery">Current Exhibition</span>
          </div>
          <h2 class="featured-title word-reveal"><em>Neural Cartography</em></h2>
          <p class="featured-desc reveal">
            A cross-disciplinary collaboration mapping the intersections between
            data architecture and textile design. Exploring how information structures
            mirror the weave of physical materials.
          </p>
          <p class="featured-quote reveal">
            <em>&ldquo;The space between disciplines is not a void, but a bridge.&rdquo;</em>
          </p>
          <NuxtLink to="#" class="featured-cta reveal line-draw">View Documentation &rarr;</NuxtLink>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         FUSION LEDGER — Active collaborative projects
    ============================================= -->
    <section ref="ledgerSection" class="ledger section section-dark">
      <div class="section-wide">
        <div class="ledger-header">
          <div class="ledger-header-left">
            <p class="overline reveal">Active Projects</p>
            <h2 class="ledger-title word-reveal"><em>The Fusion Ledger</em></h2>
          </div>
          <span class="ledger-count reveal">142 active collaborations</span>
        </div>

        <div class="ledger-list">
          <article
            v-for="project in projects"
            :key="project.title"
            class="ledger-entry reveal"
          >
            <div class="ledger-entry-body">
              <h3 class="ledger-entry-title"><em>{{ project.title }}</em></h3>
              <span class="ledger-entry-discipline">{{ project.discipline }}</span>
            </div>
            <span :class="['ledger-entry-phase', phaseClass(project.phase)]">{{ project.phase }}</span>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         MATCHMAKING — 3-step process
    ============================================= -->
    <section ref="matchSection" class="matchmaking section">
      <div class="section-default">
        <div class="match-header">
          <p class="overline reveal">The Process</p>
          <h2 class="match-title word-reveal"><em>How collaborations begin.</em></h2>
          <p class="match-desc reveal">
            Every partnership starts with a single contribution. One dataset.
            One creative prompt. One honest offering deposited into the district
            vault.
          </p>
        </div>

        <div class="match-track">
          <div class="match-line" aria-hidden="true" />
          <div
            v-for="(step, i) in steps"
            :key="step.title"
            class="match-node reveal"
          >
            <div class="match-dot" aria-hidden="true">
              <span class="match-number">{{ String(i + 1).padStart(2, '0') }}</span>
            </div>
            <h3 class="match-node-title">{{ step.title }}</h3>
            <p class="match-node-desc">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         UPCOMING — Events calendar preview
    ============================================= -->
    <section ref="upcomingSection" class="upcoming section section-dark">
      <div class="section-wide">
        <div class="upcoming-header">
          <p class="overline reveal">Calendar</p>
          <h2 class="upcoming-title word-reveal"><em>What&rsquo;s gathering.</em></h2>
        </div>

        <div class="upcoming-grid">
          <article
            v-for="event in events"
            :key="event.title"
            class="upcoming-card vellum-card reveal"
          >
            <span class="upcoming-card-type">{{ event.type }}</span>
            <h3 class="upcoming-card-title"><em>{{ event.title }}</em></h3>
            <p class="upcoming-card-date">{{ event.date }}</p>
            <p class="upcoming-card-desc">{{ event.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — Initiate
    ============================================= -->
    <section ref="ctaSection" class="cg-cta section-dark">
      <div class="section-narrow cta-inner">
        <div class="cta-rule" aria-hidden="true" />
        <p class="overline reveal">Participate</p>
        <h2 class="cta-title word-reveal">
          Bring something. Take something different back.
        </h2>
        <NuxtLink to="/apply" class="cta-button reveal">Join Common Ground &rarr;</NuxtLink>
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
  title: 'Common Ground — Meraki Road',
  meta: [
    { name: 'description', content: 'Common Ground: the convergence point at Meraki Road. Exhibitions, panels, workshops, and live sessions where disciplines collide.' },
  ],
})

useSeoMeta({
  ogTitle: 'Common Ground — Meraki Road',
  ogDescription: 'The convergence point at Meraki Road. Exhibitions, panels, workshops, and live sessions where disciplines collide.',
  twitterTitle: 'Common Ground — Meraki Road',
  twitterDescription: 'The convergence point at Meraki Road. Exhibitions, panels, workshops, and live sessions where disciplines collide.',
})

/* -- Hero --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Featured ----------------------------------- */
const featuredSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(featuredSection, '.reveal')
useWordReveal(featuredSection, '.word-reveal')

/* -- Ledger ------------------------------------- */
const ledgerSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ledgerSection, '.reveal', { stagger: 0.06 })
useWordReveal(ledgerSection, '.word-reveal')

/* -- Matchmaking -------------------------------- */
const matchSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(matchSection, '.reveal', { stagger: 0.12 })
useWordReveal(matchSection, '.word-reveal')

/* -- Upcoming ----------------------------------- */
const upcomingSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(upcomingSection, '.reveal', { stagger: 0.08 })
useWordReveal(upcomingSection, '.word-reveal')

/* -- CTA ---------------------------------------- */
const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal')

/* -- Custom GSAP -------------------------------- */
let ctx: gsap.Context | null = null

onMounted(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  if (heroSection.value) {
    await waitForAncestorAnimations(heroSection.value)
  }

  ctx = gsap.context(() => {
    /* Match connecting line draw-in */
    const matchLine = matchSection.value?.querySelector('.match-line')
    if (matchLine) {
      gsap.from(matchLine, {
        scaleX: 0,
        duration: 1.2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: matchLine,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }

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

/* -- Data --------------------------------------- */
function phaseClass(phase: string): string {
  if (phase.includes('Final')) return 'phase-final'
  if (phase.includes('Synthesis') || phase.includes('Incubation')) return 'phase-active'
  return 'phase-default'
}

const projects = [
  { title: 'The Kinetic Verse', discipline: 'Physics & Poetry', phase: 'Synthesis' },
  { title: 'Bio-Luminescent Scripts', discipline: 'Genetics & Typography', phase: 'Incubation' },
  { title: 'Echo Chamber Acoustics', discipline: 'AI & Sculpture', phase: 'Final Review' },
  { title: 'Tidal Notation', discipline: 'Oceanography & Music', phase: 'Synthesis' },
  { title: 'Chromatic Archaeology', discipline: 'Soil Science & Color Theory', phase: 'Incubation' },
]

const steps = [
  {
    title: 'The Offering',
    description: 'Deposit a dataset or a creative prompt into the district vault. This is the seed. It doesn\'t need to be polished — it needs to be honest.',
  },
  {
    title: 'The Affinity',
    description: 'Curators identify structural similarities between unrelated mediums. Patterns you didn\'t know existed start to surface.',
  },
  {
    title: 'The Bloom',
    description: 'A partnership forms. Two practitioners from different disciplines forge work that neither could have conceived alone.',
  },
]

const events = [
  {
    type: 'Exhibition',
    title: 'Latent Topographies',
    date: 'April 2026',
    description: 'A group show exploring the landscapes hidden inside machine learning models. Six practitioners, twelve weeks.',
  },
  {
    type: 'Panel',
    title: 'Craft in the Age of Automation',
    date: 'May 2026',
    description: 'A candid conversation about what it means to hold standards when the tools keep shifting under you.',
  },
  {
    type: 'Workshop',
    title: 'Cross-Disciplinary Prototyping',
    date: 'June 2026',
    description: 'Three days of rapid collaboration. Arrive with a question from your discipline, leave with an answer from someone else\'s.',
  },
]
</script>

<style scoped>
/* =============================================
   HERO
   ============================================= */
.cg-hero {
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
  max-width: 18ch;
}

.hero-sub {
  font-size: var(--text-h4);
  font-weight: 400;
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 52ch;
}

@media (max-width: 768px) {
  .cg-hero { padding-top: calc(var(--space-16) + 3rem); padding-bottom: var(--space-12); }
}

/* =============================================
   FEATURED — Current exhibition
   ============================================= */
.featured {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-surface);
  border-top: 1px solid var(--rule-color);
  border-bottom: 1px solid var(--rule-color);
}

.featured-card {
  padding: var(--space-16);
  max-width: 800px;
  margin: 0 auto;
}

.featured-meta {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.featured-number {
  font-family: var(--font-mono);
  font-size: var(--text-h2);
  font-weight: 300;
  color: var(--color-gold);
  line-height: 1;
}

.featured-gallery {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.featured-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-bottom: var(--space-6);
  line-height: var(--leading-tight);
}

.featured-title em { font-style: italic; }

.featured-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-8);
  max-width: 56ch;
}

.featured-quote {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  color: var(--color-text-secondary);
  line-height: var(--leading-snug);
  margin-bottom: var(--space-8);
  opacity: 0.7;
}

.featured-cta {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
}

@media (max-width: 768px) {
  .featured { padding: var(--space-16) var(--content-padding); }
  .featured-card { padding: var(--space-8); }
}

/* =============================================
   FUSION LEDGER — Active collaborative projects
   ============================================= */
.ledger {
  padding: var(--space-24) var(--content-padding);
  background-color: var(--color-dark-bg);
  color: var(--color-dark-text);
}

.ledger-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: var(--space-12);
}

.ledger-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  line-height: var(--leading-tight);
}

.ledger-title em { font-style: italic; }

.ledger-count {
  font-size: var(--text-small);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
}

.ledger-list {
  border-top: 1px solid rgba(250, 250, 249, 0.08);
}

.ledger-entry {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-6) 0;
  border-bottom: 1px solid rgba(250, 250, 249, 0.08);
  transition: background-color 0.3s ease;
}

.ledger-entry:hover {
  background: rgba(255, 255, 255, 0.02);
}

.ledger-entry-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.ledger-entry-title {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  color: var(--color-dark-text);
}

.ledger-entry-discipline {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
}

.ledger-entry-phase {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  padding: 2px 10px;
  border: 1px solid;
}

.phase-default { border-color: rgba(161, 161, 170, 0.3); color: var(--color-dark-muted); }
.phase-active { border-color: rgba(184, 150, 78, 0.3); color: var(--color-gold); }
.phase-final { border-color: var(--color-gold); color: var(--color-gold); background: rgba(184, 150, 78, 0.08); }

@media (max-width: 768px) {
  .ledger { padding: var(--space-16) var(--content-padding); }
  .ledger-header { flex-direction: column; align-items: flex-start; gap: var(--space-4); }
  .ledger-entry { flex-direction: column; align-items: flex-start; gap: var(--space-3); }
}

/* =============================================
   MATCHMAKING — 3-step process
   ============================================= */
.matchmaking {
  padding: var(--space-32) var(--content-padding);
  background: var(--color-background);
}

.match-header {
  text-align: center;
  margin-bottom: var(--space-24);
}

.match-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);
}

.match-title em { font-style: italic; }

.match-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin: 0 auto;
}

.match-track {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
  position: relative;
  padding-top: var(--space-12);
}

.match-line {
  position: absolute;
  top: calc(var(--space-12) + 18px);
  left: calc(100% / 6);
  right: calc(100% / 6);
  height: 1px;
  background: var(--color-gold);
  opacity: 0.3;
  transform-origin: left;
}

.match-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.match-dot {
  width: 36px;
  height: 36px;
  border: 1px solid var(--color-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-6);
  position: relative;
  background: var(--color-background);
}

.match-number {
  font-family: var(--font-mono);
  font-size: var(--text-overline);
  font-weight: 500;
  color: var(--color-gold);
  letter-spacing: var(--tracking-wide);
}

.match-node-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-ink);
  margin-bottom: var(--space-3);
}

.match-node-desc {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 28ch;
}

@media (max-width: 768px) {
  .matchmaking { padding: var(--space-16) var(--content-padding); }
  .match-track { grid-template-columns: 1fr; gap: var(--space-12); padding-top: 0; padding-left: var(--space-16); }
  .match-line { top: 0; bottom: 0; left: calc(var(--space-16) / 2 + 18px - var(--content-padding)); right: auto; width: 1px; height: auto; transform-origin: top; }
  .match-node { align-items: flex-start; text-align: left; }
  .match-node-desc { max-width: none; }
}

/* =============================================
   UPCOMING — Events calendar
   ============================================= */
.upcoming {
  padding: var(--space-24) var(--content-padding);
  background-color: var(--color-dark-bg);
  color: var(--color-dark-text);
}

.upcoming-header {
  margin-bottom: var(--space-12);
}

.upcoming-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  line-height: var(--leading-tight);
}

.upcoming-title em { font-style: italic; }

.upcoming-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.upcoming-card {
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
}

.upcoming-card-type {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}

.upcoming-card-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-2);
}

.upcoming-card-date {
  font-family: var(--font-mono);
  font-size: var(--text-overline);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
  margin-bottom: var(--space-4);
}

.upcoming-card-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}

@media (max-width: 768px) {
  .upcoming { padding: var(--space-16) var(--content-padding); }
  .upcoming-grid { grid-template-columns: 1fr; }
}

/* =============================================
   CTA
   ============================================= */
.cg-cta {
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
  font-family: var(--font-display);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-8);
  letter-spacing: var(--tracking-hero);
  max-width: 20ch;
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
  .cg-cta { padding: var(--space-16) var(--content-padding); }
  .cta-button { width: 100%; text-align: center; padding: var(--space-4) var(--space-6); min-height: 44px; display: inline-flex; align-items: center; justify-content: center; }
}
</style>
