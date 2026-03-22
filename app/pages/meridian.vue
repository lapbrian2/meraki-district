<template>
  <div class="meridian-page">

    <!-- ============================================
         HERO — Strategic Research Portal
    ============================================= -->
    <section ref="heroSection" class="meridian-hero section section-dark">
      <div class="section-wide">
        <span class="overline-badge reveal">District 03</span>
        <h1 class="hero-title word-reveal">
          <em>Meridian</em>
        </h1>
        <p class="hero-subtitle reveal">
          A research library for practitioners who think before they build.
          Frameworks, case studies, and strategic tools &mdash; open to anyone
          willing to do the reading.
        </p>
        <div class="hero-compass reveal">
          <span class="compass-direction">N</span>
          <span class="compass-line" />
          <span class="compass-dot" />
          <span class="compass-line" />
          <span class="compass-direction">S</span>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         REPOSITORY — Framework Downloads
    ============================================= -->
    <section ref="repoSection" class="repository section">
      <div class="section-default">
        <div class="repo-header">
          <div class="repo-header-left">
            <p class="overline reveal">Index 001&ndash;084</p>
            <h2 class="repo-title word-reveal"><em>The Repository</em></h2>
          </div>
          <p class="repo-count reveal">{{ frameworks.length }} resources</p>
        </div>

        <div class="repo-grid">
          <article
            v-for="fw in frameworks"
            :key="fw.title"
            class="repo-card vellum-card reveal"
          >
            <div class="repo-card-icon-wrap">
              <span class="material-symbols-outlined repo-card-icon">{{ fw.icon }}</span>
            </div>
            <div class="repo-card-body">
              <div class="repo-card-meta">
                <span class="repo-card-format">{{ fw.format }}</span>
                <span class="repo-card-size">{{ fw.size }}</span>
              </div>
              <h3 class="repo-card-title"><em>{{ fw.title }}</em></h3>
              <p class="repo-card-desc">{{ fw.description }}</p>
            </div>
            <div class="repo-card-action">
              <span class="material-symbols-outlined">download</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         THE ALIGNMENT — Ikigai-style framework
    ============================================= -->
    <section ref="alignmentSection" class="alignment section section-dark">
      <div class="section-default">
        <div class="alignment-header">
          <p class="overline reveal">Strategic Alignment</p>
          <h2 class="alignment-title word-reveal"><em>The Meridian Matrix</em></h2>
          <p class="alignment-desc reveal">
            Every practitioner sits at the intersection of four forces. The Matrix
            is not a personality test &mdash; it is a navigation instrument. Use it
            to find where your work has leverage, and where it has none.
          </p>
        </div>
        <div class="matrix-grid">
          <div
            v-for="quadrant in matrixQuadrants"
            :key="quadrant.label"
            class="matrix-quadrant vellum-card reveal"
          >
            <span class="material-symbols-outlined matrix-icon">{{ quadrant.icon }}</span>
            <h3 class="matrix-label">{{ quadrant.label }}</h3>
            <p class="matrix-question"><em>{{ quadrant.question }}</em></p>
            <p class="matrix-desc">{{ quadrant.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         THE CORE — Three-Phase Research Process
    ============================================= -->
    <section ref="coreSection" class="core-process section">
      <div class="section-default">
        <div class="core-header">
          <p class="overline reveal">The Core</p>
          <h2 class="core-title word-reveal"><em>How Research Moves to Practice</em></h2>
        </div>
        <div class="core-phases">
          <article
            v-for="(phase, index) in corePhases"
            :key="phase.title"
            class="core-phase reveal"
          >
            <div class="core-phase-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <h3 class="core-phase-title"><em>{{ phase.title }}</em></h3>
            <p class="core-phase-desc">{{ phase.description }}</p>
            <div class="core-phase-outputs">
              <span
                v-for="output in phase.outputs"
                :key="output"
                class="core-phase-tag"
              >{{ output }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CASE STUDIES — Research in Action
    ============================================= -->
    <section ref="casesSection" class="case-studies section section-dark">
      <div class="section-wide">
        <div class="cases-header">
          <div class="cases-header-left">
            <p class="overline reveal">Applied Research</p>
            <h2 class="cases-title word-reveal"><em>Case Studies</em></h2>
          </div>
          <NuxtLink to="/the-road" class="cases-view-all reveal">
            View All Research &rarr;
          </NuxtLink>
        </div>
        <div class="cases-grid">
          <article
            v-for="study in caseStudies"
            :key="study.title"
            class="case-card grayscale-hover reveal"
          >
            <div class="case-card-image-wrap">
              <NuxtImg
                :src="study.image"
                :alt="study.alt"
                class="case-card-image"
                loading="lazy"
                width="400"
                height="280"
              />
              <span class="case-card-category-badge">{{ study.category }}</span>
            </div>
            <div class="case-card-body">
              <h3 class="case-card-title"><em>{{ study.title }}</em></h3>
              <p class="case-card-excerpt">{{ study.excerpt }}</p>
              <div class="case-card-meta">
                <span class="case-card-author">{{ study.author }}</span>
                <span class="case-card-read">{{ study.readTime }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         METRICS — Research Health
    ============================================= -->
    <section ref="metricsSection" class="metrics section">
      <div class="section-default">
        <div class="metrics-header">
          <p class="overline reveal">System Status</p>
          <h2 class="metrics-title word-reveal"><em>Research Integrity</em></h2>
        </div>
        <div class="metrics-grid">
          <div
            v-for="metric in metrics"
            :key="metric.label"
            class="metric-card reveal"
          >
            <span class="metric-value">{{ metric.value }}</span>
            <span class="metric-label">{{ metric.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — Contribute Research
    ============================================= -->
    <section ref="ctaSection" class="meridian-cta section-dark">
      <div class="section-narrow cta-inner">
        <span class="material-symbols-outlined cta-icon">science</span>
        <h2 class="cta-title word-reveal">
          <em>Research is a practice, not a phase.</em>
        </h2>
        <p class="cta-subtitle reveal">
          MERIDIAN ACCEPTS FRAMEWORK SUBMISSIONS ON A ROLLING BASIS
        </p>
        <div class="cta-buttons reveal">
          <NuxtLink to="/apply" class="cta-button-gold">Submit Research</NuxtLink>
          <NuxtLink to="/districts" class="cta-button-ghost">View All Districts &rarr;</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

/* -- SEO ---------------------------------------- */
useHead({
  title: 'Meridian — Meraki Road',
  meta: [
    { name: 'description', content: 'Meridian is District 03 of Meraki Road: a research library of strategic frameworks, case studies, and navigation tools for practitioners who think before they build.' },
  ],
})

useSeoMeta({
  ogTitle: 'Meridian — Meraki Road',
  ogDescription: 'A research library of strategic frameworks, case studies, and navigation tools for practitioners who think before they build.',
  twitterTitle: 'Meridian — Meraki Road',
  twitterDescription: 'Strategic research and framework library. District 03 of Meraki Road.',
})

/* -- Hero --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Repository --------------------------------- */
const repoSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(repoSection, '.reveal', { stagger: 0.1 })
useWordReveal(repoSection, '.word-reveal')

/* -- Alignment ---------------------------------- */
const alignmentSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(alignmentSection, '.reveal', { stagger: 0.1 })
useWordReveal(alignmentSection, '.word-reveal')

/* -- Core Process ------------------------------- */
const coreSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(coreSection, '.reveal', { stagger: 0.12 })
useWordReveal(coreSection, '.word-reveal')

/* -- Case Studies ------------------------------- */
const casesSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(casesSection, '.reveal', { stagger: 0.1 })
useWordReveal(casesSection, '.word-reveal')

/* -- Metrics ------------------------------------ */
const metricsSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(metricsSection, '.reveal', { stagger: 0.08 })
useWordReveal(metricsSection, '.word-reveal')

/* -- CTA ---------------------------------------- */
const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal', { stagger: 0.08 })

/* -- Data --------------------------------------- */
interface Framework {
  title: string
  icon: string
  format: string
  size: string
  description: string
}

const frameworks: Framework[] = [
  {
    title: 'Core Framework Schema',
    icon: 'schema',
    format: 'PDF',
    size: '12.4 MB',
    description: 'The foundational research schema that governs how Meridian classifies, indexes, and relates strategic frameworks across disciplines.',
  },
  {
    title: 'Heuristic Brief 09: Decision Architecture',
    icon: 'psychology',
    format: 'PDF',
    size: '4.1 MB',
    description: 'A practitioner-facing brief on building decision trees that survive contact with reality. Based on 18 months of field observation.',
  },
  {
    title: 'Strategic Logic Library',
    icon: 'data_object',
    format: 'JSON',
    size: '0.8 MB',
    description: 'Machine-readable index of all Meridian frameworks, cross-referenced by discipline, complexity tier, and application domain.',
  },
  {
    title: 'Research Protocol Manual',
    icon: 'menu_book',
    format: 'PDF',
    size: '8.7 MB',
    description: 'How Meridian conducts research: methodology, peer review process, publication standards, and ethical guidelines.',
  },
  {
    title: 'Navigation Patterns: Volume I',
    icon: 'explore',
    format: 'PDF',
    size: '6.2 MB',
    description: 'Fourteen strategic navigation patterns observed across high-performing creative practices. Pattern language, not prescription.',
  },
  {
    title: 'Field Notes: Practitioner Interviews',
    icon: 'record_voice_over',
    format: 'PDF',
    size: '3.9 MB',
    description: 'Unedited transcripts from 24 practitioner interviews. How people actually navigate uncertainty, in their own words.',
  },
]

interface MatrixQuadrant {
  label: string
  icon: string
  question: string
  description: string
}

const matrixQuadrants: MatrixQuadrant[] = [
  {
    label: 'Mission',
    icon: 'flag',
    question: 'What does the world need from your work?',
    description: 'The external demand. Not what sells, but what matters. Mission is the intersection of skill and necessity.',
  },
  {
    label: 'Vocation',
    icon: 'work',
    question: 'What can you be paid for without compromise?',
    description: 'Sustainability without capitulation. The work that funds the work, without destroying the reason you do it.',
  },
  {
    label: 'Profession',
    icon: 'architecture',
    question: 'What are you genuinely excellent at?',
    description: 'Not what you enjoy or what you studied. What you can do at a level that creates undeniable value.',
  },
  {
    label: 'Passion',
    icon: 'local_fire_department',
    question: 'What would you do without an audience?',
    description: 'The work you return to when no one is watching. The thing that survives the removal of incentives.',
  },
]

interface CorePhase {
  title: string
  description: string
  outputs: string[]
}

const corePhases: CorePhase[] = [
  {
    title: 'Discovery',
    description: 'Raw intake. Literature review, practitioner interviews, field observation. No filtering, no judgement. Gather everything, trust that patterns will emerge from volume.',
    outputs: ['Field notes', 'Source library', 'Interview transcripts'],
  },
  {
    title: 'Synthesis',
    description: 'Pattern recognition. Cross-reference, cluster, and compress. The goal is not a summary but a structure — something that makes the next practitioner faster without making them lazier.',
    outputs: ['Framework drafts', 'Pattern language', 'Visual models'],
  },
  {
    title: 'Publication',
    description: 'Peer review, revision, release. Every framework is tested against three real projects before publication. If it does not survive contact with practice, it stays in draft.',
    outputs: ['Reviewed frameworks', 'Case studies', 'Open datasets'],
  },
]

interface CaseStudy {
  title: string
  image: string
  alt: string
  category: string
  excerpt: string
  author: string
  readTime: string
}

const caseStudies: CaseStudy[] = [
  {
    title: 'When the Brief Is the Problem',
    image: '/images/districts/meridian.webp',
    alt: 'Strategic diagram showing brief deconstruction methodology',
    category: 'Strategy',
    excerpt: 'A framework for recognizing when client briefs contain their own failure conditions, and how to rewrite them before starting work.',
    author: 'Meridian Research Lab',
    readTime: '12 min read',
  },
  {
    title: 'The Practitioner Bottleneck',
    image: '/images/districts/the-provenance.webp',
    alt: 'Network diagram showing practitioner workflow constraints',
    category: 'Operations',
    excerpt: 'Why the most talented person in the room is often the reason the project stalls. A study of creative bottlenecks across 14 studios.',
    author: 'Sable Chen',
    readTime: '18 min read',
  },
  {
    title: 'Navigation Without Maps',
    image: '/images/districts/fieldwork.webp',
    alt: 'Abstract representation of wayfinding through uncertainty',
    category: 'Research',
    excerpt: 'How practitioners in high-uncertainty domains build internal navigation systems that outperform formal planning methods.',
    author: 'Ryo Tanaka',
    readTime: '15 min read',
  },
]

interface Metric {
  value: string
  label: string
}

const metrics: Metric[] = [
  { value: '84', label: 'Published Frameworks' },
  { value: '24', label: 'Practitioner Interviews' },
  { value: '14', label: 'Active Case Studies' },
  { value: '99.98%', label: 'Data Integrity' },
]
</script>

<style scoped>
/* =============================================
   HERO — Strategic Research Portal
   ============================================= */
.meridian-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-16);
  text-align: center;
}

.meridian-hero .overline-badge {
  display: inline-block;
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  border: 1px solid rgba(184, 150, 78, 0.3);
  padding: var(--space-1) var(--space-3);
  margin-bottom: var(--space-6);
}

.hero-title {
  font-size: var(--text-display);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
  margin-bottom: var(--space-6);
}

.hero-title em { font-style: italic; }

.hero-subtitle {
  font-size: var(--text-body);
  font-weight: 400;
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 52ch;
  margin: 0 auto var(--space-12);
}

.hero-compass {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
}

.compass-direction {
  font-family: var(--font-mono);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  color: var(--color-gold);
  opacity: 0.6;
}

.compass-line {
  display: block;
  width: 48px;
  height: 1px;
  background: var(--color-gold);
  opacity: 0.3;
}

.compass-dot {
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-gold);
}

@media (max-width: 768px) {
  .meridian-hero { padding-top: calc(var(--space-16) + 3rem); padding-bottom: var(--space-12); }
  .hero-title { font-size: clamp(2.5rem, 10vw, var(--text-display)); }
  .cta-title { font-size: clamp(1.75rem, 6vw, var(--text-h1)); }
  .cta-button-gold { min-height: 44px; display: inline-flex; align-items: center; justify-content: center; }
}

@media (max-width: 480px) {
  .hero-title { font-size: clamp(2.5rem, 10vw, var(--text-display)); }
}

/* =============================================
   REPOSITORY — Framework Downloads
   ============================================= */
.repository {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-background);
}

.repo-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: var(--space-12);
}

.repo-title {
  font-size: var(--text-h2);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-4);
}

