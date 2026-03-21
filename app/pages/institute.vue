<template>
  <div class="institute-page">

    <!-- ============================================
         HERO — Centered Purpose & Mastery
    ============================================= -->
    <section ref="heroSection" class="institute-hero section section-dark">
      <div class="section-narrow hero-inner">
        <span class="overline-badge reveal">The Institute</span>
        <h1 class="hero-heading word-reveal">
          <em>Purpose &amp; Mastery.</em>
        </h1>
        <p class="hero-subtitle reveal">
          The pedagogical core of Meraki Road. A space where practitioners
          sharpen their craft through structured inquiry, rigorous practice,
          and the kind of mentorship that only comes from working alongside
          those who've been in the arena.
        </p>
        <NuxtLink to="/apply" class="hero-cta reveal">
          Begin Your Development Journey &rarr;
        </NuxtLink>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         IKIGAI LAB — Phase 01: Discovery
    ============================================= -->
    <section ref="ikigaiSection" class="ikigai section">
      <div class="section-wide">
        <div class="ikigai-header">
          <p class="overline reveal">Phase 01</p>
          <h2 class="ikigai-title word-reveal"><em>The Ikigai Lab</em></h2>
          <p class="ikigai-desc reveal">
            Every practitioner enters through the same door: self-knowledge.
            The Ikigai Lab maps the intersection of what ignites you, what
            you've spent years refining, and where the culture is genuinely
            hungry for that work.
          </p>
        </div>

        <div class="ikigai-grid">
          <article class="ikigai-card ikigai-card-1 reveal">
            <div class="ikigai-card-image grayscale-hover">
              <NuxtImg
                src="/images/institute/interior-fire.webp"
                alt="Artist working intently in studio with warm light"
                class="ikigai-img"
                loading="lazy"
                width="400"
                height="500"
              />
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
                src="/images/institute/technical-precision.webp"
                alt="Close-up of hands calibrating a precision instrument"
                class="ikigai-img"
                loading="lazy"
                width="400"
                height="500"
              />
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
                src="/images/institute/cultural-resonance.webp"
                alt="Gallery opening with engaged audience viewing installations"
                class="ikigai-img"
                loading="lazy"
                width="400"
                height="500"
              />
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
         MASTERY PATHWAY — Course Cards
    ============================================= -->
    <section ref="pathwaySection" class="pathway section section-dark">
      <div class="section-wide">
        <div class="pathway-header">
          <p class="overline reveal">Curriculum</p>
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
         THE ASCENSION — Rank Progression
    ============================================= -->
    <section ref="ascensionSection" class="ascension section">
      <div class="section-wide">
        <div class="ascension-header">
          <p class="overline reveal">Progression</p>
          <h2 class="ascension-title word-reveal"><em>The Ascension</em></h2>
          <p class="ascension-desc reveal">
            Institutional rank earned through demonstrated practice, not
            credentials. Each tier unlocks new resources, deeper access,
            and greater responsibility within the community.
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
         TESTIMONIAL — Institutional Voice
    ============================================= -->
    <section ref="testimonialSection" class="testimonial section section-dark">
      <div class="section-wide">
        <div class="testimonial-grid">
          <div class="testimonial-portrait grayscale-hover reveal">
            <NuxtImg
              src="/images/institute/testimonial-portrait.webp"
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
                <em>The Institute didn't teach me a new technique. It taught me
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
         CTA — Begin Your Development Journey
    ============================================= -->
    <section ref="ctaSection" class="institute-cta section-dark">
      <div class="section-narrow cta-inner">
        <span class="material-symbols-outlined cta-icon reveal">school</span>
        <h2 class="cta-heading word-reveal">
          <em>Begin your development journey.</em>
        </h2>
        <p class="cta-subtitle reveal">
          JOIN A COMMUNITY OF PRACTITIONERS COMMITTED TO LIFELONG CRAFT
        </p>
        <div class="cta-buttons reveal">
          <NuxtLink to="/apply" class="cta-button-gold">Enroll as Fellow</NuxtLink>
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
  title: 'The Institute — Meraki Road',
  meta: [
    { name: 'description', content: 'The Institute at Meraki Road: structured programs for practitioners pursuing purpose and mastery across creative disciplines.' },
  ],
})

