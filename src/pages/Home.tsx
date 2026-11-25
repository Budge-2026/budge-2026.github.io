import { Link, useLocation } from 'react-router-dom'
import {
  BRAND_MOTTO,
  BRAND_NAME,
  DIFF_ITEMS,
  PLACEHOLDERS,
  TREATMENTS,
} from '../constants/brand'
import { Carousel } from '../components/rebrand/Carousel'
import { PrecisionScroller } from '../components/rebrand/PrecisionScroller'
import { Reveal } from '../components/rebrand/Reveal'
import { HomeFaq } from '../components/rebrand/HomeFaq'
import { HowItWorksSteps, HOME_HOW_IT_WORKS_STEPS } from '../components/rebrand/HowItWorksSteps'
import { WeightCalculator } from '../components/rebrand/WeightCalculator'
import { QuizCta } from '../components/quiz/QuizCta'
import { FunnelLink } from '../components/tracking/FunnelLink'
import { withSalesPrefix, type FunnelGoal } from '../lib/funnelTracking'

const GOAL_CARDS: {
  label: string
  href: string
  goal: FunnelGoal
  image: string
  alt: string
}[] = [
  {
    label: 'Support your metabolism',
    href: PLACEHOLDERS.glp1FunnelUrl,
    goal: 'weight',
    image: '/img/goals/weight.jpg',
    alt: 'Couple preparing a healthy meal together',
  },
  {
    label: 'Recover with more energy',
    href: PLACEHOLDERS.growthHormoneFunnelUrl,
    goal: 'peptide',
    image: '/img/goals/energy.jpg',
    alt: 'People running outdoors together',
  },
  {
    label: 'Feel like yourself again',
    href: PLACEHOLDERS.antiAgingFunnelUrl,
    goal: 'anti-aging',
    image: '/img/goals/feel.jpg',
    alt: 'Friends laughing together outdoors',
  },
]

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12l5 5L20 7" />
  </svg>
)

const PRECISION_MEDS: {
  slug: 'semaglutide' | 'tirzepatide' | 'nad' | 'sermorelin'
  badge: string
  highlighted?: boolean
  path: string
  pricePrefix: string
  points: { strong?: string; text: string }[]
  cta: string
  goal: FunnelGoal
  imageAlt: string
}[] = [
  {
    slug: 'semaglutide',
    badge: 'Lowest price',
    path: 'GLP-1 · weekly injection',
    pricePrefix: 'From',
    points: [
      { strong: 'Metabolic support', text: ' with compounded semaglutide, when a provider determines it fits' },
      { text: 'The active ingredient in Wegovy® and Ozempic®' },
      { text: 'A good fit if price matters most or you’re starting out' },
    ],
    cta: 'Start with semaglutide',
    goal: 'weight',
    imageAlt: 'A vial labelled Semaglutide, GLP-1 agonist, compounded medication',
  },
  {
    slug: 'tirzepatide',
    badge: 'Dual action',
    highlighted: true,
    path: 'GLP-1 + GIP · weekly',
    pricePrefix: 'From',
    points: [
      { strong: 'Dual pathway', text: ' metabolic care, when a provider determines it fits' },
      { text: 'The active ingredient in Zepbound® and Mounjaro®' },
      { text: 'A good fit if you want the dual-action option' },
    ],
    cta: 'Start with tirzepatide',
    goal: 'weight',
    imageAlt: 'A vial labelled Tirzepatide, GLP-1 + GIP agonist, compounded medication',
  },
  {
    slug: 'nad',
    badge: 'Cellular energy',
    path: 'Energy and recovery',
    pricePrefix: 'From',
    points: [
      { strong: 'Cellular energy', text: ' and recovery support, when a provider determines it fits' },
      { text: 'Reviewed by an independent licensed provider' },
      { text: 'A good fit if everyday vitality is the goal' },
    ],
    cta: 'Start with NAD+',
    goal: 'anti-aging',
    imageAlt: 'A vial labelled NAD+, nicotinamide adenine dinucleotide, compounded medication',
  },
  {
    slug: 'sermorelin',
    badge: 'Price locked',
    highlighted: true,
    path: 'Sleep and recovery',
    pricePrefix: 'Locked',
    points: [
      { strong: 'Restorative sleep', text: ', recovery, and vitality when a provider determines it fits' },
      { text: 'Compounded sermorelin 3 mg/mL' },
      { text: 'Your monthly price is locked and never changes' },
    ],
    cta: 'Start with Sermorelin',
    goal: 'peptide',
    imageAlt: 'A vial labelled Sermorelin, growth hormone–releasing peptide, compounded medication',
  },
]

