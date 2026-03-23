<template>
  <div ref="pageRef" class="studio-page">

    <!-- ============================================
         HERO — Curator's Studio Header
    ============================================= -->
    <section ref="heroSection" class="studio-hero section section-dark">
      <div class="section-wide">
        <span class="overline-badge reveal">Internal</span>
        <h1 class="hero-title word-reveal">
          <em>Curator's Studio</em>
        </h1>
        <p class="hero-subtitle reveal">
          The audit workspace. Review submissions, verify creators,
          manage exhibitions, and keep the road honest.
        </p>
      </div>
    </section>

    <!-- ============================================
         SYSTEM PULSE — Live Metrics
    ============================================= -->
    <section ref="metricsSection" class="metrics section">
      <div class="section-wide">
        <div class="metrics-bar">
          <div class="metric-card vellum-card reveal" v-for="metric in systemMetrics" :key="metric.label">
            <span class="metric-value">{{ metric.value }}</span>
            <span class="metric-label">{{ metric.label }}</span>
            <span v-if="metric.trend" class="metric-trend" :class="metric.trendClass">
              {{ metric.trend }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         QUEUE — Submissions Awaiting Review
    ============================================= -->
    <section ref="queueSection" class="queue section section-dark">
      <div class="section-wide">
        <div class="queue-header">
          <p class="overline reveal">Review Queue</p>
          <h2 class="queue-title word-reveal"><em>Pending Submissions</em></h2>
        </div>

        <div class="queue-table-wrap reveal">
          <table class="queue-table">
            <thead>
              <tr>
                <th>Creator</th>
                <th>District</th>
                <th>Work</th>
                <th>Submitted</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in queueItems" :key="item.id" class="queue-row">
                <td class="queue-creator">
                  <span class="queue-avatar">{{ item.initials }}</span>
                  {{ item.name }}
                </td>
                <td class="queue-district">{{ item.district }}</td>
                <td class="queue-work"><em>{{ item.title }}</em></td>
                <td class="queue-date">{{ item.date }}</td>
                <td>
                  <span class="queue-status" :class="`queue-status--${item.status}`">
                    {{ item.statusLabel }}
                  </span>
                </td>
                <td class="queue-actions">
                  <button class="queue-action-btn" title="Review">
                    <span class="material-symbols-outlined">visibility</span>
                  </button>
                  <button class="queue-action-btn" title="Approve">
                    <span class="material-symbols-outlined">check_circle</span>
                  </button>
                  <button class="queue-action-btn queue-action-btn--reject" title="Reject">
                    <span class="material-symbols-outlined">cancel</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CREATOR REGISTRY — Verification Ledger
    ============================================= -->
    <section ref="registrySection" class="registry section">
      <div class="section-wide">
        <div class="registry-header">
          <p class="overline reveal">Verification Ledger</p>
          <h2 class="registry-title word-reveal"><em>Creator Registry</em></h2>
        </div>

        <div class="registry-grid">
          <article
            v-for="creator in registryCreators"
            :key="creator.name"
            class="registry-card vellum-card reveal"
          >
            <div class="registry-card-top">
              <span class="registry-initials">{{ creator.initials }}</span>
              <div class="registry-card-info">
                <h3 class="registry-name"><em>{{ creator.name }}</em></h3>
                <p class="registry-district">{{ creator.district }}</p>
              </div>
              <span class="seal-base" :class="creator.sealClass">{{ creator.sealLabel }}</span>
            </div>
            <div class="registry-card-meta">
              <div class="registry-stat">
                <span class="registry-stat-value">{{ creator.works }}</span>
                <span class="registry-stat-label">Works</span>
              </div>
              <div class="registry-stat">
                <span class="registry-stat-value">{{ creator.exhibitions }}</span>
                <span class="registry-stat-label">Exhibitions</span>
              </div>
              <div class="registry-stat">
                <span class="registry-stat-value">{{ creator.since }}</span>
                <span class="registry-stat-label">Member Since</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         EXHIBITION PREVIEWS — High-Fidelity Cards
    ============================================= -->
    <section ref="previewsSection" class="previews section section-dark">
      <div class="section-wide">
        <div class="previews-header">
          <p class="overline reveal">Staged Content</p>
          <h2 class="previews-title word-reveal"><em>Exhibition Previews</em></h2>
        </div>

        <div class="previews-grid">
          <article
            v-for="preview in exhibitionPreviews"
            :key="preview.title"
            class="preview-card vellum-card reveal"
          >
            <div class="preview-image-wrap grayscale-hover parallax-container">
              <NuxtImg
                :src="preview.image"
                :alt="preview.title"
                class="preview-image"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
            <div class="preview-body">
              <span class="preview-tag">{{ preview.tag }}</span>
              <h3 class="preview-title"><em>{{ preview.title }}</em></h3>
              <p class="preview-desc">{{ preview.description }}</p>
              <div class="preview-meta">
                <span class="preview-meta-item">
                  <span class="material-symbols-outlined preview-meta-icon">calendar_month</span>
                  {{ preview.date }}
                </span>
                <span class="preview-meta-item">
                  <span class="material-symbols-outlined preview-meta-icon">person</span>
                  {{ preview.curator }}
                </span>
              </div>
              <div class="preview-actions">
                <button class="preview-btn preview-btn--primary">Review</button>
                <button class="preview-btn">Schedule</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ============================================
         AUDIT LOG — Recent Actions
    ============================================= -->
    <section ref="logSection" class="audit-log section">
      <div class="section-default">
        <div class="log-header">
          <p class="overline reveal">Transparency Record</p>
          <h2 class="log-title word-reveal"><em>Audit Trail</em></h2>
        </div>

        <div class="log-entries">
          <div v-for="entry in auditLog" :key="entry.id" class="log-entry reveal">
            <span class="log-time">{{ entry.time }}</span>
            <span class="log-action" :class="`log-action--${entry.type}`">{{ entry.action }}</span>
            <span class="log-detail">{{ entry.detail }}</span>
            <span class="log-actor">{{ entry.actor }}</span>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

useHead({
  title: 'Curator\'s Studio — Meraki Road',
  meta: [
    { name: 'description', content: 'Internal audit workspace for curators to review submissions, verify creators, and manage exhibitions on Meraki Road.' },
    { name: 'robots', content: 'noindex' },
  ],
})

const pageRef = ref<HTMLElement | null>(null)
const heroSection = ref<HTMLElement | null>(null)
const metricsSection = ref<HTMLElement | null>(null)
const queueSection = ref<HTMLElement | null>(null)
const registrySection = ref<HTMLElement | null>(null)
const previewsSection = ref<HTMLElement | null>(null)
const logSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(heroSection)
useWordReveal(heroSection)
useGsapScrollReveal(metricsSection)
useGsapScrollReveal(queueSection)
useWordReveal(queueSection)
useGsapScrollReveal(registrySection)
useWordReveal(registrySection)
useGsapScrollReveal(previewsSection)
useWordReveal(previewsSection)
useGsapScrollReveal(logSection)
useWordReveal(logSection)

// ─── System Metrics ───
const systemMetrics = [
  { label: 'Submissions This Week', value: '34', trend: '+12%', trendClass: 'metric-trend--up' },
  { label: 'Pending Review', value: '9', trend: null, trendClass: '' },
  { label: 'Verified Creators', value: '218', trend: '+3', trendClass: 'metric-trend--up' },
  { label: 'Active Exhibitions', value: '7', trend: null, trendClass: '' },
]

// ─── Review Queue ───
const queueItems = [
  { id: 1, initials: 'AM', name: 'Ava Moreau', district: 'Aether', title: 'Weightless Frequencies', date: 'Mar 21', status: 'new', statusLabel: 'New' },
  { id: 2, initials: 'KT', name: 'Kai Tanaka', district: 'Flux', title: 'Entropy Sketch No. 4', date: 'Mar 20', status: 'review', statusLabel: 'In Review' },
  { id: 3, initials: 'LR', name: 'Lena Rojas', district: 'Haven', title: 'Still Life with Algorithms', date: 'Mar 19', status: 'flagged', statusLabel: 'Flagged' },
  { id: 4, initials: 'DK', name: 'Darian Khoury', district: 'Iron', title: 'Forged Recall', date: 'Mar 18', status: 'new', statusLabel: 'New' },
  { id: 5, initials: 'SP', name: 'Sofia Peralta', district: 'Drift', title: 'The Unfinished Letter', date: 'Mar 17', status: 'review', statusLabel: 'In Review' },
]

// ─── Creator Registry ───
const registryCreators = [
  { initials: 'TY', name: 'Tomoko Yamada', district: 'Aether District', sealClass: 'seal-fellow', sealLabel: 'Fellow', works: 47, exhibitions: 12, since: '2024' },
  { initials: 'MK', name: 'Marcus Keller', district: 'Iron District', sealClass: 'seal-verified', sealLabel: 'Verified', works: 23, exhibitions: 5, since: '2025' },
  { initials: 'EC', name: 'Elena Contreras', district: 'Drift District', sealClass: 'seal-legacy', sealLabel: 'Legacy', works: 89, exhibitions: 31, since: '2023' },
  { initials: 'JW', name: 'James Whitfield', district: 'Flux District', sealClass: 'seal-associate', sealLabel: 'Associate', works: 8, exhibitions: 1, since: '2026' },
  { initials: 'NB', name: 'Noor Bakri', district: 'Haven District', sealClass: 'seal-verified', sealLabel: 'Verified', works: 35, exhibitions: 9, since: '2024' },
  { initials: 'RP', name: 'Rina Park', district: 'Echo District', sealClass: 'seal-fellow', sealLabel: 'Fellow', works: 52, exhibitions: 14, since: '2024' },
]

// ─── Exhibition Previews ───
const exhibitionPreviews = [
  {
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600&h=400&fit=crop',
    tag: 'Solo Exhibition',
    title: 'Threshold States',
    description: 'A meditation on the moments between intention and action. Mixed-media installations that respond to ambient sound.',
    date: 'Apr 2026',
    curator: 'Board Review',

  },
  {
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop',
    tag: 'Group Show',
    title: 'Cartography of the Invisible',
    description: 'Six creators mapping what cannot be seen — memory, grief, the weight of unspoken words.',
    date: 'May 2026',
    curator: 'E. Contreras',
  },
  {
    image: 'https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=600&h=400&fit=crop',
    tag: 'Residency Output',
    title: 'After the Signal',
    description: 'Work produced during the Milan Residency. Digital prints on handmade paper, exploring interference patterns.',
    date: 'Jun 2026',
    curator: 'T. Yamada',
  },
]

// ─── Audit Log ───
const auditLog = [
  { id: 1, time: '14:32', action: 'Approved', type: 'approve', detail: 'Weightless Frequencies — Ava Moreau', actor: 'Curator Board' },
  { id: 2, time: '13:10', action: 'Flagged', type: 'flag', detail: 'Still Life with Algorithms — attribution review', actor: 'M. Keller' },
  { id: 3, time: '11:45', action: 'Verified', type: 'verify', detail: 'Creator credential upgrade: Noor Bakri → Fellow', actor: 'System' },
  { id: 4, time: '09:22', action: 'Scheduled', type: 'schedule', detail: 'Threshold States — exhibition date confirmed', actor: 'E. Contreras' },
  { id: 5, time: '08:01', action: 'Submitted', type: 'submit', detail: 'New work: Forged Recall — Darian Khoury', actor: 'D. Khoury' },
]
</script>

<style scoped>
/* ─── PAGE ─── */
.studio-page {
  background: var(--color-background);
}

/* ─── HERO ─── */
.studio-hero {
  padding: clamp(8rem, 16vw, 14rem) 0 var(--space-24);
  text-align: center;
}

.hero-title {
  font-family: var(--font-display);
  font-size: var(--text-display);
  font-weight: var(--weight-light);
  line-height: var(--leading-display);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
  margin-bottom: var(--space-8);
}

.hero-title em {
  font-style: italic;
}

.hero-subtitle {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 48ch;
  margin: 0 auto;
}

/* ─── OVERLINE ─── */
.overline-badge {
  display: inline-block;
  padding: 2px 10px;
  border: 1px solid rgba(184, 150, 78, 0.3);
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-6);
}

