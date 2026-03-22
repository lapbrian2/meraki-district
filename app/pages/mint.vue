<template>
  <div class="mint-page">

    <!-- ============================================
         HERO — Full-width, centered
    ============================================= -->
    <section ref="heroSection" class="mint-hero section section-dark">
      <div class="section-narrow">
        <span class="stamped-overline reveal">District 08</span>
        <h1 class="mint-hero-title word-reveal">
          <em>The Pavilion Store</em>
        </h1>
        <p class="mint-hero-sub reveal">
          An archival marketplace for verified creative artifacts.
          Each piece is authenticated, cataloged, and traced back to
          its maker — because provenance is the only currency that appreciates.
        </p>
        <p class="mint-hero-sub reveal">
          Home of <strong>Meraki Mint</strong> — our limited edition line of curated artifacts and collectibles.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         FEATURED ARTIFACTS — 2 large cards side by side
    ============================================= -->
    <section ref="artifactsSection" class="featured-artifacts section">
      <div class="section-wide">
        <div class="artifacts-header">
          <p class="overline reveal">Featured</p>
          <h2 class="artifacts-title word-reveal"><em>Current Acquisitions</em></h2>
        </div>

        <div class="artifacts-grid">
          <!-- Card 1: Botanical Monograph -->
          <article class="artifact-card vellum-card reveal">
            <div class="artifact-image-area grayscale-hover">
              <div class="artifact-placeholder">
                <span class="material-symbols-outlined artifact-placeholder-icon">local_florist</span>
              </div>
              <span class="artifact-badge seal-base seal-verified">Verified Provenance</span>
            </div>
            <div class="artifact-info">
              <h3 class="artifact-name">Botanical Monograph No. 04</h3>
              <p class="artifact-desc">
                Hand-pressed folio of forty-eight generative botanicals,
                printed on archival cotton rag. Edition of twelve.
                Each copy carries a unique seed-hash tied to the original
                diffusion parameters.
              </p>
              <button class="artifact-cta-gold">Acquire Artifact &mdash; $1,240</button>
            </div>
          </article>

          <!-- Card 2: Lost Codex Reprint -->
          <article class="artifact-card vellum-card reveal">
            <div class="artifact-image-area grayscale-hover">
              <div class="artifact-placeholder">
                <span class="material-symbols-outlined artifact-placeholder-icon">history_edu</span>
              </div>
            </div>
            <div class="artifact-info">
              <h3 class="artifact-name">The Lost Codex Reprint</h3>
              <p class="artifact-series">Archival Series &mdash; Literature</p>
              <p class="artifact-desc">
                A facsimile reproduction of the 1927 letterpress original,
                rebound in linen with gilt-stamped spine. Includes a
                companion essay on the typographic restoration process.
              </p>
              <NuxtLink to="/pavilion" class="artifact-link">View Inventory &rarr;</NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         THE VAULT — Personal collection view
    ============================================= -->
    <section ref="vaultSection" class="the-vault section section-dark">
      <div class="section-wide">
        <div class="vault-header">
          <div class="vault-header-left">
            <p class="overline reveal">Your Collection</p>
            <h2 class="vault-title word-reveal"><em>The Vault</em></h2>
          </div>
          <div class="vault-meta reveal">
            <span class="vault-stat">Total Acquisitions: <strong>14</strong></span>
            <span class="seal-base seal-fellow">Vault Tier: Fellow</span>
          </div>
        </div>

        <div class="vault-grid">
          <article v-for="item in vaultItems" :key="item.id" class="vault-item vellum-card reveal">
            <div class="vault-item-image grayscale-hover">
              <div class="vault-item-placeholder">
                <span class="material-symbols-outlined vault-item-icon">{{ item.icon }}</span>
              </div>
            </div>
            <div class="vault-item-info">
              <span class="vault-item-id">{{ item.id }}</span>
              <h3 class="vault-item-title">{{ item.title }}</h3>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PROVENANCE GUARANTEE — Text section
    ============================================= -->
    <section ref="provenanceSection" class="provenance section">
      <div class="section-narrow">
        <div class="provenance-inner">
          <span class="material-symbols-outlined provenance-icon reveal">verified</span>
          <h2 class="provenance-title word-reveal"><em>Provenance Guarantee</em></h2>
          <p class="provenance-body reveal">
            Every artifact in The Pavilion Store is authenticated through a multi-step
            verification process. We trace materials, confirm editions,
            and cross-reference creation metadata directly with the maker.
            Certificates of authenticity are issued on acquisition and
            remain permanently linked to the piece.
          </p>
          <p class="provenance-body reveal">
            This is not a speculative market. There are no drops, no
            artificial scarcity games, no secondary-market inflation.
            When you acquire from The Pavilion Store, you are collecting
            the work itself — and the full story behind it.
          </p>
        </div>
      </div>
    </section>

    <!-- ============================================
         CTA — Centered, single button
    ============================================= -->
    <section ref="ctaSection" class="mint-cta section-dark">
      <div class="section-narrow cta-inner">
        <h2 class="cta-title word-reveal">
          <em>Every artifact tells a story.</em>
        </h2>
        <div class="cta-buttons reveal">
          <NuxtLink to="/pavilion" class="cta-button-gold">Browse the Archive</NuxtLink>
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
  title: 'The Pavilion Store — Meraki Road',
  meta: [
    { name: 'description', content: 'The Pavilion Store: an archival marketplace for verified creative artifacts. Featuring Meraki Mint limited editions. Authenticated provenance, curated editions, and a personal vault for every collector.' },
  ],
})

