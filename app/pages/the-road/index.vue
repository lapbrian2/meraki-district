<template>
  <div class="road-page">

    <!-- ============================================
         HERO — District 02 Publishing
    ============================================= -->
    <section ref="heroSection" class="road-hero section section-dark">
      <div class="section-narrow road-hero-inner">
        <span class="stamped-overline reveal">District 02 &mdash; Publishing &amp; Editorial</span>
        <h1 class="road-hero-title word-reveal">
          <em>Meraki Publishing House</em>
        </h1>
        <p class="road-hero-sub reveal">
          Long-form monographs and archival essays from practitioners who think
          through making. Not hot takes&mdash;considered writing shaped by years at
          the bench, the press, and the screen.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         EDITORIAL BOARD — Curator profile strip
    ============================================= -->
    <section ref="boardSection" class="editorial-board section">
      <div class="section-default">
        <div class="board-strip">
          <div class="board-member reveal" v-for="editor in editors" :key="editor.name">
            <div class="board-avatar">
              <span class="material-symbols-outlined board-avatar-icon">{{ editor.icon }}</span>
            </div>
            <div class="board-info">
              <span class="board-name">{{ editor.name }}</span>
              <span class="board-role">{{ editor.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         FEATURED MONOGRAPH — Large editorial card
    ============================================= -->
    <section ref="featuredSection" class="road-featured section section-dark">
      <div class="section-wide">
        <article class="featured-card reveal">
          <div class="featured-image-wrap">
            <div class="featured-image archival-image mask-reveal" />
          </div>
          <div class="featured-content">
            <p class="overline reveal">Featured Monograph</p>
            <h2 class="featured-title word-reveal">
              <em>The Architecture of Silence</em>
            </h2>
            <p class="featured-author reveal">By Sable Chen</p>
            <p class="featured-excerpt reveal">
              A meditation on negative space in contemporary printmaking&mdash;how the
              unmarked surface carries as much intention as the mark itself. Chen traces
              the lineage from Zen calligraphy through Rauschenberg&rsquo;s white paintings
              to the algorithmic voids of generative art, arguing that silence is not
              absence but architecture.
            </p>
            <div class="featured-annotations reveal">
              <div class="annotation">
                <span class="annotation-label">Technical Depth</span>
                <span class="annotation-value">Advanced</span>
              </div>
              <div class="annotation">
                <span class="annotation-label">Visual Resonance</span>
                <span class="annotation-value">High</span>
              </div>
              <div class="annotation">
                <span class="annotation-label">Read Time</span>
                <span class="annotation-value">42 min</span>
              </div>
            </div>
            <NuxtLink to="#" class="featured-cta reveal">
              Read the Monograph &rarr;
            </NuxtLink>
          </div>
        </article>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         RECENT ESSAYS — 3-column grid
    ============================================= -->
    <section ref="essaysSection" class="road-essays section section-dark">
      <div class="section-wide">
        <div class="essays-header">
          <div class="essays-header-left">
            <p class="overline reveal">Recent</p>
            <h2 class="essays-heading word-reveal"><em>Essays</em></h2>
          </div>
        </div>

        <div class="essays-grid">
          <article
            v-for="essay in essays"
            :key="essay.title"
            class="essay-card vellum-card reveal"
          >
            <div class="essay-image-wrap">
              <div class="essay-image archival-image mask-reveal" />
            </div>
            <div class="essay-body">
              <span class="essay-category">{{ essay.category }}</span>
              <h3 class="essay-title"><em>{{ essay.title }}</em></h3>
              <p class="essay-excerpt">{{ essay.excerpt }}</p>
              <div class="essay-meta">
                <span>{{ essay.date }}</span>
                <span class="essay-meta-dot">&middot;</span>
                <span>{{ essay.readTime }} min read</span>
              </div>
              <NuxtLink to="#" class="essay-link">
                Continue Reading &rarr;
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         VISUAL INTERLUDE — Full-width image triptych
    ============================================= -->
    <section ref="interludeSection" class="visual-interlude section section-dark">
      <div class="section-wide">
        <div class="interlude-header">
          <p class="overline reveal">Visual Studies</p>
          <h2 class="interlude-title word-reveal"><em>From the Archive</em></h2>
        </div>
        <div class="interlude-grid">
          <div v-for="image in interludeImages" :key="image.caption" class="interlude-item reveal">
            <div class="interlude-image archival-image mask-reveal" />
            <span class="interlude-caption">{{ image.caption }}</span>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         THE ARCHIVE — Numbered index
    ============================================= -->
    <section ref="archiveSection" class="road-archive section section-dark">
      <div class="section-default">
        <div class="archive-header">
          <p class="overline reveal">Index</p>
          <h2 class="archive-heading word-reveal"><em>The Archive</em></h2>
        </div>

        <ol class="archive-list">
          <li
            v-for="(entry, index) in archiveEntries"
            :key="entry.title"
            class="archive-entry reveal"
          >
            <span class="archive-number">{{ String(index + 1).padStart(2, '0') }}</span>
            <div class="archive-entry-body">
              <h3 class="archive-entry-title">{{ entry.title }}</h3>
              <span class="archive-entry-author">{{ entry.author }}</span>
              <span class="archive-entry-date">{{ entry.date }}</span>
            </div>
            <span class="archive-entry-tag">{{ entry.category }}</span>
            <span class="archive-arrow">&rarr;</span>
          </li>
        </ol>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         SUBMISSION GUIDELINES — How to contribute
    ============================================= -->
    <section ref="guidelinesSection" class="submission-guidelines section section-dark">
      <div class="section-default">
        <div class="guidelines-grid">
          <div class="guidelines-content">
            <p class="overline reveal">For Contributors</p>
            <h2 class="guidelines-title word-reveal"><em>Submission Guidelines</em></h2>
            <p class="guidelines-text reveal">
              Meraki Publishing House accepts unsolicited manuscripts on a rolling basis.
              We prioritize writing that emerges from sustained practice &mdash; work born
              at the bench, the press, or the terminal, not the lecture hall.
            </p>
            <ul class="guidelines-list reveal">
              <li>Essays: 2,000 &ndash; 8,000 words. Original, unpublished work only.</li>
              <li>Monographs: 15,000 &ndash; 40,000 words. Proposal required before full submission.</li>
              <li>Visual essays: Image-led narratives with 500+ word contextual framework.</li>
              <li>All submissions reviewed by the Editorial Board within 30 days.</li>
            </ul>
          </div>
          <div class="guidelines-card vellum-card reveal">
            <span class="material-symbols-outlined guidelines-card-icon">description</span>
            <h3 class="guidelines-card-title"><em>Ready to submit?</em></h3>
            <p class="guidelines-card-desc">
              Send your manuscript or proposal to the Editorial Board.
              Include a brief practitioner statement and relevant portfolio links.
            </p>
            <NuxtLink to="/apply" class="guidelines-card-cta">
              Submit a Manuscript &rarr;
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         SUBMISSION CTA
    ============================================= -->
    <section ref="ctaSection" class="road-cta section-dark">
      <div class="section-narrow cta-inner">
        <p class="cta-text reveal">
          Meraki Publishing House is open to practitioners who write as they build.
        </p>
        <NuxtLink to="/apply" class="cta-button reveal">
          Submit an Essay
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

/* -- SEO ---------------------------------------- */
useHead({
  title: 'Meraki Publishing House — Meraki Road',
  meta: [
    { name: 'description', content: 'District 02 — Long-form monographs and archival essays from practitioners who think through making.' },
  ],
})

useSeoMeta({
  ogTitle: 'Meraki Publishing House — Meraki Road',
  ogDescription: 'Long-form monographs and archival essays from practitioners who think through making.',
  twitterTitle: 'Meraki Publishing House — Meraki Road',
  twitterDescription: 'Long-form monographs and archival essays from practitioners who think through making.',
})

/* -- Scroll Reveals ----------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

const boardSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(boardSection, '.reveal', { stagger: 0.08 })

const featuredSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(featuredSection, '.reveal', { stagger: 0.08 })
useWordReveal(featuredSection, '.word-reveal')

const essaysSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(essaysSection, '.reveal', { stagger: 0.12 })
useWordReveal(essaysSection, '.word-reveal')

const interludeSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(interludeSection, '.reveal', { stagger: 0.15 })
useWordReveal(interludeSection, '.word-reveal')

const archiveSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(archiveSection, '.reveal', { stagger: 0.06 })
useWordReveal(archiveSection, '.word-reveal')

const guidelinesSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(guidelinesSection, '.reveal', { stagger: 0.08 })
useWordReveal(guidelinesSection, '.word-reveal')

const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal')

/* -- Data --------------------------------------- */
interface Editor {
  name: string
  role: string
  icon: string
}

const editors: Editor[] = [
  { name: 'Sable Chen', role: 'Editor-in-Chief', icon: 'edit_note' },
  { name: 'Lior Avital', role: 'Visual Arts Editor', icon: 'palette' },
  { name: 'Tomoko Iida', role: 'Practice & Theory', icon: 'psychology' },
  { name: 'Marcus Okafor', role: 'Contributing Editor', icon: 'history_edu' },
]

interface Essay {
  title: string
  category: string
  excerpt: string
  date: string
  readTime: number
}

const essays: Essay[] = [
  {
    title: 'On the Ethics of Curation',
    category: 'Visual Arts',
    excerpt: 'Who decides what gets shown, and what that decision costs the work that doesn\'t?',
    date: 'Mar 2026',
    readTime: 12,
  },
  {
    title: 'Craft as Resistance',
    category: 'Practice',
    excerpt: 'In a landscape of infinite reproduction, the handmade becomes a political act.',
    date: 'Feb 2026',
    readTime: 8,
  },
  {
    title: 'The Weight of the Unsigned',
    category: 'Theory',
    excerpt: 'Anonymity in creative work: liberation or erasure? A meditation on the unsigned mark.',
    date: 'Jan 2026',
    readTime: 15,
  },
]

interface InterludeImage {
  caption: string
}

const interludeImages: InterludeImage[] = [
  { caption: 'Monotype press, inked and ready. Studio of Elias Thorne, 2025.' },
  { caption: 'Archival cotton rag, hand-torn. The material speaks before the maker.' },
  { caption: 'Proof state, third pull. The image arrives through negotiation.' },
]

interface ArchiveEntry {
  title: string
  author: string
  date: string
  category: string
}

const archiveEntries: ArchiveEntry[] = [
  { title: 'The Architecture of Silence', author: 'Sable Chen', date: 'Mar 2026', category: 'Monograph' },
  { title: 'On the Ethics of Curation', author: 'Lior Avital', date: 'Mar 2026', category: 'Visual Arts' },
  { title: 'Craft as Resistance', author: 'Tomoko Iida', date: 'Feb 2026', category: 'Practice' },
  { title: 'The Weight of the Unsigned', author: 'Marcus Okafor', date: 'Jan 2026', category: 'Theory' },
  { title: 'Palimpsest as Method', author: 'Rune Elstad', date: 'Dec 2025', category: 'Process' },
  { title: 'Against Legibility', author: 'Vera Morozova', date: 'Nov 2025', category: 'Criticism' },
]
</script>

<style scoped>
/* =============================================
   HERO — Centered publishing intro
   ============================================= */
.road-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-16);
  text-align: center;
}

