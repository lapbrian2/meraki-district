<template>
  <div class="bridge-page">

    <!-- ============================================
         HERO — 50/50 split
         Left: overline + heading + subtitle + CTA
         Right: district image + quote overlay
    ============================================= -->
    <section ref="heroSection" class="bridge-hero section section-dark">
      <div class="section-wide">
        <div class="hero-grid">
          <div class="hero-left">
            <span class="overline-badge reveal">The Bridge</span>
            <h1 class="bridge-hero-title word-reveal">
              <em>Where craft meets opportunity.</em>
            </h1>
            <p class="bridge-hero-sub reveal">
              A talent marketplace built for practitioners who work at the frontier.
              The Bridge connects verified creators with studios, agencies, and
              organizations who understand the value of this discipline.
            </p>
            <NuxtLink to="/apply" class="hero-cta reveal">
              Enter the Bridge &rarr;
            </NuxtLink>
          </div>
          <div class="hero-right reveal">
            <div class="hero-image-wrap grayscale-hover parallax-container">
              <NuxtImg
                src="/images/districts/the-collective.webp"
                alt="Meraki Road practitioners collaborating in studio"
                class="hero-image"
                loading="eager"
                width="640"
                height="800"
              />
              <div class="hero-quote-card">
                <p class="hero-quote-text">
                  &ldquo;The right project found me before I found it.&rdquo;
                </p>
                <p class="hero-quote-cite">&mdash; Maren Aoki, Fellow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         TALENT FILTER BAR — Pill buttons (static UI)
    ============================================= -->
    <section ref="filterSection" class="talent-filter section">
      <div class="section-wide">
        <div class="filter-header">
          <p class="overline reveal">Practitioners</p>
          <h2 class="filter-title word-reveal"><em>Featured Practitioners</em></h2>
          <p class="filter-sub reveal">
            Verified creators across every district, ready for commission,
            consultation, and collaboration.
          </p>
        </div>
        <div class="filter-pills reveal">
          <button
            v-for="pill in filterPills"
            :key="pill"
            class="filter-pill"
            :class="{ active: activePill === pill }"
            @click="activePill = pill"
          >
            {{ pill }}
          </button>
        </div>
      </div>
    </section>

    <!-- ============================================
         BENTO TALENT GRID — Mixed col-span cards
    ============================================= -->
    <section ref="gridSection" class="talent-grid section">
      <div class="section-wide">
        <div class="bento-grid">
          <!-- Card 1: compact (col-span-4) -->
          <article class="bento-card bento-compact vellum-card reveal">
            <div class="bento-photo-wrap grayscale-hover">
              <div class="bento-photo-placeholder">
                <span class="material-symbols-outlined bento-photo-icon">person</span>
              </div>
            </div>
            <div class="bento-info">
              <h3 class="bento-name">Sable Chen</h3>
              <p class="bento-discipline">Visual Art &amp; AI</p>
              <span class="seal-base seal-legacy">Legacy</span>
              <div class="bento-tags">
                <span class="bento-tag">Diffusion</span>
                <span class="bento-tag">Installation</span>
                <span class="bento-tag">Mixed Media</span>
              </div>
              <NuxtLink to="#" class="bento-link">View Portfolio &rarr;</NuxtLink>
            </div>
          </article>

          <!-- Card 2: wide (col-span-8) -->
          <article class="bento-card bento-wide vellum-card reveal">
            <div class="bento-wide-image grayscale-hover">
              <NuxtImg
                src="/images/districts/the-frame.webp"
                alt="In&eacute;s Moreau studio"
                class="bento-wide-img"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
            <div class="bento-wide-content">
              <h3 class="bento-name">In&eacute;s Moreau</h3>
              <p class="bento-discipline">Data Sculpture</p>
              <span class="seal-base seal-fellow">Fellow</span>
              <blockquote class="bento-quote">
                &ldquo;I shape information into physical encounters. The data is the medium, not the message.&rdquo;
              </blockquote>
              <div class="bento-tags">
                <span class="bento-tag">Data Viz</span>
                <span class="bento-tag">Physical Computing</span>
                <span class="bento-tag">Generative</span>
              </div>
              <button class="bento-consult-btn">Consult for Project</button>
            </div>
          </article>

          <!-- Card 3: compact (col-span-4) -->
          <article class="bento-card bento-compact vellum-card reveal">
            <div class="bento-photo-wrap grayscale-hover">
              <div class="bento-photo-placeholder">
                <span class="material-symbols-outlined bento-photo-icon">person</span>
              </div>
            </div>
            <div class="bento-info">
              <h3 class="bento-name">Tom&aacute;s Vega</h3>
              <p class="bento-discipline">Architecture &amp; Computation</p>
              <span class="seal-base seal-verified">Verified</span>
              <div class="bento-tags">
                <span class="bento-tag">Parametric</span>
                <span class="bento-tag">Spatial AI</span>
              </div>
              <NuxtLink to="#" class="bento-link">View Portfolio &rarr;</NuxtLink>
            </div>
          </article>

          <!-- Card 4: compact (col-span-4) -->
          <article class="bento-card bento-compact vellum-card reveal">
            <div class="bento-photo-wrap grayscale-hover">
              <div class="bento-photo-placeholder">
                <span class="material-symbols-outlined bento-photo-icon">person</span>
              </div>
            </div>
            <div class="bento-info">
              <h3 class="bento-name">Zuri Nakamura</h3>
              <p class="bento-discipline">Generative Systems</p>
              <span class="seal-base seal-verified">Verified</span>
              <div class="bento-tags">
                <span class="bento-tag">Real-time</span>
                <span class="bento-tag">WebGL</span>
                <span class="bento-tag">Audio-reactive</span>
              </div>
              <NuxtLink to="#" class="bento-link">View Portfolio &rarr;</NuxtLink>
            </div>
          </article>

          <!-- Card 5: CTA card (col-span-4) -->
          <article class="bento-card bento-cta vellum-card reveal">
            <span class="material-symbols-outlined bento-cta-icon">groups</span>
            <h3 class="bento-cta-title">Access the Full Index</h3>
            <p class="bento-cta-body">
              Over forty verified practitioners across twelve districts.
              Browse the full talent registry.
            </p>
            <NuxtLink to="/apply" class="bento-cta-btn">Express Interest &rarr;</NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CASE STUDY — Asymmetric 2-col
    ============================================= -->
    <section ref="caseSection" class="case-study section section-dark">
      <div class="section-wide">
        <div class="case-header">
          <p class="overline reveal">Meraki Studio</p>
          <h2 class="case-title word-reveal"><em>From the Districts</em></h2>
        </div>

        <div class="case-grid">
          <div class="case-content">
            <div class="case-border-accent" aria-hidden="true" />
            <h3 class="case-project-title reveal">Resonance Field</h3>
            <p class="case-body reveal">
              An immersive sound installation commissioned through The Bridge
              for the Nordic Digital Arts Biennial. Maren Aoki collaborated with
              spatial architects from The Collective to translate bioacoustic data
              into a walkable sonic landscape. The piece occupied three rooms and
              ran for six weeks.
            </p>
            <div class="case-metrics reveal">
              <div class="case-metric">
                <span class="case-metric-label">Duration</span>
                <span class="case-metric-value">6 weeks</span>
              </div>
              <div class="case-metric">
                <span class="case-metric-label">Impact</span>
                <span class="case-metric-value">12,400 visitors</span>
              </div>
            </div>
            <NuxtLink to="#" class="case-cta reveal">Read the Case Study &rarr;</NuxtLink>
          </div>
          <div class="case-image-wrap grayscale-hover reveal">
            <NuxtImg
              src="/images/districts/meridian.webp"
              alt="Resonance Field installation"
              class="case-image"
              loading="lazy"
              width="640"
              height="480"
            />
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PARTNERSHIP OPPORTUNITIES — 1/3 + 2/3
    ============================================= -->
    <section ref="partnersSection" class="partnerships section">
      <div class="section-wide">
        <div class="partners-grid">
          <div class="partners-sidebar">
            <p class="overline reveal">Opportunities</p>
            <h2 class="partners-title word-reveal"><em>Partnership Opportunities</em></h2>
            <p class="partners-desc reveal">
              Organizations working at the edge of creative technology
              post opportunities directly to The Bridge. Every listing
              is vetted by our curatorial team.
            </p>
            <ul class="partners-types reveal">
              <li class="partners-type">
                <span class="material-symbols-outlined partners-type-icon">palette</span>
                Commissions
              </li>
              <li class="partners-type">
                <span class="material-symbols-outlined partners-type-icon">groups</span>
                Residencies
              </li>
              <li class="partners-type">
                <span class="material-symbols-outlined partners-type-icon">school</span>
                Fellowships
              </li>
              <li class="partners-type">
                <span class="material-symbols-outlined partners-type-icon">handshake</span>
                Consulting
              </li>
            </ul>
          </div>

          <div class="partners-cards">
            <article
              v-for="opp in opportunities"
              :key="opp.title"
              class="partner-card reveal"
            >
              <span class="partner-type-label">{{ opp.type }}</span>
              <p class="partner-company"><em>{{ opp.company }}</em></p>
              <h3 class="partner-title">{{ opp.title }}</h3>
              <p class="partner-desc">{{ opp.description }}</p>
              <NuxtLink to="#" class="partner-link">Inquire &rarr;</NuxtLink>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         DARK CTA — Centered, dual buttons
    ============================================= -->
    <section ref="ctaSection" class="bridge-cta section-dark">
      <div class="section-narrow cta-inner">
        <span class="material-symbols-outlined cta-icon">assured_workload</span>
        <h2 class="cta-title word-reveal">
          <em>Become a partner.</em>
        </h2>
        <p class="cta-subtitle reveal">
          CONNECT YOUR ORGANIZATION WITH VERIFIED CREATIVE TALENT
        </p>
        <div class="cta-buttons reveal">
          <NuxtLink to="/apply" class="cta-button-gold">Connect With Talent</NuxtLink>
          <NuxtLink to="#" class="cta-button-ghost">Request Media Kit</NuxtLink>
        </div>
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
  title: 'The Bridge — Meraki Road',
  meta: [
    { name: 'description', content: 'The Meraki Bridge: a talent marketplace connecting verified practitioners with studios, agencies, and organizations at the frontier of creative technology.' },
  ],
})

