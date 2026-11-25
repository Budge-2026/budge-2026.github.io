import { useEffect, useRef, useState, type ReactNode } from 'react'

type PrecisionScrollerProps = {
  children: ReactNode
  label?: string
}

export function PrecisionScroller({ children, label = 'Treatments' }: PrecisionScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(50)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const items = Array.isArray(children) ? children : [children]

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    const update = () => {
      const max = el.scrollWidth - el.clientWidth
      setAtStart(el.scrollLeft <= 2)
      setAtEnd(max <= 2 || el.scrollLeft >= max - 2)
      setProgress(max <= 0 ? 100 : ((el.scrollLeft + el.clientWidth) / el.scrollWidth) * 100)
    }

    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [items.length])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    let dragging = false
    let startX = 0
    let startScroll = 0
    let moved = false

    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      const target = e.target as HTMLElement | null
      if (target?.closest('a, button, input, textarea, select, label')) return
      dragging = true
      moved = false
      startX = e.clientX
      startScroll = el.scrollLeft
      el.classList.add('is-dragging')
      el.setPointerCapture(e.pointerId)
    }

    const onMove = (e: PointerEvent) => {
      if (!dragging) return
      const dx = e.clientX - startX
      if (Math.abs(dx) > 4) moved = true
      el.scrollLeft = startScroll - dx
    }

    const onUp = () => {
      if (!dragging) return
      dragging = false
      el.classList.remove('is-dragging')
      if (!moved) return
      const stopClick = (event: Event) => {
        event.preventDefault()
        event.stopPropagation()
        el.removeEventListener('click', stopClick, true)
      }
      el.addEventListener('click', stopClick, true)
    }

    el.addEventListener('pointerdown', onDown)
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerup', onUp)
    el.addEventListener('pointercancel', onUp)
    return () => {
      el.removeEventListener('pointerdown', onDown)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerup', onUp)
      el.removeEventListener('pointercancel', onUp)
    }
  }, [])

  const scrollByPage = (direction: number) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className="carousel rx-meds-carousel">
      <div
        ref={scrollerRef}
        className="rx-meds-scroller"
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') {
            e.preventDefault()
            scrollByPage(1)
          } else if (e.key === 'ArrowLeft') {
            e.preventDefault()
            scrollByPage(-1)
          }
        }}
      >
        {items.map((child, index) => (
          <div className="rx-meds-slide" key={index}>
            {child}
          </div>
        ))}
      </div>
      <div className="carousel-nav">
        <button
          type="button"
          className="car-arrow"
          aria-label="Previous"
          disabled={atStart}
          onClick={() => scrollByPage(-1)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="car-progress" aria-hidden="true">
          <i style={{ width: `${progress}%` }} />
        </div>
        <button
          type="button"
          className="car-arrow"
          aria-label="Next"
          disabled={atEnd}
          onClick={() => scrollByPage(1)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
