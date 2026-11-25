import type { ReactNode } from 'react'

type SiteCardProps = {
  children: ReactNode
  className?: string
  hover?: boolean
  as?: 'div' | 'article'
}

export function SiteCard({
  children,
  className = '',
  hover = true,
  as: Tag = 'div',
}: SiteCardProps) {
  return (
    <Tag
      className={`rounded-[20px] border border-smoke bg-white p-8 shadow-[0_2px_12px_rgba(12,30,60,0.08)] md:p-10 ${
        hover
          ? 'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(12,30,60,0.12)]'
          : ''
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
