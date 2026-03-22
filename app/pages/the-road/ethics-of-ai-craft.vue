<template>
  <div class="essay-page">

    <!-- ============================================
         HERO — Full-bleed essay header
    ============================================= -->
    <section ref="heroSection" class="essay-hero section-dark">
      <div class="hero-image-full">
        <NuxtImg
          src="/images/districts/the-road.webp"
          alt="The Ethics of AI Craft"
          class="hero-bg"
          loading="eager"
          width="1600"
          height="900"
        />
        <div class="hero-overlay" />
        <div class="hero-vignette" />
        <div class="hero-content section-wide">
          <div class="hero-meta reveal">
            <span class="stamped-overline">District 02 — Editorial Monograph</span>
          </div>
          <h1 class="hero-title word-reveal">The Ethics of AI Craft</h1>
          <div class="hero-byline reveal">
            <span class="hero-author">Meraki Publishing House</span>
            <span class="hero-date">March 2026</span>
            <span class="hero-reading">12 min read</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         PREFACE — Curator quote
    ============================================= -->
    <section ref="prefaceSection" class="essay-preface section section-dark">
      <div class="section-narrow">
        <blockquote class="preface-quote reveal">
          <p>&ldquo;The question is not whether machines can create. The question is whether we can remain honest about what creation costs when the machine bears none of it.&rdquo;</p>
          <cite class="preface-cite">&mdash; Curatorial Committee, Meraki Road</cite>
        </blockquote>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         SECTION A — The Erosion of Intent
    ============================================= -->
    <section ref="sectionARef" class="essay-section section section-dark">
      <div class="section-narrow">
        <h2 class="essay-heading word-reveal"><em>The Erosion of Intent</em></h2>
        <div class="essay-prose reveal">
          <p>
            Every craft tradition carries an implicit bargain: time exchanged for understanding.
            The woodworker learns grain by ruining good lumber. The painter discovers color
            through years of mixing pigment that dries wrong. The developer debugs at three
            in the morning because the system does not care about intentions — only instructions.
          </p>
          <p>
            Generative tools do not honor this bargain. They compress centuries of accumulated
            technique into a single inference step, producing outputs that resemble mastery
            without requiring the practitioner to have earned any of it. The result looks
            like craft. The process was not.
          </p>
          <p>
            This is not an argument against the tools. It is an argument for honesty about what
            they change. When the resistance is removed from practice, something important goes
            with it — and the first step toward ethical use is naming what was lost.
          </p>
        </div>
      </div>
    </section>

    <!-- ============================================
         IMAGE PAIR — Visual metaphor
    ============================================= -->
    <section ref="imagePairSection" class="essay-images section section-dark">
      <div class="section-wide">
        <div class="image-pair reveal">
          <figure class="image-figure">
            <NuxtImg
              src="/images/districts/the-frame.webp"
              alt="Analog process"
              class="essay-image archival-image"
              loading="lazy"
              width="640"
              height="480"
            />
            <figcaption class="image-caption">Plate 081 — The hand that resists</figcaption>
          </figure>
          <figure class="image-figure">
            <NuxtImg
              src="/images/districts/meridian.webp"
              alt="Computational process"
              class="essay-image archival-image"
              loading="lazy"
              width="640"
              height="480"
            />
            <figcaption class="image-caption">Plate 082 — The model that infers</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         SECTION B — The New Synthetic Scribe
    ============================================= -->
    <section ref="sectionBRef" class="essay-section section section-dark">
      <div class="section-narrow">
        <h2 class="essay-heading word-reveal"><em>The New Synthetic Scribe</em></h2>
        <div class="essay-prose reveal">
          <p>
            If the tools are here to stay — and they are — then the ethical framework
            cannot be prohibition. It must be protocol. A set of standards that distinguish
            between using generative systems as a shortcut and using them as a collaborator.
          </p>
          <p>
            The difference is not technical. It is intentional. A shortcut replaces the
            practitioner's judgment. A collaboration extends it. The output may look identical.
            The practitioner's relationship to the work is entirely different.
          </p>
        </div>
      </div>
    </section>

    <!-- ============================================
         PRINCIPLES — Three-column cards
    ============================================= -->
    <section ref="principlesSection" class="essay-principles section section-dark">
      <div class="section-wide">
        <div class="principles-grid">
          <div
            v-for="principle in principles"
            :key="principle.title"
            class="principle-card vellum-card reveal"
          >
            <span class="material-symbols-outlined principle-icon">{{ principle.icon }}</span>
            <h3 class="principle-title">{{ principle.title }}</h3>
            <p class="principle-desc">{{ principle.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         SECTION C — The Standard
    ============================================= -->
    <section ref="sectionCRef" class="essay-section section section-dark">
      <div class="section-narrow">
        <h2 class="essay-heading word-reveal"><em>The Standard We Keep</em></h2>
        <div class="essay-prose reveal">
          <p>
            At Meraki Road, we do not ban generative tools. We require practitioners
            to declare their use, describe their intent, and demonstrate that the human
            judgment in the work exceeds the computational contribution. This is not
            a percentage. It is a posture.
          </p>
          <p>
            The provenance of every piece in the archive includes a process disclosure.
            Not because we believe in surveillance, but because we believe in legibility.
            If you cannot explain how you made something, you do not yet understand what
            you made. And if you do not understand it, you cannot honestly call it yours.
          </p>
          <p>
            This is the standard. It is not perfect. It will evolve as the tools do.
            But it begins with a principle that will not change: the practitioner
            owes the audience an honest account of how the work came to be.
          </p>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CLOSURE — End CTA
    ============================================= -->
    <section ref="closureSection" class="essay-closure section section-dark">
      <div class="section-narrow cta-inner">
        <p class="overline reveal">End of Monograph</p>
        <h2 class="cta-title word-reveal">
          <em>The conversation continues on The Road.</em>
        </h2>
        <p class="cta-sub reveal">
          This essay is part of an ongoing editorial series from Meraki Publishing House.
          Each volume examines a different dimension of creative practice in the age
          of computation.
        </p>
        <div class="cta-buttons reveal">
          <NuxtLink to="/the-road" class="cta-button-gold">
            Return to The Road &rarr;
          </NuxtLink>
          <NuxtLink to="/apply" class="cta-button-ghost">
            Request Fellowship
          </NuxtLink>
        </div>

        <div class="essay-archive-note reveal">
          <span class="archive-note-label">Archive Reference</span>
          <span class="archive-note-value">MR-PUB-2026-003 / Ethics Series Vol. I</span>
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
  title: 'The Ethics of AI Craft — The Road — Meraki Road',
  meta: [
    { name: 'description', content: 'An editorial monograph on the ethics of generative tools in creative practice. From Meraki Publishing House.' },
  ],
})

