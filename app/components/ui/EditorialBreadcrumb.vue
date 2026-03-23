<template>
  <nav class="editorial-breadcrumb" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li
        v-for="(item, i) in items"
        :key="i"
        class="breadcrumb-item"
        :class="{ 'breadcrumb-item--current': i === items.length - 1 }"
      >
        <span v-if="i > 0" class="breadcrumb-separator">/</span>
        <NuxtLink
          v-if="item.to && i < items.length - 1"
          :to="item.to"
          class="breadcrumb-link"
        >
          {{ item.label }}
        </NuxtLink>
        <span
          v-else-if="i < items.length - 1"
          class="breadcrumb-parent"
        >
          {{ item.label }}
        </span>
        <span
          v-else
          class="breadcrumb-current"
          aria-current="page"
        >
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  to?: string
}

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>

<style scoped>
.editorial-breadcrumb {
  padding: var(--space-4) var(--content-padding);
  max-width: var(--content-max-width);
  margin: 0 auto;
}

.breadcrumb-list {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  overflow: hidden;
}

.breadcrumb-item {
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-2);
  min-width: 0;
}

.breadcrumb-separator {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  color: var(--color-gold);
  font-weight: 400;
  user-select: none;
}

.breadcrumb-link,
.breadcrumb-parent {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  text-decoration: none;
  background-image: none;
  transition: color var(--duration-normal) ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.breadcrumb-link:hover {
  color: var(--color-gold);
}

.breadcrumb-current {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: var(--text-small);
  color: var(--color-dark-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .breadcrumb-list {
    flex-wrap: nowrap;
    overflow: hidden;
  }

  .breadcrumb-item:not(.breadcrumb-item--current) {
    flex-shrink: 1;
    min-width: 0;
  }

  .breadcrumb-item--current {
    flex-shrink: 0;
    max-width: 60%;
  }
}
</style>
