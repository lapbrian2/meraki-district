<template>
  <header class="nav" :class="{ scrolled: isScrolled, hidden: isHidden }">
    <div class="nav-inner">
      <NuxtLink to="/" class="nav-logo">Meraki District</NuxtLink>

      <nav class="nav-links" :class="{ open: mobileOpen }">
        <NuxtLink to="/institutions" @click="mobileOpen = false">Institutions</NuxtLink>
        <NuxtLink to="/the-road" @click="mobileOpen = false">The Road</NuxtLink>
        <NuxtLink to="/about" @click="mobileOpen = false">About</NuxtLink>
      </nav>

      <div class="nav-actions">
        <NuxtLink to="/apply" class="nav-cta">Apply</NuxtLink>
      </div>

      <button
        class="nav-toggle"
        :aria-expanded="mobileOpen"
        aria-label="Toggle menu"
        @click="mobileOpen = !mobileOpen"
      >
        <span :class="{ rotated: mobileOpen }" />
        <span :class="{ rotated: mobileOpen }" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const mobileOpen = ref(false)
const isScrolled = ref(false)
const isHidden = ref(false)
let lastScroll = 0

function onScroll() {
  const y = window.scrollY
  isScrolled.value = y > 60
  isHidden.value = y > 300 && y > lastScroll
  lastScroll = y
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && mobileOpen.value) {
    mobileOpen.value = false
  }
}

watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
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
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: var(--space-4) var(--content-padding);
  transition: background-color var(--duration-normal) ease,
              transform var(--duration-normal) ease,
              box-shadow var(--duration-normal) ease;
}

.nav.scrolled {
  background-color: rgba(250, 250, 249, 0.95);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 var(--rule-color);
}

.nav.hidden {
  transform: translateY(-100%);
}

.nav-inner {
  max-width: var(--width-wide);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
}

.nav-logo {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  letter-spacing: var(--tracking-tight);
  color: var(--color-ink);
  background-image: none;
}

.nav-links {
  display: flex;
  gap: var(--space-8);
}

.nav-links a {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
  transition: color var(--duration-fast) ease;
  background-image: none;
}

.nav-links a:hover {
  color: var(--color-ink);
}

.nav-cta {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-ink);
  padding: var(--space-2) var(--space-6);
  border: 1px solid var(--color-ink);
  background-image: none;
  transition: border-color var(--duration-fast) ease,
              color var(--duration-fast) ease;
}

.nav-cta:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  padding: var(--space-2);
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 1.5px;
  background-color: var(--color-ink);
  transition: transform var(--duration-normal) ease,
              opacity var(--duration-fast) ease;
}

.nav-toggle span.rotated:first-child {
  transform: translateY(3.75px) rotate(45deg);
}

.nav-toggle span.rotated:last-child {
  transform: translateY(-3.75px) rotate(-45deg);
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-background);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-8);
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--duration-normal) ease,
                visibility var(--duration-normal) ease;
  }

  .nav-links.open {
    opacity: 1;
    visibility: visible;
  }

  .nav-links a {
    font-size: var(--text-h3);
    text-transform: none;
    letter-spacing: var(--tracking-normal);
    background-image: none;
    transform: translateY(20px);
    opacity: 0;
    transition: opacity var(--duration-normal) ease,
                transform var(--duration-normal) var(--ease-out),
                color var(--duration-fast) ease;
  }

  .nav-links.open a {
    opacity: 1;
    transform: translateY(0);
  }

  .nav-links.open a:nth-child(1) { transition-delay: 100ms; }
  .nav-links.open a:nth-child(2) { transition-delay: 200ms; }
  .nav-links.open a:nth-child(3) { transition-delay: 300ms; }

  .nav-actions {
    display: none;
  }

  .nav-toggle {
    display: flex;
    z-index: 101;
  }
}
</style>
