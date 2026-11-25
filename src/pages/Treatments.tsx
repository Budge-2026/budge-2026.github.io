import { Link } from 'react-router-dom'
import { TREATMENT_SECTIONS, TREATMENTS, type Treatment } from '../constants/brand'
import { PageHero } from '../components/ui/PageHero'

function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <article className="arx-product-card treatments-catalog__card">
      <div className="arx-product-card__head">
        <h3>{treatment.name}</h3>
      </div>
      <div className="arx-product-card__image">
        <img src={treatment.image ?? treatment.vialImage} alt={treatment.name} />
      </div>
      <p className="arx-product-card__desc">{treatment.description}</p>
      {typeof treatment.startingPrice === 'number' ? (
        <div className="arx-product-card__price">
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
        </div>
      ) : (
        <div className="arx-product-card__price arx-product-card__price--consult">
          <span className="price-prefix">Prescription required</span>
        </div>
      )}
      <Link className="btn btn-primary btn-md" to={treatment.pageHref}>
        Learn More
      </Link>
    </article>
  )
}

export function Treatments() {
  return (
    <div className="treatments-page">
      <PageHero
        title="Treatments"
        subtitle="Curated therapies for metabolic health and better living — prescribed only when an independent licensed provider determines they fit your needs."
      />

      <section className="section section-alt treatments-catalog-wrap">
        <div className="treatments-catalog">
          {TREATMENT_SECTIONS.map((section) => {
            const items = TREATMENTS.filter((t) => t.category === section.id)
            if (items.length === 0) return null

            return (
              <div key={section.id} className="treatments-catalog__section">
                <div className="treatments-catalog__head">
                  <h2>{section.title}</h2>
                  <p>{section.subtitle}</p>
                </div>
                <div
                  className={`treatments-catalog__grid${
                    items.length === 1
                      ? ' treatments-catalog__grid--single'
                      : items.length === 2
                        ? ' treatments-catalog__grid--pair'
                        : ''
                  }`}
                >
                  {items.map((treatment) => (
                    <TreatmentCard key={treatment.slug} treatment={treatment} />
                  ))}
                </div>
              </div>
            )
          })}

          <p className="fineprint treatments-catalog__fineprint">
            All treatments require a prescription and provider review. Where shown, plans reflect the
            monthly cost when billed as a 3-month supply. Final pricing may vary based on individual
            treatment plan. Cancel anytime. See terms at checkout.
          </p>
        </div>
      </section>
    </div>
  )
}
