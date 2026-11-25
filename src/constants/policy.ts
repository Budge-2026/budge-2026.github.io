import { BRAND_NAME, PLACEHOLDERS } from './brand'

export const POLICY_CONTACT_EMAIL = PLACEHOLDERS.supportEmail
export const POLICY_CONTACT_HOURS = PLACEHOLDERS.supportHours

export const CLINICAL_PROVIDER = {
  name: 'LocumTele',
  url: 'https://locumtele.org/',
} satisfies { name: string; url: string }

export const FULFILLMENT_PHARMACY = {
  name: 'Rush Pharmacy',
  url: 'https://rushpharmacy.com/',
} satisfies { name: string; url: string }

export const EPIQ_SCRIPTS = {
  name: 'Epiq Scripts',
  url: 'https://epiqscripts.com/',
} satisfies { name: string; url: string }

export const GOVERNING_STATE = PLACEHOLDERS.jurisdiction

export const policyIntro = (documentName: string) =>
  `${BRAND_NAME} ("Company," "we," "us," or "our") operates the ${BRAND_NAME} website at ${PLACEHOLDERS.domain} and related intake, account, and support experiences (collectively, the "Platform" or "Services"). This ${documentName} explains important information about your use of the Platform.`
