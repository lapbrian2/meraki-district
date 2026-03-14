<template>
  <section class="article-hero">
    <div class="article-hero-image-wrap">
      <img
        :src="article.image"
        :alt="article.tag + ': ' + article.title"
        class="article-hero-image"
        loading="eager"
        fetchpriority="high"
      />
      <div class="article-hero-overlay" />
    </div>
    <div class="section-default article-hero-content">
      <p class="overline">{{ article.tag }}</p>
      <h1 class="article-hero-title">{{ article.title }}</h1>
      <div class="article-hero-meta">
        <span class="article-hero-author">{{ article.author }}</span>
        <span class="article-hero-sep" aria-hidden="true">&middot;</span>
        <time :datetime="article.date">{{ formatDate(article.date) }}</time>
        <span v-if="readingTime" class="article-hero-sep" aria-hidden="true">&middot;</span>
        <span v-if="readingTime">{{ readingTime }} min read</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  article: {
    title: string
    tag: string
    author: string
    date: string
    image: string
  }
  readingTime?: number
}>()

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}
</script>

<style scoped>
.article-hero {
  position: relative;
  min-height: 60vh;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

.article-hero-image-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.article-hero-image {
  width: 100%;
  height: 130%;
  top: -15%;
  position: relative;
  object-fit: cover;
  opacity: 0.4;
  will-change: transform;
}

.article-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(9, 9, 11, 0.3) 0%,
    rgba(9, 9, 11, 0.15) 40%,
    rgba(9, 9, 11, 0.5) 70%,
    rgba(9, 9, 11, 0.85) 100%
  );
}

.article-hero-content {
  position: relative;
  z-index: 1;
  padding-top: calc(var(--space-48) + 4rem);
  padding-bottom: var(--space-16);
}

.article-hero-content .overline {
  color: var(--color-gold);
  margin-bottom: var(--space-3);
}

.article-hero-title {
  font-size: var(--text-display);
  line-height: var(--leading-tight);
  margin-bottom: var(--space-8);
  color: var(--color-dark-text);
  max-width: 20ch;
}

.article-hero-meta {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-small);
  color: var(--color-dark-muted);
}

.article-hero-author {
  font-weight: 500;
}

.article-hero-sep {
  opacity: 0.4;
}

@media (max-width: 768px) {
  .article-hero {
    min-height: 50vh;
  }

  .article-hero-content {
    padding-top: calc(var(--space-24) + 3rem);
    padding-bottom: var(--space-12);
  }

  .article-hero-title {
    max-width: none;
  }

  .article-hero-meta {
    flex-wrap: wrap;
  }
}
</style>
