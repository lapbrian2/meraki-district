<template>
  <NuxtLayout>
    <SitePreloader />
    <GhostWatermark />
    <ArchivalTimeline />
    <ArchivalSearch />

    <!-- Vellum transition overlay — translucent sheet between pages -->
    <div
      ref="vellumOverlay"
      class="vellum-transition-overlay"
      :class="{ 'is-transitioning': isTransitioning }"
      aria-hidden="true"
    />

    <NuxtPage
      :transition="{
        name: 'page',
        mode: 'out-in',
        onBeforeLeave,
        onAfterEnter,
      }"
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const requestUrl = useRequestURL()

/* ─── Vellum transition state ─── */
const isTransitioning = ref(false)
const vellumOverlay = ref<HTMLElement | null>(null)

function onBeforeLeave() {
  isTransitioning.value = true
}

function onAfterEnter() {
  // Small delay lets the enter filter animation finish before removing overlay
  setTimeout(() => {
    isTransitioning.value = false
  }, 400)
  // Scroll to top on page enter (Lenis may not auto-reset)
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
}

useHead(computed(() => ({
  link: [
    { rel: 'canonical', href: requestUrl.origin + route.path },
  ],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Meraki Road',
      url: 'https://meraki-district.vercel.app',
      description: 'A creative network of twelve districts connecting practitioners with visibility, development, and professional opportunity.',
      logo: 'https://meraki-district.vercel.app/images/og-default.png',
    }),
  }],
})))
</script>
