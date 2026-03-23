<template>
  <div class="legacy-hall-page">

    <!-- ============================================
         HERO — The hall that holds what lasts
    ============================================= -->
    <section ref="heroSection" class="hall-hero section section-dark">
      <div class="hero-atmosphere" aria-hidden="true" />
      <div class="section-default">
        <p class="overline reveal">The Legacy Achievement Hall</p>
        <h1 class="hall-hero-title word-reveal">
          <em>Where the work lives after the maker is done.</em>
        </h1>
        <p class="hall-hero-sub reveal">
          The Achievement Hall is a permanent record of those who gave
          enough of themselves to earn a place that cannot be taken back.
          Not a hall of fame. A hall of proof.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CURRENT HOLDERS — The names on the wall
    ============================================= -->
    <section ref="holdersSection" class="hall-holders section section-dark">
      <div class="section-default">
        <p class="overline reveal">Current Legacy Holders</p>
        <h2 class="holders-title word-reveal"><em>The names that stay</em></h2>
        <p class="holders-intro reveal">
          {{ holderCount }} practitioners carry the Legacy designation.
          Their archival records are permanent — viewable by Fellows and
          Legacy holders through the collection.
        </p>

        <div class="holders-grid">
          <div
            v-for="holder in legacyHolders"
            :key="holder.name"
            class="holder-card vellum-card reveal"
          >
            <div class="holder-seal-row">
              <span class="seal-base seal-legacy">Legacy</span>
              <span class="holder-year">{{ holder.year }}</span>
            </div>
            <h3 class="holder-name"><em>{{ holder.name }}</em></h3>
            <p class="holder-district">{{ holder.district }}</p>
            <p class="holder-contribution">{{ holder.contribution }}</p>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PERMANENCE — What it means to be archived
    ============================================= -->
    <section ref="permanenceSection" class="hall-permanence section section-dark">
      <div class="section-default">
        <p class="overline reveal">Permanent Archival</p>
        <h2 class="permanence-title word-reveal"><em>What permanence actually means</em></h2>

        <div class="permanence-grid">
          <div
            v-for="item in permanencePoints"
            :key="item.label"
            class="permanence-block reveal"
          >
            <span class="material-symbols-outlined permanence-icon" aria-hidden="true">{{ item.icon }}</span>
            <h3 class="permanence-label"><em>{{ item.label }}</em></h3>
            <p class="permanence-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         NOTABLE CONTRIBUTIONS — What they built
    ============================================= -->
    <section ref="contributionsSection" class="hall-contributions section section-dark">
      <div class="section-default">
        <p class="overline reveal">Notable Contributions</p>
        <h2 class="contributions-title word-reveal"><em>The work that moved the road forward</em></h2>

        <div class="contributions-list">
          <div
            v-for="(item, i) in contributions"
            :key="item.title"
            class="contribution-row reveal"
          >
            <div class="contribution-index">
              <span class="contribution-number">{{ String(i + 1).padStart(2, '0') }}</span>
            </div>
            <div class="contribution-body">
              <h3 class="contribution-title"><em>{{ item.title }}</em></h3>
              <p class="contribution-author">{{ item.author }}</p>
              <p class="contribution-desc">{{ item.desc }}</p>
            </div>
            <div class="contribution-type">
              <span class="contribution-tag stamped-overline">{{ item.type }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PATHWAY — How Legacy status is earned
    ============================================= -->
    <section ref="pathwaySection" class="hall-pathway section section-dark">
      <div class="section-default">
        <p class="overline reveal">The Pathway</p>
        <h2 class="pathway-title word-reveal"><em>How the hall is entered</em></h2>
        <p class="pathway-intro reveal">
          Legacy is not applied for. It is not a finish line or a prize.
          It is a recognition that arrives when the record speaks for itself
          and others confirm what the work already proved.
        </p>

        <div class="pathway-steps">
          <div
            v-for="step in pathwaySteps"
            :key="step.number"
            class="pathway-step reveal"
          >
            <div class="step-marker">
              <span class="step-number">{{ step.number }}</span>
              <div class="step-line" aria-hidden="true" />
            </div>
            <div class="step-content">
              <h3 class="step-label"><em>{{ step.label }}</em></h3>
              <p class="step-desc">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CLOSING — The door is open
    ============================================= -->
    <section ref="closingSection" class="hall-closing section section-dark">
      <div class="section-narrow closing-inner">
        <blockquote class="closing-quote reveal">
          <p>
            <em>
              The hall does not call your name. Your work does.
              And when the council agrees, the door opens once
              and never closes behind you.
            </em>
          </p>
        </blockquote>
        <NuxtLink to="/legacy-seal" class="closing-link stamped-overline reveal">
          Read the Legacy Seal criteria
        </NuxtLink>
        <NuxtLink to="/apply" class="closing-link closing-link-secondary stamped-overline reveal">
          Begin the pathway
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
  title: 'Legacy Achievement Hall — Meraki Road',
  meta: [
    { name: 'description', content: 'The Legacy Achievement Hall — a permanent record of practitioners who earned the highest recognition on Meraki Road.' },
  ],
})

