<template>
  <div class="governance-page">

    <!-- ============================================
         HERO — Curatorial Board
    ============================================= -->
    <section ref="heroSection" class="governance-hero section section-dark">
      <div class="section-wide">
        <span class="overline-badge reveal">Governance</span>
        <h1 class="hero-title word-reveal">
          <em>The Curatorial Board</em>
        </h1>
        <div class="hero-stamp reveal">
          <span class="material-symbols-outlined hero-stamp-icon">account_balance</span>
          Meraki Governance Body
        </div>
        <p class="hero-subtitle reveal">
          Meraki Road is directed by its practitioners, not its administrators. The Curatorial
          Board sets direction, approves mandates, and holds the organization accountable to
          its founding principles. Every decision is recorded. Every vote is transparent.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         BOARD MEMBERS — Profile Grid
    ============================================= -->
    <section ref="boardSection" class="board section">
      <div class="section-wide">
        <div class="board-header">
          <p class="overline reveal">Current Term</p>
          <h2 class="board-title word-reveal"><em>Board Members</em></h2>
        </div>

        <div class="board-grid">
          <article
            v-for="member in boardMembers"
            :key="member.name"
            class="board-card vellum-card reveal"
          >
            <div class="board-portrait-wrap grayscale-hover parallax-container">
              <NuxtImg
                :src="member.image"
                :alt="`Portrait of ${member.name}`"
                class="board-portrait"
                loading="lazy"
                width="300"
                height="380"
              />
            </div>
            <div class="board-card-body">
              <span class="board-role">{{ member.role }}</span>
              <h3 class="board-name"><em>{{ member.name }}</em></h3>
              <p class="board-district">{{ member.district }}</p>
              <span class="seal-base" :class="member.sealClass">{{ member.sealLabel }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         ACTIVE MANDATES
    ============================================= -->
    <section ref="mandatesSection" class="mandates section section-dark">
      <div class="section-default">
        <div class="mandates-header">
          <p class="overline reveal">Active Directives</p>
          <h2 class="mandates-title word-reveal"><em>Current Mandates</em></h2>
        </div>

        <div class="mandates-list">
          <article
            v-for="mandate in mandates"
            :key="mandate.id"
            class="mandate-card reveal"
          >
            <div class="mandate-id">{{ mandate.id }}</div>
            <div class="mandate-body">
              <h3 class="mandate-name"><em>{{ mandate.title }}</em></h3>
              <p class="mandate-desc">{{ mandate.description }}</p>
            </div>
            <div class="mandate-meta">
              <span class="mandate-sponsor">{{ mandate.sponsor }}</span>
              <span class="seal-base" :class="mandate.sealClass">{{ mandate.status }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         GOVERNANCE PRINCIPLES
    ============================================= -->
    <section ref="principlesSection" class="principles section">
      <div class="section-default">
        <div class="principles-inner">
          <span class="overline reveal">Operating Framework</span>
          <h2 class="principles-heading word-reveal"><em>How Decisions Are Made</em></h2>
          <p class="principles-intro reveal">
            The Board operates on three principles. They are not guidelines &mdash;
            they are constraints. Every mandate, every vote, every allocation is tested
            against them before it moves forward.
          </p>

          <div class="principles-grid">
            <div v-for="principle in principles" :key="principle.title" class="principle-item reveal">
              <span class="material-symbols-outlined principle-icon">{{ principle.icon }}</span>
              <h3 class="principle-title">{{ principle.title }}</h3>
              <p class="principle-desc">{{ principle.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         TRANSPARENCY LOG — Audit Table
    ============================================= -->
    <section ref="transparencySection" class="transparency section section-dark">
      <div class="section-wide">
        <div class="transparency-header">
          <p class="overline reveal">Public Record</p>
          <h2 class="transparency-title word-reveal"><em>Transparency Log</em></h2>
          <p class="transparency-intro reveal">
            Every Board action is logged and published. Decisions, votes, abstentions,
            and dissents &mdash; all visible. If we cannot defend a decision in public,
            we do not make it.
          </p>
        </div>

        <div class="transparency-table-wrap reveal">
          <table class="transparency-table">
            <thead>
              <tr>
                <th>Record</th>
                <th>Subject</th>
                <th>Sponsor</th>
                <th>Result</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="record in auditLog" :key="record.id">
                <td class="record-id">{{ record.id }}</td>
                <td class="record-subject">{{ record.subject }}</td>
                <td class="record-sponsor">{{ record.sponsor }}</td>
                <td class="record-result">{{ record.result }}</td>
                <td>
                  <span class="seal-base" :class="record.sealClass">{{ record.status }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — Participate
    ============================================= -->
    <section ref="ctaSection" class="governance-cta section-dark">
      <div class="section-narrow cta-inner">
        <span class="material-symbols-outlined cta-icon">how_to_vote</span>
        <h2 class="cta-title word-reveal">
          <em>Governance belongs to practitioners.</em>
        </h2>
        <p class="cta-subtitle reveal">
          BOARD NOMINATIONS OPEN TO ALL VERIFIED MEMBERS
        </p>
        <div class="cta-buttons reveal">
          <NuxtLink to="/apply" class="cta-button-gold">Nominate a Member</NuxtLink>
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
  title: 'Curatorial Board — Meraki Road',
  meta: [
    { name: 'description', content: 'The Curatorial Board governs Meraki Road. Direction, mandates, transparency, and accountability — all decisions recorded, all votes public.' },
  ],
})

useSeoMeta({
  ogTitle: 'Curatorial Board — Meraki Road',
  ogDescription: 'Direction, mandates, transparency, and accountability. How Meraki Road is governed by its practitioners.',
  twitterTitle: 'Curatorial Board — Meraki Road',
  twitterDescription: 'Direction, mandates, transparency, and accountability. How Meraki Road is governed by its practitioners.',
})

/* -- Hero --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Board Members ------------------------------ */
const boardSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(boardSection, '.reveal', { stagger: 0.1 })
useWordReveal(boardSection, '.word-reveal')

/* -- Mandates ----------------------------------- */
const mandatesSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(mandatesSection, '.reveal', { stagger: 0.1 })
useWordReveal(mandatesSection, '.word-reveal')

/* -- Principles --------------------------------- */
const principlesSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(principlesSection, '.reveal', { stagger: 0.08 })
useWordReveal(principlesSection, '.word-reveal')

/* -- Transparency ------------------------------- */
const transparencySection = ref<HTMLElement | null>(null)
useGsapScrollReveal(transparencySection, '.reveal', { stagger: 0.06 })
useWordReveal(transparencySection, '.word-reveal')

/* -- CTA ---------------------------------------- */
const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal', { stagger: 0.08 })

/* -- Data --------------------------------------- */
interface BoardMember {
  name: string
  role: string
  district: string
  image: string
  sealClass: string
  sealLabel: string
}

const boardMembers: BoardMember[] = [
  {
    name: 'Adeline Voss',
    role: 'Lead Curator',
    district: 'The Pavilion',
    image: '/images/districts/the-provenance.webp',
    sealClass: 'seal-legacy',
    sealLabel: 'Legacy',
  },
  {
    name: 'Kofi Mensah',
    role: 'Standards Director',
    district: 'The Institute',
    image: '/images/districts/the-collective.webp',
    sealClass: 'seal-fellow',
    sealLabel: 'Fellow',
  },
  {
    name: 'Ines Delgado',
    role: 'Practitioner Advocate',
    district: 'Meraki Institute',
    image: '/images/districts/fieldwork.webp',
    sealClass: 'seal-verified',
    sealLabel: 'Verified',
  },
  {
    name: 'Ryo Tanaka',
    role: 'Archival Integrity',
    district: 'Meridian',
    image: '/images/districts/meridian.webp',
    sealClass: 'seal-fellow',
    sealLabel: 'Fellow',
  },
]

interface Mandate {
  id: string
  title: string
  description: string
  sponsor: string
  status: string
  sealClass: string
}

const mandates: Mandate[] = [
  {
    id: 'M-402',
    title: 'Open Submission Standards',
    description: 'Formalize submission criteria across all districts to ensure consistency without homogeneity. Each district retains curatorial autonomy within shared quality thresholds.',
    sponsor: 'A. Voss',
    status: 'Active',
    sealClass: 'seal-verified',
  },
  {
    id: 'M-405',
    title: 'Practitioner Revenue Share',
    description: 'Establish transparent revenue distribution for all Mint sales, exhibition commissions, and licensing. Minimum 70% to practitioner, published per transaction.',
    sponsor: 'I. Delgado',
    status: 'Under Review',
    sealClass: 'seal-associate',
  },
  {
    id: 'M-409',
    title: 'Archival Permanence Protocol',
    description: 'Define retention, format, and access policies for the Meraki Archival. No work is deleted. No access is revoked. Practitioners control their own records.',
    sponsor: 'R. Tanaka',
    status: 'Ratified',
    sealClass: 'seal-fellow',
  },
]

interface Principle {
  title: string
  icon: string
  description: string
}

const principles: Principle[] = [
  {
    title: 'Practitioner Primacy',
    icon: 'person',
    description: 'The people who make the work direct the organization. No board seat is held by someone who does not actively practice. Administrators advise. Practitioners decide.',
  },
  {
    title: 'Transparent Record',
    icon: 'visibility',
    description: 'Every vote, every mandate, every financial allocation is published in the transparency log. If a decision cannot be defended in public, it does not pass.',
  },
  {
    title: 'Reversible Defaults',
    icon: 'undo',
    description: 'Mandates are designed to be reversible. No permanent structural change passes without a supermajority. The Board constrains itself before it constrains others.',
  },
]

interface AuditRecord {
  id: string
  subject: string
  sponsor: string
  result: string
  status: string
  sealClass: string
}

const auditLog: AuditRecord[] = [
  {
    id: 'GOV-1201',
    subject: 'Mint Revenue Split — Q1 Report',
    sponsor: 'I. Delgado',
    result: 'Approved 4-0',
    status: 'Published',
    sealClass: 'seal-verified',
  },
  {
    id: 'GOV-1198',
    subject: 'New District Proposal: Sound',
    sponsor: 'K. Mensah',
    result: 'Tabled — needs quorum',
    status: 'Pending',
    sealClass: 'seal-associate',
  },
  {
    id: 'GOV-1195',
    subject: 'Archival Format Migration',
    sponsor: 'R. Tanaka',
    result: 'Approved 3-1',
    status: 'Published',
    sealClass: 'seal-verified',
  },
  {
    id: 'GOV-1190',
    subject: 'Fellowship Cohort 5 Selection',
    sponsor: 'A. Voss',
    result: 'Approved 4-0',
    status: 'Published',
    sealClass: 'seal-fellow',
  },
  {
    id: 'GOV-1187',
    subject: 'External Partnership: Haus der Kunst',
    sponsor: 'A. Voss',
    result: 'Approved 3-0 (1 abstain)',
    status: 'Published',
    sealClass: 'seal-verified',
  },
]
</script>

<style scoped>
/* =============================================
   HERO
   ============================================= */
.governance-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-16);
  text-align: center;
}

.governance-hero .overline-badge {
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

.hero-subtitle {
  font-size: var(--text-body);
  font-weight: 400;
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 58ch;
  margin: 0 auto;
}

/* =============================================
   BOARD MEMBERS
   ============================================= */
.board-header {
  margin-bottom: var(--space-12);
}

.board-title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

.board-title em { font-style: italic; }

.board-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--grid-gutter);
}

