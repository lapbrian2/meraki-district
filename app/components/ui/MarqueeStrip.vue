<template>
  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">
      <span v-for="i in 2" :key="i" class="marquee-content">
        <span v-for="word in words" :key="`${i}-${word}`" class="marquee-word">
          {{ word }}<span class="marquee-dot">&middot;</span>
        </span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const words = ['The work matters more than the tools', 'Mastery is a practice', 'Earned not purchased', 'Ambition meets integrity']
</script>

<style scoped>
.marquee {
  overflow: hidden;
  padding: var(--space-6) 0;
  border-top: 1px solid var(--rule-color);
  border-bottom: 1px solid var(--rule-color);
  background: var(--color-background);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marqueeScroll 30s linear infinite;
}

.marquee-content {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.marquee-word {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-muted);
  white-space: nowrap;
  text-transform: uppercase;
}

.marquee-dot {
  display: inline-block;
  margin: 0 var(--space-8);
  color: var(--color-gold);
  font-size: var(--text-h2);
}

@keyframes marqueeScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}

@media (max-width: 768px) {
  .marquee {
    padding: var(--space-4) 0;
  }

  .marquee-word {
    font-size: var(--text-h4);
  }

  .marquee-dot {
    font-size: var(--text-h3);
    margin: 0 var(--space-4);
  }
}
</style>
