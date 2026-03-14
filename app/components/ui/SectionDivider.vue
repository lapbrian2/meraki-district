<template>
  <div class="divider" aria-hidden="true">
    <span class="divider-line" />
    <span v-if="ornament" class="divider-ornament">{{ ornament }}</span>
    <span v-if="ornament" class="divider-line" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ ornament?: string }>(), { ornament: '' })
</script>

<style scoped>
.divider {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  max-width: var(--width-narrow);
  margin: 0 auto;
  padding: 0 var(--content-padding);
}

.divider-line {
  flex: 1;
  height: 1px;
  background: var(--rule-color);
}

.divider-ornament {
  font-family: var(--font-display);
  font-size: var(--text-small);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-widest);
  flex-shrink: 0;
}
</style>
