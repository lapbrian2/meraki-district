<template>
  <div class="intake-page">

    <!-- ============================================
         HERO — Project Intake Ritual
    ============================================= -->
    <section ref="heroSection" class="intake-hero section section-dark">
      <div class="section-narrow">
        <span class="stamped-overline reveal">The Bridge &mdash; Partner Portal</span>
        <h1 class="intake-hero-title word-reveal">
          <em>The Project Intake Ritual</em>
        </h1>
        <p class="intake-hero-sub reveal">
          You have a project that demands more than execution. You need practitioners
          who understand why the work matters &mdash; not just how to deliver it.
          This is where that conversation begins.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PROCESS — How It Works (3 phases)
    ============================================= -->
    <section ref="processSection" class="intake-process section">
      <div class="section-wide">
        <div class="process-header">
          <p class="overline reveal">The Protocol</p>
          <h2 class="process-title word-reveal"><em>Three phases. No shortcuts.</em></h2>
          <p class="process-desc reveal">
            Every project that enters The Bridge passes through the same curatorial
            process. This protects both the partner and the practitioner.
          </p>
        </div>
        <div class="phases-grid">
          <article v-for="phase in phases" :key="phase.number" class="phase-card vellum-card reveal">
            <div class="phase-number-wrap">
              <span class="phase-number">{{ phase.number }}</span>
            </div>
            <h3 class="phase-title">{{ phase.title }}</h3>
            <p class="phase-body">{{ phase.body }}</p>
            <span class="phase-duration">{{ phase.duration }}</span>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         SECTOR MAP — Which districts align
    ============================================= -->
    <section ref="sectorSection" class="sector-map section section-dark">
      <div class="section-wide">
        <div class="sector-header">
          <p class="overline reveal">District Alignment</p>
          <h2 class="sector-title word-reveal"><em>Where does your project live?</em></h2>
          <p class="sector-desc reveal">
            Select the creative domain closest to your brief.
            Our curatorial team will map your project to the right
            practitioners across districts.
          </p>
        </div>
        <div class="sector-grid">
          <article
            v-for="sector in sectors"
            :key="sector.district"
            class="sector-card vellum-card reveal"
          >
            <div class="sector-icon-wrap">
              <span class="material-symbols-outlined sector-icon">{{ sector.icon }}</span>
            </div>
            <div class="sector-info">
              <span class="sector-district">{{ sector.district }}</span>
              <h3 class="sector-name">{{ sector.name }}</h3>
              <p class="sector-capability">{{ sector.capability }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         BRIEF FORM — Project submission
    ============================================= -->
    <section ref="formSection" class="intake-form section">
      <div class="section-default">
        <div class="form-layout">
          <div class="form-sidebar">
            <p class="overline reveal">Submit a Brief</p>
            <h2 class="form-sidebar-title word-reveal"><em>Tell us about the work.</em></h2>
            <p class="form-sidebar-desc reveal">
              We read every brief personally. No automated matching.
              No algorithm decides who works on your project.
              A curatorial lead reviews each submission and responds
              within five business days.
            </p>
            <div class="form-trust-signals reveal">
              <div class="trust-signal">
                <span class="material-symbols-outlined trust-icon">verified</span>
                <span class="trust-text">All practitioners verified</span>
              </div>
              <div class="trust-signal">
                <span class="material-symbols-outlined trust-icon">lock</span>
                <span class="trust-text">Brief remains confidential</span>
              </div>
              <div class="trust-signal">
                <span class="material-symbols-outlined trust-icon">schedule</span>
                <span class="trust-text">Response within 5 days</span>
              </div>
            </div>
          </div>

          <form class="brief-form reveal" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="org-name" class="form-label">Organization</label>
              <input
                id="org-name"
                v-model="form.organization"
                type="text"
                class="form-input"
                placeholder="Your studio, agency, or organization"
                required
              />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="contact-name" class="form-label">Contact Name</label>
                <input
                  id="contact-name"
                  v-model="form.contactName"
                  type="text"
                  class="form-input"
                  placeholder="Full name"
                  required
                />
              </div>
              <div class="form-group">
                <label for="contact-email" class="form-label">Email</label>
                <input
                  id="contact-email"
                  v-model="form.email"
                  type="email"
                  class="form-input"
                  placeholder="you@organization.com"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label for="project-type" class="form-label">Engagement Type</label>
              <select id="project-type" v-model="form.engagementType" class="form-select" required>
                <option value="" disabled>Select engagement type</option>
                <option value="commission">Commission</option>
                <option value="residency">Residency</option>
                <option value="fellowship">Fellowship</option>
                <option value="consulting">Consulting Engagement</option>
                <option value="placement">Full-Time Placement</option>
              </select>
            </div>

            <div class="form-group">
              <label for="domain" class="form-label">Creative Domain</label>
              <select id="domain" v-model="form.domain" class="form-select" required>
                <option value="" disabled>Which district aligns with this project?</option>
                <option value="visual-art">Visual Art &amp; AI</option>
                <option value="generative-design">Generative Design</option>
                <option value="sound-spatial">Sound &amp; Spatial</option>
                <option value="architecture">Architecture &amp; Computation</option>
                <option value="motion-film">Motion &amp; Film</option>
                <option value="fashion">Fashion &amp; Material</option>
                <option value="strategy">Strategy &amp; Research</option>
                <option value="unsure">Not sure yet</option>
              </select>
            </div>

            <div class="form-group">
              <label for="brief" class="form-label">Project Brief</label>
              <textarea
                id="brief"
                v-model="form.brief"
                class="form-textarea"
                rows="6"
                placeholder="Describe the project, its goals, timeline, and what kind of practitioner you are looking for. The more context, the better our curatorial match."
                required
              />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="budget" class="form-label">Budget Range</label>
                <select id="budget" v-model="form.budget" class="form-select">
                  <option value="" disabled>Select range</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10-25k">$10,000 &ndash; $25,000</option>
                  <option value="25-50k">$25,000 &ndash; $50,000</option>
                  <option value="50-100k">$50,000 &ndash; $100,000</option>
                  <option value="over-100k">Over $100,000</option>
                  <option value="open">Open / Negotiable</option>
                </select>
              </div>
              <div class="form-group">
                <label for="timeline" class="form-label">Timeline</label>
                <select id="timeline" v-model="form.timeline" class="form-select">
                  <option value="" disabled>When does this start?</option>
                  <option value="immediately">Immediately</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="1-3-months">1&ndash;3 months</option>
                  <option value="3-6-months">3&ndash;6 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <button type="submit" class="form-submit" :disabled="isSubmitting">
              {{ isSubmitting ? 'Submitting...' : 'Submit Project Brief' }}
            </button>

            <p class="form-note">
              By submitting, you agree that this brief will be reviewed by the
              Meraki Road curatorial team. Your information remains confidential
              and is never shared without your consent.
            </p>
          </form>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — Return to Bridge
    ============================================= -->
    <section ref="ctaSection" class="intake-cta section-dark">
      <div class="section-narrow cta-inner">
        <h2 class="cta-title word-reveal">
          <em>The right project finds the right practitioner.</em>
        </h2>
        <div class="cta-buttons reveal">
          <NuxtLink to="/bridge" class="cta-button-ghost">Back to The Bridge &rarr;</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { useGsapScrollReveal, waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

/* -- SEO ---------------------------------------- */
useHead({
  title: 'Project Intake — The Bridge — Meraki Road',
  meta: [
    { name: 'description', content: 'Submit a project brief to The Bridge. Connect your organization with verified creative practitioners across twelve districts.' },
  ],
})

useSeoMeta({
  ogTitle: 'Project Intake — The Bridge — Meraki Road',
  ogDescription: 'Submit a project brief to connect with verified creative practitioners across twelve districts.',
  twitterTitle: 'Project Intake — The Bridge — Meraki Road',
  twitterDescription: 'Submit a project brief to connect with verified creative practitioners across twelve districts.',
})

/* -- Data --------------------------------------- */
interface Phase {
  number: string
  title: string
  body: string
  duration: string
}

const phases: Phase[] = [
  {
    number: '01',
    title: 'Brief Submission',
    body: 'You describe the project, its ambitions, and the kind of practitioner it requires. We ask for context, not specifications. The best briefs tell us what the work means, not just what it needs to look like.',
    duration: 'You submit. We read within 48 hours.',
  },
  {
    number: '02',
    title: 'Curatorial Match',
    body: 'A curatorial lead reviews your brief against our practitioner index. This is not keyword matching. It is a human assessment of creative alignment, availability, and fit. We may suggest districts you had not considered.',
    duration: '3-5 business days for initial response.',
  },
  {
    number: '03',
    title: 'Introduction & Terms',
    body: 'We introduce you to one to three practitioners who align with your brief. You meet, discuss the work, and agree on scope directly. The Bridge facilitates but does not mediate. The relationship belongs to you.',
    duration: 'Timeline varies by project complexity.',
  },
]

interface Sector {
  district: string
  name: string
  icon: string
  capability: string
}

const sectors: Sector[] = [
  { district: 'District 01', name: 'Voight Studio', icon: 'brush', capability: 'Visual art, AI-assisted image-making, mixed media installation' },
  { district: 'District 03', name: 'The Atelier', icon: 'design_services', capability: 'Generative design systems, parametric modeling, identity' },
  { district: 'District 04', name: 'Sonic Core', icon: 'graphic_eq', capability: 'Sound design, spatial audio, bioacoustic installation' },
  { district: 'District 05', name: 'The Monolith', icon: 'domain', capability: 'Architecture, spatial computing, parametric structures' },
  { district: 'District 06', name: 'The Frame', icon: 'photo_camera', capability: 'Photography, cinematography, motion and film' },
  { district: 'District 07', name: 'Fashion Atelier', icon: 'checkroom', capability: 'Fashion technology, computational textiles, material research' },
]

/* -- Form state --------------------------------- */
const form = reactive({
  organization: '',
  contactName: '',
  email: '',
  engagementType: '',
  domain: '',
  brief: '',
  budget: '',
  timeline: '',
})

const isSubmitting = ref(false)

function handleSubmit() {
  isSubmitting.value = true
  // Placeholder for actual submission logic
  setTimeout(() => {
    isSubmitting.value = false
    alert('Brief submitted. Our curatorial team will respond within five business days.')
  }, 1500)
}

/* -- Scroll reveal ------------------------------ */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

const processSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(processSection, '.reveal', { stagger: 0.1 })
useWordReveal(processSection, '.word-reveal')

const sectorSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(sectorSection, '.reveal', { stagger: 0.08 })
useWordReveal(sectorSection, '.word-reveal')

const formSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(formSection, '.reveal', { stagger: 0.08 })
useWordReveal(formSection, '.word-reveal')

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
    /* Phase numbers staggered scale-in */
    const phaseNums = processSection.value?.querySelectorAll('.phase-number')
    phaseNums?.forEach((el, i) => {
      gsap.from(el, {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        delay: i * 0.12,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    })

    /* Sector icons staggered */
    const sectorIcons = sectorSection.value?.querySelectorAll('.sector-icon')
    sectorIcons?.forEach((el, i) => {
      gsap.from(el, {
        rotateY: 90,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
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
.intake-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  background-color: var(--color-background);
  text-align: center;
}

.intake-hero-title {
  font-size: var(--text-display);
  font-family: var(--font-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
  margin-top: var(--space-6);
  margin-bottom: var(--space-8);
  color: var(--color-ink);
}

.intake-hero-title em {
  font-style: italic;
}

.intake-hero-sub {
  font-size: var(--text-body);
  font-weight: 400;
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 52ch;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .intake-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-12);
  }
}

/* =============================================
   PROCESS — Three Phases
   ============================================= */
.intake-process {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-surface);
}

.process-header {
  text-align: center;
  margin-bottom: var(--space-12);
}

.process-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-3);
  margin-bottom: var(--space-4);
  line-height: var(--leading-tight);
}

.process-title em {
  font-style: italic;
}

.process-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 52ch;
  margin: 0 auto;
}

.phases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.phase-card {
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.phase-number-wrap {
  margin-bottom: var(--space-2);
}

.phase-number {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 200;
  color: var(--color-gold);
  line-height: 1;
}

.phase-title {
  font-family: var(--font-body);
  font-size: var(--text-h4);
  font-weight: 600;
  color: var(--color-ink);
  letter-spacing: var(--tracking-snug);
}

.phase-body {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  flex: 1;
}

.phase-duration {
  font-size: var(--text-caption);
  font-family: var(--font-mono);
  color: var(--color-gold);
  letter-spacing: var(--tracking-wide);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}

@media (max-width: 768px) {
  .intake-process {
    padding: var(--space-16) var(--content-padding);
  }

  .phases-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
}

/* =============================================
   SECTOR MAP
   ============================================= */
.sector-map {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-background);
}

.sector-header {
  margin-bottom: var(--space-12);
}

.sector-title {
  font-size: var(--text-h1);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-3);
  margin-bottom: var(--space-4);
  line-height: var(--leading-tight);
}

.sector-title em {
  font-style: italic;
}

.sector-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 52ch;
}

