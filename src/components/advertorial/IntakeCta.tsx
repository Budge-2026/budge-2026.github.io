import { useFunnelHref } from '../tracking/FunnelLink'

export type CtaPosition = 'header' | 'early' | 'matrix' | 'bottom' | 'sticky'

export const ADVERTORIAL_INTAKE_URL = 'https://try.budgerx.com/f/prescription-weightloss-offer-v5'

export const BUTTON_LABEL = 'Compounded Tirzepatide for $149 a month →'

const TRUST_LINES = [
  'Takes 3 minutes online · No video call required in most cases',
  'HIPAA-protected intake · No charge for medication unless a licensed clinician approves it',
  'Serves all 50 states · Discreet shipping, typically 2–3 days after approval',
] as const

type IntakeCtaProps = {
  position: Exclude<CtaPosition, 'sticky'>
}

export function IntakeCta({ position }: IntakeCtaProps) {
  const href = useFunnelHref(ADVERTORIAL_INTAKE_URL, {
    from: `advertorial-tirzepatide-${position}`,
    label: 'Compounded Tirzepatide for $149 a month',
    goal: 'weight',
  })

  return (
    <div className="not-prose my-10 flex flex-col items-center text-center">
      <a
        href={href}
        data-analytics="advertorial-intake-cta"
        data-cta-position={position}
        className="advertorial-cta inline-flex max-w-full items-center justify-center rounded-lg bg-[#059669] px-6 py-4 text-center text-[16px] font-bold leading-snug text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#047857] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001848] motion-reduce:transform-none sm:text-[17px]"
      >
        {BUTTON_LABEL}
      </a>
      <ul className="mt-4 space-y-1.5">
        {TRUST_LINES.map((line) => (
          <li key={line} className="flex justify-center gap-2 text-[13px] leading-snug text-[#64748B]">
            <span aria-hidden="true" className="mt-0.5 text-[#059669]">
              ✓
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
