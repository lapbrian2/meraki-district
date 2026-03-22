<template>
  <div class="collective-page">

    <!-- ============================================
         HERO — Dark, left-aligned
    ============================================= -->
    <section ref="heroSection" class="collective-hero section section-dark">
      <div class="section-wide">
        <p class="overline reveal">District 10 &mdash; The Collective</p>
        <h1 class="collective-hero-title word-reveal">
          The Fellowship Lounge
        </h1>
        <p class="collective-hero-sub reveal">
          Where seated practitioners shape the direction of the road.
        </p>
        <div class="hero-pillars reveal">
          <span class="pillar-label">Stewardship</span>
          <span class="pillar-dot" aria-hidden="true">&middot;</span>
          <span class="pillar-label">Mastery</span>
          <span class="pillar-dot" aria-hidden="true">&middot;</span>
          <span class="pillar-label">Heritage</span>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         FELLOWS DIRECTORY — Vertical profile entries
    ============================================= -->
    <section ref="fellowsSection" class="collective-fellows section">
      <div class="section-wide">
        <div class="fellows-header">
          <h2 class="fellows-title word-reveal"><em>Seated Fellows</em></h2>
          <span class="fellows-count reveal">{{ fellows.length }} active</span>
        </div>
        <div class="fellows-rule" aria-hidden="true" />

        <div class="fellows-list">
          <article
            v-for="fellow in fellows"
            :key="fellow.name"
            class="fellow-entry reveal"
          >
            <div class="fellow-avatar-col">
              <div class="fellow-avatar" :style="{ background: fellow.gradient }" />
              <span class="seal-base seal-fellow">Fellow</span>
            </div>
            <div class="fellow-details">
              <h3 class="fellow-name"><em>{{ fellow.name }}</em></h3>
              <p class="fellow-specialty">{{ fellow.specialty }}</p>
              <p v-if="fellow.focus" class="fellow-focus">{{ fellow.focus }}</p>
            </div>
            <div class="fellow-meta">
              <span class="fellow-since">Since {{ fellow.since }}</span>
              <NuxtLink to="#" class="fellow-monograph-link">View Monograph &rarr;</NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         ARCHIVE VAULT — Numbered entries
    ============================================= -->
    <section ref="archiveSection" class="collective-archive section section-dark">
      <div class="section-default">
        <div class="archive-header">
          <p class="overline reveal">The Archive</p>
          <h2 class="archive-title word-reveal"><em>The Archive Vault</em></h2>
          <p class="archive-intro reveal">
            Founding documents, position papers, and the written record
            of how this collective governs itself.
          </p>
        </div>

        <div class="archive-list">
          <div
            v-for="entry in archiveEntries"
            :key="entry.number"
            class="archive-entry reveal"
          >
            <span class="archive-number">{{ entry.number }}</span>
            <div class="archive-body">
              <h3 class="archive-entry-title"><em>{{ entry.title }}</em></h3>
              <p class="archive-desc">{{ entry.description }}</p>
              <div class="archive-entry-meta">
                <span class="archive-author">{{ entry.author }}</span>
                <span class="archive-date">{{ entry.date }}</span>
              </div>
              <a href="#" class="archive-link">Access Fragment &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         ARCHIVAL SOLUTIONS — Two-column governance quotes
    ============================================= -->
    <section ref="solutionsSection" class="collective-solutions section">
      <div class="section-default">
        <div class="solutions-header">
          <p class="overline reveal">Archival Solutions</p>
          <h2 class="solutions-title word-reveal"><em>Positions & Precedent</em></h2>
        </div>

        <div class="solutions-grid">
          <article
            v-for="solution in archivalSolutions"
            :key="solution.title"
            class="solution-card vellum-card reveal"
          >
            <span class="material-symbols-outlined solution-icon">{{ solution.icon }}</span>
            <h3 class="solution-card-title"><em>{{ solution.title }}</em></h3>
            <blockquote class="solution-quote">
              <p>&ldquo;{{ solution.quote }}&rdquo;</p>
              <cite class="solution-cite">&mdash; {{ solution.author }}</cite>
            </blockquote>
            <span class="solution-status" :class="solution.statusClass">
              {{ solution.status }}
            </span>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CURRENT MANDATES — Governance actions
    ============================================= -->
    <section ref="mandatesSection" class="collective-mandates section section-dark">
      <div class="section-default">
        <div class="mandates-header">
          <p class="overline reveal">Active Directives</p>
          <h2 class="mandates-title word-reveal"><em>Current Mandates</em></h2>
        </div>
        <div class="mandates-rule" aria-hidden="true" />

        <div class="mandates-grid">
          <article
            v-for="mandate in mandates"
            :key="mandate.number"
            class="mandate-card vellum-card reveal"
          >
            <span class="mandate-number">{{ mandate.number }}</span>
            <h3 class="mandate-name"><em>{{ mandate.title }}</em></h3>
            <p class="mandate-desc">{{ mandate.description }}</p>
            <div class="mandate-footer">
              <span class="mandate-sponsor">Sponsored by {{ mandate.sponsor }}</span>
              <span class="mandate-vote-status stamped-overline">{{ mandate.voteStatus }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         THE DISCOURSE — Dated discussion threads
    ============================================= -->
    <section ref="discourseSection" class="collective-discourse section">
      <div class="section-default">
        <div class="discourse-header">
          <p class="overline reveal">Open Threads</p>
          <h2 class="discourse-title word-reveal"><em>The Discourse</em></h2>
        </div>

        <div class="discourse-list">
          <article
            v-for="thread in discourseThreads"
            :key="thread.title"
            class="discourse-entry reveal"
          >
            <div class="discourse-meta">
              <time class="discourse-date">{{ thread.date }}</time>
              <span class="material-symbols-outlined discourse-icon">{{ thread.icon }}</span>
              <span class="discourse-tag">{{ thread.tag }}</span>
            </div>
            <h3 class="discourse-entry-title"><em>{{ thread.title }}</em></h3>
            <p class="discourse-excerpt">{{ thread.excerpt }}</p>
            <div class="discourse-footer">
              <span class="discourse-replies">{{ thread.replies }} replies</span>
              <a href="#" class="discourse-link">Continue Reading &rarr;</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — Centered
    ============================================= -->
    <section ref="ctaSection" class="collective-cta section-dark">
      <div class="section-narrow cta-inner">
        <div class="cta-rule" aria-hidden="true" />
        <p class="overline reveal">Invitation</p>
        <h2 class="cta-title word-reveal">
          The council for those shaping what comes next.
        </h2>
        <NuxtLink to="/apply" class="cta-button reveal">View Fellowship Requirements &rarr;</NuxtLink>
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
  title: 'The Collective — Meraki Road',
  meta: [
    { name: 'description', content: 'The Fellowship Lounge: where seated practitioners shape the direction of Meraki Road. Archives, mandates, and discourse.' },
  ],
})

