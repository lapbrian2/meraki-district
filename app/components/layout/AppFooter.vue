<template>
  <footer class="footer section-dark">
    <div class="footer-inner">
      <div class="footer-brand">
        <p class="footer-logo">Meraki District</p>
        <p class="footer-tagline">A cultural ecosystem for AI-native creators.</p>
      </div>

      <div class="footer-col">
        <h4 class="overline">Navigate</h4>
        <ul>
          <li><NuxtLink to="/institutions">Institutions</NuxtLink></li>
          <li><NuxtLink to="/the-road">The Road</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/apply">Apply</NuxtLink></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="overline">Connect</h4>
        <ul>
          <li><a href="#" target="_blank" rel="noopener">Instagram</a></li>
          <li><a href="#" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a href="#" target="_blank" rel="noopener">Newsletter</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="overline">Legal</h4>
        <ul>
          <li><NuxtLink to="/privacy">Privacy</NuxtLink></li>
          <li><NuxtLink to="/terms">Terms</NuxtLink></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ year }} Meraki Productions Ltd. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// SSR-safe: computed prevents hydration mismatch from new Date() in template
const year = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  padding: var(--space-24) var(--content-padding) var(--space-8);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-inner {
  max-width: var(--width-wide);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
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

@media (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}
</style>
