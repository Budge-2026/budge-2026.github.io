import { useEffect, useState } from 'react'
import { ADVERTORIAL_INTAKE_URL } from './IntakeCta'
import { useFunnelHref } from '../tracking/FunnelLink'

export function StickyEligibilityBar() {
  const [visible, setVisible] = useState(false)
  const href = useFunnelHref(ADVERTORIAL_INTAKE_URL, {
    from: 'advertorial-tirzepatide-sticky',
    label: 'Check Eligibility',
    goal: 'weight',
  })

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight
        const ratio = scrollable > 0 ? window.scrollY / scrollable : 0
        if (ratio > 0.25) setVisible(true)
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-3 transition-transform duration-300 ease-out md:hidden ${
        visible ? 'translate-y-0' : 'pointer-events-none translate-y-full'
      }`}
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-[440px] items-center justify-between gap-2.5 rounded-full border border-[#001848]/10 bg-white/95 py-2 pr-2 pl-4 shadow-[0_10px_28px_rgba(0,24,72,0.18)] backdrop-blur-md">
        <p className="min-w-0 text-[12px] leading-tight font-semibold text-[#001848] sm:text-[13px]">
          Tirzepatide · From $149/mo
          <span className="mt-0.5 block font-medium text-[#475569]">(No Club Fees)</span>
        </p>
        <a
          href={href}
          tabIndex={visible ? 0 : -1}
          data-analytics="advertorial-intake-cta"
          data-cta-position="sticky"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#059669] px-3.5 py-2.5 text-[13px] leading-none font-bold whitespace-nowrap text-white hover:bg-[#047857] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001848]"
        >
          Check Eligibility →
        </a>
      </div>
    </div>
  )
}
