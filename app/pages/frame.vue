<template>
  <div class="frame-page">

    <!-- ============================================
         HERO — The Frame
    ============================================= -->
    <section ref="heroSection" class="frame-hero section section-dark">
      <div class="section-wide">
        <span class="overline-badge reveal">District 11 &mdash; The Frame</span>
        <h1 class="hero-title word-reveal">
          <em>Moving Images, Considered Pace</em>
        </h1>
        <div class="hero-stamp reveal">
          <span class="material-symbols-outlined hero-stamp-icon">verified</span>
          Meraki Verified Screening
        </div>
        <div class="hero-image-frame reveal">
          <div class="hero-image-wrap grayscale-hover parallax-container">
            <NuxtImg
              src="/images/districts/the-frame.webp"
              alt="Darkened screening room with projected film — empty seats, deliberate silence"
              class="hero-image"
              loading="eager"
              width="1200"
              height="600"
            />
          </div>
        </div>
        <p class="hero-subtitle reveal">
          The Frame is where film and motion work is shown on its own terms. Documentary,
          experimental film, motion design, video essays &mdash; screened without algorithms,
          without autoplay, without the compression of a feed. Work here is presented at the
          pace it was made to be watched.
        </p>
        <div class="hero-ctas reveal">
          <NuxtLink to="/apply" class="hero-cta-gold">Submit for Screening &rarr;</NuxtLink>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         FEATURED SCREENING — Current Exhibit
    ============================================= -->
    <section ref="featuredSection" class="featured section">
      <div class="section-wide">
        <div class="featured-grid">
          <div class="featured-image-wrap reveal">
            <div class="featured-image grayscale-hover parallax-container">
              <NuxtImg
                src="/images/districts/meridian.webp"
                alt="Still from Structural Silences — concrete forms in low light, 16mm grain"
                class="featured-image-img"
                loading="lazy"
                width="640"
                height="400"
              />
            </div>
            <div class="featured-exhibit-badge reveal">
              <span class="material-symbols-outlined">movie</span>
              Exhibit 011
            </div>
          </div>
          <div class="featured-content">
            <p class="overline reveal">Now Screening</p>
            <h2 class="featured-title word-reveal"><em>Structural Silences</em></h2>
            <p class="featured-director reveal">Dir. Kael Morrow &middot; 42 min &middot; 16mm transferred to digital</p>
            <p class="featured-desc reveal">
              A meditation on the spaces between built structures — the negative volumes
              that hold a building&rsquo;s meaning. Shot over eighteen months across six
              cities, entirely on 16mm Ektachrome. No narration. No score. Just light
              hitting concrete, and the silence that lives inside architecture.
            </p>
            <div class="featured-ctas reveal">
              <NuxtLink to="#" class="featured-cta-primary">Watch Trailer &rarr;</NuxtLink>
              <NuxtLink to="#" class="featured-cta-ghost">Director&rsquo;s Statement &rarr;</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CURRENT PROGRAMME — Screening Cards
    ============================================= -->
    <section ref="programmeSection" class="programme section section-dark">
      <div class="section-wide">
        <div class="programme-header">
          <div class="programme-header-left">
            <p class="overline reveal">Archive Index 11.A</p>
            <h2 class="programme-title word-reveal"><em>Current Programme</em></h2>
          </div>
          <NuxtLink to="#" class="programme-view-all reveal">
            Full Programme &rarr;
          </NuxtLink>
        </div>

        <div class="programme-grid">
          <article
            v-for="film in programme"
            :key="film.title"
            class="programme-card vellum-card reveal"
          >
            <div class="programme-image-wrap grayscale-hover">
              <NuxtImg
                :src="film.image"
                :alt="film.alt"
                class="programme-image"
                loading="lazy"
                width="400"
                height="260"
              />
              <span class="programme-duration">{{ film.duration }}</span>
            </div>
            <div class="programme-card-body">
              <span class="programme-category">{{ film.category }}</span>
              <h3 class="programme-card-title"><em>{{ film.title }}</em></h3>
              <p class="programme-card-director">{{ film.director }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         SUBMISSION GUIDELINES
    ============================================= -->
    <section ref="guidelinesSection" class="guidelines section">
      <div class="section-default">
        <div class="guidelines-inner">
          <span class="overline reveal">Open Submissions</span>
          <h2 class="guidelines-heading word-reveal"><em>How Work Enters The Frame</em></h2>
          <p class="guidelines-intro reveal">
            The Frame accepts rolling submissions from practitioners working in moving image.
            There is no entry fee. There is no jury panel. Work is reviewed by the screening
            committee — three practitioners and one Curatorial Board member — on a monthly cycle.
          </p>

          <div class="guidelines-grid">
            <div v-for="guideline in guidelines" :key="guideline.title" class="guideline-item reveal">
              <span class="material-symbols-outlined guideline-icon">{{ guideline.icon }}</span>
              <h3 class="guideline-title">{{ guideline.title }}</h3>
              <p class="guideline-desc">{{ guideline.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         SCREENING SCHEDULE
    ============================================= -->
    <section ref="scheduleSection" class="schedule section section-dark">
      <div class="section-wide">
        <div class="schedule-header">
          <p class="overline reveal">Calendar</p>
          <h2 class="schedule-title word-reveal"><em>Screening Schedule</em></h2>
        </div>

        <div class="schedule-list">
          <article
            v-for="screening in schedule"
            :key="screening.title"
            class="schedule-row reveal"
          >
            <div class="schedule-date">
              <span class="schedule-day">{{ screening.day }}</span>
              <span class="schedule-month">{{ screening.month }}</span>
            </div>
            <div class="schedule-body">
              <h3 class="schedule-name"><em>{{ screening.title }}</em></h3>
              <p class="schedule-meta">{{ screening.format }} &middot; {{ screening.venue }}</p>
            </div>
            <span class="schedule-status seal-base" :class="screening.sealClass">{{ screening.status }}</span>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         EDITORIAL QUOTE
    ============================================= -->
    <section ref="quoteSection" class="editorial-quote section">
      <div class="section-narrow">
        <blockquote class="quote-block reveal">
          <p class="quote-text">
            &ldquo;The screen is not a window. It is a wall you choose to dissolve.&rdquo;
          </p>
          <cite class="quote-attribution">&mdash; The Frame Screening Committee, Opening Statement</cite>
        </blockquote>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — Submit Work
    ============================================= -->
    <section ref="ctaSection" class="frame-cta section-dark">
      <div class="section-narrow cta-inner">
        <span class="material-symbols-outlined cta-icon">videocam</span>
        <h2 class="cta-title word-reveal">
          <em>Show what moves.</em>
        </h2>
        <p class="cta-subtitle reveal">
          SCREENING SUBMISSIONS REVIEWED MONTHLY
        </p>
        <div class="cta-buttons reveal">
          <NuxtLink to="/apply" class="cta-button-gold">Submit Work</NuxtLink>
          <NuxtLink to="/districts" class="cta-button-ghost">View All Districts</NuxtLink>
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
  title: 'The Frame — Meraki Road',
  meta: [
    { name: 'description', content: 'District 11 — The Frame. Documentary, experimental film, motion design, and video essays. Screened without algorithms, at the pace the work demands.' },
  ],
})

useSeoMeta({
  ogTitle: 'The Frame — Meraki Road',
  ogDescription: 'District 11 — Documentary, experimental film, motion design, and video essays. Screened at the pace the work demands.',
  twitterTitle: 'The Frame — Meraki Road',
  twitterDescription: 'District 11 — Documentary, experimental film, motion design, and video essays. Screened at the pace the work demands.',
})

/* -- Hero --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Featured ----------------------------------- */
const featuredSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(featuredSection, '.reveal', { stagger: 0.08 })
useWordReveal(featuredSection, '.word-reveal')

/* -- Programme ---------------------------------- */
const programmeSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(programmeSection, '.reveal', { stagger: 0.12 })
useWordReveal(programmeSection, '.word-reveal')

/* -- Guidelines --------------------------------- */
const guidelinesSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(guidelinesSection, '.reveal', { stagger: 0.08 })
useWordReveal(guidelinesSection, '.word-reveal')

/* -- Schedule ----------------------------------- */
const scheduleSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(scheduleSection, '.reveal', { stagger: 0.1 })
useWordReveal(scheduleSection, '.word-reveal')

/* -- Quote -------------------------------------- */
const quoteSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(quoteSection, '.reveal')

/* -- CTA ---------------------------------------- */
const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal', { stagger: 0.08 })

/* -- Data --------------------------------------- */
interface Film {
  title: string
  director: string
  category: string
  duration: string
  image: string
  alt: string
}

const programme: Film[] = [
  {
    title: 'Botanical Fidelity',
    director: 'Suki Yamada',
    category: 'Documentary',
    duration: '28 min',
    image: '/images/districts/fieldwork.webp',
    alt: 'Close-up of pressed botanical specimens illuminated by projection light',
  },
  {
    title: 'The Vast Void',
    director: 'Tomás Echeverría',
    category: 'Experimental',
    duration: '17 min',
    image: '/images/districts/the-provenance.webp',
    alt: 'Negative space between concrete pillars — high contrast, no human figures',
  },
  {
    title: 'Process Notes: Edition 3',
    director: 'Various — Meraki Collective',
    category: 'Video Essay',
    duration: '54 min',
    image: '/images/districts/the-collective.webp',
    alt: 'Split screen of studio processes — screen printing, welding, digital compositing',
  },
]

interface Guideline {
  title: string
  icon: string
  description: string
}

const guidelines: Guideline[] = [
  {
    title: 'Format',
    icon: 'aspect_ratio',
    description: 'Any moving-image format accepted. Film, digital, animation, motion graphics, hybrid. Minimum resolution 1080p for digital submissions.',
  },
  {
    title: 'Duration',
    icon: 'timer',
    description: 'No minimum, no maximum. The work takes the time it needs. Short-form and feature-length reviewed equally.',
  },
  {
    title: 'Review Cycle',
    icon: 'event_repeat',
    description: 'Submissions are reviewed on a monthly cycle by the screening committee. Expect a response within 30 days of submission.',
  },
  {
    title: 'Rights',
    icon: 'shield',
    description: 'All rights remain with the creator. The Frame holds a non-exclusive screening license for the programme duration. Nothing more.',
  },
]

interface Screening {
  title: string
  day: string
  month: string
  format: string
  venue: string
  status: string
  sealClass: string
}

const schedule: Screening[] = [
  {
    title: 'Structural Silences — Full Screening',
    day: '14',
    month: 'Apr',
    format: 'Feature',
    venue: 'Main Hall',
    status: 'Open',
    sealClass: 'seal-verified',
  },
  {
    title: 'Short Form Showcase: Spring Cycle',
    day: '28',
    month: 'Apr',
    format: 'Programme',
    venue: 'Wing B',
    status: 'Booking',
    sealClass: 'seal-associate',
  },
  {
    title: 'Process Notes: Live Edition',
    day: '11',
    month: 'May',
    format: 'Video Essay + Q&A',
    venue: 'The Pavilion',
    status: 'Confirmed',
    sealClass: 'seal-fellow',
  },
  {
    title: 'Botanical Fidelity — Director Present',
    day: '25',
    month: 'May',
    format: 'Documentary',
    venue: 'Main Hall',
    status: 'Coming Soon',
    sealClass: 'seal-associate',
  },
]
</script>

<style scoped>
/* =============================================
   HERO
   ============================================= */
.frame-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-16);
  text-align: center;
}

