<template>
  <div class="atelier-page">

    <!-- ============================================
         HERO — Sartorial Sovereignty
    ============================================= -->
    <section ref="heroSection" class="atelier-hero section section-dark">
      <div class="section-wide">
        <span class="overline-badge reveal">District 12 &mdash; The Atelier</span>
        <h1 class="hero-title word-reveal">
          <em>Sartorial Sovereignty</em>
        </h1>
        <div class="hero-stamp reveal">
          <span class="material-symbols-outlined hero-stamp-icon">verified</span>
          Meraki Verified Atelier
        </div>
        <div class="hero-image-frame reveal">
          <div class="hero-image-wrap grayscale-hover parallax-container">
            <NuxtImg
              src="/images/districts/the-frame.webp"
              alt="Darkened atelier workspace — fabric bolts, mannequins, and precision cutting tables"
              class="hero-image"
              loading="eager"
              width="1200"
              height="600"
            />
          </div>
        </div>
        <p class="hero-subtitle reveal">
          The Fashion Atelier is where garments are treated as arguments, not accessories.
          Design, production, and presentation of collections rooted in creative culture &mdash;
          capsule drops, collaborative runs, wearable work that carries the weight of its own making.
        </p>
        <div class="hero-ctas reveal">
          <NuxtLink to="/apply" class="hero-cta-gold">Request Private View &rarr;</NuxtLink>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CURRENT COLLECTION — Preview Grid
    ============================================= -->
    <section ref="collectionSection" class="collection section">
      <div class="section-wide">
        <div class="collection-header">
          <div class="collection-header-left">
            <p class="overline reveal">Archive Index 12.A</p>
            <h2 class="collection-title word-reveal"><em>Current Collection</em></h2>
          </div>
          <span class="collection-count reveal">01 / 04</span>
        </div>

        <div class="collection-grid">
          <article
            v-for="piece in collectionPieces"
            :key="piece.title"
            class="collection-card vellum-card reveal"
          >
            <div class="collection-image-wrap grayscale-hover parallax-container">
              <NuxtImg
                :src="piece.image"
                :alt="piece.alt"
                class="collection-image"
                loading="lazy"
                width="400"
                height="520"
              />
            </div>
            <div class="collection-card-body">
              <span class="collection-label">{{ piece.label }}</span>
              <h3 class="collection-card-title"><em>{{ piece.title }}</em></h3>
              <p class="collection-card-desc">{{ piece.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PHILOSOPHY — Ink & Stitch Methodology
    ============================================= -->
    <section ref="philosophySection" class="philosophy section section-dark">
      <div class="section-narrow">
        <div class="philosophy-inner">
          <span class="overline reveal">Methodology</span>
          <h2 class="philosophy-heading word-reveal"><em>Every Stitch is a Sentence</em></h2>
          <p class="philosophy-text reveal">
            The Atelier does not follow seasons. Collections emerge when the work is ready,
            not when the calendar demands it. Each piece begins with research &mdash; material
            origin, construction history, the cultural lineage of a silhouette &mdash; and
            arrives at a garment only after the argument is complete.
          </p>
          <p class="philosophy-text reveal">
            We source deliberately. We cut slowly. We reject the disposable premise that
            fashion must be fast to matter. What leaves this room carries provenance:
            where the fabric came from, who shaped it, and why it was made this way.
          </p>
          <div class="philosophy-details reveal">
            <div class="philosophy-detail">
              <span class="philosophy-detail-label">Material Origin</span>
              <span class="philosophy-detail-value">Traceable to source mill</span>
            </div>
            <div class="philosophy-detail">
              <span class="philosophy-detail-label">Stitch Density</span>
              <span class="philosophy-detail-value">12 SPI hand-finished seams</span>
            </div>
            <div class="philosophy-detail">
              <span class="philosophy-detail-label">Hardware</span>
              <span class="philosophy-detail-value">Custom-cast, district-stamped</span>
            </div>
            <div class="philosophy-detail">
              <span class="philosophy-detail-label">Production Cycle</span>
              <span class="philosophy-detail-value">8&ndash;14 weeks per collection</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         COLLABORATIONS — Open Call
    ============================================= -->
    <section ref="collabSection" class="collaborations section">
      <div class="section-wide">
        <div class="collab-grid">
          <div class="collab-content">
            <p class="overline reveal">Collaborative Drops</p>
            <h2 class="collab-title word-reveal"><em>Build With Us</em></h2>
            <p class="collab-desc reveal">
              The Atelier runs collaborative capsules with practitioners across Meraki Road.
              Printmakers, illustrators, sculptors, motion designers &mdash; if your medium
              translates to fabric or form, there is a conversation worth having.
            </p>
            <p class="collab-desc reveal">
              Past collaborations have produced screen-printed limited runs with The Collective,
              hand-dyed textiles with Meraki Institute artists, and structural knitwear developed
              alongside the Institute&rsquo;s material science research.
            </p>
            <div class="collab-ctas reveal">
              <NuxtLink to="/apply" class="collab-cta-primary">Propose a Collaboration &rarr;</NuxtLink>
            </div>
          </div>
          <div class="collab-image-wrap reveal">
            <div class="collab-image grayscale-hover parallax-container">
              <NuxtImg
                src="/images/districts/the-collective.webp"
                alt="Collaborative textile work — screen-printed fabric panels drying in studio"
                class="collab-image-img"
                loading="lazy"
                width="520"
                height="680"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PROVENANCE — Seal & Verification
    ============================================= -->
    <section ref="provenanceSection" class="provenance section section-dark">
      <div class="section-default">
        <div class="provenance-card reveal">
          <span class="material-symbols-outlined provenance-icon">verified</span>
          <h2 class="provenance-title word-reveal"><em>Seal of Provenance</em></h2>
          <p class="provenance-desc reveal">
            Every garment that leaves the Atelier carries a Meraki provenance seal &mdash;
            a physical marker linking the piece to its material chain, production record,
            and the practitioner who made it. This is not branding. It is accountability.
          </p>
          <p class="provenance-desc reveal">
            The seal is verifiable through the Meraki Archival. Scan it, and you see
            every decision that brought the garment into existence.
          </p>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PRESENTATIONS — Upcoming Shows
    ============================================= -->
    <section ref="presentationsSection" class="presentations section">
      <div class="section-wide">
        <div class="presentations-header">
          <p class="overline reveal">Upcoming</p>
          <h2 class="presentations-title word-reveal"><em>Presentations &amp; Shows</em></h2>
        </div>

        <div class="presentations-list">
          <article
            v-for="show in presentations"
            :key="show.title"
            class="presentation-row reveal"
          >
            <div class="presentation-date">
              <span class="presentation-month">{{ show.month }}</span>
              <span class="presentation-year">{{ show.year }}</span>
            </div>
            <div class="presentation-body">
              <h3 class="presentation-name"><em>{{ show.title }}</em></h3>
              <p class="presentation-venue">{{ show.venue }}</p>
            </div>
            <span class="presentation-status seal-base" :class="show.sealClass">{{ show.status }}</span>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — Private View Registry
    ============================================= -->
    <section ref="ctaSection" class="atelier-cta section-dark">
      <div class="section-narrow cta-inner">
        <span class="material-symbols-outlined cta-icon">checkroom</span>
        <h2 class="cta-title word-reveal">
          <em>Enter the Atelier.</em>
        </h2>
        <p class="cta-subtitle reveal">
          PRIVATE VIEW REQUESTS REVIEWED ON A ROLLING BASIS
        </p>
        <div class="cta-buttons reveal">
          <NuxtLink to="/apply" class="cta-button-gold">Request Access</NuxtLink>
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
  title: 'Fashion Atelier — Meraki Road',
  meta: [
    { name: 'description', content: 'District 12 — The Meraki Fashion Atelier. Design, production, and presentation of collections rooted in creative culture. Capsule drops, collaborative runs, wearable work.' },
  ],
})

