<template>
  <div class="legacy-seal-page">

    <!-- ============================================
         HERO — The standard defined
    ============================================= -->
    <section ref="heroSection" class="seal-hero section section-dark">
      <div class="hero-atmosphere" aria-hidden="true" />
      <div class="section-default">
        <p class="overline reveal">Final Accreditation</p>
        <h1 class="seal-hero-title word-reveal">
          <em>The standard that closes the circle.</em>
        </h1>
        <p class="seal-hero-sub reveal">
          The Legacy Seal is the highest tier in the Meraki Road accreditation
          system. It is not a milestone on a ladder — it is the recognition
          that the ladder no longer applies to you.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         SEAL TIERS — Context within the system
    ============================================= -->
    <section ref="tiersSection" class="seal-tiers section section-dark">
      <div class="section-default">
        <p class="overline reveal">The Seal System</p>
        <h2 class="tiers-title word-reveal"><em>Four tiers. One direction.</em></h2>

        <div class="tiers-stack">
          <div
            v-for="tier in sealTiers"
            :key="tier.name"
            class="tier-row reveal"
            :class="{ 'tier-active': tier.active }"
          >
            <div class="tier-seal-col">
              <span class="seal-base" :class="tier.sealClass">{{ tier.name }}</span>
            </div>
            <div class="tier-content">
              <h3 class="tier-name"><em>{{ tier.fullName }}</em></h3>
              <p class="tier-desc">{{ tier.desc }}</p>
            </div>
            <div class="tier-meta">
              <p class="tier-requirement">{{ tier.requirement }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CRITERIA — What Legacy requires
    ============================================= -->
    <section ref="criteriaSection" class="seal-criteria section section-dark">
      <div class="section-default">
        <p class="overline reveal">Criteria</p>
        <h2 class="criteria-title word-reveal"><em>What the seal demands</em></h2>
        <p class="criteria-intro reveal">
          Legacy is not a checklist. But there are non-negotiable conditions
          that must be met before a nomination can proceed. These exist to
          protect the weight of the designation.
        </p>

        <div class="criteria-grid">
          <div
            v-for="criterion in criteria"
            :key="criterion.label"
            class="criterion-card reveal"
          >
            <span class="criterion-number">{{ criterion.number }}</span>
            <h3 class="criterion-label">{{ criterion.label }}</h3>
            <p class="criterion-desc">{{ criterion.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CURRENT HOLDERS — Who carries the seal
    ============================================= -->
    <section ref="holdersSection" class="seal-holders section section-dark">
      <div class="section-narrow">
        <div class="holders-inner">
          <p class="overline reveal">Current Holders</p>
          <h2 class="holders-title word-reveal"><em>Those who carry the seal</em></h2>
          <p class="holders-note reveal">
            The Legacy Seal has been conferred {{ holderCount }} times in
            the history of Meraki Road. Each holder's full archival record
            is accessible through the permanent collection.
          </p>

          <div class="holders-placeholder vellum-card reveal">
            <p class="holders-empty">
              Legacy holder profiles are viewable within the archive.
              Access requires active membership at the Fellow tier or above.
            </p>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         DISTINCTIONS — What Legacy is NOT
    ============================================= -->
    <section ref="distinctionsSection" class="seal-distinctions section section-dark">
      <div class="section-default">
        <p class="overline reveal">Distinctions</p>
        <h2 class="distinctions-title word-reveal"><em>What this is not</em></h2>

        <div class="distinctions-grid">
          <div
            v-for="item in distinctions"
            :key="item.not"
            class="distinction-row reveal"
          >
            <div class="distinction-not">
              <p class="distinction-label-not">Not</p>
              <p class="distinction-value">{{ item.not }}</p>
            </div>
            <div class="distinction-divider" aria-hidden="true" />
            <div class="distinction-is">
              <p class="distinction-label-is">Instead</p>
              <p class="distinction-value">{{ item.is }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CLOSING
    ============================================= -->
    <section ref="closingSection" class="seal-closing section section-dark">
      <div class="section-narrow closing-inner">
        <blockquote class="closing-quote reveal">
          <p>
            <em>
              The seal is not the goal. The work is the goal.
              The seal is what happens when the work speaks
              for itself long enough that everyone else notices.
            </em>
          </p>
        </blockquote>
        <NuxtLink to="/legacy-ritual" class="closing-link stamped-overline reveal">
          View The Legacy Ritual
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
  title: 'Legacy Seal — Meraki Road',
  meta: [
    { name: 'description', content: 'The Legacy Seal. The final accreditation standard on Meraki Road — what it means, what it requires, and who holds it.' },
  ],
})

useSeoMeta({
  ogTitle: 'Legacy Seal — Meraki Road',
  ogDescription: 'The final accreditation standard on Meraki Road — what it means, what it requires, and who holds it.',
  twitterTitle: 'Legacy Seal — Meraki Road',
  twitterDescription: 'The final accreditation standard on Meraki Road — what it means, what it requires, and who holds it.',
})

/* -- Section refs ------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
const tiersSection = ref<HTMLElement | null>(null)
const criteriaSection = ref<HTMLElement | null>(null)
const holdersSection = ref<HTMLElement | null>(null)
const distinctionsSection = ref<HTMLElement | null>(null)
const closingSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

useGsapScrollReveal(tiersSection, '.reveal', { stagger: 0.1 })
useWordReveal(tiersSection, '.word-reveal')

useGsapScrollReveal(criteriaSection, '.reveal', { stagger: 0.12 })
useWordReveal(criteriaSection, '.word-reveal')

useGsapScrollReveal(holdersSection, '.reveal')
useWordReveal(holdersSection, '.word-reveal')

useGsapScrollReveal(distinctionsSection, '.reveal', { stagger: 0.1 })
useWordReveal(distinctionsSection, '.word-reveal')

useGsapScrollReveal(closingSection, '.reveal')

/* -- Data --------------------------------------- */
const holderCount = 7

const sealTiers = [
  {
    name: 'Associate',
    fullName: 'Associate',
    sealClass: 'seal-associate',
    desc: 'Entry tier. You\'ve been accepted to a district and are building your archival record.',
    requirement: 'Application accepted',
    active: false,
  },
  {
    name: 'Verified',
    fullName: 'Verified Practitioner',
    sealClass: 'seal-verified',
    desc: 'Recognized contributor. You\'ve submitted work, participated in reviews, and established a pattern of presence.',
    requirement: 'Consistent contributions over 6+ months',
    active: false,
  },
  {
    name: 'Fellow',
    fullName: 'Fellow',
    sealClass: 'seal-fellow',
    desc: 'Senior practitioner. Your work shapes the district. You mentor Associates, participate in governance, and influence standards.',
    requirement: 'Peer nomination + council review',
    active: false,
  },
  {
    name: 'Legacy',
    fullName: 'Legacy',
    sealClass: 'seal-legacy',
    desc: 'Permanent record. Your body of work, contributions, and influence are entered into the archive as permanent collection. This cannot be undone.',
    requirement: 'Fellow nomination + full body-of-work audit',
    active: true,
  },
]

const criteria = [
  {
    number: '01',
    label: 'Sustained Practice',
    desc: 'A minimum of two years at the Fellow tier with continuous archival activity. Gaps longer than six months reset the clock.',
  },
  {
    number: '02',
    label: 'Body of Work',
    desc: 'A substantive archival record — not a single breakthrough, but a demonstrated pattern of work that deepens over time.',
  },
  {
    number: '03',
    label: 'Contribution Beyond Self',
    desc: 'Evidence of mentorship, governance participation, standards development, or other forms of lifting the district beyond your own work.',
  },
  {
    number: '04',
    label: 'Peer Recognition',
    desc: 'Formal nomination by at least two current Fellows or Legacy holders. Self-nomination is not permitted.',
  },
  {
    number: '05',
    label: 'Integrity Record',
    desc: 'No unresolved standards violations, attribution disputes, or governance conflicts. The record must be clean.',
  },
  {
    number: '06',
    label: 'Council Consensus',
    desc: 'Unanimous approval from the district governance council. A single objection pauses the process for deliberation.',
  },
]

const distinctions = [
  {
    not: 'A reward for tenure',
    is: 'A recognition of depth — time served means nothing without the work to show for it',
  },
  {
    not: 'A popularity contest',
    is: 'An archival assessment — the record is what speaks, not reputation',
  },
  {
    not: 'An honorary title',
    is: 'A structural designation with governance authority and permanent archival weight',
  },
  {
    not: 'Revocable',
    is: 'Permanent — once entered, the record cannot be altered or removed',
  },
]
</script>

<style scoped>
/* ═══════════════════════════════════════════════
   LEGACY SEAL PAGE — Final Accreditation (Dark Theme)
   ═══════════════════════════════════════════════ */

/* ─── Hero ─── */
.seal-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  min-height: 60vh;
  display: flex;
  align-items: flex-end;
  position: relative;
  background: radial-gradient(circle at center, rgba(184, 150, 78, 0.1) 0%, rgba(10, 10, 10, 1) 70%);
  overflow: hidden;
}

.hero-atmosphere {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 40% 60%, rgba(184,150,78,0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 60% 40%, rgba(184,150,78,0.03) 0%, transparent 50%);
  animation: atmosphereShift 22s linear infinite;
  pointer-events: none;
}

@keyframes atmosphereShift {
  0% { background-position: 0% 0%, 100% 100%; }
  50% { background-position: 100% 100%, 0% 0%; }
  100% { background-position: 0% 0%, 100% 100%; }
}

.seal-hero-title {
  font-size: var(--text-display);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-display);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  max-width: 22ch;
  text-shadow: 0 0 40px rgba(184, 150, 78, 0.2);
}

