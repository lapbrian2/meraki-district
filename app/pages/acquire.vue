<template>
  <div class="acquire-page">

    <!-- ============================================
         HERO — The Acquisition Ritual begins
    ============================================= -->
    <section ref="heroSection" class="acquire-hero section section-dark">
      <div class="hero-atmosphere" aria-hidden="true" />
      <div class="section-default">
        <p class="overline reveal">The Pavilion Store</p>
        <h1 class="acquire-hero-title word-reveal">
          <em>You don't buy a work. You receive it.</em>
        </h1>
        <p class="acquire-hero-sub reveal">
          Every acquisition through The Pavilion is a transfer of provenance.
          Each piece carries its full archival history — who made it, when it
          was sealed, where it was shown. That record moves with you.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PROVENANCE — What makes this different
    ============================================= -->
    <section ref="provenanceSection" class="acquire-provenance section section-dark">
      <div class="section-default">
        <div class="provenance-header">
          <p class="overline reveal">Provenance</p>
          <h2 class="provenance-title word-reveal"><em>Every work has a lineage</em></h2>
        </div>

        <div class="provenance-grid">
          <div
            v-for="item in provenanceItems"
            :key="item.label"
            class="provenance-card vellum-card reveal"
          >
            <span class="provenance-icon" aria-hidden="true">{{ item.icon }}</span>
            <h3 class="provenance-label">{{ item.label }}</h3>
            <p class="provenance-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PROCESS — The five phases of acquisition
    ============================================= -->
    <section ref="processSection" class="acquire-process section section-dark">
      <div class="section-default">
        <div class="process-header">
          <p class="overline reveal">The Ritual</p>
          <h2 class="process-title word-reveal"><em>Five phases of transfer</em></h2>
          <p class="process-intro reveal">
            This is not a cart-and-checkout flow. Each acquisition moves through
            a deliberate sequence — from selection to sealed provenance.
          </p>
        </div>

        <div class="process-steps">
          <div
            v-for="(step, i) in steps"
            :key="step.number"
            class="process-step reveal"
          >
            <div class="step-number-col">
              <span class="step-number">{{ step.number }}</span>
              <div v-if="i < steps.length - 1" class="step-connector" aria-hidden="true" />
            </div>
            <div class="step-content">
              <p class="step-phase">Phase {{ step.number }}</p>
              <h3 class="step-title"><em>{{ step.title }}</em></h3>
              <p class="step-desc">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CERTIFICATE — What you receive
    ============================================= -->
    <section ref="certificateSection" class="acquire-certificate section section-dark">
      <div class="section-narrow">
        <div class="certificate-inner">
          <p class="overline reveal">Certificate of Authenticity</p>
          <h2 class="certificate-title word-reveal"><em>What transfers with the work</em></h2>

          <div class="certificate-mockup reveal">
            <div class="cert-border">
              <p class="cert-heading">Meraki Road — Certificate of Provenance</p>
              <div class="cert-rule" aria-hidden="true" />
              <ul class="cert-list">
                <li>Unique edition number &amp; total run</li>
                <li>Creator name, district, and Seal tier</li>
                <li>Date of original archival entry</li>
                <li>Exhibition history &amp; publication record</li>
                <li>Acquisition timestamp &amp; recipient identifier</li>
                <li>Cryptographic verification hash</li>
              </ul>
              <div class="cert-rule" aria-hidden="true" />
              <p class="cert-footer">Sealed by The Pavilion Store</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         EDITIONS — Edition types explained
    ============================================= -->
    <section ref="editionsSection" class="acquire-editions section section-dark">
      <div class="section-default">
        <p class="overline reveal">Editions</p>
        <h2 class="editions-title word-reveal"><em>Three tiers of release</em></h2>

        <div class="editions-grid">
          <div
            v-for="edition in editions"
            :key="edition.name"
            class="edition-card vellum-card reveal"
          >
            <p class="edition-tier stamped-overline">{{ edition.tier }}</p>
            <h3 class="edition-name"><em>{{ edition.name }}</em></h3>
            <p class="edition-desc">{{ edition.desc }}</p>
            <p class="edition-detail">{{ edition.detail }}</p>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — Closing statement
    ============================================= -->
    <section ref="closingSection" class="acquire-closing section section-dark">
      <div class="section-narrow closing-inner">
        <blockquote class="closing-quote reveal">
          <p>
            <em>
              Owning a work from Meraki Road means holding a piece of
              someone's practice — verified, numbered, and permanent.
              That's what makes it worth having.
            </em>
          </p>
        </blockquote>
        <NuxtLink to="/pavilion" class="closing-link stamped-overline reveal">
          Enter The Pavilion
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
  title: 'Acquire — Meraki Road',
  meta: [
    { name: 'description', content: 'The Acquisition Ritual. Every work from The Pavilion Store carries verified provenance, edition numbering, and a certificate of authenticity.' },
  ],
})

