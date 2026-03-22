import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { nextTick, onMounted, onUnmounted, type Ref } from 'vue'

interface ScrollRevealOptions {
  y?: number
  duration?: number
  stagger?: number
  ease?: string
  start?: string
}

/**
 * Wait for any Vue 3.5+ page transition Web Animations on ancestor elements
 * to complete before allowing GSAP to initialize. Vue 3.5 uses the Web
 * Animations API for <Transition>, and GSAP's ScrollTrigger freezes these
 * animations if it initializes mid-playback (layout recalc interference).
 */
function waitForAncestorAnimations(el: HTMLElement): Promise<void> {
  let ancestor: HTMLElement | null = el.parentElement
  while (ancestor) {
    const anims = ancestor.getAnimations?.()
    if (anims && anims.length > 0) {
      return Promise.allSettled(anims.map(a => a.finished)).then(() => {})
    }
    ancestor = ancestor.parentElement
  }
  return Promise.resolve()
}

export { waitForAncestorAnimations }

export function useGsapScrollReveal(
  container: Ref<HTMLElement | null>,
  selector: string = '.reveal',
  options: ScrollRevealOptions = {}
) {
  let ctx: gsap.Context | null = null

  const {
    y = 30,
    duration = 1,
    stagger = 0.1,
    ease = 'power2.out',
    start = 'top 85%',
  } = options

  onMounted(async () => {
    if (!container.value) return

    // Respect prefers-reduced-motion: make elements visible without animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      container.value.querySelectorAll(selector).forEach((el) => {
        ;(el as HTMLElement).style.opacity = '1'
      })
      return
    }

    // Immediately hide reveal elements to prevent flash after transition
    container.value.querySelectorAll(selector).forEach((el) => {
      ;(el as HTMLElement).style.opacity = '0'
    })

    // Wait for Vue page transition animations to complete.
    // Vue 3.5+ uses Web Animations API for <Transition>, and GSAP's
    // ScrollTrigger freezes these animations if initialized mid-playback.
    await waitForAncestorAnimations(container.value)

    // Re-check after async gap (component may have unmounted)
    if (!container.value) return

    ctx = gsap.context(() => {
      gsap.fromTo(selector,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease,
          scrollTrigger: {
            trigger: container.value,
            start,
            toggleActions: 'play none none none',
            invalidateOnRefresh: true,
          },
        }
      )
    }, container.value)

    // Recalculate after page transition completes (Nuxt out-in mode)
    nextTick(() => {
      ScrollTrigger.refresh()
    })
  })

  onUnmounted(() => {
    ctx?.revert()
  })
}
