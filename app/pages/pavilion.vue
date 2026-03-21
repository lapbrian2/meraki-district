<template>
  <div class="pavilion-page">

    <!-- ============================================
         HERO — Featured Exhibition
    ============================================= -->
    <section ref="heroSection" class="pavilion-hero section section-dark">
      <div class="section-wide">
        <span class="overline-badge reveal">The Pavilion</span>
        <h1 class="hero-title word-reveal">
          <em>The Silent Architecture of Ink</em>
        </h1>
        <div class="hero-stamp reveal">
          <span class="material-symbols-outlined hero-stamp-icon">verified</span>
          Meraki Verified Archival
        </div>
        <div class="hero-image-frame reveal">
          <div class="hero-image-wrap grayscale-hover parallax-container">
            <NuxtImg
              src="/images/districts/the-frame.webp"
              alt="Featured exhibition — monotype prints suspended in darkened gallery"
              class="hero-image"
              loading="eager"
              width="1200"
              height="600"
            />
          </div>
        </div>
        <p class="hero-subtitle reveal">
          The Pavilion is where finished work meets its audience. A curated exhibition
          space for practitioners who have moved through the districts and arrived at
          something worth showing. No algorithms. No feeds. Just considered placement.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         ARTIST IN RESIDENCE — Spotlight
    ============================================= -->
    <section ref="artistSection" class="artist-spotlight section">
      <div class="section-wide">
        <div class="artist-grid">
          <div class="artist-portrait-wrap reveal">
            <div class="artist-portrait grayscale-hover parallax-container">
              <NuxtImg
                src="/images/districts/the-provenance.webp"
                alt="Elias Thorne working in his studio with kinetic monotype press"
                class="artist-portrait-img"
                loading="lazy"
                width="520"
                height="680"
              />
            </div>
          </div>
          <div class="artist-content">
            <p class="overline reveal">Artist in Residence</p>
            <h2 class="artist-name word-reveal"><em>Elias Thorne</em></h2>
            <p class="artist-discipline reveal">Kinetic Monotypes &amp; Digital Artifacts</p>
            <div class="artist-badge reveal">
              <span class="seal-base seal-fellow">Artist in Residence</span>
            </div>
            <p class="artist-bio reveal">
              Thorne builds machines that make prints. Each piece begins as a set of
              physical constraints — motor speed, ink viscosity, paper grain — and the
              image arrives through negotiation between system and material. His residency
              at The Pavilion produced fourteen works, three of which now live in the
              permanent Meraki Archival.
            </p>
            <div class="artist-ctas reveal">
              <NuxtLink to="#" class="artist-cta-primary">View The Process &rarr;</NuxtLink>
              <NuxtLink to="#" class="artist-cta-ghost">Full Portfolio &rarr;</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CURRENT EXHIBITIONS — Staggered Gallery Grid
    ============================================= -->
    <section ref="exhibitionsSection" class="exhibitions section section-dark">
      <div class="section-wide">
        <div class="exhibitions-header">
          <div class="exhibitions-header-left">
            <p class="overline reveal">On View</p>
            <h2 class="exhibitions-title word-reveal"><em>Current Exhibitions</em></h2>
          </div>
          <NuxtLink to="#" class="exhibitions-view-all reveal">
            View All Exhibitions &rarr;
          </NuxtLink>
        </div>

        <div class="exhibitions-grid">
          <article
            v-for="(exhibition, index) in exhibitions"
            :key="exhibition.title"
            class="exhibition-card grayscale-hover reveal"
            :class="{ 'exhibition-card--offset': index === 1 }"
          >
            <div class="exhibition-image-wrap">
              <NuxtImg
                :src="exhibition.image"
                :alt="exhibition.alt"
                class="exhibition-image"
                loading="lazy"
                width="400"
                height="520"
              />
              <div class="exhibition-verified">
                <span class="material-symbols-outlined exhibition-verified-icon">verified</span>
              </div>
            </div>
            <div class="exhibition-meta">
              <span class="exhibition-curator">Curated by {{ exhibition.curator }}</span>
              <span class="exhibition-location">{{ exhibition.location }}</span>
            </div>
            <h3 class="exhibition-title"><em>{{ exhibition.title }}</em></h3>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PAVILION STORE CTA
    ============================================= -->
    <section ref="storeSection" class="pavilion-store section">
      <div class="section-default">
        <div class="store-card reveal">
          <span class="material-symbols-outlined store-icon">shopping_bag</span>
          <h2 class="store-title word-reveal"><em>Acquire the Archival</em></h2>
          <p class="store-desc reveal">
            Limited edition prints, exhibition catalogues, and process documentation
            from Pavilion residents. Every piece is numbered, verified, and shipped
            with provenance records from Meraki Road.
          </p>
          <NuxtLink to="#" class="store-cta reveal">
            Enter Pavilion Store &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ============================================
         CTA FOOTER — Submit Work
    ============================================= -->
    <section ref="ctaSection" class="pavilion-cta section-dark">
      <div class="section-narrow cta-inner">
        <span class="material-symbols-outlined cta-icon">publish</span>
        <h2 class="cta-title word-reveal">
          <em>Show what you&rsquo;ve built.</em>
        </h2>
        <p class="cta-subtitle reveal">
          THE PAVILION REVIEWS SUBMISSIONS ON A ROLLING BASIS
        </p>
        <div class="cta-buttons reveal">
          <NuxtLink to="/apply" class="cta-button-gold">Submit Work</NuxtLink>
          <NuxtLink to="#" class="cta-button-ghost">View Open Calls</NuxtLink>
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
  title: 'The Pavilion — Meraki Road',
  meta: [
    { name: 'description', content: 'The Meraki Pavilion: a curated exhibition space for verified practitioners. Curation, visibility, and archival — where finished work meets its audience.' },
  ],
})

