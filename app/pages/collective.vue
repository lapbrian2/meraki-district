<template>
  <div class="collective-page">

    <!-- ============================================
         HERO — Dark, left-aligned
    ============================================= -->
    <section ref="heroSection" class="collective-hero section section-dark">
      <div class="section-wide">
        <p class="overline reveal">District 10 &mdash; The Collective</p>
        <h1 class="collective-hero-title word-reveal">
          The Fellowship Lounge
        </h1>
        <p class="collective-hero-sub reveal">
          Where seated practitioners shape the direction of the road.
        </p>
        <div class="hero-pillars reveal">
          <span class="pillar-label">Stewardship</span>
          <span class="pillar-dot" aria-hidden="true">&middot;</span>
          <span class="pillar-label">Mastery</span>
          <span class="pillar-dot" aria-hidden="true">&middot;</span>
          <span class="pillar-label">Heritage</span>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         FELLOWS DIRECTORY — 3-column card grid
    ============================================= -->
    <section ref="fellowsSection" class="collective-fellows section">
      <div class="section-wide">
        <div class="fellows-header">
          <h2 class="fellows-title word-reveal"><em>Seated Fellows</em></h2>
          <span class="fellows-count reveal">{{ fellows.length }} active</span>
        </div>
        <div class="fellows-rule" aria-hidden="true" />

        <div class="fellows-grid">
          <article
            v-for="fellow in fellows"
            :key="fellow.name"
            class="fellow-card vellum-card lift-card reveal"
          >
            <div class="fellow-image-wrap">
              <div class="fellow-image-placeholder" :style="{ background: fellow.gradient }" />
            </div>
            <div class="fellow-info">
              <h3 class="fellow-name"><em>{{ fellow.name }}</em></h3>
              <p class="fellow-specialty">{{ fellow.specialty }}</p>
              <span class="seal-base seal-fellow">Fellow</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         ARCHIVE VAULT — Numbered entries
    ============================================= -->
    <section ref="archiveSection" class="collective-archive section section-dark">
      <div class="section-default">
        <div class="archive-header">
          <p class="overline reveal">The Archive</p>
          <h2 class="archive-title word-reveal"><em>The Archive Vault</em></h2>
        </div>

        <div class="archive-list">
          <div
            v-for="entry in archiveEntries"
            :key="entry.number"
            class="archive-entry reveal"
          >
            <span class="archive-number">{{ entry.number }}</span>
            <div class="archive-body">
              <h3 class="archive-entry-title"><em>{{ entry.title }}</em></h3>
              <p class="archive-desc">{{ entry.description }}</p>
              <a href="#" class="archive-link">Access Fragment &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CURRENT MANDATES — Institutional actions
    ============================================= -->
    <section ref="mandatesSection" class="collective-mandates section">
      <div class="section-default">
        <div class="mandates-header">
          <p class="overline reveal">Active Directives</p>
          <h2 class="mandates-title word-reveal"><em>Current Mandates</em></h2>
        </div>
        <div class="mandates-rule" aria-hidden="true" />

        <div class="mandates-grid">
          <article
            v-for="mandate in mandates"
            :key="mandate.number"
            class="mandate-card vellum-card reveal"
          >
            <span class="mandate-number">{{ mandate.number }}</span>
            <h3 class="mandate-name"><em>{{ mandate.title }}</em></h3>
            <p class="mandate-desc">{{ mandate.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         THE DISCOURSE — Dated discussion threads
    ============================================= -->
    <section ref="discourseSection" class="collective-discourse section section-dark">
      <div class="section-default">
        <div class="discourse-header">
          <p class="overline reveal">Open Threads</p>
          <h2 class="discourse-title word-reveal"><em>The Discourse</em></h2>
        </div>

        <div class="discourse-list">
          <article
            v-for="thread in discourseThreads"
            :key="thread.title"
            class="discourse-entry reveal"
          >
            <div class="discourse-meta">
              <time class="discourse-date">{{ thread.date }}</time>
              <span class="discourse-tag">{{ thread.tag }}</span>
            </div>
            <h3 class="discourse-entry-title"><em>{{ thread.title }}</em></h3>
            <p class="discourse-excerpt">{{ thread.excerpt }}</p>
            <a href="#" class="discourse-link">Continue Reading &rarr;</a>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — Centered
    ============================================= -->
    <section ref="ctaSection" class="collective-cta section-dark">
      <div class="section-narrow cta-inner">
        <div class="cta-rule" aria-hidden="true" />
        <p class="overline reveal">Invitation</p>
        <h2 class="cta-title word-reveal">
          The council for those shaping what comes next.
        </h2>
        <NuxtLink to="/apply" class="cta-button reveal">View Fellowship Requirements &rarr;</NuxtLink>
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
  title: 'The Collective — Meraki Road',
  meta: [
    { name: 'description', content: 'The Fellowship Lounge: where seated practitioners shape the direction of Meraki Road. Archives, mandates, and institutional discourse.' },
  ],
})

