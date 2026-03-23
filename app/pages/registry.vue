<template>
  <div class="registry-page">

    <!-- ============================================
         HERO — Registry introduction
    ============================================= -->
    <section ref="heroSection" class="registry-hero section section-dark">
      <div class="section-default">
        <p class="overline reveal">The Registry</p>
        <h1 class="registry-hero-title word-reveal">
          <em>The archival index.</em>
        </h1>
        <p class="registry-hero-sub reveal">
          A living record of every practitioner, monograph, and district
          within the Meraki Road collective. Search by name, discipline, seal,
          or district affiliation.
        </p>
        <div class="hero-stats reveal">
          <div class="hero-stat">
            <span class="hero-stat-value">{{ fellows.length }}</span>
            <span class="hero-stat-label">Fellows</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-value">{{ registryDistricts.length }}</span>
            <span class="hero-stat-label">Districts</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-value">4</span>
            <span class="hero-stat-label">Seal Tiers</span>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         SEARCH / FILTER — Enhanced archival search
    ============================================= -->
    <section ref="searchSection" class="registry-search section section-dark">
      <div class="section-wide">
        <div class="search-bar">
          <span class="search-prefix">Registry</span>
          <span class="material-symbols-outlined search-icon">search</span>
          <input
            v-model="searchQuery"
            type="text"
            class="search-input"
            placeholder="Search the collective record..."
            aria-label="Search the Meraki Road registry"
          />
          <button v-if="searchQuery" class="search-clear" aria-label="Clear search" @click="searchQuery = ''">
            <span class="material-symbols-outlined">close</span>
          </button>
          <span class="search-shortcut">&#8984;K</span>
        </div>

        <!-- Classification filters -->
        <div class="classification-row reveal">
          <span class="classification-label">Classification</span>
          <div class="filter-chips">
            <button
              v-for="filter in filters"
              :key="filter.key"
              class="filter-chip"
              :class="{ 'filter-chip--active': activeFilter === filter.key }"
              @click="activeFilter = filter.key"
            >
              {{ filter.label }}
              <span class="filter-chip-count">{{ getFilterCount(filter.key) }}</span>
            </button>
          </div>
        </div>

        <!-- Discipline filter row -->
        <div class="discipline-row reveal">
          <span class="discipline-label">Discipline</span>
          <div class="discipline-tags">
            <button
              v-for="disc in disciplines"
              :key="disc"
              class="discipline-tag"
              :class="{ 'discipline-tag--active': activeDiscipline === disc }"
              @click="activeDiscipline = activeDiscipline === disc ? '' : disc"
            >
              {{ disc }}
            </button>
          </div>
        </div>

        <div class="search-meta reveal">
          <span class="search-count">{{ String(filteredEntries.length).padStart(3, '0') }} Results</span>
          <span class="search-sort">Sorted by relevance</span>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         FELLOWS — Creator directory grid
    ============================================= -->
    <section ref="fellowsSection" class="registry-fellows section section-dark">
      <div class="section-wide">
        <div class="fellows-header">
          <p class="overline reveal">Classification: Practitioner</p>
          <h2 class="fellows-title word-reveal"><em>Fellows &amp; Creators</em></h2>
          <p class="fellows-count reveal">{{ filteredFellows.length }} practitioners indexed</p>
        </div>

        <div class="fellows-grid">
          <article
            v-for="fellow in filteredFellows"
            :key="fellow.slug"
            class="fellow-card vellum-card reveal"
          >
            <div class="fellow-image-wrap grayscale-hover">
              <NuxtImg
                :src="fellow.image"
                :alt="fellow.name"
                class="fellow-image archival-image"
                loading="lazy"
                width="400"
                height="400"
              />
              <span class="fellow-archive-ref">{{ fellow.registryId }}</span>
            </div>
            <div class="fellow-body">
              <div class="fellow-seal-row">
                <span class="seal-base" :class="`seal-${fellow.seal.toLowerCase()}`">
                  <SealMark :tier="fellow.seal.toLowerCase() as any" :size="14" />
                  {{ fellow.seal }}
                </span>
                <span v-if="fellow.district" class="fellow-district-tag">{{ fellow.district }}</span>
              </div>
              <h3 class="fellow-name"><em>{{ fellow.name }}</em></h3>
              <span class="fellow-discipline">{{ fellow.discipline }}</span>
              <div class="fellow-disciplines">
                <span
                  v-for="tag in parseDisciplineTags(fellow.discipline)"
                  :key="tag"
                  class="fellow-disc-tag"
                >{{ tag }}</span>
              </div>
              <NuxtLink :to="`/creators/${fellow.slug}`" class="fellow-link">
                View Monograph &rarr;
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         DISTRICTS — Sector directory
    ============================================= -->
    <section ref="districtsSection" class="registry-districts section section-dark">
      <div class="section-wide">
        <div class="districts-header">
          <p class="overline reveal">Classification: District</p>
          <h2 class="districts-title word-reveal"><em>Districts</em></h2>
          <p class="districts-count reveal">{{ filteredDistricts.length }} sectors mapped</p>
        </div>

        <div class="districts-grid">
          <NuxtLink
            v-for="district in filteredDistricts"
            :key="district.slug"
            :to="`/districts/${district.slug}`"
            class="district-entry reveal"
          >
            <span class="district-sector">SEC_{{ district.number }}</span>
            <span class="district-name">{{ district.name }}</span>
            <span class="district-type">{{ district.type }}</span>
            <span
              class="district-status-dot"
              :class="{
                'district-status-dot--active': district.status === 'active',
                'district-status-dot--coming': district.status === 'coming-soon',
                'district-status-dot--dev': district.status === 'development',
              }"
            />
          </NuxtLink>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — Apply
    ============================================= -->
    <section ref="ctaSection" class="registry-cta section section-dark">
      <div class="section-narrow cta-inner">
        <p class="overline reveal">Join the Registry</p>
        <h2 class="cta-title word-reveal">
          <em>Demonstrate your craft. Earn your seal.</em>
        </h2>
        <p class="cta-sub reveal">
          Registry placement is earned through demonstrated practice, not application fees.
          Begin with the Ikigai assessment and let the work speak.
        </p>
        <NuxtLink to="/apply" class="cta-button-gold reveal">
          Begin Assessment &rarr;
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'
import { districts } from '~/composables/useDistricts'

