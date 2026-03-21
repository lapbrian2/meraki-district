<template>
  <div class="atelier-page">

    <!-- ============================================
         HERO — Dark, left-aligned
    ============================================= -->
    <section ref="heroSection" class="atelier-hero section section-dark">
      <div class="section-wide">
        <p class="overline reveal">The Atelier</p>
        <h1 class="atelier-hero-title word-reveal">
          <em>Your private workspace.</em>
        </h1>
        <p class="atelier-hero-sub reveal">
          A dedicated creative environment for verified practitioners. Coming 2026.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         DASHBOARD PREVIEW — Bordered grid
    ============================================= -->
    <section ref="dashboardSection" class="atelier-dashboard section section-dark">
      <div class="section-wide">
        <div class="dashboard-header">
          <p class="overline reveal">What&rsquo;s Inside</p>
          <h2 class="dashboard-title word-reveal"><em>Your creative command center.</em></h2>
          <div class="dashboard-rule" aria-hidden="true" />
          <p class="dashboard-sub reveal">
            Six modules designed for practitioners who take their practice seriously.
          </p>
        </div>

        <div class="dashboard-grid">
          <article
            v-for="module in modules"
            :key="module.title"
            class="dashboard-card reveal"
          >
            <span class="dashboard-icon material-symbols-outlined">{{ module.icon }}</span>
            <h3 class="dashboard-card-name">{{ module.title }}</h3>
            <p class="dashboard-card-desc">{{ module.description }}</p>
            <div v-if="module.visual" class="dashboard-visual">
              <div v-if="module.visual === 'progress'" class="pathway-track">
                <div class="pathway-node pathway-node--active">
                  <span class="pathway-dot" />
                  <span class="pathway-label">Associate</span>
                </div>
                <div class="pathway-line" />
                <div class="pathway-node">
                  <span class="pathway-dot" />
                  <span class="pathway-label">Verified</span>
                </div>
                <div class="pathway-line" />
                <div class="pathway-node">
                  <span class="pathway-dot" />
                  <span class="pathway-label">Fellow</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         ACCESS REQUIREMENTS
    ============================================= -->
    <section ref="accessSection" class="atelier-access section section-dark">
      <div class="section-narrow">
        <p class="overline reveal">Access</p>
        <h2 class="access-title word-reveal"><em>The Atelier opens at Verified status.</em></h2>
        <p class="access-body reveal">
          Associates must demonstrate sustained creative practice before gaining
          workspace access. This isn&rsquo;t a gate for its own sake &mdash; it&rsquo;s
          a commitment to ensuring every practitioner in the Atelier is here to work,
          not to watch.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — Centered
    ============================================= -->
    <section ref="ctaSection" class="atelier-cta section-dark">
      <div class="section-narrow cta-inner">
        <div class="cta-rule" aria-hidden="true" />
        <p class="overline reveal">Invitation</p>
        <h2 class="cta-title word-reveal">
          Begin your journey.
        </h2>
        <p class="cta-body reveal">
          The Atelier is where practice becomes visible. Start with an application.
        </p>
        <NuxtLink to="/apply" class="cta-button reveal">Apply Now &rarr;</NuxtLink>
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
  title: 'Atelier — Meraki Road',
  meta: [
    { name: 'description', content: 'The Atelier: a private creative workspace for verified practitioners on Meraki Road. Coming 2026.' },
  ],
})

useSeoMeta({
  ogTitle: 'Atelier — Meraki Road',
  ogDescription: 'The Atelier: a private creative workspace for verified practitioners on Meraki Road. Coming 2026.',
  twitterTitle: 'Atelier — Meraki Road',
  twitterDescription: 'The Atelier: a private creative workspace for verified practitioners on Meraki Road.',
})

/* -- Hero --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Dashboard ---------------------------------- */
const dashboardSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(dashboardSection, '.reveal', { stagger: 0.08 })
useWordReveal(dashboardSection, '.word-reveal')

/* -- Access ------------------------------------- */
const accessSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(accessSection, '.reveal', { stagger: 0.1 })
useWordReveal(accessSection, '.word-reveal')

/* -- CTA ---------------------------------------- */
const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal', { stagger: 0.08 })

/* -- Custom GSAP animations -------------------- */
let ctx: gsap.Context | null = null

