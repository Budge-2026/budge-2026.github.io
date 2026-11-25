import { useEffect, useRef } from 'react'

/** Scroll-reveal: adds `in-view` when element enters viewport (Brello parity). */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('in-view')
      return
    }

    const markVisible = () => el.classList.add('in-view')

    // Already on screen (hero / above-fold) — reveal immediately
    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight || document.documentElement.clientHeight
    if (rect.top < vh - 40 && rect.bottom > 0) {
      markVisible()
      return
    }

    if (!('IntersectionObserver' in window)) {
      markVisible()
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}
