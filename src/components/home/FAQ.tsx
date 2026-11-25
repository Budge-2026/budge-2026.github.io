import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { BRAND_SHORT, PLACEHOLDERS } from '../../constants/brand'
import { CLINICAL_PROVIDER, EPIQ_SCRIPTS, FULFILLMENT_PHARMACY } from '../../constants/policy'
import { Section, SectionHeader } from '../ui/Section'

type FaqItem = {
  question: string
  answer: ReactNode
}

const faqs: FaqItem[] = [
  {
    question: 'What states do we serve?',
    answer: (
      <>
        All 50 states are served by {BRAND_SHORT}.
      </>
    ),
  },
  {
    question: 'Who are our pharmacies?',
    answer: (
      <>
        Prescriptions are fulfilled by licensed U.S. pharmacies, including{' '}
        <a
          href={FULFILLMENT_PHARMACY.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand underline"
        >
          {FULFILLMENT_PHARMACY.name}
        </a>{' '}
        and{' '}
        <a
          href={EPIQ_SCRIPTS.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand underline"
        >
          {EPIQ_SCRIPTS.name}
        </a>
        .
      </>
    ),
  },
  {
    question: 'Who is our provider network?',
    answer: (
      <>
        Clinical services are provided through{' '}
        <a
          href={CLINICAL_PROVIDER.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand underline"
        >
          {CLINICAL_PROVIDER.name}
        </a>
        , an independent network of U.S.-licensed clinicians.
      </>
    ),
  },
  {
    question: 'How do consultations work?',
    answer: (
      <>
        You complete a secure online intake with your medical history and goals. A licensed provider
        from our network reviews your information, may request follow-up details, and determines
        whether treatment is clinically appropriate. If approved, a prescription is sent to the
        pharmacy for fulfillment. Submitting intake does not guarantee a prescription.
      </>
    ),
  },
  {
    question: 'How long does shipping take?',
    answer: (
      <>
        After provider approval, most prescriptions ship from {FULFILLMENT_PHARMACY.name} within
        2–3 days. You will receive tracking information once your order leaves the pharmacy.
        Delivery times vary by location.
      </>
    ),
  },
  {
    question: 'What is your refund and cancellation policy?',
    answer: (
      <>
        Because prescriptions and compounded medications cannot be returned once dispensed, refunds
        are limited. You can review full details in our{' '}
        <Link to="/refund-policy" className="text-brand underline">
          Refund and Cancellation Policy
        </Link>
        . For billing or cancellation help, email{' '}
        <a
          href={`mailto:${PLACEHOLDERS.supportEmail}`}
          className="text-brand underline"
        >
          {PLACEHOLDERS.supportEmail}
        </a>
        .
      </>
    ),
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="faq" variant="cloud">
      <SectionHeader
        title="Questions we hear often"
        subtitle="Quick answers about eligibility, pharmacies, providers, shipping, and how care works."
      />
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={faq.question}
              className={`overflow-hidden rounded-xl border border-smoke bg-white transition-shadow ${
                isOpen ? 'shadow-[0_2px_12px_rgba(12,30,60,0.08)]' : ''
              }`}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span className="font-semibold text-ink">{faq.question}</span>
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-light text-lg font-medium text-brand"
                  aria-hidden="true"
                >
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-smoke px-6 pb-5 pt-1">
                  <p className="text-sm leading-relaxed text-muted">{faq.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
