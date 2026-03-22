<template>
  <div class="apply-page">

    <!-- ============================================
         HERO — The ritual begins
    ============================================= -->
    <section ref="heroSection" class="apply-hero section section-dark">
      <div class="hero-atmosphere" aria-hidden="true" />
      <div class="section-default">
        <p class="overline reveal">Application</p>
        <h1 class="apply-hero-title word-reveal">
          <em>The road is for those who walk it.</em>
        </h1>
        <p class="apply-hero-sub reveal">
          Meraki Road is for practitioners at every stage — from first steps
          to established mastery. Show us where you are. We'll meet you there.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         THREE-PHASE PROCESS — Vertical numbered steps
    ============================================= -->
    <section ref="processSection" class="apply-process section section-dark">
      <div class="section-default">
        <div class="process-header">
          <p class="overline reveal">The Process</p>
          <h2 class="process-title word-reveal"><em>Three steps to get started</em></h2>
        </div>

        <div class="process-steps">
          <div
            v-for="(step, i) in steps"
            :key="step.number"
            class="process-step reveal"
          >
            <div class="step-number-col">
              <span class="step-number">{{ step.number }}</span>
              <div v-if="i < steps.length - 1" class="step-connector" aria-hidden="true" />
            </div>
            <div class="step-content">
              <p class="step-phase">Phase {{ step.number }}</p>
              <h3 class="step-title"><em>{{ step.title }}</em></h3>
              <p class="step-desc">{{ step.description }}</p>
            </div>
          </div>
        </div>

        <p class="response-timeline stamped-overline reveal">Response within 14 days</p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — Email signup as entry request
    ============================================= -->
    <section ref="ctaSection" class="apply-cta section section-dark">
      <div class="section-narrow cta-inner">
        <h2 class="cta-title word-reveal">
          <em>Start the conversation.</em>
        </h2>
        <p class="cta-sub reveal">
          Drop your email below. We'll send you everything you need to get started.
        </p>

        <form class="entry-form reveal" @submit.prevent="submit" aria-label="Entry request signup">
          <div class="entry-form-row">
            <div class="entry-input-wrap">
              <input
                v-model="email"
                type="email"
                placeholder="your@email.com"
                class="entry-input"
                aria-label="Email address"
                :disabled="status === 'success'"
                @focus="reset"
              />
              <span class="entry-input-border" aria-hidden="true" />
            </div>
            <button
              type="submit"
              class="entry-btn"
              :disabled="status === 'success' || status === 'submitting'"
            >
              {{ status === 'submitting' ? 'Sending\u2026' : status === 'success' ? 'Sent' : 'Initiate Entry Request' }}
            </button>
          </div>
          <p v-if="status === 'success'" class="entry-feedback entry-success">
            Received. You will hear from us when the next review window opens.
          </p>
          <p v-if="status === 'error'" class="entry-feedback entry-error">
            {{ errorMessage }}
          </p>
        </form>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CLOSING — Philosophy statement
    ============================================= -->
    <section ref="closingSection" class="apply-closing section section-dark">
      <div class="section-narrow closing-inner">
        <blockquote class="closing-quote reveal">
          <p>
            <em>
              Whether you're just starting or deep into your practice,
              the road meets you where you are. All we ask is that
              you bring real work and honest ambition. That's enough.
            </em>
          </p>
        </blockquote>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'
import { useEmailCollection } from '~/composables/useEmailCollection'

/* -- SEO ---------------------------------------- */
useHead({
  title: 'Apply — Meraki Road',
  meta: [
    { name: 'description', content: 'Apply to join Meraki Road. A three-phase process for creators, researchers, and builders with a demonstrated body of work.' },
  ],
})

useSeoMeta({
  ogTitle: 'Apply — Meraki Road',
  ogDescription: 'Apply to join Meraki Road. A three-phase process for creators, researchers, and builders who refuse to choose between ambition and integrity.',
  twitterTitle: 'Apply — Meraki Road',
  twitterDescription: 'Apply to join Meraki Road. A three-phase process for creators, researchers, and builders who refuse to choose between ambition and integrity.',
})

/* -- Email collection --------------------------- */
const { email, status, errorMessage, submit, reset } = useEmailCollection('apply')

/* -- Section refs ------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
const processSection = ref<HTMLElement | null>(null)
const ctaSection = ref<HTMLElement | null>(null)
const closingSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

useGsapScrollReveal(processSection, '.reveal', { stagger: 0.15 })
useWordReveal(processSection, '.word-reveal')

useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal')

useGsapScrollReveal(closingSection, '.reveal')

/* -- GSAP connector draw-in animation ----------- */
let ctx: gsap.Context | null = null

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    const connectors = processSection.value?.querySelectorAll('.step-connector')
    if (connectors) {
      connectors.forEach((connector) => {
        gsap.from(connector, {
          scaleY: 0,
          transformOrigin: 'top center',
          duration: 0.8,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: connector,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })
    }
  })
})

onUnmounted(() => {
  ctx?.revert()
})

/* -- Data --------------------------------------- */
const steps = [
  {
    number: '01',
    title: 'Share Your Work',
    description: 'Send us what you have. An image, portfolio or a body of work in progress. No minimum. Just real.',
  },
  {
    number: '02',
    title: 'A Conversation',
    description: 'We review your work and reach out. Not a gatekeeping exercise. A genuine exchange about where you are and where you want to go.',
  },
  {
    number: '03',
    title: 'Find Your District',
    description: 'Together we figure out which district fits your practice. You start as an Associate and grow from there.',
  },
]
</script>

