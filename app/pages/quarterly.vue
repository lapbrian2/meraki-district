<template>
  <div class="quarterly-page">

    <!-- ============================================
         HERO — The Quarterly Monograph
    ============================================= -->
    <section ref="heroSection" class="quarterly-hero section section-dark">
      <div class="hero-atmosphere" aria-hidden="true" />
      <div class="section-default">
        <p class="overline reveal">State of the District</p>
        <h1 class="quarterly-hero-title word-reveal">
          <em>The Quarterly Monograph</em>
        </h1>
        <p class="quarterly-hero-sub reveal">
          Every three months we take stock. What was made, who showed up,
          what shifted. Not a newsletter — a formal record of where
          Meraki Road stands and where it's headed.
        </p>
        <p class="quarterly-edition stamped-overline reveal">Q1 2026 — Volume I, Issue 1</p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         AT A GLANCE — Key metrics
    ============================================= -->
    <section ref="metricsSection" class="quarterly-metrics section section-dark">
      <div class="section-default">
        <p class="overline reveal">At a Glance</p>
        <h2 class="metrics-title word-reveal"><em>The numbers this quarter</em></h2>

        <div class="metrics-grid">
          <div
            v-for="metric in metrics"
            :key="metric.label"
            class="metric-card reveal"
          >
            <span class="metric-value">{{ metric.value }}</span>
            <span class="metric-label">{{ metric.label }}</span>
            <span v-if="metric.delta" class="metric-delta" :class="metric.deltaClass">
              {{ metric.delta }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         EDITORIAL — Asymmetric 2-col (text + figure)
    ============================================= -->
    <section ref="editorialSection" class="quarterly-editorial section section-dark">
      <div class="section-wide">
        <div class="editorial-grid">
          <div class="editorial-text">
            <p class="overline reveal">I. Opening Statement</p>
            <h2 class="editorial-title word-reveal"><em>The weight of the quarter</em></h2>
            <p class="editorial-body reveal">
              This quarter marked a turning point. Not in scale — seven
              districts are still seven districts — but in depth. Two long-form
              monographs entered the permanent archive. A new district was
              chartered. The first Legacy Seal of 2026 was conferred. The work
              is getting deeper, and the standards are keeping pace.
            </p>
            <p class="editorial-body reveal">
              What you'll find in this issue: the numbers, the featured work,
              reports from each district, the governance decisions that shaped
              the quarter, and the editorial reflection that ties it together.
            </p>
            <NuxtLink to="#" class="editorial-cta reveal">Read the Full Statement &rarr;</NuxtLink>
          </div>
          <div class="editorial-figure reveal">
            <div class="editorial-figure-placeholder">
              <span class="editorial-figure-label">Figure 1.0</span>
              <span class="editorial-figure-caption">Quarterly growth — submissions by district</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         FEATURED WORK — Highlighted submissions
    ============================================= -->
    <section ref="featuredSection" class="quarterly-featured section section-dark">
      <div class="section-default">
        <p class="overline reveal">Featured Work</p>
        <h2 class="featured-title word-reveal"><em>Selected from the archive</em></h2>
        <p class="featured-intro reveal">
          Three works from the past quarter that represent the range and
          depth of what's being made across districts.
        </p>

        <div class="featured-grid">
          <div
            v-for="work in featuredWorks"
            :key="work.title"
            class="featured-card vellum-card reveal"
          >
            <div class="featured-image-placeholder" aria-hidden="true">
              <span class="featured-district">{{ work.district }}</span>
            </div>
            <div class="featured-content">
              <h3 class="featured-work-title"><em>{{ work.title }}</em></h3>
              <p class="featured-creator">{{ work.creator }}</p>
              <p class="featured-desc">{{ work.desc }}</p>
              <span class="seal-base" :class="work.sealClass">{{ work.seal }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         FEATURED FELLOWS — 3-col profile grid
    ============================================= -->
    <section ref="fellowsSection" class="quarterly-fellows section section-dark">
      <div class="section-default">
        <p class="overline reveal">The Collective</p>
        <h2 class="fellows-section-title word-reveal"><em>Featured Fellows</em></h2>

        <div class="fellows-grid">
          <article
            v-for="fellow in featuredFellows"
            :key="fellow.name"
            class="fellow-profile-card reveal"
          >
            <div class="fellow-profile-avatar" :style="{ background: fellow.gradient }" />
            <p class="fellow-profile-role">{{ fellow.role }}</p>
            <h3 class="fellow-profile-name"><em>{{ fellow.name }}</em></h3>
            <p class="fellow-profile-desc">{{ fellow.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         DISTRICT REPORT — Per-district summaries
    ============================================= -->
    <section ref="districtsSection" class="quarterly-districts section section-dark">
      <div class="section-default">
        <p class="overline reveal">District Reports</p>
        <h2 class="districts-title word-reveal"><em>What moved in each district</em></h2>

        <div class="district-reports">
          <div
            v-for="report in districtReports"
            :key="report.name"
            class="district-report reveal"
          >
            <div class="report-header">
              <h3 class="report-name"><em>{{ report.name }}</em></h3>
              <span class="report-count">{{ report.submissions }} submissions</span>
            </div>
            <p class="report-summary">{{ report.summary }}</p>
            <div v-if="report.highlight" class="report-highlight">
              <span class="report-highlight-label">Highlight</span>
              <span class="report-highlight-text">{{ report.highlight }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         NOTABLE — Key events and milestones
    ============================================= -->
    <section ref="notableSection" class="quarterly-notable section section-dark">
      <div class="section-default">
        <p class="overline reveal">Notable</p>
        <h2 class="notable-title word-reveal"><em>What happened this quarter</em></h2>

        <div class="notable-list">
          <div
            v-for="event in notableEvents"
            :key="event.title"
            class="notable-item reveal"
          >
            <span class="notable-date">{{ event.date }}</span>
            <div class="notable-content">
              <h3 class="notable-event-title">{{ event.title }}</h3>
              <p class="notable-event-desc">{{ event.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         OBSERVATIONS — Two-column editorial reflections
    ============================================= -->
    <section ref="observationsSection" class="quarterly-observations section section-dark">
      <div class="section-wide">
        <div class="observations-grid">
          <div class="observation-col reveal">
            <p class="overline">Observation</p>
            <h3 class="observation-title"><em>The quiet depth of slow quarters</em></h3>
            <p class="observation-body">
              Publishing submitted fewer pieces than any district this quarter.
              But the two monographs that entered the archive were the longest,
              most deeply researched entries in Meraki Road history. Volume is
              not the signal. Depth is.
            </p>
          </div>
          <div class="observation-col reveal">
            <p class="overline">Observation</p>
            <h3 class="observation-title"><em>AI attribution is the question of the year</em></h3>
            <p class="observation-body">
              The Digital Craft district opened a formal review of how AI-assisted
              work is attributed, archived, and considered for Seal eligibility.
              This is not a policy question. It is a craft question. And the answer
              will define what this road values.
            </p>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         GOVERNANCE — Standards and decisions
    ============================================= -->
    <section ref="governanceSection" class="quarterly-governance section section-dark">
      <div class="section-narrow">
        <div class="governance-inner">
          <p class="overline reveal">Governance</p>
          <h2 class="governance-title word-reveal"><em>Decisions and amendments</em></h2>

          <div class="governance-list">
            <div
              v-for="decision in decisions"
              :key="decision.title"
              class="governance-item reveal"
            >
              <span class="governance-status stamped-overline">{{ decision.status }}</span>
              <h3 class="governance-item-title"><em>{{ decision.title }}</em></h3>
              <p class="governance-item-desc">{{ decision.desc }}</p>
              <div v-if="decision.sponsor" class="governance-sponsor">
                Sponsored by {{ decision.sponsor }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CLOSING — Looking ahead
    ============================================= -->
    <section ref="closingSection" class="quarterly-closing section section-dark">
      <div class="section-narrow closing-inner">
        <blockquote class="closing-quote reveal">
          <p>
            <em>
              The monograph is not a press release. It is a mirror.
              What we made, where we fell short, what earned its place.
              Quarterly because the work never stops. Monograph because
              the record matters.
            </em>
          </p>
        </blockquote>
        <p class="closing-next reveal">
          Next issue: Q2 2026 — published July 1
        </p>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

/* -- SEO ---------------------------------------- */
useHead({
  title: 'Quarterly Monograph — Meraki Road',
  meta: [
    { name: 'description', content: 'The Quarterly Monograph. A formal record of where Meraki Road stands — key metrics, featured work, district reports, and governance decisions.' },
  ],
})

useSeoMeta({
  ogTitle: 'Quarterly Monograph — Meraki Road',
  ogDescription: 'A formal record of where Meraki Road stands — key metrics, featured work, district reports, and governance decisions.',
  twitterTitle: 'Quarterly Monograph — Meraki Road',
  twitterDescription: 'A formal record of where Meraki Road stands — key metrics, featured work, district reports, and governance decisions.',
})

/* -- Section refs ------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
const metricsSection = ref<HTMLElement | null>(null)
const editorialSection = ref<HTMLElement | null>(null)
const featuredSection = ref<HTMLElement | null>(null)
const fellowsSection = ref<HTMLElement | null>(null)
const districtsSection = ref<HTMLElement | null>(null)
const notableSection = ref<HTMLElement | null>(null)
const observationsSection = ref<HTMLElement | null>(null)
const governanceSection = ref<HTMLElement | null>(null)
const closingSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

useGsapScrollReveal(metricsSection, '.reveal', { stagger: 0.08 })
useWordReveal(metricsSection, '.word-reveal')

useGsapScrollReveal(editorialSection, '.reveal', { stagger: 0.1 })
useWordReveal(editorialSection, '.word-reveal')

useGsapScrollReveal(featuredSection, '.reveal', { stagger: 0.12 })
useWordReveal(featuredSection, '.word-reveal')

useGsapScrollReveal(fellowsSection, '.reveal', { stagger: 0.1 })
useWordReveal(fellowsSection, '.word-reveal')

useGsapScrollReveal(districtsSection, '.reveal', { stagger: 0.1 })
useWordReveal(districtsSection, '.word-reveal')

useGsapScrollReveal(notableSection, '.reveal', { stagger: 0.1 })
useWordReveal(notableSection, '.word-reveal')

useGsapScrollReveal(observationsSection, '.reveal', { stagger: 0.15 })

useGsapScrollReveal(governanceSection, '.reveal', { stagger: 0.1 })
useWordReveal(governanceSection, '.word-reveal')

useGsapScrollReveal(closingSection, '.reveal')

/* -- Data --------------------------------------- */
const metrics = [
  { value: '142', label: 'Works Archived', delta: '+34 from Q4', deltaClass: 'delta-up' },
  { value: '38', label: 'New Practitioners', delta: '+12 from Q4', deltaClass: 'delta-up' },
  { value: '7', label: 'Active Districts', delta: '+1 new', deltaClass: 'delta-up' },
  { value: '3', label: 'Seal Advancements', delta: null, deltaClass: '' },
  { value: '12', label: 'Publications', delta: '+5 from Q4', deltaClass: 'delta-up' },
  { value: '1', label: 'Legacy Conferral', delta: null, deltaClass: '' },
]

const featuredWorks = [
  {
    title: 'Threshold Studies',
    creator: 'M. Vasquez',
    district: 'Visual Arts',
    desc: 'A series of twelve monochrome studies examining the boundary between interior and exterior space. Archival ink on cotton rag.',
    seal: 'Fellow',
    sealClass: 'seal-fellow',
  },
  {
    title: 'Compression Artifacts',
    creator: 'K. Okafor',
    district: 'Digital Craft',
    desc: 'Generative compositions built from intentionally degraded image data. Each piece is a meditation on what survives lossy encoding.',
    seal: 'Verified',
    sealClass: 'seal-verified',
  },
  {
    title: 'Field Notes: Appalachia',
    creator: 'R. Whitfield',
    district: 'Publishing',
    desc: 'A 48-page letterpress monograph documenting material culture across three mountain communities. Hand-set type, risograph plates.',
    seal: 'Fellow',
    sealClass: 'seal-fellow',
  },
]

const featuredFellows = [
  {
    name: 'Renata Vasquez',
    role: 'Generative Systems',
    desc: 'Leading the AI Attribution Framework review across Digital Craft and Visual Arts districts.',
    gradient: 'linear-gradient(135deg, #27272A 0%, #3F3F46 50%, #18181B 100%)',
  },
  {
    name: 'R. Whitfield',
    role: 'Publishing & Print',
    desc: 'Seventh Legacy Seal holder in Meraki Road history. Permanent archive contributor since 2023.',
    gradient: 'linear-gradient(135deg, #18181B 0%, #27272A 50%, #09090B 100%)',
  },
  {
    name: 'Idris Kone',
    role: 'Spatial Narrative',
    desc: 'Advised on the Architecture & Space founding charter. Bridging environmental design across districts.',
    gradient: 'linear-gradient(135deg, #3F3F46 0%, #27272A 50%, #18181B 100%)',
  },
]

const districtReports = [
  {
    name: 'Visual Arts',
    submissions: 47,
    summary: 'Strong quarter. Two new Fellows elevated. The annual open review drew 120 attendees — double last quarter. Print-based work dominated submissions.',
    highlight: 'Open review attendance doubled',
  },
  {
    name: 'Digital Craft',
    submissions: 31,
    summary: 'Steady growth in generative and computational work. Three new Associates onboarded. Standards committee launched a review of attribution protocols for AI-assisted pieces.',
    highlight: 'AI attribution review launched',
  },
  {
    name: 'Publishing',
    submissions: 22,
    summary: 'Quieter quarter by volume but deeper in scope. Two long-form monographs entered the archive. Cross-district collaboration with Visual Arts on a limited-edition print series.',
    highlight: 'Two monographs archived',
  },
  {
    name: 'Architecture & Space',
    submissions: 18,
    summary: 'Inaugural quarter for this district. Focus on documentation and archival standards. Four founding Associates submitted spatial studies and site analyses.',
    highlight: 'District formally chartered',
  },
  {
    name: 'Sound & Time-Based',
    submissions: 14,
    summary: 'Experimental audio work gaining traction. One Fellow nomination in progress. The district hosted its first listening session — invitation-only, recorded for the archive.',
    highlight: 'First listening session held',
  },
]

const notableEvents = [
  {
    date: 'Jan 12',
    title: 'Architecture & Space district formally established',
    desc: 'Seventh district added to Meraki Road. Four founding practitioners nominated by existing Fellows across Visual Arts and Publishing.',
  },
  {
    date: 'Feb 3',
    title: 'First Legacy Seal conferral of 2026',
    desc: 'R. Whitfield (Publishing) received the Legacy Seal after unanimous council approval. Seventh Legacy holder in Meraki Road history.',
  },
  {
    date: 'Feb 18',
    title: 'Annual open review — Visual Arts',
    desc: 'Largest attendance on record. 120 visitors across two days. Twelve works selected for the permanent quarterly exhibition.',
  },
  {
    date: 'Mar 5',
    title: 'Attribution standards review initiated',
    desc: 'Digital Craft governance council opened a formal review of how AI-assisted and computationally generated work is attributed and archived.',
  },
]

const decisions = [
  {
    status: 'Ratified',
    title: 'District Founding Protocol v2',
    desc: 'Updated the requirements for establishing a new district. Minimum four founding practitioners (up from three). Requires sponsorship from two existing district councils.',
    sponsor: 'I. Kone & M. Delacroix',
  },
  {
    status: 'Under Review',
    title: 'AI Attribution Framework',
    desc: 'Proposed standards for documenting the role of AI tools in creative work. Covers disclosure requirements, archival metadata, and Seal eligibility for AI-assisted pieces.',
    sponsor: 'R. Vasquez',
  },
  {
    status: 'Ratified',
    title: 'Quarterly Monograph Publication Standard',
    desc: 'Formalized the structure, review process, and publication schedule for this document. Each issue is now part of the permanent archive.',
    sponsor: 'A. Osei',
  },
]
</script>

<style scoped>
/* ===============================================
   QUARTERLY MONOGRAPH PAGE — State of the District
   =============================================== */

/* --- Hero --- */
.quarterly-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  min-height: 60vh;
  display: flex;
  align-items: flex-end;
  position: relative;
  background: radial-gradient(circle at center, rgba(184, 150, 78, 0.05) 0%, rgba(10, 10, 10, 1) 70%);
  overflow: hidden;
}

.hero-atmosphere {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 70%, rgba(184,150,78,0.04) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 30%, rgba(184,150,78,0.02) 0%, transparent 50%);
  animation: atmosphereShift 20s linear infinite;
  pointer-events: none;
}

@keyframes atmosphereShift {
  0% { background-position: 0% 0%, 100% 100%; }
  50% { background-position: 100% 100%, 0% 0%; }
  100% { background-position: 0% 0%, 100% 100%; }
}

.quarterly-hero-title {
  font-size: var(--text-display);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-display);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  max-width: 20ch;
  text-shadow: 0 0 30px rgba(184, 150, 78, 0.12);
}

.quarterly-hero-sub {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
  margin-bottom: var(--space-8);
}

.quarterly-edition {
  font-family: var(--font-mono);
  color: var(--color-gold);
}

/* --- Metrics --- */
.metrics-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-12);
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.metric-card {
  padding: var(--space-8);
  border: 1px solid rgba(184, 150, 78, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.metric-value {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 300;
  font-style: italic;
  color: var(--color-gold);
  line-height: 1;
}

.metric-label {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  opacity: 0.6;
}

.metric-delta {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  letter-spacing: var(--tracking-wide);
  opacity: 0.5;
}

.delta-up {
  color: var(--color-success);
}

/* --- Editorial --- */
.quarterly-editorial {
  padding: var(--space-24) var(--content-padding);
  background-color: var(--color-dark-bg);
  color: var(--color-dark-text);
}

.editorial-grid {
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: var(--space-16);
  align-items: start;
}

.editorial-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
}

.editorial-body {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
  margin-bottom: var(--space-6);
}

.editorial-cta {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  margin-top: var(--space-4);
  transition: opacity var(--duration-normal) ease;
}

.editorial-cta:hover {
  opacity: 0.7;
}

.editorial-figure-placeholder {
  aspect-ratio: 4 / 3;
  background: linear-gradient(135deg, rgba(184, 150, 78, 0.06) 0%, rgba(184, 150, 78, 0.02) 100%);
  border: 1px solid rgba(184, 150, 78, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--space-6);
  gap: var(--space-2);
}

.editorial-figure-label {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0.5;
}

.editorial-figure-caption {
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  opacity: 0.5;
}

@media (max-width: 768px) {
  .editorial-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .editorial-cta {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }
}

/* --- Featured Work --- */
.featured-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.featured-intro {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
  margin-top: var(--space-6);
  margin-bottom: var(--space-12);
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.featured-card {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.featured-image-placeholder {
  aspect-ratio: 4/3;
  background: linear-gradient(135deg, rgba(184, 150, 78, 0.06) 0%, rgba(184, 150, 78, 0.02) 100%);
  display: flex;
  align-items: flex-end;
  padding: var(--space-4);
}

.featured-district {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0.5;
}

.featured-content {
  padding: var(--space-6);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.featured-work-title {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-2);
}

.featured-creator {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-gold);
  opacity: 0.6;
  letter-spacing: var(--tracking-wide);
  margin-bottom: var(--space-4);
}

.featured-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  flex: 1;
  margin-bottom: var(--space-4);
}

/* --- Featured Fellows --- */
.quarterly-fellows {
  padding: var(--space-24) var(--content-padding);
  background-color: var(--color-dark-bg);
}

.fellows-section-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-12);
}

.fellows-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.fellow-profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-4);
}

.fellow-profile-avatar {
  width: 96px;
  height: 96px;
  border-radius: 9999px;
  border: 1px solid rgba(184, 150, 78, 0.15);
}

.fellow-profile-role {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0.6;
}

.fellow-profile-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-dark-text);
}

