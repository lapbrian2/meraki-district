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
        <div class="hero-ctas reveal">
          <NuxtLink to="/apply" class="hero-cta-gold">Submit Work for Exhibition &rarr;</NuxtLink>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CURATOR'S NOTE — Editorial introduction
    ============================================= -->
    <section ref="curatorSection" class="curator-note section">
      <div class="section-narrow">
        <div class="curator-note-inner">
          <span class="material-symbols-outlined curator-icon reveal">edit_note</span>
          <h2 class="curator-heading word-reveal"><em>Curator&rsquo;s Note</em></h2>
          <p class="curator-text reveal">
            The Pavilion is not a gallery in the commercial sense. It is a house of considered
            placement &mdash; where the work arrives because it earned its position through
            demonstrated practice, not market speculation. Every exhibition is an argument
            for why this work matters now, in this arrangement, for this audience.
          </p>
          <p class="curator-text reveal">
            We do not chase trends. We do not optimize for engagement. The curatorial process
            here is slow, deliberate, and rooted in the belief that great work speaks
            loudest in silence.
          </p>
          <div class="curator-attribution reveal">
            <span class="curator-name">The Curatorial Board</span>
            <span class="curator-role">Meraki Pavilion</span>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         ARTIST IN RESIDENCE — Spotlight
    ============================================= -->
    <section ref="artistSection" class="artist-spotlight section section-dark">
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
    <section ref="exhibitionsSection" class="exhibitions section">
      <div class="section-wide">
        <div class="exhibitions-header">
          <div class="exhibitions-header-left">
            <p class="overline reveal">Archive Index 01.A</p>
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
              <span class="exhibition-location-badge">{{ exhibition.location }}</span>
            </div>
            <div class="exhibition-meta">
              <span class="exhibition-curator">Curated by {{ exhibition.curator }}</span>
            </div>
            <h3 class="exhibition-title"><em>{{ exhibition.title }}</em></h3>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         IMMERSIVE PREVIEW — Exhibition walkthrough
    ============================================= -->
    <section ref="previewSection" class="immersive-preview section section-dark">
      <div class="section-wide">
        <div class="preview-header">
          <p class="overline reveal">Coming Soon</p>
          <h2 class="preview-title word-reveal"><em>Immersive Exhibitions</em></h2>
          <p class="preview-desc reveal">
            Virtual walkthroughs of Pavilion exhibitions, rendered in spatial detail.
            Experience the work as it was intended to be seen &mdash; in context, in
            sequence, in the silence of a purpose-built room.
          </p>
        </div>
        <div class="preview-cards">
          <article v-for="preview in previews" :key="preview.title" class="preview-card vellum-card reveal">
            <div class="preview-card-image">
              <div class="preview-card-placeholder">
                <span class="material-symbols-outlined preview-card-icon">{{ preview.icon }}</span>
              </div>
            </div>
            <div class="preview-card-body">
              <span class="preview-card-status">{{ preview.status }}</span>
              <h3 class="preview-card-title"><em>{{ preview.title }}</em></h3>
              <p class="preview-card-desc">{{ preview.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         GALLERY PARTNERS — Logo strip
    ============================================= -->
    <section ref="partnersSection" class="gallery-partners section">
      <div class="section-default">
        <div class="partners-header">
          <p class="overline reveal">Institutional Partners</p>
          <h2 class="partners-title word-reveal"><em>Gallery Network</em></h2>
        </div>
        <div class="partners-grid">
          <div v-for="partner in partners" :key="partner" class="partner-logo reveal">
            <span class="partner-name">{{ partner }}</span>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PAVILION STORE CTA
    ============================================= -->
    <section ref="storeSection" class="pavilion-store section section-dark">
      <div class="section-default">
        <div class="store-card reveal">
          <span class="material-symbols-outlined store-icon">shopping_bag</span>
          <h2 class="store-title word-reveal"><em>Acquire the Archival</em></h2>
          <p class="store-desc reveal">
            Limited edition prints, exhibition catalogues, and process documentation
            from Pavilion residents. Every piece is numbered, verified, and shipped
            with provenance records from Meraki Road.
          </p>
          <NuxtLink to="/mint" class="store-cta reveal">
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
import { gsap } from 'gsap'
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

/* -- Curator's Note ----------------------------- */
const curatorSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(curatorSection, '.reveal', { stagger: 0.08 })
useWordReveal(curatorSection, '.word-reveal')

/* -- Artist Spotlight --------------------------- */
const artistSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(artistSection, '.reveal', { stagger: 0.08 })
useWordReveal(artistSection, '.word-reveal')

/* -- Exhibitions -------------------------------- */
const exhibitionsSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(exhibitionsSection, '.reveal', { stagger: 0.12 })
useWordReveal(exhibitionsSection, '.word-reveal')

/* -- Immersive Preview -------------------------- */
const previewSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(previewSection, '.reveal', { stagger: 0.1 })
useWordReveal(previewSection, '.word-reveal')

/* -- Gallery Partners --------------------------- */
const partnersSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(partnersSection, '.reveal', { stagger: 0.06 })
useWordReveal(partnersSection, '.word-reveal')

/* -- Store -------------------------------------- */
const storeSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(storeSection, '.reveal', { stagger: 0.08 })
useWordReveal(storeSection, '.word-reveal')

/* -- CTA ---------------------------------------- */
const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal', { stagger: 0.08 })

/* -- Curator's Loupe ---------------------------- */
onMounted(() => {
  if (!import.meta.client) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const grid = exhibitionsSection.value?.querySelector('.exhibitions-grid')
  if (!grid) return

  const loupe = document.createElement('div')
  loupe.className = 'curator-loupe'
  ;(grid as HTMLElement).style.position = 'relative'
  grid.appendChild(loupe)

  const loupeImg = document.createElement('div')
  loupeImg.className = 'curator-loupe-img'
  loupe.appendChild(loupeImg)

  const imageWraps = grid.querySelectorAll('.exhibition-image-wrap')

  imageWraps.forEach((wrap) => {
    const wrapEl = wrap as HTMLElement
    const imgEl = wrapEl.querySelector('img')

    wrapEl.addEventListener('mouseenter', () => {
      const src = imgEl?.getAttribute('src') || ''
      loupeImg.style.backgroundImage = `url(${src})`
      loupe.classList.add('active')
    })

    wrapEl.addEventListener('mousemove', (e: MouseEvent) => {
      const gridRect = (grid as HTMLElement).getBoundingClientRect()
      const wrapRect = wrapEl.getBoundingClientRect()

      const mouseX = e.clientX - gridRect.left
      const mouseY = e.clientY - gridRect.top

      gsap.to(loupe, {
        left: mouseX - 60,
        top: mouseY - 60,
        duration: 0.3,
        ease: 'power2.out',
      })

      const relX = ((e.clientX - wrapRect.left) / wrapRect.width) * 100
      const relY = ((e.clientY - wrapRect.top) / wrapRect.height) * 100
      loupeImg.style.backgroundPosition = `${relX}% ${relY}%`
      loupeImg.style.backgroundSize = `${wrapRect.width * 1.1}px ${wrapRect.height * 1.1}px`
    })

    wrapEl.addEventListener('mouseleave', () => {
      loupe.classList.remove('active')
    })
  })
})

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

interface Preview {
  title: string
  icon: string
  status: string
  description: string
}

const previews: Preview[] = [
  {
    title: 'Spatial Ink: A 360 Experience',
    icon: 'view_in_ar',
    status: 'In Development',
    description: 'Walk through a reconstructed Pavilion gallery space. View monotype prints at scale, examine surface detail, and experience the curatorial sequence as intended.',
  },
  {
    title: 'The Archive Room',
    icon: 'inventory_2',
    status: 'Coming Q3 2026',
    description: 'A virtual archive of every exhibited work, searchable by medium, practitioner, and provenance chain. Browse the permanent collection from anywhere.',
  },
]

const partners: string[] = [
  'ICA London',
  'Haus der Kunst',
  'MoMA PS1',
  'Serpentine',
  'Tate Exchange',
  'Palais de Tokyo',
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

.hero-image-wrap {
  position: relative;
  overflow: hidden;
}

/* Vellum gradient overlay on hero image — dark fade from bottom */
.hero-image-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(9, 9, 11, 0.6) 0%, transparent 40%);
  pointer-events: none;
  z-index: 1;
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
  .pavilion-hero { padding-top: calc(var(--space-16) + 3rem); padding-bottom: var(--space-12); }
  .hero-image { aspect-ratio: 16 / 9; }
  .hero-stamp { margin-bottom: var(--space-6); }
}

@media (max-width: 480px) {
  .hero-title { font-size: clamp(2.5rem, 10vw, var(--text-display)); max-width: none; }
}

/* =============================================
   CURATOR'S NOTE — Editorial introduction
   ============================================= */
.curator-note {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-background);
}

