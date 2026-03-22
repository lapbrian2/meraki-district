<template>
  <div class="founders-page">

    <!-- ============================================
         HERO — Centered, overline + italic heading
    ============================================= -->
    <section ref="heroSection" class="founders-hero section section-dark">
      <div class="section-narrow founders-hero-inner">
        <p class="overline reveal">The Architects</p>
        <h1 class="founders-hero-title word-reveal">
          <em>Built by practitioners, for practitioners.</em>
        </h1>
        <p class="founders-hero-sub reveal">
          Meraki Road wasn&rsquo;t conceived in a boardroom or pitched to
          investors. It was built by two people who got tired of watching
          rigorous creative work disappear into feeds that reward volume
          over craft.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         ORIGIN — Asymmetric 7/5 grid
    ============================================= -->
    <section ref="originSection" class="founders-origin section">
      <div class="section-wide">
        <div class="origin-grid">
          <div class="origin-left">
            <p class="overline reveal">The Origin</p>
            <h2 class="origin-heading word-reveal">
              <em>Bridging the Gap Between Talent and Visibility</em>
            </h2>
            <div class="origin-rule reveal" aria-hidden="true" />
            <p class="origin-body reveal">
              The creative economy is fractured. Discovery depends on
              algorithms built for engagement, not craft. The people doing
              patient, rigorous work at the edges of their disciplines are
              invisible to the infrastructure that was supposed to serve them.
            </p>
            <p class="origin-body reveal">
              Meraki Road exists to fix that. Not with another platform or
              another feed, but with a structure that treats creative practice
              the way it deserves to be treated&mdash;with permanence,
              seriousness, and standards that mean something.
            </p>
            <p class="origin-body reveal">
              We built a publishing house, a credentialing body, a research
              practice, and a gathering place&mdash;all held together by one
              conviction: the work speaks first.
            </p>
          </div>
          <div class="origin-right">
            <blockquote class="origin-quote reveal">
              <p class="origin-quote-text">
                &ldquo;We stopped looking for the right platform. We built the
                institution ourselves.&rdquo;
              </p>
              <cite class="origin-quote-cite">&mdash; Brian Lapinski</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         FOUNDER CARDS — Side-by-side portraits
    ============================================= -->
    <section ref="foundersSection" class="founders-cards section">
      <div class="section-wide">
        <div class="founders-header">
          <p class="overline reveal">The Founders</p>
          <h2 class="founders-cards-title word-reveal"><em>The People Behind the Road</em></h2>
        </div>

        <div class="founders-grid">
          <article
            v-for="founder in founders"
            :key="founder.name"
            class="founder-card"
          >
            <div class="founder-image-wrap grayscale-hover reveal">
              <NuxtImg
                class="founder-image"
                :src="founder.image"
                :alt="`Portrait of ${founder.name}, ${founder.role}`"
                loading="lazy"
                decoding="async"
                width="480"
                height="600"
              />
            </div>
            <div class="founder-content reveal">
              <h3 class="founder-name"><em>{{ founder.name }}</em></h3>
              <p class="founder-role">{{ founder.role }}</p>
              <div v-if="founder.seal" class="founder-seal" :class="founder.seal.class">
                <span class="material-symbols-outlined founder-seal-icon" aria-hidden="true">{{ founder.seal.icon }}</span>
                {{ founder.seal.label }}
              </div>
              <div class="founder-badges">
                <span
                  v-for="badge in founder.badges"
                  :key="badge"
                  class="founder-badge"
                >{{ badge }}</span>
              </div>
              <p class="founder-bio">{{ founder.bio }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         ETHOS — 2x3 grid of numbered principles
    ============================================= -->
    <section ref="ethosSection" class="founders-ethos section">
      <div class="section-wide">
        <div class="ethos-header">
          <p class="overline reveal">Our Ethos</p>
          <h2 class="ethos-title word-reveal"><em>Six Fundamental Principles</em></h2>
        </div>

        <div class="ethos-grid">
          <article
            v-for="principle in principles"
            :key="principle.number"
            class="ethos-card reveal"
          >
            <span class="ethos-number">{{ principle.number }}</span>
            <h3 class="ethos-card-title">{{ principle.title }}</h3>
            <p class="ethos-card-body">{{ principle.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PRODUCTIONS — From the Studio
    ============================================= -->
    <section ref="productionsSection" class="founders-productions section">
      <div class="section-wide">
        <div class="productions-header">
          <p class="overline reveal">From the Studio</p>
          <h2 class="productions-title word-reveal"><em>Institutional Productions</em></h2>
        </div>

        <div class="productions-grid">
          <article
            v-for="study in caseStudies"
            :key="study.title"
            class="production-card vellum-card reveal"
          >
            <div class="production-image grayscale-hover">
              <div class="production-image-placeholder" />
            </div>
            <div class="production-content">
              <p class="production-client">{{ study.client }}</p>
              <h3 class="production-title"><em>{{ study.title }}</em></h3>
              <p class="production-desc">{{ study.description }}</p>
              <NuxtLink :to="study.link" class="production-cta line-draw">
                View Case Study &rarr;
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         COMMISSIONS — Open Commissions
    ============================================= -->
    <section ref="commissionsSection" class="founders-commissions section">
      <div class="section-wide">
        <div class="commissions-header">
          <p class="overline reveal">Now Accepting</p>
          <h2 class="commissions-title word-reveal"><em>Open Commissions</em></h2>
        </div>

        <div class="commissions-grid">
          <article
            v-for="commission in commissions"
            :key="commission.type"
            class="commission-card reveal"
          >
            <p class="commission-type">{{ commission.type }}</p>
            <h3 class="commission-card-title"><em>{{ commission.title }}</em></h3>
            <p class="commission-desc">{{ commission.description }}</p>
            <NuxtLink :to="commission.link" class="commission-cta line-draw">
              Inquire &rarr;
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — "The road is open." + dual buttons
    ============================================= -->
    <section ref="ctaSection" class="founders-cta section-dark">
      <div class="section-narrow founders-cta-inner">
        <h2 class="cta-title word-reveal">The road is open.</h2>
        <div class="cta-buttons reveal">
          <NuxtLink to="/apply" class="cta-button cta-button--gold">
            Start a Conversation &rarr;
          </NuxtLink>
          <NuxtLink to="/the-road" class="cta-button cta-button--ghost">
            View Published Work &rarr;
          </NuxtLink>
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
import { useMagnetic, useTilt } from '~/composables/useInteractions'

/* -- SEO ---------------------------------------- */
useHead({
  title: 'Founders \u2014 Meraki Road',
  meta: [
    { name: 'description', content: 'The architects behind Meraki Road. Built by practitioners, for practitioners.' },
  ],
})

useSeoMeta({
  ogTitle: 'Founders \u2014 Meraki Road',
  ogDescription: 'The architects behind Meraki Road. Built by practitioners, for practitioners.',
  twitterTitle: 'Founders \u2014 Meraki Road',
  twitterDescription: 'The architects behind Meraki Road. Built by practitioners, for practitioners.',
})

/* -- Hero --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Origin ------------------------------------- */
const originSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(originSection, '.reveal', { stagger: 0.12 })
useWordReveal(originSection, '.word-reveal')

/* -- Founders ----------------------------------- */
const foundersSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(foundersSection, '.reveal', { stagger: 0.12 })
useWordReveal(foundersSection, '.word-reveal')
useTilt(foundersSection, '.founder-card', { maxRotation: 2 })

/* -- Ethos -------------------------------------- */
const ethosSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ethosSection, '.reveal', { stagger: 0.1 })
useTilt(ethosSection, '.ethos-card', { maxRotation: 2 })
useWordReveal(ethosSection, '.word-reveal')

/* -- Productions -------------------------------- */
const productionsSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(productionsSection, '.reveal', { stagger: 0.12 })
useWordReveal(productionsSection, '.word-reveal')
useTilt(productionsSection, '.production-card', { maxRotation: 2 })

/* -- Commissions -------------------------------- */
const commissionsSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(commissionsSection, '.reveal', { stagger: 0.1 })
useWordReveal(commissionsSection, '.word-reveal')
useTilt(commissionsSection, '.commission-card', { maxRotation: 2 })

/* -- CTA ---------------------------------------- */
const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal', { stagger: 0.08 })
useMagnetic(ctaSection, '.cta-button', { strength: 0.25 })

/* -- Custom GSAP animations -------------------- */
let ctx: gsap.Context | null = null

onMounted(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  if (heroSection.value) {
    await waitForAncestorAnimations(heroSection.value)
  }

  ctx = gsap.context(() => {
    /* Origin rule draw-in */
    const originRule = originSection.value?.querySelector('.origin-rule')
    if (originRule) {
      gsap.from(originRule, {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: originRule,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }

    /* Ethos card stagger entrance */
    const cards = ethosSection.value?.querySelectorAll('.ethos-card')
    cards?.forEach((card) => {
      const number = card.querySelector('.ethos-number')
      const title = card.querySelector('.ethos-card-title')
      const body = card.querySelector('.ethos-card-body')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      tl.from(number!, {
        opacity: 0, scale: 0.5, duration: 0.5, ease: 'power3.out',
      }, 0)
      .from(title!, {
        opacity: 0, y: 20, duration: 0.6, ease: 'power3.out',
      }, 0.15)
      .from(body!, {
        opacity: 0, y: 15, duration: 0.6, ease: 'power3.out',
      }, 0.25)
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
})

/* -- Data --------------------------------------- */
const founders = [
  {
    name: 'Brian Lapinski',
    role: 'Co-Founder',
    badges: ['Creative Technology', 'AI Systems', 'Strategy'],
    seal: { icon: 'workspace_premium', label: 'Distinguished Fellow', class: 'seal-base seal-fellow' },
    bio: 'A developer who came to AI through building, not theorising. Brian spent years constructing the tools and infrastructure he wished existed for creative practitioners\u2014then realised the gap was bigger than any single tool could fill. Meraki Road is the structure he kept looking for and couldn\u2019t find: a place where rigorous creative work gets the permanence and visibility it deserves.',
    image: '/images/founders/brian.webp',
  },
  {
    name: 'Rachel Lapinski',
    role: 'Co-Founder',
    badges: ['Editorial Vision', 'Curation', 'Creative Direction'],
    seal: { icon: 'verified', label: 'Verified Associate', class: 'seal-base seal-verified' },
    bio: 'Classically trained musician, design entrepreneur, AI-native artist\u2014Rachel has reinvented her practice three times and knows what it costs. She shapes the editorial voice and curatorial standard that holds Meraki Road together, ensuring every published work, every credential, and every gathering meets the bar that serious creative practice demands.',
    image: '/images/founders/rachel.webp',
  },
]

const principles = [
  {
    number: '01',
    title: 'Invisible Shell',
    body: 'Technology should be the gallery frame, not the painting. Our infrastructure disappears so the work can breathe. Every interface decision serves the creator\u2019s intent, never the platform\u2019s.',
  },
  {
    number: '02',
    title: 'Radical Intent',
    body: 'We choose friction over frictionlessness. Slowing down is a feature. The things worth making resist convenience\u2014they demand presence, attention, and deliberate craft.',
  },
  {
    number: '03',
    title: 'Meritocratic Signal',
    body: 'Visibility here is earned through demonstrated practice, not purchased through promotion. Our credentialing carries weight because it cannot be gamed, only proven.',
  },
  {
    number: '04',
    title: 'Institutional Weight',
    body: 'We build for permanence. Every standard, every credential, every published work is designed to endure\u2014not trend. The road is meant to outlast any single season.',
  },
  {
    number: '05',
    title: 'Human Trace',
    body: 'Asymmetry and soul over algorithmic polish. We preserve the handmade quality in everything we publish\u2014the rough edges that prove a human was here and meant it.',
  },
  {
    number: '06',
    title: 'Sustained Presence',
    body: 'We favour slow engagement over viral moments. Depth compounds. The practitioners who stay and build are worth more than the ones who pass through.',
  },
]

const caseStudies = [
  {
    client: 'Internal \u2014 Meraki Road Press',
    title: 'The Weight of Practice: A Monograph Series',
    description: 'A twelve-volume editorial programme documenting practitioners who have sustained creative rigour across decades. Each volume pairs long-form interview with archival reproductions, printed on uncoated stock with hand-tipped plates.',
    link: '/the-road',
  },
  {
    client: 'Commissioned \u2014 Southbank Cultural Trust',
    title: 'Cartography of the Unseen',
    description: 'Brand architecture and digital production for a city-wide exhibition mapping overlooked creative communities. Delivered wayfinding system, exhibition catalogue, and a companion microsite with geo-located artist profiles.',
    link: '/the-road',
  },
]

const commissions = [
  {
    type: 'Brand Architecture',
    title: 'Identity & Positioning Systems',
    description: 'Full-spectrum brand development for cultural institutions, studios, and independent practitioners. Strategy through execution.',
    link: '/apply',
  },
  {
    type: 'Digital Production',
    title: 'Immersive Web & Editorial Platforms',
    description: 'Bespoke digital experiences built with craft-level attention. Scroll-driven narratives, archival interfaces, portfolio systems.',
    link: '/apply',
  },
  {
    type: 'Strategic Consultation',
    title: 'Creative Practice Advisory',
    description: 'Positioning, visibility strategy, and infrastructure design for practitioners navigating the gap between making and being seen.',
    link: '/apply',
  },
]
</script>

<style scoped>
/* =============================================
   HERO — Centered, clean
   ============================================= */
.founders-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  background-color: var(--color-background);
}

.founders-hero-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.founders-hero-title {
  font-size: var(--text-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  color: var(--color-ink);
  max-width: 18ch;
}

.founders-hero-title em {
  font-family: var(--font-display);
  font-style: italic;
}

.founders-hero-sub {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
  text-align: center;
}

@media (max-width: 768px) {
  .founders-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-12);
  }
}

/* =============================================
   ORIGIN — Asymmetric 7/5 grid
   ============================================= */
.founders-origin {
  padding-top: var(--space-24);
  padding-bottom: var(--space-24);
  background-color: var(--color-surface);
}

.origin-grid {
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: var(--space-16);
  align-items: start;
}

.origin-heading {
  font-size: var(--text-h1);
  font-weight: 300;
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-hero);
  color: var(--color-ink);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  max-width: 22ch;
}

.origin-heading em {
  font-family: var(--font-display);
  font-style: italic;
}

.origin-rule {
  width: 48px;
  height: 1px;
  background: var(--color-gold);
  margin-bottom: var(--space-8);
  transform-origin: left;
}

.origin-body {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
  max-width: 60ch;
}

.origin-body:last-child {
  margin-bottom: 0;
}

/* Pull quote — right column */
.origin-right {
  padding-top: var(--space-16);
}

.origin-quote {
  border-left: 2px solid var(--color-gold);
  padding-left: var(--space-8);
  margin: 0;
}

.origin-quote-text {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  color: var(--color-ink);
}

.origin-quote-cite {
  display: block;
  margin-top: var(--space-4);
  font-family: var(--font-body);
  font-style: normal;
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
}

@media (max-width: 768px) {
  .founders-origin {
    padding-top: var(--space-16);
    padding-bottom: var(--space-16);
  }

  .origin-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }

  .origin-right {
    padding-top: 0;
  }

  .origin-quote {
    padding-left: var(--space-6);
  }
}

/* =============================================
   FOUNDER CARDS — Side-by-side
   ============================================= */
.founders-cards {
  background-color: var(--color-background);
}

.founders-header {
  margin-bottom: var(--space-16);
}

.founders-cards-title {
  margin-top: var(--space-4);
  margin-bottom: 0;
}

.founders-cards-title em {
  font-family: var(--font-display);
  font-style: italic;
}

.founders-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
}

.founder-image-wrap {
  overflow: hidden;
  margin-bottom: var(--space-6);
}

.founder-image {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  transition: transform 0.6s var(--ease-out);
}

.founder-card:hover .founder-image {
  transform: scale(1.02);
}

.founder-name {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  margin-bottom: var(--space-1);
}

.founder-name em {
  font-style: italic;
}

.founder-role {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold-accessible);
  margin-bottom: var(--space-3);
}

.founder-seal {
  margin-bottom: var(--space-4);
  gap: var(--space-2);
}

.founder-seal-icon {
  font-size: 14px;
}

.founder-badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-6);
}

