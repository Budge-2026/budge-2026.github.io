import { PolicyLayout, PolicySection } from '../components/ui/PolicySection'
import {
  BRAND_NAME,
  POLICY_LAST_UPDATED,
} from '../constants/brand'
import { POLICY_CONTACT_EMAIL, POLICY_CONTACT_HOURS, policyIntro } from '../constants/policy'

export function AiUsePolicy() {
  return (
    <PolicyLayout title="AI Use Policy" lastUpdated={POLICY_LAST_UPDATED}>
      <PolicySection title="1. Purpose">
        <p>{policyIntro('AI Use Policy')}</p>
        <p>
          This AI Use Policy describes how {BRAND_NAME} may use artificial intelligence ("AI"),
          machine learning, automation, and related technologies in connection with the Platform.
          It should be read together with our Privacy Policy and Terms of Service.
        </p>
      </PolicySection>

      <PolicySection title="2. How we may use AI">
        <p>We may use AI or automated systems to support non-clinical and operational functions, including:</p>
        <ul>
          <li>Routing intake responses and flagging incomplete submissions for human review</li>
          <li>Organizing support tickets and suggesting responses for staff review</li>
          <li>Detecting fraud, spam, or abusive activity</li>
          <li>Generating internal summaries of support conversations</li>
          <li>Improving website search, navigation, and user experience</li>
          <li>Producing general educational content on our website</li>
          <li>Analyzing aggregated, de-identified usage trends to improve Services</li>
        </ul>
      </PolicySection>

      <PolicySection title="3. What AI does not do">
        <p>
          AI tools used by {BRAND_NAME} do <strong>not</strong> independently diagnose medical
          conditions, prescribe medications, determine clinical eligibility, or replace licensed
          healthcare professionals. All prescribing and treatment decisions are made by independent
          licensed providers in their professional judgment.
        </p>
        <p>
          If you receive automated educational content on the Platform, it is informational only
          and is not a substitute for personalized medical advice from a qualified clinician.
        </p>
      </PolicySection>

      <PolicySection title="4. Human oversight">
        <p>
          Where AI assists with patient-facing workflows, human staff or licensed clinicians review
          outcomes when appropriate before clinical or billing actions are taken. You may request
          human support for non-clinical account questions by contacting {POLICY_CONTACT_EMAIL}.
        </p>
      </PolicySection>

      <PolicySection title="5. Data used with AI tools">
        <p>
          Information processed by AI systems is handled in accordance with our Privacy Policy. We
          contractually require service providers to protect data and use it only for authorized
          purposes. We do not sell your personal information.
        </p>
        <p>
          We do not use your identifiable health information to train public or general-purpose AI
          models for unrelated third-party products without your consent where required by law.
          Vendors may process data to provide services to us under confidentiality and security
          obligations.
        </p>
      </PolicySection>

      <PolicySection title="6. Accuracy and limitations">
        <p>
          AI-generated outputs may be incomplete, outdated, or inaccurate. Do not rely on AI-
          generated content for medical decisions. Always consult a licensed provider for questions
          about symptoms, medications, side effects, or treatment plans.
        </p>
      </PolicySection>

      <PolicySection title="7. Your choices">
        <p>
          You may opt out of non-essential promotional communications as described in our Privacy
          Policy. Certain automated processing is necessary to provide the Platform, intake routing,
          payment processing, and security functions.
        </p>
      </PolicySection>

      <PolicySection title="8. Changes">
        <p>
          We may update this AI Use Policy as technology and legal requirements evolve. The "Last
          updated" date above reflects the most recent revision.
        </p>
      </PolicySection>

      <PolicySection title="9. Contact">
        <p>
          Questions about our use of AI: {POLICY_CONTACT_EMAIL}
          <br />
          Support hours: {POLICY_CONTACT_HOURS}
        </p>
      </PolicySection>
    </PolicyLayout>
  )
}
