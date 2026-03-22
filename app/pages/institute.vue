<template>
  <div class="institute-page">

    <!-- ============================================
         HERO — Centered Purpose & Mastery
    ============================================= -->
    <section ref="heroSection" class="institute-hero section section-dark">
      <div class="section-narrow hero-inner">
        <span class="overline-badge reveal">Meraki Institute</span>
        <h1 class="hero-heading word-reveal">
          <em>Purpose &amp; Mastery.</em>
        </h1>
        <p class="hero-subtitle reveal">
          Where practitioners sharpen their craft through structured inquiry,
          rigorous practice, and the kind of mentorship that only comes from
          working alongside those who've been in the arena.
        </p>
        <p class="hero-credo reveal">
          <em>&ldquo;The hand follows the soul.&rdquo;</em>
        </p>
        <NuxtLink to="/apply" class="hero-cta reveal">
          Begin Your Development Journey &rarr;
        </NuxtLink>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         RESIDENT COUNT — Institutional credibility
    ============================================= -->
    <section ref="residentsSection" class="residents section">
      <div class="section-default">
        <div class="residents-card reveal">
          <div class="residents-stat">
            <span class="residents-number">247</span>
            <span class="residents-label">Active Residents</span>
          </div>
          <div class="residents-meta">
            <span class="residents-location">Distributed across 14 time zones</span>
            <span class="residents-mandate">Building in service of craft, not credential.</span>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         IKIGAI LAB — Phase 01: Discovery
    ============================================= -->
    <section ref="ikigaiSection" class="ikigai section section-dark">
      <div class="section-wide">
        <div class="ikigai-header">
          <p class="overline reveal">Phase 01</p>
          <h2 class="ikigai-title word-reveal"><em>The Ikigai Lab</em></h2>
          <p class="ikigai-desc reveal">
            Every practitioner enters through the same door: self-knowledge.
            The Ikigai Lab maps where your obsession, your skill, and the
            culture's genuine hunger for that work all converge.
          </p>
        </div>

        <div class="ikigai-grid">
          <article class="ikigai-card ikigai-card-1 reveal">
            <div class="ikigai-card-image grayscale-hover">
              <NuxtImg
                src="/images/ikigai.webp"
                alt="Artist working intently in studio with warm light"
                class="ikigai-img"
                loading="lazy"
                width="400"
                height="500"
              />
              <span class="ikigai-card-id">MD-2801-P</span>
            </div>
            <h3 class="ikigai-card-title"><em>The Interior Fire</em></h3>
            <p class="ikigai-card-desc">
              Name what keeps you up at night. Not the marketable version &mdash;
              the real obsession. We build outward from there.
            </p>
            <NuxtLink to="#" class="ikigai-card-link line-draw">Explore Passion Mapping &rarr;</NuxtLink>
          </article>

          <article class="ikigai-card ikigai-card-2 reveal">
            <div class="ikigai-card-image grayscale-hover">
              <NuxtImg
                src="/images/districts/voight-studio.webp"
                alt="Close-up of hands calibrating a precision instrument"
                class="ikigai-img"
                loading="lazy"
                width="400"
                height="500"
              />
              <span class="ikigai-card-id">MD-2802-S</span>
            </div>
            <h3 class="ikigai-card-title"><em>Technical Precision</em></h3>
            <p class="ikigai-card-desc">
              An honest audit of your current skill. Where are you strong,
              where are you faking it, and what would change if you closed
              the gap?
            </p>
            <NuxtLink to="#" class="ikigai-card-link line-draw">Begin Skill Audit &rarr;</NuxtLink>
          </article>

          <article class="ikigai-card ikigai-card-3 reveal">
            <div class="ikigai-card-image grayscale-hover">
              <NuxtImg
                src="/images/districts/meridian.webp"
                alt="Gallery opening with engaged audience viewing installations"
                class="ikigai-img"
                loading="lazy"
                width="400"
                height="500"
              />
              <span class="ikigai-card-id">MD-2803-R</span>
            </div>
            <h3 class="ikigai-card-title"><em>Cultural Resonance</em></h3>
            <p class="ikigai-card-desc">
              What does the world actually need from someone with your
              specific sensibility? Finding the seam between personal vision
              and collective appetite.
            </p>
            <NuxtLink to="#" class="ikigai-card-link line-draw">Map Market Need &rarr;</NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CURRICULUM SEALS — 2-column program cards
    ============================================= -->
    <section ref="sealsSection" class="curriculum-seals section">
      <div class="section-wide">
        <div class="seals-header">
          <p class="overline reveal">Curriculum</p>
          <h2 class="seals-title word-reveal"><em>Seals of Mastery</em></h2>
          <p class="seals-desc reveal">
            Two structured programs that form the backbone of the Institute.
            Complete both to earn full practitioner standing.
          </p>
        </div>

        <div class="seals-grid">
          <article v-for="seal in seals" :key="seal.title" class="seal-card vellum-card reveal">
            <div class="seal-card-image grayscale-hover">
              <div class="seal-card-placeholder">
                <span class="material-symbols-outlined seal-card-icon">{{ seal.icon }}</span>
              </div>
            </div>
            <div class="seal-card-body">
              <span class="seal-card-badge">{{ seal.badge }}</span>
              <h3 class="seal-card-title"><em>{{ seal.title }}</em></h3>
              <ul class="seal-card-modules">
                <li v-for="mod in seal.modules" :key="mod">{{ mod }}</li>
              </ul>
              <NuxtLink to="#" class="seal-card-cta">
                <span class="material-symbols-outlined seal-card-arrow">arrow_forward</span>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         MASTERY PATHWAY — Course Cards
    ============================================= -->
    <section ref="pathwaySection" class="pathway section section-dark">
      <div class="section-wide">
        <div class="pathway-header">
          <p class="overline reveal">Masterclasses</p>
          <h2 class="pathway-title word-reveal"><em>Mastery Pathway</em></h2>
          <p class="pathway-desc reveal">
            Structured programs designed by working practitioners, not
            theorists. Each pathway is built around real projects, real
            critique, and the kind of rigor that produces lasting skill.
          </p>
        </div>

        <div class="pathway-grid">
          <article
            v-for="(course, i) in courses"
            :key="course.title"
            class="pathway-card reveal"
          >
            <span class="pathway-card-number">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="pathway-card-badge">{{ course.modules }} Modules &middot; {{ course.level }}</span>
            <h3 class="pathway-card-title"><em>{{ course.title }}</em></h3>
            <p class="pathway-card-desc">{{ course.description }}</p>
            <NuxtLink to="#" class="pathway-card-cta">
              <span class="material-symbols-outlined pathway-arrow">arrow_forward</span>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         SCHOLAR'S JOURNAL — Recent publications
    ============================================= -->
    <section ref="journalSection" class="scholars-journal section">
      <div class="section-wide">
        <div class="journal-header">
          <div class="journal-header-left">
            <p class="overline reveal">Publications</p>
            <h2 class="journal-title word-reveal"><em>Scholar&rsquo;s Journal</em></h2>
          </div>
          <NuxtLink to="/the-road" class="journal-view-all reveal">
            Full Archive &rarr;
          </NuxtLink>
        </div>

        <div class="journal-list">
          <article v-for="paper in papers" :key="paper.title" class="journal-entry reveal">
            <span class="journal-entry-badge">{{ paper.badge }}</span>
            <div class="journal-entry-body">
              <h3 class="journal-entry-title"><em>{{ paper.title }}</em></h3>
              <span class="journal-entry-meta">{{ paper.author }} &middot; {{ paper.duration }}</span>
            </div>
            <NuxtLink to="#" class="journal-entry-link" aria-label="Read paper">
              <span class="material-symbols-outlined">arrow_forward</span>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         THE ASCENSION — Rank Progression
    ============================================= -->
    <section ref="ascensionSection" class="ascension section section-dark">
      <div class="section-wide">
        <div class="ascension-header">
          <p class="overline reveal">Progression</p>
          <h2 class="ascension-title word-reveal"><em>The Ascension</em></h2>
          <p class="ascension-desc reveal">
            Rank earned through demonstrated practice, not credentials.
            Each tier unlocks new resources, deeper access, and greater
            responsibility within the community.
          </p>
        </div>

        <div class="ascension-track">
          <div class="ascension-line" aria-hidden="true" />

          <div
            v-for="rank in ranks"
            :key="rank.title"
            class="ascension-rank reveal"
          >
            <div class="ascension-icon-wrap">
              <span class="material-symbols-outlined ascension-icon">{{ rank.icon }}</span>
            </div>
            <span :class="['seal-base', rank.seal]">{{ rank.label }}</span>
            <h3 class="ascension-rank-title"><em>{{ rank.title }}</em></h3>
            <p class="ascension-rank-desc">{{ rank.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         MASTERY RITUAL — 3-phase progression
    ============================================= -->
    <section ref="ritualSection" class="ritual section">
      <div class="section-default">
        <div class="ritual-header">
          <p class="overline reveal">The Mastery Ritual</p>
          <h2 class="ritual-title word-reveal"><em>Three thresholds. One transformation.</em></h2>
          <p class="ritual-desc reveal">
            Mastery is not a destination &mdash; it is a series of deliberate crossings.
            Each phase demands something different from you. Each one changes
            what the next phase can ask.
          </p>
        </div>

        <div class="ritual-phases">
          <article
            v-for="(phase, i) in ritualPhases"
            :key="phase.title"
            class="ritual-phase reveal"
          >
            <div class="ritual-phase-marker">
              <span class="ritual-phase-greek">{{ phase.greek }}</span>
              <div class="ritual-phase-line" v-if="i < ritualPhases.length - 1" aria-hidden="true" />
            </div>
            <div class="ritual-phase-body">
              <span class="ritual-phase-label">{{ phase.label }}</span>
              <h3 class="ritual-phase-title"><em>{{ phase.title }}</em></h3>
              <p class="ritual-phase-desc">{{ phase.description }}</p>
              <span class="ritual-phase-validation">{{ phase.validation }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         TESTIMONIAL — Institutional Voice
    ============================================= -->
    <section ref="testimonialSection" class="testimonial section">
      <div class="section-wide">
        <div class="testimonial-grid">
          <div class="testimonial-portrait grayscale-hover reveal">
            <NuxtImg
              src="/images/districts/the-road.webp"
              alt="Fellow practitioner in studio"
              class="testimonial-img"
              loading="lazy"
              width="480"
              height="600"
            />
          </div>
          <div class="testimonial-content">
            <span class="material-symbols-outlined testimonial-quote-icon reveal">format_quote</span>
            <blockquote class="testimonial-quote reveal">
              <p>
                <em>Meraki Institute didn't teach me a new technique. It taught me
                how to see my own practice clearly &mdash; what was habit, what was
                craft, and what I'd been avoiding. That distinction changed
                everything about the work I make now.</em>
              </p>
            </blockquote>
            <div class="testimonial-attribution reveal">
              <p class="testimonial-name">Kael Orion</p>
              <div class="testimonial-meta">
                <span class="seal-base seal-fellow">Fellow</span>
                <span class="testimonial-discipline">Generative Systems &amp; Installation</span>
              </div>
            </div>
            <div class="testimonial-nav reveal">
              <button class="testimonial-nav-btn" aria-label="Previous testimonial">
                <span class="material-symbols-outlined">arrow_back</span>
              </button>
              <button class="testimonial-nav-btn" aria-label="Next testimonial">
                <span class="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         CTA — The Enrollment Ceremony
    ============================================= -->
    <section ref="ctaSection" class="institute-cta section-dark">
      <div class="section-narrow cta-inner">
        <span class="material-symbols-outlined cta-icon reveal">school</span>
        <h2 class="cta-heading word-reveal">
          <em>Will you cross the threshold?</em>
        </h2>
        <p class="cta-subtitle reveal">
          FOR PRACTITIONERS COMMITTED TO LIFELONG CRAFT
        </p>
        <p class="cta-ceremony reveal">
          Enrollment is not an application &mdash; it is a declaration. You arrive
          with the work you&rsquo;ve done. You leave with clarity about the work
          ahead.
        </p>
        <div class="cta-buttons reveal">
          <NuxtLink to="/apply" class="cta-button-gold">Begin the Ritual &rarr;</NuxtLink>
          <NuxtLink to="#" class="cta-button-ghost">View Curriculum</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

/* -- SEO ---------------------------------------- */
useHead({
  title: 'Meraki Institute — Meraki Road',
  meta: [
    { name: 'description', content: 'Meraki Institute at Meraki Road: structured programs for practitioners pursuing purpose and mastery across creative disciplines.' },
  ],
})

useSeoMeta({
  ogTitle: 'Meraki Institute — Meraki Road',
  ogDescription: 'Structured programs for practitioners pursuing purpose and mastery across creative disciplines.',
  twitterTitle: 'Meraki Institute — Meraki Road',
  twitterDescription: 'Structured programs for practitioners pursuing purpose and mastery across creative disciplines.',
})

/* -- Hero --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Residents ---------------------------------- */
const residentsSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(residentsSection, '.reveal')

/* -- Ikigai Lab --------------------------------- */
const ikigaiSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ikigaiSection, '.reveal', { stagger: 0.1 })
useWordReveal(ikigaiSection, '.word-reveal')

/* -- Curriculum Seals --------------------------- */
const sealsSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(sealsSection, '.reveal', { stagger: 0.1 })
useWordReveal(sealsSection, '.word-reveal')

/* -- Mastery Pathway ---------------------------- */
const pathwaySection = ref<HTMLElement | null>(null)
useGsapScrollReveal(pathwaySection, '.reveal', { stagger: 0.1 })
useWordReveal(pathwaySection, '.word-reveal')

/* -- Scholar's Journal -------------------------- */
const journalSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(journalSection, '.reveal', { stagger: 0.06 })
useWordReveal(journalSection, '.word-reveal')

/* -- Ascension ---------------------------------- */
const ascensionSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ascensionSection, '.reveal', { stagger: 0.12 })
useWordReveal(ascensionSection, '.word-reveal')

/* -- Ritual ------------------------------------- */
const ritualSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ritualSection, '.reveal', { stagger: 0.15 })
useWordReveal(ritualSection, '.word-reveal')