useSeoMeta({
  ogTitle: 'The Institute — Meraki Road',
  ogDescription: 'Structured programs for practitioners pursuing purpose and mastery across creative disciplines.',
  twitterTitle: 'The Institute — Meraki Road',
  twitterDescription: 'Structured programs for practitioners pursuing purpose and mastery across creative disciplines.',
})

/* -- Hero --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Ikigai Lab --------------------------------- */
const ikigaiSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ikigaiSection, '.reveal', { stagger: 0.1 })
useWordReveal(ikigaiSection, '.word-reveal')

/* -- Mastery Pathway ---------------------------- */
const pathwaySection = ref<HTMLElement | null>(null)
useGsapScrollReveal(pathwaySection, '.reveal', { stagger: 0.1 })
useWordReveal(pathwaySection, '.word-reveal')

/* -- Ascension ---------------------------------- */
const ascensionSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ascensionSection, '.reveal', { stagger: 0.12 })
useWordReveal(ascensionSection, '.word-reveal')

/* -- Testimonial -------------------------------- */
const testimonialSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(testimonialSection, '.reveal', { stagger: 0.08 })

/* -- CTA ---------------------------------------- */
const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal')

/* -- Data --------------------------------------- */
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
    description: 'Lifetime access. Full institutional privileges, mentorship roles, and a permanent seat at the table.',
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

.hero-heading em {
  font-style: italic;
}

.hero-subtitle {
  font-size: var(--text-body);
  font-weight: 400;
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 48ch;
  margin-bottom: var(--space-8);
}

.hero-cta {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-ink);
  padding: var(--space-4) var(--space-8);
  background-image: none;
  background-color: var(--color-gold);
  transition: opacity var(--duration-normal) ease, transform var(--duration-normal) ease;
}

.section-dark .hero-cta {
  color: var(--color-dark-bg);
}

.hero-cta:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.hero-cta:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

@media (max-width: 768px) {
  .institute-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-12);
  }
}

/* =============================================
   IKIGAI LAB — Phase 01: Discovery
   ============================================= */
.ikigai {
  padding: var(--space-24) var(--content-padding);
  background-color: var(--color-background);
}

.ikigai-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.ikigai-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-bottom: var(--space-4);
  line-height: var(--leading-tight);
}

.ikigai-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
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

.ikigai-card:hover {
  border-color: var(--color-border);
}

.ikigai-card-1 {
  margin-top: 0;
}

.ikigai-card-2 {
  margin-top: var(--space-8);
}

.ikigai-card-3 {
  margin-top: var(--space-16);
}

.ikigai-card-image {
  overflow: hidden;
  aspect-ratio: 4 / 5;
}

.ikigai-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.ikigai-card-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-ink);
  padding: var(--space-6) var(--space-6) var(--space-2);
  line-height: var(--leading-snug);
}

.ikigai-card-desc {
  font-size: var(--text-small);
  color: var(--color-text-muted);
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

.ikigai-card-link:hover {
  background-size: 100% 1px;
}

@media (max-width: 900px) {
  .ikigai-grid {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto;
  }

  .ikigai-card-1,
  .ikigai-card-2,
  .ikigai-card-3 {
    margin-top: 0;
  }
}

/* =============================================
   MASTERY PATHWAY — Course Cards
   ============================================= */
.pathway {
  padding: var(--space-24) var(--content-padding);
}

.pathway-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

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

.pathway-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.pathway-card {
  position: relative;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  transition: border-color var(--duration-normal) ease,
              transform var(--duration-normal) ease;
}

.pathway-card:hover {
  border-color: var(--color-gold);
  transform: translateY(-2px);
}

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
  transition: border-color var(--duration-normal) ease,
              color var(--duration-normal) ease,
              background-color var(--duration-normal) ease;
}

