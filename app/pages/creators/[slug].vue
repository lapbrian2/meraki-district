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
        <div class="hero-vignette" />
        <div class="hero-content section-wide">
          <div class="hero-meta reveal">
            <span class="seal-base" :class="`seal-${creator.seal.toLowerCase()}`">
              {{ creator.seal }}
            </span>
            <span class="hero-discipline">{{ creator.discipline }}</span>
          </div>
          <h1 class="hero-name word-reveal">{{ creator.name }}</h1>
          <p v-if="creator.registryId" class="hero-registry reveal">
            Registry {{ creator.registryId }}
          </p>
        </div>
      </div>
    </section>

    <!-- ============================================
         CURATOR'S FOREWORD — Pull quote + body
    ============================================= -->
    <section ref="forewordSection" class="monograph-foreword section section-dark">
      <div class="section-default">
        <div class="foreword-header">
          <p class="overline reveal">{{ creator.district || 'Fellow Monograph' }}</p>
          <h2 class="foreword-heading word-reveal"><em>The Curator&rsquo;s Foreword</em></h2>
        </div>
        <div class="foreword-grid">
          <blockquote class="foreword-quote reveal">
            <p>&ldquo;{{ creator.pullQuote }}&rdquo;</p>
            <cite class="foreword-cite">&mdash; {{ creator.curatorName }}</cite>
          </blockquote>
          <div class="foreword-body reveal">
            <p>{{ creator.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         EXHIBITION METADATA — Key stats row
    ============================================= -->
    <section ref="metadataSection" class="monograph-metadata section section-dark">
      <div class="section-default">
        <div class="metadata-grid">
          <div class="metadata-card reveal">
            <span class="metadata-label">District</span>
            <span class="metadata-value">{{ creator.district || 'Meraki Studio' }}</span>
          </div>
          <div class="metadata-card reveal">
            <span class="metadata-label">Seal</span>
            <span class="metadata-value">{{ creator.seal }}</span>
          </div>
          <div class="metadata-card reveal">
            <span class="metadata-label">Portfolio Entries</span>
            <span class="metadata-value">{{ creator.portfolio.length }}</span>
          </div>
          <div class="metadata-card reveal">
            <span class="metadata-label">Total Interactions</span>
            <span class="metadata-value">{{ creator.metricValue }}</span>
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
          <h2 class="gallery-title word-reveal"><em>The Collection</em></h2>
        </div>

        <div class="gallery-grid">
          <article
            v-for="(work, i) in creator.portfolio"
            :key="work.title"
            class="gallery-entry reveal"
            :class="`gallery-entry--${(i % 4) + 1}`"
          >
            <span class="gallery-plate-number">Plate No. {{ String(i + 1).padStart(3, '0') }}</span>
            <div class="gallery-plate">
              <span v-if="i === 0" class="gallery-curators-selection">Curator&rsquo;s Selection</span>
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
              <p v-if="work.medium" class="gallery-entry-medium">{{ work.medium }}<span v-if="work.year">, {{ work.year }}</span></p>
              <p class="gallery-entry-desc">{{ work.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         TECHNICAL SCHEMA — Process + Specs
    ============================================= -->
    <section v-if="creator.technicalSpecs" ref="schemaSection" class="monograph-schema section section-dark">
      <div class="section-default">
        <div class="schema-header">
          <p class="overline reveal">Process</p>
          <h2 class="schema-title word-reveal"><em>Workflow Architecture</em></h2>
        </div>
        <div class="schema-grid">
          <div class="schema-workflow reveal">
            <div
              v-for="(step, i) in creator.technicalSpecs.workflow"
              :key="step"
              class="schema-step"
            >
              <span class="schema-step-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="schema-step-label">{{ step }}</span>
            </div>
          </div>
          <div class="schema-specs reveal">
            <h3 class="schema-specs-heading">Technical Specifications</h3>
            <div
              v-for="spec in creator.technicalSpecs.specs"
              :key="spec.label"
              class="schema-spec-row"
            >
              <span class="schema-spec-label">{{ spec.label }}</span>
              <span class="schema-spec-value">{{ spec.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider v-if="creator.technicalSpecs" />

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
        <div class="cta-buttons reveal">
          <NuxtLink to="/bridge" class="cta-button-gold">
            Commission Work &rarr;
          </NuxtLink>
          <NuxtLink to="/bridge" class="cta-button-ghost">
            View on Bridge
          </NuxtLink>
        </div>
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
  medium?: string
  year?: string
}

interface TechnicalSpec {
  label: string
  value: string
}

interface TechnicalSpecs {
  workflow: string[]
  specs: TechnicalSpec[]
}

interface Creator {
  slug: string
  name: string
  discipline: string
  seal: string
  heroImage: string
  pullQuote: string
  bio: string
  district?: string
  registryId?: string
  portfolio: PortfolioItem[]
  curatorNote: string
  curatorName: string
  metricValue: string
  metricLabel: string
  technicalSpecs?: TechnicalSpecs
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
        medium: 'Digital Lithograph',
        year: '2025',
      },
      {
        title: 'The Weight of Inference',
        image: '/images/districts/the-collective.webp',
        description: 'An installation of 400 thermal-printed receipts, each containing a single AI-generated sentence about memory. Viewers take one. The piece diminishes over the course of the exhibition.',
        medium: 'Thermal Print Installation',
        year: '2024',
      },
      {
        title: 'Residual Self',
        image: '/images/districts/the-frame.webp',
        description: 'A triptych of self-portraits created by feeding personal photographs through progressively degraded models. The final panel is nearly abstract — only the gesture remains.',
        medium: 'Mixed Generative Media',
        year: '2024',
      },
    ],
    curatorNote: 'Chen\'s work resists the spectacle that defines so much AI art. Where others optimize for awe, she optimizes for honesty. The result is a body of work that feels less like technology and more like testimony.',
    curatorName: 'Maren Aoki',
    metricValue: '4,402',
    metricLabel: 'recorded interactions across six exhibitions',
  },
  {
    slug: 'elena-voss',
    name: 'Elena Voss',
    discipline: 'Spatial Installation & Light Sculpture',
    seal: 'Fellow',
    heroImage: '/images/districts/the-frame.webp',
    pullQuote: 'I don\'t illuminate spaces. I reveal the darkness that was always there.',
    bio: 'Elena Voss constructs immersive environments where architecture dissolves into light. Her installations transform industrial spaces into meditative chambers, using precisely calibrated LEDs and reflective surfaces to alter the viewer\'s perception of scale and time. Trained in physics and sculpture at the Royal College of Art, Voss treats light not as medium but as material — something with weight, texture, and consequence.',
    district: 'District 11',
    registryId: 'EV-11-0982-F',
    portfolio: [
      {
        title: 'Threshold Study No. 7',
        image: '/images/districts/meridian.webp',
        description: 'A site-specific installation in a decommissioned power station. 200 suspended LED filaments respond to ambient sound, creating a breathing luminous field that maps the architecture of silence.',
        medium: 'LED Filament Array, Sound Sensor',
        year: '2026',
      },
      {
        title: 'Negative Volume',
        image: '/images/districts/the-collective.webp',
        description: 'A chamber of blackout panels and edge-lit glass that inverts the viewer\'s sense of interior and exterior. Exhibited at the Venice Architecture Biennale.',
        medium: 'Blackout Panel, Edge-Lit Glass',
        year: '2025',
      },
      {
        title: 'After Image',
        image: '/images/districts/the-frame.webp',
        description: 'A triptych of rooms calibrated to specific wavelengths. Visitors move through blue, amber, and ultraviolet chambers, each altering color perception for minutes afterward.',
        medium: 'Wavelength-Calibrated Light Chamber',
        year: '2025',
      },
      {
        title: 'Latent Space Cartography',
        image: '/images/districts/meridian.webp',
        description: 'A neural mapping study that translates trained model weights into spatial coordinates. Light paths through the installation trace the decision boundaries of a vision model.',
        medium: 'Neural Mapping Study',
        year: '2024',
      },
    ],
    technicalSpecs: {
      workflow: ['Environmental Survey', 'Light Spectrum Analysis', 'Spatial Calibration', 'Perceptual Testing', 'Installation Deployment'],
      specs: [
        { label: 'Sampling Rate', value: '48kHz ambient audio' },
        { label: 'Memory Depth', value: '72hr rolling archive' },
        { label: 'Diffusion Steps', value: '150 per generation cycle' },
        { label: 'Seed Entropy', value: 'Environmental (non-deterministic)' },
      ],
    },
    curatorNote: 'Voss doesn\'t build installations — she builds perceptual conditions. Her work reminds us that light is not decoration. It is architecture\'s most honest material.',
    curatorName: 'Haruto Ise',
    metricValue: '7,231',
    metricLabel: 'recorded interactions across fourteen exhibitions',
  },
  {
    slug: 'tomas-vega',
    name: 'Tomas Vega',
    discipline: 'Generative Architecture & Computational Form',
    seal: 'Verified',
    heroImage: '/images/districts/meridian.webp',
    pullQuote: 'Architecture should compute itself into existence.',
    bio: 'Tomas Vega works at the intersection of algorithmic design and physical fabrication. His structures emerge from recursive computational processes, each iteration refining form through environmental data and material constraints.',
    portfolio: [
      {
        title: 'Recursive Pavilion',
        image: '/images/districts/the-frame.webp',
        description: 'A self-similar timber structure generated from a single branching algorithm. Each joint angle is derived from local wind data collected over twelve months.',
        medium: 'Algorithmic Timber Structure',
        year: '2025',
      },
      {
        title: 'Erosion Machine',
        image: '/images/districts/the-collective.webp',
        description: 'A concrete form shaped by simulated weathering. The algorithm applies ten thousand years of erosion in forty-eight hours of computation.',
        medium: 'Simulated Concrete Erosion',
        year: '2024',
      },
      {
        title: 'Latent Facade',
        image: '/images/districts/meridian.webp',
        description: 'A building skin whose panel geometry is derived from a neural network trained on vernacular architecture. No two panels share the same dimensions.',
        medium: 'Neural-Derived Panel System',
        year: '2024',
      },
    ],
    curatorNote: 'Vega treats computation not as a tool but as a collaborator with its own aesthetic instincts. His buildings feel grown rather than designed — which is precisely the point.',
    curatorName: 'Lena Ortiz',
    metricValue: '4,892',
    metricLabel: 'recorded interactions across eight exhibitions',
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
const forewordSection = ref<HTMLElement | null>(null)
const metadataSection = ref<HTMLElement | null>(null)
const gallerySection = ref<HTMLElement | null>(null)
const schemaSection = ref<HTMLElement | null>(null)
const curatorSection = ref<HTMLElement | null>(null)
const metricsSection = ref<HTMLElement | null>(null)
const ctaSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

useGsapScrollReveal(forewordSection, '.reveal', { stagger: 0.1 })
useWordReveal(forewordSection, '.word-reveal')

useGsapScrollReveal(metadataSection, '.reveal', { stagger: 0.1 })

useGsapScrollReveal(gallerySection, '.reveal', { stagger: 0.15 })
useWordReveal(gallerySection, '.word-reveal')

useGsapScrollReveal(schemaSection, '.reveal', { stagger: 0.08 })
useWordReveal(schemaSection, '.word-reveal')

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

.hero-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.6) 100%);
  pointer-events: none;
  z-index: 1;
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
  text-shadow: 0 4px 60px rgba(0,0,0,0.8);
}

.hero-registry {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  margin-top: var(--space-4);
  opacity: 0.5;
}

/* ─── Curator's Foreword ─── */
.foreword-header {
  margin-bottom: var(--space-12);
}

.foreword-heading {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.foreword-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: start;
}

.foreword-quote {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  line-height: var(--leading-snug);
  border-left: 2px solid var(--color-gold);
  padding-left: var(--space-6);
}

.foreword-cite {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-style: normal;
  color: var(--color-gold);
  letter-spacing: var(--tracking-wide);
  margin-top: var(--space-4);
}

.foreword-body {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}

/* ─── Exhibition Metadata ─── */
.metadata-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
}