/* -- Testimonial -------------------------------- */
const testimonialSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(testimonialSection, '.reveal', { stagger: 0.08 })

/* -- CTA ---------------------------------------- */
const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal')

/* -- Data --------------------------------------- */
interface Seal {
  title: string
  icon: string
  badge: string
  modules: string[]
}

const seals: Seal[] = [
  {
    title: 'Seal I: Foundation',
    icon: 'foundation',
    badge: 'Core Curriculum',
    modules: [
      'Ikigai Alignment (4 weeks)',
      'Material Intelligence (6 weeks)',
      'Critique & Discourse (4 weeks)',
      'Portfolio Architecture (2 weeks)',
    ],
  },
  {
    title: 'Seal II: Sovereignty',
    icon: 'workspace_premium',
    badge: 'Advanced Practice',
    modules: [
      'Autonomous Practice (8 weeks)',
      'Public Presentation (4 weeks)',
      'Community Contribution (6 weeks)',
      'Legacy Documentation (2 weeks)',
    ],
  },
]

interface Course {
  title: string
  modules: number
  level: string
  description: string
}

const courses: Course[] = [
  {
    title: 'AI-Assisted Visual Art',
    modules: 12,
    level: 'Masterclass',
    description: 'From prompt architecture to post-processing pipelines. Learn to direct AI as a collaborator, not a shortcut — building work that holds up to scrutiny and carries your signature.',
  },
  {
    title: 'Creative Direction & Curatorial Theory',
    modules: 8,
    level: 'Intensive',
    description: 'The invisible architecture behind every exhibition, campaign, and collection. How to sequence ideas, build narrative tension, and make editorial decisions that land.',
  },
  {
    title: 'Non-Linear Narrative Storytelling',
    modules: 15,
    level: 'Masterclass',
    description: 'Stories that branch, loop, and respond. Interactive fiction, generative narrative, and the emerging grammar of experiences that unfold differently for every audience.',
  },
]

