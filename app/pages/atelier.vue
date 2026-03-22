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
         ATMOSPHERIC QUOTE
    ============================================= -->
    <section class="atelier-quote section section-dark">
      <div class="section-narrow">
        <p class="atmospheric-quote reveal">
          <em>&ldquo;{{ currentQuote }}&rdquo;</em>
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PROGRESS INDICATOR — 84% to Fellow
    ============================================= -->
    <section ref="progressSection" class="atelier-progress section section-dark">
      <div class="section-default">
        <div class="progress-header">
          <p class="overline reveal">Pathway</p>
          <div class="progress-meta reveal">
            <span class="progress-label">84% to Fellow</span>
            <span class="progress-tier">Current: Verified</span>
          </div>
        </div>
        <div class="progress-bar-track reveal" aria-label="Progress to Fellow status: 84%">
          <div class="progress-bar-fill" :style="{ width: '84%' }" />
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         WORKSPACE HUB — Quick district navigation
    ============================================= -->
    <section ref="hubSection" class="atelier-hub section section-dark">
      <div class="section-wide">
        <p class="overline reveal">Your Workspaces</p>
        <div class="hub-grid">
          <NuxtLink
            v-for="hub in workspaceHubs"
            :key="hub.label"
            :to="hub.to"
            class="hub-tile lift-card reveal"
          >
            <span class="hub-icon material-symbols-outlined">{{ hub.icon }}</span>
            <span class="hub-label">{{ hub.label }}</span>
          </NuxtLink>
        </div>
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
            class="dashboard-card lift-card reveal"
          >
            <div class="dashboard-card-header">
              <span class="dashboard-icon material-symbols-outlined">{{ module.icon }}</span>
              <span
                class="module-status-icon material-symbols-outlined"
                :class="module.locked ? 'module-locked' : 'module-available'"
                :aria-label="module.locked ? 'Requires higher tier' : 'Available'"
              >{{ module.locked ? 'lock' : 'play_circle' }}</span>
            </div>
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
         ACTIVITY LOG
    ============================================= -->
    <section ref="activitySection" class="atelier-activity section section-dark">
      <div class="section-default">
        <p class="overline reveal">Recent Activity</p>
        <div class="activity-log">
          <div
            v-for="entry in activityLog"
            :key="entry.id"
            class="activity-entry reveal"
          >
            <span class="activity-time">{{ entry.time }}</span>
            <span class="activity-agent">{{ entry.agent }}</span>
            <span class="activity-action">{{ entry.action }}</span>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         EARNED CREDENTIALS
    ============================================= -->
    <section ref="credentialsSection" class="atelier-credentials section section-dark">
      <div class="section-default">
        <p class="overline reveal">Earned Credentials</p>
        <div class="credentials-row">
          <div
            v-for="cred in credentials"
            :key="cred.label"
            class="credential-badge reveal"
            :class="{ 'credential-badge--locked': !cred.earned }"
          >
            <span class="credential-icon material-symbols-outlined">{{ cred.icon }}</span>
            <span class="credential-label">{{ cred.label }}</span>
            <span v-if="cred.earned" class="credential-date">{{ cred.date }}</span>
            <span v-else class="credential-requirement">{{ cred.requirement }}</span>
          </div>
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

/* -- Progress ----------------------------------- */
const progressSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(progressSection, '.reveal', { stagger: 0.1 })

/* -- Workspace Hub ------------------------------ */
const hubSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(hubSection, '.reveal', { stagger: 0.06 })

/* -- Dashboard ---------------------------------- */
const dashboardSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(dashboardSection, '.reveal', { stagger: 0.08 })
useWordReveal(dashboardSection, '.word-reveal')

/* -- Activity ----------------------------------- */
const activitySection = ref<HTMLElement | null>(null)
useGsapScrollReveal(activitySection, '.reveal', { stagger: 0.1 })

/* -- Credentials -------------------------------- */
const credentialsSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(credentialsSection, '.reveal', { stagger: 0.1 })

/* -- Access ------------------------------------- */
const accessSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(accessSection, '.reveal', { stagger: 0.1 })
useWordReveal(accessSection, '.word-reveal')