useSeoMeta({
  ogTitle: 'The Collective — Meraki Road',
  ogDescription: 'The Fellowship Lounge: where seated practitioners shape the direction of Meraki Road.',
  twitterTitle: 'The Collective — Meraki Road',
  twitterDescription: 'The Fellowship Lounge: where seated practitioners shape the direction of Meraki Road.',
})

/* -- Hero --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Fellows ------------------------------------ */
const fellowsSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(fellowsSection, '.reveal', { stagger: 0.08 })
useWordReveal(fellowsSection, '.word-reveal')

/* -- Archive ------------------------------------ */
const archiveSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(archiveSection, '.reveal', { stagger: 0.1 })
useWordReveal(archiveSection, '.word-reveal')

/* -- Solutions ---------------------------------- */
const solutionsSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(solutionsSection, '.reveal', { stagger: 0.12 })
useWordReveal(solutionsSection, '.word-reveal')

/* -- Mandates ----------------------------------- */
const mandatesSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(mandatesSection, '.reveal', { stagger: 0.1 })
useWordReveal(mandatesSection, '.word-reveal')

/* -- Discourse ---------------------------------- */
const discourseSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(discourseSection, '.reveal', { stagger: 0.1 })
useWordReveal(discourseSection, '.word-reveal')

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
    /* Fellows rule draw-in */
    const fellowsRule = fellowsSection.value?.querySelector('.fellows-rule')
    if (fellowsRule) {
      gsap.from(fellowsRule, {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: fellowsRule,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }

    /* Mandates rule draw-in */
    const mandatesRule = mandatesSection.value?.querySelector('.mandates-rule')
    if (mandatesRule) {
      gsap.from(mandatesRule, {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: mandatesRule,
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
const fellows = [
  {
    name: 'Renata Vasquez',
    specialty: 'Generative Systems & Emergent Form',
    focus: 'Currently leading the AI Attribution Framework review.',
    gradient: 'linear-gradient(135deg, #27272A 0%, #3F3F46 50%, #18181B 100%)',
    since: '2024',
  },
  {
    name: 'Idris Kone',
    specialty: 'Spatial Narrative & Environmental Design',
    focus: 'Advising on the Architecture & Space district founding charter.',
    gradient: 'linear-gradient(135deg, #18181B 0%, #27272A 50%, #09090B 100%)',
    since: '2024',
  },
  {
    name: 'Margaux Delacroix',
    specialty: 'Typographic Sculpture & Print Heritage',
    focus: 'Archive curator for the Publishing district permanent collection.',
    gradient: 'linear-gradient(135deg, #3F3F46 0%, #27272A 50%, #18181B 100%)',
    since: '2023',
  },
  {
    name: 'Soren Lindqvist',
    specialty: 'Algorithmic Composition & Sound Design',
    focus: 'Overseeing the Sound & Time-Based district listening sessions.',
    gradient: 'linear-gradient(135deg, #09090B 0%, #18181B 50%, #27272A 100%)',
    since: '2023',
  },
  {
    name: 'Amara Osei',
    specialty: 'Material Culture & Archival Practice',
    focus: 'Writing the institutional memory preservation protocol.',
    gradient: 'linear-gradient(135deg, #27272A 0%, #09090B 50%, #3F3F46 100%)',
    since: '2024',
  },
  {
    name: 'Takeshi Murakami',
    specialty: 'Interactive Installation & Kinetic Systems',
    focus: 'Building the cross-district collaboration framework for The Bridge.',
    gradient: 'linear-gradient(135deg, #18181B 0%, #3F3F46 50%, #27272A 100%)',
    since: '2025',
  },
]

const archiveEntries = [
  {
    number: '01',
    title: 'On the Nature of Collective Memory',
    description: 'A founding document examining how creative collectives preserve and transmit knowledge across generations of practitioners.',
    author: 'M. Delacroix',
    date: '2023.09',
  },
  {
    number: '02',
    title: 'The Mandate System: Origins and Intent',
    description: 'How collective directives emerge from discourse and become actionable commitments within the fellowship.',
    author: 'I. Kone',
    date: '2024.01',
  },
  {
    number: '03',
    title: 'Craft as Governance',
    description: 'The argument for demonstrated mastery as the primary qualification for decision-making within the collective.',
    author: 'R. Vasquez',
    date: '2024.03',
  },
  {
    number: '04',
    title: 'The Archive as Living Document',
    description: 'Why the record must evolve with the practitioners who create it. A case for mutable archival standards.',
    author: 'A. Osei',
    date: '2025.01',
  },
]

const archivalSolutions = [
  {
    icon: 'history_edu',
    title: 'Precedent: Founding Charter Amendments',
    quote: 'The charter should breathe. A static document serves the founders, not the future.',
    author: 'Margaux Delacroix, 2024 Annual Review',
    status: 'Resolved',
    statusClass: 'status-resolved',
  },
  {
    icon: 'auto_stories',
    title: 'Precedent: Cross-District Governance',
    quote: 'When a mandate touches more than one district, both councils must sit at the table. No proxies.',
    author: 'Idris Kone, Mandate 10.3 Proceedings',
    status: 'Pending Implementation',
    statusClass: 'status-pending',
  },
]

const mandates = [
  {
    number: '10.4',
    title: 'Standards of Admission',
    description: 'Reviewing and codifying the criteria by which new fellows are nominated, evaluated, and seated. The current framework relies on peer endorsement and portfolio review — this mandate formalizes the weighting of each.',
    sponsor: 'R. Vasquez',
    voteStatus: 'In Review',
  },
  {
    number: '10.5',
    title: 'Archive Accessibility Protocol',
    description: 'Establishing graduated access to the archive. Associates gain read access to public fragments; verified practitioners unlock commentary threads; fellows hold editorial privilege over the living record.',
    sponsor: 'A. Osei',
    voteStatus: 'Ratified',
  },
  {
    number: '10.6',
    title: 'AI Attribution Standards',
    description: 'Defining disclosure requirements for AI-assisted work submitted to the archive. Covers metadata tagging, Seal eligibility, and provenance chain documentation.',
    sponsor: 'S. Lindqvist',
    voteStatus: 'In Review',
  },
]

const discourseThreads = [
  {
    date: '2026.03.14',
    icon: 'forum',
    tag: 'Governance',
    title: 'Should mandate proposals require unanimous consent?',
    excerpt: 'A thread on the tension between speed of action and depth of consensus. Three fellows weigh in on whether unanimity protects or paralyzes.',
    replies: 14,
  },
  {
    date: '2026.03.09',
    icon: 'edit_note',
    tag: 'Craft',
    title: 'The portfolio as living document',
    excerpt: 'Practitioners discuss whether the static portfolio is an artifact of a slower era — and what replaces it when work is continuous and iterative.',
    replies: 8,
  },
  {
    date: '2026.03.02',
    icon: 'inventory_2',
    tag: 'Heritage',
    title: 'What we owe the archive',
    excerpt: 'On the responsibility of fellows to contribute to the record, and the difference between documentation and knowledge.',
    replies: 11,
  },
  {
    date: '2026.02.18',
    icon: 'hub',
    tag: 'Collaboration',
    title: 'Cross-district projects: who leads?',
    excerpt: 'When two districts collaborate on a commission through The Bridge, governance gets complicated. This thread proposes a rotating lead model.',
    replies: 6,
  },
]
</script>

<style scoped>
/* =============================================
   HERO
   ============================================= */
.collective-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  background-color: var(--color-background);
}

.collective-hero-title {
  font-size: var(--text-display);
  font-family: var(--font-display);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  color: var(--color-ink);
  max-width: 16ch;
}

.collective-hero-sub {
  font-size: var(--text-h4);
  font-weight: 400;
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 42ch;
  margin-bottom: var(--space-12);
}

.hero-pillars {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.pillar-label {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-ultra-wide);
  text-transform: uppercase;
  color: var(--color-gold);
}

.pillar-dot {
  color: var(--color-gold);
  opacity: 0.4;
  font-size: var(--text-body);
}

@media (max-width: 768px) {
  .collective-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-12);
  }

  .collective-hero-title {
    font-size: clamp(2.5rem, 10vw, var(--text-display));
  }

  .hero-pillars {
    flex-wrap: wrap;
    gap: var(--space-3);
  }
}

/* =============================================
   FELLOWS DIRECTORY — Vertical entries with avatars
   ============================================= */
.collective-fellows {
  padding: var(--space-32) var(--content-padding);
  background: var(--color-surface);
  border-top: 1px solid var(--rule-color);
  border-bottom: 1px solid var(--rule-color);
}

.fellows-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: var(--space-4);
}

.fellows-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-ink);
}

