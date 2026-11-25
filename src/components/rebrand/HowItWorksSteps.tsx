import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PLACEHOLDERS } from '../../constants/brand'
import { Reveal } from './Reveal'
import { QuizCta } from '../quiz/QuizCta'
import { FunnelLink } from '../tracking/FunnelLink'

export type HowItWorksStep = {
  number: string
  tag: string
  title: string
  description: string
  image: string
  imageAlt: string
}

/** Homepage — 3-step care journey */
export const HOME_HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: '1',
    tag: 'Physician-led',
    title: 'Share your biology and goals',
    description:
      'Complete a secure online intake. An independent U.S.-licensed provider reviews your history and goals to decide whether treatment is appropriate — 100% online, no waiting room.',
    image: '/img/how-it-works/home-step-1.jpg',
    imageAlt: 'Licensed BudgeRx clinician welcoming a patient on a telehealth visit',
  },
  {
    number: '2',
    tag: 'Discreet fulfillment',
    title: 'Receive your prescription',
    description:
      'If prescribed, a licensed U.S. pharmacy prepares your medication and ships it discreetly to your door — typically within 2–3 days with tracking when applicable.',
    image: '/img/how-it-works/home-step-2.jpg',
    imageAlt: 'Opening a BudgeRx prescription delivery with order status overlay',
  },
  {
    number: '3',
    tag: 'Concierge support',
    title: 'Stay guided as you progress',
    description:
      'Keep building with provider messaging and check-ins as your plan evolves — clinical judgment first, never a one-size-fits-all protocol.',
    image: '/img/how-it-works/home-step-3.jpg',
    imageAlt: 'BudgeRx patient continuing care with protocol support messaging',
  },
]

/** /how-it-works page — same 3-step journey, dedicated images */
export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: '1',
    tag: 'Physician-led',
    title: 'Share your biology and goals',
    description:
      'Complete a secure online intake. An independent U.S.-licensed provider reviews your history and goals to decide whether treatment is appropriate — 100% online, no waiting room.',
    image: '/img/how-it-works/home-step-1.jpg',
    imageAlt: 'Licensed BudgeRx clinician welcoming a patient on a telehealth visit',
  },
  {
    number: '2',
    tag: 'Discreet fulfillment',
    title: 'Receive your prescription',
    description:
      'If prescribed, a licensed U.S. pharmacy prepares your medication and ships it discreetly to your door — typically within 2–3 days with tracking when applicable.',
    image: '/img/how-it-works/home-step-2.jpg',
    imageAlt: 'Opening a BudgeRx prescription delivery with order status overlay',
  },
  {
    number: '3',
    tag: 'Concierge support',
    title: 'Stay guided as you progress',
    description:
      'Keep building with provider messaging and check-ins as your plan evolves — clinical judgment first, never a one-size-fits-all protocol.',
    image: '/img/how-it-works/home-step-3.jpg',
    imageAlt: 'BudgeRx patient continuing care with protocol support messaging',
  },
]

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21.8 10A10 10 0 1 1 17 3.3" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  )
}

type HowItWorksStepsProps = {
  id?: string
  className?: string
  heading?: ReactNode
  steps?: HowItWorksStep[]
  /** When false, image stays on the left for every step */
  alternate?: boolean
  showCta?: boolean
  ctaHref?: string
  ctaLabel?: string
  ctaClassName?: string
  /** Section slug used when this CTA opens the quiz or an external funnel. */
  ctaFrom?: string
}

export function HowItWorksSteps({
  id = 'steps',
  className = 'section',
  heading = (
    <>
      Better medicine <em className="accent-serif">starts here</em>
    </>
  ),
  steps = HOW_IT_WORKS_STEPS,
  alternate = true,
  showCta = true,
  ctaHref = PLACEHOLDERS.intakeUrl,
  ctaLabel = 'Get Started',
  ctaClassName = 'btn btn-primary btn-lg',
  ctaFrom = 'how-it-works',
}: HowItWorksStepsProps) {
  const isInternal = ctaHref.startsWith('/')

  return (
    <section className={className} id={id}>
      <div className="container">
        <Reveal className="section-head">
          <div className="arx-kicker">
            <span className="arx-dot" aria-hidden="true" />
            How it works
          </div>
          <h2>{heading}</h2>
        </Reveal>

        <div className="hiw-steps">
          {steps.map((step, index) => {
            const flip = alternate && index % 2 === 1
            return (
              <Reveal
                key={step.number}
                className={`hiw-step${flip ? ' hiw-step--flip' : ''}`}
              >
                <div className="hiw-step__media">
                  <img src={step.image} alt={step.imageAlt} loading="lazy" />
                </div>
                <div className="hiw-step__rail" aria-hidden="true">
                  <span className="hiw-step__num">{step.number}</span>
                  {index < steps.length - 1 ? <span className="hiw-step__line" /> : null}
                </div>
                <div className="hiw-step__copy">
                  <div className="hiw-step__tag">
                    <CheckIcon />
                    <span>{step.tag}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        {showCta ? (
          <div className="treatments-all">
            {isInternal ? (
              <Link className={ctaClassName} to={ctaHref}>
                {ctaLabel}
              </Link>
            ) : ctaHref === PLACEHOLDERS.intakeUrl ? (
              <QuizCta className={ctaClassName} from={ctaFrom} trackLabel={ctaLabel}>
                {ctaLabel}
              </QuizCta>
            ) : ctaHref.startsWith('http') ? (
              <FunnelLink href={ctaHref} from={ctaFrom} label={ctaLabel} className={ctaClassName}>
                {ctaLabel}
              </FunnelLink>
            ) : (
              <a className={ctaClassName} href={ctaHref}>
                {ctaLabel}
              </a>
            )}
          </div>
        ) : null}
      </div>
    </section>
  )
}