useSeoMeta({
  ogTitle: 'The Pavilion Store — Meraki Road',
  ogDescription: 'An archival marketplace for verified creative artifacts. Featuring Meraki Mint limited editions. Authenticated provenance, curated editions, and a personal vault for every collector.',
  twitterTitle: 'The Pavilion Store — Meraki Road',
  twitterDescription: 'An archival marketplace for verified creative artifacts. Featuring Meraki Mint limited editions. Authenticated provenance, curated editions, and a personal vault for every collector.',
})

/* -- Data --------------------------------------- */
interface VaultItem {
  id: string
  title: string
  icon: string
}

const vaultItems: VaultItem[] = [
  { id: 'A-001', title: 'Botanical Monograph No. 01', icon: 'local_florist' },
  { id: 'A-042', title: 'Signal / Noise Print Series', icon: 'graphic_eq' },
  { id: 'B-119', title: 'Codex Fragment (Restored)', icon: 'history_edu' },
]

/* -- Scroll reveal ------------------------------ */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

const artifactsSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(artifactsSection, '.reveal', { stagger: 0.1 })
useWordReveal(artifactsSection, '.word-reveal')

const vaultSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(vaultSection, '.reveal', { stagger: 0.1 })
useWordReveal(vaultSection, '.word-reveal')

const provenanceSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(provenanceSection, '.reveal', { stagger: 0.08 })
useWordReveal(provenanceSection, '.word-reveal')

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
    /* Provenance icon scale-in */
    const icon = provenanceSection.value?.querySelector('.provenance-icon')
    if (icon) {
      gsap.from(icon, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: icon,
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
   HERO
   ============================================= */
.mint-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  background-color: var(--color-background);
  text-align: center;
}

.mint-hero-title {
  font-size: var(--text-display);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
  margin-top: var(--space-6);
  margin-bottom: var(--space-8);
  color: var(--color-ink);
}

.mint-hero-title em {
  font-style: italic;
}

.mint-hero-sub {
  font-size: var(--text-body);
  font-weight: 400;
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 52ch;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .mint-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-12);
  }
}

/* =============================================
   FEATURED ARTIFACTS
   ============================================= */
.featured-artifacts {
  padding: var(--space-16) var(--content-padding);
  background: var(--color-surface);
}

.artifacts-header {
  text-align: center;
  margin-bottom: var(--space-12);
}

.artifacts-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-4);
}

.artifacts-title em {
  font-style: italic;
}