.frame-hero .overline-badge {
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
  max-width: 22ch;
  margin-left: auto;
  margin-right: auto;
}

.hero-title em { font-style: italic; }

.hero-stamp {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-12);
}

.hero-stamp-icon { font-size: 16px; color: var(--color-gold); }

.hero-image-frame { margin-bottom: var(--space-12); }
.hero-image-wrap { position: relative; overflow: hidden; }

.hero-image {
  width: 100%;
  height: auto;
  aspect-ratio: 2 / 1;
  object-fit: cover;
  display: block;
}

.hero-subtitle {
  font-size: var(--text-body);
  font-weight: 400;
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 58ch;
  margin: 0 auto var(--space-8);
}

.hero-ctas { display: flex; justify-content: center; }

.hero-cta-gold {
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

.hero-cta-gold:hover { opacity: 0.9; transform: translateY(-1px); }
.hero-cta-gold:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 4px; }

/* =============================================
   FEATURED SCREENING
   ============================================= */
.featured-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.featured-image-wrap { position: relative; }

.featured-image-img {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
}

.featured-exhibit-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-top: var(--space-4);
}

.featured-exhibit-badge .material-symbols-outlined { font-size: 14px; }

.featured-title {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  margin-bottom: var(--space-3);
}

.featured-title em { font-style: italic; }