.fellows-title em {
  font-style: italic;
}

.fellows-count {
  font-family: var(--font-mono);
  font-size: var(--text-overline);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
}

.fellows-rule {
  width: 100%;
  height: 1px;
  background: var(--rule-color);
  margin-bottom: var(--space-8);
  transform-origin: left;
}

.fellows-list {
  display: flex;
  flex-direction: column;
}

.fellow-entry {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--space-8);
  align-items: start;
  padding: var(--space-8) 0;
  border-bottom: 1px solid var(--rule-color);
  transition: background-color var(--duration-normal) ease;
}

.fellow-entry:hover {
  background-color: rgba(184, 150, 78, 0.02);
}

.fellow-avatar-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
}

.fellow-avatar {
  width: 72px;
  height: 72px;
  border-radius: 9999px;
  border: 1px solid var(--rule-color);
}

.fellow-details {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.fellow-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-ink);
}

.fellow-name em {
  font-style: italic;
}

.fellow-specialty {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
}

.fellow-focus {
  font-size: var(--text-small);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin-top: var(--space-1);
}

.fellow-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--space-3);
}

.fellow-since {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
}

.fellow-monograph-link {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  transition: opacity var(--duration-normal) ease;
  white-space: nowrap;
}

.fellow-monograph-link:hover {
  opacity: 0.7;
}