useSeoMeta({
  ogTitle: 'The Bridge — Meraki Road',
  ogDescription: 'A talent marketplace connecting verified practitioners with studios, agencies, and organizations at the frontier of creative technology.',
  twitterTitle: 'The Bridge — Meraki Road',
  twitterDescription: 'A talent marketplace connecting verified practitioners with studios, agencies, and organizations at the frontier of creative technology.',
})

/* -- Filter state (UI only) --------------------- */
const filterPills = ['All', 'Visual Art', 'Generative Design', 'Sound & Music', 'Motion & Film', 'Strategy']
const activePill = ref('All')

/* -- Hero --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Filter ------------------------------------- */
const filterSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(filterSection, '.reveal', { stagger: 0.08 })
useWordReveal(filterSection, '.word-reveal')

/* -- Grid --------------------------------------- */
const gridSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(gridSection, '.reveal', { stagger: 0.1 })

/* -- Case Study --------------------------------- */
const caseSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(caseSection, '.reveal', { stagger: 0.08 })
useWordReveal(caseSection, '.word-reveal')

/* -- Partnerships ------------------------------- */
const partnersSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(partnersSection, '.reveal', { stagger: 0.08 })
useWordReveal(partnersSection, '.word-reveal')

/* -- CTA ---------------------------------------- */
const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal', { stagger: 0.08 })

