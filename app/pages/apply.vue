<template>
  <div>
    <section ref="section" class="page-hero section section-dark">
      <div class="section-narrow">
        <p class="overline reveal">Join Meraki Road</p>
        <h1 class="page-hero-title reveal">
          Apply
        </h1>
        <p class="page-hero-sub reveal">
          We are accepting applications from creators, researchers, and builders with a demonstrated body of work.
        </p>
        <p class="page-hero-note reveal">
          Application process coming soon. Leave your email below and
          we’ll notify you when applications open.
        </p>

        <form class="apply-form reveal" @submit.prevent="submit" aria-label="Application notification signup">
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
            Thank you. We’ll be in touch when applications open.
          </p>
          <p v-if="status === 'error'" class="apply-feedback apply-error">
            {{ errorMessage }}
          </p>
        </form>
      </div>
    </section>

    <!-- What We Look For -->
    <section ref="criteriaSection" class="apply-criteria section">
      <div class="section-narrow">
        <p class="overline reveal">What We Look For</p>
        <h2 class="criteria-title reveal">Three things that matter</h2>
        <div class="criteria-grid">
          <div class="criteria-card reveal">
            <span class="criteria-number">01</span>
            <h3>A body of work</h3>
            <p>Finished projects that demonstrate your creative practice. We value depth over breadth and intentionality over volume.</p>
          </div>
          <div class="criteria-card reveal">
            <span class="criteria-number">02</span>
            <h3>A point of view</h3>
            <p>A clear perspective on your craft and the role AI plays in it. We are looking for practitioners who think about what they make and why.</p>
          </div>
          <div class="criteria-card reveal">
            <span class="criteria-number">03</span>
            <h3>Commitment to practice</h3>
            <p>Evidence that your creative work is ongoing and evolving. Meraki Road is built for people in active practice, not passive observation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- The Process -->
    <section ref="processSection" class="apply-process section section-dark">
      <div class="section-narrow">
        <p class="overline reveal">The Process</p>
        <h2 class="process-title reveal">How it works</h2>
        <div class="process-steps">
          <div class="process-step reveal">
            <span class="process-label">Step 1</span>
            <p>Submit your email to join the notification list. You will be among the first to receive the full application when it opens.</p>
          </div>
          <div class="process-step reveal">
            <span class="process-label">Step 2</span>
            <p>Complete your application with a portfolio, a statement of practice, and a brief description of what you hope to build within the ecosystem.</p>
          </div>
          <div class="process-step reveal">
            <span class="process-label">Step 3</span>
            <p>Applications are reviewed by the founding team and existing community members. Decisions are communicated within two weeks of submission.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useEmailCollection } from '~/composables/useEmailCollection'

const section = ref<HTMLElement | null>(null)
const criteriaSection = ref<HTMLElement | null>(null)
const processSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal')
useGsapScrollReveal(criteriaSection, '.reveal', { stagger: 0.12 })
useGsapScrollReveal(processSection, '.reveal', { stagger: 0.1 })

const { email, status, errorMessage, submit, reset } = useEmailCollection('apply')

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
.page-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-32);
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.page-hero-title {
  font-size: var(--text-display);
  line-height: var(--leading-tight);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  color: var(--color-dark-text);
}

.page-hero-sub {
  font-size: var(--text-h4);
  font-weight: 400;
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
  margin-bottom: var(--space-6);
}

.page-hero-note {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 45ch;
  margin-bottom: var(--space-8);
}

.apply-form {
  max-width: 420px;
}

.apply-form-row {
  display: flex;
  gap: 0;
}

.apply-input {
  flex: 1;
  padding: var(--space-4) var(--space-5);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
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
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--color-dark-text);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  transition: border-color var(--duration-fast) ease,
              color var(--duration-fast) ease;
}

.apply-btn:hover:not(:disabled) {
  border-color: var(--color-gold);
  color: var(--color-gold);
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

/* Criteria Section */
.apply-criteria {
  padding-top: var(--space-24);
  padding-bottom: var(--space-24);
}

.criteria-title {
  font-size: var(--text-h2);
  margin-top: var(--space-4);
  margin-bottom: var(--space-12);
}

.criteria-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.criteria-card {
  padding-top: var(--space-6);
  border-top: 1px solid var(--rule-color);
}

.criteria-number {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-gold-accessible);
  display: block;
  margin-bottom: var(--space-3);
}

.criteria-card h3 {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  margin-bottom: var(--space-3);
}

.criteria-card p {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
}

/* Process Section */
.apply-process {
  padding-top: var(--space-24);
  padding-bottom: var(--space-24);
}

.process-title {
  font-size: var(--text-h2);
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-12);
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.process-step {
  padding-bottom: var(--space-8);
  border-bottom: 1px solid rgba(250, 250, 249, 0.06);
}

.process-step:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.process-label {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  display: block;
  margin-bottom: var(--space-3);
}

.process-step p {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
}

@media (max-width: 768px) {
  .criteria-grid {
    grid-template-columns: 1fr;
  }

  .page-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-16);
    min-height: auto;
  }

  .apply-form {
    max-width: none;
  }
}
</style>
