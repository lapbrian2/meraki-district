<template>
  <div>
    <section ref="section" class="page-hero section section-dark">
      <div class="section-narrow">
        <p class="overline reveal">Join the District</p>
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

        <form class="apply-form reveal" @submit.prevent="submit">
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
              :disabled="status === 'success'"
            >
              Notify Me
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
  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useEmailCollection } from '~/composables/useEmailCollection'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal')

const { email, status, errorMessage, submit, reset } = useEmailCollection('apply')

useHead({
  title: 'Apply — Meraki District',
  meta: [
    { name: 'description', content: 'Apply to join Meraki District. For creators, thinkers, and builders.' },
  ],
})
</script>

<style scoped>
.page-hero {
  padding-top: calc(var(--space-48) + 4rem);
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
  outline: none;
  transition: border-color var(--duration-fast) ease;
}

.apply-input::placeholder {
  color: var(--color-dark-muted);
}

.apply-input:focus {
  border-color: var(--color-gold);
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
  color: #e55;
}

@media (max-width: 768px) {
  .page-hero {
    padding-top: calc(var(--space-24) + 3rem);
    padding-bottom: var(--space-16);
    min-height: auto;
  }

  .apply-form {
    max-width: none;
  }
}
</style>
