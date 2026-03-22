<template>
  <div class="community-page">

    <!-- ============================================
         HERO — Dark, left-aligned
    ============================================= -->
    <section ref="heroSection" class="community-hero section section-dark">
      <div class="section-wide">
        <p class="overline reveal">The Digital Square</p>
        <h1 class="community-hero-title word-reveal">
          Where the conversation lives.
        </h1>
        <p class="community-hero-sub reveal">
          A private creative commons for verified practitioners. Launching 2026.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         FEATURES — 3x2 bordered grid
    ============================================= -->
    <section ref="featuresSection" class="community-features section">
      <div class="section-wide">
        <div class="features-header">
          <p class="overline reveal">What Lives Here</p>
          <h2 class="features-title word-reveal"><em>The infrastructure of conversation.</em></h2>
          <div class="features-rule" aria-hidden="true" />
          <p class="features-sub reveal">
            Six spaces designed for practitioners who build at the frontier.
          </p>
        </div>

        <div class="features-grid">
          <article
            v-for="feature in features"
            :key="feature.title"
            class="feature-card vellum-card reveal"
          >
            <span class="feature-icon material-symbols-outlined">{{ feature.icon }}</span>
            <h3 class="feature-name">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         ACCESS TIERS — Horizontal progression
    ============================================= -->
    <section ref="tiersSection" class="community-tiers section section-dark">
      <div class="section-default">
        <div class="tiers-header">
          <p class="overline reveal">Access</p>
          <h2 class="tiers-title word-reveal"><em>Earned in layers.</em></h2>
          <p class="tiers-sub reveal">
            Three tiers of participation. Each unlocked through demonstrated practice.
          </p>
        </div>

        <div class="tiers-track">
          <div class="tiers-line" aria-hidden="true" />
          <div
            v-for="(tier, i) in tiers"
            :key="tier.name"
            class="tier-node reveal"
          >
            <div class="tier-dot" aria-hidden="true">
              <span class="tier-number">{{ String(i + 1).padStart(2, '0') }}</span>
            </div>
            <h3 class="tier-name">{{ tier.name }}</h3>
            <p class="tier-body">{{ tier.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — Centered
    ============================================= -->
    <section ref="ctaSection" class="community-cta section-dark">
      <div class="section-narrow cta-inner">
        <div class="cta-rule" aria-hidden="true" />
        <p class="overline reveal">Invitation</p>
        <h2 class="cta-title word-reveal">
          This isn&rsquo;t open to everyone.
        </h2>
        <p class="cta-body reveal">
          Meraki Road is for practitioners who hold craft and ambition as a single
          standard. The Digital Square is where that standard becomes conversation.
        </p>
        <NuxtLink to="/apply" class="cta-button reveal">Express Interest &rarr;</NuxtLink>
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
  title: 'Community — Meraki Road',
  meta: [
    { name: 'description', content: 'The Digital Square: a private creative commons for verified practitioners on Meraki Road. Launching 2026.' },
  ],
})

useSeoMeta({
  ogTitle: 'Community — Meraki Road',
  ogDescription: 'The Digital Square: a private creative commons for verified practitioners on Meraki Road. Launching 2026.',
  twitterTitle: 'Community — Meraki Road',
  twitterDescription: 'The Digital Square: a private creative commons for verified practitioners on Meraki Road.',
})

/* -- Hero --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Features ----------------------------------- */
const featuresSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(featuresSection, '.reveal', { stagger: 0.08 })
useWordReveal(featuresSection, '.word-reveal')

