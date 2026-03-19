<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const { site } = useRuntimeConfig().public as { site?: { url?: string } }
const siteUrl = site?.url || 'https://meraki-district.vercel.app'

useHead(computed(() => ({
  link: [
    { rel: 'canonical', href: siteUrl + route.path },
  ],
})))
</script>
