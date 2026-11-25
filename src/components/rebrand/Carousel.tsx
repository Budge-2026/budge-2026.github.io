import { useEffect, useRef, useState, type ReactNode } from 'react'

type CarouselProps = {
  children: ReactNode
  perView?: number
  className?: string
  /** Move a full page of visible slides, instead of one slide at a time. */
  pageByView?: boolean
  label?: string
}

export function Carousel({
  children,
  perView = 3,
  className = '',
  pageByView = false,
  label = 'Carousel',
}: CarouselProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(1)
  const [slideWidth, setSlideWidth] = useState(0)
  const indexRef = useRef(0)
  const maxIndexRef = useRef(0)
  const slideWidthRef = useRef(0)
  const stepRef = useRef(1)
  const gap = 24

  const childCount = Array.isArray(children) ? children.length : 1

  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current
      if (!viewport) return
      const vw = viewport.clientWidth
      let per = perView
      if (vw < 640) per = Math.min(per, 1)
      else if (vw < 900) per = Math.min(per, 2)
      per = Math.max(1, Math.min(per, childCount))
      setVisible(per)
      setSlideWidth((vw - gap * (per - 1)) / per)
      const nextStep = pageByView ? per : 1
      const nextMax = Math.max(0, childCount - per)
      setIndex((i) => Math.min(Math.round(i / nextStep) * nextStep, nextMax))
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [perView, childCount, pageByView])

  const step = pageByView ? visible : 1
  const maxIndex = Math.max(0, childCount - visible)
  const page = Math.floor(Math.min(index, maxIndex) / step)
  const pageCount = Math.floor(maxIndex / step) + 1
  const progress = ((page + 1) / pageCount) * 100

  useEffect(() => {
    indexRef.current = index
    maxIndexRef.current = maxIndex
    slideWidthRef.current = slideWidth
    stepRef.current = step
  }, [index, maxIndex, slideWidth, step])

  useEffect(() => {
    const track = trackRef.current
    const viewport = viewportRef.current
    const root = rootRef.current
    if (!track || !viewport) return

    let dragging = false
    let startX = 0
    let startIndex = 0
    let wheelLock = false
    let wheelTimer = 0

    const goTo = (next: number) => {
      const clamped = Math.max(0, Math.min(next, maxIndexRef.current))
      setIndex(clamped)
      return clamped
    }

    const onDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null
      if (target?.closest('a, button, input, textarea, select, label')) return
      dragging = true
      startX = e.clientX
      startIndex = indexRef.current
      track.classList.add('is-dragging')
      viewport.setPointerCapture(e.pointerId)
    }
    const onMove = (e: PointerEvent) => {
      if (!dragging) return
      const dx = e.clientX - startX
      const step = slideWidthRef.current + gap
      track.style.transform = `translateX(${-1 * startIndex * step + dx}px)`
    }
    const onUp = (e: PointerEvent) => {
      if (!dragging) return
      dragging = false
      track.classList.remove('is-dragging')
      const dx = e.clientX - startX
      const threshold = slideWidthRef.current * 0.18
      const stepNow = stepRef.current
      if (dx < -threshold) goTo(startIndex + stepNow)
      else if (dx > threshold) goTo(startIndex - stepNow)
      else goTo(startIndex)
      // Clear inline transform so React style takes over
      track.style.removeProperty('transform')
    }

    const onWheel = (e: WheelEvent) => {
      const mostlyHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY)
      const shiftScroll = e.shiftKey && Math.abs(e.deltaY) > 0
      if (!mostlyHorizontal && !shiftScroll) return

      e.preventDefault()
      if (wheelLock) return

      const delta = mostlyHorizontal ? e.deltaX : e.deltaY
      if (Math.abs(delta) < 8) return

      wheelLock = true
      const stepNow = stepRef.current
      goTo(indexRef.current + (delta > 0 ? stepNow : -stepNow))
      window.clearTimeout(wheelTimer)
      wheelTimer = window.setTimeout(() => {
        wheelLock = false
      }, 420)
    }

    const onKeyDown = (e: KeyboardEvent) => {
      const stepNow = stepRef.current
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        goTo(indexRef.current + stepNow)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goTo(indexRef.current - stepNow)
      }
    }

    viewport.addEventListener('pointerdown', onDown)
    viewport.addEventListener('pointermove', onMove)
    viewport.addEventListener('pointerup', onUp)
    viewport.addEventListener('pointercancel', onUp)
    viewport.addEventListener('wheel', onWheel, { passive: false })
    root?.addEventListener('keydown', onKeyDown)

    return () => {
      viewport.removeEventListener('pointerdown', onDown)
      viewport.removeEventListener('pointermove', onMove)
      viewport.removeEventListener('pointerup', onUp)
      viewport.removeEventListener('pointercancel', onUp)
      viewport.removeEventListener('wheel', onWheel)
      root?.removeEventListener('keydown', onKeyDown)
      window.clearTimeout(wheelTimer)
    }
  }, [gap])

  return (
    <div
      ref={rootRef}
      className={`carousel ${className}`}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div ref={viewportRef} className="carousel-viewport">
        <div
          ref={trackRef}
          className="carousel-track"
          style={{
            transform: `translateX(${-1 * Math.min(index, maxIndex) * (slideWidth + gap)}px)`,
          }}
        >
          {Array.isArray(children)
            ? children.map((child, i) => (
                <div
                  key={i}
                  className="carousel-slide"
                  style={{ flex: `0 0 ${slideWidth || undefined}px` }}
                >
                  {child}
                </div>
              ))
            : (
                <div className="carousel-slide" style={{ flex: `0 0 ${slideWidth || undefined}px` }}>
                  {children}
                </div>
              )}
        </div>
      </div>
      <div className="carousel-nav">
        <button
          type="button"
          className="car-arrow"
          aria-label="Previous"
          disabled={index <= 0}
          onClick={() => setIndex((i) => Math.max(i - step, 0))}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="car-progress">
          <i style={{ width: `${progress}%` }} />
        </div>
        <button
          type="button"
          className="car-arrow"
          aria-label="Next"
          disabled={index >= maxIndex}
          onClick={() => setIndex((i) => Math.min(i + step, maxIndex))}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