.fellow-entry .seal-base {
  margin-top: 0;
}

@media (max-width: 768px) {
  .collective-fellows {
    padding: var(--space-16) var(--content-padding);
  }

  .fellow-entry {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .fellow-avatar-col {
    flex-direction: row;
    gap: var(--space-4);
  }

  .fellow-avatar {
    width: 56px;
    height: 56px;
  }

  .fellow-meta {
    flex-direction: row;
    align-items: center;
    gap: var(--space-4);
  }

  .fellows-header {
    flex-direction: column;
    gap: var(--space-2);
  }

  .fellow-monograph-link {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }
}

/* =============================================
   ARCHIVE VAULT
   ============================================= */
.collective-archive {
  padding: var(--space-32) var(--content-padding);
  background-color: var(--color-dark-bg);
  color: var(--color-dark-text);
}

.archive-header {
  margin-bottom: var(--space-16);
}

.archive-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);
}

.archive-title em {
  font-style: italic;
}

.archive-intro {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
}

.archive-list {
  display: flex;
  flex-direction: column;
}

.archive-entry {
  display: flex;
  gap: var(--space-8);
  padding: var(--space-8) 0;
  border-bottom: 1px solid rgba(250, 250, 249, 0.08);
  transition: background-color 0.3s ease;
}

