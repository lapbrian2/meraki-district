<template>
  <div class="monograph-page">

    <!-- ============================================
         HERO — Full-bleed image with creator name
    ============================================= -->
    <section ref="heroSection" class="monograph-hero section-dark">
      <div class="hero-image-full">
        <NuxtImg
          :src="creator.heroImage"
          :alt="`${creator.name} — ${creator.discipline}`"
          class="hero-bg archival-image"
          loading="eager"
          width="1600"
          height="900"
        />
        <div class="hero-overlay" />
        <div class="hero-content section-wide">
          <div class="hero-meta reveal">
            <span class="seal-base" :class="`seal-${creator.seal.toLowerCase()}`">
              {{ creator.seal }}
            </span>
            <span class="hero-discipline">{{ creator.discipline }}</span>
          </div>
          <h1 class="hero-name word-reveal">{{ creator.name }}</h1>
        </div>
      </div>
    </section>

    <!-- ============================================
         ARTIST STATEMENT — Pull quote + body
    ============================================= -->
    <section ref="statementSection" class="monograph-statement section section-dark">
      <div class="section-default">
        <div class="statement-grid">
          <blockquote class="statement-quote reveal">
            <p>&ldquo;{{ creator.pullQuote }}&rdquo;</p>
          </blockquote>
          <div class="statement-body reveal">
            <p>{{ creator.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PORTFOLIO GALLERY — Numbered plate entries
    ============================================= -->
    <section ref="gallerySection" class="monograph-gallery section section-dark">
      <div class="section-wide">
        <div class="gallery-header">
          <p class="overline reveal">Selected Works</p>
          <h2 class="gallery-title word-reveal"><em>Portfolio</em></h2>
        </div>

        <div class="gallery-grid">
          <article
            v-for="(work, i) in creator.portfolio"
            :key="work.title"
            class="gallery-entry reveal"
            :class="`gallery-entry--${(i % 3) + 1}`"
          >
            <div class="gallery-plate grayscale-hover">
              <NuxtImg
                :src="work.image"
                :alt="work.title"
                class="gallery-image archival-image"
                loading="lazy"
                width="640"
                height="480"
              />
            </div>
            <div class="gallery-caption">
              <span class="gallery-entry-number">Entry No. {{ String(i + 1).padStart(3, '0') }}</span>
              <h3 class="gallery-entry-title"><em>{{ work.title }}</em></h3>
              <p class="gallery-entry-desc">{{ work.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CURATOR'S NOTE
    ============================================= -->
    <section ref="curatorSection" class="monograph-curator section section-dark">
      <div class="section-narrow">
        <p class="overline reveal">Curator&rsquo;s Note</p>
        <blockquote class="curator-note reveal">
          <p><em>{{ creator.curatorNote }}</em></p>
        </blockquote>
        <p class="curator-cite reveal">&mdash; {{ creator.curatorName }}, Meraki Road Curatorial Committee</p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         METRICS — Single key metric
    ============================================= -->
    <section ref="metricsSection" class="monograph-metrics section section-dark">
      <div class="section-narrow metrics-inner">
        <span class="metrics-value reveal">{{ creator.metricValue }}</span>
        <span class="metrics-label reveal">{{ creator.metricLabel }}</span>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — Commission
    ============================================= -->
    <section ref="ctaSection" class="monograph-cta section section-dark">
      <div class="section-narrow cta-inner">
        <h2 class="cta-title word-reveal">
          <em>Work with {{ creator.name.split(' ')[0] }}.</em>
        </h2>
        <p class="cta-sub reveal">
          Commissions, consultations, and collaborative projects are arranged
          through The Bridge. All inquiries are reviewed by the practitioner directly.
        </p>
        <NuxtLink to="/bridge" class="cta-button-gold reveal">
          Commission This Practitioner &rarr;
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

/* -- Creator data registry ---------------------- */
interface PortfolioItem {
  title: string
  image: string
  description: string
}

interface Creator {
  slug: string
  name: string
  discipline: string
  seal: string
  heroImage: string
  pullQuote: string
  bio: string
  portfolio: PortfolioItem[]
  curatorNote: string
  curatorName: string
  metricValue: string
  metricLabel: string
}

const creators: Creator[] = [
  {
    slug: 'sable-chen',
    name: 'Sable Chen',
    discipline: 'Visual Art & AI',
    seal: 'Legacy',
    heroImage: '/images/districts/the-frame.webp',
    pullQuote: 'The machine does not dream. I do. The work lives in the gap between what it generates and what I recognize.',
    bio: 'Sable Chen works at the intersection of diffusion models, mixed media, and installation. Her practice treats generative systems not as endpoints but as collaborators in a larger conversation about authorship, pattern, and the irreducible strangeness of the image. Based between Shanghai and Berlin, she has exhibited across four continents and holds a permanent collection placement at the Museum of Digital Art, Zurich.',
    portfolio: [
      {
        title: 'Latent Garden',
        image: '/images/districts/meridian.webp',
        description: 'A series of large-format prints generated from a custom diffusion model trained on 19th-century botanical illustrations. Each piece is a single seed, never repeated.',
      },
      {
        title: 'The Weight of Inference',
        image: '/images/districts/the-collective.webp',
        description: 'An installation of 400 thermal-printed receipts, each containing a single AI-generated sentence about memory. Viewers take one. The piece diminishes over the course of the exhibition.',
      },
      {
        title: 'Residual Self',
        image: '/images/districts/the-frame.webp',
        description: 'A triptych of self-portraits created by feeding personal photographs through progressively degraded models. The final panel is nearly abstract — only the gesture remains.',
      },
    ],
    curatorNote: 'Chen\'s work resists the spectacle that defines so much AI art. Where others optimize for awe, she optimizes for honesty. The result is a body of work that feels less like technology and more like testimony.',
    curatorName: 'Maren Aoki',
    metricValue: '4,402',
    metricLabel: 'recorded interactions across six exhibitions',
  },
]

/* -- Route handling ----------------------------- */
const route = useRoute()
const slug = computed(() => route.params.slug as string)

const creator = computed(() => {
  return creators.find(c => c.slug === slug.value) || creators[0]
})

/* -- SEO ---------------------------------------- */
useHead({
  title: () => `${creator.value.name} — Fellow Monograph — Meraki Road`,
  meta: [
    { name: 'description', content: () => `${creator.value.name}: ${creator.value.discipline}. A deep portfolio and curatorial monograph on Meraki Road.` },
  ],
})

useSeoMeta({
  ogTitle: () => `${creator.value.name} — Fellow Monograph — Meraki Road`,
  ogDescription: () => `${creator.value.name}: ${creator.value.discipline}. A deep portfolio and curatorial monograph on Meraki Road.`,
  twitterTitle: () => `${creator.value.name} — Fellow Monograph — Meraki Road`,
  twitterDescription: () => `${creator.value.name}: ${creator.value.discipline}. A deep portfolio and curatorial monograph on Meraki Road.`,
})

/* -- Section refs ------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
const statementSection = ref<HTMLElement | null>(null)
const gallerySection = ref<HTMLElement | null>(null)
const curatorSection = ref<HTMLElement | null>(null)
const metricsSection = ref<HTMLElement | null>(null)
const ctaSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

useGsapScrollReveal(statementSection, '.reveal', { stagger: 0.1 })

useGsapScrollReveal(gallerySection, '.reveal', { stagger: 0.15 })
useWordReveal(gallerySection, '.word-reveal')

useGsapScrollReveal(curatorSection, '.reveal', { stagger: 0.1 })

useGsapScrollReveal(metricsSection, '.reveal')

useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal')
</script>

<style scoped>
/* ═══════════════════════════════════════════════
   CREATOR MONOGRAPH — Fellow Profile (Dark Theme)
   ═══════════════════════════════════════════════ */

/* ─── Hero — Full-bleed ─── */
.monograph-hero {
  position: relative;
  min-height: 80vh;
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
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(9, 9, 11, 0.95) 0%,
    rgba(9, 9, 11, 0.6) 40%,
    rgba(9, 9, 11, 0.2) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: var(--space-16) var(--content-padding);
}

.hero-meta {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}

.hero-discipline {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-muted);
}

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 300;
  font-style: italic;
  letter-spacing: var(--tracking-hero);
  line-height: var(--leading-display);
  color: var(--color-dark-text);
}

/* ─── Artist Statement ─── */
.statement-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: start;
}

.statement-quote {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  line-height: var(--leading-snug);
  border-left: 2px solid var(--color-gold);
  padding-left: var(--space-6);
}

.statement-body {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}

/* ─── Portfolio Gallery — Staggered grid ─── */
.gallery-header {
  margin-bottom: var(--space-16);
}

.gallery-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-8);
}

