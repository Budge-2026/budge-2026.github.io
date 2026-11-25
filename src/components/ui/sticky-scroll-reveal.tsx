import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export type StickyScrollItem = {
  title: string
  description: string
  image?: {
    src: string
    alt: string
  }
}

type StickyScrollProps = {
  content: StickyScrollItem[]
  contentClassName?: string
  className?: string
}

const backgroundColors = [
  'rgb(0 0 0)',
  'rgb(13 13 13)',
  'rgb(20 20 20)',
  'rgb(10 10 10)',
]

export function StickyScroll({ content, contentClassName, className }: StickyScrollProps) {
  const [activeCard, setActiveCard] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  const updateActiveCard = useCallback(() => {
    const container = scrollRef.current
    if (!container) return

    const scrollCenter = container.scrollTop + container.clientHeight / 2

    let nextActive = 0
    let minDistance = Number.POSITIVE_INFINITY

    stepRefs.current.forEach((step, index) => {
      if (!step) return

      const containerRect = container.getBoundingClientRect()
      const stepRect = step.getBoundingClientRect()
      const stepCenter =
        stepRect.top - containerRect.top + container.scrollTop + stepRect.height / 2
      const distance = Math.abs(scrollCenter - stepCenter)

      if (distance < minDistance) {
        minDistance = distance
        nextActive = index
      }
    })

    setActiveCard((current) => (current === nextActive ? current : nextActive))
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    updateActiveCard()
    container.addEventListener('scroll', updateActiveCard, { passive: true })
    window.addEventListener('resize', updateActiveCard)

    return () => {
      container.removeEventListener('scroll', updateActiveCard)
      window.removeEventListener('resize', updateActiveCard)
    }
  }, [content.length, updateActiveCard])

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className={cn('relative h-[40rem] overflow-hidden rounded-2xl', className)}
    >
      {/* Fixed image panel — outside scroll flow */}
      <div className="pointer-events-none absolute top-1/2 right-6 z-10 hidden -translate-y-1/2 lg:block xl:right-10">
        <div
          className={cn(
            'relative aspect-square w-72 overflow-hidden rounded-xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] xl:w-80',
            contentClassName,
          )}
        >
          {content.map((item, index) =>
            item.image ? (
              <img
                key={item.image.src}
                src={item.image.src}
                alt={item.image.alt}
                className={cn(
                  'absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300',
                  activeCard === index ? 'opacity-100' : 'opacity-0',
                )}
              />
            ) : null,
          )}
        </div>
      </div>

      {/* Scrollable text column */}
      <div
        ref={scrollRef}
        className="h-full overflow-y-auto p-6 md:p-10 lg:pr-[22rem] xl:pr-[24rem]"
      >
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              ref={(el) => {
                stepRefs.current[index] = el
              }}
              className="flex min-h-[36rem] flex-col justify-center py-8"
            >
              <motion.h2
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-white md:text-3xl"
              >
                {item.title}
              </motion.h2>
              <motion.p
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-6 max-w-sm text-base text-white/70 md:mt-8 md:text-lg"
              >
                {item.description}
              </motion.p>

              {item.image ? (
                <div className="mt-8 aspect-square w-full max-w-xs overflow-hidden rounded-xl shadow-lg lg:hidden">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ) : null}
            </div>
          ))}
          <div className="h-16 shrink-0" aria-hidden="true" />
        </div>
      </div>
    </motion.div>
  )
}