.archive-entry:first-child {
  border-top: 1px solid rgba(250, 250, 249, 0.08);
}

.archive-entry:hover {
  background-color: rgba(255, 255, 255, 0.02);
}

.archive-number {
  font-family: var(--font-mono);
  font-size: var(--text-h2);
  font-weight: 200;
  color: var(--color-gold);
  opacity: 0.5;
  min-width: 3rem;
  line-height: 1;
  flex-shrink: 0;
}

.archive-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.archive-entry-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-dark-text);
}

.archive-entry-title em {
  font-style: italic;
}

.archive-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
}

.archive-entry-meta {
  display: flex;
  gap: var(--space-6);
  margin-top: var(--space-2);
}

.archive-author {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-gold);
  opacity: 0.6;
  letter-spacing: var(--tracking-wide);
}

.archive-date {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  opacity: 0.5;
  letter-spacing: var(--tracking-wide);
}

.archive-link {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  margin-top: var(--space-2);
  transition: letter-spacing 0.3s var(--ease-out), opacity 0.2s ease;
  opacity: 0.8;
}

.archive-link:hover {
  letter-spacing: 0.18em;
  opacity: 1;
}

@media (max-width: 768px) {
  .collective-archive {
    padding: var(--space-16) var(--content-padding);
  }

  .archive-entry {
    flex-direction: column;
    gap: var(--space-3);
  }

  .archive-number {
    font-size: var(--text-h3);
  }

  .archive-link {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }
}

/* =============================================
   ARCHIVAL SOLUTIONS — Two-column cards
   ============================================= */
.collective-solutions {
  padding: var(--space-32) var(--content-padding);
  background: var(--color-surface);
  border-top: 1px solid var(--rule-color);
  border-bottom: 1px solid var(--rule-color);
}

.solutions-header {
  margin-bottom: var(--space-12);
}

.solutions-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-4);
}

.solutions-title em {
  font-style: italic;
}

.solutions-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
}