function PrecisionMedCard({
  card,
  from,
}: {
  card: (typeof PRECISION_MEDS)[number]
  from: string
}) {
  const treatment = TREATMENTS.find((item) => item.slug === card.slug)
  if (!treatment || typeof treatment.startingPrice !== 'number') return null

  return (
    <article className={card.highlighted ? 'rx-med rx-med--hi' : 'rx-med'}>
      <div className="rx-med__top">
        <div>
          <span className={card.highlighted ? 'rx-med__badge rx-med__badge--hi' : 'rx-med__badge'}>
            {card.badge}
          </span>
          <h3>{treatment.name}</h3>
          <p className="rx-med__path">{card.path}</p>
        </div>
        <img
          className="rx-med__vial"
          src={treatment.image ?? treatment.vialImage}
          alt={card.imageAlt}
          width={480}
          height={600}
          loading="lazy"
        />
      </div>
      <p className="rx-med__price">
        <span>{card.pricePrefix}</span>
        <b>${treatment.startingPrice}</b>
        <small>/mo</small>
      </p>
      <ul className="rx-med__list">
        {card.points.map((point) => (
          <li key={point.text}>
            {point.strong ? <b>{point.strong}</b> : null}
            {point.text}
          </li>
        ))}
      </ul>
      <FunnelLink
        className={card.highlighted ? 'btn btn-primary rx-med__cta' : 'btn rx-med__cta rx-med__cta--outline'}
        href={treatment.ctaUrl}
        from={from}
        label={card.cta}
        goal={card.goal}
      >
        {card.cta}
      </FunnelLink>
    </article>
  )
}