.artifacts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  max-width: 1100px;
  margin: 0 auto;
}

.artifact-card {
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
}

.artifact-image-area {
  position: relative;
  background: var(--color-background);
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.artifact-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.artifact-placeholder-icon {
  font-size: 3.5rem;
  color: var(--color-text-muted);
  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48;
}

.artifact-badge {
  position: absolute;
  top: var(--space-4);
  left: var(--space-4);
}

.artifact-info {
  padding: var(--space-6);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.artifact-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-ink);
  margin-bottom: var(--space-2);
}

.artifact-series {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}

.artifact-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
  flex: 1;
}

.artifact-cta-gold {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-ink);
  padding: var(--space-4) var(--space-8);
  background-color: var(--color-gold);
  border: none;
  cursor: pointer;
  transition: opacity var(--duration-normal) ease,
              transform var(--duration-normal) ease;
  align-self: flex-start;
}

.artifact-cta-gold:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.artifact-cta-gold:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

.artifact-link {
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  text-decoration: none;
  transition: opacity var(--duration-normal) ease;
  align-self: flex-start;
}

.artifact-link:hover {
  opacity: 0.7;
}

.artifact-link:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

@media (max-width: 768px) {
  .artifacts-grid {
    grid-template-columns: 1fr;
  }
}

/* =============================================
   THE VAULT
   ============================================= */
.the-vault {
  padding: var(--space-16) var(--content-padding);
  background: var(--color-background);
}

.vault-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: var(--space-12);
  gap: var(--space-6);
}

.vault-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-3);
}

.vault-title em {
  font-style: italic;
}

.vault-meta {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-shrink: 0;
}

.vault-stat {
  font-size: var(--text-small);
  font-weight: 400;
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
}

.vault-stat strong {
  color: var(--color-ink);
  font-weight: 700;
}

.vault-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.vault-item {
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
}

.vault-item-image {
  aspect-ratio: 1 / 1;
  background: var(--color-surface);
  display: flex;
  align-items: center;
  justify-content: center;
}

.vault-item-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.vault-item-icon {
  font-size: 2.5rem;
  color: var(--color-text-muted);
  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48;
}

.vault-item-info {
  padding: var(--space-4) var(--space-5);
}

.vault-item-id {
  font-family: var(--font-mono);
  font-size: var(--text-overline);
  color: var(--color-gold);
  letter-spacing: var(--tracking-wide);
  display: block;
  margin-bottom: var(--space-1);
}

.vault-item-title {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  font-style: italic;
  color: var(--color-ink);
  line-height: var(--leading-snug);
}

@media (max-width: 768px) {
  .vault-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .vault-grid {
    grid-template-columns: 1fr;
  }
}

/* =============================================
   PROVENANCE GUARANTEE
   ============================================= */
.provenance {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-surface);
}

.provenance-inner {
  text-align: center;
}

.provenance-icon {
  font-size: 2.5rem;
  color: var(--color-gold);
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 48;
  margin-bottom: var(--space-6);
  display: inline-block;
}

.provenance-title {
  font-size: var(--text-h2);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-bottom: var(--space-8);
}

.provenance-title em {
  font-style: italic;
}

.provenance-body {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 60ch;
  margin: 0 auto var(--space-6);
}

.provenance-body:last-child {
  margin-bottom: 0;
}

/* =============================================
   CTA
   ============================================= */
.mint-cta {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-background);
  text-align: center;
}

.cta-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  color: var(--color-ink);
  margin-bottom: var(--space-8);
}

.cta-title em {
  font-style: italic;
}

.cta-buttons {
  display: flex;
  gap: var(--space-4);
}

.cta-button-gold {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-ink);
  padding: var(--space-4) var(--space-8);
  background-color: var(--color-gold);
  text-decoration: none;
  transition: opacity var(--duration-normal) ease,
              transform var(--duration-normal) ease;
}

.cta-button-gold:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.cta-button-gold:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

/* =============================================
   SHARED OVERLINE (scoped)
   ============================================= */
.overline {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
}
</style>
