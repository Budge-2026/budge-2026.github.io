export type FunnelGoal = 'weight' | 'peptide' | 'anti-aging' | 'sexual-health' | 'sleep'

export type FunnelTracking = {
  from: string
  label: string
  goal?: FunnelGoal
}

/** Lowercase, hyphenate spaces and symbols, and trim edge hyphens. */
export function slugifyTracking(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function withSalesPrefix(pathname: string, slug: string): string {
  return pathname === '/s' ? `s-${slug}` : slug
}

/**
 * Build a funnel URL with CTA tracking.
 * Incoming query params are forwarded, except `from`, which always comes from this CTA.
 * `utm_source`, `utm_content`, and an explicit `goal` overwrite any incoming values.
 */
export function buildFunnelUrl(
  baseUrl: string,
  tracking: FunnelTracking,
  incomingSearch = '',
): string {
  const url = new URL(baseUrl)
  const params = new URLSearchParams(url.search)
  const incoming = new URLSearchParams(
    incomingSearch.startsWith('?') ? incomingSearch.slice(1) : incomingSearch,
  )

  incoming.forEach((value, key) => {
    if (key === 'from') return
    params.append(key, value)
  })

  const from = slugifyTracking(tracking.from)
  const label = slugifyTracking(tracking.label)
  params.set('from', from)
  params.set('utm_source', 'website')
  params.set('utm_content', `${from}__${label}`)
  if (tracking.goal) params.set('goal', tracking.goal)

  url.search = params.toString()
  return url.toString()
}