/* -- SEO ---------------------------------------- */
useHead({
  title: 'The Registry — Meraki Road',
  meta: [
    { name: 'description', content: 'The archival index of Meraki Road. A searchable directory of fellows, districts, and monographs.' },
  ],
})

useSeoMeta({
  ogTitle: 'The Registry — Meraki Road',
  ogDescription: 'The archival index of Meraki Road. A searchable directory of fellows, districts, and monographs.',
  twitterTitle: 'The Registry — Meraki Road',
  twitterDescription: 'The archival index of Meraki Road. A searchable directory of fellows, districts, and monographs.',
})

/* -- Section refs ------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
const searchSection = ref<HTMLElement | null>(null)
const fellowsSection = ref<HTMLElement | null>(null)
const districtsSection = ref<HTMLElement | null>(null)
const ctaSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

useGsapScrollReveal(searchSection, '.reveal', { stagger: 0.06 })

useGsapScrollReveal(fellowsSection, '.reveal', { stagger: 0.1 })
useWordReveal(fellowsSection, '.word-reveal')

useGsapScrollReveal(districtsSection, '.reveal', { stagger: 0.04 })
useWordReveal(districtsSection, '.word-reveal')

useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal')

/* -- State -------------------------------------- */
const searchQuery = ref('')
const activeFilter = ref('all')
const activeDiscipline = ref('')

interface FilterOption {
  key: string
  label: string
}

const filters: FilterOption[] = [
  { key: 'all', label: 'All' },
  { key: 'fellow', label: 'Fellows' },
  { key: 'verified', label: 'Verified' },
  { key: 'legacy', label: 'Legacy' },
  { key: 'associate', label: 'Associate' },
  { key: 'district', label: 'Districts' },
]