interface Paper {
  title: string
  author: string
  badge: string
  duration: string
}

const papers: Paper[] = [
  { title: 'On the Ethics of Algorithmic Curation', author: 'Lior Avital', badge: 'Peer Reviewed', duration: '12 min' },
  { title: 'Material Intelligence in Digital Practice', author: 'Tomoko Iida', badge: 'Working Paper', duration: '18 min' },
  { title: 'Against Legibility: A Defense of Opacity', author: 'Vera Morozova', badge: 'Fellow Thesis', duration: '24 min' },
]

interface Rank {
  icon: string
  seal: string
  label: string
  title: string
  description: string
}

const ranks: Rank[] = [
  {
    icon: 'door_open',
    seal: 'seal-associate',
    label: 'Tier I',
    title: 'Associate',
    description: 'Enrollment tier. Access to foundational coursework, community forums, and peer critique sessions.',
  },
  {
    icon: 'construction',
    seal: 'seal-verified',
    label: 'Tier II',
    title: 'Practitioner',
    description: 'Active mastery. Demonstrated commitment through completed pathways and portfolio review.',
  },
  {
    icon: 'edit_note',
    seal: 'seal-fellow',
    label: 'Tier III',
    title: 'Contributor',
    description: 'Publishing tier. Practitioners who teach, write, or curate — giving back to the discipline.',
  },
  {
    icon: 'workspace_premium',
    seal: 'seal-legacy',
    label: 'Tier IV',
    title: 'Fellow',
    description: 'Lifetime access. Full privileges, mentorship roles, and a permanent seat at the table.',
  },
]

