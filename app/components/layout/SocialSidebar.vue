<template>
  <aside class="social-sidebar" aria-label="Social links">
    <a
      v-for="link in socials"
      :key="link.label"
      :href="link.url"
      :aria-label="link.label"
      class="social-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class="social-icon" v-html="link.icon" />
    </a>
    <span class="social-line" aria-hidden="true" />
  </aside>
</template>

<script setup lang="ts">
const socials = [
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/company/meraki-road',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/merakiroad',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  },
  {
    label: 'X',
    url: 'https://x.com/merakiroad',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  },
]
</script>

<style scoped>
.social-sidebar {
  position: fixed;
  left: var(--space-6);
  bottom: var(--space-12);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  z-index: 50;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text-muted);
  background-image: none;
  transition: color 0.2s ease, transform 0.2s ease;
}

.social-link:hover {
  color: var(--color-gold);
  transform: translateY(-2px);
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--color-text-muted), transparent);
  opacity: 0.3;
}

@media (max-width: 1024px) {
  .social-sidebar {
    display: none;
  }
}
</style>