useSeoMeta({
  ogTitle: 'The Pavilion — Meraki Road',
  ogDescription: 'A curated exhibition space for verified practitioners. Curation, visibility, and archival — where finished work meets its audience.',
  twitterTitle: 'The Pavilion — Meraki Road',
  twitterDescription: 'A curated exhibition space for verified practitioners. Curation, visibility, and archival — where finished work meets its audience.',
})

/* -- Hero --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Artist Spotlight --------------------------- */
const artistSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(artistSection, '.reveal', { stagger: 0.08 })
useWordReveal(artistSection, '.word-reveal')

/* -- Exhibitions -------------------------------- */
const exhibitionsSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(exhibitionsSection, '.reveal', { stagger: 0.12 })
useWordReveal(exhibitionsSection, '.word-reveal')

/* -- Store -------------------------------------- */
const storeSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(storeSection, '.reveal', { stagger: 0.08 })
useWordReveal(storeSection, '.word-reveal')

/* -- CTA ---------------------------------------- */
const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal', { stagger: 0.08 })

/* -- Data --------------------------------------- */
interface Exhibition {
  title: string
  image: string
  alt: string
  curator: string
  location: string
}

const exhibitions: Exhibition[] = [
  {
    title: 'Pressure & Release',
    image: '/images/districts/the-collective.webp',
    alt: 'Lithographic prints arranged in an immersive gallery installation',
    curator: 'Nadia Vasquez',
    location: 'Wing A',
  },
  {
    title: 'Latent Landscapes',
    image: '/images/districts/meridian.webp',
    alt: 'AI-generated terrain studies rendered as large-format silver gelatin prints',
    curator: 'Ryo Tanaka',
    location: 'Main Hall',
  },
  {
    title: 'Mark, Erase, Repeat',
    image: '/images/districts/fieldwork.webp',
    alt: 'Charcoal process drawings documenting iterative erasure and layering',
    curator: 'Sable Chen',
    location: 'Wing B',
  },
]
</script>

<style scoped>
/* =============================================
   HERO — Featured Exhibition
   ============================================= */
.pavilion-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-16);
  text-align: center;
}

.pavilion-hero .overline-badge {
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

.hero-title em {
  font-style: italic;
}

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

.hero-stamp-icon {
  font-size: 16px;
  color: var(--color-gold);
}

.hero-image-frame {
  margin-bottom: var(--space-12);
}

.hero-image-wrap {
  position: relative;
  overflow: hidden;
}

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
  margin: 0 auto;
}

@media (max-width: 768px) {
  .pavilion-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-12);
  }

  .hero-image {
    aspect-ratio: 16 / 9;
  }
}

/* =============================================
   ARTIST IN RESIDENCE — Spotlight
   ============================================= */
.artist-spotlight {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-background);
}

.artist-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.artist-portrait {
  position: relative;
  overflow: hidden;
}

.artist-portrait-img {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  display: block;
}

.artist-name {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-ink);
  margin-top: var(--space-4);
  margin-bottom: var(--space-3);
}

.artist-name em {
  font-style: italic;
}

.artist-discipline {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
}

.artist-badge {
  margin-bottom: var(--space-6);
}

.artist-bio {
  font-size: var(--text-body);
  font-weight: 400;
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  max-width: 48ch;
  margin-bottom: var(--space-8);
}

.artist-ctas {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.artist-cta-primary {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-ink);
  padding: var(--space-4) var(--space-8);
  background: var(--color-gold);
  background-image: none;
  transition: opacity var(--duration-normal) ease,
              transform var(--duration-normal) ease;
}

.artist-cta-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.artist-cta-ghost {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text);
  padding: var(--space-4) var(--space-8);
  border: 1px solid var(--color-border);
  border-left: 2px solid var(--color-gold);
  background-image: none;
  background-color: transparent;
  transition: border-color var(--duration-normal) ease,
              color var(--duration-normal) ease,
              background-color var(--duration-normal) ease;
}