.founder-badge {
  display: inline-block;
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  padding: var(--space-1) var(--space-3);
  border: 1px solid var(--rule-color);
  color: var(--color-text-muted);
  transition: border-color var(--duration-normal) ease, color var(--duration-normal) ease;
}

.founder-card:hover .founder-badge {
  border-color: var(--color-gold);
  color: var(--color-gold-accessible);
}

.founder-bio {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 45ch;
}

@media (max-width: 768px) {
  .founders-grid {
    grid-template-columns: 1fr;
    gap: var(--space-16);
  }

  .founder-image {
    aspect-ratio: 4 / 3;
  }
}

/* =============================================
   ETHOS — 2x3 grid of numbered principles
   ============================================= */
.founders-ethos {
  background-color: var(--color-background);
}

.ethos-header {
  margin-bottom: var(--space-16);
}

.ethos-title {
  margin-top: var(--space-4);
  margin-bottom: 0;
}

.ethos-title em {
  font-family: var(--font-display);
  font-style: italic;
}

.ethos-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12) var(--space-16);
}

.ethos-card {
  padding: var(--space-8) 0;
  border-top: 1px solid var(--rule-color);
  cursor: default;
  transition: border-color var(--duration-normal) ease;
}

.ethos-card:hover {
  border-color: var(--color-gold);
}