.repo-title em { font-style: italic; }

.repo-count {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-text-muted);
}

.repo-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.repo-card {
  display: grid;
  grid-template-columns: 56px 1fr 48px;
  gap: var(--space-6);
  align-items: center;
  padding: var(--space-6);
}

.repo-card-icon-wrap {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(184, 150, 78, 0.2);
}

.repo-card-icon {
  font-size: 1.5rem;
  color: var(--color-gold);
}

.repo-card-meta {
  display: flex;
  gap: var(--space-3);
  margin-bottom: var(--space-2);
}

.repo-card-format {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
}

.repo-card-size {
  font-family: var(--font-mono);
  font-size: var(--text-overline);
  color: var(--color-text-muted);
}

.repo-card-title {
  font-size: var(--text-h4);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-bottom: var(--space-2);
}

.repo-card-title em { font-style: italic; }

.repo-card-desc {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
  max-width: 64ch;
}

.repo-card-action {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  transition: color var(--duration-fast) ease;
  cursor: pointer;
}

.repo-card:hover .repo-card-action {
  color: var(--color-gold);
}

@media (max-width: 768px) {
  .repo-card { grid-template-columns: 1fr; gap: var(--space-4); }
  .repo-card-icon-wrap { display: none; }
  .repo-card-action { justify-content: flex-start; }
  .repo-header { flex-direction: column; align-items: flex-start; gap: var(--space-4); }
}

