<template>
  <section ref="section" class="featured section">
    <div class="section-default">
      <p class="overline reveal">From The Road</p>
      <h2 class="reveal">Featured thinking</h2>

      <div class="featured-grid">
        <article v-for="post in posts" :key="post.title" class="featured-card reveal">
          <div class="featured-image">
            <img :src="post.image" :alt="post.title" loading="lazy" />
          </div>
          <div class="featured-content">
            <span class="featured-tag">{{ post.tag }}</span>
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal', { stagger: 0.12 })

const posts = [
  {
    title: 'The Craft Premium',
    tag: 'Essay',
    excerpt: 'Why human-led creative work commands more value in an AI-saturated market.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop',
  },
  {
    title: 'Building in Public, Thinking in Private',
    tag: 'Practice',
    excerpt: 'The case for protecting your creative process from the content machine.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
  },
  {
    title: 'Ten Institutions, One District',
    tag: 'Announcement',
    excerpt: 'Introducing Meraki District: a cultural ecosystem for the AI-native era.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
  },
]
</script>

<style scoped>
.featured h2 {
  margin-top: var(--space-4);
  margin-bottom: var(--space-12);
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.featured-card {
  display: flex;
  flex-direction: column;
}

.featured-image {
  aspect-ratio: 3 / 2;
  overflow: hidden;
  margin-bottom: var(--space-6);
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-out);
}

.featured-card:hover .featured-image img {
  transform: scale(1.03);
}

.featured-tag {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold-accessible);
  margin-bottom: var(--space-3);
  display: block;
}

.featured-content h3 {
  font-size: var(--text-h4);
  margin-bottom: var(--space-3);
}

.featured-content p {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
}

@media (max-width: 768px) {
  .featured-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }
}
</style>