useSeoMeta({
  ogTitle: 'Fashion Atelier — Meraki Road',
  ogDescription: 'District 12 — Design, production, and presentation of fashion collections rooted in creative culture.',
  twitterTitle: 'Fashion Atelier — Meraki Road',
  twitterDescription: 'District 12 — Design, production, and presentation of fashion collections rooted in creative culture.',
})

/* -- Hero --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Collection --------------------------------- */
const collectionSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(collectionSection, '.reveal', { stagger: 0.12 })
useWordReveal(collectionSection, '.word-reveal')

/* -- Philosophy --------------------------------- */
const philosophySection = ref<HTMLElement | null>(null)
useGsapScrollReveal(philosophySection, '.reveal', { stagger: 0.08 })
useWordReveal(philosophySection, '.word-reveal')

/* -- Collaborations ----------------------------- */
const collabSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(collabSection, '.reveal', { stagger: 0.08 })
useWordReveal(collabSection, '.word-reveal')

/* -- Provenance --------------------------------- */
const provenanceSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(provenanceSection, '.reveal', { stagger: 0.08 })
useWordReveal(provenanceSection, '.word-reveal')

/* -- Presentations ------------------------------ */
const presentationsSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(presentationsSection, '.reveal', { stagger: 0.1 })
useWordReveal(presentationsSection, '.word-reveal')