.metadata-card {
  border: 1px solid rgba(184, 150, 78, 0.2);
  padding: var(--space-6) var(--space-4);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.metadata-label {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  font-weight: 400;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
}

.metadata-value {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
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

.gallery-entry--4 {
  grid-column: 5 / 13;
  margin-top: var(--space-16);
}

.gallery-plate-number {
  font-family: var(--font-mono);
  font-size: var(--text-overline);
  font-weight: 400;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-gold);
  display: block;
  margin-bottom: var(--space-3);
  opacity: 0.7;
}

.gallery-plate {
  overflow: hidden;
  margin-bottom: var(--space-4);
  position: relative;
}

.gallery-curators-selection {
  position: absolute;
  top: var(--space-4);
  left: var(--space-4);
  z-index: 2;
  font-family: var(--font-mono);
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-ink);
  background: var(--color-gold);
  padding: 4px 10px;
}

.gallery-image {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.7s ease, transform 0.7s ease;
}

.gallery-plate:hover .gallery-image {
  filter: grayscale(0);
  transform: scale(1.02);
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

.gallery-entry-medium {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
  margin-bottom: var(--space-2);
  opacity: 0.6;
}

.gallery-entry-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
}

/* ─── Technical Schema ─── */
.schema-header {
  margin-bottom: var(--space-12);
}

