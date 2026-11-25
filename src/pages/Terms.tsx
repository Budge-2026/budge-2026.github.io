import { PolicyLayout } from '../components/ui/PolicySection'
import { BRAND_NAME, POLICY_LAST_UPDATED } from '../constants/brand'
import { POLICY_CONTACT_EMAIL } from '../constants/policy'
import { TermsContent } from './legal/terms-content'

export function Terms() {
  return (
    <PolicyLayout
      title="Terms of Service"
      lastUpdated={`${BRAND_NAME} · Last Updated: ${POLICY_LAST_UPDATED}`}
    >
      <div className="legal-notice mb-8">
        <h2 className="text-lg font-semibold text-red-700">Important Medical Emergency Notice</h2>
        <p className="mt-2 text-sm text-ink/80">
          <strong>Do not use the Services if you have a medical emergency.</strong> If you are
          experiencing a medical emergency, chest pain, difficulty breathing, severe allergic
          reactions, or any other life-threatening symptoms, please dial 911 or go immediately to the
          nearest emergency room.
        </p>
        <p className="mt-2 text-sm text-ink/80">
          The Services are designed for routine telehealth consultations, prescription management,
          and ongoing treatment coordination. They are not a substitute for emergency medical care.
        </p>
      </div>
      <TermsContent />
      <p className="mt-8 text-sm text-muted">
        Questions about these Terms may be sent to {POLICY_CONTACT_EMAIL}.
      </p>
    </PolicyLayout>
  )
}
