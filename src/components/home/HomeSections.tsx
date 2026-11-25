import { PLACEHOLDERS, TREATMENTS } from '../../constants/brand'
import { IntakePathFeatures } from '../ui/features-2'
import { Button } from '../ui/Button'
import { ShowcaseCard } from '../ui/showcase-card-1'
import { Section, SectionHeader } from '../ui/Section'
import { useFunnelHref } from '../tracking/FunnelLink'

export function HowItWorksSection() {
  return (
    <>
      <IntakePathFeatures id="how-it-works" />
      <Section variant="cloud" className="!pt-0">
        <div className="text-center">
          <Button href="/how-it-works" variant="outline">
            Learn More
          </Button>
        </div>
      </Section>
    </>
  )
}

export function TreatmentsSection() {
  return (
    <Section id="treatments" variant="white">
      <SectionHeader
        title={
          <>
            Treatments that may be <em>right for you</em>
          </>
        }
        subtitle="Explore options that may be appropriate if a provider determines they fit your needs. All treatments require a prescription and provider review."
      />
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-8">
        {TREATMENTS.map((treatment) => (
          <div key={treatment.slug} className="w-full sm:w-[calc(50%-1rem)]">
            <TrackedTreatmentCard treatment={treatment} />
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button href="/treatments" variant="outline">
          View All Treatments
        </Button>
      </div>
    </Section>
  )
}

function TrackedTreatmentCard({ treatment }: { treatment: (typeof TREATMENTS)[number] }) {
  const href = useFunnelHref(treatment.ctaUrl, {
    from: 'home-treatments',
    label: treatment.name,
  })

  return (
    <ShowcaseCard
      name={treatment.name}
      tagline={treatment.tagline}
      description={treatment.description}
      image={treatment.image ?? '/placeholder.svg'}
      imageAlt={`${treatment.name} product placeholder`}
      href={href}
    />
  )
}

export function CTABanner() {
  const intakeHref = useFunnelHref(PLACEHOLDERS.intakeUrl, {
    from: 'home-banner',
    label: 'Get Started',
  })

  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 bg-dark" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 15% 20%, rgba(40,40,168,0.35), transparent 55%), radial-gradient(ellipse at 85% 80%, rgba(64,64,200,0.15), transparent 50%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="max-w-2xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Start your personalized care journey with BudgeRx
            </h2>
            <p className="mt-3 text-brand-mid">Licensed providers · HIPAA-aware platform</p>
            <ul className="mt-6 space-y-3">
              {[
                'No membership required',
                'Transparent process',
                'Cancel when you need to',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/85">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/20 text-xs text-brand">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={intakeHref}>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
