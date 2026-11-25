import { Link } from 'react-router-dom'
import { BRAND_NAME } from '../../constants/brand'
import { POLICY_CONTACT_EMAIL } from '../../constants/policy'

export function TelehealthConsentContent() {
  return (
    <>
      <div className="legal-notice">
        <h2>Not for emergencies</h2>
        <p>
          Telehealth is not appropriate for medical emergencies. If you are experiencing a medical
          emergency, call <strong>911</strong> or go to the nearest emergency room immediately. If
          you are in crisis, call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline).
        </p>
      </div>

      <p className="legal-p">
        This document explains how telehealth services work, their benefits and limits, and your
        rights as a patient. Please read it carefully before consenting to receive care through{' '}
        {BRAND_NAME} (&quot;we,&quot; &quot;us,&quot; or the &quot;Platform&quot;).
      </p>

      <section className="legal-section">
        <h2 className="legal-section-title">1. What telehealth is</h2>
        <p className="legal-p">
          Telehealth is the delivery of health care services using electronic communications — such
          as secure messaging, online intake questionnaires, audio, and video — between you and a
          licensed healthcare provider who is not in the same physical location as you. It lets a
          provider evaluate, diagnose, consult, and where appropriate, prescribe treatment remotely.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-section-title">2. Services we provide</h2>
        <p className="legal-p">
          Through the Platform, you may complete a medical intake and be connected with a licensed
          provider for an evaluation related to weight management and metabolic health, including
          GLP-1 class therapies when clinically appropriate. If clinically appropriate, the provider
          may issue a prescription that is fulfilled by a licensed pharmacy and shipped to you.
        </p>
        <p className="legal-p">
          Services are available only to patients located in states where our providers are
          licensed — see eligibility at checkout. You must be{' '}
          <strong>18 years of age or older</strong> to use the Platform.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-section-title">3. Expected benefits</h2>
        <ul className="legal-ul">
          <li>Access to licensed providers without an in-person office visit.</li>
          <li>Greater convenience, privacy, and discretion.</li>
          <li>Reduced travel and wait times, with care on your schedule.</li>
          <li>Coordinated prescribing and pharmacy fulfillment in one place.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2 className="legal-section-title">4. Risks and limitations</h2>
        <p className="legal-p">
          Telehealth has limitations you should understand and accept before proceeding:
        </p>
        <ul className="legal-ul">
          <li>
            A remote evaluation relies on the information you provide. Without an in-person exam,
            certain conditions may not be detected, and a diagnosis or treatment plan may be less
            complete than it would be in person.
          </li>
          <li>Technology may fail or be interrupted, which can affect or delay your care.</li>
          <li>
            In rare cases, electronic transmission of your information could be disrupted or accessed
            by unauthorized parties despite reasonable security measures.
          </li>
          <li>
            Your provider may determine that telehealth is not appropriate for your situation and may
            recommend an in-person visit or alternative care instead.
          </li>
        </ul>
      </section>

      <section className="legal-section">
        <h2 className="legal-section-title">5. No guarantee of treatment or outcome</h2>
        <p className="legal-p">
          Submitting an intake or payment does not guarantee that you will receive a prescription or
          any specific treatment. A licensed provider exercises independent clinical judgment and
          will only prescribe if they determine it is medically appropriate for you.
        </p>
        <p className="legal-p">
          Results vary from person to person, and no specific outcome is promised. Any medication
          should be used only as directed by your provider and the prescribing label.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-section-title">6. Prescription medications</h2>
        <p className="legal-p">
          Where a prescription is issued, it is dispensed by a licensed pharmacy. You are responsible
          for disclosing your full medical history, current medications, allergies, and any other
          care you are receiving so the provider can prescribe safely.
        </p>
        <p className="legal-p">
          We do not prescribe controlled substances through the Platform. The Platform is not a
          substitute for an ongoing relationship with a primary care physician.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-section-title">7. Alternatives to telehealth</h2>
        <p className="legal-p">
          You always have the option to seek care in person from a physician or other provider of
          your choice. Telehealth is offered as a convenience and is voluntary — choosing not to use
          it will not deny you any other care you are entitled to.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-section-title">8. Not for emergencies</h2>
        <p className="legal-p">
          Telehealth is not appropriate for medical emergencies. If you are experiencing a medical
          emergency, call 911 or go to the nearest emergency room immediately. If you are in crisis,
          call or text 988 (Suicide &amp; Crisis Lifeline).
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-section-title">9. Privacy and confidentiality</h2>
        <p className="legal-p">
          Your health information is protected under applicable laws, including HIPAA. Information
          shared during your care is kept confidential and is disclosed only as permitted or required
          by law, or as described in our{' '}
          <Link to="/privacy" className="legal-link">
            Privacy Policy
          </Link>
          . The Platform uses reasonable administrative, technical, and physical safeguards to
          protect your information.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-section-title">10. Your rights</h2>
        <ul className="legal-ul">
          <li>
            You may withhold or withdraw your consent to telehealth at any time, without affecting
            your right to future care or treatment.
          </li>
          <li>You may request that care be provided in person instead.</li>
          <li>You may access your medical records consistent with applicable law.</li>
          <li>You may ask questions about your care and expect them to be answered.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2 className="legal-section-title">11. Patient responsibilities</h2>
        <p className="legal-p">
          You agree to provide complete and accurate information about your health and identity, to
          follow your provider&apos;s instructions, and to seek follow-up or in-person care if your
          condition changes or does not improve. Providing false information may put your health at
          risk and may result in denial of service.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-section-title">12. Fees and financial responsibility</h2>
        <p className="legal-p">
          Fees for consultations, products, and shipping are presented before purchase. You are
          responsible for all charges associated with the services you select. Details are described
          in our{' '}
          <Link to="/terms" className="legal-link">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link to="/refund-policy" className="legal-link">
            Refund Policy
          </Link>
          .
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-section-title">13. Your consent</h2>
        <p className="legal-p">
          By using the Platform, completing an intake, or proceeding with a telehealth visit, you
          confirm that you have read and understand this Telehealth Informed Consent, that you
          voluntarily agree to receive care via telehealth, and that you understand the benefits,
          risks, and limitations described above.
        </p>
      </section>

      <section className="legal-section">
        <h2 className="legal-section-title">Questions</h2>
        <p className="legal-p">
          If you have questions about telehealth or this consent, contact us at{' '}
          <a href={`mailto:${POLICY_CONTACT_EMAIL}`} className="legal-link">
            {POLICY_CONTACT_EMAIL}
          </a>
          .
        </p>
        <p className="legal-p">
          <strong>{BRAND_NAME}</strong>
          <br />
          Email: {POLICY_CONTACT_EMAIL}
        </p>
      </section>
    </>
  );
}