.solution-card {
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.solution-icon {
  font-size: 2rem;
  color: var(--color-gold);
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

.solution-card-title {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  color: var(--color-ink);
}

.solution-card-title em {
  font-style: italic;
}

.solution-quote {
  font-family: var(--font-display);
  font-size: var(--text-body);
  font-weight: 300;
  font-style: italic;
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  padding-left: var(--space-4);
  border-left: 2px solid var(--color-gold);
}

.solution-cite {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-caption);
  font-style: normal;
  color: var(--color-text-muted);
  margin-top: var(--space-2);
  letter-spacing: var(--tracking-wide);
}

.solution-status {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  align-self: flex-start;
}

.status-resolved {
  color: var(--color-success);
  border-color: rgba(22, 163, 74, 0.3);
}

.status-pending {
  color: var(--color-gold);
  border-color: rgba(184, 150, 78, 0.3);
}

@media (max-width: 768px) {
  .collective-solutions {
    padding: var(--space-16) var(--content-padding);
  }

  .solutions-grid {
    grid-template-columns: 1fr;
  }
}

/* =============================================
   CURRENT MANDATES
   ============================================= */
.collective-mandates {
  padding: var(--space-32) var(--content-padding);
  background-color: var(--color-dark-bg);
  color: var(--color-dark-text);
}

.mandates-header {
  margin-bottom: var(--space-4);
}

.mandates-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.mandates-title em {
  font-style: italic;
}

.mandates-rule {
  width: 100%;
  height: 1px;
  background: rgba(250, 250, 249, 0.08);
  margin-bottom: var(--space-16);
  transform-origin: left;
}

.mandates-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.mandate-card {
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  cursor: default;
  border-color: rgba(250, 250, 249, 0.06);
}

.mandate-number {
  font-family: var(--font-mono);
  font-size: var(--text-h2);
  font-weight: 200;
  color: var(--color-gold);
  opacity: 0.5;
}

.mandate-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-dark-text);
}

.mandate-name em {
  font-style: italic;
}

.mandate-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}

.mandate-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: var(--space-4);
  border-top: 1px solid rgba(250, 250, 249, 0.06);
}

.mandate-sponsor {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  opacity: 0.6;
  letter-spacing: var(--tracking-wide);
}

.mandate-vote-status {
  font-family: var(--font-mono);
  color: var(--color-gold);
}

.mandate-card:hover .mandate-name {
  color: var(--color-gold);
  transition: color 0.3s ease;
}

@media (max-width: 1024px) {
  .mandates-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .collective-mandates {
    padding: var(--space-16) var(--content-padding);
  }

  .mandates-grid {
    grid-template-columns: 1fr;
  }
}

/* =============================================
   THE DISCOURSE
   ============================================= */
.collective-discourse {
  padding: var(--space-32) var(--content-padding);
  background: var(--color-surface);
  border-top: 1px solid var(--rule-color);
}

.discourse-header {
  margin-bottom: var(--space-12);
}

.discourse-title {
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-4);
}

.discourse-title em {
  font-style: italic;
}

.discourse-list {
  display: flex;
  flex-direction: column;
}

.discourse-entry {
  padding: var(--space-8) 0;
  border-bottom: 1px solid var(--rule-color);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  transition: background-color 0.3s ease;
}

.discourse-entry:first-child {
  border-top: 1px solid var(--rule-color);
}

.discourse-entry:hover {
  background-color: rgba(184, 150, 78, 0.02);
}

.discourse-meta {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.discourse-date {
  font-family: var(--font-mono);
  font-size: var(--text-overline);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
}

.discourse-icon {
  font-size: 1.125rem;
  color: var(--color-gold);
  opacity: 0.5;
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20;
}

.discourse-tag {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  padding: var(--space-1) var(--space-3);
  border: 1px solid rgba(184, 150, 78, 0.2);
}

.discourse-entry-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-ink);
}

.discourse-entry-title em {
  font-style: italic;
}

.discourse-excerpt {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 60ch;
}

.discourse-footer {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  margin-top: var(--space-2);
}

.discourse-replies {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-text-muted);
  opacity: 0.6;
  letter-spacing: var(--tracking-wide);
}

.discourse-link {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  transition: letter-spacing 0.3s var(--ease-out), opacity 0.2s ease;
  opacity: 0.8;
}

.discourse-link:hover {
  letter-spacing: 0.18em;
  opacity: 1;
}

@media (max-width: 768px) {
  .collective-discourse {
    padding: var(--space-16) var(--content-padding);
  }

  .discourse-link {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }
}

/* =============================================
   CTA — Centered with rule
   ============================================= */
.collective-cta {
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
  margin-bottom: var(--space-12);
  letter-spacing: var(--tracking-hero);
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
  .collective-cta {
    padding: var(--space-16) var(--content-padding);
  }

  .cta-title {
    font-size: clamp(2rem, 8vw, var(--text-display));
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
