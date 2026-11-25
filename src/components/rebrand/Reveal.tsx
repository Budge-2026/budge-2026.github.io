import type { CSSProperties, ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: string
  as?: 'div' | 'span' | 'section' | 'article'
}

export function Reveal({ children, className = '', delay, as: Tag = 'div' }: RevealProps) {
  const ref = useReveal<HTMLDivElement>()
  const style = delay ? ({ '--d': delay } as CSSProperties) : undefined

  return (
    <Tag ref={ref as never} className={`reveal ${className}`.trim()} style={style}>
      {children}
    </Tag>
  )
}
