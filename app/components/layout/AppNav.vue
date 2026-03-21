<template>
  <header ref="navRef" class="nav" :class="{ scrolled: isScrolled, hidden: isHidden }">
    <!-- Expanded state: magazine masthead (desktop only, scrollY < 100) -->
    <div class="nav-expanded" :class="{ collapsed: isScrolled }">
      <div class="nav-expanded-inner">
        <NuxtLink to="/" class="nav-logo"><em>Meraki Road</em></NuxtLink>
        <div class="nav-expanded-row">
          <nav class="nav-links" aria-label="Main navigation">
            <NuxtLink to="/districts" class="nav-link">Districts</NuxtLink>
            <NuxtLink to="/the-road" class="nav-link">The Road</NuxtLink>
            <NuxtLink to="/community" class="nav-link">Community</NuxtLink>
            <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          </nav>
          <div class="nav-right">
            <button class="nav-search-btn" aria-label="Search the archive" title="Search (Ctrl+K)" @click="openSearch">
              <span class="material-symbols-outlined nav-search-icon">search</span>
            </button>
            <NuxtLink to="/apply" class="nav-apply">Apply</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Compact state: single-row utility bar (scrollY >= 100) -->
    <div class="nav-compact" :class="{ active: isScrolled }">
      <div class="nav-compact-inner">
        <NuxtLink to="/" class="nav-logo"><em>Meraki Road</em></NuxtLink>
        <nav class="nav-links" aria-label="Main navigation">
          <NuxtLink to="/districts" class="nav-link">Districts</NuxtLink>
          <NuxtLink to="/the-road" class="nav-link">The Road</NuxtLink>
          <NuxtLink to="/community" class="nav-link">Community</NuxtLink>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
        </nav>
        <div class="nav-right">
          <button class="nav-search-btn" aria-label="Search the archive" title="Search (Ctrl+K)" @click="openSearch">
            <span class="material-symbols-outlined nav-search-icon">search</span>
          </button>
          <NuxtLink to="/apply" class="nav-apply">Apply</NuxtLink>
        </div>
      </div>
    </div>

    <!-- Mobile search -->
    <button
      class="nav-mobile-search"
      aria-label="Search the archive"
      @click="openSearch"
    >
      <span class="material-symbols-outlined">search</span>
    </button>

    <!-- Mobile toggle -->
    <button
      class="nav-toggle"
      :aria-expanded="mobileOpen"
      :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
      @click="toggleMobile"
    >
      <span class="nav-toggle-label" :class="{ inverted: mobileOpen }">{{ mobileOpen ? 'Close' : 'Menu' }}</span>
    </button>

    <!-- Mobile logo (always visible on mobile) -->
    <NuxtLink to="/" class="nav-mobile-logo" :class="{ inverted: mobileOpen }">Meraki Road</NuxtLink>

    <!-- Theme toggle (ClientOnly prevents SSR hydration mismatch on icon swap) -->
    <ClientOnly>
      <button
        class="nav-theme-toggle"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        :title="isDark ? 'Light mode' : 'Dark mode'"
        @click="toggle"
      >
        <svg v-if="isDark" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="3.5" stroke="currentColor" stroke-width="1.2"/>
          <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
        <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M14 9.5A6.5 6.5 0 016.5 2 5.5 5.5 0 1014 9.5z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="nav-theme-label">{{ isDark ? 'Light' : 'Dark' }}</span>
      </button>
    </ClientOnly>

    <!-- Scroll progress bar -->
    <ScrollProgress />
  </header>

  <!-- Mobile overlay -->
  <div ref="overlayRef" class="mobile-overlay">
    <div class="mobile-overlay-inner">
      <nav class="mobile-nav" aria-label="Mobile navigation">
        <div v-for="link in mobileLinks" :key="link.to" class="mobile-link-wrap">
          <div class="mobile-link-mask">
            <NuxtLink
              :to="link.to"
              class="mobile-link"
              @click="closeMobile"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>
      </nav>
      <div class="mobile-rule" aria-hidden="true" />
      <NuxtLink to="/apply" class="mobile-apply" @click="closeMobile">
        Apply
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNavAnimation } from '~/composables/useNavAnimation'
import { useDarkMode } from '~/composables/useDarkMode'
import { useArchivalSearch } from '~/composables/useArchivalSearch'

const navRef = ref<HTMLElement | null>(null)
const overlayRef = ref<HTMLElement | null>(null)
const mobileOpen = ref(false)
const isScrolled = ref(false)
const isHidden = ref(false)
let lastScroll = 0

