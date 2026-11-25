import { BRAND_MOTTO, BRAND_NAME } from '../constants/brand'
import { PageHero } from '../components/ui/PageHero'

export function About() {
  return (
    <div>
      <PageHero
        title={`About ${BRAND_NAME}`}
        subtitle={`${BRAND_MOTTO} Access to premium longevity medicine shouldn't be reserved for elite athletes and billionaires.`}
      />

      <section className="section">
        <div className="container">
          <div className="diff-grid" style={{ alignItems: 'center' }}>
            <div>
              <div className="arx-kicker">
                <span className="arx-dot" aria-hidden="true" />
                Our story
              </div>
              <h2>
                Built for serious biology, <em className="accent-serif">not exclusivity</em>
              </h2>
              <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-[var(--muted)]">
                <p>
                  {BRAND_NAME} was founded on a simple belief: access to premium longevity medicine
                  shouldn&apos;t be reserved for elite athletes and billionaires. After experiencing
                  firsthand how inflammation, hormonal decline, and cellular aging quietly erode
                  quality of life, our founder set out to build a physician-led platform that takes
                  your biology seriously — guided by one promise: {BRAND_MOTTO}
                </p>
                <p>
                  Today, {BRAND_NAME} is a premium telehealth platform, combining precision medicine,
                  peptide therapy, and regenerative wellness under one trusted brand.
                </p>
              </div>
            </div>

            <figure className="overflow-hidden rounded-[var(--radius-card)] bg-[var(--band)] shadow-[var(--shadow-card)]">
              <img
                src="/img/budge-collinson.png"
                alt="Budge Collinson, Founder of BudgeRx"
                className="block h-full w-full object-cover object-top"
                style={{ aspectRatio: '4 / 4.2' }}
              />
              <figcaption className="border-t border-white/10 bg-[var(--band)] px-6 py-5 text-white">
                <div className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  Budge Collinson
                </div>
                <div
                  className="mt-1 text-xs font-semibold uppercase tracking-[0.22em]"
                  style={{ color: 'var(--accent)' }}
                >
                  Founder
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="mx-auto max-w-[820px]">
            <div className="section-head" style={{ marginBottom: '2rem' }}>
              <h2>
                Meet the <em className="accent-serif">founder</em>
              </h2>
            </div>

            <div className="space-y-5 text-[1.02rem] leading-relaxed text-[var(--body)]">
              <p>
                Budge Collinson is a South Florida–based entrepreneur focused on advanced wellness,
                hormone optimization, and metabolic health. With a background in building nationally
                recognized businesses, he brings a results-driven, high-touch approach to modern
                longevity care.
              </p>
              <p>
                He was previously involved in the early development of Infusion Sciences as a
                nutritional supplement brand, helping bring its “Youth Infusion” product to market
                through The Vitamin Shoppe — with marketing collaborations that included George
                Hamilton.
              </p>
              <p>
                Today, Collinson leads {BRAND_NAME} as a premium telehealth wellness platform,
                offering curated therapies designed to enhance performance, accelerate recovery, and
                reduce inflammation — better medicine that supports better living.
              </p>
              <p>
                His focus is on delivering sophisticated, science-backed solutions in a discreet,
                concierge-style setting — personalized to your biology and tailored to your
                lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-[820px]">
            <div className="section-head" style={{ marginBottom: '2rem' }}>
              <h2>
                Our platform <em className="accent-serif">model</em>
              </h2>
              <p>
                Clinician judgment first — {BRAND_NAME} connects you to care; providers and
                pharmacies deliver it.
              </p>
            </div>

            <div className="space-y-5 text-[1.02rem] leading-relaxed text-[var(--body)]">
              <p>
                When you use {BRAND_NAME}, you complete a secure intake that is reviewed by an
                independent licensed provider. That provider — not {BRAND_NAME} — makes all clinical
                decisions, including whether to prescribe any medication.
              </p>
              <p>
                If a prescription is issued, it is filled by a licensed U.S. pharmacy, which may
                compound medications for individual patients when appropriate. Submitting an intake
                or payment does not guarantee a prescription.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