useSeoMeta({
  ogTitle: 'The Collective — Meraki Road',
  ogDescription: 'The Fellowship Lounge: where seated practitioners shape the direction of Meraki Road.',
  twitterTitle: 'The Collective — Meraki Road',
  twitterDescription: 'The Fellowship Lounge: where seated practitioners shape the direction of Meraki Road.',
})

/* -- Hero --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Fellows ------------------------------------ */
const fellowsSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(fellowsSection, '.reveal', { stagger: 0.08 })
useWordReveal(fellowsSection, '.word-reveal')

/* -- Archive ------------------------------------ */
const archiveSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(archiveSection, '.reveal', { stagger: 0.1 })
useWordReveal(archiveSection, '.word-reveal')

/* -- Mandates ----------------------------------- */
const mandatesSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(mandatesSection, '.reveal', { stagger: 0.1 })
useWordReveal(mandatesSection, '.word-reveal')

/* -- Discourse ---------------------------------- */
const discourseSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(discourseSection, '.reveal', { stagger: 0.1 })
useWordReveal(discourseSection, '.word-reveal')

/* -- CTA ---------------------------------------- */
const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal', { stagger: 0.08 })

/* -- Custom GSAP animations -------------------- */
let ctx: gsap.Context | null = null

onMounted(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  if (heroSection.value) {
    await waitForAncestorAnimations(heroSection.value)
  }

  ctx = gsap.context(() => {
    /* Fellows rule draw-in */
    const fellowsRule = fellowsSection.value?.querySelector('.fellows-rule')
    if (fellowsRule) {
      gsap.from(fellowsRule, {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: fellowsRule,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }

    /* Mandates rule draw-in */
    const mandatesRule = mandatesSection.value?.querySelector('.mandates-rule')
    if (mandatesRule) {
      gsap.from(mandatesRule, {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: mandatesRule,
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
const fellows = [
  {
    name: 'Renata Vasquez',
    specialty: 'Generative Systems & Emergent Form',
    gradient: 'linear-gradient(135deg, #27272A 0%, #3F3F46 50%, #18181B 100%)',
  },
  {
    name: 'Idris Kone',
    specialty: 'Spatial Narrative & Environmental Design',
    gradient: 'linear-gradient(135deg, #18181B 0%, #27272A 50%, #09090B 100%)',
  },
  {
    name: 'Margaux Delacroix',
    specialty: 'Typographic Sculpture & Print Heritage',
    gradient: 'linear-gradient(135deg, #3F3F46 0%, #27272A 50%, #18181B 100%)',
  },
  {
    name: 'Soren Lindqvist',
    specialty: 'Algorithmic Composition & Sound Design',
    gradient: 'linear-gradient(135deg, #09090B 0%, #18181B 50%, #27272A 100%)',
  },
  {
    name: 'Amara Osei',
    specialty: 'Material Culture & Archival Practice',
    gradient: 'linear-gradient(135deg, #27272A 0%, #09090B 50%, #3F3F46 100%)',
  },
  {
    name: 'Takeshi Murakami',
    specialty: 'Interactive Installation & Kinetic Systems',
    gradient: 'linear-gradient(135deg, #18181B 0%, #3F3F46 50%, #27272A 100%)',
  },
]

const archiveEntries = [
  {
    number: '01',
    title: 'On the Nature of Institutional Memory',
    description: 'A founding document examining how creative institutions preserve and transmit knowledge across generations of practitioners.',
  },
  {
    number: '02',
    title: 'The Mandate System: Origins and Intent',
    description: 'How collective directives emerge from discourse and become actionable commitments within the fellowship.',
  },
  {
    number: '03',
    title: 'Craft as Governance',
    description: 'The argument for demonstrated mastery as the primary qualification for institutional decision-making.',
  },
]

const mandates = [
  {
    number: '10.4',
    title: 'Standards of Admission',
    description: 'Reviewing and codifying the criteria by which new fellows are nominated, evaluated, and seated. The current framework relies on peer endorsement and portfolio review—this mandate formalizes the weighting of each.',
  },
  {
    number: '10.5',
    title: 'Archive Accessibility Protocol',
    description: 'Establishing graduated access to the institutional archive. Associates gain read access to public fragments; verified practitioners unlock commentary threads; fellows hold editorial privilege over the living record.',
  },
]

const discourseThreads = [
  {
    date: '2026.03.14',
    tag: 'Governance',
    title: 'Should mandate proposals require unanimous consent?',
    excerpt: 'A thread on the tension between speed of action and depth of consensus. Three fellows weigh in on whether unanimity protects or paralyzes.',
  },
  {
    date: '2026.03.09',
    tag: 'Craft',
    title: 'The portfolio as living document',
    excerpt: 'Practitioners discuss whether the static portfolio is an artifact of a slower era—and what replaces it when work is continuous and iterative.',
  },
  {
    date: '2026.03.02',
    tag: 'Heritage',
    title: 'What we owe the archive',
    excerpt: 'On the responsibility of fellows to contribute to the institutional record, and the difference between documentation and knowledge.',
  },
]
</script>

<style scoped>
/* =============================================
   HERO
   ============================================= */
.collective-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  background-color: var(--color-background);
}

.collective-hero-title {
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

.collective-hero-sub {
  font-size: var(--text-h4);
  font-weight: 400;
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 42ch;
  margin-bottom: var(--space-12);
}

.hero-pillars {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.pillar-label {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-ultra-wide);
  text-transform: uppercase;
  color: var(--color-gold);
}

.pillar-dot {
  color: var(--color-gold);
  opacity: 0.4;
  font-size: var(--text-body);
}

@media (max-width: 768px) {
  .collective-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-12);
  }

  .collective-hero-title {
    font-size: clamp(2.5rem, 10vw, var(--text-display));
  }

  .hero-pillars {
    flex-wrap: wrap;
    gap: var(--space-3);
  }
}

/* CTA mobile heading clamp + touch target */
@media (max-width: 768px) {
  .cta-title {
    font-size: clamp(2rem, 8vw, var(--text-display));
  }

  .archive-link {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }

  .discourse-link {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }
}

/* =============================================
   FELLOWS DIRECTORY
   ============================================= */
.collective-fellows {
  padding: var(--space-32) var(--content-padding);
  background: var(--color-surface);
  border-top: 1px solid var(--rule-color);
  border-bottom: 1px solid var(--rule-color);
}

.fellows-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: var(--space-4);
}

.fellows-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-ink);
}

.fellows-title em {
  font-style: italic;
}

.fellows-count {
  font-family: var(--font-mono);
  font-size: var(--text-overline);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
}

.fellows-rule {
  width: 100%;
  height: 1px;
  background: var(--rule-color);
  margin-bottom: var(--space-16);
  transform-origin: left;
}

.fellows-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.fellow-card {
  padding: 0;
  overflow: hidden;
  cursor: default;
}

.fellow-image-wrap {
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.fellow-image-placeholder {
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.33, 1, 0.68, 1);
}

.fellow-card:hover .fellow-image-placeholder {
  transform: scale(1.05);
}

.fellow-info {
  padding: var(--space-6) var(--space-6) var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.fellow-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-ink);
}

.fellow-name em {
  font-style: italic;
}

.fellow-specialty {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
}

.fellow-info .seal-base {
  margin-top: var(--space-3);
  align-self: flex-start;
}

@media (max-width: 1024px) {
  .fellows-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .collective-fellows {
    padding: var(--space-16) var(--content-padding);
  }

  .fellows-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .fellows-header {
    flex-direction: column;
    gap: var(--space-2);
  }
}

/* =============================================
   ARCHIVE VAULT
   ============================================= */
.collective-archive {
  padding: var(--space-32) var(--content-padding);
  background-color: var(--color-dark-bg);
  color: var(--color-dark-text);
}

.archive-header {
  margin-bottom: var(--space-16);
}

.archive-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.archive-title em {
  font-style: italic;
}

.archive-list {
  display: flex;
  flex-direction: column;
}

.archive-entry {
  display: flex;
  gap: var(--space-8);
  padding: var(--space-8) 0;
  border-bottom: 1px solid rgba(250, 250, 249, 0.08);
  transition: background-color 0.3s ease;
}

.archive-entry:first-child {
  border-top: 1px solid rgba(250, 250, 249, 0.08);
}

.archive-entry:hover {
  background-color: rgba(255, 255, 255, 0.02);
}

.archive-number {
  font-family: var(--font-mono);
  font-size: var(--text-h2);
  font-weight: 200;
  color: var(--color-gold);
  opacity: 0.5;
  min-width: 3rem;
  line-height: 1;
  flex-shrink: 0;
}

.archive-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.archive-entry-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-dark-text);
}

