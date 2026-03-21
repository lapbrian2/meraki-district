<template>
  <div class="apply-page">

    <!-- ============================================
         HERO — The ritual begins
    ============================================= -->
    <section ref="heroSection" class="apply-hero section section-dark">
      <div class="section-default">
        <p class="overline reveal">Application</p>
        <h1 class="apply-hero-title word-reveal">
          <em>The road is for those who walk it.</em>
        </h1>
        <p class="apply-hero-sub reveal">
          Meraki Road does not recruit. It recognizes. This process exists
          to ensure that every practitioner who enters the road carries the
          weight of real work behind them.
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
          <h2 class="process-title word-reveal"><em>Three phases, no shortcuts</em></h2>
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
              <h3 class="step-title"><em>{{ step.title }}</em></h3>
              <p class="step-desc">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — Email signup as entry request
    ============================================= -->
    <section ref="ctaSection" class="apply-cta section section-dark">
      <div class="section-narrow cta-inner">
        <h2 class="cta-title word-reveal">
          <em>Initiate your entry.</em>
        </h2>
        <p class="cta-sub reveal">
          Leave your email below. When the next review window opens,
          you will receive the full application directly.
        </p>

        <form class="entry-form reveal" @submit.prevent="submit" aria-label="Entry request signup">
          <div class="entry-form-row">
            <input
              v-model="email"
              type="email"
              placeholder="your@email.com"
              class="entry-input"
              aria-label="Email address"
              :disabled="status === 'success'"
              @focus="reset"
            />
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
              The selectivity is not a gate. It is a recognition that the work
              demands seriousness, and seriousness deserves a space built
              to hold it. If you have spent years in practice, this is
              the room that was built for you.
            </em>
          </p>
        </blockquote>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
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

/* -- Data --------------------------------------- */
const steps = [
  {
    number: '01',
    title: 'Express Interest',
    description: 'A declaration of creative intent. You submit your email and a brief description of your practice. This is not a portfolio review — it is a handshake.',
  },
  {
    number: '02',
    title: 'Portfolio Review',
    description: 'A multi-district committee reviews your body of work. They are looking for depth of practice, consistency of vision, and evidence that the work is alive and evolving.',
  },
  {
    number: '03',
    title: 'Invitation',
    description: 'If the work speaks, you receive an invitation to walk the road. Your profile enters the archive, your name enters the directory, and you gain access to The Bridge.',
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
}

.step-content {
  padding-bottom: var(--space-12);
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
  border-color: var(--color-gold);
  outline: none;
}

.entry-input:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
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
