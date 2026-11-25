import { SiteDisclaimer } from '../components/brand/SiteDisclaimer'
import { Button } from '../components/ui/Button'
import { SiteCard } from '../components/ui/SiteCard'
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder'
import { PLACEHOLDERS } from '../constants/brand'
import { slugifyTracking, type FunnelGoal } from '../lib/funnelTracking'
import { useFunnelHref } from '../components/tracking/FunnelLink'

export type TreatmentContent = {
  name: string
  tagline: string
  description: string
  whoItsFor: string
  howItWorks: string
  safetyNote: string
  image?: string
  imageAlt?: string
  startingPrice?: number
  priceLabel?: 'Starting at' | 'From' | 'Price Locked'
}

type TreatmentPageProps = {
  treatment: TreatmentContent
  ctaUrl?: string
  goal?: FunnelGoal
}

export function TreatmentPage({
  treatment,
  ctaUrl = PLACEHOLDERS.intakeUrl,
  goal,
}: TreatmentPageProps) {
  const from = `treatments-${slugifyTracking(treatment.name)}`
  const primaryHref = useFunnelHref(ctaUrl, { from, label: 'Start Your Intake', goal })
  const footerHref = useFunnelHref(ctaUrl, { from: `${from}-footer`, label: 'Start Your Intake', goal })

  return (
    <div>
      <SiteDisclaimer />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-[1200px] items-start gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">
              Prescription required
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
              {treatment.name}
            </h1>
            <p className="mt-3 text-lg text-muted">{treatment.tagline}</p>
            <p className="mt-6 leading-relaxed text-muted">{treatment.description}</p>
            {typeof treatment.startingPrice === 'number' ? (
              <p className="arx-product-card__price mt-6">
                {treatment.priceLabel ? (
                  <span
                    className={
                      treatment.priceLabel === 'Price Locked'
                        ? 'price-prefix price-prefix--locked'
                        : 'price-prefix'
                    }
                  >
                    {treatment.priceLabel}
                  </span>
                ) : null}
                <span className="price-amount">${treatment.startingPrice}</span>
                <span className="price-unit">/ mo</span>
              </p>
            ) : null}
            <div className="mt-8">
              <Button href={primaryHref}>Start Your Intake</Button>
            </div>
          </div>
          {treatment.image ? (
            <div className="overflow-hidden rounded-[20px] border border-smoke bg-cloud">
              <img
                src={treatment.image}
                alt={treatment.imageAlt ?? treatment.name}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          ) : (
            <ImagePlaceholder
              alt={`${treatment.name} vial image placeholder`}
              aspectRatio="portrait"
              className="rounded-[20px]"
            />
          )}
        </div>
      </section>

      <section className="border-t border-smoke bg-cloud py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] space-y-6 px-6">
          {[
            { title: 'Who it may be for', content: treatment.whoItsFor },
            { title: 'How treatment works', content: treatment.howItWorks },
            { title: 'Safety & provider guidance', content: treatment.safetyNote },
          ].map((block) => (
            <SiteCard key={block.title} hover={false}>
              <h2 className="text-xl font-semibold text-ink">{block.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{block.content}</p>
            </SiteCard>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-sm leading-relaxed text-muted">
            When compounded, {treatment.name} is prepared by a licensed pharmacy for an individual
            patient and is not an FDA-approved drug product. Your provider will review your history
            and decide whether treatment is right for you. Submitting intake does not guarantee a
            prescription.
          </p>
          <div className="mt-8">
            <Button href={footerHref}>Start Your Intake</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