.seal-hero-sub {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
}

/* ─── Seal Tiers ─── */
.tiers-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-12);
}

.tiers-stack {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.tier-row {
  display: grid;
  grid-template-columns: 8rem 1fr 14rem;
  gap: var(--space-6);
  align-items: center;
  padding: var(--space-6);
  border: 1px solid rgba(184, 150, 78, 0.06);
  transition: border-color var(--duration-normal) ease;
}

.tier-row.tier-active {
  border-color: rgba(184, 150, 78, 0.3);
  background: rgba(184, 150, 78, 0.03);
}

.tier-seal-col {
  display: flex;
  justify-content: center;
}

.tier-name {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-2);
}

.tier-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}

.tier-meta {
  text-align: right;
}

.tier-requirement {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  opacity: 0.6;
  letter-spacing: var(--tracking-wide);
}

/* ─── Criteria ─── */
.criteria-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.criteria-intro {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
  margin-top: var(--space-6);
  margin-bottom: var(--space-12);
}

.criteria-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.criterion-card {
  padding: var(--space-6) 0;
  border-top: 1px solid rgba(184, 150, 78, 0.15);
}

.criterion-number {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-gold);
  opacity: 0.3;
  display: block;
  margin-bottom: var(--space-3);
}

.criterion-label {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-3);
}