/* -- Custom GSAP animations -------------------- */
let ctx: gsap.Context | null = null

onMounted(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  if (heroSection.value) {
    await waitForAncestorAnimations(heroSection.value)
  }

  ctx = gsap.context(() => {
    /* Case study border accent draw-in */
    const caseBorder = caseSection.value?.querySelector('.case-border-accent')
    if (caseBorder) {
      gsap.from(caseBorder, {
        scaleY: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: caseBorder,
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

/* -- Data --------------------------------------- */
interface Opportunity {
  type: string
  company: string
  title: string
  description: string
}

const opportunities: Opportunity[] = [
  {
    type: 'Commission',
    company: 'Fjord Collective',
    title: 'Generative Identity System',
    description: 'Seeking a practitioner to develop a living brand identity that evolves through generative algorithms. Three-month engagement.',
  },
  {
    type: 'Residency',
    company: 'Lumen Institute',
    title: 'Sound & Space Residency',
    description: 'Eight-week residency for a sound designer working at the intersection of spatial computing and bioacoustic data.',
  },
  {
    type: 'Consulting',
    company: 'Aether Studio',
    title: 'Creative AI Strategy',
    description: 'Retained advisory role for a design studio integrating AI workflows into their production pipeline.',
  },
  {
    type: 'Fellowship',
    company: 'Meraki Road',
    title: 'District Fellow — The Frame',
    description: 'Annual fellowship for a visual artist pushing the boundaries of AI-assisted photography and image-making.',
  },
]
</script>

<style scoped>
/* =============================================
   HERO — 50/50 split
   ============================================= */
.bridge-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  background-color: var(--color-background);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.overline-badge {
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

.bridge-hero-title {
  font-size: var(--text-display);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
  margin-bottom: var(--space-8);
  color: var(--color-ink);
  max-width: 16ch;
}

.bridge-hero-title em {
  font-style: italic;
}

.bridge-hero-sub {
  font-size: var(--text-body);
  font-weight: 400;
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 42ch;
  margin-bottom: var(--space-8);
}

.hero-cta {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-ink);
  padding: var(--space-4) var(--space-8);
  background: linear-gradient(135deg, var(--color-gold), #D4AF61);
  background-image: none;
  background-color: var(--color-gold);
  transition: opacity var(--duration-normal) ease, transform var(--duration-normal) ease;
}

.hero-cta:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.hero-cta:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

/* Hero image + quote overlay */
.hero-image-wrap {
  position: relative;
  overflow: visible;
}

.hero-image {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  display: block;
}

.hero-quote-card {
  position: absolute;
  bottom: -2rem;
  right: -1.5rem;
  background: var(--color-surface);
  border: 1px solid var(--rule-color);
  padding: var(--space-6);
  max-width: 280px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.hero-quote-text {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-snug);
  color: var(--color-ink);
  margin-bottom: var(--space-3);
}

.hero-quote-cite {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
}

@media (max-width: 768px) {
  .bridge-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-12);
  }

  .bridge-hero-title {
    font-size: clamp(2rem, 8vw, var(--text-display));
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .hero-cta {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .hero-quote-card {
    position: relative;
    bottom: auto;
    right: auto;
    margin-top: var(--space-4);
    max-width: none;
  }

  .filter-pill {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}

/* =============================================
   TALENT FILTER BAR
   ============================================= */
.talent-filter {
  padding: var(--space-16) var(--content-padding);
  background: var(--color-surface);
}

.filter-header {
  text-align: center;
  margin-bottom: var(--space-8);
}

.filter-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-4);
  margin-bottom: var(--space-4);
}

.filter-title em {
  font-style: italic;
}

.filter-sub {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin: 0 auto;
}

.filter-pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-3);
  margin-top: var(--space-8);
}

.filter-pill {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  padding: var(--space-2) var(--space-4);
  border: 1px solid var(--rule-color);
  background: transparent;
  color: var(--color-text-muted);
  cursor: pointer;
  transition: border-color var(--duration-normal) ease,
              color var(--duration-normal) ease,
              background-color var(--duration-normal) ease;
}

.filter-pill:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
}

.filter-pill.active {
  border-color: var(--color-gold);
  color: var(--color-gold);
  background: rgba(184, 150, 78, 0.06);
}

.filter-pill:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
}

/* =============================================
   BENTO TALENT GRID
   ============================================= */
.talent-grid {
  padding: 0 var(--content-padding) var(--space-16);
  background: var(--color-surface);
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6);
  max-width: 1440px;
  margin: 0 auto;
}

/* Compact card — col-span-4 */
.bento-compact {
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--rule-color);
  padding: var(--space-6);
  background: transparent;
  transition: border-color var(--duration-normal) ease,
              background-color var(--duration-normal) ease;
}