useSeoMeta({
  ogTitle: 'Acquire — Meraki Road',
  ogDescription: 'The Acquisition Ritual. Provenance-verified works with edition numbering and certificates of authenticity.',
  twitterTitle: 'Acquire — Meraki Road',
  twitterDescription: 'The Acquisition Ritual. Provenance-verified works with edition numbering and certificates of authenticity.',
})

/* -- Section refs ------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
const provenanceSection = ref<HTMLElement | null>(null)
const processSection = ref<HTMLElement | null>(null)
const certificateSection = ref<HTMLElement | null>(null)
const editionsSection = ref<HTMLElement | null>(null)
const closingSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

useGsapScrollReveal(provenanceSection, '.reveal', { stagger: 0.12 })
useWordReveal(provenanceSection, '.word-reveal')

useGsapScrollReveal(processSection, '.reveal', { stagger: 0.15 })
useWordReveal(processSection, '.word-reveal')

useGsapScrollReveal(certificateSection, '.reveal')
useWordReveal(certificateSection, '.word-reveal')

useGsapScrollReveal(editionsSection, '.reveal', { stagger: 0.12 })
useWordReveal(editionsSection, '.word-reveal')

useGsapScrollReveal(closingSection, '.reveal')

/* -- Data --------------------------------------- */
const provenanceItems = [
  {
    icon: '\u2116',
    label: 'Edition Numbering',
    desc: 'Every print, object, or digital work carries a unique edition number within a fixed run. No reprints. No expansions.',
  },
  {
    icon: '\u2234',
    label: 'Archival Chain',
    desc: 'The full history of a work — from studio to Pavilion to your hands — is recorded and verifiable at any point.',
  },
  {
    icon: '\u2261',
    label: 'Creator Seal',
    desc: 'Each work is stamped with the creator\'s current Seal tier and district affiliation at the time of release.',
  },
  {
    icon: '\u2020',
    label: 'Verification Hash',
    desc: 'A cryptographic fingerprint ties the physical or digital work to its certificate. Forgery-resistant by design.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Selection',
    description: 'Browse available works in The Pavilion. Each listing shows the creator, edition count, provenance summary, and Seal tier.',
  },
  {
    number: '02',
    title: 'Intent',
    description: 'Declare your intent to acquire. This reserves the next available edition number and begins the provenance transfer.',
  },
  {
    number: '03',
    title: 'Verification',
    description: 'We confirm the work\'s authenticity, edition availability, and archival record before any transfer takes place.',
  },
  {
    number: '04',
    title: 'Transfer',
    description: 'Payment is processed and the provenance record is updated. Your name enters the chain as the current holder.',
  },
  {
    number: '05',
    title: 'Certificate',
    description: 'You receive the work alongside a signed certificate of authenticity with the full provenance chain and your edition details.',
  },
]

const editions = [
  {
    tier: 'Open',
    name: 'Standard Edition',
    desc: 'Available to anyone. Fixed run size set by the creator at release.',
    detail: 'Typical runs of 25–100. Each numbered. Certificate included.',
  },
  {
    tier: 'Limited',
    name: 'Archival Edition',
    desc: 'Restricted to Verified members and above. Smaller runs, premium materials.',
    detail: 'Runs of 5–25. Hand-finished or special substrate. Full provenance packet.',
  },
  {
    tier: 'Singular',
    name: 'Unique Work',
    desc: 'One-of-one originals. Available only through direct Pavilion placement.',
    detail: 'Edition of 1. Extended provenance documentation. Private transfer available.',
  },
]
</script>

<style scoped>
/* ═══════════════════════════════════════════════
   ACQUIRE PAGE — The Acquisition Ritual (Dark Theme)
   ═══════════════════════════════════════════════ */

/* ─── Hero ─── */
.acquire-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  min-height: 60vh;
  display: flex;
  align-items: flex-end;
  position: relative;
  background: radial-gradient(circle at center, rgba(184, 150, 78, 0.06) 0%, rgba(10, 10, 10, 1) 70%);
  overflow: hidden;
}

