<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const siteUrl = 'https://meraki-district.vercel.app'

useHead(computed(() => ({
  link: [
    { rel: 'canonical', href: siteUrl + route.path },
  ],
})))
</script>
