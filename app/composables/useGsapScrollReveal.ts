import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted, type Ref } from 'vue'

interface ScrollRevealOptions {
  y?: number
  duration?: number
  stagger?: number
  ease?: string
  start?: string
}

export function useGsapScrollReveal(
  container: Ref<HTMLElement | null>,
  selector: string = '.reveal',
  options: ScrollRevealOptions = {}
) {
  let ctx: gsap.Context | null = null

  const {
    y = 40,
    duration = 0.8,
    stagger = 0.1,
    ease = 'power3.out',
    start = 'top 85%',
  } = options

  onMounted(() => {
    if (!container.value) return

    // Respect prefers-reduced-motion: make elements visible without animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      container.value.querySelectorAll(selector).forEach((el) => {
        ;(el as HTMLElement).style.opacity = '1'
      })
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    ctx = gsap.context(() => {
      gsap.from(selector, {
        opacity: 0,
        y,
        duration,
        stagger,
        ease,
        scrollTrigger: {
          trigger: container.value,
          start,
          toggleActions: 'play none none none',
        },
      })
    }, container.value)
  })

  onUnmounted(() => {
    ctx?.revert()
  })
}
