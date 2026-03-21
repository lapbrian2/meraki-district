<template>
  <div class="circuit-page">

    <!-- ============================================
         HERO — The Circuit introduction
    ============================================= -->
    <section ref="heroSection" class="circuit-hero section section-dark">
      <div class="section-default">
        <p class="overline reveal">The Circuit</p>
        <h1 class="circuit-hero-title word-reveal">
          <em>Where the work meets its audience.</em>
        </h1>
        <p class="circuit-hero-sub reveal">
          A curated index of exhibitions, residencies, and gatherings across
          the global creative frontier. Each event is selected by the Meraki Road
          curatorial committee for its commitment to craft over spectacle.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         FEATURED EXHIBITIONS — Card grid
    ============================================= -->
    <section ref="exhibitionsSection" class="circuit-exhibitions section section-dark">
      <div class="section-wide">
        <div class="exhibitions-header">
          <p class="overline reveal">Featured Exhibitions</p>
          <h2 class="exhibitions-title word-reveal"><em>Currently on view</em></h2>
        </div>

        <div class="exhibitions-grid">
          <article
            v-for="(exhibition, i) in exhibitions"
            :key="exhibition.title"
            class="exhibition-card vellum-card reveal"
          >
            <div class="exhibition-image-wrap grayscale-hover">
              <NuxtImg
                :src="exhibition.image"
                :alt="exhibition.title"
                class="exhibition-image archival-image"
                loading="lazy"
                width="800"
                height="500"
              />
            </div>
            <div class="exhibition-body">
              <span class="exhibition-location">{{ exhibition.location }}</span>
              <h3 class="exhibition-title"><em>{{ exhibition.title }}</em></h3>
              <p class="exhibition-statement">{{ exhibition.statement }}</p>
              <NuxtLink :to="exhibition.ctaLink" class="exhibition-cta">
                {{ exhibition.ctaLabel }} &rarr;
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — Submit a proposal
    ============================================= -->
    <section ref="ctaSection" class="circuit-cta section section-dark">
      <div class="section-narrow cta-inner">
        <p class="overline reveal">Open Call</p>
        <h2 class="cta-title word-reveal">
          <em>Have a body of work that deserves a room?</em>
        </h2>
        <p class="cta-sub reveal">
          The Circuit accepts exhibition proposals on a rolling basis.
          Selected proposals receive curatorial support, venue coordination,
          and placement within the Meraki Road archive.
        </p>
        <NuxtLink to="/apply" class="cta-button-gold reveal">
          Submit an Exhibition Proposal &rarr;
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

/* -- SEO ---------------------------------------- */
useHead({
  title: 'The Circuit — Meraki Road',
  meta: [
    { name: 'description', content: 'The Circuit: a curated exhibition directory from Meraki Road. Exhibitions, residencies, and gatherings where the work meets its audience.' },
  ],
})

useSeoMeta({
  ogTitle: 'The Circuit — Meraki Road',
  ogDescription: 'A curated exhibition directory from Meraki Road. Exhibitions, residencies, and gatherings where the work meets its audience.',
  twitterTitle: 'The Circuit — Meraki Road',
  twitterDescription: 'A curated exhibition directory from Meraki Road. Exhibitions, residencies, and gatherings where the work meets its audience.',
})

/* -- Section refs ------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
const exhibitionsSection = ref<HTMLElement | null>(null)
const ctaSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

useGsapScrollReveal(exhibitionsSection, '.reveal', { stagger: 0.12 })
useWordReveal(exhibitionsSection, '.word-reveal')

useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal')

/* -- Data --------------------------------------- */
interface Exhibition {
  title: string
  location: string
  image: string
  statement: string
  ctaLabel: string
  ctaLink: string
}

const exhibitions: Exhibition[] = [
  {
    title: 'Vellum Residency',
    location: 'Milan, Italy',
    image: '/images/districts/the-frame.webp',
    statement: 'A month-long residency examining the intersection of analog printmaking and computational design.',
    ctaLabel: 'Request Private View',
    ctaLink: '/apply',
  },
  {
    title: 'Kinetic Stills',
    location: 'Tokyo, Japan',
    image: '/images/districts/meridian.webp',
    statement: 'Moving image works frozen at their most decisive moment. Twelve practitioners, twelve frames.',
    ctaLabel: 'View Monograph',
    ctaLink: '/apply',
  },
  {
    title: 'The Monolith',
    location: 'New York, USA',
    image: '/images/districts/the-collective.webp',
    statement: 'A group exhibition exploring architectural permanence in an era of digital ephemerality.',
    ctaLabel: 'Register',
    ctaLink: '/apply',
  },
]
</script>

<style scoped>
/* ═══════════════════════════════════════════════
   CIRCUIT PAGE — Exhibition Index (Dark Theme)
   ═══════════════════════════════════════════════ */

/* ─── Hero ─── */
.circuit-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  min-height: 60vh;
  display: flex;
  align-items: flex-end;
}

.circuit-hero-title {
  font-size: var(--text-display);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-display);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  max-width: 18ch;
}

.circuit-hero-sub {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
}

/* ─── Exhibitions Grid ─── */
.exhibitions-header {
  margin-bottom: var(--space-16);
}

.exhibitions-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.exhibitions-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
}

.exhibition-card {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 0;
  overflow: hidden;
}

.exhibition-image-wrap {
  overflow: hidden;
  aspect-ratio: 16 / 10;
}

.exhibition-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.exhibition-body {
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.exhibition-location {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}

.exhibition-title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  line-height: var(--leading-snug);
  margin-bottom: var(--space-4);
}

.exhibition-statement {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 40ch;
  margin-bottom: var(--space-6);
}

.exhibition-cta {
  display: inline-block;
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-text);
  padding: var(--space-3) var(--space-6);
  border: 1px solid rgba(250, 250, 249, 0.2);
  background: transparent;
  background-image: none;
  transition: border-color var(--duration-normal) ease,
              color var(--duration-normal) ease,
              background-color var(--duration-normal) ease;
  align-self: flex-start;
}

.exhibition-cta:hover {
  border-color: var(--color-gold);
  color: var(--color-background);
  background-color: var(--color-gold);
  background-size: 0;
}

.exhibition-cta:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

/* ─── CTA Section ─── */
.circuit-cta {
  padding-top: var(--space-48);
  padding-bottom: var(--space-48);
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
  max-width: 20ch;
}

.cta-sub {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin-bottom: var(--space-8);
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

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .circuit-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-16);
    min-height: auto;
  }

  .circuit-hero-title {
    max-width: none;
  }

  .exhibition-card {
    grid-template-columns: 1fr;
  }

  .exhibition-image-wrap {
    aspect-ratio: 16 / 9;
  }

  .exhibition-body {
    padding: var(--space-6);
  }

  .circuit-cta {
    padding-top: var(--space-24);
    padding-bottom: var(--space-24);
  }
}
</style>
