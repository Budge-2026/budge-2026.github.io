import { Link } from 'react-router-dom'
import { BRAND_MOTTO, BRAND_NAME, PLACEHOLDERS, TREATMENTS } from '../constants/brand'
import { Reveal } from '../components/rebrand/Reveal'
import { Carousel } from '../components/rebrand/Carousel'
import { HomeFaq } from '../components/rebrand/HomeFaq'
import { HowItWorksSteps } from '../components/rebrand/HowItWorksSteps'
import { QuizCta } from '../components/quiz/QuizCta'

const PROMISE_STATS = [
  { value: '< 24 hrs', label: 'typical support response window' },
  { value: '4.5/5', label: 'average patient satisfaction rating' },
  { value: '50 states', label: 'where eligible adults can get started' },
] as const

const REVIEWS = [
  {
    quote:
      'I wanted premium care without the country-club runaround. Intake was clear, a licensed provider followed up the next day, and my first shipment arrived cold and labeled.',
    name: 'Rachel M.',
  },
  {
    quote:
      'Tirzepatide through BudgeRx felt like real medicine, not a maze. Transparent pricing, a provider who answered my questions, and discreet delivery.',
    name: 'Marcus T.',
  },
  {
    quote:
      'Between work and kids I needed something high-touch but simple. Semaglutide was prescribed after my review, shipping was quick, and support actually replied.',
    name: 'Elena R.',
  },
] as const

export function HowItWorks() {
  return (
    <div className="hiw-page">
      <section className="hiw-hero">
        <div className="container hiw-hero__inner">
          <Reveal>
            <div className="arx-kicker justify-center">
              <span className="arx-dot" aria-hidden="true" />
              How {BRAND_NAME} works
            </div>
            <h1>
              Better medicine, <em className="accent-serif">built around you</em>
            </h1>
            <p>
              {BRAND_MOTTO} Independent licensed providers, a clear online process, and discreet
              pharmacy fulfillment when clinically appropriate — premium telehealth without the
              exclusivity.
            </p>
            <div className="hiw-hero__actions">
              <QuizCta className="btn btn-primary btn-lg" from="how-it-works-hero">
                Get Started
              </QuizCta>
            </div>
          </Reveal>
        </div>
      </section>

      <HowItWorksSteps ctaFrom="how-it-works-steps" />

      <section className="section arx-dark-band" id="care-promise">
        <div className="container">
          <div className="hiw-promise">
            <Reveal>
              <div className="arx-kicker arx-kicker--light">
                <span className="arx-dot arx-dot--accent" aria-hidden="true" />
                Concierge-style support
              </div>
              <h2>
                High-touch care that <em className="accent-serif">stays with you</em>
              </h2>
              <p>
                Your questions aren&apos;t tickets to close — they&apos;re problems we help solve.
                When something comes up, {BRAND_NAME} support and your licensed provider network
                guide the next step.
              </p>
            </Reveal>
            <Reveal>
              <ul className="hiw-promise__stats">
                {PROMISE_STATS.map((stat) => (
                  <li key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="platform">
        <div className="container">
          <Reveal className="section-head">
            <div className="arx-kicker">
              <span className="arx-dot" aria-hidden="true" />
              Clinician judgment first
            </div>
            <h2>
              Independent providers. Licensed pharmacies.{' '}
              <em className="accent-serif">{BRAND_NAME}</em> connects the experience.
            </h2>
            <p>
              {BRAND_NAME} is a telehealth technology platform — not a medical practice or pharmacy.
              Licensed providers make all clinical decisions. Pharmacies fulfill prescriptions when
              issued.
            </p>
          </Reveal>

          <div className="hiw-platform-grid">
            {[
              {
                title: 'Licensed providers',
                body: 'Independent U.S.-licensed clinicians review your intake and decide whether treatment is appropriate for your biology and goals.',
              },
              {
                title: 'Licensed pharmacies',
                body: 'When prescribed, medications are prepared and shipped by licensed U.S. pharmacies. Compounded medications are not FDA-approved.',
              },
              {
                title: 'Transparent process',
                body: 'Clear pricing, HIPAA-aware practices, and ongoing support — discreet and high-touch, without mystery clinics.',
              },
            ].map((card) => (
              <Reveal key={card.title} className="hiw-platform-card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="stories">
        <div className="container">
          <Reveal className="section-head">
            <div className="arx-kicker">
              <span className="arx-dot" aria-hidden="true" />
              Patient experiences
            </div>
            <h2>
              What better living looks like with{' '}
              <em className="accent-serif">real support</em>
            </h2>
          </Reveal>

          <Reveal>
            <Carousel perView={3}>
              {REVIEWS.map((review) => (
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

      <section className="section section-alt" id="next-steps">
        <div className="container">
          <Reveal className="section-head">
            <h2>
              Ready for better medicine — and{' '}
              <em className="accent-serif">better living?</em>
            </h2>
          </Reveal>

          <div className="hiw-cta-grid">
            <Reveal className="hiw-cta-card">
              <h3>Explore treatments</h3>
              <p>See every treatment, including starting prices where we publish them.</p>
              <ul className="hiw-cta-card__list">
                {TREATMENTS.map((t) => (
                  <li key={t.slug}>
                    <Link to={t.pageHref}>{t.name}</Link>
                  </li>
                ))}
              </ul>
              <Link className="btn btn-primary" to="/treatments">
                Explore All Treatments
              </Link>
            </Reveal>

            <Reveal className="hiw-cta-card">
              <h3>Prefer a human first?</h3>
              <p>Email our team anytime — we&apos;ll help you find the right next step.</p>
              <a className="btn btn-secondary" href={`mailto:${PLACEHOLDERS.supportEmail}`}>
                Talk To Support
              </a>
            </Reveal>

            <Reveal className="hiw-cta-card">
              <h3>Want the full story?</h3>
              <p>Read about our mission, platform model, and answers to common questions.</p>
              <div className="hiw-cta-card__actions">
                <Link className="btn btn-ghost" to="/about">
                  About Us
                </Link>
                <a className="btn btn-ghost" href="#faq">
                  Our FAQs
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div id="faq">
        <HomeFaq />
      </div>
    </div>
  )
}
