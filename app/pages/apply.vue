<template>
  <div class="apply-page">

    <!-- ═══ HERO — Asymmetric editorial header ═══ -->
    <section ref="section" class="apply-hero section-dark">
      <div class="apply-hero-inner section-default">
        <div class="apply-hero-text">
          <p class="overline reveal">Join Meraki Road</p>
          <h1 class="apply-hero-title word-reveal">
            <span class="apply-hero-line">Apply</span>
          </h1>
          <p class="apply-hero-sub reveal">
            We are accepting applications from creators, researchers, and builders with a demonstrated body of work.
          </p>
          <p class="apply-hero-note reveal">
            Application process coming soon. Leave your email below and
            we'll notify you when applications open.
          </p>
        </div>

        <!-- Email form — bordered card -->
        <div class="apply-hero-form-card reveal">
          <span class="apply-form-label">Get Notified</span>
          <form class="apply-form" @submit.prevent="submit" aria-label="Application notification signup">
            <div class="apply-form-row">
              <input
                v-model="email"
                type="email"
                placeholder="your@email.com"
                class="apply-input"
                aria-label="Email address"
                :disabled="status === 'success'"
                @focus="reset"
              />
              <button
                type="submit"
                class="apply-btn"
                :disabled="status === 'success' || status === 'submitting'"
              >
                {{ status === 'submitting' ? 'Sending…' : status === 'success' ? 'Sent' : 'Notify Me' }}
              </button>
            </div>
            <p v-if="status === 'success'" class="apply-feedback apply-success">
              Thank you. We'll be in touch when applications open.
            </p>
            <p v-if="status === 'error'" class="apply-feedback apply-error">
              {{ errorMessage }}
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- ═══ CRITERIA — Stitch numbered list items ═══ -->
    <section ref="criteriaSection" class="apply-criteria section-dark">
      <div class="section-default">
        <div class="criteria-header">
          <p class="overline reveal">What We Look For</p>
          <h2 class="criteria-title word-reveal">Three things that matter</h2>
        </div>

        <div class="criteria-list">
          <div class="criteria-item reveal" v-for="(item, i) in criteria" :key="i">
            <div class="criteria-item-number">{{ item.number }}</div>
            <div class="criteria-item-rule" aria-hidden="true" />
            <div class="criteria-item-body">
              <h3 class="criteria-item-title">{{ item.title }}</h3>
              <p class="criteria-item-desc">{{ item.description }}</p>
            </div>
            <div class="criteria-item-tags">
              <span v-for="tag in item.tags" :key="tag" class="criteria-tag">{{ tag }}</span>
            </div>
            <span class="criteria-item-arrow" aria-hidden="true">&rarr;</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ PROCESS — Stitch step progression ═══ -->
    <section ref="processSection" class="apply-process section-dark">
      <div class="section-default">
        <div class="process-header">
          <p class="overline reveal">The Process</p>
          <h2 class="process-title word-reveal">How it works</h2>
        </div>

        <div class="process-grid">
          <div
            v-for="(step, i) in steps"
            :key="i"
            class="process-card reveal"
            :class="{ 'process-card--active': i === 0 }"
          >
            <div class="process-card-ordinal">{{ step.ordinal }}</div>
            <div class="process-card-connector" v-if="i < steps.length - 1" aria-hidden="true" />
            <span class="process-card-label">{{ step.label }}</span>
            <p class="process-card-desc">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ CTA — Bordered card container with dual buttons ═══ -->
    <section ref="ctaSection" class="apply-cta section-dark">
      <div class="section-narrow">
        <div class="cta-card reveal">
          <span class="cta-card-watermark" aria-hidden="true">MERAKI</span>
          <p class="cta-card-overline">Ready?</p>
          <h2 class="cta-card-heading word-reveal">
            Meet on Meraki Road.
          </h2>
          <p class="cta-card-sub">
            Eleven districts for creators who refuse to separate ambition from integrity.
          </p>
          <div class="cta-card-buttons">
            <NuxtLink to="/districts" class="cta-btn cta-btn--outline">
              Explore Districts
            </NuxtLink>
            <NuxtLink to="/the-road" class="cta-btn cta-btn--fill">
              Read the Manifesto
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'
import { useEmailCollection } from '~/composables/useEmailCollection'

