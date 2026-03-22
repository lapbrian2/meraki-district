<template>
  <div class="fieldwork-page">

    <!-- ============================================
         HERO — District 04 R&D
    ============================================= -->
    <section ref="heroSection" class="fw-hero section section-dark">
      <div class="section-wide">
        <p class="overline reveal">District 04 &mdash; Research &amp; Development</p>
        <h1 class="hero-title word-reveal">
          <em>Where the unknown gets tested.</em>
        </h1>
        <p class="hero-sub reveal">
          Fieldwork is the experimental wing. Not courses, not community &mdash;
          raw inquiry. Practitioners come here to chase questions that don&rsquo;t
          have answers yet, build prototypes nobody asked for, and document
          what happens when creative intuition meets systematic rigor.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         RESEARCH THESIS — Central investigation
    ============================================= -->
    <section ref="thesisSection" class="thesis section">
      <div class="section-default">
        <div class="thesis-inner">
          <span class="thesis-badge reveal">Research Initiative 04</span>
          <h2 class="thesis-title word-reveal"><em>The Grain of the Machine</em></h2>
          <p class="thesis-desc reveal">
            A long-running investigation into the textural byproducts of
            synthetic reasoning &mdash; the noise, the artifacts, the unexpected
            patterns that emerge when computational processes operate at the
            edge of their training. Not errors. Evidence.
          </p>
          <blockquote class="thesis-quote reveal">
            <em>&ldquo;The machine does not mimic. It remembers what we have
            forgotten how to see.&rdquo;</em>
          </blockquote>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         RESEARCH DOMAINS — 4-column grid
    ============================================= -->
    <section ref="domainsSection" class="domains section section-dark">
      <div class="section-wide">
        <div class="domains-header">
          <p class="overline reveal">Active Domains</p>
          <h2 class="domains-title word-reveal"><em>Four fronts of inquiry.</em></h2>
        </div>

        <div class="domains-grid">
          <article
            v-for="domain in domains"
            :key="domain.title"
            class="domain-card vellum-card reveal"
          >
            <span class="domain-card-id">{{ domain.id }}</span>
            <h3 class="domain-card-title"><em>{{ domain.title }}</em></h3>
            <p class="domain-card-desc">{{ domain.description }}</p>
            <div class="domain-card-status">
              <span class="domain-card-label">Stability</span>
              <span class="domain-card-value">{{ domain.stability }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PROTOCOLS — Active research threads
    ============================================= -->
    <section ref="protocolsSection" class="protocols section">
      <div class="section-wide">
        <div class="protocols-header">
          <div class="protocols-header-left">
            <p class="overline reveal">Active Protocols</p>
            <h2 class="protocols-title word-reveal"><em>What&rsquo;s running now.</em></h2>
          </div>
        </div>

        <div class="protocols-list">
          <article
            v-for="protocol in protocols"
            :key="protocol.title"
            class="protocol-entry reveal"
          >
            <div class="protocol-entry-body">
              <h3 class="protocol-entry-title"><em>{{ protocol.title }}</em></h3>
              <span class="protocol-entry-domain">{{ protocol.domain }}</span>
            </div>
            <div class="protocol-entry-meta">
              <span class="protocol-entry-experiment">{{ protocol.experiment }}</span>
              <span :class="['protocol-entry-status', protocol.statusClass]">{{ protocol.status }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         THEMATIC INDEX — Research categories
    ============================================= -->
    <section ref="indexSection" class="thematic-index section section-dark">
      <div class="section-wide">
        <div class="index-header">
          <p class="overline reveal">Thematic Index</p>
          <h2 class="index-title word-reveal"><em>Territories of inquiry.</em></h2>
        </div>

        <div class="index-grid">
          <article
            v-for="theme in themes"
            :key="theme.title"
            class="index-card reveal"
          >
            <span class="material-symbols-outlined index-card-icon">{{ theme.icon }}</span>
            <h3 class="index-card-title">{{ theme.title }}</h3>
            <p class="index-card-desc">{{ theme.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — Enter the lab
    ============================================= -->
    <section ref="ctaSection" class="fw-cta section-dark">
      <div class="section-narrow cta-inner">
        <div class="cta-rule" aria-hidden="true" />
        <p class="overline reveal">Contribute</p>
        <h2 class="cta-title word-reveal">
          Bring a question worth chasing.
        </h2>
        <p class="cta-body reveal">
          Fieldwork accepts practitioners with unresolved creative problems.
          No curriculum. No guarantees. Just honest pursuit.
        </p>
        <NuxtLink to="/apply" class="cta-button reveal">Propose Research &rarr;</NuxtLink>
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
  title: 'Fieldwork — Meraki Road',
  meta: [
    { name: 'description', content: 'Fieldwork: the experimental R&D laboratory at Meraki Road. Where practitioners chase questions without answers and build prototypes nobody asked for.' },
  ],
})

useSeoMeta({
  ogTitle: 'Fieldwork — Meraki Road',
  ogDescription: 'The experimental R&D laboratory at Meraki Road. Where practitioners chase questions without answers.',
  twitterTitle: 'Fieldwork — Meraki Road',
  twitterDescription: 'The experimental R&D laboratory at Meraki Road. Where practitioners chase questions without answers.',
})

/* -- Hero --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Thesis ------------------------------------- */
const thesisSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(thesisSection, '.reveal')
useWordReveal(thesisSection, '.word-reveal')

/* -- Domains ------------------------------------ */
const domainsSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(domainsSection, '.reveal', { stagger: 0.1 })
useWordReveal(domainsSection, '.word-reveal')

/* -- Protocols ---------------------------------- */
const protocolsSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(protocolsSection, '.reveal', { stagger: 0.06 })
useWordReveal(protocolsSection, '.word-reveal')

/* -- Index -------------------------------------- */
const indexSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(indexSection, '.reveal', { stagger: 0.08 })
useWordReveal(indexSection, '.word-reveal')

/* -- CTA ---------------------------------------- */
const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal')

/* -- Custom GSAP -------------------------------- */
let ctx: gsap.Context | null = null

onMounted(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  gsap.registerPlugin(ScrollTrigger)

  if (heroSection.value) {
    await waitForAncestorAnimations(heroSection.value)
  }

  ctx = gsap.context(() => {
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
const domains = [
  {
    id: 'D04-N',
    title: 'Neural Topography',
    description: 'Mapping the cognitive landscapes generated by synthetic reasoning. How machines build internal representations and where those representations diverge from human spatial understanding.',
    stability: '88.4%',
  },
  {
    id: 'D04-S',
    title: 'Spatial R&D',
    description: 'Non-Euclidean interface design. Exploring navigation systems that bend conventional spatial logic and respond to the user\'s intent rather than their explicit input.',
    stability: '72.1%',
  },
  {
    id: 'D04-B',
    title: 'Bio-Digital Integration',
    description: 'Organic-silicon synapse research. Investigating what happens when biological feedback loops are introduced into computational creative processes.',
    stability: '64.7%',
  },
  {
    id: 'D04-Q',
    title: 'Quantum State',
    description: 'Superpositional data architecture. Creative outputs that exist in multiple valid states simultaneously until observation collapses them into a single interpretation.',
    stability: '41.2%',
  },
]

const protocols = [
  {
    title: 'Latent Topographies',
    domain: 'Neural Topography',
    experiment: 'Exp. No. 81',
    status: 'Active',
    statusClass: 'status-active',
  },
  {
    title: 'Ethereal Resonance',
    domain: 'Bio-Digital Integration',
    experiment: 'Phase VII',
    status: 'Synchrony',
    statusClass: 'status-sync',
  },
  {
    title: 'Poetic Geometry',
    domain: 'Spatial R&D',
    experiment: 'Exp. No. 114',
    status: 'Incubation',
    statusClass: 'status-incubation',
  },
  {
    title: 'Silent Archives',
    domain: 'Quantum State',
    experiment: 'Exp. No. 7',
    status: 'Observation',
    statusClass: 'status-default',
  },
]

const themes = [
  {
    icon: 'scatter_plot',
    title: 'Poetic Geometry',
    description: 'Spatial relationships between abstract mathematical structures and human emotional response.',
  },
  {
    icon: 'eco',
    title: 'Floral Latency',
    description: 'Botanical synthesis and the emergent patterns in organic growth mapped through computational models.',
  },
  {
    icon: 'cloud',
    title: 'Atmospheric Data',
    description: 'Thought visualization and the conversion of ambient cognitive states into perceivable form.',
  },
  {
    icon: 'archive',
    title: 'Silent Archives',
    description: 'Memory retrieval through computational intuition. What machines remember that we forgot to ask.',
  },
]
</script>

<style scoped>
/* =============================================
   HERO
   ============================================= */
.fw-hero {
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
  max-width: 54ch;
}

@media (max-width: 768px) {
  .fw-hero { padding-top: calc(var(--space-16) + 3rem); padding-bottom: var(--space-12); }
}

/* =============================================
   THESIS — Central investigation
   ============================================= */
.thesis {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-surface);
  border-top: 1px solid var(--rule-color);
  border-bottom: 1px solid var(--rule-color);
}

.thesis-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.thesis-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: var(--text-overline);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  border: 1px solid rgba(184, 150, 78, 0.3);
  padding: 2px 10px;
  margin-bottom: var(--space-8);
}

.thesis-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-bottom: var(--space-6);
  line-height: var(--leading-tight);
}

.thesis-title em { font-style: italic; }

.thesis-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 54ch;
  margin-bottom: var(--space-8);
}

.thesis-quote {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-text-secondary);
  line-height: var(--leading-snug);
  opacity: 0.7;
  max-width: 36ch;
}

