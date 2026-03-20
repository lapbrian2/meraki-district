<template>
  <article class="article-card">
    <NuxtLink :to="articlePath" class="article-card-link">
      <div class="article-card-image">
        <NuxtImg
          ref="imgRef"
          :src="article.image"
          :alt="article.tag + ': ' + article.title"
          loading="lazy"
          decoding="async"
          width="400"
          height="267"
          @load="onImageLoad"
          @error="onImageLoad"
        />
      </div>
      <div class="article-card-content">
        <span class="article-card-tag">{{ article.tag }}</span>
        <h3 class="article-card-title">{{ article.title }}</h3>
        <p class="article-card-excerpt">{{ article.excerpt }}</p>
        <time v-if="showDate" class="article-card-date" :datetime="article.date">
          {{ formatDate(article.date) }}
        </time>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  article: {
    title: string
    tag: string
    excerpt: string
    image: string
    date: string
    path?: string
    stem?: string
  }
  showDate?: boolean
}>()

const articlePath = computed(() => {
  if (props.article.path) return props.article.path
  if (props.article.stem) return props.article.stem
  return '#'
})

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

const imgRef = ref<any>(null)

function onImageLoad(e: Event) {
  const el = e.target as HTMLElement | null
  el?.classList.add('loaded')
}

onMounted(() => {
  const el = imgRef.value?.$el as HTMLImageElement | undefined
  if (el?.complete) {
    el.classList.add('loaded')
  }
})
</script>

<style scoped>
.article-card-link {
  display: flex;
  flex-direction: column;
  background-image: none;
  cursor: pointer;
}

.article-card-image {
  aspect-ratio: 3 / 2;
  overflow: hidden;
  margin-bottom: var(--space-6);
}

.article-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transform: scale(0.97);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.article-card-image img.loaded {
  opacity: 1;
  transform: scale(1);
}

.article-card:hover .article-card-image img.loaded {
  transform: scale(1.03);
}

.article-card-tag {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold-accessible);
  margin-bottom: var(--space-3);
  display: block;
}

.article-card-title {
  font-size: var(--text-h4);
  margin-bottom: var(--space-3);
  display: inline;
  background-image: linear-gradient(var(--color-gold), var(--color-gold));
  background-size: 0% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size var(--duration-normal) ease;
}

.article-card:hover .article-card-title {
  background-size: 100% 1px;
}

.article-card-excerpt {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
  margin-top: var(--space-3);
}

.article-card-date {
  display: block;
  margin-top: var(--space-4);
  font-size: var(--text-caption);
  font-family: var(--font-mono);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
}
</style>