const section = ref<HTMLElement | null>(null)
const criteriaSection = ref<HTMLElement | null>(null)
const processSection = ref<HTMLElement | null>(null)
const ctaSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(section, '.reveal')
useGsapScrollReveal(criteriaSection, '.reveal', { stagger: 0.12 })
useGsapScrollReveal(processSection, '.reveal', { stagger: 0.1 })
useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(section, '.word-reveal')
useWordReveal(criteriaSection, '.word-reveal')
useWordReveal(processSection, '.word-reveal')
useWordReveal(ctaSection, '.word-reveal')

const { email, status, errorMessage, submit, reset } = useEmailCollection('apply')

const criteria = [
  {
    number: '01',
    title: 'A body of work',
    description: 'Finished projects that demonstrate your creative practice. We value depth over breadth and intentionality over volume.',
    tags: ['Portfolio', 'Craft'],
  },
  {
    number: '02',
    title: 'A point of view',
    description: 'A clear perspective on your craft and the role AI plays in it. We are looking for practitioners who think about what they make and why.',
    tags: ['Perspective', 'Intent'],
  },
  {
    number: '03',
    title: 'Commitment to practice',
    description: 'Evidence that your creative work is ongoing and evolving. Meraki Road is built for people in active practice, not passive observation.',
    tags: ['Active', 'Evolving'],
  },
]

const steps = [
  {
    ordinal: 'I',
    label: 'Step 1',
    description: 'Submit your email to join the notification list. You will be among the first to receive the full application when it opens.',
  },
  {
    ordinal: 'II',
    label: 'Step 2',
    description: 'Complete your application with a portfolio, a statement of practice, and a brief description of what you hope to build across the districts.',
  },
  {
    ordinal: 'III',
    label: 'Step 3',
    description: 'Applications are reviewed by the founding team and existing community members. Decisions are communicated within two weeks of submission.',
  },
]

useHead({
  title: 'Apply — Meraki Road',
  meta: [
    { name: 'description', content: 'Apply to join Meraki Road. For creators, thinkers, and builders.' },
  ],
})

useSeoMeta({
  ogTitle: 'Apply — Meraki Road',
  ogDescription: 'Apply to join Meraki Road. For creators, thinkers, and builders who refuse to choose between ambition and integrity.',
  twitterTitle: 'Apply — Meraki Road',
  twitterDescription: 'Apply to join Meraki Road. For creators, thinkers, and builders who refuse to choose between ambition and integrity.',
})
</script>

<style scoped>
/* ═══════════════════════════════════════════════
   APPLY PAGE — Stitch Design System (Dark Theme)
   ═══════════════════════════════════════════════ */

/* ─── Hero ─── */
.apply-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-32);
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.apply-hero-inner {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: var(--space-16);
  align-items: start;
}

.apply-hero-text {
  padding-top: var(--space-4);
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
}

.apply-hero-sub {
  font-size: var(--text-h4);
  font-weight: 400;
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin-bottom: var(--space-6);
}

.apply-hero-note {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 45ch;
}

/* ─── Form Card (bordered Stitch card) ─── */
.apply-hero-form-card {
  border: 1px solid rgba(250, 250, 249, 0.12);
  padding: var(--space-8);
  position: relative;
  margin-top: var(--space-8);
}

.apply-form-label {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  display: block;
  margin-bottom: var(--space-6);
}

.apply-form {
  width: 100%;
}

.apply-form-row {
  display: flex;
  gap: 0;
}

.apply-input {
  flex: 1;
  padding: var(--space-4) var(--space-5);
  background: transparent;
  border: 1px solid rgba(250, 250, 249, 0.2);
  border-right: none;
  color: var(--color-dark-text);
  font-family: var(--font-body);
  font-size: var(--text-body);
  transition: border-color var(--duration-fast) ease;
}

