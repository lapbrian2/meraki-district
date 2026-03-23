<template>
  <div class="mint-page">

    <!-- ============================================
         HERO — The Ritual of Acquisition
    ============================================= -->
    <section ref="heroSection" class="mint-hero section section-dark">
      <div class="section-narrow">
        <span class="stamped-overline reveal">The Pavilion Store &mdash; District 08</span>
        <h1 class="mint-hero-title word-reveal">
          <em>The Ritual of Acquisition</em>
        </h1>
        <p class="mint-hero-sub reveal">
          Every object in this archive was made with intention. Acquiring it should
          feel the same way. No carts. No impulse. You choose a piece,
          and the piece chooses its moment.
        </p>
        <p class="mint-hero-sub reveal">
          Home of <strong>Meraki Mint</strong> &mdash; limited edition artifacts released
          in numbered sequences, each carrying full chain-of-custody documentation
          from workshop to vault.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PHILOSOPHY — The Three Tenets
    ============================================= -->
    <section ref="philosophySection" class="ritual-philosophy section">
      <div class="section-wide">
        <div class="philosophy-header">
          <p class="overline reveal">The Protocol</p>
          <h2 class="philosophy-title word-reveal"><em>Three tenets of considered acquisition</em></h2>
        </div>
        <div class="tenets-grid">
          <article v-for="tenet in tenets" :key="tenet.title" class="tenet-card vellum-card reveal">
            <span class="tenet-numeral">{{ tenet.numeral }}</span>
            <h3 class="tenet-title">{{ tenet.title }}</h3>
            <p class="tenet-body">{{ tenet.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         FEATURED ACQUISITION — Large hero product card
    ============================================= -->
    <section ref="featuredSection" class="featured-acquisition section section-dark">
      <div class="section-wide">
        <div class="featured-product-card reveal">
          <div class="featured-product-image grayscale-hover parallax-container">
            <div class="featured-product-placeholder">
              <span class="material-symbols-outlined featured-product-placeholder-icon">local_florist</span>
            </div>
            <div class="featured-provenance-badge">
              <span class="material-symbols-outlined provenance-badge-icon">verified</span>
              <span class="provenance-badge-text">Verified Provenance</span>
            </div>
          </div>
          <div class="featured-product-details">
            <div class="featured-product-meta">
              <span class="featured-product-id">MR-A-048</span>
              <span class="featured-product-date">March 2026</span>
            </div>
            <p class="overline reveal">Current Sequence</p>
            <h2 class="featured-product-title word-reveal"><em>Botanical Monograph No. 04</em></h2>
            <p class="featured-product-edition reveal">Limited Edition &mdash; 12 of 12 remaining</p>
            <p class="featured-product-desc reveal">
              Hand-pressed folio of forty-eight generative botanicals,
              printed on archival cotton rag. Each copy carries a unique seed-hash
              tied to the original diffusion parameters. Bound in linen boards
              with a gilt-stamped spine, accompanied by a companion essay
              on the algorithmic cultivation process.
            </p>
            <p class="featured-curator-note reveal">
              <span class="material-symbols-outlined curator-note-icon">edit_note</span>
              <em>Curator&rsquo;s note:</em> This folio represents the convergence of
              botanical illustration tradition and generative practice. The seed-hash
              provenance ensures each copy is computationally singular.
            </p>
            <div class="featured-product-actions reveal">
              <button class="product-cta-gold">Begin Acquisition &mdash; $1,240</button>
              <NuxtLink to="/pavilion" class="product-cta-ghost">View Full Provenance &rarr;</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         EXHIBITION CATALOGUES — 3-column grid
    ============================================= -->
    <section ref="cataloguesSection" class="catalogues section">
      <div class="section-wide">
        <div class="catalogues-header">
          <div class="catalogues-header-left">
            <p class="overline reveal">Editions</p>
            <h2 class="catalogues-title word-reveal"><em>Exhibition Catalogues</em></h2>
          </div>
          <NuxtLink to="#" class="catalogues-view-all reveal">
            View All Editions &rarr;
          </NuxtLink>
        </div>

        <div class="catalogues-grid">
          <article
            v-for="catalogue in catalogues"
            :key="catalogue.title"
            class="catalogue-card vellum-card reveal"
          >
            <div class="catalogue-image-area grayscale-hover">
              <div class="catalogue-placeholder">
                <span class="material-symbols-outlined catalogue-placeholder-icon">{{ catalogue.icon }}</span>
              </div>
              <div class="catalogue-verified">
                <span class="material-symbols-outlined catalogue-verified-icon">verified</span>
              </div>
            </div>
            <div class="catalogue-info">
              <span class="catalogue-series">{{ catalogue.series }}</span>
              <h3 class="catalogue-name"><em>{{ catalogue.title }}</em></h3>
              <div class="catalogue-footer">
                <span class="catalogue-price">{{ catalogue.price }}</span>
                <span class="catalogue-edition">{{ catalogue.edition }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         MERAKI MINT — Limited edition collectibles
    ============================================= -->
    <section ref="mintSection" class="meraki-mint section section-dark">
      <div class="section-wide">
        <div class="mint-header">
          <div class="mint-header-left">
            <p class="overline reveal">Limited Sequences</p>
            <h2 class="mint-title word-reveal"><em>Meraki Mint</em></h2>
            <p class="mint-desc reveal">
              Artifacts and collectibles produced in numbered sequences.
              Each piece is sealed, cataloged, and issued with full provenance
              from creation to vault. When a sequence closes, it closes forever.
            </p>
          </div>
        </div>

        <div class="mint-grid">
          <article
            v-for="item in mintItems"
            :key="item.title"
            class="mint-card lift-card reveal"
          >
            <div class="mint-card-image grayscale-hover">
              <div class="mint-card-placeholder">
                <span class="material-symbols-outlined mint-card-icon">{{ item.icon }}</span>
              </div>
              <span v-if="item.sequenceOpen" class="mint-card-sequence-badge">Sequence Open</span>
            </div>
            <div class="mint-card-info">
              <span class="mint-card-category">{{ item.category }}</span>
              <h3 class="mint-card-title"><em>{{ item.title }}</em></h3>
              <p class="mint-card-remaining">{{ item.remaining }}</p>
              <div class="mint-card-footer">
                <span class="mint-card-price">{{ item.price }}</span>
                <NuxtLink to="#" class="mint-card-arrow" aria-label="View details">
                  <span class="material-symbols-outlined">arrow_forward</span>
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         THE VAULT — Personal collection view
    ============================================= -->
    <section ref="vaultSection" class="the-vault section">
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
              <span class="vault-item-acquired">{{ item.acquired }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PROVENANCE GUARANTEE
    ============================================= -->
    <section ref="provenanceSection" class="provenance section section-dark">
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
            the work itself &mdash; and the full story behind it.
          </p>
        </div>
      </div>
    </section>

    <!-- ============================================
         CTA — Centered
    ============================================= -->
    <section ref="ctaSection" class="mint-cta section">
      <div class="section-narrow cta-inner">
        <h2 class="cta-title word-reveal">
          <em>Every artifact tells a story. The ritual is how you earn it.</em>
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
    { name: 'description', content: 'The Pavilion Store: the ritual of acquisition. An archival marketplace for verified creative artifacts. Featuring Meraki Mint limited editions. Authenticated provenance, curated editions, and a personal vault for every collector.' },
  ],
})

useSeoMeta({
  ogTitle: 'The Pavilion Store — Meraki Road',
  ogDescription: 'The ritual of acquisition. An archival marketplace for verified creative artifacts. Featuring Meraki Mint limited editions.',
  twitterTitle: 'The Pavilion Store — Meraki Road',
  twitterDescription: 'The ritual of acquisition. An archival marketplace for verified creative artifacts. Featuring Meraki Mint limited editions.',
})

/* -- Data --------------------------------------- */
interface Tenet {
  numeral: string
  title: string
  body: string
}

const tenets: Tenet[] = [
  {
    numeral: 'I',
    title: 'Intention Before Transaction',
    body: 'Acquisition begins with consideration. Browse slowly. Read the provenance. Understand who made it and why. The piece was not made in a hurry — your decision should not be either.',
  },
  {
    numeral: 'II',
    title: 'Provenance Is the Product',
    body: 'Every artifact carries documentation from origin to vault. Materials, methods, edition number, maker identity. The certificate is not a formality — it is the second half of the work.',
  },
  {
    numeral: 'III',
    title: 'Once Closed, Closed Forever',
    body: 'When a sequence sells through, it does not reopen. There are no reruns, no second pressings, no anniversary editions. Scarcity is not a marketing strategy here — it is the natural consequence of limited craft.',
  },
]

interface Catalogue {
  title: string
  icon: string
  series: string
  price: string
  edition: string
}

const catalogues: Catalogue[] = [
  { title: 'Pressure & Release', icon: 'print', series: 'Pavilion Exhibition', price: '$180', edition: 'Ed. of 200' },
  { title: 'Latent Landscapes', icon: 'terrain', series: 'Digital Archival', price: '$220', edition: 'Ed. of 150' },
  { title: 'Mark, Erase, Repeat', icon: 'gesture', series: 'Process Studies', price: '$160', edition: 'Ed. of 300' },
]

interface MintItem {
  title: string
  icon: string
  category: string
  price: string
  remaining: string
  sequenceOpen: boolean
}

const mintItems: MintItem[] = [
  { title: 'Archival Ink Set No. 07', icon: 'palette', category: 'Studio Tools', price: '$85', remaining: '18 of 50 remaining', sequenceOpen: true },
  { title: 'Specimen Poster Series', icon: 'image', category: 'Prints', price: '$45', remaining: '6 of 24 remaining', sequenceOpen: true },
  { title: 'The Meraki Codex', icon: 'menu_book', category: 'Publications', price: '$120', remaining: 'Sequence closed', sequenceOpen: false },
]

interface VaultItem {
  id: string
  title: string
  icon: string
  acquired: string
}

const vaultItems: VaultItem[] = [
  { id: 'A-001', title: 'Botanical Monograph No. 01', icon: 'local_florist', acquired: 'Acquired Jan 2026' },
  { id: 'A-042', title: 'Signal / Noise Print Series', icon: 'graphic_eq', acquired: 'Acquired Feb 2026' },
  { id: 'B-119', title: 'Codex Fragment (Restored)', icon: 'history_edu', acquired: 'Acquired Mar 2026' },
]

/* -- Scroll reveal ------------------------------ */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

const philosophySection = ref<HTMLElement | null>(null)
useGsapScrollReveal(philosophySection, '.reveal', { stagger: 0.12 })
useWordReveal(philosophySection, '.word-reveal')

const featuredSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(featuredSection, '.reveal', { stagger: 0.08 })
useWordReveal(featuredSection, '.word-reveal')

const cataloguesSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(cataloguesSection, '.reveal', { stagger: 0.1 })
useWordReveal(cataloguesSection, '.word-reveal')

const mintSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(mintSection, '.reveal', { stagger: 0.1 })
useWordReveal(mintSection, '.word-reveal')

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

    /* Tenet numerals count-up feel */
    const numerals = philosophySection.value?.querySelectorAll('.tenet-numeral')
    numerals?.forEach((numeral, i) => {
      gsap.from(numeral, {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        delay: i * 0.15,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: numeral,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    })
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

.mint-hero-sub + .mint-hero-sub {
  margin-top: var(--space-4);
}

@media (max-width: 768px) {
  .mint-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-12);
  }
}

/* =============================================
   PHILOSOPHY — Three Tenets
   ============================================= */
.ritual-philosophy {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-surface);
}

