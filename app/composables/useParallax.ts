import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted, type Ref } from 'vue'
import { waitForAncestorAnimations } from './useGsapScrollReveal'

interface ParallaxOptions {
  speed?: number
}

/**
 * Adds a scroll-driven parallax effect to a background image.
 * The image must have the CSS class that sets height: 130% and top: -15%
 * to provide room for the vertical offset.
 *
 * @param speed 0-1 controls intensity. 0.1 = subtle drift, 0.3 = dramatic.
 */
export function useParallax(
  container: Ref<HTMLElement | null>,
  imageSelector: string,
  options: ParallaxOptions = {}
) {
  const { speed = 0.1 } = options
  let ctx: gsap.Context | null = null

  onMounted(async () => {
    if (!container.value) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover)').matches || window.innerWidth < 768) return

    await waitForAncestorAnimations(container.value)
    if (!container.value) return

    gsap.registerPlugin(ScrollTrigger)

    ctx = gsap.context(() => {
      const img = container.value!.querySelector(imageSelector)
      if (!img) return

      gsap.fromTo(img,
        { yPercent: -speed * 100 },
        {
          yPercent: speed * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: container.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      )
    }, container.value)
  })

  onUnmounted(() => {
    ctx?.revert()
  })
}
