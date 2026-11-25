import { type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { buildFunnelUrl, type FunnelGoal, type FunnelTracking } from '../../lib/funnelTracking'

export function useFunnelHref(baseUrl: string, tracking: FunnelTracking) {
  const { search } = useLocation()
  return buildFunnelUrl(baseUrl, tracking, search)
}

type FunnelLinkProps = {
  href: string
  from: string
  label: string
  goal?: FunnelGoal
  className?: string
  children: ReactNode
}

export function FunnelLink({ href, from, label, goal, className, children }: FunnelLinkProps) {
  const tracked = useFunnelHref(href, { from, label, goal })

  return (
    <a className={className} href={tracked}>
      {children}
    </a>
  )
}
