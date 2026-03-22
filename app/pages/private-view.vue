<template>
  <div class="private-view-page">

    <!-- ============================================
         HERO — The Invitation
    ============================================= -->
    <section ref="heroSection" class="pv-hero section section-dark">
      <div class="section-wide">
        <span class="overline-badge reveal">By Invitation Only</span>
        <h1 class="hero-title word-reveal">
          <em>The Private View</em>
        </h1>
        <div class="hero-stamp reveal">
          <span class="material-symbols-outlined hero-stamp-icon">lock</span>
          Meraki Verified Event
        </div>
        <p class="hero-subtitle reveal">
          Before the doors open. Before the press arrives. The Private View is
          where work is seen for the first time &mdash; in silence, at scale,
          by the people who understand what it took to make it.
        </p>
        <div class="hero-ctas reveal">
          <NuxtLink to="/apply" class="hero-cta-gold">Request an Invitation &rarr;</NuxtLink>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         THE RITUAL — How a Private View unfolds
    ============================================= -->
    <section ref="ritualSection" class="ritual section">
      <div class="section-narrow">
        <div class="ritual-inner">
          <span class="material-symbols-outlined ritual-icon reveal">schedule</span>
          <h2 class="ritual-heading word-reveal"><em>The Ritual</em></h2>
          <p class="ritual-text reveal">
            A Private View is not a party. It is a controlled reveal &mdash; a
            sequence designed so each work arrives at the right moment, in the
            right light, without competition. Guests move through the space at
            a pace set by the curator, not by a crowd.
          </p>
          <p class="ritual-text reveal">
            There are no screens on the walls. No QR codes. No catalogue
            numbers visible during the walk. The work speaks first. Context
            arrives later, in a printed folio handed to each guest at the exit.
          </p>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CURRENT SPECIMEN — Featured Work
    ============================================= -->
    <section ref="specimenSection" class="specimen section section-dark">
      <div class="section-wide">
        <div class="specimen-grid">
          <div class="specimen-image-wrap reveal">
            <div class="specimen-image grayscale-hover parallax-container">
              <NuxtImg
                src="/images/districts/the-frame.webp"
                alt="Featured specimen — large-format monotype suspended in darkened gallery"
                class="specimen-img"
                loading="lazy"
                width="640"
                height="800"
              />
              <span class="specimen-status-badge reveal">
                <span class="material-symbols-outlined specimen-status-icon">lock</span>
                Restricted Access
              </span>
            </div>
          </div>
          <div class="specimen-content">
            <p class="overline reveal">Current Exhibition</p>
            <h2 class="specimen-title word-reveal"><em>The Whispering Cartographies</em></h2>
            <p class="specimen-medium reveal">Monotype on Hahnem&uuml;hle &middot; 1220 &times; 920mm</p>
            <div class="specimen-badge reveal">
              <span class="seal-base seal-verified">Archival Verified</span>
            </div>
            <p class="specimen-desc reveal">
              Seven large-format monotypes that map imagined territories through
              pressure and absence. Each print was pulled once &mdash; no editions,
              no reproductions. The plates were destroyed after printing. What
              remains is singular: a set of marks that exist only here.
            </p>
            <div class="specimen-meta-grid reveal">
              <div class="specimen-meta-item">
                <span class="material-symbols-outlined specimen-meta-icon">palette</span>
                <div class="specimen-meta-detail">
                  <span class="specimen-meta-label">Medium</span>
                  <span class="specimen-meta-value">Monotype, ink on copper</span>
                </div>
              </div>
              <div class="specimen-meta-item">
                <span class="material-symbols-outlined specimen-meta-icon">straighten</span>
                <div class="specimen-meta-detail">
                  <span class="specimen-meta-label">Scale</span>
                  <span class="specimen-meta-value">1220 &times; 920mm each</span>
                </div>
              </div>
              <div class="specimen-meta-item">
                <span class="material-symbols-outlined specimen-meta-icon">verified</span>
                <div class="specimen-meta-detail">
                  <span class="specimen-meta-label">Provenance</span>
                  <span class="specimen-meta-value">Meraki Archival Chain</span>
                </div>
              </div>
              <div class="specimen-meta-item">
                <span class="material-symbols-outlined specimen-meta-icon">calendar_month</span>
                <div class="specimen-meta-detail">
                  <span class="specimen-meta-label">Opening</span>
                  <span class="specimen-meta-value">14 March 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         REGISTRY — RSVP & Access Protocol
    ============================================= -->
    <section ref="registrySection" class="registry section">
      <div class="section-narrow">
        <div class="registry-inner">
          <span class="material-symbols-outlined registry-icon reveal">how_to_reg</span>
          <h2 class="registry-heading word-reveal"><em>Request Access</em></h2>
          <p class="registry-text reveal">
            Attendance is limited. Each Private View accommodates no more than
            forty guests. Submit your credentials below and we will confirm
            your place within five working days.
          </p>
          <form class="registry-form reveal" @submit.prevent>
            <div class="registry-field">
              <label class="registry-label" for="pv-name">Full Name</label>
              <input id="pv-name" type="text" class="registry-input" placeholder="As it appears on your credential" autocomplete="name" />
            </div>
            <div class="registry-field">
              <label class="registry-label" for="pv-email">Contact</label>
              <input id="pv-email" type="email" class="registry-input" placeholder="your@email.com" autocomplete="email" />
            </div>
            <div class="registry-field">
              <label class="registry-label" for="pv-tier">Credential Tier</label>
              <select id="pv-tier" class="registry-input registry-select">
                <option value="" disabled selected>Select your tier</option>
                <option value="associate">Associate</option>
                <option value="verified">Verified</option>
                <option value="fellow">Fellow</option>
                <option value="legacy">Legacy</option>
              </select>
            </div>
            <button type="submit" class="registry-submit">Request Access &rarr;</button>
          </form>
          <p class="registry-note reveal">
            Priority is given to Fellow and Legacy credential holders.
            All attendees are subject to the viewing protocol.
          </p>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         THE SEQUENCE — Progressive Reveal
    ============================================= -->
    <section ref="sequenceSection" class="sequence section">
      <div class="section-default">
        <div class="sequence-header">
          <p class="overline reveal">The Viewing Sequence</p>
          <h2 class="sequence-title word-reveal"><em>Works Revealed in Order</em></h2>
          <p class="sequence-desc reveal">
            Each piece is encountered alone. The sequence is deliberate &mdash;
            a conversation between works that builds meaning through proximity and pause.
          </p>
        </div>

        <div class="sequence-timeline">
          <article
            v-for="(work, index) in viewingSequence"
            :key="work.title"
            class="sequence-card vellum-card reveal"
          >
            <div class="sequence-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="sequence-card-body">
              <h3 class="sequence-card-title"><em>{{ work.title }}</em></h3>
              <p class="sequence-card-medium">{{ work.medium }}</p>
              <p class="sequence-card-note">{{ work.note }}</p>
            </div>
            <div class="sequence-card-duration">
              <span class="material-symbols-outlined sequence-card-icon">{{ work.icon }}</span>
              <span class="sequence-card-time">{{ work.duration }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         THE FOLIO — Post-viewing documentation
    ============================================= -->
    <section ref="folioSection" class="folio section section-dark">
      <div class="section-default">
        <div class="folio-card reveal">
          <span class="material-symbols-outlined folio-icon">menu_book</span>
          <h2 class="folio-title word-reveal"><em>The Printed Folio</em></h2>
          <p class="folio-desc reveal">
            Every Private View guest receives a hand-numbered folio at the exit.
            Curator&rsquo;s notes, provenance records, process documentation,
            and a signed certificate of attendance. The folio is the exhibition&rsquo;s
            permanent record &mdash; proof that you were in the room when the work
            was first shown.
          </p>
          <div class="folio-details reveal">
            <div class="folio-detail">
              <span class="folio-detail-label">Edition</span>
              <span class="folio-detail-value">Limited to 40 copies</span>
            </div>
            <div class="folio-detail">
              <span class="folio-detail-label">Format</span>
              <span class="folio-detail-value">Unbound, archival card</span>
            </div>
            <div class="folio-detail">
              <span class="folio-detail-label">Includes</span>
              <span class="folio-detail-value">Certificate of Attendance</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PAST VIEWS — Archive of previous events
    ============================================= -->
    <section ref="archiveSection" class="past-views section">
      <div class="section-wide">
        <div class="past-views-header">
          <div class="past-views-header-left">
            <p class="overline reveal">Archive</p>
            <h2 class="past-views-title word-reveal"><em>Previous Private Views</em></h2>
          </div>
        </div>
        <div class="past-views-grid">
          <article
            v-for="view in pastViews"
            :key="view.title"
            class="past-view-card grayscale-hover reveal"
          >
            <div class="past-view-image-wrap">
              <NuxtImg
                :src="view.image"
                :alt="view.alt"
                class="past-view-image"
                loading="lazy"
                width="400"
                height="520"
              />
              <span class="past-view-date-badge">{{ view.date }}</span>
            </div>
            <div class="past-view-meta">
              <span class="past-view-curator">Curated by {{ view.curator }}</span>
            </div>
            <h3 class="past-view-card-title"><em>{{ view.title }}</em></h3>
            <p class="past-view-attendance">{{ view.attendance }} attended</p>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — Request Invitation
    ============================================= -->
    <section ref="ctaSection" class="pv-cta section-dark">
      <div class="section-narrow cta-inner">
        <span class="material-symbols-outlined cta-icon">mail</span>
        <h2 class="cta-title word-reveal">
          <em>The next view is by invitation.</em>
        </h2>
        <p class="cta-subtitle reveal">
          SUBMIT YOUR INTEREST AND WE WILL REACH OUT WHEN THE NEXT EXHIBITION OPENS
        </p>
        <div class="cta-buttons reveal">
          <NuxtLink to="/apply" class="cta-button-gold">Request Invitation</NuxtLink>
          <NuxtLink to="/pavilion" class="cta-button-ghost">View Public Exhibitions &rarr;</NuxtLink>
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
  title: 'The Private View — Meraki Road',
  meta: [
    { name: 'description', content: 'The Private View: an invitation-only exhibition ritual. Works revealed in sequence, in silence, for the people who understand what it took to make them.' },
  ],
})