.philosophy-header {
  margin-bottom: var(--space-12);
  text-align: center;
}

.philosophy-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-3);
  line-height: var(--leading-tight);
}

.philosophy-title em {
  font-style: italic;
}

.tenets-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.tenet-card {
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.tenet-numeral {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 200;
  color: var(--color-gold);
  line-height: 1;
  letter-spacing: var(--tracking-tight);
}

.tenet-title {
  font-family: var(--font-body);
  font-size: var(--text-h4);
  font-weight: 600;
  color: var(--color-ink);
  letter-spacing: var(--tracking-snug);
}

.tenet-body {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
}

@media (max-width: 768px) {
  .ritual-philosophy {
    padding: var(--space-16) var(--content-padding);
  }

  .tenets-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
}

/* =============================================
   FEATURED ACQUISITION — Hero product card
   ============================================= */
.featured-acquisition {
  padding: var(--space-16) var(--content-padding);
  background: var(--color-background);
}

.featured-product-card {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-12);
  align-items: start;
  border: 1px solid var(--color-border);
  overflow: hidden;
}

.featured-product-image {
  position: relative;
  aspect-ratio: 4 / 3;
  background: var(--color-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.featured-product-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.featured-product-placeholder-icon {
  font-size: 4.5rem;
  color: var(--color-dark-muted);
  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48;
}

.featured-provenance-badge {
  position: absolute;
  top: var(--space-4);
  left: var(--space-4);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3);
  background: rgba(9, 9, 11, 0.88);
  border: 1px solid rgba(184, 150, 78, 0.3);
}

.provenance-badge-icon {
  font-size: 14px;
  color: var(--color-gold);
}

.provenance-badge-text {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
}

.featured-product-details {
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
}

.featured-product-meta {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}

.featured-product-id {
  font-family: var(--font-mono);
  font-size: var(--text-overline);
  color: var(--color-gold);
  letter-spacing: var(--tracking-wide);
}

.featured-product-date {
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
}

.featured-product-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-3);
  margin-bottom: var(--space-2);
  line-height: var(--leading-tight);
}

