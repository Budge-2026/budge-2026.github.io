import { useEffect, useId, useState } from 'react'
import { PLACEHOLDERS, TREATMENT_SECTIONS, TREATMENTS, type TreatmentCategory } from '../../constants/brand'
import { useFunnelHref } from '../tracking/FunnelLink'
import { type FunnelGoal } from '../../lib/funnelTracking'
import { useCareQuiz } from './CareQuizContext'

const GOAL_BY_CATEGORY: Record<TreatmentCategory, FunnelGoal> = {
  'weight-loss': 'weight',
  'anti-aging': 'anti-aging',
  recovery: 'peptide',
  sleep: 'sleep',
  'sexual-health': 'sexual-health',
}

const GOAL_OPTIONS: { id: TreatmentCategory; label: string; hint: string }[] = [
  {
    id: 'weight-loss',
    label: 'Support my metabolism / weight goals',
    hint: 'Semaglutide and tirzepatide',
  },
  {
    id: 'anti-aging',
    label: 'Feel more like myself again',
    hint: 'NAD+, glutathione, and GHK-Cu cream',
  },
  {
    id: 'recovery',
    label: 'Recover with more energy',
    hint: 'Sermorelin, BPC-157, and MIC + B12',
  },
  {
    id: 'sleep',
    label: 'Sleep more restfully',
    hint: 'Teep Teeps (ramelteon and magnesium L-threonate)',
  },
  {
    id: 'sexual-health',
    label: 'Support erectile function',
    hint: 'Candlestick Rx chewable rapid-dissolving tablet',
  },
]

export function CareQuizModal() {
  const { isOpen, source, closeQuiz } = useCareQuiz()
  const titleId = useId()
  const [step, setStep] = useState<'goal' | 'treatment' | 'result'>('goal')
  const [categoryId, setCategoryId] = useState<TreatmentCategory | null>(null)
  const [treatmentSlug, setTreatmentSlug] = useState<string | null>(null)

  useEffect(() => {
    if (!isOpen) {
      setStep('goal')
      setCategoryId(null)
      setTreatmentSlug(null)
      return
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeQuiz()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [isOpen, closeQuiz])

  const section = TREATMENT_SECTIONS.find((item) => item.id === categoryId) ?? null
  const matches = categoryId ? TREATMENTS.filter((item) => item.category === categoryId) : []
  const selected = TREATMENTS.find((item) => item.slug === treatmentSlug) ?? null
  const resultHref = useFunnelHref(selected?.ctaUrl ?? PLACEHOLDERS.intakeUrl, {
    from: source?.from ?? 'care-quiz',
    label: source?.label || (selected ? `Continue to ${selected.name}` : 'continue'),
    goal: categoryId ? GOAL_BY_CATEGORY[categoryId] : undefined,
  })

  if (!isOpen) return null

  function chooseCategory(id: TreatmentCategory) {
    const items = TREATMENTS.filter((item) => item.category === id)
    setCategoryId(id)
    if (items.length === 1) {
      setTreatmentSlug(items[0].slug)
      setStep('result')
      return
    }
    setTreatmentSlug(null)
    setStep('treatment')
  }

  return (
    <div className="care-quiz" role="presentation">
      <button
        type="button"
        className="care-quiz__backdrop"
        aria-label="Close quiz"
        onClick={closeQuiz}
      />
      <div
        className="care-quiz__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button type="button" className="care-quiz__close" aria-label="Close" onClick={closeQuiz}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="care-quiz__kicker">
          <span className="arx-dot" aria-hidden="true" />
          Care match quiz
        </div>

        {step === 'goal' ? (
          <>
            <h2 id={titleId} className="care-quiz__title">
              What are you looking to improve?
            </h2>
            <p className="care-quiz__lead">
              Answer one question — we&apos;ll point you to the BudgeRx path that fits your goals.
              A licensed provider still decides if treatment is appropriate.
            </p>
            <div className="care-quiz__options" role="listbox" aria-label="Primary goal">
              {GOAL_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`care-quiz__option${categoryId === option.id ? ' is-selected' : ''}`}
                  onClick={() => chooseCategory(option.id)}
                >
                  <span className="care-quiz__option-label">{option.label}</span>
                  <span className="care-quiz__option-hint">{option.hint}</span>
                </button>
              ))}
            </div>
          </>
        ) : null}

        {step === 'treatment' && section ? (
          <>
            <h2 id={titleId} className="care-quiz__title">
              Which treatment should we start with?
            </h2>
            <p className="care-quiz__lead">
              {section.subtitle}
            </p>
            <div className="care-quiz__options" role="listbox" aria-label={`${section.title} treatments`}>
              {matches.map((treatment) => (
                <button
                  key={treatment.slug}
                  type="button"
                  className="care-quiz__option"
                  onClick={() => {
                    setTreatmentSlug(treatment.slug)
                    setStep('result')
                  }}
                >
                  <span className="care-quiz__option-label">{treatment.name}</span>
                  <span className="care-quiz__option-hint">{treatment.tagline}</span>
                </button>
              ))}
            </div>
            <div className="care-quiz__actions">
              <button type="button" className="btn btn-ghost" onClick={() => setStep('goal')}>
                Back
              </button>
            </div>
          </>
        ) : null}

        {step === 'result' && selected && section ? (
          <>
            <h2 id={titleId} className="care-quiz__title">
              Your recommended starting path
            </h2>
            <p className="care-quiz__lead">
              Based on your goal, here&apos;s where most patients begin — personalized after
              provider review.
            </p>
            <div className="care-quiz__result">
              <div className="care-quiz__result-eyebrow">{section.title}</div>
              <h3>{selected.name}</h3>
              <p className="care-quiz__result-rec">{selected.tagline}</p>
              <p>{selected.description}</p>
            </div>
            <div className="care-quiz__actions care-quiz__actions--split">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setStep(matches.length === 1 ? 'goal' : 'treatment')}
              >
                Back
              </button>
              <a className="btn btn-primary btn-lg" href={resultHref}>
                Continue to intake
              </a>
            </div>
            <p className="care-quiz__fineprint">
              Submitting intake does not guarantee a prescription. Compounded medications are not
              FDA-approved.
            </p>
          </>
        ) : null}
      </div>
    </div>
  )
}