.apply-input::placeholder {
  color: var(--color-dark-muted);
}

.apply-input:focus {
  border-color: var(--color-gold);
  outline: none;
}

.apply-input:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: -1px;
}

.apply-input:disabled {
  opacity: 0.5;
}

.apply-btn {
  padding: var(--space-4) var(--space-8);
  border: 1px solid rgba(250, 250, 249, 0.2);
  color: var(--color-dark-text);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  background: transparent;
  transition: border-color var(--duration-fast) ease,
              color var(--duration-fast) ease,
              background-color var(--duration-fast) ease;
  white-space: nowrap;
}

.apply-btn:hover:not(:disabled) {
  border-color: var(--color-gold);
  color: var(--color-background);
  background-color: var(--color-gold);
}

.apply-btn:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
}

.apply-btn:disabled {
  opacity: 0.5;
}

.apply-feedback {
  margin-top: var(--space-3);
  font-size: var(--text-small);
  max-width: none;
}

.apply-success {
  color: var(--color-gold);
}

.apply-error {
  color: var(--color-error);
}

/* ─── Criteria Section (Stitch numbered list) ─── */
.apply-criteria {
  padding: var(--space-32) var(--content-padding);
  background-color: var(--color-background);
}

.criteria-header {
  max-width: var(--width-default);
  margin: 0 auto var(--space-16);
}

.criteria-title {
  font-size: var(--text-h2);
  font-style: italic;
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.criteria-list {
  max-width: var(--width-default);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.criteria-item {
  display: grid;
  grid-template-columns: 3.5rem 1px 1fr auto auto;
  gap: var(--space-6);
  align-items: center;
  padding: var(--space-6) 0;
  border-bottom: 1px solid rgba(250, 250, 249, 0.08);
  position: relative;
  overflow: hidden;
}

.criteria-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(184, 150, 78, 0.05);
  transform: translateY(100%);
  transition: transform 0.7s ease;
  pointer-events: none;
  z-index: 0;
}

.criteria-item:hover::before {
  transform: translateY(0);
}

.criteria-item:first-child {
  border-top: 1px solid rgba(250, 250, 249, 0.08);
}

.criteria-item-number {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  font-weight: 500;
  color: var(--color-gold);
  letter-spacing: var(--tracking-mega-wide);
}

.criteria-item-rule {
  width: 1px;
  height: 100%;
  min-height: 2.5rem;
  background-color: rgba(250, 250, 249, 0.1);
}

.criteria-item-body {
  padding-right: var(--space-4);
}

.criteria-item-title {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-2);
}

.criteria-item-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}

.criteria-item-tags {
  display: flex;
  gap: var(--space-2);
}

.criteria-tag {
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  border: 1px solid rgba(250, 250, 249, 0.1);
  padding: var(--space-1) var(--space-3);
  white-space: nowrap;
}

.criteria-item-arrow {
  font-size: var(--text-h4);
  color: rgba(250, 250, 249, 0.2);
  transition: color var(--duration-fast) ease,
              transform var(--duration-fast) ease;
}

.criteria-item:hover .criteria-item-arrow {
  color: var(--color-gold);
  transform: translateX(4px);
}

/* ─── Process Section (Stitch progression grid) ─── */
.apply-process {
  padding: var(--space-32) var(--content-padding);
  background-color: var(--color-surface);
}

.process-header {
  max-width: var(--width-default);
  margin: 0 auto var(--space-16);
}

