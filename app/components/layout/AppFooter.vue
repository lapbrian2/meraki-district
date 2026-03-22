<template>
  <footer ref="footerRef" class="footer">
    <!-- Closing Statement -->
    <div class="footer-closing reveal">
      <p class="footer-closing-text">
        <em>The road doesn't end. It just gets quieter.</em>
      </p>
    </div>

    <!-- Giant faded brand watermark -->
    <div class="footer-watermark" aria-hidden="true">MERAKI ROAD</div>

    <!-- Gold rule -->
    <div class="footer-rule" aria-hidden="true" />

    <!-- Four columns -->
    <div class="footer-grid">
      <!-- Brand -->
      <div class="footer-col footer-col-brand reveal">
        <NuxtLink to="/" class="footer-logo"><em>Meraki Road</em></NuxtLink>
        <p class="footer-tagline">Where craft meets culture. Twelve districts for practitioners who hold ambition and integrity as a single standard.</p>
      </div>

      <!-- Districts -->
      <div class="footer-col reveal">
        <h4 class="footer-heading">Districts</h4>
        <ul class="footer-links">
          <li v-for="d in activeDistricts" :key="d.slug">
            <NuxtLink :to="'/districts/' + d.slug">{{ d.name }}</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Institutional -->
      <div class="footer-col reveal">
        <h4 class="footer-heading">Institutional</h4>
        <ul class="footer-links">
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/community">Community</NuxtLink></li>
          <li><NuxtLink to="/apply">Apply</NuxtLink></li>
          <li><NuxtLink to="/the-road">Publishing</NuxtLink></li>
        </ul>
      </div>

      <!-- Registry (Newsletter) -->
      <div class="footer-col reveal">
        <h4 class="footer-heading">Registry</h4>
        <p class="footer-registry-desc">Dispatches from inside the districts. No noise.</p>
        <form class="footer-registry-form" @submit.prevent="submit" aria-label="Newsletter signup">
          <div class="footer-registry-input-wrap">
            <input
              v-model="email"
              type="email"
              placeholder="Email address"
              class="footer-registry-input"
              aria-label="Email address"
              :disabled="status === 'success'"
              @focus="reset"
            />
            <button
              type="submit"
              class="footer-registry-btn"
              :disabled="status === 'success' || status === 'submitting'"
              aria-label="Subscribe"
            >
              <span class="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <p v-if="status === 'success'" class="footer-feedback footer-success">You're on the list.</p>
          <p v-if="status === 'error'" class="footer-feedback footer-error">{{ errorMessage }}</p>
        </form>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <p class="footer-copyright">&copy; {{ year }} MERAKI ROAD</p>
      <nav class="footer-legal" aria-label="Legal links">
        <NuxtLink to="/privacy">Privacy</NuxtLink>
        <NuxtLink to="/terms">Terms</NuxtLink>
        <span class="footer-legal-sep" aria-hidden="true">&middot;</span>
        <NuxtLink to="/bridge">Press</NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useEmailCollection } from '~/composables/useEmailCollection'
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { districts } from '~/composables/useDistricts'

const year = computed(() => new Date().getFullYear())
const { email, status, errorMessage, submit, reset } = useEmailCollection('newsletter')

const activeDistricts = computed(() =>
  districts.filter(d => d.status === 'active' || d.status === 'coming-soon')
)

const footerRef = ref<HTMLElement | null>(null)
useGsapScrollReveal(footerRef, '.reveal', { stagger: 0.15 })
</script>

<style scoped>
.footer {
  position: relative;
  background: var(--color-dark-bg);
  padding: 0 var(--content-padding);
  overflow: hidden;
}

/* Closing statement — the last line of the monograph */
.footer-closing {
  padding: var(--space-32) 0 var(--space-24);
  text-align: center;
  max-width: var(--width-wide);
  margin: 0 auto;
}

.footer-closing-text {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 300;
  font-style: italic;
  color: rgba(250, 250, 249, 0.5);
  line-height: var(--leading-tight);
  max-width: none;
}