.road-hero-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.road-hero .stamped-overline {
  color: var(--color-gold);
  margin-bottom: var(--space-6);
}

.road-hero-title {
  font-size: var(--text-display);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
  margin-bottom: var(--space-6);
}

.road-hero-title em { font-style: italic; }

.road-hero-sub {
  font-size: var(--text-body);
  font-weight: 400;
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 52ch;
}

@media (max-width: 768px) {
  .road-hero { padding-top: calc(var(--space-16) + 3rem); padding-bottom: var(--space-12); }
}

/* =============================================
   EDITORIAL BOARD — Curator profile strip
   ============================================= */
.editorial-board {
  padding: var(--space-8) var(--content-padding);
  background: var(--color-background);
}

.board-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

.board-member {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
  border: 1px solid var(--color-border);
  transition: border-color var(--duration-normal) ease;
}

.board-member:hover { border-color: var(--color-gold); }

.board-avatar {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--color-surface);
  flex-shrink: 0;
}

.board-avatar-icon {
  font-size: 20px;
  color: var(--color-text-muted);
}

.board-info { display: flex; flex-direction: column; gap: 2px; }

.board-name {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: 600;
  color: var(--color-ink);
}

.board-role {
  font-size: var(--text-caption);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
}

@media (max-width: 900px) { .board-strip { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .board-strip { grid-template-columns: 1fr; } }

/* =============================================
   FEATURED MONOGRAPH
   ============================================= */
.featured-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
}