.board-card {
  overflow: hidden;
}

.board-portrait-wrap { overflow: hidden; }

.board-portrait {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  display: block;
}

.board-card-body {
  padding: var(--space-5);
}

.board-role {
  display: block;
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-1);
}

.board-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  line-height: var(--leading-snug);
  margin-bottom: var(--space-1);
}

.board-name em { font-style: italic; }

.board-district {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  margin-bottom: var(--space-3);
}

/* =============================================
   MANDATES
   ============================================= */
.mandates-header {
  margin-bottom: var(--space-12);
}

.mandates-title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-dark-text);
}

.mandates-title em { font-style: italic; }

.mandates-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.mandate-card {
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: var(--space-6);
  padding: var(--space-6);
  border: 1px solid rgba(184, 150, 78, 0.1);
  background: rgba(255, 255, 255, 0.02);
  align-items: start;
}

.mandate-id {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  color: var(--color-gold);
  font-weight: 500;
}

.mandate-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  line-height: var(--leading-snug);
  color: var(--color-dark-text);
  margin-bottom: var(--space-2);
}

.mandate-name em { font-style: italic; }

.mandate-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
}

.mandate-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--space-2);
}

.mandate-sponsor {
  font-size: var(--text-overline);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
}

/* =============================================
   GOVERNANCE PRINCIPLES
   ============================================= */