/* -- CTA ---------------------------------------- */
const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal', { stagger: 0.08 })

/* -- Data --------------------------------------- */
interface CollectionPiece {
  title: string
  label: string
  image: string
  alt: string
  description: string
}

const collectionPieces: CollectionPiece[] = [
  {
    title: 'The Archival Overcoat',
    label: 'Outerwear',
    image: '/images/districts/the-provenance.webp',
    alt: 'Heavy wool overcoat with hand-finished seams and district-stamped hardware',
    description: 'Double-faced wool, unlined. Raglan sleeve cut from a single panel. Every seam pressed open, never felled.',
  },
  {
    title: 'The Obsidian Drape',
    label: 'Eveningwear',
    image: '/images/districts/the-collective.webp',
    alt: 'Black silk drape dress with structural pleating and weighted hem',
    description: 'Silk charmeuse, bias-cut. The weight sits in the hem — lead shot sewn into the facing — so it moves like liquid, not fabric.',
  },
  {
    title: 'Process Jacket No. 7',
    label: 'Studio Capsule',
    image: '/images/districts/fieldwork.webp',
    alt: 'Canvas work jacket with ink stains and reinforced elbow patches',
    description: 'Waxed cotton canvas. Built for the studio, not the runway. Patched, stained, functional. The kind of garment that improves with use.',
  },
]

interface Presentation {
  title: string
  venue: string
  month: string
  year: string
  status: string
  sealClass: string
}

const presentations: Presentation[] = [
  {
    title: 'Capsule 04: Material Evidence',
    venue: 'The Pavilion — Main Hall',
    month: 'Jun',
    year: '2026',
    status: 'Confirmed',
    sealClass: 'seal-verified',
  },
  {
    title: 'Collaborative Drop: Meraki Institute x Atelier',
    venue: 'District 04 — Meraki Institute',
    month: 'Aug',
    year: '2026',
    status: 'In Production',
    sealClass: 'seal-associate',
  },
  {
    title: 'The Provenance Show',
    venue: 'External — Haus der Kunst, Munich',
    month: 'Nov',
    year: '2026',
    status: 'Invited',
    sealClass: 'seal-fellow',
  },
]
</script>

<style scoped>
/* =============================================
   HERO
   ============================================= */
.atelier-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-16);
  text-align: center;
}

.atelier-hero .overline-badge {
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

.hero-image-frame { margin-bottom: var(--space-12); }
.hero-image-wrap { position: relative; overflow: hidden; }

.hero-image {
  width: 100%;
  height: auto;
  aspect-ratio: 2 / 1;
  object-fit: cover;
  display: block;
}

.hero-subtitle {
  font-size: var(--text-body);
  font-weight: 400;
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 58ch;
  margin: 0 auto var(--space-8);
}

.hero-ctas { display: flex; justify-content: center; }

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

/* =============================================
   COLLECTION GRID
   ============================================= */
.collection-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: var(--space-12);
}

.collection-title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

.collection-title em { font-style: italic; }

.collection-count {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.collection-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--grid-gutter);
}