.bento-compact:hover {
  border-color: var(--color-gold);
  background: rgba(184, 150, 78, 0.03);
}

.bento-photo-wrap {
  margin-bottom: var(--space-4);
}

.bento-photo-placeholder {
  width: 56px;
  height: 56px;
  background: var(--color-background);
  border: 1px solid var(--rule-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.bento-photo-icon {
  font-size: 1.5rem;
  color: var(--color-text-muted);
  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24;
}

.bento-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-ink);
  margin-bottom: var(--space-1);
}

.bento-discipline {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  margin-bottom: var(--space-3);
}

.bento-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-3);
  margin-bottom: var(--space-4);
}

.bento-tag {
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
  border: 1px solid var(--rule-color);
  padding: 2px 8px;
}

.bento-link {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-top: auto;
  background-image: none;
  transition: opacity var(--duration-normal) ease;
}

.bento-link:hover {
  opacity: 0.7;
}

/* Wide card — col-span-8 */
.bento-wide {
  grid-column: span 8;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid var(--rule-color);
  overflow: hidden;
  transition: border-color var(--duration-normal) ease;
}

.bento-wide:hover {
  border-color: var(--color-gold);
}

.bento-wide-image {
  overflow: hidden;
}

.bento-wide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.bento-wide-content {
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
}

