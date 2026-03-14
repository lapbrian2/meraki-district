import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted, type Ref } from 'vue'
import { waitForAncestorAnimations } from './useGsapScrollReveal'

interface WordRevealOptions {
  stagger?: number
  duration?: number
  y?: number
  start?: string
}

/**
 * Splits heading text into individual words and reveals them
 * with a staggered rise-up animation on scroll.
 *
 * Elements with .word-reveal class get their text split into
 * wrapped spans that slide up from below (overflow hidden mask).
 * This replaces the standard .reveal fade — don't use both on
 * the same element.
 */
export function useWordReveal(
  container: Ref<HTMLElement | null>,
  selector: string = '.word-reveal',
  options: WordRevealOptions = {}
) {
  const {
    stagger = 0.035,
    duration = 0.7,
    y = 110,
    start = 'top 85%',
  } = options

  let ctx: gsap.Context | null = null

  onMounted(async () => {
    if (!container.value) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      container.value.querySelectorAll(selector).forEach((el) => {
        ;(el as HTMLElement).style.opacity = '1'
      })
      return
    }

    await waitForAncestorAnimations(container.value)
    if (!container.value) return

    gsap.registerPlugin(ScrollTrigger)

    // Split text into word spans before animating
    container.value.querySelectorAll(selector).forEach((el) => {
      const text = el.textContent || ''
      const words = text.trim().split(/\s+/)
      el.innerHTML = words.map(word =>
        '<span class="wr-mask" style="display:inline-block;overflow:hidden;vertical-align:bottom;padding-bottom:0.1em">' +
        '<span class="wr-word" style="display:inline-block;will-change:transform">' + word + '</span>' +
        '</span>'
      ).join(' ')
    })

    ctx = gsap.context(() => {
      container.value!.querySelectorAll(selector).forEach((el) => {
        const wordEls = el.querySelectorAll('.wr-word')
        gsap.fromTo(wordEls,
          { yPercent: y },
          {
            yPercent: 0,
            duration,
            stagger,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start,
              toggleActions: 'play none none none',
              invalidateOnRefresh: true,
            },
          }
        )
      })
    }, container.value)
  })

  onUnmounted(() => {
    ctx?.revert()
  })
}