.gallery-entry--1 {
  grid-column: 1 / 8;
}

.gallery-entry--2 {
  grid-column: 6 / 13;
  margin-top: var(--space-16);
}

.gallery-entry--3 {
  grid-column: 2 / 9;
}

.gallery-plate {
  overflow: hidden;
  margin-bottom: var(--space-4);
}

.gallery-image {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.gallery-caption {
  padding-left: var(--space-2);
}

.gallery-entry-number {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  font-weight: 400;
  letter-spacing: var(--tracking-mega-wide);
  color: var(--color-gold);
  display: block;
  margin-bottom: var(--space-2);
}

.gallery-entry-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-2);
}

.gallery-entry-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
}

/* ─── Curator's Note ─── */
.monograph-curator {
  text-align: center;
}

.curator-note {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  line-height: var(--leading-snug);
  margin-top: var(--space-8);
  margin-bottom: var(--space-6);
}

.curator-cite {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
}

/* ─── Metrics ─── */
.metrics-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.metrics-value {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 8vw, 6rem);
  font-weight: 300;
  font-style: italic;
  color: var(--color-gold);
  line-height: 1;
  letter-spacing: var(--tracking-tight);
  margin-bottom: var(--space-4);
}

.metrics-label {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-muted);
}

/* ─── CTA ─── */
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
  margin-bottom: var(--space-6);
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
  .monograph-hero {
    min-height: 60vh;
  }

  .hero-name {
    font-size: clamp(2.5rem, 10vw, 4rem);
  }

  .hero-content {
    padding: var(--space-8) var(--content-padding);
  }

  .statement-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }

  .gallery-entry--1,
  .gallery-entry--2,
  .gallery-entry--3 {
    grid-column: 1 / -1;
    margin-top: 0;
  }

  .monograph-cta {
    padding-top: var(--space-24);
    padding-bottom: var(--space-24);
  }
}
</style>