interface RitualPhase {
  greek: string
  label: string
  title: string
  description: string
  validation: string
}

const ritualPhases: RitualPhase[] = [
  {
    greek: '\u03B1',
    label: 'Phase Alpha',
    title: 'Cognitive Alignment',
    description: 'Demonstrate understanding of negative space, compositional tension, and the principles that govern how attention moves through a work. This is where you prove you can see before you prove you can build.',
    validation: 'Validated through structured critique and portfolio defense.',
  },
  {
    greek: '\u03B2',
    label: 'Phase Beta',
    title: 'Tonal Synthesis',
    description: 'Master the twelve-layer depth system. Produce work that holds together across scale, medium, and context. This phase separates those who follow technique from those who internalize it.',
    validation: 'Assessed through practical output and peer review.',
  },
  {
    greek: '\u03B3',
    label: 'Phase Gamma',
    title: 'Final Manifestation',
    description: 'Construct an archival anchor \u2014 a body of work that represents your transformation. This is not a thesis. It is evidence of what you became during the process.',
    validation: 'Culminates in a completion ceremony at the District Summit.',
  },
]
</script>

<style scoped>
/* =============================================
   HERO — Centered Purpose & Mastery
   ============================================= */
.institute-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  text-align: center;
}

.hero-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.overline-badge {
  display: inline-block;
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  border: 1px solid rgba(184, 150, 78, 0.3);
  padding: var(--space-1) var(--space-3);
  margin-bottom: var(--space-6);
}

