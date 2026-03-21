<template>
  <SitePreloader />
  <NuxtLayout>
    <GhostWatermark />
    <ArchivalTimeline />
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
})))
</script>