.featured-product-title em {
  font-style: italic;
}

.featured-product-edition {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  margin-bottom: var(--space-6);
}

.featured-product-desc {
  font-size: var(--text-body);
  color: var(--color-dark-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.featured-curator-note {
  display: flex;
  gap: var(--space-3);
  align-items: flex-start;
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
  padding: var(--space-4);
  border-left: 2px solid rgba(184, 150, 78, 0.3);
  background: rgba(184, 150, 78, 0.03);
  margin-bottom: var(--space-8);
}

.curator-note-icon {
  font-size: 18px;
  color: var(--color-gold);
  flex-shrink: 0;
  margin-top: 1px;
}

.featured-product-actions {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  align-items: center;
}

.product-cta-gold {
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
}

.product-cta-gold:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.product-cta-gold:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

.product-cta-ghost {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  transition: opacity var(--duration-normal) ease;
}

.product-cta-ghost:hover {
  opacity: 0.7;
}

@media (max-width: 900px) {
  .featured-product-card {
    grid-template-columns: 1fr;
  }

  .featured-product-details {
    padding: var(--space-6);
  }

  .featured-product-actions {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* =============================================
   EXHIBITION CATALOGUES — 3-column grid
   ============================================= */
.catalogues {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-surface);
}

.catalogues-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: var(--space-12);
}

.catalogues-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-3);
  line-height: var(--leading-tight);
}