.featured-image-wrap { position: relative; overflow: hidden; }

.featured-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-dark-bg) 40%, var(--color-surface) 100%);
  display: block;
}

.featured-content { max-width: 58ch; }

.featured-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-3);
  text-shadow: 0 0 18px rgba(184, 150, 78, 0.15), 0 0 40px rgba(9, 9, 11, 0.6);
}

.featured-title em { font-style: italic; }

.featured-author {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  margin-bottom: var(--space-6);
}

.featured-excerpt {
  font-size: var(--text-body);
  font-weight: 400;
  color: var(--color-dark-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.featured-annotations {
  display: flex;
  gap: var(--space-8);
  margin-bottom: var(--space-8);
  padding: var(--space-4) 0;
  border-top: 1px solid rgba(250, 250, 249, 0.08);
  border-bottom: 1px solid rgba(250, 250, 249, 0.08);
}

.annotation {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.annotation-label {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
}

.annotation-value {
  font-size: var(--text-small);
  color: var(--color-dark-secondary);
}

.featured-cta {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-ink);
  padding: var(--space-4) var(--space-8);
  background: var(--color-gold);
  background-image: none;
  transition: opacity var(--duration-normal) ease, transform var(--duration-normal) ease;
}

.featured-cta:hover { opacity: 0.9; transform: translateY(-1px); }
.featured-cta:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 4px; }

@media (max-width: 768px) {
  .featured-title { font-size: var(--text-h2); }
  .featured-annotations { flex-direction: column; gap: var(--space-4); }
}

/* =============================================
   RECENT ESSAYS — 3-column grid
   ============================================= */
.essays-header { margin-bottom: var(--space-12); }

.essays-heading {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  color: var(--color-dark-text);
  margin-top: var(--space-3);
}

.essays-heading em { font-style: italic; }

.essays-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.essay-card { display: flex; flex-direction: column; overflow: hidden; }

.essay-image-wrap { position: relative; overflow: hidden; }

.essay-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-dark-bg) 40%, var(--color-surface) 100%);
  display: block;
}