.curator-note-inner {
  text-align: center;
}

.curator-icon {
  font-size: 2rem;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
  display: inline-block;
}

.curator-heading {
  font-size: var(--text-h2);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-bottom: var(--space-8);
}

.curator-heading em { font-style: italic; }

.curator-text {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 56ch;
  margin: 0 auto var(--space-6);
}

.curator-attribution {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  margin-top: var(--space-8);
}

.curator-name {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: 600;
  color: var(--color-ink);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

.curator-role {
  font-size: var(--text-caption);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
}

/* =============================================
   ARTIST IN RESIDENCE — Spotlight
   ============================================= */
.artist-spotlight {
  padding: var(--space-24) var(--content-padding);
}

.artist-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.artist-portrait { position: relative; overflow: hidden; }

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
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-3);
}

.artist-name em { font-style: italic; }

.artist-discipline {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  margin-bottom: var(--space-4);
}

.artist-badge { margin-bottom: var(--space-6); }

.artist-bio {
  font-size: var(--text-body);
  font-weight: 400;
  color: var(--color-dark-secondary);
  line-height: var(--leading-relaxed);
  max-width: 48ch;
  margin-bottom: var(--space-8);
}

.artist-ctas { display: flex; gap: var(--space-4); flex-wrap: wrap; }

