import { PolicyLayout } from '../components/ui/PolicySection'
import { BRAND_NAME, POLICY_LAST_UPDATED } from '../constants/brand'
import { RefundContent } from './legal/refund-content'

export function RefundPolicy() {
  return (
    <PolicyLayout
      title="Refund and Cancellation Policy"
      lastUpdated={`${BRAND_NAME} · Last Updated: ${POLICY_LAST_UPDATED}`}
    >
      <RefundContent />
    </PolicyLayout>
  )
}