/* -- CTA ---------------------------------------- */
const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal', { stagger: 0.08 })

/* -- Atmospheric quote rotation ----------------- */
const quotes = [
  'The canvas is a mirror of the mind\u2019s quietude',
  'Every mark carries the weight of intention',
  'The practice remembers what the practitioner forgets',
  'Silence is the first material of every serious work',
]
const currentQuoteIndex = ref(0)
const currentQuote = computed(() => quotes[currentQuoteIndex.value])

let quoteInterval: ReturnType<typeof setInterval> | null = null
onMounted(() => {
  quoteInterval = setInterval(() => {
    currentQuoteIndex.value = (currentQuoteIndex.value + 1) % quotes.length
  }, 8000)
})
onUnmounted(() => {
  if (quoteInterval) clearInterval(quoteInterval)
})

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
  locked?: boolean
}

const modules: DashboardModule[] = [
  {
    icon: 'route',
    title: 'Pathway Status',
    description: 'Track your progression through the districts.',
    visual: 'progress',
    locked: false,
  },
  {
    icon: 'work',
    title: 'Active Projects',
    description: 'Manage commissions, submissions, and collaborations.',
    locked: false,
  },
  {
    icon: 'inventory_2',
    title: 'The Archive',
    description: 'Your personal vault of published and in-progress work.',
    locked: false,
  },
  {
    icon: 'event',
    title: 'Office Hours',
    description: 'Book sessions with Fellows and visiting practitioners.',
    locked: true,
  },
  {
    icon: 'analytics',
    title: 'Analytics',
    description: 'Understand your reach across the districts.',
    locked: true,
  },
  {
    icon: 'rss_feed',
    title: 'District Feed',
    description: 'Curated updates from your active districts.',
    locked: false,
  },
]

/* -- Workspace hubs ----------------------------- */
const workspaceHubs = [
  { icon: 'dashboard', label: 'The Atelier', to: '/atelier' },
  { icon: 'architecture', label: 'Meraki Studio', to: '/districts/voight-studio' },
  { icon: 'explore', label: 'The Road', to: '/the-road' },
  { icon: 'history_edu', label: 'Institute', to: '/institute' },
  { icon: 'edit_note', label: 'Publishing', to: '/the-road' },
  { icon: 'palette', label: 'Pavilion', to: '/pavilion' },
  { icon: 'hub', label: 'The Bridge', to: '/bridge' },
]

/* -- Credentials -------------------------------- */
const credentials = [
  { icon: 'person', label: 'Associate', earned: true, date: 'Nov 2024' },
  { icon: 'verified', label: 'Verified', earned: true, date: 'Jan 2025' },
  { icon: 'workspace_premium', label: 'Fellow', earned: false, requirement: 'Requires 10 curations' },
]

/* -- Activity log ------------------------------- */
const activityLog = [
  {
    id: 1,
    time: '2h ago',
    agent: 'Meridian Curator',
    action: 'Portfolio reviewed and flagged for Fellow consideration',
  },
  {
    id: 2,
    time: '6h ago',
    agent: 'Archive Indexer',
    action: 'Three new works cataloged in District 04 collection',
  },
  {
    id: 3,
    time: '1d ago',
    agent: 'Bridge Liaison',
    action: 'Cross-district collaboration request approved',
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
   ATMOSPHERIC QUOTE
   ============================================= */
.atelier-quote {
  padding: var(--space-16) var(--content-padding);
  text-align: center;
  background: var(--color-dark-bg);
}

.atmospheric-quote {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-muted);
  line-height: var(--leading-snug);
  max-width: 36ch;
  margin: 0 auto;
  transition: opacity 0.6s ease;
}

/* =============================================
   PROGRESS INDICATOR
   ============================================= */
.atelier-progress {
  padding: var(--space-16) var(--content-padding);
  background: var(--color-dark-bg);
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: var(--space-6);
}

.progress-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--space-1);
}

.progress-label {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  font-style: italic;
  color: var(--color-gold);
}

.progress-tier {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
}

.progress-bar-track {
  width: 100%;
  height: 4px;
  background: rgba(250, 250, 249, 0.08);
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-gold), rgba(184, 150, 78, 0.6));
  transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