useSeoMeta({
  ogTitle: 'Legacy Achievement Hall — Meraki Road',
  ogDescription: 'A permanent record of practitioners who earned the highest recognition on Meraki Road.',
  twitterTitle: 'Legacy Achievement Hall — Meraki Road',
  twitterDescription: 'A permanent record of practitioners who earned the highest recognition on Meraki Road.',
})

/* -- Section refs ------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
const holdersSection = ref<HTMLElement | null>(null)
const permanenceSection = ref<HTMLElement | null>(null)
const contributionsSection = ref<HTMLElement | null>(null)
const pathwaySection = ref<HTMLElement | null>(null)
const closingSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

useGsapScrollReveal(holdersSection, '.reveal', { stagger: 0.12 })
useWordReveal(holdersSection, '.word-reveal')

useGsapScrollReveal(permanenceSection, '.reveal', { stagger: 0.1 })
useWordReveal(permanenceSection, '.word-reveal')

useGsapScrollReveal(contributionsSection, '.reveal', { stagger: 0.1 })
useWordReveal(contributionsSection, '.word-reveal')

useGsapScrollReveal(pathwaySection, '.reveal', { stagger: 0.12 })
useWordReveal(pathwaySection, '.word-reveal')

useGsapScrollReveal(closingSection, '.reveal')

/* -- Data --------------------------------------- */
const holderCount = 7

const legacyHolders = [
  {
    name: 'Yael Okafor',
    district: 'Meridian — Generative Systems',
    year: '2024',
    contribution: 'Established the first cross-district review framework. Built the mentorship ladder from Associate to Fellow.',
  },
  {
    name: 'Tomás Reinhardt',
    district: 'Atelier — Physical Fabrication',
    year: '2024',
    contribution: 'Three-year body of work in computational ceramics. Wrote the materials attribution standard.',
  },
  {
    name: 'Sable Moreau',
    district: 'Frame — Moving Image',
    year: '2025',
    contribution: 'Pioneered the archival format for time-based media. Mentored fourteen Associates to Verified status.',
  },
  {
    name: 'Kwame Asante',
    district: 'Common Ground — Community Practice',
    year: '2025',
    contribution: 'Designed the quarterly review cycle. Governance council chair for two consecutive terms.',
  },
  {
    name: 'Rin Nakamura',
    district: 'Pavilion — Spatial Design',
    year: '2025',
    contribution: 'Authored the spatial ethics guidelines. Built the Bridge intake process from scratch.',
  },
  {
    name: 'Ezra Whitfield',
    district: 'Fieldwork — Research & Documentation',
    year: '2025',
    contribution: 'Published the first Meraki Road research monograph. Standardized the field documentation protocol.',
  },
  {
    name: 'Lucia Ferreira',
    district: 'Circuit — Performance & Live Practice',
    year: '2026',
    contribution: 'Created the residency exchange between Milan and Meraki Road. Five years of unbroken archival record.',
  },
]