/* =============================================
   ALIGNMENT — Ikigai Matrix
   ============================================= */
.alignment {
  padding: var(--space-24) var(--content-padding);
}

.alignment-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.alignment-title {
  font-size: var(--text-h2);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);
}

.alignment-title em { font-style: italic; }

.alignment-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 56ch;
  margin: 0 auto;
}

.matrix-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
}

.matrix-quadrant {
  padding: var(--space-8);
  text-align: center;
}

.matrix-icon {
  font-size: 2rem;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
  display: inline-block;
}

.matrix-label {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-3);
}

.matrix-question {
  font-size: var(--text-h4);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
  line-height: var(--leading-snug);
}

.matrix-question em { font-style: italic; }

.matrix-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
}

@media (max-width: 768px) {
  .matrix-grid { grid-template-columns: 1fr; }
}

/* =============================================
   CORE — Three-Phase Process
   ============================================= */
.core-process {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-background);
}

.core-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.core-title {
  font-size: var(--text-h2);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-4);
}

.core-title em { font-style: italic; }

.core-phases {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.core-phase {
  padding: var(--space-8);
  border: 1px solid var(--color-border);
}

.core-phase-number {
  font-family: var(--font-mono);
  font-size: var(--text-h1);
  font-weight: 200;
  color: var(--color-gold);
  opacity: 0.3;
  margin-bottom: var(--space-4);
}

.core-phase-title {
  font-size: var(--text-h3);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-bottom: var(--space-4);
}

.core-phase-title em { font-style: italic; }

.core-phase-desc {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.core-phase-outputs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.core-phase-tag {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-gold);
  border: 1px solid rgba(184, 150, 78, 0.2);
  padding: var(--space-1) var(--space-2);
}

@media (max-width: 768px) {
  .core-phases { grid-template-columns: 1fr; }
}

/* =============================================
   CASE STUDIES
   ============================================= */
.case-studies {
  padding: var(--space-24) var(--content-padding);
}

.cases-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: var(--space-12);
}