@media (prefers-reduced-motion: reduce) {
  .progress-bar-fill {
    transition: none;
  }
}

@media (max-width: 768px) {
  .progress-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-4);
  }
  .progress-meta {
    align-items: flex-start;
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

/* Module card header with status icon */
.dashboard-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: var(--space-8);
}

.module-status-icon {
  font-size: 1rem;
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20;
}

.module-available {
  color: var(--color-gold);
  opacity: 0.6;
}

.module-locked {
  color: var(--color-dark-muted);
  opacity: 0.35;
}

/* =============================================
   ACTIVITY LOG
   ============================================= */
.atelier-activity {
  padding: var(--space-16) var(--content-padding);
  background: var(--color-dark-bg);
}

.activity-log {
  margin-top: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: 0;
}

.activity-entry {
  display: grid;
  grid-template-columns: 5rem 12rem 1fr;
  gap: var(--space-4);
  padding: var(--space-4) 0;
  border-bottom: 1px solid rgba(250, 250, 249, 0.06);
  align-items: baseline;
}

.activity-entry:last-child {
  border-bottom: none;
}

.activity-time {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: var(--tracking-wide);
  color: var(--color-dark-muted);
  white-space: nowrap;
}

.activity-agent {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: 500;
  color: var(--color-gold);
  opacity: 0.8;
}

.activity-action {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
}

@media (max-width: 768px) {
  .activity-entry {
    grid-template-columns: 1fr;
    gap: var(--space-1);
  }
  .activity-agent {
    font-size: var(--text-caption);
  }
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
   WORKSPACE HUB — Quick navigation tiles
   ============================================= */
.atelier-hub {
  padding: var(--space-16) var(--content-padding);
  background: var(--color-dark-bg);
}

.hub-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-8);
}

.hub-tile {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-5);
  border: 1px solid rgba(250, 250, 249, 0.08);
  color: var(--color-dark-muted);
  background-image: none;
  background-color: transparent;
  transition: border-color 0.3s ease, color 0.3s ease, background-color 0.3s ease;
}

.hub-tile:hover {
  border-color: rgba(184, 150, 78, 0.3);
  color: var(--color-gold);
  background-color: rgba(184, 150, 78, 0.04);
}

.hub-icon {
  font-size: 1.125rem;
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20;
}

.hub-label {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
}

@media (max-width: 768px) {
  .hub-grid {
    gap: var(--space-2);
  }

  .hub-tile {
    padding: var(--space-2) var(--space-4);
    font-size: var(--text-caption);
  }
}

/* =============================================
   EARNED CREDENTIALS
   ============================================= */
.atelier-credentials {
  padding: var(--space-16) var(--content-padding);
  background: var(--color-dark-bg);
}

.credentials-row {
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-8);
}

.credential-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-6) var(--space-8);
  border: 1px solid rgba(184, 150, 78, 0.2);
  text-align: center;
  min-width: 140px;
  transition: border-color 0.3s ease;
}

.credential-badge:hover {
  border-color: rgba(184, 150, 78, 0.4);
}

.credential-badge--locked {
  border-color: rgba(250, 250, 249, 0.06);
  opacity: 0.45;
}

.credential-badge--locked:hover {
  border-color: rgba(250, 250, 249, 0.12);
}

.credential-icon {
  font-size: 1.5rem;
  color: var(--color-gold);
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

.credential-badge--locked .credential-icon {
  color: var(--color-dark-muted);
}

.credential-label {
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-text);
}

.credential-date {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: var(--tracking-wide);
  color: var(--color-dark-muted);
}

.credential-requirement {
  font-family: var(--font-mono);
  font-size: 0.5625rem;
  letter-spacing: var(--tracking-wide);
  color: var(--color-dark-muted);
  opacity: 0.6;
}

@media (max-width: 768px) {
  .credentials-row {
    flex-direction: column;
    gap: var(--space-3);
  }

  .credential-badge {
    flex-direction: row;
    min-width: auto;
    padding: var(--space-3) var(--space-5);
    gap: var(--space-3);
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