const { isDark, toggle } = useDarkMode()
const { open: openSearch } = useArchivalSearch()

const mobileLinks = [
  { to: '/districts', label: 'Districts' },
  { to: '/the-road', label: 'The Road' },
  { to: '/community', label: 'Community' },
  { to: '/about', label: 'About' },
  { to: '/institute', label: 'Institute' },
  { to: '/pavilion', label: 'Pavilion' },
  { to: '/bridge', label: 'Bridge' },
  { to: '/circuit', label: 'Circuit' },
]

useNavAnimation({ navRef, overlayRef, mobileOpen })

function onScroll() {
  const y = window.scrollY
  isScrolled.value = y > 100
  if (y > lastScroll) {
    if (y > 300) isHidden.value = true
  } else if (lastScroll - y > 10) {
    isHidden.value = false
  }
  lastScroll = y
}

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
}

function closeMobile() {
  mobileOpen.value = false
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && mobileOpen.value) {
    closeMobile()
  }
}

watch(mobileOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
    // Focus trap: make background content inert when overlay is open
    document.querySelectorAll('main, footer, header').forEach((el) => {
      ;(el as HTMLElement).inert = open
    })
  }
})

onMounted(() => {
  lastScroll = window.scrollY
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* BASE HEADER */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: transform 0.4s var(--ease-in-out);
}

.nav.hidden {
  transform: translateY(-100%);
}

/* EXPANDED STATE (magazine masthead) — floats over dark hero */
.nav-expanded {
  padding: var(--space-6) var(--content-padding) var(--space-4);
  opacity: 1;
  visibility: visible;
  transition: opacity 0.5s var(--ease-out), visibility 0.5s;
}

.nav-expanded .nav-logo {
  color: var(--color-dark-text);
}

.nav-expanded .nav-link {
  color: var(--color-dark-muted);
}

.nav-expanded .nav-link:hover {
  color: var(--color-dark-text);
}

.nav-expanded .nav-link.router-link-active {
  color: var(--color-dark-text);
}

.nav-expanded .nav-apply {
  color: var(--color-dark-muted);
}

.nav-expanded .nav-apply:hover {
  color: var(--color-gold);
}

.nav-expanded.collapsed {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.nav-expanded-inner {
  max-width: var(--width-wide);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
}

.nav-expanded-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 520px;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

/* COMPACT STATE (utility bar) */
.nav-compact {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: var(--space-3) var(--content-padding);
  background-color: color-mix(in srgb, var(--color-background) 97%, transparent);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  box-shadow: 0 1px 0 var(--rule-color);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.5s var(--ease-out), visibility 0.5s;
}

.nav-compact.active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  box-shadow: 0 1px 0 var(--color-gold);
}

.nav-compact-inner {
  position: relative;
  max-width: var(--width-wide);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
}

.nav-compact .nav-links {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-compact .nav-logo {
  font-size: var(--text-h4);
}

/* SHARED ELEMENTS */
.nav-logo {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  letter-spacing: var(--tracking-tight);
  color: var(--color-ink);
  background-image: none;
  white-space: nowrap;
}

.nav-logo em {
  font-style: italic;
}

.nav-links {
  display: flex;
  gap: var(--space-8);
  align-items: center;
}

.nav-link {
  position: relative;
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
  background-image: none;
  transition: color 0.2s ease, letter-spacing 0.3s var(--ease-out);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--color-gold);
  clip-path: inset(0 100% 0 0);
  transition: clip-path 0.4s var(--ease-out);
}

.nav-link:hover {
  color: var(--color-ink);
  letter-spacing: 0.18em;
  text-shadow: 0 0 12px rgba(148, 67, 40, 0.4);
}

.nav-link:hover::after {
  clip-path: inset(0 0 0 0);
}

.nav-link.router-link-active {
  color: var(--color-ink);
}

.nav-link.router-link-active::after {
  clip-path: inset(0 0 0 0);
  background: var(--color-ink);
}

.nav-link:focus-visible,
.nav-apply:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

/* SEARCH BUTTON */
.nav-search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text-muted);
  transition: color 0.2s ease;
}

.nav-search-btn:hover {
  color: var(--color-gold);
}

.nav-search-icon {
  font-size: 1.125rem;
}

.nav-expanded .nav-search-btn {
  color: var(--color-dark-muted);
}

