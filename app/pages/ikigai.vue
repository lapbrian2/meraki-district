<template>
  <div class="ikigai-page">

    <!-- ============================================
         HERO — Ikigai Lab
    ============================================= -->
    <section ref="heroSection" class="ikigai-hero section section-dark">
      <div class="section-default hero-inner">
        <p class="overline reveal">Ikigai Lab</p>
        <h1 class="ikigai-hero-title word-reveal">
          <em>The Alignment</em>
        </h1>
        <p class="ikigai-hero-sub reveal">
          Discover where your craft belongs within the eleven districts.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         THE RITUAL — 4-step interactive flow
    ============================================= -->
    <section ref="ritualSection" class="ikigai-ritual section section-dark">

      <!-- Progress bar -->
      <div class="progress-bar" aria-hidden="true">
        <div class="progress-fill" :style="{ width: progressPercent + '%' }" />
      </div>

      <!-- Step 1: What drives your practice? -->
      <Transition name="step-fade" mode="out-in">
        <div v-if="currentStep === 1" key="step-1" class="step-container">
          <div class="section-default">
            <p class="step-label">Step 1 of 4</p>
            <h2 class="step-question"><em>What drives your practice?</em></h2>
            <div class="card-grid card-grid--2x2">
              <button
                v-for="(option, i) in driveOptions"
                :key="i"
                class="ritual-card vellum-card"
                :class="{ selected: selections.drive === i }"
                @click="selections.drive = i"
              >
                <span class="ritual-card-icon" aria-hidden="true">{{ option.icon }}</span>
                <span class="ritual-card-text">{{ option.label }}</span>
              </button>
            </div>
            <div class="step-nav">
              <button
                class="step-continue"
                :disabled="selections.drive === null"
                @click="currentStep = 2"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Step 2: What's your primary medium? -->
      <Transition name="step-fade" mode="out-in">
        <div v-if="currentStep === 2" key="step-2" class="step-container">
          <div class="section-default">
            <p class="step-label">Step 2 of 4</p>
            <h2 class="step-question"><em>What's your primary medium?</em></h2>
            <div class="card-grid card-grid--3x2">
              <button
                v-for="(option, i) in mediumOptions"
                :key="i"
                class="ritual-card vellum-card"
                :class="{ selected: selections.medium === i }"
                @click="selections.medium = i"
              >
                <span class="ritual-card-icon" aria-hidden="true">{{ option.icon }}</span>
                <span class="ritual-card-text">{{ option.label }}</span>
              </button>
            </div>
            <div class="step-nav">
              <button class="step-back" @click="currentStep = 1">Back</button>
              <button
                class="step-continue"
                :disabled="selections.medium === null"
                @click="currentStep = 3"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Step 3: What matters more? -->
      <Transition name="step-fade" mode="out-in">
        <div v-if="currentStep === 3" key="step-3" class="step-container">
          <div class="section-default">
            <p class="step-label">Step 3 of 4</p>
            <h2 class="step-question"><em>What matters more?</em></h2>
            <div class="card-grid card-grid--binary">
              <button
                v-for="(option, i) in depthOptions"
                :key="i"
                class="ritual-card ritual-card--large vellum-card"
                :class="{ selected: selections.depth === i }"
                @click="selections.depth = i"
              >
                <span class="ritual-card-text ritual-card-text--large">{{ option.label }}</span>
                <span class="ritual-card-sub">{{ option.sub }}</span>
              </button>
            </div>
            <div class="step-nav">
              <button class="step-back" @click="currentStep = 2">Back</button>
              <button
                class="step-continue"
                :disabled="selections.depth === null"
                @click="currentStep = 4"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Step 4: Where are you in your journey? -->
      <Transition name="step-fade" mode="out-in">
        <div v-if="currentStep === 4" key="step-4" class="step-container">
          <div class="section-default">
            <p class="step-label">Step 4 of 4</p>
            <h2 class="step-question"><em>Where are you in your journey?</em></h2>
            <div class="card-grid card-grid--3col">
              <button
                v-for="(option, i) in journeyOptions"
                :key="i"
                class="ritual-card vellum-card"
                :class="{ selected: selections.journey === i }"
                @click="selections.journey = i"
              >
                <span class="ritual-card-text">{{ option.label }}</span>
                <span class="ritual-card-sub">{{ option.sub }}</span>
              </button>
            </div>
            <div class="step-nav">
              <button class="step-back" @click="currentStep = 3">Back</button>
              <button
                class="step-continue"
                :disabled="selections.journey === null"
                @click="completeRitual"
              >
                Reveal My Alignment
              </button>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Result -->
      <Transition name="result-reveal">
        <div v-if="currentStep === 5" key="result" class="step-container result-container">
          <div class="section-narrow result-inner">
            <p class="result-overline overline">Your Alignment</p>
            <h2 class="result-district-name"><em>{{ resultDistrict.name }}</em></h2>
            <p class="result-subtitle">{{ resultDistrict.subtitle }}</p>
            <div class="result-rule" aria-hidden="true" />
            <p class="result-description">{{ resultDistrict.description }}</p>
            <p class="result-alignment-note">
              Your alignment suggests a practice rooted in making.
              {{ resultDistrict.name }} is where craft meets production.
            </p>
            <div class="result-actions">
              <NuxtLink :to="'/districts/' + resultDistrict.slug" class="result-btn result-btn--primary">
                Enter the District
              </NuxtLink>
              <button class="result-btn result-btn--ghost" @click="resetRitual">
                Retake the Alignment
              </button>
            </div>
          </div>
        </div>
      </Transition>

    </section>

  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'
