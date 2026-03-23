<template>
  <div class="monograph-page">

    <EditorialBreadcrumb
      :items="[
        { label: 'Publishing House', to: '/the-road' },
        { label: 'Monographs' },
        { label: 'Architecture of Silence' },
      ]"
    />

    <!-- ============================================
         HERO — Full-bleed monograph header
    ============================================= -->
    <section ref="heroSection" class="monograph-hero section-dark">
      <div class="hero-image-full">
        <NuxtImg
          src="/images/districts/the-road.webp"
          alt="The Architecture of Silence"
          class="hero-bg"
          loading="eager"
          width="1600"
          height="900"
        />
        <div class="hero-overlay" />
        <div class="hero-vignette" />
        <div class="hero-content section-wide">
          <div class="hero-meta reveal">
            <span class="stamped-overline">Special Edition &mdash; Meraki Publishing House</span>
          </div>
          <h1 class="hero-title word-reveal">The Architecture of Silence</h1>
          <div class="hero-byline reveal">
            <span class="hero-author">Meraki Publishing House</span>
            <span class="hero-date">March 2026</span>
            <span class="hero-reading">18 min read</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         PREFACE — Curator quote
    ============================================= -->
    <section ref="prefaceSection" class="monograph-preface section section-dark">
      <div class="section-narrow">
        <blockquote class="preface-quote reveal">
          <p>&ldquo;Silence is not the absence of sound. It is the presence of attention. The best buildings know this. They hold space the way a good sentence holds meaning &mdash; by knowing what to leave out.&rdquo;</p>
          <cite class="preface-cite">&mdash; Curatorial Committee, Meraki Road</cite>
        </blockquote>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         SECTION A — The Weight of Empty Rooms
    ============================================= -->
    <section ref="sectionARef" class="monograph-section section section-dark">
      <div class="section-narrow">
        <h2 class="monograph-heading word-reveal"><em>The Weight of Empty Rooms</em></h2>
        <div class="monograph-prose reveal">
          <p>
            There is a particular quality to a room that has been designed around what it
            does not contain. The walls are not decorative. The ceiling is not performing.
            The floor makes a sound when you walk across it, and that sound was chosen.
          </p>
          <p>
            This is the architecture of silence &mdash; not minimalism as aesthetic preference,
            but restraint as structural principle. The Japanese concept of <em>ma</em>,
            negative space as active design element, runs through every discipline that takes
            itself seriously. In architecture, it means the room breathes. In typography, it means
            the margin speaks. In music, it means the rest carries as much weight as the note.
          </p>
          <p>
            The practitioners who build this way are not subtracting for style. They are
            subtracting because they have learned that addition without reason produces noise,
            and noise is the enemy of meaning.
          </p>
        </div>
      </div>
    </section>

    <!-- ============================================
         IMAGE PAIR — Visual metaphor
    ============================================= -->
    <section ref="imagePairSection" class="monograph-images section section-dark">
      <div class="section-wide">
        <div class="image-pair reveal">
          <figure class="image-figure">
            <NuxtImg
              src="/images/districts/the-frame.webp"
              alt="Light entering an empty gallery space"
              class="monograph-image archival-image"
              loading="lazy"
              width="640"
              height="480"
            />
            <figcaption class="image-caption">Plate 091 &mdash; The room that listens</figcaption>
          </figure>
          <figure class="image-figure">
            <NuxtImg
              src="/images/districts/meridian.webp"
              alt="Concrete surface with single shadow line"
              class="monograph-image archival-image"
              loading="lazy"
              width="640"
              height="480"
            />
            <figcaption class="image-caption">Plate 092 &mdash; Shadow as material</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         SECTION B — Silence as Structural Load
    ============================================= -->
    <section ref="sectionBRef" class="monograph-section section section-dark">
      <div class="section-narrow">
        <h2 class="monograph-heading word-reveal"><em>Silence as Structural Load</em></h2>
        <div class="monograph-prose reveal">
          <p>
            In engineering, every beam bears a load. The question is always: how much
            can it carry before it fails? In the architecture of silence, the question
            inverts. How much can you remove before the structure loses its character?
          </p>
          <p>
            Tadao Ando understood this. His concrete churches do not explain themselves.
            They present a condition &mdash; light falling through a cruciform slit in bare
            concrete &mdash; and the visitor completes the meaning. The building is a frame.
            The experience is the content.
          </p>
          <p>
            This principle transfers directly to digital craft. A generative system that
            produces everything it can is not impressive &mdash; it is noisy. A generative system
            that knows what to withhold begins to approach something worth looking at. The
            constraint is not a limitation. It is the design.
          </p>
        </div>
      </div>
    </section>

    <!-- ============================================
         PULLQUOTE — Inset
    ============================================= -->
    <section ref="pullquoteSection" class="monograph-pullquote section section-dark">
      <div class="section-default">
        <blockquote class="pullquote-block reveal">
          <p>
            The practitioner who removes the unnecessary element
            demonstrates more understanding than the one who adds the impressive one.
          </p>
        </blockquote>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         SECTION C — Digital Restraint
    ============================================= -->
    <section ref="sectionCRef" class="monograph-section section section-dark">
      <div class="section-narrow">
        <h2 class="monograph-heading word-reveal"><em>Digital Restraint</em></h2>
        <div class="monograph-prose reveal">
          <p>
            The generative tools available today can produce infinite variation.
            That is their promise and their problem. When everything is possible,
            nothing is necessary. The practitioner drowns in options, and the work
            suffers from abundance.
          </p>
          <p>
            The architecture of silence applied to digital practice means choosing
            constraints before choosing tools. It means defining what the system
            will not do before asking what it can. The best prompt engineers understand
            this intuitively &mdash; the tightest constraints produce the most distinctive outputs.
          </p>
          <p>
            This is not nostalgia for limitation. It is recognition that creative
            discipline has always been the art of productive refusal. The sculptor
            removes marble. The editor removes words. The architect removes walls.
            The generative practitioner removes parameters. The craft is the same.
            Only the material has changed.
          </p>
        </div>
      </div>
    </section>

    <!-- ============================================
         FULL-WIDTH IMAGE — Single dramatic plate
    ============================================= -->
    <section ref="fullImageSection" class="monograph-full-image section section-dark">
      <div class="section-wide">
        <figure class="full-image-figure reveal">
          <NuxtImg
            src="/images/districts/voight-studio.webp"
            alt="Studio interior with single workstation"
            class="monograph-image-full"
            loading="lazy"
            width="1200"
            height="600"
          />
          <figcaption class="image-caption">Plate 093 &mdash; The studio reduced to essentials</figcaption>
        </figure>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         SECTION D — Building for Attention
    ============================================= -->
    <section ref="sectionDRef" class="monograph-section section section-dark">
      <div class="section-narrow">
        <h2 class="monograph-heading word-reveal"><em>Building for Attention</em></h2>
        <div class="monograph-prose reveal">
          <p>
            The architecture of silence is ultimately architecture for attention.
            In a landscape saturated with signal, the building that asks nothing of you
            is the one that holds you longest. The website that does not compete for
            your eye is the one you remember. The artifact that does not explain itself
            is the one you return to.
          </p>
          <p>
            This monograph is not a style guide. It is an argument that restraint is a
            form of respect &mdash; for the material, for the viewer, and for the
            practitioner&rsquo;s own judgment. Knowing what to leave out requires more
            understanding than knowing what to put in. Every discipline arrives at this
            truth eventually. The architecture of silence simply names it.
          </p>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         COLOPHON — Publication details
    ============================================= -->
    <section ref="colophonSection" class="monograph-colophon section section-dark">
      <div class="section-narrow">
        <div class="colophon-inner reveal">
          <div class="colophon-rule" aria-hidden="true" />
          <h3 class="colophon-title">Colophon</h3>
          <div class="colophon-grid">
            <div class="colophon-entry">
              <span class="colophon-label">Publisher</span>
              <span class="colophon-value">Meraki Publishing House</span>
            </div>
            <div class="colophon-entry">
              <span class="colophon-label">Series</span>
              <span class="colophon-value">Special Edition Monograph</span>
            </div>
            <div class="colophon-entry">
              <span class="colophon-label">Date</span>
              <span class="colophon-value">March 2026</span>
            </div>
            <div class="colophon-entry">
              <span class="colophon-label">Typeset in</span>
              <span class="colophon-value">Newsreader &amp; Manrope</span>
            </div>
            <div class="colophon-entry">
              <span class="colophon-label">Edition</span>
              <span class="colophon-value">First digital printing</span>
            </div>
            <div class="colophon-entry">
              <span class="colophon-label">Archive ID</span>
              <span class="colophon-value">MR-PH-SE-009</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         NAVIGATION — Back to Publishing
    ============================================= -->
    <section class="monograph-back section section-dark">
      <div class="section-default">
        <NuxtLink to="/the-road" class="back-link">
          &larr; Back to Meraki Publishing House
        </NuxtLink>
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
  title: 'The Architecture of Silence — Meraki Publishing House',
  meta: [
    { name: 'description', content: 'A special edition monograph from Meraki Publishing House exploring silence as structural principle — in architecture, digital craft, and generative practice.' },
  ],
})

