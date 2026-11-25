import { BRAND_NAME } from '../../constants/brand'

export function SiteDisclaimer() {
  return (
    <aside className="border-y border-brand/25 bg-brand-light px-6 py-4">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-sm leading-relaxed text-muted">
          <strong className="text-ink">Important:</strong> Compounded medications discussed on
          this page are prepared by a licensed pharmacy for an individual patient and are{' '}
          <strong className="text-ink">not FDA-approved</strong> drug products. Submitting an intake
          or payment through {BRAND_NAME} does not guarantee a prescription. A licensed provider will
          review your information and determine whether treatment is appropriate for you. Individual
          experiences may vary.
        </p>
      </div>
    </aside>
  )
}