.bento-quote {
  font-family: var(--font-display);
  font-size: var(--text-body);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  margin-top: var(--space-4);
  margin-bottom: var(--space-2);
  padding-left: var(--space-4);
  border-left: 2px solid var(--color-gold);
}

.bento-consult-btn {
  width: 100%;
  margin-top: auto;
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-ink);
  border: 1px solid var(--rule-color);
  background: transparent;
  cursor: pointer;
  transition: border-color var(--duration-normal) ease,
              color var(--duration-normal) ease,
              background-color var(--duration-normal) ease;
}

.bento-consult-btn:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
  background: rgba(184, 150, 78, 0.06);
}

/* CTA card — col-span-4, gold background */
.bento-cta {
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--space-8);
  background: var(--color-gold);
  color: var(--color-ink);
  border: none;
}

.bento-cta-icon {
  font-size: 2rem;
  color: var(--color-background);
  margin-bottom: var(--space-6);
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

.bento-cta-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-background);
  margin-bottom: var(--space-4);
}

.bento-cta-body {
  font-size: var(--text-small);
  color: rgba(9, 9, 11, 0.7);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.bento-cta-btn {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-background);
  border: 1px solid rgba(9, 9, 11, 0.2);
  padding: var(--space-3) var(--space-6);
  background: transparent;
  margin-top: auto;
  background-image: none;
  transition: background-color var(--duration-normal) ease,
              border-color var(--duration-normal) ease;
}

.bento-cta-btn:hover {
  background: rgba(9, 9, 11, 0.08);
  border-color: rgba(9, 9, 11, 0.4);
}

@media (max-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(8, 1fr);
  }

  .bento-compact {
    grid-column: span 4;
  }

  .bento-wide {
    grid-column: span 8;
  }

  .bento-cta {
    grid-column: span 4;
  }
}

@media (max-width: 768px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }

  .bento-compact,
  .bento-wide,
  .bento-cta {
    grid-column: span 1;
  }

  .bento-wide {
    grid-template-columns: 1fr;
  }

  .bento-wide-image {
    aspect-ratio: 16 / 9;
  }
}

/* =============================================
   CASE STUDY — Asymmetric 2-col
   ============================================= */
.case-study {
  padding: var(--space-24) var(--content-padding);
  background-color: var(--color-dark-bg);
  color: var(--color-dark-text);
}

.case-study .overline {
  color: var(--color-gold);
}

.case-header {
  margin-bottom: var(--space-16);
}

.case-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.case-title em {
  font-style: italic;
}

.case-grid {
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: var(--space-12);
  align-items: start;
}

.case-content {
  position: relative;
  padding-left: var(--space-8);
}

.case-border-accent {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-gold);
  transform-origin: top;
}

.case-project-title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-6);
}

.case-body {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-8);
}