/* -- Data --------------------------------------- */
interface FellowEntry {
  slug: string
  name: string
  discipline: string
  seal: string
  image: string
  registryId: string
  district?: string
}

const fellows: FellowEntry[] = [
  {
    slug: 'sable-chen',
    name: 'Sable Chen',
    discipline: 'Visual Art & AI',
    seal: 'Legacy',
    image: '/images/districts/the-frame.webp',
    registryId: 'SC-01-0421-L',
    district: 'District 01',
  },
  {
    slug: 'elena-voss',
    name: 'Elena Voss',
    discipline: 'Spatial Installation & Light Sculpture',
    seal: 'Fellow',
    image: '/images/districts/meridian.webp',
    registryId: 'EV-11-0982-F',
    district: 'District 11',
  },
  {
    slug: 'tomas-vega',
    name: 'Tomas Vega',
    discipline: 'Generative Architecture & Computational Form',
    seal: 'Verified',
    image: '/images/districts/the-collective.webp',
    registryId: 'TV-03-1447-V',
    district: 'District 03',
  },
  {
    slug: 'julian-vane',
    name: 'Julian Vane',
    discipline: 'Architectural Ethics & Digital Preservation',
    seal: 'Fellow',
    image: '/images/districts/the-provenance.webp',
    registryId: 'JV-05-0733-F',
    district: 'District 05',
  },
]

const registryDistricts = districts

/* -- Computed ----------------------------------- */
const disciplines = computed(() => {
  const all = fellows.map(f => parseDisciplineTags(f.discipline)).flat()
  return [...new Set(all)]
})

function parseDisciplineTags(discipline: string): string[] {
  return discipline.split(/\s*[&,]\s*/).map(s => s.trim()).filter(Boolean)
}

function getFilterCount(key: string): number {
  if (key === 'all') return fellows.length + registryDistricts.length
  if (key === 'district') return registryDistricts.length
  return fellows.filter(f => f.seal.toLowerCase() === key).length
}

const filteredFellows = computed(() => {
  let result = fellows

  if (activeFilter.value !== 'all' && activeFilter.value !== 'district') {
    result = result.filter(f => f.seal.toLowerCase() === activeFilter.value)
  }

  if (activeDiscipline.value) {
    result = result.filter(f =>
      parseDisciplineTags(f.discipline).some(t =>
        t.toLowerCase() === activeDiscipline.value.toLowerCase()
      )
    )
  }

  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(f =>
      f.name.toLowerCase().includes(q) ||
      f.discipline.toLowerCase().includes(q) ||
      f.registryId.toLowerCase().includes(q) ||
      (f.district && f.district.toLowerCase().includes(q))
    )
  }
  return result
})

const filteredDistricts = computed(() => {
  if (activeFilter.value !== 'all' && activeFilter.value !== 'district') return []
  if (!searchQuery.value) return registryDistricts
  const q = searchQuery.value.toLowerCase()
  return registryDistricts.filter(d =>
    d.name.toLowerCase().includes(q) ||
    d.type.toLowerCase().includes(q) ||
    d.number.includes(q)
  )
})

const filteredEntries = computed(() => {
  return filteredFellows.value.length + filteredDistricts.value.length
})
</script>

<style scoped>
/* ═══════════════════════════════════════════════
   REGISTRY PAGE — Archival Index (Dark)
   ═══════════════════════════════════════════════ */

/* ─── Hero ─── */
.registry-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  min-height: 50vh;
  display: flex;
  align-items: flex-end;
}

.registry-hero-title {
  font-size: var(--text-display);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-display);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  max-width: 18ch;
}

.registry-hero-sub {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
  margin-bottom: var(--space-12);
}

.hero-stats {
  display: flex;
  gap: var(--space-12);
}

.hero-stat {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.hero-stat-value {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-gold);
  line-height: 1;
}

