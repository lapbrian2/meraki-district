import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  // Defensive: ensure ScrollTrigger is registered even if plugin order shifts
  gsap.registerPlugin(ScrollTrigger)

  const lenis = new Lenis({
    lerp: 0.06,
    duration: 1.4,
    smoothWheel: true,
  })

  lenis.on('scroll', ScrollTrigger.update)

  const rafCallback = (time: number) => {
    lenis.raf(time)
  }

  gsap.ticker.add(rafCallback)
  gsap.ticker.lagSmoothing(0)

  // Clean up on HMR to prevent leaked ticker callbacks
  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      gsap.ticker.remove(rafCallback)
      lenis.destroy()
    })
  }

  return {
    provide: {
      lenis,
    },
  }
})