.case-metrics {
  display: flex;
  gap: var(--space-12);
  margin-bottom: var(--space-8);
}

.case-metric {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.case-metric-label {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
}

.case-metric-value {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
}

.case-cta {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-text);
  padding: var(--space-3) var(--space-8);
  border: 1px solid rgba(250, 250, 249, 0.2);
  background-image: none;
  background-color: transparent;
  transition: border-color var(--duration-normal) ease,
              color var(--duration-normal) ease;
}

.case-cta:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
}

.case-image {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
}

@media (max-width: 768px) {
  .case-study {
    padding: var(--space-16) var(--content-padding);
  }

  .case-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .case-metrics {
    gap: var(--space-8);
  }
}

/* =============================================
   PARTNERSHIP OPPORTUNITIES — 1/3 + 2/3
   ============================================= */
.partnerships {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-surface);
}

.partners-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-16);
  max-width: 1440px;
  margin: 0 auto;
}

.partners-title {
  font-size: var(--text-h2);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);
}

.partners-title em {
  font-style: italic;
}

.partners-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-8);
}

.partners-types {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.partners-type {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-small);
  font-weight: 500;
  color: var(--color-text-secondary);
}

.partners-type-icon {
  font-size: 1.25rem;
  color: var(--color-gold);
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

/* Opportunity cards — 2-column grid */
.partners-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
}

.partner-card {
  border: 1px solid var(--rule-color);
  padding: var(--space-6);
  transition: border-color var(--duration-normal) ease,
              background-color var(--duration-normal) ease;
  display: flex;
  flex-direction: column;
}

.partner-card:hover {
  border-color: var(--color-gold);
  background: rgba(184, 150, 78, 0.03);
}

.partner-type-label {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-3);
}

.partner-company {
  font-family: var(--font-display);
  font-size: var(--text-body);
  font-weight: 300;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
}

.partner-company em {
  font-style: italic;
}

.partner-title {
  font-size: var(--text-h4);
  font-weight: 500;
  color: var(--color-ink);
  margin-bottom: var(--space-3);
}

.partner-desc {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
}

.partner-link {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-top: auto;
  background-image: none;
  transition: opacity var(--duration-normal) ease;
}

.partner-link:hover {
  opacity: 0.7;
}

@media (max-width: 1024px) {
  .partners-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .partners-types {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--space-4);
  }
}

@media (max-width: 768px) {
  .partnerships {
    padding: var(--space-16) var(--content-padding);
  }

  .partners-cards {
    grid-template-columns: 1fr;
  }
}

/* =============================================
   DARK CTA — Centered, dual buttons
   ============================================= */
.bridge-cta {
  padding: var(--space-32) var(--content-padding);
  background-color: var(--color-dark-bg);
}

.cta-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-icon {
  font-size: 2.5rem;
  color: var(--color-gold);
  margin-bottom: var(--space-8);
  font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 48;
}

.cta-title {
  font-size: var(--text-display);
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
  .bridge-cta {
    padding: var(--space-16) var(--content-padding);
  }

  .cta-title {
    font-size: clamp(2rem, 8vw, var(--text-display));
  }

  .case-cta {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .partner-link {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }

  .cta-buttons {
    flex-direction: column;
    width: 100%;
  }

  .cta-button-gold,
  .cta-button-ghost {
    width: 100%;
    text-align: center;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .hero-cta {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    width: 100%;
    justify-content: center;
  }

  .bento-consult-btn {
    min-height: 44px;
    width: 100%;
  }

  .bento-cta-btn {
    min-height: 44px;
    width: 100%;
  }

  .bento-link {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }

  .filter-pill {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}

/* ─── Seal Badge Pulse Ring ─── */
.seal-base {
  position: relative;
}

.seal-verified::after,
.seal-fellow::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 9999px;
  border: 1px solid rgba(184, 150, 78, 0.2);
  animation: sealPulse 3s ease-in-out infinite;
}

@keyframes sealPulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.15); opacity: 0.6; }
}

@media (prefers-reduced-motion: reduce) {
  .seal-verified::after,
  .seal-fellow::after {
    animation: none;
    opacity: 0.3;
  }
}
</style>