.artist-cta-ghost:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
  background-color: rgba(184, 150, 78, 0.04);
}

.artist-cta-primary:focus-visible,
.artist-cta-ghost:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

@media (max-width: 768px) {
  .artist-spotlight {
    padding: var(--space-16) var(--content-padding);
  }

  .artist-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .artist-ctas {
    flex-direction: column;
  }

  .artist-cta-primary,
  .artist-cta-ghost {
    width: 100%;
    text-align: center;
  }
}

/* =============================================
   CURRENT EXHIBITIONS — Staggered Grid
   ============================================= */
.exhibitions {
  padding: var(--space-24) var(--content-padding);
}

.exhibitions-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: var(--space-12);
}

.exhibitions-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  color: var(--color-dark-text);
  margin-top: var(--space-3);
}

.exhibitions-title em {
  font-style: italic;
}

.exhibitions-view-all {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  white-space: nowrap;
  transition: opacity var(--duration-normal) ease;
}

.exhibitions-view-all:hover {
  opacity: 0.7;
}

.exhibitions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.exhibition-card {
  cursor: pointer;
}

.exhibition-card--offset {
  margin-top: var(--space-12);
}

.exhibition-image-wrap {
  position: relative;
  overflow: hidden;
  margin-bottom: var(--space-4);
}

.exhibition-image {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  display: block;
  transition: transform var(--duration-slow) var(--ease-out);
}

.exhibition-card:hover .exhibition-image {
  transform: scale(1.03) translateY(-1%);
}

.exhibition-verified {
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);
}

.exhibition-verified-icon {
  font-size: 20px;
  color: var(--color-gold);
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.5));
}

.exhibition-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-2);
}

.exhibition-curator {
  font-size: var(--text-caption);
  font-weight: 400;
  color: var(--color-dark-muted);
}

.exhibition-location {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
}

.exhibition-title {
  font-size: var(--text-h3);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-snug);
  color: var(--color-dark-text);
}

.exhibition-title em {
  font-style: italic;
}

@media (max-width: 768px) {
  .exhibitions {
    padding: var(--space-16) var(--content-padding);
  }

  .exhibitions-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-4);
  }

  .exhibitions-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }

  .exhibition-card--offset {
    margin-top: 0;
  }
}

/* =============================================
   PAVILION STORE CTA
   ============================================= */
.pavilion-store {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-background);
}

.store-card {
  text-align: center;
  padding: var(--space-16) var(--space-12);
  border: 1px solid var(--color-border);
}

.store-icon {
  font-size: 32px;
  color: var(--color-gold);
  margin-bottom: var(--space-6);
}

.store-title {
  font-size: var(--text-h2);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  color: var(--color-ink);
  margin-bottom: var(--space-6);
}

.store-title em {
  font-style: italic;
}

.store-desc {
  font-size: var(--text-body);
  font-weight: 400;
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 52ch;
  margin: 0 auto var(--space-8);
}

.store-cta {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-ink);
  padding: var(--space-4) var(--space-8);
  background: var(--color-gold);
  background-image: none;
  transition: opacity var(--duration-normal) ease,
              transform var(--duration-normal) ease;
}

.store-cta:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.store-cta:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

@media (max-width: 768px) {
  .pavilion-store {
    padding: var(--space-16) var(--content-padding);
  }

  .store-card {
    padding: var(--space-8) var(--space-6);
  }
}

/* =============================================
   CTA FOOTER — Submit Work
   ============================================= */
.pavilion-cta {
  padding: var(--space-32) var(--content-padding);
  text-align: center;
}

.cta-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-icon {
  font-size: 32px;
  color: var(--color-gold);
  margin-bottom: var(--space-6);
}

.cta-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
  letter-spacing: var(--tracking-hero);
}

.cta-title em {
  font-style: italic;
}

.cta-subtitle {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  margin-bottom: var(--space-12);
}

.cta-buttons {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  justify-content: center;
}

.cta-button-gold {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-ink);
  padding: var(--space-4) var(--space-8);
  background: var(--color-gold);
  background-image: none;
  transition: opacity var(--duration-normal) ease,
              transform var(--duration-normal) ease;
}

.cta-button-gold:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.cta-button-ghost {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-text);
  padding: var(--space-4) var(--space-8);
  border: 1px solid rgba(250, 250, 249, 0.2);
  border-left: 2px solid var(--color-gold);
  background-image: none;
  background-color: transparent;
  transition: border-color var(--duration-normal) ease,
              color var(--duration-normal) ease,
              background-color var(--duration-normal) ease;
}

.cta-button-ghost:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
  background-color: rgba(184, 150, 78, 0.06);
}

.cta-button-gold:focus-visible,
.cta-button-ghost:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

@media (max-width: 768px) {
  .pavilion-cta {
    padding: var(--space-16) var(--content-padding);
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
