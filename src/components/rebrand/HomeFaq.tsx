import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { BRAND_SHORT, PLACEHOLDERS } from '../../constants/brand'
import { CLINICAL_PROVIDER, EPIQ_SCRIPTS, FULFILLMENT_PHARMACY } from '../../constants/policy'
import { Reveal } from './Reveal'

type FaqItem = {
  question: string
  answer: ReactNode
}

const faqs: FaqItem[] = [
  {
    question: 'What states do we serve?',
    answer: <>All 50 states are served by {BRAND_SHORT}.</>,
  },
  {
    question: 'Who are our pharmacies?',
    answer: (
      <>
        Medications are prepared and dispensed by licensed U.S. pharmacies, including{' '}
        <a href={FULFILLMENT_PHARMACY.url} target="_blank" rel="noopener noreferrer" className="legal-link">
          {FULFILLMENT_PHARMACY.name}
        </a>{' '}
        and{' '}
        <a href={EPIQ_SCRIPTS.url} target="_blank" rel="noopener noreferrer" className="legal-link">
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
        {BRAND_SHORT} connects you with independent licensed healthcare providers through{' '}
        <a href={CLINICAL_PROVIDER.url} target="_blank" rel="noopener noreferrer" className="legal-link">
          {CLINICAL_PROVIDER.name}
        </a>
        , who review your intake and determine whether a prescription is appropriate for you.
      </>
    ),
  },
  {
    question: 'How do consultations work?',
    answer: (
      <>
        Complete a secure online intake. A provider reviews your health history and may follow up
        with questions before writing a prescription. Submitting intake does not guarantee a
        prescription.
      </>
    ),
  },
  {
    question: 'How long does shipping take?',
    answer: (
      <>
        After provider approval, most prescriptions ship within 2–3 days with tracking when
        applicable. Delivery times may vary by location.
      </>
    ),
  },
  {
    question: 'What is your refund and cancellation policy?',
    answer: (
      <>
        See our{' '}
        <Link to="/refund-policy" className="legal-link">
          Refund Policy
        </Link>{' '}
        for full details on eligibility and cancellation. For billing help, email{' '}
        <a href={`mailto:${PLACEHOLDERS.supportEmail}`} className="legal-link">
          {PLACEHOLDERS.supportEmail}
        </a>
        .
      </>
    ),
  },
  {
    question: 'Is a prescription required?',
    answer: (
      <>
        Yes. All treatments require a prescription from a licensed provider following an appropriate
        clinical review.
      </>
    ),
  },
]

export function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section" id="faq">
      <div className="container">
        <Reveal className="section-head">
          <h2>
            Frequently <em className="accent-serif">asked questions</em>
          </h2>
          <p>
            Straight answers on eligibility, pharmacies, providers, shipping, and how {BRAND_SHORT}{' '}
            premium telehealth works.
          </p>
        </Reveal>

        <Reveal className="faq-list">
          {faqs.map((faq, i) => {
            const open = openIndex === i
            return (
              <div key={faq.question} className={`faq-item${open ? ' open' : ''}`}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                >
                  {faq.question}
                  <span className="chev">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  className="faq-a"
                  style={{ maxHeight: open ? 400 : 0 }}
                >
                  <div className="faq-a-inner">{faq.answer}</div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