.hero-heading {
  font-size: var(--text-display);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
  margin-bottom: var(--space-8);
  color: var(--color-dark-text);
}

.hero-heading em { font-style: italic; }

.hero-subtitle {
  font-size: var(--text-body);
  font-weight: 400;
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 48ch;
  margin-bottom: var(--space-8);
}

.hero-credo {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  color: var(--color-dark-muted);
  line-height: var(--leading-snug);
  margin-bottom: var(--space-8);
  opacity: 0.6;
}

.hero-cta {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-bg);
  padding: var(--space-4) var(--space-8);
  background-image: none;
  background-color: var(--color-gold);
  transition: opacity var(--duration-normal) ease, transform var(--duration-normal) ease;
}

.hero-cta:hover { opacity: 0.9; transform: translateY(-1px); }
.hero-cta:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 4px; }

@media (max-width: 768px) {
  .institute-hero { padding-top: calc(var(--space-16) + 3rem); padding-bottom: var(--space-12); }
  .hero-cta { min-height: 44px; display: inline-flex; align-items: center; justify-content: center; width: 100%; }
}

/* =============================================
   RESIDENT COUNT — Institutional credibility
   ============================================= */
.residents {
  padding: var(--space-12) var(--content-padding);
  background: var(--color-background);
}

.residents-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-8) var(--space-12);
  border: 1px solid var(--color-border);
  gap: var(--space-8);
}

.residents-stat {
  display: flex;
  align-items: baseline;
  gap: var(--space-4);
}

.residents-number {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 300;
  color: var(--color-gold);
  line-height: 1;
}

.residents-label {
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.residents-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--space-1);
}

.residents-location {
  font-size: var(--text-caption);
  color: var(--color-text-muted);
}

.residents-mandate {
  font-family: var(--font-display);
  font-size: var(--text-small);
  font-style: italic;
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .residents-card { flex-direction: column; align-items: flex-start; }
  .residents-meta { align-items: flex-start; }
}

/* =============================================
   IKIGAI LAB — Phase 01: Discovery
   ============================================= */
.ikigai {
  padding: var(--space-24) var(--content-padding);
}

.ikigai-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.ikigai-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
  line-height: var(--leading-tight);
}

.ikigai-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 52ch;
  margin: 0 auto;
}