.ethos-number {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-mega-wide);
  color: var(--color-gold);
  display: block;
  margin-bottom: var(--space-3);
  transition: transform var(--duration-normal) ease;
}

.ethos-card:hover .ethos-number {
  transform: translateX(4px);
}

.ethos-card-title {
  font-size: var(--text-h3);
  font-weight: 600;
  margin-bottom: var(--space-3);
  transition: color var(--duration-normal) ease;
}

.ethos-card:hover .ethos-card-title {
  color: var(--color-gold-accessible);
}

.ethos-card-body {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 42ch;
}

@media (max-width: 768px) {
  .ethos-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}

/* =============================================
   CTA — Centered with dual buttons
   ============================================= */
.founders-cta {
  padding: var(--space-32) var(--content-padding);
}

.founders-cta-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-title {
  font-size: var(--text-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-12);
  letter-spacing: var(--tracking-hero);
  text-shadow: 0 2px 40px rgba(184,150,78,0.15);
}

.cta-buttons {
  display: flex;
  gap: var(--space-6);
  flex-wrap: wrap;
  justify-content: center;
}

.cta-button {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  padding: var(--space-4) var(--space-12);
  background-image: none;
  background-color: transparent;
  transition:
    border-color var(--duration-normal) ease,
    color var(--duration-normal) ease,
    background-color var(--duration-normal) ease;
}