@media (max-width: 768px) {
  .thesis { padding: var(--space-16) var(--content-padding); }
}

/* =============================================
   RESEARCH DOMAINS — 4-column grid
   ============================================= */
.domains {
  padding: var(--space-24) var(--content-padding);
  background-color: var(--color-dark-bg);
  color: var(--color-dark-text);
}

.domains-header {
  margin-bottom: var(--space-12);
}

.domains-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  line-height: var(--leading-tight);
}

.domains-title em { font-style: italic; }

.domains-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

.domain-card {
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
}

.domain-card-id {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: var(--tracking-widest);
  color: var(--color-gold);
  margin-bottom: var(--space-6);
}

.domain-card-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
  transition: color 0.3s ease;
}

.domain-card:hover .domain-card-title { color: var(--color-gold); }

.domain-card-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  flex: 1;
  margin-bottom: var(--space-6);
}

.domain-card-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-4);
  border-top: 1px solid rgba(250, 250, 249, 0.08);
}

.domain-card-label {
  font-size: var(--text-overline);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
}

.domain-card-value {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  color: var(--color-gold);
}

@media (max-width: 1024px) { .domains-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px) {
  .domains { padding: var(--space-16) var(--content-padding); }
  .domains-grid { grid-template-columns: 1fr; }
}