.ikigai-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.ikigai-card {
  background: var(--color-surface);
  border: 1px solid transparent;
  padding: 0;
  transition: border-color var(--duration-normal) ease;
}

.ikigai-card:hover { border-color: var(--color-border); }
.ikigai-card-1 { margin-top: 0; }
.ikigai-card-2 { margin-top: var(--space-8); }
.ikigai-card-3 { margin-top: var(--space-16); }

.ikigai-card-image { overflow: hidden; aspect-ratio: 4 / 5; position: relative; }

.ikigai-card-id {
  position: absolute;
  top: var(--space-3);
  left: var(--space-3);
  font-family: var(--font-mono);
  font-size: 0.5625rem;
  letter-spacing: var(--tracking-wide);
  color: var(--color-dark-text);
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  padding: 2px 8px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.ikigai-card:hover .ikigai-card-id {
  opacity: 1;
}

.ikigai-img { width: 100%; height: 100%; object-fit: cover; display: block; }

.ikigai-card-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-dark-text);
  padding: var(--space-6) var(--space-6) var(--space-2);
  line-height: var(--leading-snug);
}

.ikigai-card-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
  padding: 0 var(--space-6);
  margin-bottom: var(--space-4);
}

.ikigai-card-link {
  display: inline-block;
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  padding: 0 var(--space-6) var(--space-6);
  background-image: linear-gradient(var(--color-gold), var(--color-gold));
  background-size: 0% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.5s cubic-bezier(0.33, 1, 0.68, 1);
}

.ikigai-card-link:hover { background-size: 100% 1px; }

@media (max-width: 900px) {
  .ikigai-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
  .ikigai-card-1, .ikigai-card-2, .ikigai-card-3 { margin-top: 0; }
}

/* =============================================
   CURRICULUM SEALS — 2-column program cards
   ============================================= */
.curriculum-seals {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-background);
}

.seals-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.seals-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-bottom: var(--space-4);
  line-height: var(--leading-tight);
}

.seals-title em { font-style: italic; }

.seals-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin: 0 auto;
}

.seals-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
}

.seal-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.seal-card-image {
  aspect-ratio: 16 / 9;
  background: rgba(255, 255, 255, 0.02);
  display: flex;
  align-items: center;
  justify-content: center;
}

.seal-card-icon {
  font-size: 3rem;
  color: var(--color-text-muted);
  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48;
}

.seal-card-body {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.seal-card-badge {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-3);
}

.seal-card-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-ink);
  line-height: var(--leading-snug);
  margin-bottom: var(--space-5);
}

.seal-card-title em { font-style: italic; }

.seal-card-modules {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  flex: 1;
}

.seal-card-modules li {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  padding-left: var(--space-4);
  border-left: 1px solid var(--color-border);
  line-height: var(--leading-normal);
}

.seal-card-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  background-image: none;
  align-self: flex-end;
  transition: border-color var(--duration-normal) ease, color var(--duration-normal) ease, background-color var(--duration-normal) ease;
}

.seal-card:hover .seal-card-cta {
  border-color: var(--color-gold);
  color: var(--color-ink);
  background-color: var(--color-gold);
}

.seal-card-arrow { font-size: 18px; }

@media (max-width: 768px) {
  .seals-grid { grid-template-columns: 1fr; }
}

/* =============================================
   MASTERY PATHWAY — Course Cards
   ============================================= */
.pathway { padding: var(--space-24) var(--content-padding); }

.pathway-header { text-align: center; margin-bottom: var(--space-16); }

.pathway-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
  line-height: var(--leading-tight);
}

.pathway-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin: 0 auto;
}

.pathway-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-8); }

.pathway-card {
  position: relative;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  transition: border-color var(--duration-normal) ease, transform var(--duration-normal) ease;
}

.pathway-card:hover { border-color: var(--color-gold); transform: translateY(-2px); }

.pathway-card-number {
  font-family: var(--font-mono);
  font-size: var(--text-display);
  font-weight: 200;
  color: rgba(184, 150, 78, 0.15);
  line-height: 1;
  margin-bottom: var(--space-4);
}

.pathway-card-badge {
  display: inline-block;
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}

.pathway-card-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-dark-text);
  line-height: var(--leading-snug);
  margin-bottom: var(--space-4);
}

.pathway-card-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
  flex: 1;
  margin-bottom: var(--space-6);
}