useSeoMeta({
  ogTitle: 'The Private View — Meraki Road',
  ogDescription: 'An invitation-only exhibition ritual. Works revealed in sequence, in silence, for the people who understand what it took to make them.',
  twitterTitle: 'The Private View — Meraki Road',
  twitterDescription: 'An invitation-only exhibition ritual. Works revealed in sequence, in silence.',
})

/* -- Hero --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Ritual ------------------------------------- */
const ritualSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ritualSection, '.reveal', { stagger: 0.08 })
useWordReveal(ritualSection, '.word-reveal')

/* -- Specimen ----------------------------------- */
const specimenSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(specimenSection, '.reveal', { stagger: 0.08 })
useWordReveal(specimenSection, '.word-reveal')

/* -- Registry ----------------------------------- */
const registrySection = ref<HTMLElement | null>(null)
useGsapScrollReveal(registrySection, '.reveal', { stagger: 0.08 })
useWordReveal(registrySection, '.word-reveal')

/* -- Sequence ----------------------------------- */
const sequenceSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(sequenceSection, '.reveal', { stagger: 0.12 })
useWordReveal(sequenceSection, '.word-reveal')

/* -- Folio -------------------------------------- */
const folioSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(folioSection, '.reveal', { stagger: 0.08 })
useWordReveal(folioSection, '.word-reveal')