.nav-expanded .nav-search-btn:hover {
  color: var(--color-gold);
}

.nav-search-btn:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

/* Gold middot separator */
.nav-dot {
  color: var(--color-gold);
  font-size: var(--text-body);
  line-height: 1;
  opacity: 0.5;
  user-select: none;
}

/* APPLY CTA - editorial text-and-line */
.nav-apply {
  position: relative;
  padding-top: var(--space-2);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
  background-image: none;
  transition: color 0.3s var(--ease-out);
}

.nav-apply::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-gold);
  transition: left 0.4s var(--ease-out), right 0.4s var(--ease-out);
}

.nav-apply:hover {
  color: var(--color-gold);
}

.nav-apply:hover::before {
  left: -8px;
  right: -8px;
}

/* MOBILE TOGGLE (text-based) */
.nav-toggle {
  display: none;
  position: fixed;
  top: var(--space-4);
  right: var(--content-padding);
  z-index: 101;
  min-width: 44px;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  padding: var(--space-2) var(--space-3);
}

.nav-toggle-label {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-ink);
  transition: color 0.3s ease;
}

.nav-toggle-label.inverted {
  color: var(--color-dark-text);
}

/* Mobile logo */
.nav-mobile-logo {
  display: none;
  position: fixed;
  top: var(--space-4);
  left: var(--content-padding);
  z-index: 101;
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  letter-spacing: var(--tracking-tight);
  color: var(--color-ink);
  background-image: none;
  transition: color 0.3s ease;
}

.nav-mobile-logo.inverted {
  color: var(--color-dark-text);
}

/* MOBILE OVERLAY */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: var(--color-dark-bg, #09090B);
  clip-path: circle(0% at calc(100% - 2rem) 1.5rem);
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-overlay-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

.mobile-link-wrap {
  overflow: hidden;
}

.mobile-link-mask {
  will-change: transform;
}

.mobile-link {
  font-family: var(--font-display);
  font-size: var(--text-display);
  font-weight: 300;
  color: var(--color-dark-muted);
  background-image: none;
  transition: color 0.2s ease;
  line-height: var(--leading-tight);
  display: block;
}

.mobile-link:hover {
  color: var(--color-dark-text);
}

.mobile-link.router-link-active {
  color: var(--color-dark-text);
}

.mobile-rule {
  width: 48px;
  height: 1px;
  background: var(--color-gold);
  opacity: 0.3;
  margin: var(--space-6) 0;
  transform-origin: center;
}

.mobile-apply {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  background-image: none;
  position: relative;
  padding-bottom: var(--space-1);
  transition: color 0.2s ease;
}

.mobile-apply::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--color-gold);
}

.mobile-apply:hover {
  color: var(--color-gold);
}

/* THEME TOGGLE */
.nav-theme-toggle {
  position: fixed;
  bottom: var(--space-6);
  right: var(--space-6);
  z-index: 99;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  transition: color var(--duration-fast) ease, border-color var(--duration-fast) ease;
}

.nav-theme-toggle:hover {
  color: var(--color-gold);
  border-color: var(--color-gold);
}

.nav-theme-label {
  font-size: 0.5625rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* SCROLL PROGRESS - positioned at nav bottom */
.nav :deep(.scroll-progress) {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

/* MOBILE SEARCH */
.nav-mobile-search {
  display: none;
  position: fixed;
  top: var(--space-4);
  right: calc(var(--content-padding) + 60px);
  z-index: 101;
  min-width: 44px;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  color: var(--color-ink);
  transition: color 0.2s ease;
}

.nav-mobile-search:hover {
  color: var(--color-gold);
}

.nav-mobile-search .material-symbols-outlined {
  font-size: 1.25rem;
}

.nav-mobile-search:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .nav-expanded,
  .nav-compact {
    display: none;
  }

  .nav-toggle {
    display: flex;
  }

  .nav-mobile-search {
    display: flex;
  }

  .nav-mobile-logo {
    display: block;
    min-height: 44px;
    display: flex;
    align-items: center;
  }

  .nav {
    pointer-events: none;
  }

  .nav-toggle,
  .nav-mobile-logo,
  .nav-mobile-search {
    pointer-events: auto;
  }

  .mobile-link {
    font-size: clamp(2rem, 8vw, var(--text-display));
    min-height: 44px;
  }

  .mobile-apply {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }
}

/* Focus styles */
.mobile-link:focus-visible,
.mobile-apply:focus-visible,
.nav-toggle:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}
</style>
