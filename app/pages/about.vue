<template>
  <div>
    <AboutHero />
    <SectionDivider />
    <FoundersGrid />
    <OriginSection />
    <SectionDivider />
    <PrinciplesSection />
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About — Meraki Road',
  meta: [
    { name: 'description', content: 'The people behind Meraki Road. Two paths, one conviction: that AI-native creative work deserves real districts.' },
  ],
})

useSeoMeta({
  ogTitle: 'About — Meraki Road',
  ogDescription: 'The people behind Meraki Road. Two paths, one conviction: that AI-native creative work deserves real districts.',
  twitterTitle: 'About — Meraki Road',
  twitterDescription: 'The people behind Meraki Road. Two paths, one conviction: that AI-native creative work deserves real districts.',
})
</script>