useSeoMeta({
  ogTitle: 'The Ethics of AI Craft — The Road — Meraki Road',
  ogDescription: 'An editorial monograph on the ethics of generative tools in creative practice.',
  twitterTitle: 'The Ethics of AI Craft — The Road — Meraki Road',
  twitterDescription: 'An editorial monograph on the ethics of generative tools in creative practice.',
})

/* -- Section refs ------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
const prefaceSection = ref<HTMLElement | null>(null)
const sectionARef = ref<HTMLElement | null>(null)
const imagePairSection = ref<HTMLElement | null>(null)
const sectionBRef = ref<HTMLElement | null>(null)
const principlesSection = ref<HTMLElement | null>(null)
const sectionCRef = ref<HTMLElement | null>(null)
const closureSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

useGsapScrollReveal(prefaceSection, '.reveal')

useGsapScrollReveal(sectionARef, '.reveal')
useWordReveal(sectionARef, '.word-reveal')

useGsapScrollReveal(imagePairSection, '.reveal', { stagger: 0.15 })

useGsapScrollReveal(sectionBRef, '.reveal')
useWordReveal(sectionBRef, '.word-reveal')

useGsapScrollReveal(principlesSection, '.reveal', { stagger: 0.1 })

useGsapScrollReveal(sectionCRef, '.reveal')
useWordReveal(sectionCRef, '.word-reveal')

useGsapScrollReveal(closureSection, '.reveal')
useWordReveal(closureSection, '.word-reveal')

/* -- Data --------------------------------------- */
interface Principle {
  icon: string
  title: string
  description: string
}

const principles: Principle[] = [
  {
    icon: 'verified',
    title: 'Archival Integrity',
    description: 'Every work in the collection carries a provenance record. Process disclosure is not optional — it is the foundation of institutional trust.',
  },
  {
    icon: 'auto_awesome',
    title: 'Synthetic Honesty',
    description: 'Generative tools are collaborators, not ghost writers. The practitioner declares their use and demonstrates that human judgment drove the outcome.',
  },
  {
    icon: 'gavel',
    title: 'Ethical Accountability',
    description: 'If the process cannot be explained, the work cannot be archived. Legibility is the minimum standard for institutional inclusion.',
  },
]
</script>

<style scoped>
/* ═══════════════════════════════════════════════
   ETHICS ESSAY — Long-form Monograph (Dark)
   ═══════════════════════════════════════════════ */

/* ─── Hero — Full-bleed ─── */
.essay-hero {
  position: relative;
  min-height: 75vh;
  display: flex;
  align-items: flex-end;
}