/* Giant watermark */
.footer-watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-display);
  font-size: 20vw;
  font-weight: 300;
  font-style: italic;
  color: rgba(250, 250, 249, 0.03);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  line-height: 1;
}

/* Gold rule separating closing from columns */
.footer-rule {
  max-width: var(--width-wide);
  margin: 0 auto;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--color-gold) 20%,
    var(--color-gold) 80%,
    transparent
  );
  opacity: 0.3;
}

/* Four-column grid */
.footer-grid {
  max-width: var(--width-wide);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-12);
  padding: var(--space-16) 0;
}

/* Brand column */
.footer-logo {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: rgba(250, 250, 249, 0.85);
  background-image: none;
  margin-bottom: var(--space-4);
  display: inline-block;
}

.footer-logo:hover {
  color: rgba(250, 250, 249, 1);
}

.footer-tagline {
  color: rgba(250, 250, 249, 0.3);
  font-size: var(--text-small);
  line-height: var(--leading-relaxed);
  max-width: 32ch;
}

/* Column headings */
.footer-heading {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: rgba(250, 250, 249, 0.85);
  margin-bottom: var(--space-6);
}

/* Links */
.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer-links a {
  color: rgba(250, 250, 249, 0.35);
  font-size: var(--text-small);
  background-image: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--color-gold);
}

/* Registry (newsletter) */
.footer-registry-desc {
  color: rgba(250, 250, 249, 0.35);
  font-size: var(--text-small);
  margin-bottom: var(--space-4);
  max-width: none;
  line-height: var(--leading-relaxed);
}

.footer-registry-input-wrap {
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid rgba(250, 250, 249, 0.15);
  transition: border-color 0.3s ease;
}

.footer-registry-input-wrap:focus-within {
  border-color: var(--color-gold);
}

.footer-registry-input {
  flex: 1;
  background: transparent;
  border: none;
  color: rgba(250, 250, 249, 0.85);
  font-family: var(--font-body);
  font-size: var(--text-small);
  padding: var(--space-2) 0;
  letter-spacing: var(--tracking-wide);
}

.footer-registry-input::placeholder {
  color: rgba(250, 250, 249, 0.2);
  text-transform: uppercase;
  font-size: var(--text-overline);
  letter-spacing: var(--tracking-widest);
}

.footer-registry-input:focus {
  outline: none;
}

.footer-registry-btn {
  color: var(--color-gold);
  background: transparent;
  border: none;
  padding: var(--space-2);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.footer-registry-btn:hover {
  transform: translateX(4px);
}

.footer-registry-btn .material-symbols-outlined {
  font-size: 1.25rem;
}

.footer-feedback {
  font-size: var(--text-caption);
  margin-top: var(--space-2);
  max-width: none;
}

.footer-success { color: var(--color-gold); }
.footer-error { color: var(--color-error); }

/* Bottom bar */
.footer-bottom {
  max-width: var(--width-wide);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-8) 0;
  border-top: 1px solid rgba(250, 250, 249, 0.05);
}

.footer-copyright {
  font-size: 0.5625rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(250, 250, 249, 0.3);
  max-width: none;
}

.footer-legal {
  display: flex;
  gap: var(--space-6);
  align-items: center;
}

.footer-legal a {
  font-size: 0.5625rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(250, 250, 249, 0.2);
  background-image: none;
  transition: color 0.3s ease;
}

.footer-legal a:hover {
  color: rgba(250, 250, 249, 0.6);
}

.footer-legal-sep {
  color: rgba(250, 250, 249, 0.1);
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-10);
  }

  .footer-col-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .footer-bottom {
    flex-direction: column;
    gap: var(--space-4);
    text-align: center;
  }

  .footer-watermark {
    font-size: 30vw;
  }

  .footer-closing {
    padding: var(--space-20) 0 var(--space-16);
  }

  .footer-registry-input {
    min-height: 44px;
    padding: var(--space-3) 0;
  }

  .footer-registry-btn {
    min-width: 44px;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-links a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }

  .footer-legal a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }
}

/* Focus styles */
.footer-registry-input:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
}

.footer-links a:focus-visible,
.footer-legal a:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}
</style>
