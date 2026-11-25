import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { useCareQuiz } from './CareQuizContext'

type QuizCtaProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  className?: string
  /** Page or section slug forwarded to the funnel when the quiz completes. */
  from: string
  /** Button label used in utm_content. Defaults to string children. */
  trackLabel?: string
}

/** Opens the care-match quiz modal — use for generic CTAs. */
export function QuizCta({
  children,
  className = '',
  onClick,
  type = 'button',
  from,
  trackLabel,
  ...rest
}: QuizCtaProps) {
  const { openQuiz } = useCareQuiz()
  const label = trackLabel ?? (typeof children === 'string' ? children : '')

  return (
    <button
      type={type}
      className={className}
      onClick={(e) => {
        onClick?.(e)
        if (!e.defaultPrevented) openQuiz({ from, label })
      }}
      {...rest}
    >
      {children}
    </button>
  )
}