.collection-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--color-border);
  overflow: hidden;
}

.collection-image-wrap { overflow: hidden; }

.collection-image {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  display: block;
}

.collection-card-body {
  padding: var(--space-6);
}

.collection-label {
  display: block;
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-2);
}

.collection-card-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  line-height: var(--leading-snug);
  margin-bottom: var(--space-3);
}

.collection-card-title em { font-style: italic; }

.collection-card-desc {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
}

/* =============================================
   PHILOSOPHY
   ============================================= */
.philosophy-inner {
  text-align: center;
}

.philosophy-heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-dark-text);
  margin-bottom: var(--space-8);
  max-width: 22ch;
  margin-left: auto;
  margin-right: auto;
}

.philosophy-heading em { font-style: italic; }

.philosophy-text {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 58ch;
  margin: 0 auto var(--space-6);
}

.philosophy-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-12);
  text-align: left;
  border-top: 1px solid rgba(184, 150, 78, 0.15);
  padding-top: var(--space-8);
}

.philosophy-detail-label {
  display: block;
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-1);
}

.philosophy-detail-value {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
}

/* =============================================
   COLLABORATIONS
   ============================================= */
.collab-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.collab-title {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  margin-bottom: var(--space-6);
}

.collab-title em { font-style: italic; }

.collab-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
  max-width: 50ch;
}

.collab-ctas { margin-top: var(--space-8); }

.collab-cta-primary {
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

.collab-cta-primary:hover { opacity: 0.9; transform: translateY(-1px); }
.collab-cta-primary:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 4px; }

.collab-image-img {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  display: block;
}

/* =============================================
   PROVENANCE
   ============================================= */
.provenance-card {
  text-align: center;
  padding: var(--space-16) var(--space-8);
  border: 1px solid rgba(184, 150, 78, 0.15);
}

.provenance-icon {
  font-size: 2.5rem;
  color: var(--color-gold);
  margin-bottom: var(--space-6);
}

.provenance-title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  line-height: var(--leading-tight);
  color: var(--color-dark-text);
  margin-bottom: var(--space-6);
}

.provenance-title em { font-style: italic; }

.provenance-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 54ch;
  margin: 0 auto var(--space-4);
}

/* =============================================
   PRESENTATIONS
   ============================================= */
.presentations-header {
  margin-bottom: var(--space-12);
}

.presentations-title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

.presentations-title em { font-style: italic; }

.presentations-list {
  display: flex;
  flex-direction: column;
}

.presentation-row {
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: var(--space-8);
  align-items: center;
  padding: var(--space-6) 0;
  border-bottom: 1px solid var(--color-border);
}

.presentation-row:first-child {
  border-top: 1px solid var(--color-border);
}

.presentation-date {
  display: flex;
  flex-direction: column;
}

.presentation-month {
  font-size: var(--text-h3);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: 1;
}

.presentation-year {
  font-size: var(--text-overline);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
}

.presentation-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  line-height: var(--leading-snug);
  margin-bottom: var(--space-1);
}

.presentation-name em { font-style: italic; }

.presentation-venue {
  font-size: var(--text-small);
  color: var(--color-text-muted);
}

/* =============================================
   CTA
   ============================================= */
.atelier-cta {
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
  .atelier-hero { padding-top: calc(var(--space-16) + 3rem); padding-bottom: var(--space-12); }
  .hero-image { aspect-ratio: 16 / 9; }
  .collection-grid { grid-template-columns: 1fr; }
  .collection-header { flex-direction: column; align-items: flex-start; gap: var(--space-2); }
  .philosophy-details { grid-template-columns: 1fr; }
  .collab-grid { grid-template-columns: 1fr; }
  .presentation-row { grid-template-columns: 80px 1fr; gap: var(--space-4); }
  .presentation-status { grid-column: 1 / -1; justify-self: start; }
}

@media (max-width: 480px) {
  .hero-cta-gold,
  .collab-cta-primary,
  .cta-button-gold,
  .cta-button-ghost {
    width: 100%;
    text-align: center;
  }
  .cta-buttons { flex-direction: column; }
}
</style>
