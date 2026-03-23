<template>
  <nav
    class="mobile-bottom-nav"
    aria-label="Mobile navigation"
    role="navigation"
  >
    <!-- Home -->
    <NuxtLink to="/" :class="['bottom-tab', { active: route.path === '/' }]">
      <span class="material-symbols-outlined bottom-tab-icon">home</span>
      <span class="bottom-tab-label">Home</span>
    </NuxtLink>

    <!-- Districts -->
    <NuxtLink to="/districts" :class="['bottom-tab', { active: route.path.startsWith('/districts') }]">
      <span class="material-symbols-outlined bottom-tab-icon">location_city</span>
      <span class="bottom-tab-label">Districts</span>
    </NuxtLink>

    <!-- Publish -->
    <NuxtLink to="/the-road" :class="['bottom-tab', { active: route.path.startsWith('/the-road') }]">
      <span class="material-symbols-outlined bottom-tab-icon">edit_note</span>
      <span class="bottom-tab-label">Publish</span>
    </NuxtLink>

    <!-- Search (action) -->
    <button class="bottom-tab" aria-label="Search the archive" @click="openSearch">
      <span class="material-symbols-outlined bottom-tab-icon">search</span>
      <span class="bottom-tab-label">Search</span>
    </button>

    <!-- More (action) -->
    <button class="bottom-tab" aria-label="Open navigation menu" @click="openMobile">
      <span class="material-symbols-outlined bottom-tab-icon">menu</span>
      <span class="bottom-tab-label">More</span>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { useArchivalSearch } from '~/composables/useArchivalSearch'
import { useMobileNav } from '~/composables/useMobileNav'

const route = useRoute()
const { open: openSearch } = useArchivalSearch()
const { openMobile } = useMobileNav()
</script>

<style scoped>
.mobile-bottom-nav {
  display: none;
}

@media (max-width: 768px) {
  .mobile-bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 90;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background: var(--color-dark-bg);
    border-top: 1px solid rgba(250, 250, 249, 0.06);
    padding-bottom: env(safe-area-inset-bottom, 0);
  }
}

.bottom-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 8px 0 6px;
  color: var(--color-dark-muted);
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  background-image: none;
  -webkit-tap-highlight-color: transparent;
  transition: color 0.5s var(--ease-vellum);
  min-height: 44px;
}

.bottom-tab.active {
  color: var(--color-gold);
}

.bottom-tab:hover {
  color: var(--color-dark-text);
}

.bottom-tab.active:hover {
  color: var(--color-gold);
}

.bottom-tab-icon {
  font-size: 20px;
  line-height: 1;
}

.bottom-tab-label {
  font-family: var(--font-body);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  line-height: 1;
}

/* Focus */
.bottom-tab:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: -2px;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .bottom-tab {
    transition: none;
  }
}
</style>
