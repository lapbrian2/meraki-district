<template>
  <div ref="pageRef" class="districts-page">
    <!-- Hero -->
    <section class="dp-hero">
      <p class="dp-overline reveal">Districts</p>
      <h1 class="dp-display word-reveal">Eleven districts, one road.</h1>
      <p class="dp-subtitle reveal">
        Each with its own mandate. Each built to serve a different dimension of creative practice.
      </p>
      <div class="dp-rule reveal" aria-hidden="true" />
    </section>

    <!-- Active Districts — hero treatment -->
    <section ref="activeSection" class="dp-active">
      <p class="dp-section-label reveal">
        <span class="dp-label-dot dp-dot--active" />
        Active
      </p>

      <!-- Flagship: Voight Studio, full-width with image -->
      <NuxtLink
        :to="`/districts/${active[0].slug}`"
        class="dp-flagship reveal"
      >
        <div class="dp-flagship-image">
          <NuxtImg
            :src="active[0].image"
            :alt="active[0].name"
            loading="lazy"
            width="800"
            height="500"
          />
        </div>
        <div class="dp-flagship-info">
          <span class="dp-number">{{ active[0].number }}</span>
          <span class="dp-type">{{ active[0].type }}</span>
          <h2 class="dp-name dp-name--lg">{{ active[0].name }}</h2>
          <p class="dp-desc">{{ active[0].longDescription || active[0].description }}</p>
          <span class="dp-cta">Explore district →</span>
        </div>
      </NuxtLink>

      <!-- Row 2: asymmetric 7/5 for remaining active -->
      <div class="dp-active-row">
        <NuxtLink
          v-for="d in active.slice(1)"
          :key="d.slug"
          :to="`/districts/${d.slug}`"
          class="dp-active-card reveal"
        >
          <div class="dp-active-image">
            <NuxtImg
              :src="d.image"
              :alt="d.name"
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
          <div class="dp-active-info">
            <span class="dp-number">{{ d.number }}</span>
            <span class="dp-type">{{ d.type }}</span>
            <h3 class="dp-name">{{ d.name }}</h3>
            <p class="dp-desc">{{ d.description }}</p>
            <span class="dp-cta">Explore →</span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Coming Soon — medium cards -->
    <section ref="comingSection" class="dp-coming">
      <p class="dp-section-label reveal">
        <span class="dp-label-dot dp-dot--coming" />
        Coming Soon
      </p>

      <div class="dp-coming-grid">
        <NuxtLink
          v-for="d in comingSoon"
          :key="d.slug"
          :to="`/districts/${d.slug}`"
          class="dp-coming-card reveal"
        >
          <span class="dp-card-icon material-symbols-outlined">{{ getIcon(d.slug) }}</span>
          <span class="dp-number">{{ d.number }}</span>
          <span class="dp-type">{{ d.type }}</span>
          <h3 class="dp-name">{{ d.name }}</h3>
          <p class="dp-desc">{{ d.description }}</p>
          <span v-if="d.statusNote" class="dp-status-note">{{ d.statusNote }}</span>
        </NuxtLink>
      </div>
    </section>

    <!-- In Development — compact rows -->
    <section ref="devSection" class="dp-dev">
      <p class="dp-section-label reveal">
        <span class="dp-label-dot dp-dot--dev" />
        In Development
      </p>

      <div class="dp-dev-list">
        <NuxtLink
          v-for="d in development"
          :key="d.slug"
          :to="`/districts/${d.slug}`"
          class="dp-dev-row reveal"
        >
          <span class="dp-dev-number">{{ d.number }}</span>
          <span class="dp-card-icon material-symbols-outlined">{{ getIcon(d.slug) }}</span>
          <div class="dp-dev-info">
            <h3 class="dp-dev-name">{{ d.name }}</h3>
            <span class="dp-dev-type">{{ d.type }}</span>
          </div>
          <p class="dp-dev-desc">{{ d.description }}</p>
          <span class="dp-dev-arrow material-symbols-outlined">arrow_forward</span>
        </NuxtLink>
      </div>
    </section>

    <!-- Footer CTA -->
    <section class="dp-cta-section">
      <div class="dp-cta-inner reveal">
        <h2 class="dp-cta-title word-reveal">Ready to walk the road?</h2>
        <p class="dp-cta-sub">For creators building at the intersection of craft and computation.</p>
        <NuxtLink to="/apply" class="dp-cta-btn">Express Interest →</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'
import { districts } from '~/composables/useDistricts'