.essay-body {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.essay-category {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-3);
}

.essay-title {
  font-size: var(--text-h3);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-snug);
  color: var(--color-dark-text);
  margin-bottom: var(--space-3);
}

.essay-title em { font-style: italic; }

.essay-excerpt {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
  margin-bottom: var(--space-3);
  font-style: italic;
}

.essay-meta {
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: auto;
  padding-bottom: var(--space-6);
}

.essay-meta-dot { opacity: 0.4; }

.essay-link {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  color: var(--color-gold);
  background-image: none;
  transition: opacity var(--duration-normal) ease;
}

.essay-link:hover { opacity: 0.7; }

@media (min-width: 601px) and (max-width: 1024px) {
  .essays-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .essays-grid { grid-template-columns: 1fr; gap: var(--space-12); }
}

/* =============================================
   VISUAL INTERLUDE — Full-width image triptych
   ============================================= */
.visual-interlude {
  padding: var(--space-16) var(--content-padding);
}

.interlude-header {
  margin-bottom: var(--space-12);
}

.interlude-title {
  font-size: var(--text-h2);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-3);
  line-height: var(--leading-tight);
}

.interlude-title em { font-style: italic; }

.interlude-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.interlude-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.interlude-image {
  width: 100%;
  aspect-ratio: 4 / 5;
  background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-dark-bg) 40%, var(--color-surface) 100%);
  display: block;
}

.interlude-caption {
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  font-style: italic;
  line-height: var(--leading-normal);
}

@media (max-width: 768px) {
  .interlude-grid { grid-template-columns: 1fr; gap: var(--space-12); }
}

/* =============================================
   THE ARCHIVE — Bordered numbered index
   ============================================= */
.archive-header { margin-bottom: var(--space-12); }

.archive-heading {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  color: var(--color-dark-text);
  margin-top: var(--space-3);
}

.archive-heading em { font-style: italic; }

.archive-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid rgba(250, 250, 249, 0.08);
}

.archive-entry {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  padding: var(--space-6) 0;
  border-bottom: 1px solid rgba(250, 250, 249, 0.08);
  cursor: pointer;
  transition: background-color var(--duration-normal) ease;
}

