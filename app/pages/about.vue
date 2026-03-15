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
  title: 'About — Meraki District',
  meta: [
    { name: 'description', content: 'The people behind Meraki District. Two paths, one conviction: that AI-native creative work deserves real quarters.' },
  ],
})

useSeoMeta({
  ogTitle: 'About — Meraki District',
  ogDescription: 'The people behind Meraki District. Two paths, one conviction: that AI-native creative work deserves real quarters.',
  twitterTitle: 'About — Meraki District',
  twitterDescription: 'The people behind Meraki District. Two paths, one conviction: that AI-native creative work deserves real quarters.',
})
</script>
