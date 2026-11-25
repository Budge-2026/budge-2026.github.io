import { PolicyLayout } from '../components/ui/PolicySection'
import { BRAND_NAME, PLACEHOLDERS, POLICY_LAST_UPDATED } from '../constants/brand'
import { PrivacyContent } from './legal/privacy-content'

export function Privacy() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      lastUpdated={`${BRAND_NAME} · Last Updated: ${POLICY_LAST_UPDATED}`}
    >
      <p className="legal-p text-center">
        Website:{' '}
        <a href={`https://${PLACEHOLDERS.domain}`} className="text-brand underline">
          https://{PLACEHOLDERS.domain}
        </a>
      </p>
      <PrivacyContent />
    </PolicyLayout>
  )
}