<style scoped>
/* ═══════════════════════════════════════════════
   APPLY PAGE — Ritual Application (Dark Theme)
   ═══════════════════════════════════════════════ */

/* ─── Hero ─── */
.apply-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  min-height: 60vh;
  display: flex;
  align-items: flex-end;
  position: relative;
  background: radial-gradient(circle at center, rgba(148, 67, 40, 0.08) 0%, rgba(10, 10, 10, 1) 70%);
  overflow: hidden;
}

.hero-atmosphere {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 80%, rgba(184,150,78,0.04) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(148,67,40,0.03) 0%, transparent 50%);
  animation: atmosphereShift 20s linear infinite;
  pointer-events: none;
}

@keyframes atmosphereShift {
  0% {
    background-position: 0% 0%, 100% 100%;
  }
  50% {
    background-position: 100% 100%, 0% 0%;
  }
  100% {
    background-position: 0% 0%, 100% 100%;
  }
}

.apply-hero-title {
  font-size: var(--text-display);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-display);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  max-width: 18ch;
  text-shadow: 0 0 30px rgba(148, 67, 40, 0.2);
}

.apply-hero-sub {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
}

/* ─── Three-Phase Process ─── */
.process-header {
  margin-bottom: var(--space-16);
}

.process-title {
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.apply-process .section-default {
  display: flex;
  flex-direction: column;
}

.process-steps {
  display: flex;
  flex-direction: column;
}

.process-step {
  display: grid;
  grid-template-columns: 5rem 1fr;
  gap: var(--space-8);
  min-height: 10rem;
}

.step-number-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-number {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 300;
  font-style: italic;
  color: var(--color-gold);
  line-height: 1;
  margin-bottom: var(--space-4);
}

.step-connector {
  flex: 1;
  width: 1px;
  background: linear-gradient(
    to bottom,
    var(--color-gold),
    rgba(184, 150, 78, 0.1)
  );
  min-height: 3rem;
  animation: connectorPulse 3s ease-in-out infinite;
}

@keyframes connectorPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

.step-content {
  padding-bottom: var(--space-12);
}

.step-phase {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0.6;
  margin-bottom: var(--space-2);
}

.step-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-3);
}

.step-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
}

/* ─── CTA — Entry request form ─── */
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
  margin-bottom: var(--space-6);
}

.cta-sub {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 45ch;
  margin-bottom: var(--space-12);
}

.entry-form {
  width: 100%;
  max-width: 540px;
}

.entry-form-row {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.entry-input-wrap {
  position: relative;
  width: 100%;
}

.entry-input {
  width: 100%;
  padding: var(--space-4) 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(184, 150, 78, 0.4);
  color: var(--color-dark-text);
  font-family: var(--font-body);
  font-size: var(--text-body);
  text-align: center;
  transition: border-color var(--duration-fast) ease;
}

.entry-input::placeholder {
  color: var(--color-dark-muted);
}

.entry-input:focus {
  border-color: transparent;
  outline: none;
}

.entry-input:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

.entry-input-border {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0%;
  height: 2px;
  background: var(--color-gold);
  transform: translateX(-50%);
  transition: width 0.5s cubic-bezier(0.33, 1, 0.68, 1);
  pointer-events: none;
}

.entry-input:focus ~ .entry-input-border {
  width: 100%;
}

.entry-input:disabled {
  opacity: 0.5;
}

.entry-btn {
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
  transition: background-color var(--duration-normal) ease,
              border-color var(--duration-normal) ease;
  width: 100%;
}

.entry-btn:hover:not(:disabled) {
  background-color: #a07f3e;
  border-color: #a07f3e;
}

.entry-btn:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

.entry-btn:disabled {
  opacity: 0.5;
}

.entry-feedback {
  margin-top: var(--space-4);
  font-size: var(--text-small);
  text-align: center;
}

.entry-success {
  color: var(--color-gold);
}

.entry-error {
  color: var(--color-error);
}

/* ─── Response Timeline ─── */
.response-timeline {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-gold);
  text-align: center;
  margin-top: var(--space-8);
  padding: 6px 16px;
  border: 1px solid rgba(184, 150, 78, 0.3);
  display: inline-block;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
}

/* ─── Image reveal transition ─── */
.apply-page img {
  transition: filter 1.2s cubic-bezier(0.22, 1, 0.36, 1),
              transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

/* ─── Connector draw-in ─── */
.step-connector {
  transform-origin: top center;
}

@media (prefers-reduced-motion: reduce) {
  .apply-hero-title {
    text-shadow: none;
  }
  .step-connector {
    transform: none;
    animation: none;
    opacity: 0.4;
  }
  .hero-atmosphere {
    animation: none;
  }
  .entry-input-border {
    transition: none;
  }
}

/* ─── Closing Quote ─── */
.closing-inner {
  text-align: center;
  padding-top: var(--space-16);
  padding-bottom: var(--space-16);
}

.closing-quote {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-muted);
  line-height: var(--leading-snug);
  max-width: 40ch;
  margin: 0 auto;
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .apply-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-16);
    min-height: auto;
  }

  .apply-hero-title {
    max-width: none;
  }

  .process-step {
    grid-template-columns: 3.5rem 1fr;
    gap: var(--space-4);
    min-height: auto;
  }

  .step-content {
    padding-bottom: var(--space-8);
  }

  .entry-input {
    min-height: 44px;
  }

  .entry-btn {
    min-height: 44px;
  }
}
</style>