.sector-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.sector-card {
  display: flex;
  align-items: flex-start;
  gap: var(--space-5);
  padding: var(--space-6);
  transition: border-color 0.4s ease;
}

.sector-card:hover {
  border-color: rgba(184, 150, 78, 0.25);
}

.sector-icon-wrap {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(184, 150, 78, 0.2);
}

.sector-icon {
  font-size: 1.5rem;
  color: var(--color-gold);
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

.sector-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.sector-district {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
}

.sector-name {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  line-height: var(--leading-snug);
}

.sector-capability {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
  margin-top: var(--space-1);
}

@media (max-width: 768px) {
  .sector-grid {
    grid-template-columns: 1fr;
  }
}

/* =============================================
   BRIEF FORM — 1/3 sidebar + 2/3 form
   ============================================= */
.intake-form {
  padding: var(--space-24) var(--content-padding);
  background: var(--color-surface);
}

.form-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: var(--space-16);
  align-items: start;
}

.form-sidebar-title {
  font-size: var(--text-h2);
  font-family: var(--font-display);
  font-weight: 300;
  color: var(--color-ink);
  margin-top: var(--space-3);
  margin-bottom: var(--space-4);
  line-height: var(--leading-tight);
}

.form-sidebar-title em {
  font-style: italic;
}

