<template>
  <div class="legacy-ritual-page">

    <!-- ============================================
         HERO — The ceremony begins
    ============================================= -->
    <section ref="heroSection" class="ritual-hero section section-dark">
      <div class="hero-atmosphere" aria-hidden="true" />
      <div class="section-default">
        <p class="overline reveal">Permanent Entry</p>
        <h1 class="ritual-hero-title word-reveal">
          <em>The last seal you will ever need.</em>
        </h1>
        <p class="ritual-hero-sub reveal">
          Legacy is not awarded. It is recognized — after years of sustained
          practice, contribution, and presence on the road. This ceremony marks
          the moment a practitioner's work becomes permanent record.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         MEANING — What Legacy status means
    ============================================= -->
    <section ref="meaningSection" class="ritual-meaning section section-dark">
      <div class="section-default">
        <p class="overline reveal">What It Means</p>
        <h2 class="meaning-title word-reveal"><em>A permanent place in the archive</em></h2>

        <div class="meaning-grid">
          <div class="meaning-block reveal">
            <h3 class="meaning-label"><em>Irrevocable</em></h3>
            <p class="meaning-desc">
              Once granted, Legacy status cannot be revoked or downgraded.
              Your body of work is entered into the permanent collection.
              It stays — regardless of what comes after.
            </p>
          </div>
          <div class="meaning-block reveal">
            <h3 class="meaning-label"><em>Named</em></h3>
            <p class="meaning-desc">
              Legacy practitioners are recognized by name in all district
              publications, annual monographs, and governance records.
              Your name becomes part of the infrastructure.
            </p>
          </div>
          <div class="meaning-block reveal">
            <h3 class="meaning-label"><em>Weighted</em></h3>
            <p class="meaning-desc">
              Legacy holders carry formal weight in governance decisions,
              standards review, and mentorship pathways. Not ceremonial
              influence — actual structural authority.
            </p>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CEREMONY — The ritual sequence
    ============================================= -->
    <section ref="ceremonySection" class="ritual-ceremony section section-dark">
      <div class="section-default">
        <div class="ceremony-header">
          <p class="overline reveal">The Ceremony</p>
          <h2 class="ceremony-title word-reveal"><em>How it happens</em></h2>
        </div>

        <div class="ceremony-steps">
          <div
            v-for="(step, i) in ceremonySteps"
            :key="step.number"
            class="ceremony-step reveal"
          >
            <div class="step-number-col">
              <span class="step-number">{{ step.number }}</span>
              <div v-if="i < ceremonySteps.length - 1" class="step-connector" aria-hidden="true" />
            </div>
            <div class="step-content">
              <p class="step-phase">{{ step.phase }}</p>
              <h3 class="step-title"><em>{{ step.title }}</em></h3>
              <p class="step-desc">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         RECORD — What gets entered
    ============================================= -->
    <section ref="recordSection" class="ritual-record section section-dark">
      <div class="section-narrow">
        <div class="record-inner">
          <p class="overline reveal">The Record</p>
          <h2 class="record-title word-reveal"><em>What enters the permanent archive</em></h2>

          <div class="record-card vellum-card reveal">
            <ul class="record-list">
              <li v-for="item in recordItems" :key="item" class="record-item">
                {{ item }}
              </li>
            </ul>
          </div>

          <p class="record-note reveal">
            This record is immutable once entered. It becomes part of the
            Meraki Road permanent collection and is referenced in all
            future governance, publication, and archival processes.
          </p>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CLOSING — Weight of permanence
    ============================================= -->
    <section ref="closingSection" class="ritual-closing section section-dark">
      <div class="section-narrow closing-inner">
        <blockquote class="closing-quote reveal">
          <p>
            <em>
              Most systems reward volume. This one recognizes
              what stays — the work that holds up, the practice that
              deepens, the presence that shaped others. Legacy is the
              record of that.
            </em>
          </p>
        </blockquote>
        <NuxtLink to="/legacy-seal" class="closing-link stamped-overline reveal">
          View Legacy Standards
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
  title: 'Legacy Ritual — Meraki Road',
  meta: [
    { name: 'description', content: 'The Legacy Ritual. The ceremony for permanent archival entry — the highest recognition on Meraki Road.' },
  ],
})

useSeoMeta({
  ogTitle: 'Legacy Ritual — Meraki Road',
  ogDescription: 'The ceremony for permanent archival entry — the highest recognition on Meraki Road.',
  twitterTitle: 'Legacy Ritual — Meraki Road',
  twitterDescription: 'The ceremony for permanent archival entry — the highest recognition on Meraki Road.',
})