/* -- Past Views --------------------------------- */
const archiveSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(archiveSection, '.reveal', { stagger: 0.12 })
useWordReveal(archiveSection, '.word-reveal')

/* -- CTA ---------------------------------------- */
const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal', { stagger: 0.08 })

/* -- Data --------------------------------------- */
interface SequenceWork {
  title: string
  medium: string
  note: string
  icon: string
  duration: string
}

const viewingSequence: SequenceWork[] = [
  {
    title: 'Threshold',
    medium: 'Monotype on copper',
    note: 'The entry piece. A single vertical line bisects the plate — arrival and departure in one gesture.',
    icon: 'door_front',
    duration: '4 min',
  },
  {
    title: 'Terrain I: The Survey',
    medium: 'Monotype, oil-based ink',
    note: 'Topographic marks generated through controlled pressure variance. The map of a place that does not exist.',
    icon: 'landscape',
    duration: '6 min',
  },
  {
    title: 'Terrain II: The Erasure',
    medium: 'Monotype, solvent lift',
    note: 'The same plate, reprinted after selective removal. What was solid becomes negative space.',
    icon: 'layers_clear',
    duration: '6 min',
  },
  {
    title: 'The Negotiation',
    medium: 'Monotype, mixed pressure',
    note: 'Machine and hand in visible tension. Neither controls the outcome.',
    icon: 'handshake',
    duration: '5 min',
  },
  {
    title: 'Residue',
    medium: 'Ghost print on tissue',
    note: 'The plate&rsquo;s memory — ink that remained after the primary pull. Fainter, truer.',
    icon: 'blur_on',
    duration: '3 min',
  },
  {
    title: 'Cartography of Silence',
    medium: 'Monotype, dry-point additions',
    note: 'The culminating work. Every previous gesture referenced in a single compressed field.',
    icon: 'map',
    duration: '8 min',
  },
  {
    title: 'The Destroyed Plate',
    medium: 'Copper plate (decommissioned)',
    note: 'Mounted behind glass. The source, now void. No further editions possible.',
    icon: 'do_not_disturb',
    duration: '2 min',
  },
]