const permanencePoints = [
  {
    icon: 'lock',
    label: 'Irrevocable Record',
    desc: 'A Legacy entry cannot be edited, downgraded, or removed. The archive holds what was submitted at the time of recognition. No revisions, no corrections after the fact.',
  },
  {
    icon: 'auto_stories',
    label: 'Full Body of Work',
    desc: 'Every submission, review, and contribution from Associate through Fellow is preserved. Not a highlight reel — the complete record, including the rough edges.',
  },
  {
    icon: 'account_tree',
    label: 'Governance Weight',
    desc: 'Legacy holders carry a formal vote in standards review, district policy, and nomination deliberations. Not advisory — binding.',
  },
  {
    icon: 'history_edu',
    label: 'Named in the Monograph',
    desc: 'Each Legacy practitioner is documented by name in the annual Meraki Road monograph — a published record distributed across all districts.',
  },
]

const contributions = [
  {
    title: 'Cross-District Review Framework',
    author: 'Yael Okafor',
    desc: 'A peer review structure that lets practitioners in one district evaluate work from another without losing context. Now standard across all eleven districts.',
    type: 'Standards',
  },
  {
    title: 'Materials Attribution Standard',
    author: 'Tomás Reinhardt',
    desc: 'A protocol for crediting raw materials, fabrication processes, and source references in physical work. Adopted by Atelier and Pavilion.',
    type: 'Protocol',
  },
  {
    title: 'Time-Based Media Archival Format',
    author: 'Sable Moreau',
    desc: 'A specification for preserving video, performance recordings, and interactive installations in the permanent collection without degradation.',
    type: 'Format',
  },
  {
    title: 'Quarterly Review Cycle',
    author: 'Kwame Asante',
    desc: 'The four-season review cadence that governs how work moves from submission to archival. Replaced the ad-hoc review system.',
    type: 'Governance',
  },
  {
    title: 'Bridge Intake Process',
    author: 'Rin Nakamura',
    desc: 'The structured onboarding pathway for external collaborators entering Meraki Road through the Bridge program.',
    type: 'Process',
  },
  {
    title: 'Milan Residency Exchange',
    author: 'Lucia Ferreira',
    desc: 'A bilateral residency program connecting Circuit practitioners with the Milan creative community. Three cohorts completed.',
    type: 'Program',
  },
]

const pathwaySteps = [
  {
    number: '01',
    label: 'Nomination by Peers',
    desc: 'A minimum of two current Fellows or Legacy holders must formally nominate the practitioner. Self-nomination is not permitted. The nominators submit written statements explaining why the record warrants permanence.',
  },
  {
    number: '02',
    label: 'Body-of-Work Audit',
    desc: 'The full archival record — every submission, review, and contribution — is examined by a three-person panel from outside the practitioner\'s home district. The audit looks for sustained depth, not singular peaks.',
  },
  {
    number: '03',
    label: 'Council Deliberation',
    desc: 'The district governance council reviews the audit findings. Every council member must agree. A single objection pauses the process and triggers a sixty-day review period before the question is raised again.',
  },
  {
    number: '04',
    label: 'Public Recognition',
    desc: 'Once the council reaches consensus, the practitioner is entered into the permanent collection. Their name, record, and contributions are published in the next quarterly monograph and added to the Achievement Hall.',
  },
  {
    number: '05',
    label: 'The Seal is Conferred',
    desc: 'The Legacy Seal is formally granted. From this point forward, the practitioner\'s record is permanent, their governance authority is active, and their place in the hall is fixed.',
  },
]
</script>

<style scoped>
/* ═══════════════════════════════════════════════
   LEGACY ACHIEVEMENT HALL (Dark Theme)
   ═══════════════════════════════════════════════ */

/* ─── Hero ─── */
.hall-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  min-height: 65vh;
  display: flex;
  align-items: flex-end;
  position: relative;
  background: radial-gradient(circle at center, rgba(184, 150, 78, 0.12) 0%, rgba(10, 10, 10, 1) 65%);
  overflow: hidden;
}

.hero-atmosphere {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 30% 70%, rgba(184,150,78,0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 30%, rgba(184,150,78,0.04) 0%, transparent 50%);
  animation: atmosphereShift 25s linear infinite;
  pointer-events: none;
}