/* -- Section refs ------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
const meaningSection = ref<HTMLElement | null>(null)
const ceremonySection = ref<HTMLElement | null>(null)
const recordSection = ref<HTMLElement | null>(null)
const closingSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

useGsapScrollReveal(meaningSection, '.reveal', { stagger: 0.12 })
useWordReveal(meaningSection, '.word-reveal')

useGsapScrollReveal(ceremonySection, '.reveal', { stagger: 0.15 })
useWordReveal(ceremonySection, '.word-reveal')

useGsapScrollReveal(recordSection, '.reveal')
useWordReveal(recordSection, '.word-reveal')

useGsapScrollReveal(closingSection, '.reveal')

/* -- Data --------------------------------------- */
const ceremonySteps = [
  {
    number: '01',
    phase: 'Nomination',
    title: 'Named by Peers',
    description: 'Legacy nominations come from existing Fellows or Legacy holders within the same district. Self-nomination is not possible. Someone has to say your name.',
  },
  {
    number: '02',
    phase: 'Review',
    title: 'Body of Work Audit',
    description: 'The full archival record is reviewed — every submission, publication, exhibition, and contribution. Consistency matters more than any single peak.',
  },
  {
    number: '03',
    phase: 'Deliberation',
    title: 'Governance Council',
    description: 'The district governance council convenes to discuss the nomination. This is not a vote on popularity. It is an assessment of sustained impact and integrity.',
  },
  {
    number: '04',
    phase: 'Recognition',
    title: 'The Ceremony',
    description: 'If approved, the practitioner is formally recognized in a private ceremony. The Legacy Seal is conferred and the permanent archival entry is created.',
  },
  {
    number: '05',
    phase: 'Permanence',
    title: 'Archival Entry',
    description: 'The complete record — name, body of work, district history, and the ceremony date — is entered into the permanent collection. This entry cannot be edited or removed.',
  },
]

const recordItems = [
  'Full name and practitioner identifier',
  'District affiliation and tenure',
  'Complete body of work — every archived submission',
  'Publication and exhibition history',
  'Mentorship contributions and governance participation',
  'Nomination source and council deliberation summary',
  'Ceremony date and conferring authority',
  'Legacy Seal number (sequential, never reused)',
]
</script>

<style scoped>
/* ═══════════════════════════════════════════════
   LEGACY RITUAL PAGE — Permanent Entry (Dark Theme)
   ═══════════════════════════════════════════════ */

/* ─── Hero ─── */
.ritual-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  min-height: 60vh;
  display: flex;
  align-items: flex-end;
  position: relative;
  background: radial-gradient(circle at center, rgba(184, 150, 78, 0.08) 0%, rgba(10, 10, 10, 1) 70%);
  overflow: hidden;
}

.hero-atmosphere {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 50% 50%, rgba(184,150,78,0.06) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 80%, rgba(184,150,78,0.03) 0%, transparent 40%);
  animation: atmosphereShift 25s linear infinite;
  pointer-events: none;
}

@keyframes atmosphereShift {
  0% { background-position: 0% 0%, 100% 100%; }
  50% { background-position: 100% 100%, 0% 0%; }
  100% { background-position: 0% 0%, 100% 100%; }
}

.ritual-hero-title {
  font-size: var(--text-display);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-display);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  max-width: 20ch;
  text-shadow: 0 0 40px rgba(184, 150, 78, 0.2);
}

.ritual-hero-sub {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
}

/* ─── Meaning ─── */
.meaning-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-12);
}

.meaning-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.meaning-block {
  padding: var(--space-6) 0;
  border-top: 1px solid rgba(184, 150, 78, 0.15);
}

.meaning-label {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}

.meaning-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}

/* ─── Ceremony Steps ─── */
.ceremony-header {
  margin-bottom: var(--space-16);
}

.ceremony-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.ceremony-steps {
  display: flex;
  flex-direction: column;
}

.ceremony-step {
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

/* ─── Record ─── */
.record-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.record-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-12);
}

.record-card {
  width: 100%;
  padding: var(--space-8);
}

.record-list {
  list-style: none;
  padding: 0;
  text-align: left;
}

.record-item {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  padding: var(--space-3) 0;
  border-bottom: 1px solid rgba(184, 150, 78, 0.06);
}

.record-item::before {
  content: '\2014\00a0';
  color: var(--color-gold);
  opacity: 0.4;
}

.record-item:last-child {
  border-bottom: none;
}

.record-note {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  opacity: 0.6;
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin-top: var(--space-8);
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
  .ritual-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-16);
    min-height: auto;
  }

  .ritual-hero-title {
    max-width: none;
  }

  .meaning-grid {
    grid-template-columns: 1fr;
  }

  .ceremony-step {
    grid-template-columns: 3.5rem 1fr;
    gap: var(--space-4);
    min-height: auto;
  }

  .step-content {
    padding-bottom: var(--space-8);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ritual-hero-title {
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