const pageRef = ref<HTMLElement | null>(null)
const activeSection = ref<HTMLElement | null>(null)
const comingSection = ref<HTMLElement | null>(null)
const devSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(pageRef, '.reveal', { stagger: 0.06 })
useWordReveal(pageRef, '.word-reveal')

// Group by status
const active = districts.filter(d => d.status === 'active')
const comingSoon = districts.filter(d => d.status === 'coming-soon')
const development = districts.filter(d => d.status === 'development')

const iconMap: Record<string, string> = {
  'voight-studio': 'brush',
  'the-road': 'edit_road',
  'meridian': 'explore',
  'fieldwork': 'school',
  'the-provenance': 'inventory_2',
  'basecamp': 'groups',
  'common-ground': 'event',
  'the-mint': 'storefront',
  'the-seal': 'verified',
  'the-collective': 'handshake',
  'the-frame': 'videocam',
}

function getIcon(slug: string): string {
  return iconMap[slug] || 'circle'
}

useHead({
  title: 'Districts — Meraki Road',
  meta: [
    { name: 'description', content: 'Eleven districts, one road. Navigate the creative infrastructure of Meraki Road.' },
  ],
})
</script>

<style scoped>
.districts-page {
  background: var(--color-background);
  color: var(--color-ink, #FAFAF9);
}

/* ─── Hero ─── */
.dp-hero {
  padding: calc(var(--space-32) + 3rem) var(--content-padding) var(--space-16);
  max-width: 64rem;
  margin: 0 auto;
}

.dp-overline {
  font-size: var(--text-overline);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}

.dp-display {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin-bottom: var(--space-4);
}

.dp-subtitle {
  font-size: 1.0625rem;
  font-weight: 300;
  color: var(--color-text-muted);
  line-height: 1.6;
  max-width: 42ch;
}

.dp-rule {
  width: 4rem;
  height: 1px;
  background: var(--rule-color);
  margin-top: var(--space-8);
}

/* ─── Section Labels ─── */
.dp-section-label {
  font-size: var(--text-overline);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: var(--space-8);
}

.dp-label-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.dp-dot--active { background: #16A34A; }
.dp-dot--coming { background: var(--color-gold); }
.dp-dot--dev { background: var(--color-text-muted); opacity: 0.5; }

/* ─── Shared tokens ─── */
.dp-number {
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  color: var(--color-text-muted);
  opacity: 0.5;
  display: block;
  margin-bottom: 0.25rem;
}

.dp-type {
  font-size: 0.5625rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--color-gold);
  display: block;
  margin-bottom: 0.5rem;
}

.dp-name {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: var(--text-h3);
  color: var(--color-ink, #FAFAF9);
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.dp-name--lg {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
}

.dp-desc {
  font-size: var(--text-small);
  font-weight: 300;
  line-height: 1.6;
  color: var(--color-text-muted);
}

.dp-cta {
  font-size: var(--text-overline);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-gold);
  margin-top: auto;
  padding-top: var(--space-4);
  transition: padding-left 0.3s ease;
}

/* ─── Active Section ─── */
.dp-active {
  padding: 0 var(--content-padding) var(--space-16);
  max-width: 76rem;
  margin: 0 auto;
}

/* Flagship card */
.dp-flagship {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border: 1px solid var(--rule-color);
  overflow: hidden;
  margin-bottom: var(--space-4);
  text-decoration: none;
  color: inherit;
  background-image: none;
  transition: border-color 0.3s ease;
}

.dp-flagship:hover {
  border-color: var(--color-gold);
}

.dp-flagship:hover .dp-name { color: var(--color-gold); }
.dp-flagship:hover .dp-cta { padding-left: 0.5rem; }

.dp-flagship-image {
  aspect-ratio: 16/10;
  overflow: hidden;
}

.dp-flagship-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.dp-flagship:hover .dp-flagship-image img {
  transform: scale(1.04);
}

.dp-flagship-info {
  padding: var(--space-8) var(--space-10);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Active row: asymmetric */
.dp-active-row {
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: var(--space-4);
}

.dp-active-card {
  border: 1px solid var(--rule-color);
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background-image: none;
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s ease;
}

.dp-active-card:hover {
  border-color: var(--color-gold);
}

.dp-active-card:hover .dp-name { color: var(--color-gold); }
.dp-active-card:hover .dp-cta { padding-left: 0.5rem; }

.dp-active-image {
  aspect-ratio: 16/10;
  overflow: hidden;
}

.dp-active-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.dp-active-card:hover .dp-active-image img {
  transform: scale(1.04);
}

.dp-active-info {
  padding: var(--space-6) var(--space-6) var(--space-8);
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* ─── Coming Soon Section ─── */
.dp-coming {
  padding: var(--space-16) var(--content-padding);
  max-width: 76rem;
  margin: 0 auto;
  border-top: 1px solid var(--rule-color);
}

.dp-coming-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid var(--rule-color);
}

.dp-coming-card {
  padding: var(--space-10) var(--space-8);
  border-right: 1px solid var(--rule-color);
  border-bottom: 1px solid var(--rule-color);
  text-decoration: none;
  color: inherit;
  background-image: none;
  display: flex;
  flex-direction: column;
  transition: background 0.35s ease;
}

.dp-coming-card:nth-child(2n) { border-right: none; }
.dp-coming-card:nth-child(n+3) { border-bottom: none; }

.dp-coming-card:hover {
  background: var(--color-surface);
}

.dp-coming-card:hover .dp-name { color: var(--color-gold); }

.dp-card-icon {
  font-size: 1.5rem;
  color: var(--color-text-muted);
  margin-bottom: var(--space-6);
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
  transition: color 0.3s ease;
}

.dp-coming-card:hover .dp-card-icon { color: var(--color-gold); }

.dp-status-note {
  font-size: var(--text-overline);
  color: var(--color-gold);
  opacity: 0.7;
  margin-top: var(--space-4);
  font-style: italic;
}

/* ─── Development Section — compact rows ─── */
.dp-dev {
  padding: var(--space-16) var(--content-padding);
  max-width: 76rem;
  margin: 0 auto;
  border-top: 1px solid var(--rule-color);
}

.dp-dev-list {
  border-top: 1px solid var(--rule-color);
}

.dp-dev-row {
  display: grid;
  grid-template-columns: 3rem 2rem 1fr 2fr 2rem;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-5) var(--space-4);
  border-bottom: 1px solid var(--rule-color);
  text-decoration: none;
  color: inherit;
  background-image: none;
  opacity: 0.6;
  transition: opacity 0.3s ease, background 0.3s ease;
}

.dp-dev-row:hover {
  opacity: 1;
  background: var(--color-surface);
}

.dp-dev-row:hover .dp-dev-name { color: var(--color-gold); }
.dp-dev-row:hover .dp-dev-arrow { color: var(--color-gold); transform: translateX(4px); }

.dp-dev-number {
  font-size: 0.625rem;
  letter-spacing: 0.2em;
  color: var(--color-text-muted);
  opacity: 0.5;
}

.dp-dev-row .dp-card-icon {
  font-size: 1.25rem;
  margin-bottom: 0;
}

.dp-dev-info {
  display: flex;
  flex-direction: column;
}

.dp-dev-name {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: 1.125rem;
  color: var(--color-ink, #FAFAF9);
  transition: color 0.3s ease;
}

.dp-dev-type {
  font-size: 0.5625rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-text-muted);
}

.dp-dev-desc {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.dp-dev-arrow {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  opacity: 0;
  transition: all 0.3s ease;
}

.dp-dev-row:hover .dp-dev-arrow { opacity: 1; }

/* ─── CTA ─── */
.dp-cta-section {
  padding: var(--space-32) var(--content-padding);
  text-align: center;
  border-top: 1px solid var(--rule-color);
}

.dp-cta-inner {
  max-width: 40rem;
  margin: 0 auto;
}

.dp-cta-title {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: clamp(2rem, 4vw, 3.5rem);
  margin-bottom: var(--space-4);
}

.dp-cta-sub {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  margin-bottom: var(--space-8);
}

.dp-cta-btn {
  display: inline-block;
  padding: var(--space-4) var(--space-10);
  background: var(--color-gold);
  color: var(--color-background);
  font-size: var(--text-overline);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  background-image: none;
  transition: opacity 0.3s ease;
}

.dp-cta-btn:hover { opacity: 0.85; }

/* ─── Responsive ─── */
@media (max-width: 1024px) {
  .dp-active-row {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .dp-hero {
    padding-top: calc(var(--space-16) + 3rem);
  }

  .dp-flagship {
    grid-template-columns: 1fr;
  }

  .dp-active-row {
    grid-template-columns: 1fr;
  }

  .dp-coming-grid {
    grid-template-columns: 1fr;
  }

  .dp-coming-card {
    border-right: none !important;
  }

  .dp-coming-card:nth-child(n+3) {
    border-bottom: 1px solid var(--rule-color);
  }

  .dp-coming-card:last-child {
    border-bottom: none;
  }

  .dp-dev-row {
    grid-template-columns: 2.5rem 1.5rem 1fr 1.5rem;
  }

  .dp-dev-desc {
    display: none;
  }
}
</style>