.hero-stat-label {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  opacity: 0.5;
}

/* ─── Search Bar ─── */
.search-bar {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-6);
  border: 1px solid var(--rule-color);
  background: rgba(255, 255, 255, 0.02);
  margin-bottom: var(--space-6);
  transition: border-color 0.3s ease;
}

.search-bar:focus-within {
  border-color: rgba(184, 150, 78, 0.4);
}

.search-prefix {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-gold);
  padding: 2px 8px;
  border: 1px solid rgba(184, 150, 78, 0.3);
  white-space: nowrap;
  opacity: 0.8;
}

.search-icon {
  font-size: 1.25rem;
  color: var(--color-dark-muted);
  opacity: 0.5;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-dark-text);
}

.search-input:focus {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
}

.search-input::placeholder {
  color: var(--color-dark-muted);
  opacity: 0.4;
}

.search-clear {
  cursor: pointer;
  color: var(--color-dark-muted);
  opacity: 0.5;
  transition: opacity 0.2s ease;
}

.search-clear:hover {
  opacity: 1;
}

.search-clear .material-symbols-outlined {
  font-size: 1.125rem;
}

.search-shortcut {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  color: var(--color-dark-muted);
  opacity: 0.3;
  padding: 2px 6px;
  border: 1px solid var(--rule-color);
}

/* ─── Classification Filter Row ─── */
.classification-row {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}

.classification-label {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  opacity: 0.5;
  white-space: nowrap;
  min-width: 7rem;
}

.filter-chips {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
}

.filter-chip {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  padding: var(--space-2) var(--space-4);
  border: 1px solid var(--rule-color);
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.filter-chip:hover {
  border-color: rgba(184, 150, 78, 0.3);
  color: var(--color-dark-text);
}

.filter-chip--active {
  border-color: var(--color-gold);
  color: var(--color-gold);
  background: rgba(184, 150, 78, 0.08);
}

.filter-chip-count {
  font-family: var(--font-mono);
  font-size: 0.5625rem;
  opacity: 0.5;
}

/* ─── Discipline Tags ─── */
.discipline-row {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.discipline-label {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  opacity: 0.5;
  white-space: nowrap;
  min-width: 7rem;
  padding-top: var(--space-2);
}

.discipline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.discipline-tag {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: var(--tracking-wide);
  color: var(--color-dark-muted);
  padding: 3px 10px;
  border: 1px solid var(--rule-color);
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0.6;
}

.discipline-tag:hover {
  opacity: 1;
  border-color: rgba(184, 150, 78, 0.3);
}

.discipline-tag--active {
  opacity: 1;
  border-color: var(--color-gold);
  color: var(--color-gold);
  background: rgba(184, 150, 78, 0.06);
}

/* ─── Search Meta ─── */
.search-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-4);
  border-top: 1px solid var(--rule-color);
}

.search-count {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-gold);
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  font-weight: 600;
}

.search-sort {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
  opacity: 0.5;
}

/* ─── Fellows Grid ─── */
.fellows-header {
  margin-bottom: var(--space-12);
}

.fellows-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.fellows-count {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  margin-top: var(--space-2);
  opacity: 0.5;
}