.overline {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}

/* ─── SECTIONS ─── */
.section {
  padding: var(--section-gap) 0;
}

.section-dark {
  background: var(--color-dark-bg);
  color: var(--color-dark-text);
}

.section-wide {
  max-width: var(--width-wide);
  margin: 0 auto;
  padding: 0 var(--content-padding);
}

.section-default {
  max-width: var(--width-default);
  margin: 0 auto;
  padding: 0 var(--content-padding);
}

/* ─── METRICS BAR ─── */
.metrics {
  padding: var(--space-16) 0;
}

.metrics-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
}

.metric-card {
  padding: var(--space-6) var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  position: relative;
}

.metric-value {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-light);
  color: var(--color-ink);
  letter-spacing: var(--tracking-tight);
}

.metric-label {
  font-family: var(--font-body);
  font-size: var(--text-caption);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

.metric-trend {
  position: absolute;
  top: var(--space-4);
  right: var(--space-6);
  font-family: var(--font-mono);
  font-size: var(--text-caption);
}

.metric-trend--up {
  color: var(--color-success);
}

.metric-trend--down {
  color: var(--color-error);
}

/* ─── QUEUE TABLE ─── */
.queue-header,
.registry-header,
.previews-header,
.log-header {
  margin-bottom: var(--space-12);
}

.queue-title,
.registry-title,
.previews-title,
.log-title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-light);
  letter-spacing: var(--tracking-tight);
}