.artist-cta-primary {
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

.artist-cta-primary:hover { opacity: 0.9; transform: translateY(-1px); }

.artist-cta-ghost {
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
  transition: border-color var(--duration-normal) ease, color var(--duration-normal) ease, background-color var(--duration-normal) ease;
}

.artist-cta-ghost:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
  background-color: rgba(184, 150, 78, 0.06);
}

.artist-cta-primary:focus-visible,
.artist-cta-ghost:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

@media (max-width: 768px) {
  .artist-spotlight { padding: var(--space-16) var(--content-padding); }
  .artist-grid { grid-template-columns: 1fr; gap: var(--space-8); }
  .artist-ctas { flex-direction: column; }
  .artist-cta-primary, .artist-cta-ghost { width: 100%; text-align: center; }
}

/* =============================================
   CURRENT EXHIBITIONS — Staggered Grid
   ============================================= */
.exhibitions {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-background);
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
  color: var(--color-ink);
  margin-top: var(--space-3);
}

.exhibitions-title em { font-style: italic; }

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

.exhibitions-view-all:hover { opacity: 0.7; }

.exhibitions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.exhibition-card {
  cursor: pointer;
  transition: transform 0.4s var(--ease-curator);
}

.exhibition-card:hover {
  transform: translateY(-3px);
}

.exhibition-card--offset { margin-top: var(--space-12); }

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

.exhibition-location-badge {
  position: absolute;
  bottom: var(--space-3);
  left: var(--space-3);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  padding: 2px 8px;
  background: rgba(9, 9, 11, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(184, 150, 78, 0.2);
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
  color: var(--color-text-muted);
}

.exhibition-title {
  font-size: var(--text-h3);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-snug);
  color: var(--color-ink);
}

.exhibition-title em { font-style: italic; }

@media (max-width: 768px) {
  .exhibitions { padding: var(--space-16) var(--content-padding); }
  .exhibitions-header { flex-direction: column; align-items: flex-start; gap: var(--space-4); }
  .exhibitions-grid { grid-template-columns: 1fr; gap: var(--space-12); }
  .exhibition-card--offset { margin-top: 0; }
}

/* =============================================
   IMMERSIVE PREVIEW — Exhibition walkthrough
   ============================================= */
.immersive-preview {
  padding: var(--space-24) var(--content-padding);
}

.preview-header {
  text-align: center;
  margin-bottom: var(--space-12);
}

.preview-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-3);
  margin-bottom: var(--space-4);
  line-height: var(--leading-tight);
}

.preview-title em { font-style: italic; }

.preview-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin: 0 auto;
}

.preview-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
}

.preview-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.4s var(--ease-curator), border-color 0.4s ease;
}

.preview-card:hover {
  transform: translateY(-4px);
}

.preview-card-image {
  aspect-ratio: 16 / 9;
  background: rgba(255, 255, 255, 0.02);
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-card-icon {
  font-size: 3rem;
  color: var(--color-dark-muted);
  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48;
}

.preview-card-body {
  padding: var(--space-6);
}

.preview-card-status {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  display: block;
  margin-bottom: var(--space-3);
}

.preview-card-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-dark-text);
  line-height: var(--leading-snug);
  margin-bottom: var(--space-3);
}

.preview-card-title em { font-style: italic; }

.preview-card-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
}

@media (max-width: 768px) {
  .preview-cards { grid-template-columns: 1fr; }
}

/* =============================================
   GALLERY PARTNERS — Logo strip
   ============================================= */
.gallery-partners {
  padding: var(--space-16) var(--content-padding);
  background: var(--color-background);
}