.fellow-profile-name em {
  font-style: italic;
}

.fellow-profile-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 30ch;
}

@media (max-width: 768px) {
  .fellows-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }
}

/* --- District Reports --- */
.districts-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-12);
}

.district-reports {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.district-report {
  padding: var(--space-6);
  border: 1px solid rgba(184, 150, 78, 0.06);
  transition: border-color var(--duration-normal) ease;
}

.district-report:hover {
  border-color: rgba(184, 150, 78, 0.15);
}

.report-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: var(--space-3);
}

.report-name {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
}

.report-count {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-gold);
  opacity: 0.5;
  letter-spacing: var(--tracking-wide);
}

.report-summary {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 65ch;
  margin-bottom: var(--space-4);
}

.report-highlight {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding-top: var(--space-3);
  border-top: 1px solid rgba(184, 150, 78, 0.06);
}

.report-highlight-label {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0.6;
  flex-shrink: 0;
}

.report-highlight-text {
  font-size: var(--text-small);
  color: var(--color-dark-secondary);
}

/* --- Notable Events --- */
.notable-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-12);
}

.notable-list {
  display: flex;
  flex-direction: column;
}

.notable-item {
  display: grid;
  grid-template-columns: 6rem 1fr;
  gap: var(--space-6);
  padding: var(--space-6) 0;
  border-bottom: 1px solid rgba(184, 150, 78, 0.06);
}