.pathway-card:hover .pathway-card-cta {
  border-color: var(--color-gold);
  color: var(--color-dark-bg);
  background-color: var(--color-gold);
}

.pathway-arrow {
  font-size: 18px;
}

@media (max-width: 900px) {
  .pathway-grid {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto;
  }
}

/* =============================================
   THE ASCENSION — Rank Progression
   ============================================= */
.ascension {
  padding: var(--space-24) var(--content-padding);
  background-color: var(--color-background);
}

.ascension-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.ascension-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-bottom: var(--space-4);
  line-height: var(--leading-tight);
}

.ascension-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
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
  background: linear-gradient(
    to right,
    var(--color-border),
    var(--color-gold),
    var(--color-border)
  );
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
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  position: relative;
  z-index: 1;
  transition: border-color var(--duration-normal) ease;
}

.ascension-rank:hover .ascension-icon-wrap {
  border-color: var(--color-gold);
}

.ascension-icon {
  font-size: 24px;
  color: var(--color-text-muted);
  transition: color var(--duration-normal) ease;
}

.ascension-rank:hover .ascension-icon {
  color: var(--color-gold);
}

.ascension-rank-title {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  color: var(--color-ink);
  line-height: var(--leading-snug);
}

.ascension-rank-desc {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
  max-width: 22ch;
}

@media (max-width: 900px) {
  .ascension-track {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-12) var(--space-8);
  }

  .ascension-line {
    display: none;
  }
}

@media (max-width: 480px) {
  .ascension-track {
    grid-template-columns: 1fr;
  }
}

/* =============================================
   TESTIMONIAL — Institutional Voice
   ============================================= */
.testimonial {
  padding: var(--space-24) var(--content-padding);
}

.testimonial-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: var(--space-16);
  align-items: center;
}

.testimonial-portrait {
  overflow: hidden;
}

.testimonial-img {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  display: block;
  border-radius: 4px;
}

.testimonial-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.testimonial-quote-icon {
  font-size: 48px;
  color: var(--color-gold);
  opacity: 0.4;
}

.testimonial-quote {
  border: none;
  padding: 0;
  margin: 0;
}

.testimonial-quote p {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  line-height: var(--leading-snug);
  color: var(--color-dark-text);
}

.testimonial-quote em {
  font-style: italic;
}

.testimonial-attribution {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.testimonial-name {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: 600;
  color: var(--color-dark-text);
  letter-spacing: var(--tracking-snug);
}

.testimonial-meta {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.testimonial-discipline {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
}

.testimonial-nav {
  display: flex;
  gap: var(--space-3);
  margin-top: var(--space-4);
}

.testimonial-nav-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--color-border);
  color: var(--color-dark-muted);
  background: transparent;
  cursor: pointer;
  transition: border-color var(--duration-normal) ease,
              color var(--duration-normal) ease;
}

.testimonial-nav-btn:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
}

.testimonial-nav-btn:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .testimonial-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .testimonial-quote p {
    font-size: var(--text-h3);
  }
}

/* =============================================
   CTA — Bottom
   ============================================= */
.institute-cta {
  padding: var(--space-24) var(--content-padding);
  text-align: center;
}

.cta-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-icon {
  font-size: 40px;
  color: var(--color-gold);
  margin-bottom: var(--space-6);
}

.cta-heading {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
}

.cta-heading em {
  font-style: italic;
}

.cta-subtitle {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  margin-bottom: var(--space-8);
}

.cta-buttons {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  justify-content: center;
}

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
  transition: opacity var(--duration-normal) ease,
              transform var(--duration-normal) ease;
}

.cta-button-gold:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

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
  transition: border-color var(--duration-normal) ease,
              color var(--duration-normal) ease,
              background-color var(--duration-normal) ease;
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
  .institute-cta {
    padding: var(--space-16) var(--content-padding);
  }

  .cta-buttons {
    flex-direction: column;
    width: 100%;
  }

  .cta-button-gold,
  .cta-button-ghost {
    width: 100%;
    text-align: center;
  }
}
</style>