/* =============================================
   PROTOCOLS — Active research threads
   ============================================= */
.protocols {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-background);
}

.protocols-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: var(--space-12);
}

.protocols-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-4);
  line-height: var(--leading-tight);
}

.protocols-title em { font-style: italic; }

.protocols-list {
  border-top: 1px solid var(--rule-color);
}

.protocol-entry {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-6) 0;
  border-bottom: 1px solid var(--rule-color);
  transition: background-color 0.3s ease;
}

.protocol-entry:hover { background: var(--color-surface); }

.protocol-entry-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.protocol-entry-title {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  color: var(--color-ink);
}

.protocol-entry-domain {
  font-size: var(--text-small);
  color: var(--color-text-muted);
}

.protocol-entry-meta {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.protocol-entry-experiment {
  font-family: var(--font-mono);
  font-size: var(--text-overline);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
}

.protocol-entry-status {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  padding: 2px 10px;
  border: 1px solid;
}

.status-default { border-color: rgba(161, 161, 170, 0.3); color: var(--color-text-muted); }
.status-active { border-color: rgba(184, 150, 78, 0.3); color: var(--color-gold); }
.status-sync { border-color: var(--color-gold); color: var(--color-gold); background: rgba(184, 150, 78, 0.08); }
.status-incubation { border-color: rgba(184, 150, 78, 0.2); color: var(--color-gold); opacity: 0.7; }

@media (max-width: 768px) {
  .protocols { padding: var(--space-16) var(--content-padding); }
  .protocol-entry { flex-direction: column; align-items: flex-start; gap: var(--space-3); }
  .protocol-entry-meta { gap: var(--space-3); }
}

/* =============================================
   THEMATIC INDEX — Research categories
   ============================================= */
.thematic-index {
  padding: var(--space-24) var(--content-padding);
  background-color: var(--color-dark-bg);
  color: var(--color-dark-text);
}

.index-header {
  margin-bottom: var(--space-12);
}

.index-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  line-height: var(--leading-tight);
}

.index-title em { font-style: italic; }

.index-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid rgba(250, 250, 249, 0.08);
}

.index-card {
  padding: var(--space-8);
  border-right: 1px solid rgba(250, 250, 249, 0.08);
  transition: background-color 0.5s var(--ease-out);
}

.index-card:nth-child(4n) { border-right: none; }
.index-card:hover { background: rgba(255, 255, 255, 0.02); }

.index-card-icon {
  font-size: 1.5rem;
  color: var(--color-gold);
  margin-bottom: var(--space-6);
  display: block;
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

.index-card-title {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-3);
}

.index-card-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}

@media (max-width: 1024px) {
  .index-grid { grid-template-columns: repeat(2, 1fr); }
  .index-card:nth-child(4n) { border-right: 1px solid rgba(250, 250, 249, 0.08); }
  .index-card:nth-child(2n) { border-right: none; }
  .index-card { border-bottom: 1px solid rgba(250, 250, 249, 0.08); }
  .index-card:nth-child(n+3) { border-bottom: none; }
}

@media (max-width: 768px) {
  .thematic-index { padding: var(--space-16) var(--content-padding); }
  .index-grid { grid-template-columns: 1fr; }
  .index-card { border-right: none; border-bottom: 1px solid rgba(250, 250, 249, 0.08); }
  .index-card:last-child { border-bottom: none; }
}

/* =============================================
   CTA
   ============================================= */
.fw-cta {
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
  margin-bottom: var(--space-6);
  letter-spacing: var(--tracking-hero);
  max-width: 18ch;
}

.cta-body {
  color: var(--color-dark-muted);
  margin-bottom: var(--space-12);
  line-height: var(--leading-relaxed);
  max-width: 45ch;
  font-size: var(--text-body);
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
  .fw-cta { padding: var(--space-16) var(--content-padding); }
  .cta-button { width: 100%; text-align: center; padding: var(--space-4) var(--space-6); min-height: 44px; display: inline-flex; align-items: center; justify-content: center; }
}
</style>
