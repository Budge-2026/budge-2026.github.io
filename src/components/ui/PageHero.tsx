import { BRAND_SHORT } from '../../constants/brand'

type PageHeroProps = {
  title: string
  subtitle?: string
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="border-b border-smoke bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="arx-kicker justify-center">
            <span className="arx-dot" aria-hidden="true" />
            {BRAND_SHORT}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-ink md:text-5xl">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  )
}
