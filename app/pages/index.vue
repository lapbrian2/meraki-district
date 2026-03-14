<template>
  <div>
    <HeroSection />
    <ManifestoSection />
    <SectionDivider />
    <InstitutionsGrid />
    <MarqueeStrip />
    <PhilosophySection />
    <FeaturedSection />
    <SealSection />
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Meraki District — Where craft meets culture',
  meta: [
    { name: 'description', content: 'A cultural ecosystem for AI-native creators. Ten institutions, one district, a new standard for creative practice.' },
    { property: 'og:title', content: 'Meraki District — Where craft meets culture' },
  ],
})
</script>
