<template>
  <NuxtLayout>
    <GhostWatermark />
    <ArchivalTimeline />
    <ArchivalSearch />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const requestUrl = useRequestURL()

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
