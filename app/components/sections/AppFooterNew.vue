<template>
  <footer ref="section" class="footer-new">
    <div class="section-wide">
      <!-- 4-column grid -->
      <div class="fn-grid">
        <!-- Col 1: Brand -->
        <div class="fn-brand reveal">
          <NuxtLink to="/" class="fn-logo">Meraki Road</NuxtLink>
          <p class="fn-tagline">
            Where craft meets culture. Eleven districts for practitioners
            who hold ambition and integrity as a single standard.
          </p>
        </div>

        <!-- Col 2: Pillars -->
        <nav class="fn-nav reveal" aria-label="Districts">
          <h4 class="fn-nav-heading">Districts</h4>
          <ul>
            <li><NuxtLink to="/districts/meraki-road">Meraki Road</NuxtLink></li>
            <li><NuxtLink to="/districts/ikigai-lab">Ikigai Lab</NuxtLink></li>
            <li><NuxtLink to="/districts/institute">Institute</NuxtLink></li>
            <li><NuxtLink to="/districts/publishing">Publishing</NuxtLink></li>
          </ul>
        </nav>

        <!-- Col 3: Institutional -->
        <nav class="fn-nav reveal" aria-label="About">
          <h4 class="fn-nav-heading">About</h4>
          <ul>
            <li><NuxtLink to="/fellowships">Fellowships</NuxtLink></li>
            <li><NuxtLink to="/verification">Verification</NuxtLink></li>
            <li><NuxtLink to="/the-road">Manifesto</NuxtLink></li>
            <li><NuxtLink to="/governance">Governance</NuxtLink></li>
          </ul>
        </nav>

        <!-- Col 4: Newsletter -->
        <div class="fn-newsletter reveal">
          <h4 class="fn-nav-heading">Newsletter</h4>
          <p class="fn-newsletter-text">
            Dispatches from inside the districts. No noise.
          </p>

          <form
            v-if="status !== 'success'"
            class="fn-newsletter-form"
            @submit.prevent="submit"
          >
            <div class="fn-input-wrap">
              <input
                v-model="email"
                type="email"
                placeholder="your@email.com"
                autocomplete="email"
                aria-label="Email address"
                :disabled="status === 'submitting'"
                @focus="reset"
              />
              <button
                type="submit"
                :disabled="status === 'submitting'"
                aria-label="Subscribe"
              >
                <span class="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <p v-if="status === 'error'" class="fn-error" role="alert">
              {{ errorMessage }}
            </p>
          </form>

          <p v-else class="fn-success">
            <span class="material-symbols-outlined fn-success-icon">check_circle</span>
            You're in. Watch your inbox.
          </p>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="fn-bottom">
        <p class="fn-copyright">&copy; 2026 Meraki Road</p>
        <nav class="fn-legal" aria-label="Legal">
          <NuxtLink to="/privacy">Privacy</NuxtLink>
          <span class="fn-divider" aria-hidden="true">|</span>
          <NuxtLink to="/terms">Terms</NuxtLink>
          <span class="fn-divider" aria-hidden="true">|</span>
          <NuxtLink to="/press">Press</NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useEmailCollection } from '~/composables/useEmailCollection'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal', { stagger: 0.1 })

const { email, status, errorMessage, submit, reset } = useEmailCollection('newsletter')
</script>

<style scoped>
.footer-new {
  background-color: var(--color-background);
  color: var(--color-dark-text);
  padding: var(--space-24) var(--content-padding) var(--space-8);
}

/* ─── Grid ─── */
.fn-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: var(--space-12);
  padding-bottom: var(--space-16);
  border-bottom: 1px solid var(--rule-color);
}

/* ─── Brand column ─── */
.fn-logo {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  letter-spacing: var(--tracking-tight);
  background-image: none;
  display: inline-block;
  margin-bottom: var(--space-4);
}

.fn-logo:hover {
  color: var(--color-gold);
}

.fn-tagline {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 30ch;
}

/* ─── Nav columns ─── */
.fn-nav-heading {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-text);
  margin-bottom: var(--space-6);
}

.fn-nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.fn-nav a {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  background-image: none;
  transition: color var(--duration-normal) ease;
}

.fn-nav a:hover {
  color: var(--color-gold);
}

/* ─── Newsletter ─── */
.fn-newsletter-text {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
  margin-bottom: var(--space-5);
}

.fn-newsletter-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.fn-input-wrap {
  display: flex;
  border: 1px solid var(--rule-color);
  transition: border-color var(--duration-normal) ease;
}

.fn-input-wrap:focus-within {
  border-color: var(--color-gold);
}

.fn-input-wrap input {
  flex: 1;
  background: transparent;
  border: none;
  padding: var(--space-3) var(--space-4);
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-dark-text);
  outline: none;
}

.fn-input-wrap input::placeholder {
  color: var(--color-dark-muted);
  opacity: 0.6;
}

.fn-input-wrap button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-3) var(--space-4);
  color: var(--color-dark-muted);
  transition: color var(--duration-normal) ease,
              background-color var(--duration-normal) ease;
}

.fn-input-wrap button:hover {
  color: var(--color-gold);
  background-color: rgba(184, 150, 78, 0.08);
}

.fn-input-wrap button .material-symbols-outlined {
  font-size: 18px;
}

.fn-error {
  font-size: var(--text-overline);
  color: var(--color-error);
}

.fn-success {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-small);
  color: var(--color-gold);
}

.fn-success-icon {
  font-size: 16px;
}

/* ─── Bottom bar ─── */
.fn-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-6);
}

.fn-copyright {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
}

.fn-legal {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.fn-legal a {
  font-size: var(--text-overline);
  color: var(--color-dark-muted);
  background-image: none;
  transition: color var(--duration-normal) ease;
}

.fn-legal a:hover {
  color: var(--color-dark-text);
}

.fn-divider {
  color: var(--rule-color);
  font-size: var(--text-overline);
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .footer-new {
    padding: var(--space-16) var(--content-padding) var(--space-6);
  }

  .fn-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
  }

  .fn-brand {
    grid-column: 1 / -1;
  }

  .fn-newsletter {
    grid-column: 1 / -1;
  }

  .fn-bottom {
    flex-direction: column;
    gap: var(--space-3);
    text-align: center;
  }
}

@media (max-width: 480px) {
  .fn-grid {
    grid-template-columns: 1fr;
  }
}
</style>