@keyframes atmosphereShift {
  0% { background-position: 0% 0%, 100% 100%; }
  50% { background-position: 100% 100%, 0% 0%; }
  100% { background-position: 0% 0%, 100% 100%; }
}

.hall-hero-title {
  font-size: var(--text-display);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-display);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  max-width: 24ch;
  text-shadow: 0 0 50px rgba(184, 150, 78, 0.2);
}

.hall-hero-sub {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
}

/* ─── Holders ─── */
.holders-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.holders-intro {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
  margin-top: var(--space-6);
  margin-bottom: var(--space-12);
}

.holders-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.holder-card {
  padding: var(--space-8) var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.holder-seal-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.holder-year {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  opacity: 0.5;
  letter-spacing: var(--tracking-wide);
}

.holder-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-2);
}

.holder-district {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-gold);
  letter-spacing: var(--tracking-wide);
  opacity: 0.7;
}

.holder-contribution {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  margin-top: var(--space-2);
}

/* ─── Permanence ─── */
.permanence-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-12);
}

.permanence-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
}

.permanence-block {
  padding: var(--space-6) 0;
  border-top: 1px solid rgba(184, 150, 78, 0.15);
}

.permanence-icon {
  font-size: 1.5rem;
  color: var(--color-gold);
  opacity: 0.5;
  display: block;
  margin-bottom: var(--space-4);
}

.permanence-label {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-3);
}

.permanence-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}

/* ─── Notable Contributions ─── */
.contributions-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-12);
}

.contributions-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.contribution-row {
  display: grid;
  grid-template-columns: 4rem 1fr auto;
  gap: var(--space-6);
  align-items: start;
  padding: var(--space-6);
  border: 1px solid rgba(184, 150, 78, 0.06);
  transition: border-color var(--duration-normal) ease;
}

.contribution-row:hover {
  border-color: rgba(184, 150, 78, 0.2);
}

.contribution-number {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-gold);
  opacity: 0.25;
}

.contribution-title {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-2);
}

.contribution-author {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-gold);
  letter-spacing: var(--tracking-wide);
  opacity: 0.6;
  margin-bottom: var(--space-3);
}

.contribution-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}

.contribution-tag {
  color: var(--color-dark-muted);
  opacity: 0.5;
  white-space: nowrap;
}

/* ─── Pathway ─── */
.pathway-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.pathway-intro {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
  margin-top: var(--space-6);
  margin-bottom: var(--space-12);
}

.pathway-steps {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.pathway-step {
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: var(--space-6);
  padding: var(--space-8) 0;
}

.pathway-step:not(:last-child) {
  border-bottom: 1px solid rgba(184, 150, 78, 0.06);
}

.step-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
}

.step-number {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-gold);
  opacity: 0.3;
}

.step-line {
  width: 1px;
  flex: 1;
  min-height: 1.5rem;
  background: rgba(184, 150, 78, 0.15);
}

.step-label {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-3);
}

.step-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
}

/* ─── Closing ─── */
.closing-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--space-16);
  padding-bottom: var(--space-16);
  gap: var(--space-6);
}

.closing-quote {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-muted);
  line-height: var(--leading-snug);
  max-width: 38ch;
  margin: 0 auto var(--space-8);
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

.closing-link-secondary {
  opacity: 0.5;
}

.closing-link-secondary:hover {
  opacity: 1;
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .hall-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-16);
    min-height: auto;
  }

  .hall-hero-title {
    max-width: none;
  }

  .holders-grid {
    grid-template-columns: 1fr;
  }

  .permanence-grid {
    grid-template-columns: 1fr;
  }

  .contribution-row {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }

  .contribution-index {
    display: none;
  }

  .contribution-type {
    order: -1;
  }

  .pathway-step {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }

  .step-marker {
    flex-direction: row;
    gap: var(--space-3);
  }

  .step-line {
    height: 1px;
    width: 2rem;
    min-height: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hall-hero-title {
    text-shadow: none;
  }
  .hero-atmosphere {
    animation: none;
  }
}
</style>