.archive-entry-title em {
  font-style: italic;
}

.archive-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
}

.archive-link {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  margin-top: var(--space-2);
  transition: letter-spacing 0.3s var(--ease-out), opacity 0.2s ease;
  opacity: 0.8;
}

.archive-link:hover {
  letter-spacing: 0.18em;
  opacity: 1;
}

@media (max-width: 768px) {
  .collective-archive {
    padding: var(--space-16) var(--content-padding);
  }

  .archive-entry {
    flex-direction: column;
    gap: var(--space-3);
  }

  .archive-number {
    font-size: var(--text-h3);
  }
}

/* =============================================
   CURRENT MANDATES
   ============================================= */
.collective-mandates {
  padding: var(--space-32) var(--content-padding);
  background: var(--color-surface);
  border-top: 1px solid var(--rule-color);
  border-bottom: 1px solid var(--rule-color);
}

.mandates-header {
  margin-bottom: var(--space-4);
}

.mandates-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-4);
}

.mandates-title em {
  font-style: italic;
}

.mandates-rule {
  width: 100%;
  height: 1px;
  background: var(--rule-color);
  margin-bottom: var(--space-16);
  transform-origin: left;
}

.mandates-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
}

.mandate-card {
  padding: var(--space-12);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  cursor: default;
}

