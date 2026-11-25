type PolicySectionProps = {
  title: string
  children: React.ReactNode
}

export function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

type PolicyLayoutProps = {
  title: string
  lastUpdated?: string
  children: React.ReactNode
}

export function PolicyLayout({ title, lastUpdated, children }: PolicyLayoutProps) {
  return (
    <div>
      <section className="border-b border-smoke bg-white py-10 md:py-12">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">{title}</h1>
          {lastUpdated && (
            <p className="mt-3 text-sm text-muted">Last updated: {lastUpdated}</p>
          )}
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[800px] px-6">
          <div className="rounded-[20px] border border-smoke bg-white p-8 shadow-[0_2px_12px_rgba(12,30,60,0.08)] md:p-12">
            <div className="prose-policy">{children}</div>
          </div>
        </div>
      </section>
    </div>
  )
}
