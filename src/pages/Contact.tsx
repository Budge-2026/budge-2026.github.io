import { BRAND_NAME, PLACEHOLDERS } from '../constants/brand'
import { SiteCard } from '../components/ui/SiteCard'
import { PageHero } from '../components/ui/PageHero'
import { QuizCta } from '../components/quiz/QuizCta'

export function Contact() {
  return (
    <div>
      <PageHero
        title="Contact us"
        subtitle={`Questions about ${BRAND_NAME}? Our team is here for platform and account help — premium telehealth support without the runaround.`}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[800px] px-6">
          <SiteCard hover={false}>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">Email</h2>
                <a
                  href={`mailto:${PLACEHOLDERS.supportEmail}`}
                  className="mt-2 block text-muted hover:text-brand hover:underline"
                >
                  {PLACEHOLDERS.supportEmail}
                </a>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">Phone</h2>
                <a
                  href={PLACEHOLDERS.supportPhoneHref}
                  className="mt-2 block text-muted hover:text-brand hover:underline"
                >
                  {PLACEHOLDERS.supportPhone}
                </a>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">Hours</h2>
                <p className="mt-2 text-muted">{PLACEHOLDERS.supportHours}</p>
              </div>
            </div>
          </SiteCard>

          <p className="mt-8 text-center text-sm text-muted">
            This site is not for medical emergencies. If you are experiencing a medical emergency,
            call 911 immediately.
          </p>

          <div className="mt-8 text-center">
            <QuizCta className="btn btn-primary btn-lg" from="contact">
              Start Your Intake
            </QuizCta>
          </div>
        </div>
      </section>
    </div>
  )
}