.featured-director {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  margin-bottom: var(--space-6);
}

.featured-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-8);
  max-width: 48ch;
}

.featured-ctas {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.featured-cta-primary {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-bg);
  padding: var(--space-3) var(--space-6);
  background: var(--color-gold);
  background-image: none;
  transition: opacity var(--duration-normal) ease, transform var(--duration-normal) ease;
}

.featured-cta-primary:hover { opacity: 0.9; transform: translateY(-1px); }
.featured-cta-primary:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 4px; }

.featured-cta-ghost {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
  padding: var(--space-3) var(--space-6);
  border: 1px solid var(--color-border);
  background-image: none;
  transition: color var(--duration-normal) ease, border-color var(--duration-normal) ease;
}

.featured-cta-ghost:hover { color: var(--color-gold); border-color: var(--color-gold); }
.featured-cta-ghost:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 4px; }

/* =============================================
   PROGRAMME GRID
   ============================================= */
.programme-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: var(--space-12);
}

.programme-title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-dark-text);
}

.programme-title em { font-style: italic; }

.programme-view-all {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  transition: opacity var(--duration-normal) ease;
}

.programme-view-all:hover { opacity: 0.7; }

.programme-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--grid-gutter);
}

.programme-card {
  overflow: hidden;
}

.programme-image-wrap {
  position: relative;
  overflow: hidden;
}