onMounted(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  gsap.registerPlugin(ScrollTrigger)

  if (heroSection.value) {
    await waitForAncestorAnimations(heroSection.value)
  }

  ctx = gsap.context(() => {
    /* Dashboard rule draw-in */
    const dashboardRule = dashboardSection.value?.querySelector('.dashboard-rule')
    if (dashboardRule) {
      gsap.from(dashboardRule, {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: dashboardRule,
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
interface DashboardModule {
  icon: string
  title: string
  description: string
  visual?: string
}

const modules: DashboardModule[] = [
  {
    icon: 'route',
    title: 'Pathway Status',
    description: 'Track your progression through the districts.',
    visual: 'progress',
  },
  {
    icon: 'work',
    title: 'Active Projects',
    description: 'Manage commissions, submissions, and collaborations.',
  },
  {
    icon: 'inventory_2',
    title: 'The Archive',
    description: 'Your personal vault of published and in-progress work.',
  },
  {
    icon: 'event',
    title: 'Office Hours',
    description: 'Book sessions with Fellows and visiting practitioners.',
  },
  {
    icon: 'analytics',
    title: 'Analytics',
    description: 'Understand your reach across the districts.',
  },
  {
    icon: 'rss_feed',
    title: 'District Feed',
    description: 'Curated updates from your active districts.',
  },
]
</script>

<style scoped>
/* =============================================
   HERO
   ============================================= */
.atelier-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  background-color: var(--color-dark-bg);
}

.atelier-hero-title {
  font-size: var(--text-display);
  font-family: var(--font-display);
  font-weight: 300;
  font-style: normal;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  color: var(--color-dark-text);
  max-width: 14ch;
}

.atelier-hero-title em {
  font-style: italic;
}

.atelier-hero-sub {
  font-size: var(--text-h4);
  font-weight: 400;
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 42ch;
}

@media (max-width: 768px) {
  .atelier-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-12);
  }
}

/* =============================================
   DASHBOARD PREVIEW — 3x2 bordered grid
   ============================================= */
.atelier-dashboard {
  padding: var(--space-32) var(--content-padding);
  background: var(--color-dark-bg);
  border-top: 1px solid rgba(250, 250, 249, 0.08);
  border-bottom: 1px solid rgba(250, 250, 249, 0.08);
}

.dashboard-header {
  text-align: center;
  margin-bottom: var(--space-24);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dashboard-title {
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: normal;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);
}

.dashboard-title em {
  font-style: italic;
}

.dashboard-rule {
  width: 64px;
  height: 1px;
  background: rgba(250, 250, 249, 0.12);
  margin-bottom: var(--space-6);
  transform-origin: center;
}

.dashboard-sub {
  font-family: var(--font-body);
  font-size: var(--text-small);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  max-width: 40rem;
  line-height: var(--leading-relaxed);
}

/* 3x2 bordered grid */
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid rgba(250, 250, 249, 0.08);
  max-width: 1440px;
  margin: 0 auto;
}

.dashboard-card {
  padding: var(--space-12);
  border-right: 1px solid rgba(250, 250, 249, 0.08);
  border-bottom: 1px solid rgba(250, 250, 249, 0.08);
  transition: background-color 0.5s var(--ease-out);
  display: flex;
  flex-direction: column;
  cursor: default;
}

/* Remove right border on col 3 */
.dashboard-card:nth-child(3n) {
  border-right: none;
}

/* Remove bottom border on row 2 */
.dashboard-card:nth-child(n+4) {
  border-bottom: none;
}

.dashboard-card:hover {
  background: rgba(250, 250, 249, 0.02);
}

.dashboard-card:hover .dashboard-card-name {
  color: var(--color-gold);
}

.dashboard-icon {
  font-size: 1.75rem;
  color: var(--color-gold);
  margin-bottom: var(--space-8);
  display: block;
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

.dashboard-card-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
  transition: color 0.3s ease;
}

.dashboard-card-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}

/* Pathway progress visual */
.dashboard-visual {
  margin-top: auto;
  padding-top: var(--space-8);
}

.pathway-track {
  display: flex;
  align-items: center;
  gap: 0;
}

.pathway-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}

.pathway-dot {
  width: 10px;
  height: 10px;
  border: 1px solid rgba(250, 250, 249, 0.2);
  background: transparent;
  display: block;
}

.pathway-node--active .pathway-dot {
  border-color: var(--color-gold);
  background: var(--color-gold);
}

.pathway-label {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  white-space: nowrap;
}

.pathway-node--active .pathway-label {
  color: var(--color-gold);
}

.pathway-line {
  flex: 1;
  height: 1px;
  background: rgba(250, 250, 249, 0.12);
  min-width: 24px;
  align-self: flex-start;
  margin-top: 5px;
}

@media (max-width: 1024px) {
  .dashboard-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .dashboard-card:nth-child(3n) {
    border-right: 1px solid rgba(250, 250, 249, 0.08);
  }

  .dashboard-card:nth-child(2n) {
    border-right: none;
  }

  .dashboard-card:nth-child(n+4) {
    border-bottom: 1px solid rgba(250, 250, 249, 0.08);
  }

  .dashboard-card:nth-child(n+5) {
    border-bottom: none;
  }
}

@media (max-width: 768px) {
  .atelier-dashboard {
    padding: var(--space-16) var(--content-padding);
  }

  .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .dashboard-card {
    border-right: none;
    border-bottom: 1px solid rgba(250, 250, 249, 0.08);
  }

  .dashboard-card:last-child {
    border-bottom: none;
  }
}

/* =============================================
   ACCESS REQUIREMENTS
   ============================================= */
.atelier-access {
  padding: var(--space-32) var(--content-padding);
  background-color: var(--color-dark-bg);
  text-align: center;
}

.access-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
}

.access-title em {
  font-style: italic;
}

.access-body {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .atelier-access {
    padding: var(--space-16) var(--content-padding);
  }
}

/* =============================================
   CTA — Centered with rule
   ============================================= */
.atelier-cta {
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
  .atelier-cta {
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