.queue-title em,
.registry-title em,
.previews-title em,
.log-title em {
  font-style: italic;
}

.queue-table-wrap {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.queue-table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-body);
  font-size: var(--text-small);
}

.queue-table th {
  text-align: left;
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  border-bottom: 1px solid rgba(184, 150, 78, 0.15);
}

.queue-table td {
  padding: var(--space-4);
  border-bottom: 1px solid rgba(250, 250, 249, 0.06);
  color: var(--color-dark-secondary);
  vertical-align: middle;
}

.queue-row {
  transition: background var(--duration-fast) ease;
}

.queue-row:hover {
  background: rgba(250, 250, 249, 0.03);
}

.queue-creator {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-weight: 500;
  color: var(--color-dark-text);
  white-space: nowrap;
}

.queue-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(184, 150, 78, 0.12);
  color: var(--color-gold);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  flex-shrink: 0;
}

.queue-district {
  color: var(--color-dark-muted);
}

.queue-work em {
  font-family: var(--font-display);
  font-style: italic;
  color: var(--color-dark-text);
}

.queue-date {
  color: var(--color-dark-muted);
  font-family: var(--font-mono);
  font-size: var(--text-caption);
}

.queue-status {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.queue-status--new {
  background: rgba(184, 150, 78, 0.12);
  color: var(--color-gold);
}

.queue-status--review {
  background: rgba(22, 163, 74, 0.12);
  color: var(--color-success);
}

.queue-status--flagged {
  background: rgba(220, 38, 38, 0.12);
  color: var(--color-error);
}

.queue-actions {
  display: flex;
  gap: var(--space-2);
}

.queue-action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-dark-muted);
  transition: color var(--duration-fast) ease;
}

