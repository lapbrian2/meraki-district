<template>
  <div v-if="article" ref="root">
    <ArticleHeader :article="article" :reading-time="readingTime" />

    <SectionDivider />

    <section ref="bodySection" class="article-body section">
      <div class="section-narrow">
        <div class="article-rule" aria-hidden="true" />
        <div class="article-prose reveal">
          <ContentRenderer :value="article" />
        </div>
      </div>
    </section>

    <SectionDivider />

    <section class="article-nav section">
      <div class="section-default article-nav-inner">
        <NuxtLink
          v-if="prevArticle"
          :to="prevArticle.path"
          class="article-nav-link"
        >
          <span class="article-nav-label">Previous</span>
          <span class="article-nav-name">{{ prevArticle.title }}</span>
        </NuxtLink>
        <div v-else />
        <NuxtLink
          v-if="nextArticle"
          :to="nextArticle.path"
          class="article-nav-link article-nav-right"
        >
          <span class="article-nav-label">Next</span>
          <span class="article-nav-name">{{ nextArticle.title }}</span>
        </NuxtLink>
      </div>
    </section>

    <section class="article-back section">
      <div class="section-default">
        <NuxtLink to="/the-road" class="article-back-link">
          &larr; Back to The Road
        </NuxtLink>
      </div>
    </section>

    <CtaSection />
  </div>
  <div v-else class="not-found section">
    <div class="section-narrow">
      <h1>Article not found</h1>
      <p><NuxtLink to="/the-road">Back to The Road</NuxtLink></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapScrollReveal, waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'
import { useParallax } from '~/composables/useParallax'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const { data: article } = await useAsyncData(
  'the-road-' + slug.value,
  () => queryCollection('theRoad')
    .where('published', '=', true)
    .path('/the-road/' + slug.value)
    .first(),
  { watch: [slug] }
)

// Get all articles for prev/next navigation
const { data: allArticles } = await useAsyncData('the-road-nav', () =>
  queryCollection('theRoad')
    .where('published', '=', true)
    .order('date', 'DESC')
    .select('title', 'path', 'date')
    .all()
)

const currentIndex = computed(() => {
  if (!allArticles.value || !article.value) return -1
  return allArticles.value.findIndex(a => a.path === article.value!.path)
})

const prevArticle = computed(() => {
  if (!allArticles.value || currentIndex.value <= 0) return null
  return allArticles.value[currentIndex.value - 1]
})

const nextArticle = computed(() => {
  if (!allArticles.value || currentIndex.value < 0 || currentIndex.value >= allArticles.value.length - 1) return null
  return allArticles.value[currentIndex.value + 1]
})

// Walk AST to extract prose text (not JSON structure tokens)
function extractText(node: any): string {
  if (!node) return ''
  if (node.type === 'text') return node.value || ''
  if (Array.isArray(node.children)) return node.children.map(extractText).join(' ')
  return ''
}

const readingTime = computed(() => {
  if (!article.value?.body) return 0
  const text = extractText(article.value.body)
  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 250))
})

// SEO
useHead(computed(() => ({
  title: article.value ? article.value.title + ' \u2014 The Road \u2014 Meraki Road' : 'The Road \u2014 Meraki Road',
  meta: article.value ? [
    { name: 'description', content: article.value.excerpt },
  ] : [],
})))

useSeoMeta(computed(() => ({
  ogTitle: article.value ? article.value.title + ' \u2014 The Road' : 'The Road',
  ogDescription: article.value?.excerpt || '',
  ogImage: article.value?.image || '',
  twitterTitle: article.value ? article.value.title + ' \u2014 The Road' : 'The Road',
  twitterDescription: article.value?.excerpt || '',
})))

// Animations
const root = ref<HTMLElement | null>(null)
const bodySection = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

useGsapScrollReveal(bodySection, '.reveal', { stagger: 0.1 })
useParallax(root, '.article-hero-image', { speed: 0.1 })

onMounted(async () => {
  if (!root.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  await waitForAncestorAnimations(root.value)
  if (!root.value) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    gsap.from('.article-rule', {
      scaleX: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.article-rule',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    gsap.from('.article-hero-image', {
      scale: 1.08,
      duration: 1.6,
      ease: 'power3.out',
    })
  }, root.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped>
/* Rule */
.article-rule {
  width: 48px;
  height: 1px;
  background: var(--color-gold);
  margin-bottom: var(--space-12);
  transform-origin: left;
}

/* Prose typography */
.article-prose {
  max-width: 65ch;
}

.article-prose :deep(h2) {
  font-size: var(--text-h3);
  margin-top: var(--space-16);
  margin-bottom: var(--space-6);
  line-height: var(--leading-tight);
}

.article-prose :deep(h3) {
  font-size: var(--text-h4);
  margin-top: var(--space-12);
  margin-bottom: var(--space-4);
  line-height: var(--leading-tight);
}

.article-prose :deep(p) {
  font-size: var(--text-body);
  line-height: var(--leading-relaxed);
  color: var(--color-text);
  margin-bottom: var(--space-6);
}

.article-prose :deep(blockquote) {
  border-left: 2px solid var(--color-gold);
  padding-left: var(--space-6);
  margin: var(--space-8) 0;
  font-style: italic;
  color: var(--color-text-muted);
}

.article-prose :deep(a) {
  color: var(--color-ink);
  text-decoration: underline;
  text-decoration-color: var(--color-gold);
  text-underline-offset: 3px;
  transition: text-decoration-color var(--duration-fast) ease;
}

.article-prose :deep(a:hover) {
  text-decoration-color: var(--color-ink);
}

.article-prose :deep(code) {
  font-family: var(--font-mono);
  font-size: 0.9em;
  background: var(--color-surface);
  padding: 0.15em 0.4em;
  border-radius: 3px;
}

.article-prose :deep(pre) {
  background: var(--color-surface);
  padding: var(--space-6);
  overflow-x: auto;
  margin: var(--space-8) 0;
  font-size: var(--text-small);
}

.article-prose :deep(pre code) {
  background: none;
  padding: 0;
}

.article-prose :deep(ul),
.article-prose :deep(ol) {
  margin: var(--space-6) 0;
  padding-left: var(--space-8);
}

.article-prose :deep(li) {
  font-size: var(--text-body);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-2);
  color: var(--color-text);
}

.article-prose :deep(hr) {
  border: none;
  border-top: 1px solid var(--color-border);
  margin: var(--space-12) 0;
}

/* Navigation */
.article-nav {
  padding-top: var(--space-12);
  padding-bottom: var(--space-12);
}

.article-nav-inner {
  display: flex;
  justify-content: space-between;
  gap: var(--space-8);
}

.article-nav-link {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  background-image: none;
}

.article-nav-right {
  text-align: right;
  align-items: flex-end;
}

.article-nav-label {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.article-nav-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-ink);
  transition: color var(--duration-fast) ease;
}

.article-nav-link:hover .article-nav-name {
  color: var(--color-gold);
}

/* Back link */
.article-back {
  padding-top: 0;
  padding-bottom: var(--space-12);
}

.article-back-link {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
  background-image: none;
  transition: color var(--duration-fast) ease;
}

.article-back-link:hover {
  color: var(--color-gold);
}

/* Not found */
.not-found {
  padding-top: calc(var(--space-32) + 3rem);
  min-height: 60vh;
}

.not-found h1 {
  margin-bottom: var(--space-4);
}

/* Responsive */
@media (max-width: 768px) {
  .article-nav-name {
    font-size: var(--text-h4);
  }
}
</style>