.pathway-card-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-border);
  color: var(--color-dark-muted);
  background-image: none;
  transition: border-color var(--duration-normal) ease, color var(--duration-normal) ease, background-color var(--duration-normal) ease;
}

.pathway-card:hover .pathway-card-cta {
  border-color: var(--color-gold);
  color: var(--color-dark-bg);
  background-color: var(--color-gold);
}

.pathway-arrow { font-size: 18px; }

@media (max-width: 900px) {
  .pathway-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
}

/* =============================================
   SCHOLAR'S JOURNAL — Recent publications
   ============================================= */
.scholars-journal {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-background);
}

.journal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: var(--space-12);
}

.journal-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-3);
  line-height: var(--leading-tight);
}

.journal-title em { font-style: italic; }

.journal-view-all {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  white-space: nowrap;
  transition: opacity var(--duration-normal) ease;
}

.journal-view-all:hover { opacity: 0.7; }

.journal-list {
  border-top: 1px solid var(--color-border);
}

.journal-entry {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  padding: var(--space-5) 0;
  border-bottom: 1px solid var(--color-border);
  cursor: pointer;
  transition: background-color var(--duration-normal) ease;
}

.journal-entry:hover {
  background-color: rgba(184, 150, 78, 0.03);
}

.journal-entry-badge {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  border: 1px solid rgba(184, 150, 78, 0.25);
  padding: 2px 8px;
  flex-shrink: 0;
  white-space: nowrap;
}

.journal-entry-body {
  flex: 1;
  min-width: 0;
}

.journal-entry-title {
  font-family: var(--font-display);
  font-size: var(--text-body);
  font-weight: 400;
  color: var(--color-ink);
  line-height: var(--leading-snug);
  transition: color var(--duration-normal) ease;
}

.journal-entry:hover .journal-entry-title {
  color: var(--color-gold);
}

.journal-entry-title em { font-style: italic; }

.journal-entry-meta {
  font-size: var(--text-caption);
  color: var(--color-text-muted);
  margin-top: var(--space-1);
}

.journal-entry-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: var(--color-gold);
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity var(--duration-normal) ease, transform var(--duration-normal) ease;
  background-image: none;
  flex-shrink: 0;
}

.journal-entry:hover .journal-entry-link {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 768px) {
  .journal-header { flex-direction: column; align-items: flex-start; gap: var(--space-4); }
  .journal-entry { flex-wrap: wrap; gap: var(--space-3); }
  .journal-entry-link { display: none; }
}

/* =============================================
   THE ASCENSION — Rank Progression
   ============================================= */
.ascension { padding: var(--space-24) var(--content-padding); }

.ascension-header { text-align: center; margin-bottom: var(--space-16); }

.ascension-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
  line-height: var(--leading-tight);
}

.ascension-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin: 0 auto;
}

.ascension-track {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-8);
}

.ascension-line {
  position: absolute;
  top: 28px;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(to right, var(--color-border), var(--color-gold), var(--color-border));
}

.ascension-rank {
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
}

.ascension-icon-wrap {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-dark-bg);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  position: relative;
  z-index: 1;
  transition: border-color var(--duration-normal) ease;
}

.ascension-rank:hover .ascension-icon-wrap { border-color: var(--color-gold); }

.ascension-icon {
  font-size: 24px;
  color: var(--color-dark-muted);
  transition: color var(--duration-normal) ease;
}

.ascension-rank:hover .ascension-icon { color: var(--color-gold); }

.ascension-rank-title {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  color: var(--color-dark-text);
  line-height: var(--leading-snug);
}

.ascension-rank-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
  max-width: 22ch;
}

@media (max-width: 900px) {
  .ascension-track { grid-template-columns: repeat(2, 1fr); gap: var(--space-12) var(--space-8); }
  .ascension-line { display: none; }
}

@media (max-width: 480px) {
  .ascension-track { grid-template-columns: 1fr; }
}

/* =============================================
   MASTERY RITUAL — 3-phase progression
   ============================================= */
.ritual {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-background);
}

.ritual-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.ritual-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-bottom: var(--space-4);
  line-height: var(--leading-tight);
}

.ritual-title em { font-style: italic; }

.ritual-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 52ch;
  margin: 0 auto;
}

.ritual-phases {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.ritual-phase {
  display: flex;
  gap: var(--space-8);
}

.ritual-phase-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 48px;
}