.queue-action-btn:hover {
  color: var(--color-gold);
}

.queue-action-btn--reject:hover {
  color: var(--color-error);
}

.queue-action-btn .material-symbols-outlined {
  font-size: 1.125rem;
}

/* ─── CREATOR REGISTRY GRID ─── */
.registry-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.registry-card {
  padding: var(--space-6);
}

.registry-card-top {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.registry-initials {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(184, 150, 78, 0.1);
  color: var(--color-gold);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.05em;
  flex-shrink: 0;
}

.registry-card-info {
  flex: 1;
  min-width: 0;
}

.registry-name {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: var(--weight-regular);
  color: var(--color-ink);
  letter-spacing: var(--tracking-snug);
}

.registry-name em {
  font-style: italic;
}

.registry-district {
  font-family: var(--font-body);
  font-size: var(--text-caption);
  color: var(--color-text-muted);
  margin-top: 2px;
}

.registry-card-meta {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-border);
}

.registry-stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.registry-stat-value {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-light);
  color: var(--color-ink);
}

.registry-stat-label {
  font-family: var(--font-body);
  font-size: 10px;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

/* ─── EXHIBITION PREVIEWS ─── */
.previews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.preview-card {
  overflow: hidden;
}

.preview-image-wrap {
  position: relative;
  aspect-ratio: 3 / 2;
  overflow: hidden;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.preview-body {
  padding: var(--space-6);
}

.preview-tag {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-3);
}

.preview-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-light);
  color: var(--color-dark-text);
  letter-spacing: var(--tracking-snug);
  margin-bottom: var(--space-3);
}