.hero-image-full {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.hero-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(60%) brightness(0.5);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(9, 9, 11, 0.95) 0%,
    rgba(9, 9, 11, 0.5) 50%,
    rgba(9, 9, 11, 0.2) 100%
  );
}

.hero-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.6) 100%);
  pointer-events: none;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: var(--space-16) var(--content-padding);
}

.hero-meta {
  margin-bottom: var(--space-6);
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 300;
  font-style: italic;
  letter-spacing: var(--tracking-hero);
  line-height: var(--leading-display);
  color: var(--color-dark-text);
  text-shadow: 0 4px 60px rgba(0,0,0,0.8);
  max-width: 16ch;
  margin-bottom: var(--space-6);
}

.hero-byline {
  display: flex;
  gap: var(--space-6);
  flex-wrap: wrap;
}

.hero-author,
.hero-date,
.hero-reading {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
  opacity: 0.6;
}

/* ─── Preface Quote ─── */
.preface-quote {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  line-height: var(--leading-snug);
  border-left: 2px solid var(--color-gold);
  padding-left: var(--space-6);
  margin: 0;
}

.preface-cite {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-style: normal;
  color: var(--color-gold);
  letter-spacing: var(--tracking-wide);
  margin-top: var(--space-6);
}

/* ─── Essay Prose ─── */
.essay-heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  letter-spacing: var(--tracking-hero);
  line-height: var(--leading-snug);
  margin-bottom: var(--space-8);
}

.essay-prose p {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
  max-width: 65ch;
}

.essay-prose p:last-child {
  margin-bottom: 0;
}

/* ─── Image Pair ─── */
.image-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
}

.image-figure {
  margin: 0;
}

.essay-image {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.image-caption {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
  margin-top: var(--space-3);
  opacity: 0.6;
}

/* ─── Principles Grid ─── */
.principles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.principle-card {
  padding: var(--space-8) var(--space-6);
  border: 1px solid var(--rule-color);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.principle-icon {
  font-size: 1.5rem;
  color: var(--color-gold);
  opacity: 0.7;
}

.principle-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
}

.principle-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}

/* ─── Closure CTA ─── */
.essay-closure {
  padding-top: var(--space-48);
  padding-bottom: var(--space-32);
}

.cta-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-title {
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  letter-spacing: var(--tracking-hero);
  line-height: var(--leading-snug);
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);
  max-width: 22ch;
}

.cta-sub {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin-bottom: var(--space-8);
}

.cta-buttons {
  display: flex;
  gap: var(--space-4);
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: var(--space-16);
}

.cta-button-gold {
  display: inline-block;
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  padding: var(--space-4) var(--space-8);
  border: 1px solid var(--color-gold);
  color: var(--color-background);
  background-color: var(--color-gold);
  background-image: none;
  transition: background-color var(--duration-normal) ease,
              border-color var(--duration-normal) ease;
}

.cta-button-gold:hover {
  background-color: #a07f3e;
  border-color: #a07f3e;
  background-size: 0;
}

.cta-button-gold:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

.cta-button-ghost {
  display: inline-block;
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  padding: var(--space-4) var(--space-8);
  border: 1px solid rgba(184, 150, 78, 0.4);
  color: var(--color-gold);
  background: transparent;
  transition: border-color var(--duration-normal) ease,
              background-color var(--duration-normal) ease;
}

.cta-button-ghost:hover {
  border-color: var(--color-gold);
  background: rgba(184, 150, 78, 0.08);
}

.cta-button-ghost:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

/* ─── Archive Note ─── */
.essay-archive-note {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-6);
  border: 1px solid var(--rule-color);
  text-align: center;
}

.archive-note-label {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  font-weight: 400;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  opacity: 0.5;
}

.archive-note-value {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
}

/* ─── Reduced Motion ─── */
@media (prefers-reduced-motion: reduce) {
  .hero-title {
    text-shadow: none;
  }
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .essay-hero {
    min-height: 60vh;
  }

  .hero-title {
    font-size: clamp(2rem, 8vw, 3rem);
    max-width: none;
  }

  .hero-content {
    padding: var(--space-8) var(--content-padding);
  }

  .hero-byline {
    gap: var(--space-4);
  }

  .image-pair {
    grid-template-columns: 1fr;
  }

  .principles-grid {
    grid-template-columns: 1fr;
  }

  .essay-closure {
    padding-top: var(--space-24);
    padding-bottom: var(--space-16);
  }

  .cta-buttons {
    flex-direction: column;
    width: 100%;
  }

  .cta-button-gold,
  .cta-button-ghost {
    width: 100%;
    text-align: center;
  }
}
</style>