interface PastView {
  title: string
  image: string
  alt: string
  curator: string
  date: string
  attendance: string
}

const pastViews: PastView[] = [
  {
    title: 'Pressure & Release',
    image: '/images/districts/the-collective.webp',
    alt: 'Lithographic prints arranged in an immersive gallery installation',
    curator: 'Nadia Vasquez',
    date: 'Nov 2025',
    attendance: '32',
  },
  {
    title: 'Latent Landscapes',
    image: '/images/districts/meridian.webp',
    alt: 'AI-generated terrain studies rendered as large-format silver gelatin prints',
    curator: 'Ryo Tanaka',
    date: 'Sep 2025',
    attendance: '28',
  },
  {
    title: 'Mark, Erase, Repeat',
    image: '/images/districts/fieldwork.webp',
    alt: 'Charcoal process drawings documenting iterative erasure and layering',
    curator: 'Sable Chen',
    date: 'Jul 2025',
    attendance: '35',
  },
]
</script>

<style scoped>
/* =============================================
   HERO — The Invitation
   ============================================= */
.pv-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-16);
  text-align: center;
}

.pv-hero .overline-badge {
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
  max-width: 20ch;
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
  margin: 0 auto var(--space-8);
}

.hero-ctas {
  display: flex;
  justify-content: center;
}

.hero-cta-gold {
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

.hero-cta-gold:hover { opacity: 0.9; transform: translateY(-1px); }
.hero-cta-gold:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 4px; }

@media (max-width: 768px) {
  .pv-hero { padding-top: calc(var(--space-16) + 3rem); padding-bottom: var(--space-12); }
  .hero-title { font-size: clamp(2.5rem, 10vw, var(--text-display)); }
  .hero-cta-gold { min-height: 44px; display: inline-flex; align-items: center; justify-content: center; }
  .cta-title { font-size: clamp(1.75rem, 6vw, var(--text-h1)); }
}

@media (max-width: 480px) {
  .hero-title { font-size: clamp(2.5rem, 10vw, var(--text-display)); max-width: none; }
}

/* =============================================
   THE RITUAL
   ============================================= */
.ritual {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-background);
}

.ritual-inner {
  text-align: center;
}

.ritual-icon {
  font-size: 2rem;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
  display: inline-block;
}

.ritual-heading {
  font-size: var(--text-h2);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-bottom: var(--space-8);
}

.ritual-heading em { font-style: italic; }