import { useDistricts } from '~/composables/useDistricts'

/* -- SEO ---------------------------------------- */
useHead({
  title: 'The Alignment — Meraki Road',
  meta: [
    { name: 'description', content: 'Discover where your creative practice belongs within the eleven districts of Meraki Road. An interactive alignment ritual for practitioners.' },
  ],
})

useSeoMeta({
  ogTitle: 'The Alignment — Meraki Road',
  ogDescription: 'Discover where your creative practice belongs within the eleven districts of Meraki Road.',
  twitterTitle: 'The Alignment — Meraki Road',
  twitterDescription: 'Discover where your creative practice belongs within the eleven districts of Meraki Road.',
})

/* -- Districts data ----------------------------- */
const { districts } = useDistricts()
const resultDistrict = computed(() => {
  return districts.find(d => d.slug === 'voight-studio')!
})

/* -- Section refs ------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
const ritualSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Ritual state ------------------------------- */
const currentStep = ref(1)

const selections = reactive<{
  drive: number | null
  medium: number | null
  depth: number | null
  journey: number | null
}>({
  drive: null,
  medium: null,
  depth: null,
  journey: null,
})

const progressPercent = computed(() => {
  if (currentStep.value === 5) return 100
  return (currentStep.value - 1) * 25
})

function completeRitual() {
  currentStep.value = 5
  // Scroll to top of ritual section
  nextTick(() => {
    ritualSection.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

function resetRitual() {
  selections.drive = null
  selections.medium = null
  selections.depth = null
  selections.journey = null
  currentStep.value = 1
  nextTick(() => {
    ritualSection.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

/* -- Option data -------------------------------- */
const driveOptions = [
  { icon: '\u2728', label: 'Making things that didn\u2019t exist before' },
  { icon: '\u29D7', label: 'Understanding systems and patterns' },
  { icon: '\u27A1', label: 'Connecting people to ideas' },
  { icon: '\u25C8', label: 'Preserving what matters' },
]

const mediumOptions = [
  { icon: '\u25D0', label: 'Visual Art' },
  { icon: '\u266B', label: 'Sound & Music' },
  { icon: '\u270E', label: 'Written Word' },
  { icon: '\u2318', label: 'Code & Systems' },
  { icon: '\u2B23', label: 'Physical Objects' },
  { icon: '\u25B6', label: 'Motion & Film' },
]

const depthOptions = [
  { label: 'Depth over breadth', sub: 'Go deep into one discipline. Master the edges.' },
  { label: 'Breadth over depth', sub: 'Move across disciplines. Connect the dots.' },
]

const journeyOptions = [
  { label: 'Beginning', sub: 'Still finding the path' },
  { label: 'Practicing', sub: 'Building the body of work' },
  { label: 'Mastering', sub: 'Refining what\u2019s already strong' },
]
</script>

<style scoped>
/* ═══════════════════════════════════════════════
   IKIGAI PAGE — The Alignment Ritual (Dark Theme)
   ═══════════════════════════════════════════════ */

/* ─── Hero ─── */
.ikigai-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  min-height: 50vh;
  display: flex;
  align-items: flex-end;
  position: relative;
  text-align: center;
  background: radial-gradient(circle at center, rgba(184, 150, 78, 0.06) 0%, rgba(10, 10, 10, 1) 70%);
}

.hero-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ikigai-hero-title {
  font-size: var(--text-display);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-display);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  text-shadow: 0 0 30px rgba(184, 150, 78, 0.15);
}

.ikigai-hero-sub {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 45ch;
}

/* ─── Ritual Section ─── */
.ikigai-ritual {
  position: relative;
  min-height: 70vh;
}

/* ─── Progress Bar ─── */
.progress-bar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(184, 150, 78, 0.12);
  z-index: 10;
}

.progress-fill {
  height: 100%;
  background: var(--color-gold);
  transition: width 0.6s var(--ease-out);
}

/* ─── Step Container ─── */
.step-container {
  padding-top: var(--space-16);
  padding-bottom: var(--space-16);
}

.step-label {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0.6;
  margin-bottom: var(--space-4);
  text-align: center;
}

.step-question {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  text-align: center;
  margin-bottom: var(--space-12);
  line-height: var(--leading-snug);
}

/* ─── Card Grid ─── */
.card-grid {
  display: grid;
  gap: var(--space-4);
  max-width: 680px;
  margin: 0 auto;
}

.card-grid--2x2 {
  grid-template-columns: 1fr 1fr;
}

.card-grid--3x2 {
  grid-template-columns: 1fr 1fr 1fr;
}

.card-grid--binary {
  grid-template-columns: 1fr 1fr;
  max-width: 600px;
}

.card-grid--3col {
  grid-template-columns: 1fr 1fr 1fr;
}

/* ─── Ritual Cards ─── */
.ritual-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-8) var(--space-4);
  cursor: pointer;
  text-align: center;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
              border-color 0.4s ease,
              background 0.4s ease,
              box-shadow 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.ritual-card:hover {
  transform: translateY(-4px);
  border-color: rgba(184, 150, 78, 0.3);
}

.ritual-card.selected {
  border-color: var(--color-gold);
  background: rgba(184, 150, 78, 0.08);
  box-shadow: 0 20px 60px -10px rgba(0,0,0,0.5), 0 0 40px -10px rgba(184, 150, 78, 0.2);
}

.ritual-card:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

.ritual-card-icon {
  font-size: 1.75rem;
  line-height: 1;
  opacity: 0.6;
}

.ritual-card.selected .ritual-card-icon {
  opacity: 1;
}

.ritual-card-text {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: 500;
  color: var(--color-dark-secondary);
  line-height: var(--leading-normal);
}

.ritual-card.selected .ritual-card-text {
  color: var(--color-dark-text);
}

.ritual-card-text--large {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-snug);
}

.ritual-card-sub {
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
}

.ritual-card--large {
  padding: var(--space-12) var(--space-8);
}

/* ─── Step Navigation ─── */
.step-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-8);
  margin-top: var(--space-12);
}

