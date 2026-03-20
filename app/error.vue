<template>
  <div class="error-page section-dark">
    <div class="error-content">
      <p class="error-code">{{ error?.statusCode || 500 }}</p>
      <p class="overline">{{ errorLabel }}</p>
      <div class="error-rule" aria-hidden="true" />
      <h1 class="error-title">{{ errorTitle }}</h1>
      <p class="error-body">{{ errorBody }}</p>
      <div class="error-actions">
        <NuxtLink to="/" class="error-cta" @click="clearError">
          Back to Meraki Road
        </NuxtLink>
        <NuxtLink v-if="error?.statusCode === 404" to="/districts" class="error-link" @click="clearError('/districts')">
          Browse districts
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; message: string } }>()

const code = props.error?.statusCode || 500

const errorLabel = computed(() => {
  if (code === 404) return 'Not Found'
  if (code === 403) return 'Forbidden'
  return 'Error'
})

const errorTitle = computed(() => {
  if (code === 404) return 'This page doesn\u2019t exist yet.'
  if (code === 403) return 'You don\u2019t have access to this page.'
  return 'Something went wrong.'
})

const errorBody = computed(() => {
  if (code === 404) return 'The page you\u2019re looking for may have moved, or it hasn\u2019t been built yet.'
  if (code === 403) return 'This area is restricted. If you believe this is an error, please contact us.'
  return 'An unexpected error occurred. Please try again, or return to the homepage.'
})

useHead({
  title: `${code} \u2014 Meraki Road`,
})

const clearError = (path = '/') => clearNuxtError({ redirect: path })
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

.error-code {
  font-family: var(--font-display);
  font-size: clamp(4rem, 10vw, 7rem);
  font-weight: 300;
  color: rgba(250, 250, 249, 0.06);
  line-height: 1;
  letter-spacing: var(--tracking-tight);
  margin-bottom: var(--space-2);
}

.error-rule {
  width: 32px;
  height: 1px;
  background: var(--color-gold);
  margin: var(--space-4) auto var(--space-6);
}

.error-title {
  font-size: var(--text-h2);
  color: var(--color-dark-text);
  margin-bottom: var(--space-6);
}

.error-body {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-12);
  max-width: none;
}

.error-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
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

.error-link {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
  background-image: none;
  transition: color var(--duration-fast) ease;
}

.error-link:hover {
  color: var(--color-gold);
}
</style>