.cases-title {
  font-size: var(--text-h2);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.cases-title em { font-style: italic; }

.cases-view-all {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  color: var(--color-dark-muted);
  background-image: none;
  transition: color var(--duration-fast) ease;
}

.cases-view-all:hover { color: var(--color-gold); }

.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.case-card { position: relative; }

.case-card-image-wrap {
  position: relative;
  overflow: hidden;
  margin-bottom: var(--space-4);
}

.case-card-image {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  display: block;
}

.case-card-category-badge {
  position: absolute;
  top: var(--space-3);
  left: var(--space-3);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-text);
  background: rgba(0, 0, 0, 0.85);
  padding: var(--space-1) var(--space-2);
}

.case-card-body { padding: 0; }

.case-card-title {
  font-size: var(--text-h3);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-3);
}

.case-card-title em { font-style: italic; }

.case-card-excerpt {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
  margin-bottom: var(--space-4);
}

.case-card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.case-card-author {
  font-size: var(--text-caption);
  font-weight: 500;
  color: var(--color-dark-secondary);
}

.case-card-read {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
}

@media (max-width: 768px) {
  .cases-grid { grid-template-columns: 1fr; max-width: 480px; }
  .cases-header { flex-direction: column; align-items: flex-start; gap: var(--space-4); }
}