.programme-image {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
}

.programme-duration {
  position: absolute;
  bottom: var(--space-3);
  right: var(--space-3);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  color: var(--color-dark-text);
  background: rgba(0, 0, 0, 0.85);
  padding: var(--space-1) var(--space-2);
}

.programme-card-body {
  padding: var(--space-5);
}

.programme-category {
  display: block;
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-2);
}

.programme-card-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  line-height: var(--leading-snug);
  color: var(--color-dark-text);
  margin-bottom: var(--space-1);
}

.programme-card-title em { font-style: italic; }

.programme-card-director {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
}

/* =============================================
   SUBMISSION GUIDELINES
   ============================================= */
.guidelines-inner {
  text-align: center;
}

.guidelines-heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  margin-bottom: var(--space-6);
}

.guidelines-heading em { font-style: italic; }

.guidelines-intro {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 58ch;
  margin: 0 auto var(--space-12);
}

.guidelines-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
  text-align: left;
}

.guideline-item {
  padding: var(--space-6);
  border: 1px solid var(--color-border);
}

.guideline-icon {
  font-size: 1.5rem;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}

.guideline-title {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 400;
  margin-bottom: var(--space-2);
}

.guideline-desc {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
}

/* =============================================
   SCREENING SCHEDULE
   ============================================= */
.schedule-header {
  margin-bottom: var(--space-12);
}

.schedule-title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-dark-text);
}

.schedule-title em { font-style: italic; }

.schedule-list {
  display: flex;
  flex-direction: column;
}

.schedule-row {
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: var(--space-8);
  align-items: center;
  padding: var(--space-6) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.schedule-row:first-child {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.schedule-date {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.schedule-day {
  font-size: var(--text-h2);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: 1;
  color: var(--color-dark-text);
}

.schedule-month {
  font-size: var(--text-overline);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

.schedule-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  line-height: var(--leading-snug);
  color: var(--color-dark-text);
  margin-bottom: var(--space-1);
}

.schedule-name em { font-style: italic; }

.schedule-meta {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
}

/* =============================================
   EDITORIAL QUOTE
   ============================================= */
.quote-block {
  text-align: center;
  padding: var(--space-8) 0;
}

.quote-text {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  color: var(--color-text);
  max-width: 28ch;
  margin: 0 auto var(--space-6);
}

.quote-attribution {
  font-size: var(--text-small);
  font-style: normal;
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
}

/* =============================================
   CTA
   ============================================= */
.frame-cta {
  padding: var(--section-gap) var(--content-padding);
}

.cta-inner {
  max-width: var(--width-narrow);
  margin: 0 auto;
  text-align: center;
}

.cta-icon {
  font-size: 2rem;
  color: var(--color-gold);
  margin-bottom: var(--space-6);
}

.cta-title {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
}

.cta-title em { font-style: italic; }

.cta-subtitle {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  margin-bottom: var(--space-8);
}

.cta-buttons {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
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
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  padding: var(--space-4) var(--space-8);
  border: 1px solid rgba(184, 150, 78, 0.3);
  background-image: none;
  transition: color var(--duration-normal) ease, border-color var(--duration-normal) ease;
}

.cta-button-ghost:hover { color: var(--color-gold); border-color: var(--color-gold); }
.cta-button-ghost:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 4px; }

/* =============================================
   RESPONSIVE
   ============================================= */
@media (max-width: 768px) {
  .frame-hero { padding-top: calc(var(--space-16) + 3rem); padding-bottom: var(--space-12); }
  .hero-image { aspect-ratio: 16 / 9; }
  .featured-grid { grid-template-columns: 1fr; }
  .programme-grid { grid-template-columns: 1fr; }
  .programme-header { flex-direction: column; align-items: flex-start; gap: var(--space-2); }
  .guidelines-grid { grid-template-columns: 1fr; }
  .schedule-row { grid-template-columns: 60px 1fr; gap: var(--space-4); }
  .schedule-status { grid-column: 1 / -1; justify-self: start; }
}

@media (max-width: 480px) {
  .hero-cta-gold,
  .featured-cta-primary,
  .featured-cta-ghost,
  .cta-button-gold,
  .cta-button-ghost {
    width: 100%;
    text-align: center;
  }
  .cta-buttons,
  .featured-ctas { flex-direction: column; }
}
</style>