/* -- Tiers -------------------------------------- */
const tiersSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(tiersSection, '.reveal', { stagger: 0.12 })
useWordReveal(tiersSection, '.word-reveal')

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
    /* Features rule draw-in */
    const featuresRule = featuresSection.value?.querySelector('.features-rule')
    if (featuresRule) {
      gsap.from(featuresRule, {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: featuresRule,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }

    /* Tiers connecting line draw-in */
    const tiersLine = tiersSection.value?.querySelector('.tiers-line')
    if (tiersLine) {
      gsap.from(tiersLine, {
        scaleX: 0,
        duration: 1.2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: tiersLine,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }

    /* CTA rule draw-in */
    const ctaRule = ctaSection.value?.querySelector('.cta-rule')
    if (ctaRule) {
      gsap.from(ctaRule, {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: ctaRule,
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
const features = [
  {
    icon: 'forum',
    title: 'The Forum',
    description: 'Threaded discussions across all twelve districts. Topic-based, practitioner-only.',
  },
  {
    icon: 'event',
    title: 'Office Hours',
    description: 'Weekly live sessions with Fellows and visiting practitioners. Recorded for the archive.',
  },
  {
    icon: 'construction',
    title: 'The Workshop',
    description: 'Collaborative project spaces. Share work-in-progress, get structured critique.',
  },
  {
    icon: 'local_library',
    title: 'The Library',
    description: 'Curated resources, templates, and frameworks from the collective.',
  },
  {
    icon: 'tag',
    title: 'District Channels',
    description: 'Dedicated spaces for each district\u2019s practitioners to connect.',
  },
  {
    icon: 'handshake',
    title: 'The Bridge Board',
    description: 'Commission board, collaboration requests, and partnership opportunities.',
  },
]

const tiers = [
  {
    name: 'Associate',
    description: 'Forum access, library, district channels.',
  },
  {
    name: 'Verified',
    description: 'Everything above + workshop spaces, office hours.',
  },
  {
    name: 'Fellow',
    description: 'Full access + host office hours, moderate districts, shape policy.',
  },
]
</script>

<style scoped>
/* =============================================
   HERO
   ============================================= */
.community-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  background-color: var(--color-background);
}

.community-hero-title {
  font-size: var(--text-display);
  font-family: var(--font-display);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  color: var(--color-ink);
  max-width: 14ch;
}

.community-hero-sub {
  font-size: var(--text-h4);
  font-weight: 400;
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 42ch;
}

@media (max-width: 768px) {
  .community-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-12);
  }
}

/* =============================================
   FEATURES — 3x2 bordered grid
   ============================================= */
.community-features {
  padding: var(--space-32) var(--content-padding);
  background: var(--color-surface);
  border-top: 1px solid var(--rule-color);
  border-bottom: 1px solid var(--rule-color);
}

.features-header {
  text-align: center;
  margin-bottom: var(--space-24);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.features-title {
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: normal;
  color: var(--color-ink);
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);
}

.features-title em {
  font-style: italic;
}

.features-rule {
  width: 64px;
  height: 1px;
  background: var(--rule-color);
  margin-bottom: var(--space-6);
  transform-origin: center;
}

.features-sub {
  font-family: var(--font-body);
  font-size: var(--text-small);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
  max-width: 40rem;
  line-height: var(--leading-relaxed);
}

/* 3x2 bordered grid — matches PillarsSection */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid var(--rule-color);
  max-width: 1440px;
  margin: 0 auto;
}

.feature-card {
  padding: var(--space-12);
  border-right: 1px solid var(--rule-color);
  border-bottom: 1px solid var(--rule-color);
  transition: background-color 0.5s var(--ease-out);
  display: flex;
  flex-direction: column;
  cursor: default;
}

/* Remove right border on col 3 */
.feature-card:nth-child(3n) {
  border-right: none;
}

/* Remove bottom border on row 2 */
.feature-card:nth-child(n+4) {
  border-bottom: none;
}

.feature-card:hover {
  background: var(--color-background);
}

.feature-card:hover .feature-name {
  color: var(--color-gold);
}

.feature-icon {
  font-size: 1.75rem;
  color: var(--color-gold);
  margin-bottom: var(--space-8);
  display: block;
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

.feature-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-ink);
  margin-bottom: var(--space-4);
  transition: color 0.3s ease;
}

.feature-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .feature-card:nth-child(3n) {
    border-right: 1px solid var(--rule-color);
  }

  .feature-card:nth-child(2n) {
    border-right: none;
  }

  /* Row 3 (items 5-6) lose bottom border */
  .feature-card:nth-child(n+4) {
    border-bottom: 1px solid var(--rule-color);
  }

  .feature-card:nth-child(n+5) {
    border-bottom: none;
  }
}

@media (max-width: 768px) {
  .community-features {
    padding: var(--space-16) var(--content-padding);
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    border-right: none;
    border-bottom: 1px solid var(--rule-color);
  }

  .feature-card:last-child {
    border-bottom: none;
  }
}

/* =============================================
   TIERS — Horizontal progression
   ============================================= */
.community-tiers {
  padding: var(--space-32) var(--content-padding);
  background-color: var(--color-dark-bg);
  color: var(--color-dark-text);
}

.tiers-header {
  text-align: center;
  margin-bottom: var(--space-24);
}

.tiers-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);
}

.tiers-title em {
  font-style: italic;
}

.tiers-sub {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 45ch;
  margin: 0 auto;
}

.tiers-track {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
  position: relative;
  padding-top: var(--space-12);
}

.tiers-line {
  position: absolute;
  top: calc(var(--space-12) + 18px);
  left: calc(100% / 6);
  right: calc(100% / 6);
  height: 1px;
  background: var(--color-gold);
  opacity: 0.3;
  transform-origin: left;
}

.tier-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.tier-dot {
  width: 36px;
  height: 36px;
  border: 1px solid var(--color-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-6);
  position: relative;
  background: var(--color-dark-bg);
}

.tier-number {
  font-family: var(--font-mono);
  font-size: var(--text-overline);
  font-weight: 500;
  color: var(--color-gold);
  letter-spacing: var(--tracking-wide);
}

.tier-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-3);
}

.tier-body {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 28ch;
}

@media (max-width: 768px) {
  .community-tiers {
    padding: var(--space-16) var(--content-padding);
  }

  .tiers-track {
    grid-template-columns: 1fr;
    gap: var(--space-12);
    padding-top: 0;
    padding-left: var(--space-16);
  }

  .tiers-line {
    top: 0;
    bottom: 0;
    left: calc(var(--space-16) / 2 + 18px - var(--content-padding));
    right: auto;
    width: 1px;
    height: auto;
    transform-origin: top;
  }

  .tier-node {
    align-items: flex-start;
    text-align: left;
  }

  .tier-body {
    max-width: none;
  }
}

/* =============================================
   CTA — Centered with rule
   ============================================= */
.community-cta {
  padding: var(--space-32) var(--content-padding);
}

.cta-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-rule {
  width: 48px;
  height: 1px;
  background: var(--color-gold);
  margin-bottom: var(--space-12);
  transform-origin: center;
}

.cta-title {
  font-size: var(--text-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-6);
  letter-spacing: var(--tracking-hero);
}

.cta-body {
  color: var(--color-dark-muted);
  margin-bottom: var(--space-12);
  line-height: var(--leading-relaxed);
  max-width: 45ch;
  font-size: var(--text-body);
}

.cta-button {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-text);
  padding: var(--space-4) var(--space-12);
  border: 1px solid rgba(250, 250, 249, 0.2);
  border-left: 2px solid var(--color-gold);
  background-image: none;
  background-color: transparent;
  transition: border-color var(--duration-normal) ease,
              color var(--duration-normal) ease,
              background-color var(--duration-normal) ease;
}

.cta-button:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
  background-color: rgba(184, 150, 78, 0.06);
}

.cta-button:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

@media (max-width: 768px) {
  .community-cta {
    padding: var(--space-16) var(--content-padding);
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
}
</style>
