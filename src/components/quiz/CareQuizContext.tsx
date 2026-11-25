import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

export type QuizTrackingSource = {
  from: string
  label: string
}

type CareQuizContextValue = {
  isOpen: boolean
  source: QuizTrackingSource | null
  openQuiz: (source: QuizTrackingSource) => void
  closeQuiz: () => void
}

const CareQuizContext = createContext<CareQuizContextValue | null>(null)

export function CareQuizProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [source, setSource] = useState<QuizTrackingSource | null>(null)

  const openQuiz = useCallback((next: QuizTrackingSource) => {
    setSource(next)
    setIsOpen(true)
  }, [])
  const closeQuiz = useCallback(() => setIsOpen(false), [])

  const value = useMemo(
    () => ({ isOpen, source, openQuiz, closeQuiz }),
    [isOpen, source, openQuiz, closeQuiz],
  )

  return <CareQuizContext.Provider value={value}>{children}</CareQuizContext.Provider>
}

export function useCareQuiz() {
  const ctx = useContext(CareQuizContext)
  if (!ctx) {
    throw new Error('useCareQuiz must be used within CareQuizProvider')
  }
  return ctx
}