.ritual-phase-greek {
  width: 48px;
  height: 48px;
  border: 1px solid var(--color-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-gold);
  background: var(--color-background);
  position: relative;
  z-index: 1;
}

.ritual-phase-line {
  width: 1px;
  flex: 1;
  background: rgba(184, 150, 78, 0.2);
  min-height: var(--space-8);
}

.ritual-phase-body {
  padding-bottom: var(--space-12);
}

.ritual-phase-label {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-2);
  display: block;
}

.ritual-phase-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-ink);
  margin-bottom: var(--space-4);
  line-height: var(--leading-snug);
}

.ritual-phase-title em { font-style: italic; }

.ritual-phase-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
}

.ritual-phase-validation {
  font-family: var(--font-mono);
  font-size: var(--text-overline);
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-muted);
  opacity: 0.7;
}

@media (max-width: 768px) {
  .ritual { padding: var(--space-16) var(--content-padding); }
  .ritual-phase { gap: var(--space-4); }
  .ritual-phase-marker { width: 36px; }
  .ritual-phase-greek { width: 36px; height: 36px; font-size: var(--text-h3); }
}

/* =============================================
   TESTIMONIAL — Institutional Voice
   ============================================= */
.testimonial {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-background);
}

.testimonial-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: var(--space-16);
  align-items: center;
}

.testimonial-portrait { overflow: hidden; }

.testimonial-img {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  display: block;
  border-radius: 4px;
}

.testimonial-content { display: flex; flex-direction: column; gap: var(--space-6); }

.testimonial-quote-icon { font-size: 48px; color: var(--color-gold); opacity: 0.4; }

.testimonial-quote { border: none; padding: 0; margin: 0; }

.testimonial-quote p {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  line-height: var(--leading-snug);
  color: var(--color-ink);
}

.testimonial-quote em { font-style: italic; }

.testimonial-attribution { display: flex; flex-direction: column; gap: var(--space-2); }

.testimonial-name {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: 600;
  color: var(--color-ink);
  letter-spacing: var(--tracking-snug);
}

.testimonial-meta { display: flex; align-items: center; gap: var(--space-3); }

.testimonial-discipline {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.testimonial-nav { display: flex; gap: var(--space-3); margin-top: var(--space-4); }

.testimonial-nav-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  background: transparent;
  cursor: pointer;
  transition: border-color var(--duration-normal) ease, color var(--duration-normal) ease;
}

.testimonial-nav-btn:hover { border-color: var(--color-gold); color: var(--color-gold); }
.testimonial-nav-btn:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 2px; }

@media (max-width: 768px) {
  .testimonial-grid { grid-template-columns: 1fr; gap: var(--space-8); }
  .testimonial-quote p { font-size: var(--text-h3); }
}

/* =============================================
   CTA — Bottom
   ============================================= */
.institute-cta {
  padding: var(--space-24) var(--content-padding);
  text-align: center;
}

.cta-inner { display: flex; flex-direction: column; align-items: center; }
.cta-icon { font-size: 40px; color: var(--color-gold); margin-bottom: var(--space-6); }

.cta-heading {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
}

.cta-heading em { font-style: italic; }

.cta-subtitle {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  margin-bottom: var(--space-6);
}

.cta-ceremony {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 45ch;
  margin-bottom: var(--space-8);
}

.cta-buttons { display: flex; gap: var(--space-4); flex-wrap: wrap; justify-content: center; }

.cta-button-gold {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-bg);
  padding: var(--space-4) var(--space-8);
  background-color: var(--color-gold);
  background-image: none;
  transition: opacity var(--duration-normal) ease, transform var(--duration-normal) ease;
}

.cta-button-gold:hover { opacity: 0.9; transform: translateY(-1px); }

.cta-button-ghost {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-secondary);
  padding: var(--space-4) var(--space-8);
  border: 1px solid var(--color-border);
  background-image: none;
  background-color: transparent;
  transition: border-color var(--duration-normal) ease, color var(--duration-normal) ease, background-color var(--duration-normal) ease;
}

.cta-button-ghost:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
  background-color: rgba(184, 150, 78, 0.06);
}

.cta-button-gold:focus-visible,
.cta-button-ghost:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

@media (max-width: 768px) {
  .institute-cta { padding: var(--space-16) var(--content-padding); }
  .cta-buttons { flex-direction: column; width: 100%; }
  .cta-button-gold, .cta-button-ghost { width: 100%; text-align: center; }
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
