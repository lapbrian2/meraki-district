<template>
  <footer ref="footerRef" class="footer section-dark">
    <div class="footer-inner">
      <div class="footer-brand reveal">
        <p class="footer-logo">Meraki District</p>
        <p class="footer-tagline">A cultural ecosystem for AI-native creators.</p>
        <div class="footer-newsletter">
          <p class="footer-newsletter-label">Dispatches from the District</p>
          <form class="footer-newsletter-form" @submit.prevent="submit" aria-label="Newsletter signup">
            <input
              v-model="email"
              type="email"
              placeholder="your@email.com"
              class="footer-newsletter-input"
              aria-label="Email address for newsletter"
              :disabled="status === 'success'"
              @focus="reset"
            />
            <button
              type="submit"
              class="footer-newsletter-btn"
              :disabled="status === 'success' || status === 'submitting'"
            >
              {{ status === 'submitting' ? 'Sending…' : status === 'success' ? 'Subscribed' : 'Subscribe' }}
            </button>
          </form>
          <p v-if="status === 'success'" class="footer-newsletter-feedback footer-newsletter-success">
            You're on the list.
          </p>
          <p v-if="status === 'error'" class="footer-newsletter-feedback footer-newsletter-error">
            {{ errorMessage }}
          </p>
        </div>
      </div>

      <div class="footer-col reveal">
        <h4 class="overline">Navigate</h4>
        <ul>
          <li><NuxtLink to="/quarters">Quarters</NuxtLink></li>
          <li><NuxtLink to="/the-road">The Road</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/apply">Apply</NuxtLink></li>
        </ul>
      </div>

      <div class="footer-col reveal">
        <h4 class="overline">Legal</h4>
        <ul>
          <li><NuxtLink to="/privacy">Privacy</NuxtLink></li>
          <li><NuxtLink to="/terms">Terms</NuxtLink></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom reveal">
      <p>&copy; {{ year }} Meraki Productions Ltd. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useEmailCollection } from '~/composables/useEmailCollection'
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'

const year = computed(() => new Date().getFullYear())
const { email, status, errorMessage, submit, reset } = useEmailCollection('newsletter')

const footerRef = ref<HTMLElement | null>(null)
useGsapScrollReveal(footerRef, '.reveal', { stagger: 0.12 })
</script>

<style scoped>
.footer {
  padding: var(--space-16) var(--content-padding) var(--space-8);
  border-top: none;
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: var(--content-padding);
  right: var(--content-padding);
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--color-gold) 20%,
    var(--color-gold) 80%,
    transparent
  );
  opacity: 0.4;
}

.footer-inner {
  max-width: var(--width-wide);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--space-12);
  padding-bottom: var(--space-16);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-logo {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-3);
}

.footer-tagline {
  color: var(--color-dark-muted);
  font-size: var(--text-small);
  max-width: 30ch;
}

.footer-newsletter {
  margin-top: var(--space-8);
}

.footer-newsletter-label {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  margin-bottom: var(--space-3);
  max-width: none;
}

.footer-newsletter-form {
  display: flex;
  gap: 0;
  max-width: 320px;
}

.footer-newsletter-input {
  flex: 1;
  padding: var(--space-3) var(--space-4);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-right: none;
  color: var(--color-dark-text);
  font-family: var(--font-body);
  font-size: var(--text-small);
  transition: border-color var(--duration-fast) ease;
}

.footer-newsletter-input::placeholder {
  color: var(--color-dark-muted);
}

.footer-newsletter-input:focus {
  border-color: var(--color-gold);
  outline: none;
}

.footer-newsletter-input:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: -1px;
}

.footer-newsletter-btn {
  padding: var(--space-3) var(--space-6);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--color-dark-text);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  transition: border-color var(--duration-fast) ease,
              color var(--duration-fast) ease;
}

.footer-newsletter-btn:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
}

.footer-newsletter-btn:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
}

.footer-col .overline {
  font-weight: 500;
}

.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-top: var(--space-4);
}

.footer-col a {
  color: var(--color-dark-muted);
  font-size: var(--text-small);
  background-image: linear-gradient(var(--color-gold), var(--color-gold));
  transition: color var(--duration-fast) ease,
              background-size var(--duration-normal) ease;
}

.footer-col a:hover {
  color: var(--color-dark-text);
}

.footer-bottom {
  max-width: var(--width-wide);
  margin: var(--space-8) auto 0;
  text-align: center;
}

.footer-bottom p {
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  max-width: none;
}

.footer-newsletter-input:disabled,
.footer-newsletter-btn:disabled {
  opacity: 0.5;
}

.footer-newsletter-feedback {
  margin-top: var(--space-2);
  font-size: var(--text-caption);
  max-width: none;
}

.footer-newsletter-success {
  color: var(--color-gold);
}

.footer-newsletter-error {
  color: #e55;
}

@media (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .footer-newsletter-form {
    max-width: none;
  }
}
</style>
