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
    { name: 'description', content: 'The people behind Meraki District. Two paths, one conviction: that AI-native creative work deserves real institutions.' },
  ],
})
</script>
