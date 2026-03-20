<template>
  <div class="error-page section-dark">
    <div class="error-content">
      <p class="overline">{{ error?.statusCode === 404 ? 'Not Found' : 'Error' }}</p>
      <h1 class="error-title">
        {{ error?.statusCode === 404 ? 'This page doesn\u2019t exist yet.' : 'Something went wrong.' }}
      </h1>
      <p class="error-body">
        {{ error?.statusCode === 404
          ? 'The page you\u2019re looking for may have moved, or it hasn\u2019t been built yet.'
          : 'An unexpected error occurred. Please try again.'
        }}
      </p>
      <NuxtLink to="/" class="error-cta" @click="clearError">
        Back to Meraki Road
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; message: string } }>()

useHead({
  title: props.error?.statusCode === 404 ? '404 — Meraki Road' : 'Error — Meraki Road',
})

const clearError = () => clearNuxtError({ redirect: '/' })
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-12) var(--content-padding);
}

.error-content {
  max-width: 500px;
}

.error-title {
  font-size: var(--text-h1);
  color: var(--color-dark-text);
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);
}

.error-body {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-12);
  max-width: none;
}

.error-cta {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  border: 1px solid var(--color-gold);
  padding: var(--space-4) var(--space-12);
  background-image: none;
  transition: background-color var(--duration-normal) ease,
              color var(--duration-normal) ease;
}

.error-cta:hover {
  background-color: var(--color-gold);
  color: var(--color-ink);
}
</style>