.fellows-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.fellow-card {
  border: 1px solid var(--rule-color);
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.fellow-card:hover {
  border-color: rgba(184, 150, 78, 0.3);
}

.fellow-image-wrap {
  aspect-ratio: 1;
  overflow: hidden;
  position: relative;
}

.fellow-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.fellow-archive-ref {
  position: absolute;
  bottom: var(--space-3);
  left: var(--space-3);
  font-family: var(--font-mono);
  font-size: 0.5625rem;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-dark-text);
  background: rgba(9, 9, 11, 0.88);
  padding: 2px 8px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.fellow-card:hover .fellow-archive-ref {
  opacity: 1;
}

.fellow-body {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.fellow-seal-row {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.fellow-district-tag {
  font-family: var(--font-mono);
  font-size: 0.5625rem;
  font-weight: 400;
  letter-spacing: var(--tracking-wide);
  color: var(--color-dark-muted);
  padding: 0.125rem 0.5rem;
  border: 1px solid var(--rule-color);
}

.fellow-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
}

.fellow-discipline {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
}

.fellow-disciplines {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: var(--space-1);
}

.fellow-disc-tag {
  font-family: var(--font-mono);
  font-size: 0.5rem;
  letter-spacing: var(--tracking-wide);
  color: var(--color-dark-muted);
  padding: 1px 6px;
  border: 1px solid var(--rule-color);
  opacity: 0.5;
}

.fellow-link {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-top: var(--space-3);
  background-image: none;
  transition: opacity 0.2s ease;
}

.fellow-link:hover {
  opacity: 0.7;
}

/* ─── Districts Directory ─── */
.districts-header {
  margin-bottom: var(--space-8);
}

.districts-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.districts-count {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  margin-top: var(--space-2);
  opacity: 0.5;
}

.districts-grid {
  display: flex;
  flex-direction: column;
}

.district-entry {
  display: grid;
  grid-template-columns: 5rem 1fr auto 8px;
  gap: var(--space-4);
  align-items: center;
  padding: var(--space-4) 0;
  border-bottom: 1px solid var(--rule-color);
  text-decoration: none;
  background-image: none;
  transition: opacity 0.2s ease;
}

.district-entry:first-child {
  border-top: 1px solid var(--rule-color);
}

.district-entry:hover {
  opacity: 0.7;
}

.district-sector {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-gold);
  letter-spacing: var(--tracking-wide);
  opacity: 0.7;
}

.district-name {
  font-family: var(--font-display);
  font-size: var(--text-body);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
}

.district-type {
  font-size: 0.5625rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-dark-muted);
}

.district-status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.district-status-dot--active { background: var(--color-success); }
.district-status-dot--coming { background: var(--color-gold); }
.district-status-dot--dev { background: var(--color-text-muted); opacity: 0.4; }

/* ─── CTA ─── */
.registry-cta {
  padding-top: var(--space-48);
  padding-bottom: var(--space-48);
}

.cta-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-title {
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  letter-spacing: var(--tracking-hero);
  line-height: var(--leading-snug);
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);
  max-width: 22ch;
}

.cta-sub {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin-bottom: var(--space-8);
}

.cta-button-gold {
  display: inline-block;
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  padding: var(--space-4) var(--space-8);
  border: 1px solid var(--color-gold);
  color: var(--color-background);
  background-color: var(--color-gold);
  background-image: none;
  transition: background-color var(--duration-normal) ease,
              border-color var(--duration-normal) ease;
}

.cta-button-gold:hover {
  background-color: var(--color-gold-accessible);
  border-color: var(--color-gold-accessible);
  background-size: 0;
}

.cta-button-gold:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

/* ─── Responsive ─── */
@media (max-width: 1024px) {
  .fellows-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .registry-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-16);
    min-height: auto;
  }

  .registry-hero-title {
    font-size: clamp(2rem, 8vw, var(--text-display));
  }

  .hero-stats {
    flex-wrap: wrap;
    gap: var(--space-6);
  }

  .fellows-grid {
    grid-template-columns: 1fr;
  }

  .district-entry {
    grid-template-columns: 4rem 1fr 8px;
  }

  .district-type {
    display: none;
  }

  .classification-row,
  .discipline-row {
    flex-direction: column;
    gap: var(--space-2);
  }

  .classification-label,
  .discipline-label {
    min-width: auto;
  }

  .filter-chip {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .search-bar {
    min-height: 44px;
  }

  .search-prefix {
    display: none;
  }

  .search-shortcut {
    display: none;
  }

  .cta-title {
    font-size: clamp(1.75rem, 6vw, var(--text-h1));
  }

  .cta-button-gold {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
  }

  .fellow-link {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }

  .registry-cta {
    padding-top: var(--space-24);
    padding-bottom: var(--space-24);
  }
}
</style>
