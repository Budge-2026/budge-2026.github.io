import { type CSSProperties, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { BRAND_NAME, TREATMENTS } from '@/constants/brand'
import { QuizCta } from '@/components/quiz/QuizCta'
import { withSalesPrefix } from '@/lib/funnelTracking'

interface HorizontalMarqueeProps {
  children: ReactNode
  pauseOnHover?: boolean
  className?: string
  speed?: number
}

function HorizontalMarquee({
  children,
  pauseOnHover = true,
  className,
  speed = 36,
}: HorizontalMarqueeProps) {
  return (
    <div
      className={cn('group flex overflow-hidden', className)}
      style={
        {
          '--duration': `${speed}s`,
          maskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)',
        } as CSSProperties
      }
    >
      <div
        className={cn(
          'flex shrink-0 animate-marquee items-center',
          pauseOnHover && 'group-hover:[animation-play-state:paused]',
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          'flex shrink-0 animate-marquee items-center',
          pauseOnHover && 'group-hover:[animation-play-state:paused]',
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  )
}

const marqueeItems = [...TREATMENTS.map((t) => t.name), ...TREATMENTS.map((t) => t.name)]

export function FinalCtaMarquee() {
  const { pathname } = useLocation()
  const from = withSalesPrefix(pathname, 'final-cta')

  return (
    <section className="final-cta-marquee" aria-labelledby="final-cta-heading">
      <div className="final-cta-marquee__inner">
        <div className="final-cta-marquee__copy">
          <h2 id="final-cta-heading">
            Better Medicine. <em className="accent-serif">Better Living.</em>
          </h2>
          <p>
            Join patients across all 50 states who chose {BRAND_NAME} for premium, clinician-guided
            telehealth — discreet, high-touch, and built around their biology.
          </p>
          <QuizCta className="btn btn-white btn-lg" from={from}>
            Get Started
          </QuizCta>
          <div className="final-cta-marquee__trust">
            Licensed providers · Concierge-style support · Prescription required
          </div>
        </div>

        <HorizontalMarquee speed={110} className="final-cta-marquee__track">
          {marqueeItems.map((item, idx) => (
            <div key={`${item}-${idx}`} className="final-cta-marquee__item">
              {item}
            </div>
          ))}
        </HorizontalMarquee>
      </div>
    </section>
  )
}

export default FinalCtaMarquee