.archive-entry:hover { background-color: rgba(184, 150, 78, 0.03); }

.archive-number {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  min-width: 2.5rem;
  flex-shrink: 0;
}

.archive-entry-body {
  flex: 1;
  display: flex;
  align-items: baseline;
  gap: var(--space-4);
  flex-wrap: wrap;
  min-width: 0;
}

.archive-entry-title {
  font-size: var(--text-body);
  font-family: var(--font-display);
  font-weight: 400;
  color: var(--color-dark-text);
  transition: color var(--duration-normal) ease;
}

.archive-entry:hover .archive-entry-title { color: var(--color-gold); }

.archive-entry-author {
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
}

.archive-entry-date {
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  margin-left: auto;
  flex-shrink: 0;
}

.archive-entry-tag {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  border: 1px solid rgba(184, 150, 78, 0.25);
  padding: 2px 8px;
  flex-shrink: 0;
}

.archive-arrow {
  font-size: var(--text-body);
  color: var(--color-gold);
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity var(--duration-normal) ease, transform var(--duration-normal) ease;
  flex-shrink: 0;
}

.archive-entry:hover .archive-arrow { opacity: 1; transform: translateX(0); }

@media (max-width: 768px) {
  .archive-entry { flex-wrap: wrap; gap: var(--space-3); padding: var(--space-5) 0; }
  .archive-entry-body { flex-direction: column; gap: var(--space-1); }
  .archive-entry-date { margin-left: 0; }
  .archive-arrow { display: none; }
}

/* =============================================
   SUBMISSION GUIDELINES — How to contribute
   ============================================= */
.submission-guidelines {
  padding: var(--space-24) var(--content-padding);
}

.guidelines-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: var(--space-12);
  align-items: start;
}

.guidelines-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-3);
  margin-bottom: var(--space-6);
  line-height: var(--leading-tight);
}

.guidelines-title em { font-style: italic; }

.guidelines-text {
  font-size: var(--text-body);
  color: var(--color-dark-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.guidelines-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.guidelines-list li {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  padding-left: var(--space-5);
  border-left: 1px solid rgba(184, 150, 78, 0.3);
  line-height: var(--leading-normal);
}

.guidelines-card {
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.guidelines-card-icon {
  font-size: 2.5rem;
  color: var(--color-gold);
  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48;
  margin-bottom: var(--space-5);
}

.guidelines-card-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
  line-height: var(--leading-snug);
}

.guidelines-card-title em { font-style: italic; }

.guidelines-card-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
  margin-bottom: var(--space-6);
}

.guidelines-card-cta {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-ink);
  padding: var(--space-4) var(--space-8);
  background: var(--color-gold);
  background-image: none;
  transition: opacity var(--duration-normal) ease, transform var(--duration-normal) ease;
}

.guidelines-card-cta:hover { opacity: 0.9; transform: translateY(-1px); }
.guidelines-card-cta:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 4px; }

@media (max-width: 768px) {
  .guidelines-grid { grid-template-columns: 1fr; }
}

/* =============================================
   MASK REVEAL
   ============================================= */
.mask-reveal {
  filter: grayscale(100%);
  transition: filter 0.7s ease, transform 0.7s ease;
}

.mask-reveal:hover { filter: grayscale(0); transform: scale(1.02); }

/* =============================================
   SUBMISSION CTA
   ============================================= */
.road-cta {
  padding: var(--space-32) var(--content-padding);
  text-align: center;
}

.road-cta .cta-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-text {
  font-size: var(--text-h3);
  font-family: var(--font-display);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-snug);
  color: var(--color-dark-secondary);
  max-width: 40ch;
  margin-bottom: var(--space-12);
}

.cta-button {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-ink);
  padding: var(--space-4) var(--space-8);
  background: var(--color-gold);
  background-image: none;
  transition: opacity var(--duration-normal) ease, transform var(--duration-normal) ease;
}

.cta-button:hover { opacity: 0.9; transform: translateY(-1px); }
.cta-button:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 4px; }

@media (max-width: 768px) {
  .road-cta { padding: var(--space-16) var(--content-padding); }
}

/* =============================================
   SHARED
   ============================================= */
.overline {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
}
</style>