.ritual-text {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 56ch;
  margin: 0 auto var(--space-6);
}

/* =============================================
   SPECIMEN — Featured Work
   ============================================= */
.specimen {
  padding: var(--space-24) var(--content-padding);
}

.specimen-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: start;
}

.specimen-image { position: relative; overflow: hidden; }

.specimen-img {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  display: block;
}

.specimen-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-3);
}

.specimen-title em { font-style: italic; }

.specimen-medium {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  margin-bottom: var(--space-4);
}

.specimen-badge { margin-bottom: var(--space-6); }

.specimen-desc {
  font-size: var(--text-body);
  color: var(--color-dark-secondary);
  line-height: var(--leading-relaxed);
  max-width: 48ch;
  margin-bottom: var(--space-8);
}

.specimen-meta-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}

.specimen-meta-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
}

.specimen-meta-icon {
  font-size: 1.25rem;
  color: var(--color-gold);
  margin-top: 2px;
}

.specimen-meta-label {
  display: block;
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  margin-bottom: 2px;
}

.specimen-meta-value {
  display: block;
  font-size: var(--text-small);
  color: var(--color-dark-secondary);
}

@media (max-width: 768px) {
  .specimen-grid { grid-template-columns: 1fr; gap: var(--space-8); }
  .specimen-meta-grid { grid-template-columns: 1fr; }
}

/* =============================================
   THE SEQUENCE — Progressive Reveal
   ============================================= */
.sequence {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-background);
}

.sequence-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.sequence-title {
  font-size: var(--text-h2);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);
}

.sequence-title em { font-style: italic; }

.sequence-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 52ch;
  margin: 0 auto;
}

.sequence-timeline {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.sequence-card {
  display: grid;
  grid-template-columns: 64px 1fr auto;
  gap: var(--space-6);
  align-items: center;
  padding: var(--space-6);
}

.sequence-number {
  font-family: var(--font-mono);
  font-size: var(--text-h2);
  font-weight: 200;
  color: var(--color-gold);
  opacity: 0.5;
}

.sequence-card-title {
  font-size: var(--text-h3);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-bottom: var(--space-1);
}

.sequence-card-title em { font-style: italic; }

.sequence-card-medium {
  font-size: var(--text-caption);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: var(--space-2);
}

.sequence-card-note {
  font-size: var(--text-small);
  color: var(--color-text-secondary);
  line-height: var(--leading-normal);
  max-width: 56ch;
}

.sequence-card-duration {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  opacity: 0.5;
}

.sequence-card-icon {
  font-size: 1.5rem;
  color: var(--color-text-muted);
}

.sequence-card-time {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .sequence-card {
    grid-template-columns: 48px 1fr;
    gap: var(--space-4);
  }
  .sequence-card-duration {
    grid-column: 2;
    flex-direction: row;
    justify-content: flex-start;
  }
}

/* =============================================
   THE FOLIO
   ============================================= */
.folio {
  padding: var(--space-24) var(--content-padding);
}

.folio-card {
  text-align: center;
  padding: var(--space-16);
  border: 1px solid rgba(184, 150, 78, 0.1);
  background: rgba(255, 255, 255, 0.02);
}

.folio-icon {
  font-size: 2.5rem;
  color: var(--color-gold);
  margin-bottom: var(--space-6);
  display: inline-block;
}

.folio-title {
  font-size: var(--text-h2);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-8);
}

.folio-title em { font-style: italic; }

.folio-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 56ch;
  margin: 0 auto var(--space-12);
}

.folio-details {
  display: flex;
  justify-content: center;
  gap: var(--space-12);
}

.folio-detail {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.folio-detail-label {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
}

.folio-detail-value {
  font-size: var(--text-small);
  color: var(--color-dark-secondary);
}

@media (max-width: 768px) {
  .folio-card { padding: var(--space-8); }
  .folio-details { flex-direction: column; gap: var(--space-4); align-items: center; }
}

/* =============================================
   PAST VIEWS — Archive
   ============================================= */
.past-views {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-background);
}