export function Home() {
  const { pathname } = useLocation()
  const trackFrom = (slug: string) => withSalesPrefix(pathname, slug)

  return (
    <>
      {/* HERO — full-bleed lifestyle image */}
      <section className="arx-hero" aria-label="Hero">
        <div className="arx-hero__media" aria-hidden="true">
          <picture>
            <source media="(max-width: 768px)" srcSet="/img/hero-poster-mobile.jpg" />
            <img
              className="arx-hero__poster"
              src="/img/hero-poster.jpg"
              alt=""
              width={2400}
              height={1339}
              fetchPriority="high"
            />
          </picture>
          <div className="arx-hero__scrim" />
        </div>

        <div className="container arx-hero__content">
          <div className="arx-hero__eyebrow">
            <span className="arx-dot" aria-hidden="true" />
            <span>{BRAND_NAME}</span>
          </div>
          <h1 className="arx-hero__title">{BRAND_MOTTO}</h1>
          <p className="arx-hero__subtitle">
            Premium telehealth for metabolic health, recovery, and longevity — science-backed care
            personalized to your biology, without the exclusivity.
          </p>
          <div className="arx-hero__rating" aria-label="4.5 out of 5 stars from 2,300 reviews">
            <span className="star-rating" aria-hidden="true">
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star half">★</span>
            </span>
            <b>4.5</b>
            <small>· 2,300 reviews</small>
          </div>
          <QuizCta className="btn btn-primary btn-lg arx-hero__cta" from={trackFrom('home-hero')}>
            Start Your Journey
          </QuizCta>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="section meds-band" id="treatments">
        <div className="container">
          <Reveal className="section-head">
            <div className="arx-kicker">
              <span className="arx-dot" aria-hidden="true" />
              Curated therapies
            </div>
            <h2>
              Precision medicine, <em className="accent-serif">made accessible</em>
            </h2>
            <p>
              Semaglutide and tirzepatide for metabolic support. NAD+ and Sermorelin for energy and
              recovery. Glutathione, peptides, and sleep support are in the full catalog. A licensed
              provider recommends the one that fits you.
            </p>
          </Reveal>

          <Reveal>
            <PrecisionScroller label="Precision medicine treatments">
              {PRECISION_MEDS.map((card) => (
                <PrecisionMedCard key={card.slug} card={card} from={trackFrom('home-treatments')} />
              ))}
            </PrecisionScroller>
          </Reveal>

          <p className="rx-meds__note">
            Not sure? Your provider makes the final recommendation based on your health history.
            Vial images are illustrative. Your medication may look different.
          </p>

          <div className="treatments-all">
            <Link className="btn btn-ghost" to="/treatments">
              All Treatments
            </Link>
          </div>

          <p className="fineprint">
            All treatments require a prescription and provider review. Where shown, plans reflect the
            monthly cost when billed as a 3-month supply. Final pricing may vary based on individual
            treatment plan. Cancel anytime. See terms at checkout.
          </p>
        </div>
      </section>

      <WeightCalculator from={trackFrom('home-calculator')} />

      {/* GOALS */}
      <section className="section" id="goals">
        <div className="container">
          <Reveal className="section-head">
            <h2>
              What does <em className="accent-serif">better living</em> look like for you?
            </h2>
            <p>
              From metabolic health to everyday energy, {BRAND_NAME} pairs sophisticated therapies
              with concierge-style support — tailored to your goals and lifestyle.
            </p>
          </Reveal>

          <Reveal>
            <div className="goal-grid">
              {GOAL_CARDS.map((card) => (
                <FunnelLink
                  key={card.label}
                  href={card.href}
                  from={trackFrom('home-goals')}
                  label={card.label}
                  goal={card.goal}
                  className="goal-card"
                >
                  <img src={card.image} alt={card.alt} loading="lazy" />
                  <div className="goal-card__scrim" aria-hidden="true" />
                  <div className="goal-card__footer">
                    <span>{card.label}</span>
                    <span className="goal-card__arrow" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </span>
                  </div>
                </FunnelLink>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <HowItWorksSteps
        id="process"
        className="section section-alt"
        heading={
          <>
            Better medicine <em className="accent-serif">starts here</em>
          </>
        }
        steps={HOME_HOW_IT_WORKS_STEPS}
        alternate={false}
        ctaHref="/how-it-works"
        ctaLabel="See How It Works"
        ctaClassName="btn btn-secondary"
      />

      {/* WHY / BENEFITS */}
      <section className="section arx-dark-band" id="why">
        <div className="container">
          <Reveal className="section-head">
            <div className="arx-kicker arx-kicker--light">
              <span className="arx-dot arx-dot--accent" aria-hidden="true" />
              Why {BRAND_NAME}
            </div>
            <h2>
              Premium care, <em className="accent-serif">without the gatekeeping</em>
            </h2>
            <p>
              We built {BRAND_NAME} so sophisticated, science-backed wellness isn&apos;t reserved for
              elites — discreet, high-touch telehealth that takes your biology seriously.
            </p>
          </Reveal>

          <div className="diff-grid">
            <Reveal>
              <ul className="diff-list">
                {DIFF_ITEMS.map((item) => (
                  <li key={item}>
                    <span className="diff-check" aria-hidden="true">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <figure className="arx-why-media">
                <img
                  src="/img/why-budgerx.jpg"
                  alt="Patient receiving personalized BudgeRx telehealth support"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section" id="reviews">
        <div className="container">
          <Reveal className="section-head">
            <div className="arx-kicker">
              <span className="arx-dot" aria-hidden="true" />
              Patient experiences
            </div>
            <h2>
              Care that feels <em className="accent-serif">human</em> — and results that feel real
            </h2>
            <p>Trusted by 2,300+ patients across all 50 states.</p>
          </Reveal>

          <Reveal className="rating-row">
            <div className="rating-chip" aria-label="4.5 out of 5 stars from 2,300 reviews">
              <span className="stars star-rating" aria-hidden="true">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star half">★</span>
              </span>
              <b>4.5</b>
              <small>· 2,300 reviews</small>
            </div>
          </Reveal>

          <Reveal>
            <Carousel perView={3}>
              {[
                {
                  quote:
                    'I wanted premium care without the country-club runaround. Intake was clear, a licensed provider followed up the next day, and my first shipment arrived cold and labeled. Three months in I’m down a clothing size — and I finally feel in control again.',
                  name: 'Rachel M.',
                },
                {
                  quote:
                    'Tirzepatide through BudgeRx felt like real medicine, not a maze. Transparent pricing, a provider who answered my questions, and discreet delivery. The process was polished end to end — and the results have been tangible for me.',
                  name: 'Marcus T.',
                },
                {
                  quote:
                    'Between work and kids I needed something high-touch but simple. Semaglutide was prescribed after my review, shipping was quick, and support actually replied when I had a dosing question. It felt concierge — without feeling cold or corporate.',
                  name: 'Elena R.',
                },
              ].map((review) => (
                <div key={review.name} className="testi-card">
                  <div className="testi-stars">★★★★★</div>
                  <p className="testi-text">“{review.quote}”</p>
                  <div className="testi-name">{review.name}</div>
                </div>
              ))}
            </Carousel>
          </Reveal>
        </div>
      </section>

      <HomeFaq />

      <section className="disclaimer">
        <div className="container">
          <p>
            {BRAND_NAME} is a telehealth technology platform — not a medical practice or pharmacy.
            Medical care is provided by independent licensed healthcare providers. Compounded
            medications are prepared by licensed U.S. pharmacies and are not FDA-approved. Individual
            results vary. This content is educational and is not a substitute for professional
            medical advice, diagnosis, or treatment. All patients must consult with a healthcare
            provider prior to the prescription or dispensing of any medication, which will be done
            only pursuant to a valid prescription.
          </p>
          <Link className="terms-link" to="/terms">
            Read our Terms of Service →
          </Link>
        </div>
      </section>
    </>
  )
}