.catalogues-title em {
  font-style: italic;
}

.catalogues-view-all {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  white-space: nowrap;
  transition: opacity var(--duration-normal) ease;
}

.catalogues-view-all:hover {
  opacity: 0.7;
}

.catalogues-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.catalogue-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.catalogue-image-area {
  position: relative;
  aspect-ratio: 3 / 4;
  background: rgba(255, 255, 255, 0.02);
  display: flex;
  align-items: center;
  justify-content: center;
}

.catalogue-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
}

.catalogue-placeholder-icon {
  font-size: 3rem;
  color: var(--color-text-muted);
  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48;
}

.catalogue-verified {
  position: absolute;
  top: var(--space-3);
  left: var(--space-3);
}

.catalogue-verified-icon {
  font-size: 18px;
  color: var(--color-gold);
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.5));
}

.catalogue-info {
  padding: var(--space-5) var(--space-5);
}

.catalogue-series {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  display: block;
  margin-bottom: var(--space-2);
}

.catalogue-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-ink);
  line-height: var(--leading-snug);
  margin-bottom: var(--space-4);
}

.catalogue-name em {
  font-style: italic;
}

.catalogue-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.catalogue-price {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  font-weight: 500;
  color: var(--color-ink);
}

.catalogue-edition {
  font-size: var(--text-caption);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
}

@media (max-width: 768px) {
  .catalogues {
    padding: var(--space-16) var(--content-padding);
  }

  .catalogues-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-4);
  }

  .catalogues-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}

/* =============================================
   MERAKI MINT — Limited editions 3-col grid
   ============================================= */
.meraki-mint {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-background);
}

.mint-header {
  margin-bottom: var(--space-12);
}

.mint-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-3);
  margin-bottom: var(--space-4);
  line-height: var(--leading-tight);
}

.mint-title em {
  font-style: italic;
}

.mint-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 52ch;
}

.mint-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.mint-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-border);
  overflow: hidden;
}

.mint-card-image {
  position: relative;
  aspect-ratio: 1 / 1;
  background: var(--color-surface);
  display: flex;
  align-items: center;
  justify-content: center;
}

.mint-card-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mint-card-icon {
  font-size: 2.5rem;
  color: var(--color-dark-muted);
  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48;
}

.mint-card-sequence-badge {
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  padding: var(--space-1) var(--space-2);
  border: 1px solid rgba(184, 150, 78, 0.3);
  background: rgba(9, 9, 11, 0.85);
}

.mint-card-info {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.mint-card-category {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-2);
}

.mint-card-title {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  color: var(--color-dark-text);
  line-height: var(--leading-snug);
  margin-bottom: var(--space-2);
}

.mint-card-title em {
  font-style: italic;
}

.mint-card-remaining {
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  margin-bottom: auto;
}

.mint-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--space-5);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}

.mint-card-price {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  font-weight: 500;
  color: var(--color-dark-text);
}

.mint-card-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--color-border);
  color: var(--color-dark-muted);
  background-image: none;
  transition: border-color var(--duration-normal) ease,
              color var(--duration-normal) ease,
              background-color var(--duration-normal) ease;
}

.mint-card:hover .mint-card-arrow {
  border-color: var(--color-gold);
  color: var(--color-ink);
  background-color: var(--color-gold);
}

@media (max-width: 768px) {
  .meraki-mint {
    padding: var(--space-16) var(--content-padding);
  }

  .mint-grid {
    grid-template-columns: 1fr;
  }
}

/* =============================================
   THE VAULT
   ============================================= */
.the-vault {
  padding: var(--space-16) var(--content-padding);
  background: var(--color-surface);
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
  background: var(--color-background);
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
  margin-bottom: var(--space-2);
}

.vault-item-acquired {
  font-size: var(--text-caption);
  color: var(--color-text-muted);
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
  background: var(--color-background);
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
  color: var(--color-dark-text);
  margin-bottom: var(--space-8);
}

.provenance-title em {
  font-style: italic;
}

.provenance-body {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
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
  background: var(--color-surface);
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
  max-width: 20ch;
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