.cta-button--gold {
  color: var(--color-ink);
  background-color: var(--color-gold);
  border: 1px solid var(--color-gold);
}

.cta-button--gold:hover {
  background-color: transparent;
  color: var(--color-gold);
}

.cta-button--ghost {
  color: var(--color-dark-muted);
  border: 1px solid rgba(250, 250, 249, 0.15);
}

.cta-button--ghost:hover {
  border-color: rgba(250, 250, 249, 0.4);
  color: var(--color-dark-text);
}

.cta-button:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

@media (max-width: 768px) {
  .founders-hero-title {
    font-size: clamp(2rem, 8vw, var(--text-display));
  }

  .founders-cta {
    padding: var(--space-16) var(--content-padding);
  }

  .cta-title {
    font-size: clamp(2rem, 8vw, var(--text-display));
  }

  .cta-buttons {
    flex-direction: column;
    width: 100%;
  }

  .cta-button {
    width: 100%;
    text-align: center;
    padding: var(--space-4) var(--space-6);
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .production-cta {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }

  .commission-cta {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }
}

/* =============================================
   PRODUCTIONS — From the Studio
   ============================================= */
.founders-productions {
  background-color: var(--color-surface);
}

.productions-header {
  margin-bottom: var(--space-16);
}

.productions-title {
  margin-top: var(--space-4);
  margin-bottom: 0;
}

.productions-title em {
  font-family: var(--font-display);
  font-style: italic;
}

.productions-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
}