/* =============================================
   METRICS — Research Health
   ============================================= */
.metrics {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-background);
}

.metrics-header {
  text-align: center;
  margin-bottom: var(--space-12);
}

.metrics-title {
  font-size: var(--text-h2);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-4);
}

.metrics-title em { font-style: italic; }

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-8);
  text-align: center;
}

.metric-card {
  padding: var(--space-8);
  border: 1px solid var(--color-border);
}

.metric-value {
  display: block;
  font-family: var(--font-mono);
  font-size: var(--text-h1);
  font-weight: 200;
  color: var(--color-gold);
  margin-bottom: var(--space-3);
}

.metric-label {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .metrics-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
  .metrics-grid { grid-template-columns: 1fr; }
}

/* =============================================
   CTA — Contribute Research
   ============================================= */
.meridian-cta {
  padding: var(--space-24) var(--content-padding);
  text-align: center;
}

.cta-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

.cta-icon {
  font-size: 2rem;
  color: var(--color-gold);
}

.cta-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
}

.cta-title em { font-style: italic; }

.cta-subtitle {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  color: var(--color-dark-muted);
  margin-bottom: var(--space-8);
}

.cta-buttons {
  display: flex;
  gap: var(--space-6);
  align-items: center;
}

.cta-button-gold {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-bg);
  padding: var(--space-4) var(--space-8);
  background: var(--color-gold);
  background-image: none;
  transition: opacity var(--duration-normal) ease, transform var(--duration-normal) ease;
}

.cta-button-gold:hover { opacity: 0.9; transform: translateY(-1px); }
.cta-button-gold:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 4px; }

.cta-button-ghost {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  color: var(--color-dark-muted);
  background-image: none;
  transition: color var(--duration-normal) ease;
}

.cta-button-ghost:hover { color: var(--color-gold); }
.cta-button-ghost:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 4px; }

@media (max-width: 480px) {
  .cta-buttons { flex-direction: column; }
}
</style>