.partners-header {
  text-align: center;
  margin-bottom: var(--space-12);
}

.partners-title {
  font-size: var(--text-h2);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-3);
}

.partners-title em { font-style: italic; }

.partners-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--space-6);
}

.partner-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-6) var(--space-4);
  border: 1px solid var(--color-border);
  transition: border-color var(--duration-normal) ease,
              background-color var(--duration-normal) ease,
              transform var(--duration-normal) ease;
}

.partner-logo:hover {
  border-color: var(--color-gold);
  background-color: rgba(184, 150, 78, 0.03);
  transform: translateY(-2px);
}

.partner-name {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: 500;
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
  text-align: center;
  transition: color var(--duration-normal) ease;
}

.partner-logo:hover .partner-name {
  color: var(--color-gold);
}

@media (max-width: 768px) {
  .partners-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 480px) {
  .partners-grid { grid-template-columns: repeat(2, 1fr); }
}

/* =============================================
   PAVILION STORE CTA
   ============================================= */
.pavilion-store {
  padding: var(--space-24) var(--content-padding);
}

.store-card {
  text-align: center;
  padding: var(--space-16) var(--space-12);
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.02);
  box-shadow: inset 0 0 80px -20px rgba(0,0,0,0.3);
  transition: border-color 0.4s var(--ease-vellum), box-shadow 0.4s var(--ease-vellum);
}

.store-card:hover {
  border-color: rgba(184, 150, 78, 0.2);
  box-shadow: inset 0 0 80px -20px rgba(0,0,0,0.3),
              0 0 40px -10px rgba(184, 150, 78, 0.06);
}

.store-icon { font-size: 32px; color: var(--color-gold); margin-bottom: var(--space-6); }

.store-title {
  font-size: var(--text-h2);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  color: var(--color-dark-text);
  margin-bottom: var(--space-6);
}

.store-title em { font-style: italic; }

.store-desc {
  font-size: var(--text-body);
  font-weight: 400;
  color: var(--color-dark-muted);
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
  color: var(--color-dark-bg);
  padding: var(--space-4) var(--space-8);
  background: var(--color-gold);
  background-image: none;
  transition: opacity var(--duration-normal) ease, transform var(--duration-normal) ease;
}

.store-cta:hover { opacity: 0.9; transform: translateY(-1px); }
.store-cta:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 4px; }

@media (max-width: 768px) {
  .pavilion-store { padding: var(--space-16) var(--content-padding); }
  .store-card { padding: var(--space-8) var(--space-6); }
}

/* =============================================
   CTA FOOTER — Submit Work
   ============================================= */
.pavilion-cta {
  padding: var(--space-32) var(--content-padding);
  text-align: center;
}

.cta-inner { display: flex; flex-direction: column; align-items: center; }

.cta-icon { font-size: 32px; color: var(--color-gold); margin-bottom: var(--space-6); }

.cta-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
  letter-spacing: var(--tracking-hero);
}

.cta-title em { font-style: italic; }

.cta-subtitle {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  margin-bottom: var(--space-12);
}

.cta-buttons { display: flex; gap: var(--space-4); flex-wrap: wrap; justify-content: center; }

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
  transition: border-color var(--duration-normal) ease, color var(--duration-normal) ease, background-color var(--duration-normal) ease;
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
  .pavilion-cta { padding: var(--space-16) var(--content-padding); }
  .cta-buttons { flex-direction: column; width: 100%; }
  .cta-button-gold, .cta-button-ghost { width: 100%; text-align: center; }
}

/* =============================================
   SHARED
   ============================================= */
.overline {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
}

/* ─── Reduced Motion Guards ─── */
@media (prefers-reduced-motion: reduce) {
  .exhibition-card {
    transition: none;
  }
  .exhibition-card:hover {
    transform: none;
  }
  .preview-card {
    transition: none;
  }
  .preview-card:hover {
    transform: none;
  }
  .store-card {
    transition: none;
  }
  .partner-logo {
    transition: border-color var(--duration-normal) ease;
  }
  .partner-logo:hover {
    transform: none;
  }
}

/* =============================================
   CURATOR'S LOUPE (global for dynamic elements)
   ============================================= */
:global(.curator-loupe) {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid rgba(184, 150, 78, 0.3);
  pointer-events: none;
  z-index: 10;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
  box-shadow: 0 0 20px rgba(184, 150, 78, 0.1);
}

:global(.curator-loupe.active) { opacity: 1; }

:global(.curator-loupe-img) {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-repeat: no-repeat;
  filter: grayscale(0) saturate(1.1);
  transform: scale(1.1);
}
</style>