.principles-inner {
  text-align: center;
}

.principles-heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  margin-bottom: var(--space-6);
}

.principles-heading em { font-style: italic; }

.principles-intro {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 58ch;
  margin: 0 auto var(--space-12);
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
  text-align: left;
}

.principle-item {
  padding: var(--space-6);
  border: 1px solid var(--color-border);
}

.principle-icon {
  font-size: 1.5rem;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}

.principle-title {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 400;
  margin-bottom: var(--space-2);
}

.principle-desc {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
}

/* =============================================
   TRANSPARENCY LOG
   ============================================= */
.transparency-header {
  margin-bottom: var(--space-12);
}

.transparency-title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
}

.transparency-title em { font-style: italic; }

.transparency-intro {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 58ch;
}

.transparency-table-wrap {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.transparency-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--text-small);
}

.transparency-table th {
  text-align: left;
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  padding: var(--space-4) var(--space-4) var(--space-4) 0;
  border-bottom: 1px solid rgba(184, 150, 78, 0.3);
}

.transparency-table td {
  padding: var(--space-4) var(--space-4) var(--space-4) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--color-dark-muted);
  vertical-align: middle;
}

.record-id {
  font-family: var(--font-mono);
  color: var(--color-dark-text);
}

.record-subject {
  color: var(--color-dark-text);
}

/* =============================================
   CTA
   ============================================= */
.governance-cta {
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
  .governance-hero { padding-top: calc(var(--space-16) + 3rem); padding-bottom: var(--space-12); }
  .board-grid { grid-template-columns: repeat(2, 1fr); }
  .mandate-card { grid-template-columns: 1fr; gap: var(--space-3); }
  .mandate-id { order: -1; }
  .mandate-meta { flex-direction: row; align-items: center; }
  .principles-grid { grid-template-columns: 1fr; }
  .transparency-table { font-size: var(--text-caption); }
}

@media (max-width: 480px) {
  .board-grid { grid-template-columns: 1fr; }
  .cta-button-gold,
  .cta-button-ghost {
    width: 100%;
    text-align: center;
  }
  .cta-buttons { flex-direction: column; }
}
</style>