useSeoMeta({
  ogTitle: 'The Architecture of Silence — Meraki Publishing House',
  ogDescription: 'A special edition monograph exploring silence as structural principle — in architecture, digital craft, and generative practice.',
  twitterTitle: 'The Architecture of Silence — Meraki Publishing House',
  twitterDescription: 'A special edition monograph exploring silence as structural principle — in architecture, digital craft, and generative practice.',
})

/* -- Scroll reveal ------------------------------ */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

const prefaceSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(prefaceSection, '.reveal', { stagger: 0.08 })

const sectionARef = ref<HTMLElement | null>(null)
useGsapScrollReveal(sectionARef, '.reveal', { stagger: 0.08 })
useWordReveal(sectionARef, '.word-reveal')

const imagePairSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(imagePairSection, '.reveal', { stagger: 0.1 })

const sectionBRef = ref<HTMLElement | null>(null)
useGsapScrollReveal(sectionBRef, '.reveal', { stagger: 0.08 })
useWordReveal(sectionBRef, '.word-reveal')

const pullquoteSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(pullquoteSection, '.reveal', { stagger: 0.08 })

const sectionCRef = ref<HTMLElement | null>(null)
useGsapScrollReveal(sectionCRef, '.reveal', { stagger: 0.08 })
useWordReveal(sectionCRef, '.word-reveal')

const fullImageSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(fullImageSection, '.reveal', { stagger: 0.08 })

const sectionDRef = ref<HTMLElement | null>(null)
useGsapScrollReveal(sectionDRef, '.reveal', { stagger: 0.08 })
useWordReveal(sectionDRef, '.word-reveal')

const colophonSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(colophonSection, '.reveal', { stagger: 0.08 })

/* -- Custom GSAP animations -------------------- */
let ctx: gsap.Context | null = null

onMounted(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  if (heroSection.value) {
    await waitForAncestorAnimations(heroSection.value)
  }

  ctx = gsap.context(() => {
    /* Colophon rule draw-in */
    const colophonRule = colophonSection.value?.querySelector('.colophon-rule')
    if (colophonRule) {
      gsap.from(colophonRule, {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: colophonRule,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }

    /* Pullquote scale-in */
    const pullquote = pullquoteSection.value?.querySelector('.pullquote-block')
    if (pullquote) {
      gsap.from(pullquote, {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: pullquote,
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
</script>

<style scoped>
/* =============================================
   HERO — Full-bleed monograph header
   ============================================= */
.monograph-hero {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: flex-end;
}

.hero-image-full {
  position: relative;
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: flex-end;
}

.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(9, 9, 11, 0.95) 0%, rgba(9, 9, 11, 0.4) 50%, rgba(9, 9, 11, 0.2) 100%);
  z-index: 1;
}

.hero-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, transparent 20%, rgba(9, 9, 11, 0.6) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: var(--space-16) var(--content-padding) var(--space-12);
}

.hero-title {
  font-size: var(--text-display);
  font-family: var(--font-display);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
  margin-top: var(--space-6);
  margin-bottom: var(--space-6);
  max-width: 18ch;
}

.hero-byline {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  flex-wrap: wrap;
}

.hero-author {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  color: var(--color-dark-secondary);
}

.hero-date,
.hero-reading {
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
}

@media (max-width: 768px) {
  .monograph-hero,
  .hero-image-full {
    min-height: 55vh;
  }

  .hero-content {
    padding-top: var(--space-8);
    padding-bottom: var(--space-8);
  }
}

/* =============================================
   PREFACE — Curator quote
   ============================================= */
.monograph-preface {
  padding: var(--space-16) var(--content-padding);
}

.preface-quote {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-snug);
  color: var(--color-dark-secondary);
  border-left: 2px solid var(--color-gold);
  padding-left: var(--space-8);
  max-width: 36ch;
}

.preface-cite {
  display: block;
  margin-top: var(--space-6);
  font-size: var(--text-small);
  font-family: var(--font-body);
  font-style: normal;
  font-weight: 500;
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
}

@media (max-width: 768px) {
  .preface-quote {
    font-size: var(--text-h3);
    padding-left: var(--space-6);
  }
}

/* =============================================
   ESSAY SECTIONS — Prose content
   ============================================= */
.monograph-section {
  padding: var(--space-16) var(--content-padding);
}

.monograph-heading {
  font-size: var(--text-h2);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-8);
  line-height: var(--leading-tight);
}

.monograph-heading em {
  font-style: italic;
}

.monograph-prose p {
  font-size: var(--text-body);
  color: var(--color-dark-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.monograph-prose p:last-child {
  margin-bottom: 0;
}

.monograph-prose em {
  font-style: italic;
  color: var(--color-dark-text);
}

/* =============================================
   IMAGE PAIR — Side by side plates
   ============================================= */
.monograph-images {
  padding: var(--space-8) var(--content-padding);
}

.image-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
}

.image-figure {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.monograph-image {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
}

.image-caption {
  font-size: var(--text-caption);
  font-family: var(--font-mono);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
}

@media (max-width: 768px) {
  .image-pair {
    grid-template-columns: 1fr;
  }
}

/* =============================================
   FULL-WIDTH IMAGE
   ============================================= */
.monograph-full-image {
  padding: var(--space-8) var(--content-padding);
}

.full-image-figure {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.monograph-image-full {
  width: 100%;
  height: auto;
  aspect-ratio: 2 / 1;
  object-fit: cover;
  display: block;
  filter: grayscale(100%) sepia(10%) contrast(1.05);
  transition: filter 0.8s ease;
}

.full-image-figure:hover .monograph-image-full {
  filter: grayscale(0) sepia(0) contrast(1);
}

/* =============================================
   PULLQUOTE — Inset
   ============================================= */
.monograph-pullquote {
  padding: var(--space-12) var(--content-padding);
}

.pullquote-block {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-snug);
  color: var(--color-gold);
  text-align: center;
  max-width: 28ch;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .pullquote-block {
    font-size: var(--text-h3);
    max-width: 22ch;
  }
}

/* =============================================
   COLOPHON — Publication details
   ============================================= */
.monograph-colophon {
  padding: var(--space-16) var(--content-padding);
}

.colophon-inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.colophon-rule {
  width: 48px;
  height: 1px;
  background: var(--color-gold);
  opacity: 0.4;
  transform-origin: left center;
}

.colophon-title {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
}

.colophon-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4) var(--space-12);
}

.colophon-entry {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.colophon-label {
  font-size: var(--text-caption);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
}

.colophon-value {
  font-size: var(--text-body);
  color: var(--color-dark-secondary);
}

@media (max-width: 768px) {
  .colophon-grid {
    grid-template-columns: 1fr;
  }
}

/* =============================================
   BACK LINK
   ============================================= */
.monograph-back {
  padding: var(--space-8) var(--content-padding);
}

.back-link {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  color: var(--color-dark-muted);
  background-image: none;
  transition: color var(--duration-normal) ease;
}

.back-link:hover {
  color: var(--color-gold);
}
</style>