.schema-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.schema-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
}

.schema-workflow {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.schema-step {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--rule-color);
}

.schema-step:first-child {
  border-top: 1px solid var(--rule-color);
}

.schema-step-num {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  color: var(--color-gold);
  opacity: 0.6;
  min-width: 2rem;
}

.schema-step-label {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-dark-text);
}

.schema-specs-heading {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-6);
}

.schema-spec-row {
  display: flex;
  justify-content: space-between;
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--rule-color);
}

.schema-spec-row:first-of-type {
  border-top: 1px solid var(--rule-color);
}

.schema-spec-label {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
}

.schema-spec-value {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-dark-text);
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
  background-color: var(--color-gold-accessible);
  border-color: var(--color-gold-accessible);
  background-size: 0;
}

.cta-button-gold:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

.cta-buttons {
  display: flex;
  gap: var(--space-4);
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
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

/* ─── Reduced Motion ─── */
@media (prefers-reduced-motion: reduce) {
  .hero-name {
    text-shadow: none;
  }
  .gallery-image {
    transition: none;
  }
  .gallery-plate:hover .gallery-image {
    transform: none;
  }
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

  .foreword-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .metadata-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }

  .gallery-entry--1,
  .gallery-entry--2,
  .gallery-entry--3,
  .gallery-entry--4 {
    grid-column: 1 / -1;
    margin-top: 0;
  }

  .schema-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .monograph-cta {
    padding-top: var(--space-24);
    padding-bottom: var(--space-24);
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