.mandate-number {
  font-family: var(--font-mono);
  font-size: var(--text-h2);
  font-weight: 200;
  color: var(--color-gold);
  opacity: 0.5;
}

.mandate-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-ink);
}

.mandate-name em {
  font-style: italic;
}

.mandate-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
}

.mandate-card:hover .mandate-name {
  color: var(--color-gold);
  transition: color 0.3s ease;
}

@media (max-width: 768px) {
  .collective-mandates {
    padding: var(--space-16) var(--content-padding);
  }

  .mandates-grid {
    grid-template-columns: 1fr;
  }
}

/* =============================================
   THE DISCOURSE
   ============================================= */
.collective-discourse {
  padding: var(--space-32) var(--content-padding);
  background-color: var(--color-dark-bg);
  color: var(--color-dark-text);
}

.discourse-header {
  margin-bottom: var(--space-16);
}

.discourse-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.discourse-title em {
  font-style: italic;
}

.discourse-list {
  display: flex;
  flex-direction: column;
}

.discourse-entry {
  padding: var(--space-8) 0;
  border-bottom: 1px solid rgba(250, 250, 249, 0.08);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  transition: background-color 0.3s ease;
}

.discourse-entry:first-child {
  border-top: 1px solid rgba(250, 250, 249, 0.08);
}

.discourse-entry:hover {
  background-color: rgba(255, 255, 255, 0.02);
}

.discourse-meta {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.discourse-date {
  font-family: var(--font-mono);
  font-size: var(--text-overline);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
}

.discourse-tag {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  padding: var(--space-1) var(--space-3);
  border: 1px solid rgba(184, 150, 78, 0.2);
}

.discourse-entry-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-dark-text);
}

.discourse-entry-title em {
  font-style: italic;
}

.discourse-excerpt {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 60ch;
}

.discourse-link {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  margin-top: var(--space-1);
  transition: letter-spacing 0.3s var(--ease-out), opacity 0.2s ease;
  opacity: 0.8;
}

.discourse-link:hover {
  letter-spacing: 0.18em;
  opacity: 1;
}

@media (max-width: 768px) {
  .collective-discourse {
    padding: var(--space-16) var(--content-padding);
  }
}

/* =============================================
   CTA — Centered with rule
   ============================================= */
.collective-cta {
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
  margin-bottom: var(--space-12);
  letter-spacing: var(--tracking-hero);
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
  .collective-cta {
    padding: var(--space-16) var(--content-padding);
  }

  .cta-button {
    width: 100%;
    text-align: center;
    padding: var(--space-4) var(--space-6);
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
