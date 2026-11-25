import { PolicyLayout } from '../components/ui/PolicySection'
import { BRAND_NAME, POLICY_LAST_UPDATED } from '../constants/brand'
import { TelehealthConsentContent } from './legal/telehealth-consent-content'

export function TelehealthConsent() {
  return (
    <PolicyLayout
      title="Telehealth Informed Consent"
      lastUpdated={`${BRAND_NAME} · Effective date: ${POLICY_LAST_UPDATED}`}
    >
      <TelehealthConsentContent />
    </PolicyLayout>
  )
}