.notable-item:last-child {
  border-bottom: none;
}

.notable-date {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-gold);
  opacity: 0.5;
  letter-spacing: var(--tracking-wide);
  padding-top: 0.15em;
}

.notable-event-title {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-2);
}

.notable-event-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
}

/* --- Observations --- */
.quarterly-observations {
  padding: var(--space-24) var(--content-padding);
  background-color: var(--color-dark-bg);
}

.observations-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
}

.observation-col .overline {
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}

.observation-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-6);
}

.observation-title em {
  font-style: italic;
}

.observation-body {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}

@media (max-width: 768px) {
  .observations-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }
}

/* --- Governance --- */
.governance-inner {
  display: flex;
  flex-direction: column;
}

.governance-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-12);
}

.governance-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.governance-item {
  padding-bottom: var(--space-8);
  border-bottom: 1px solid rgba(184, 150, 78, 0.06);
}

.governance-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.governance-status {
  font-family: var(--font-mono);
  margin-bottom: var(--space-4);
  display: inline-block;
}

.governance-item-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-3);
}

.governance-item-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}

.governance-sponsor {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-gold);
  opacity: 0.5;
  letter-spacing: var(--tracking-wide);
  margin-top: var(--space-4);
}

/* --- Closing --- */
.closing-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--space-16);
  padding-bottom: var(--space-16);
}

.closing-quote {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-muted);
  line-height: var(--leading-snug);
  max-width: 40ch;
  margin: 0 auto var(--space-8);
}

.closing-next {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  opacity: 0.5;
  letter-spacing: var(--tracking-wide);
}

/* --- Responsive --- */
@media (max-width: 768px) {
  .quarterly-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-16);
    min-height: auto;
  }

  .quarterly-hero-title {
    max-width: none;
  }

  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .featured-grid {
    grid-template-columns: 1fr;
  }

  .notable-item {
    grid-template-columns: 1fr;
    gap: var(--space-2);
  }
}

@media (max-width: 480px) {
  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .report-header {
    flex-direction: column;
    gap: var(--space-1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .quarterly-hero-title {
    text-shadow: none;
  }
  .hero-atmosphere {
    animation: none;
  }
}
</style>
