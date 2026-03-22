import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted, type Ref } from 'vue'

gsap.registerPlugin(ScrollTrigger)

interface VelocityTextOptions {
  /** Horizontal translate percentage (default: -20) */
  xPercent?: number
  /** Skew angle in degrees (default: 10) */
  skewX?: number
  /** Stagger between child elements in seconds (default: 0.1) */
  stagger?: number
  /** ScrollTrigger scrub value (default: 1.5) */
  scrub?: number
}

/**
 * Creates an archival "parchment drag" effect on text elements.
 * As the user scrolls, text skews and translates horizontally,
 * creating kinetic depth tied to scroll velocity.
 *
 * Apply `.text-velocity` class to target elements for CSS setup,
 * then call this composable on their container.
 *
 * Spec: "Velocity Typography & Kinetic Skewing" from Design Audit.
 *
 * Automatically disabled when prefers-reduced-motion is active.
 */
export function useVelocityText(
  container: Ref<HTMLElement | null>,
  selector = '.text-velocity',
  options: VelocityTextOptions = {}
) {
  const {
    xPercent = -20,
    skewX = 10,
    stagger = 0.1,
    scrub = 1.5,
  } = options

  let ctx: gsap.Context | null = null

  onMounted(() => {
    if (!container.value) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    ctx = gsap.context(() => {
      const elements = container.value!.querySelectorAll(selector)
      if (!elements.length) return

      gsap.from(elements, {
        xPercent,
        skewX,
        stagger,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container.value!,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub,
        },
      })
    }, container.value)
  })

  onUnmounted(() => {
    ctx?.revert()
  })
}