.step-continue {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  padding: var(--space-4) var(--space-12);
  border: 1px solid var(--color-gold);
  color: var(--color-dark-bg);
  background-color: var(--color-gold);
  transition: background-color var(--duration-normal) ease,
              border-color var(--duration-normal) ease,
              opacity var(--duration-normal) ease;
}

.step-continue:hover:not(:disabled) {
  background-color: #a07f3e;
  border-color: #a07f3e;
}

.step-continue:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.step-continue:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

.step-back {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  background: transparent;
  border: none;
  padding: var(--space-2) var(--space-4);
  transition: color var(--duration-fast) ease;
}

.step-back:hover {
  color: var(--color-dark-text);
}

.step-back:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

/* ─── Step Transitions ─── */
.step-fade-enter-active,
.step-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s var(--ease-out);
}

.step-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.step-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* ─── Result ─── */
.result-container {
  padding-top: var(--space-24);
  padding-bottom: var(--space-24);
}

.result-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.result-overline {
  margin-bottom: var(--space-6);
}

.result-district-name {
  font-family: var(--font-display);
  font-size: var(--text-display);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  line-height: var(--leading-display);
  letter-spacing: var(--tracking-hero);
  margin-bottom: var(--space-3);
  text-shadow: 0 0 40px rgba(184, 150, 78, 0.2);
}