.past-views-header {
  margin-bottom: var(--space-12);
}

.past-views-title {
  font-size: var(--text-h2);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-4);
}

.past-views-title em { font-style: italic; }

.past-views-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.past-view-card { position: relative; }

.past-view-image-wrap {
  position: relative;
  overflow: hidden;
  margin-bottom: var(--space-4);
}

.past-view-image {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  display: block;
}

.past-view-date-badge {
  position: absolute;
  bottom: var(--space-3);
  left: var(--space-3);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-text);
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  padding: var(--space-1) var(--space-2);
}

.past-view-meta {
  margin-bottom: var(--space-2);
}

.past-view-curator {
  font-size: var(--text-caption);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
}

.past-view-card-title {
  font-size: var(--text-h3);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-bottom: var(--space-1);
}

.past-view-card-title em { font-style: italic; }

.past-view-attendance {
  font-size: var(--text-caption);
  color: var(--color-text-muted);
  font-family: var(--font-mono);
}

@media (max-width: 768px) {
  .past-views-grid { grid-template-columns: 1fr; max-width: 400px; }
}

/* =============================================
   CTA — Request Invitation
   ============================================= */
.pv-cta {
  padding: var(--space-24) var(--content-padding);
  text-align: center;
}

.cta-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

.cta-icon {
  font-size: 2rem;
  color: var(--color-gold);
}

.cta-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
}

.cta-title em { font-style: italic; }

.cta-subtitle {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  color: var(--color-dark-muted);
  margin-bottom: var(--space-8);
}

.cta-buttons {
  display: flex;
  gap: var(--space-6);
  align-items: center;
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
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  color: var(--color-dark-muted);
  background-image: none;
  transition: color var(--duration-normal) ease;
}

.cta-button-ghost:hover { color: var(--color-gold); }
.cta-button-ghost:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 4px; }

@media (max-width: 480px) {
  .cta-buttons { flex-direction: column; }
}

/* =============================================
   REGISTRY — RSVP & Access Protocol
   ============================================= */
.registry {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-background);
}

.registry-inner {
  text-align: center;
}

.registry-icon {
  font-size: 2rem;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
  display: inline-block;
}

.registry-heading {
  font-size: var(--text-h2);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-bottom: var(--space-6);
}

.registry-heading em { font-style: italic; }

.registry-text {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 52ch;
  margin: 0 auto var(--space-12);
}

.registry-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  max-width: 420px;
  margin: 0 auto var(--space-8);
  text-align: left;
}

.registry-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.registry-label {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.registry-input {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-text);
  background: transparent;
  border: 1px solid var(--color-border);
  padding: var(--space-3) var(--space-4);
  transition: border-color var(--duration-normal) ease, box-shadow var(--duration-normal) ease;
  appearance: none;
  -webkit-appearance: none;
}

.registry-input:focus {
  outline: none;
  border-color: var(--color-gold);
  box-shadow: 0 0 0 3px rgba(184, 150, 78, 0.15);
}

.registry-input::placeholder {
  color: var(--color-text-muted);
  opacity: 0.6;
}

.registry-select {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B6B73' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-4) center;
  padding-right: var(--space-12);
}

.registry-submit {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-bg);
  padding: var(--space-4) var(--space-8);
  background: var(--color-gold);
  border: none;
  cursor: pointer;
  transition: opacity var(--duration-normal) ease, transform var(--duration-normal) ease;
  align-self: flex-start;
}

.registry-submit:hover { opacity: 0.9; transform: translateY(-1px); }
.registry-submit:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 4px; }

.registry-note {
  font-size: var(--text-caption);
  color: var(--color-text-muted);
  max-width: 48ch;
  margin: 0 auto;
  line-height: var(--leading-normal);
}

/* Specimen Status Badge */
.specimen-status-badge {
  position: absolute;
  bottom: var(--space-4);
  right: var(--space-4);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-text);
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: var(--space-1) var(--space-3);
  border: 1px solid rgba(184, 150, 78, 0.25);
}

.specimen-status-icon {
  font-size: 14px;
  color: var(--color-gold);
}
</style>