.form-sidebar-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-8);
}

.form-trust-signals {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.trust-signal {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.trust-icon {
  font-size: 18px;
  color: var(--color-gold);
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

.trust-text {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
}

/* Form fields */
.brief-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  flex: 1;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
}

.form-label {
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-secondary);
}

.form-input,
.form-select,
.form-textarea {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-ink);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  padding: var(--space-3) var(--space-4);
  transition: border-color var(--duration-normal) ease,
              box-shadow var(--duration-normal) ease;
  -webkit-appearance: none;
  appearance: none;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-gold);
  box-shadow: 0 0 0 3px rgba(184, 150, 78, 0.1);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--color-text-muted);
}

.form-select {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' fill='none' stroke='%236B6B73' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-4) center;
  padding-right: var(--space-8);
}

.form-textarea {
  resize: vertical;
  min-height: 140px;
  line-height: var(--leading-normal);
}

.form-submit {
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
  align-self: flex-start;
  transition: opacity var(--duration-normal) ease,
              transform var(--duration-normal) ease;
}

.form-submit:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}

.form-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-submit:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

.form-note {
  font-size: var(--text-caption);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
  max-width: 48ch;
}

@media (max-width: 900px) {
  .form-layout {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}

/* =============================================
   CTA
   ============================================= */
.intake-cta {
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
  max-width: 22ch;
}

.cta-title em {
  font-style: italic;
}

.cta-buttons {
  display: flex;
  gap: var(--space-4);
}

.cta-button-ghost {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  transition: opacity var(--duration-normal) ease;
}

.cta-button-ghost:hover {
  opacity: 0.7;
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