.result-subtitle {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0.6;
  margin-bottom: var(--space-8);
}

.result-rule {
  width: 48px;
  height: 1px;
  background: var(--color-gold);
  opacity: 0.3;
  margin-bottom: var(--space-8);
}

.result-description {
  font-size: var(--text-body);
  color: var(--color-dark-secondary);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin-bottom: var(--space-6);
}

.result-alignment-note {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-muted);
  line-height: var(--leading-snug);
  max-width: 40ch;
  margin-bottom: var(--space-12);
}

.result-actions {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  flex-wrap: wrap;
  justify-content: center;
}

.result-btn {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  padding: var(--space-4) var(--space-8);
  transition: background-color var(--duration-normal) ease,
              border-color var(--duration-normal) ease,
              color var(--duration-normal) ease;
}

.result-btn:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

.result-btn--primary {
  border: 1px solid var(--color-gold);
  color: var(--color-dark-bg);
  background-color: var(--color-gold);
}

.result-btn--primary:hover {
  background-color: #a07f3e;
  border-color: #a07f3e;
}

.result-btn--ghost {
  border: 1px solid rgba(184, 150, 78, 0.3);
  color: var(--color-dark-muted);
  background: transparent;
}

.result-btn--ghost:hover {
  border-color: var(--color-gold);
  color: var(--color-dark-text);
}

/* ─── Result Reveal Transition ─── */
.result-reveal-enter-active {
  transition: opacity 0.8s ease, transform 0.8s var(--ease-out);
}

.result-reveal-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .ikigai-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-16);
    min-height: auto;
  }

  .card-grid--2x2,
  .card-grid--binary {
    grid-template-columns: 1fr;
  }

  .card-grid--3x2,
  .card-grid--3col {
    grid-template-columns: 1fr 1fr;
  }

  .ritual-card--large {
    padding: var(--space-8) var(--space-6);
  }

  .step-container {
    padding-top: var(--space-8);
    padding-bottom: var(--space-8);
  }

  .result-container {
    padding-top: var(--space-16);
    padding-bottom: var(--space-16);
  }

  .result-actions {
    flex-direction: column;
    width: 100%;
  }

  .result-btn {
    width: 100%;
    text-align: center;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .step-continue {
    min-height: 44px;
  }

  .step-back {
    min-height: 44px;
  }
}

@media (max-width: 480px) {
  .card-grid--3x2,
  .card-grid--3col {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ikigai-hero-title {
    text-shadow: none;
  }

  .result-district-name {
    text-shadow: none;
  }

  .step-fade-enter-active,
  .step-fade-leave-active,
  .result-reveal-enter-active {
    transition: none;
  }

  .ritual-card {
    transition: border-color 0.2s ease, background 0.2s ease;
  }

  .ritual-card:hover {
    transform: none;
  }
}
</style>