.production-card {
  padding: 0;
  overflow: hidden;
}

.production-image {
  position: relative;
  overflow: hidden;
}

.production-image-placeholder {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.02) 0%,
    rgba(184, 150, 78, 0.04) 50%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border-bottom: 1px solid rgba(184, 150, 78, 0.1);
}

.production-content {
  padding: var(--space-8);
}

.production-client {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: var(--space-3);
}

.production-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  line-height: var(--leading-snug);
  margin-bottom: var(--space-4);
}

.production-title em {
  font-style: italic;
}

.production-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
  max-width: 45ch;
}

.production-cta {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  text-decoration: none;
  transition: color var(--duration-normal) ease;
}

.production-cta:hover {
  color: var(--color-gold-accessible);
}

@media (max-width: 768px) {
  .productions-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}

/* =============================================
   COMMISSIONS — Open Commissions
   ============================================= */
.founders-commissions {
  background-color: var(--color-background);
}

.commissions-header {
  margin-bottom: var(--space-16);
}

.commissions-title {
  margin-top: var(--space-4);
  margin-bottom: 0;
}

.commissions-title em {
  font-family: var(--font-display);
  font-style: italic;
}

.commissions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.commission-card {
  padding: var(--space-8);
  border: 1px solid var(--rule-color);
  transition: border-color var(--duration-normal) ease;
}

.commission-card:hover {
  border-color: var(--color-gold);
}

.commission-type {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
}

.commission-card-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  line-height: var(--leading-snug);
  margin-bottom: var(--space-4);
}

.commission-card-title em {
  font-style: italic;
}

.commission-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.commission-cta {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  text-decoration: none;
  transition: color var(--duration-normal) ease;
}

.commission-cta:hover {
  color: var(--color-gold-accessible);
}

@media (max-width: 768px) {
  .commissions-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
}
</style>