.hero-atmosphere {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 30% 70%, rgba(184,150,78,0.04) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 30%, rgba(184,150,78,0.02) 0%, transparent 50%);
  animation: atmosphereShift 20s linear infinite;
  pointer-events: none;
}

@keyframes atmosphereShift {
  0% { background-position: 0% 0%, 100% 100%; }
  50% { background-position: 100% 100%, 0% 0%; }
  100% { background-position: 0% 0%, 100% 100%; }
}

.acquire-hero-title {
  font-size: var(--text-display);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-display);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  max-width: 20ch;
  text-shadow: 0 0 30px rgba(184, 150, 78, 0.15);
}

.acquire-hero-sub {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
}

/* ─── Provenance ─── */
.provenance-header {
  margin-bottom: var(--space-16);
}

.provenance-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.provenance-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
}

.provenance-card {
  padding: var(--space-8);
}

.provenance-icon {
  display: block;
  font-size: 2rem;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
  opacity: 0.7;
}

.provenance-label {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-3);
}

.provenance-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}

/* ─── Process Steps ─── */
.process-header {
  margin-bottom: var(--space-16);
}

.process-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.process-intro {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
  margin-top: var(--space-6);
}

.process-steps {
  display: flex;
  flex-direction: column;
}

.process-step {
  display: grid;
  grid-template-columns: 5rem 1fr;
  gap: var(--space-8);
  min-height: 9rem;
}

.step-number-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-number {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 300;
  font-style: italic;
  color: var(--color-gold);
  line-height: 1;
  margin-bottom: var(--space-4);
}

.step-connector {
  flex: 1;
  width: 1px;
  background: linear-gradient(to bottom, var(--color-gold), rgba(184, 150, 78, 0.1));
  min-height: 3rem;
  animation: connectorPulse 3s ease-in-out infinite;
}

@keyframes connectorPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

.step-content {
  padding-bottom: var(--space-12);
}

.step-phase {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0.6;
  margin-bottom: var(--space-2);
}

.step-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-3);
}

.step-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
}

/* ─── Certificate Mockup ─── */
.certificate-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.certificate-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-12);
}

.certificate-mockup {
  width: 100%;
  max-width: 480px;
}

.cert-border {
  border: 1px solid rgba(184, 150, 78, 0.3);
  padding: var(--space-8) var(--space-6);
  background: rgba(184, 150, 78, 0.02);
}

.cert-heading {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  font-style: italic;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}

.cert-rule {
  width: 100%;
  height: 1px;
  background: rgba(184, 150, 78, 0.2);
  margin: var(--space-4) 0;
}

.cert-list {
  list-style: none;
  padding: 0;
  text-align: left;
}

.cert-list li {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  padding: var(--space-2) 0;
  border-bottom: 1px solid rgba(184, 150, 78, 0.06);
}

.cert-list li::before {
  content: '\2014\00a0';
  color: var(--color-gold);
  opacity: 0.4;
}

.cert-footer {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0.5;
  margin-top: var(--space-2);
}

/* ─── Editions ─── */
.editions-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-12);
}

.editions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.edition-card {
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
}

.edition-tier {
  font-family: var(--font-mono);
  margin-bottom: var(--space-4);
  align-self: flex-start;
}

.edition-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
}

.edition-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
  flex: 1;
}

.edition-detail {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  opacity: 0.6;
  line-height: var(--leading-normal);
  border-top: 1px solid rgba(184, 150, 78, 0.1);
  padding-top: var(--space-4);
}

/* ─── Closing ─── */
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
  margin: 0 auto var(--space-12);
}

.closing-link {
  font-family: var(--font-mono);
  color: var(--color-gold);
  transition: background-color var(--duration-normal) ease, color var(--duration-normal) ease;
}

.closing-link:hover {
  background-color: var(--color-gold);
  color: var(--color-dark-bg);
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .acquire-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-16);
    min-height: auto;
  }

  .acquire-hero-title {
    max-width: none;
  }

  .provenance-grid {
    grid-template-columns: 1fr;
  }

  .process-step {
    grid-template-columns: 3.5rem 1fr;
    gap: var(--space-4);
    min-height: auto;
  }

  .step-content {
    padding-bottom: var(--space-8);
  }

  .editions-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .acquire-hero-title {
    text-shadow: none;
  }
  .step-connector {
    transform: none;
    animation: none;
    opacity: 0.4;
  }
  .hero-atmosphere {
    animation: none;
  }
}
</style>