.preview-title em {
  font-style: italic;
}

.preview-desc {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
  margin-bottom: var(--space-6);
}

.preview-meta {
  display: flex;
  gap: var(--space-6);
  margin-bottom: var(--space-6);
}

.preview-meta-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
}

.preview-meta-icon {
  font-size: 14px;
  color: var(--color-gold);
}

.preview-actions {
  display: flex;
  gap: var(--space-3);
}

.preview-btn {
  padding: var(--space-2) var(--space-6);
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  border: 1px solid rgba(184, 150, 78, 0.3);
  color: var(--color-dark-muted);
  background: transparent;
  transition: color var(--duration-fast) ease, border-color var(--duration-fast) ease;
}

.preview-btn:hover {
  color: var(--color-gold);
  border-color: var(--color-gold);
}

.preview-btn--primary {
  background: rgba(184, 150, 78, 0.1);
  color: var(--color-gold);
  border-color: rgba(184, 150, 78, 0.4);
}

.preview-btn--primary:hover {
  background: rgba(184, 150, 78, 0.2);
}

/* ─── AUDIT LOG ─── */
.audit-log {
  padding: var(--space-24) 0 var(--section-gap);
}

.log-entries {
  display: flex;
  flex-direction: column;
}

.log-entry {
  display: grid;
  grid-template-columns: 60px 90px 1fr 120px;
  gap: var(--space-4);
  padding: var(--space-4) 0;
  border-bottom: 1px solid var(--color-border);
  font-family: var(--font-body);
  font-size: var(--text-small);
  align-items: center;
}

.log-time {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-text-muted);
}

.log-action {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 2px;
  text-align: center;
}

.log-action--approve {
  background: rgba(22, 163, 74, 0.1);
  color: var(--color-success);
}

.log-action--flag {
  background: rgba(220, 38, 38, 0.1);
  color: var(--color-error);
}

.log-action--verify {
  background: rgba(184, 150, 78, 0.12);
  color: var(--color-gold);
}

.log-action--schedule {
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
}

.log-action--submit {
  background: rgba(250, 250, 249, 0.06);
  color: var(--color-text-muted);
}

.log-detail {
  color: var(--color-text-secondary);
}

.log-actor {
  font-size: var(--text-caption);
  color: var(--color-text-muted);
  text-align: right;
}

/* ─── RESPONSIVE ─── */
@media (max-width: 1024px) {
  .metrics-bar {
    grid-template-columns: repeat(2, 1fr);
  }

  .registry-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .previews-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .log-entry {
    grid-template-columns: 50px 80px 1fr;
  }

  .log-actor {
    display: none;
  }
}

@media (max-width: 768px) {
  .metrics-bar {
    grid-template-columns: 1fr;
  }

  .registry-grid {
    grid-template-columns: 1fr;
  }

  .previews-grid {
    grid-template-columns: 1fr;
  }

  .queue-table {
    font-size: var(--text-caption);
  }

  .queue-actions {
    flex-direction: column;
  }

  .log-entry {
    grid-template-columns: 1fr;
    gap: var(--space-2);
  }

  .log-time {
    display: none;
  }
}
</style>