.process-title {
  font-size: var(--text-h2);
  font-style: italic;
  font-weight: 300;
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.process-grid {
  max-width: var(--width-default);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}

.process-card {
  position: relative;
  padding: var(--space-8);
  border: 1px solid rgba(250, 250, 249, 0.08);
  border-right: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.process-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(184, 150, 78, 0.05);
  transform: translateY(100%);
  transition: transform 0.7s ease;
  pointer-events: none;
}

.process-card:hover::before {
  transform: translateY(0);
}

.process-card:last-child {
  border-right: 1px solid rgba(250, 250, 249, 0.08);
}

.process-card--active {
  background-color: rgba(184, 150, 78, 0.04);
}

.process-card-ordinal {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 300;
  font-style: italic;
  color: var(--color-gold);
  opacity: 0.4;
  line-height: 1;
  margin-bottom: var(--space-6);
  position: relative;
  z-index: 1;
}

.process-card-connector {
  position: absolute;
  top: 50%;
  right: -1px;
  width: var(--space-8);
  height: 1px;
  background: linear-gradient(90deg, rgba(184, 150, 78, 0.3), rgba(184, 150, 78, 0));
  z-index: 1;
}

.process-card-label {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  display: block;
  margin-bottom: var(--space-4);
}

.process-card-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 30ch;
}

/* ─── CTA Section (bordered card with dual buttons) ─── */
.apply-cta {
  padding: var(--space-48) var(--content-padding);
  background-color: var(--color-background);
}

.cta-card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(250, 250, 249, 0.12);
  padding: var(--space-32) var(--space-16);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-card-watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-display);
  font-size: 20vw;
  font-weight: 300;
  font-style: italic;
  letter-spacing: var(--tracking-tight);
  white-space: nowrap;
  color: var(--color-ink);
  opacity: 0.03;
  pointer-events: none;
  user-select: none;
  line-height: 1;
}

.cta-card-overline {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}

.cta-card-heading {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  letter-spacing: var(--tracking-hero);
  line-height: var(--leading-display);
  margin-bottom: var(--space-6);
}

.cta-card-sub {
  font-family: var(--font-body);
  font-size: var(--text-small);
  letter-spacing: var(--tracking-wide);
  color: var(--color-dark-muted);
  max-width: 45ch;
  margin-bottom: var(--space-12);
}

.cta-card-buttons {
  display: flex;
  gap: var(--space-4);
  position: relative;
  z-index: 1;
}

.cta-btn {
  display: inline-block;
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  padding: var(--space-4) var(--space-8);
  transition: all var(--duration-normal) ease;
  background-image: none;
  text-decoration: none;
}

.cta-btn--outline {
  border: 1px solid rgba(250, 250, 249, 0.2);
  color: var(--color-dark-text);
  background: transparent;
}

.cta-btn--outline:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
  background-size: 0;
}

.cta-btn--fill {
  border: 1px solid var(--color-gold);
  color: var(--color-background);
  background-color: var(--color-gold);
}

.cta-btn--fill:hover {
  background-color: #a07f3e;
  border-color: #a07f3e;
  background-size: 0;
}

.cta-btn:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .apply-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-16);
    min-height: auto;
  }

  .apply-hero-inner {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .apply-hero-form-card {
    margin-top: var(--space-4);
  }

  .criteria-item {
    grid-template-columns: 3rem 1fr;
    gap: var(--space-3);
    padding: var(--space-5) 0;
  }

  .criteria-item-rule {
    display: none;
  }

  .criteria-item-number {
    grid-row: 1;
  }

  .criteria-item-body {
    grid-column: 1 / -1;
  }

  .criteria-item-tags {
    grid-column: 1 / -1;
  }

  .criteria-item-arrow {
    display: none;
  }

  .process-grid {
    grid-template-columns: 1fr;
  }

  .process-card {
    border-right: 1px solid rgba(250, 250, 249, 0.08);
    border-bottom: none;
  }

  .process-card:last-child {
    border-bottom: 1px solid rgba(250, 250, 249, 0.08);
  }

  .process-card-connector {
    display: none;
  }

  .cta-card {
    padding: var(--space-16) var(--space-6);
  }

  .cta-card-buttons {
    flex-direction: column;
    width: 100%;
  }

  .cta-btn {
    text-align: center;
    width: 100%;
  }

  .apply-criteria,
  .apply-process {
    padding-top: var(--space-16);
    padding-bottom: var(--space-16);
  }

  .apply-cta {
    padding-top: var(--space-24);
    padding-bottom: var(--space-24);
  }
}
</style>