.criterion-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}

/* ─── Holders ─── */
.holders-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.holders-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);
}

.holders-note {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin-bottom: var(--space-8);
}

.holders-placeholder {
  width: 100%;
  padding: var(--space-12) var(--space-8);
}

.holders-empty {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  opacity: 0.6;
  line-height: var(--leading-relaxed);
  max-width: 40ch;
  margin: 0 auto;
}

/* ─── Distinctions ─── */
.distinctions-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-12);
}

.distinctions-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.distinction-row {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: var(--space-6);
  align-items: center;
  padding: var(--space-6);
  border: 1px solid rgba(184, 150, 78, 0.06);
}

.distinction-label-not,
.distinction-label-is {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  margin-bottom: var(--space-2);
}

.distinction-label-not {
  color: var(--color-dark-muted);
  opacity: 0.5;
}

.distinction-label-is {
  color: var(--color-gold);
  opacity: 0.6;
}

.distinction-value {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}

.distinction-divider {
  width: 1px;
  height: 100%;
  min-height: 2rem;
  background: rgba(184, 150, 78, 0.15);
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
  .seal-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-16);
    min-height: auto;
  }

  .seal-hero-title {
    max-width: none;
  }

  .tier-row {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }

  .tier-seal-col {
    justify-content: flex-start;
  }

  .tier-meta {
    text-align: left;
  }

  .criteria-grid {
    grid-template-columns: 1fr;
  }

  .distinction-row {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }

  .distinction-divider {
    width: 100%;
    height: 1px;
    min-height: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .seal-hero-title {
    text-shadow: none;
  }
  .hero-atmosphere {
    animation: none;
  }
}
</style>
