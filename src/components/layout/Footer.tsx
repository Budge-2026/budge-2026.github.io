import { Link } from 'react-router-dom'
import {
  BRAND_MOTTO,
  BRAND_NAME,
  PLACEHOLDERS,
  POLICY_LINKS,
  TREATMENTS,
} from '../../constants/brand'
import { CLINICAL_PROVIDER, EPIQ_SCRIPTS, FULFILLMENT_PHARMACY } from '../../constants/policy'
import { Logo } from '../brand/Logo'

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo variant="fullDark" className="footer-logo" />
            <p>
              {BRAND_MOTTO} {BRAND_NAME} connects you with independent licensed providers for
              premium, personalized telehealth — discreet delivery and ongoing support included.
            </p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {TREATMENTS.map((t) => (
                <li key={t.slug}>
                  <Link to={t.pageHref}>{t.name}</Link>
                </li>
              ))}
              <li>
                <Link to="/treatments">All Treatments</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Learn More</h4>
            <ul>
              <li>
                <Link to="/how-it-works">How It Works</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/treatments">Treatments</Link>
              </li>
              <li>
                <Link to="/contact">Support</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              {POLICY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`mailto:${PLACEHOLDERS.supportEmail}`}>{PLACEHOLDERS.supportEmail}</a>
              </li>
              <li>
                <a href={PLACEHOLDERS.supportPhoneHref}>{PLACEHOLDERS.supportPhone}</a>
              </li>
            </ul>
            <p className="pharm-note">
              Medications are dispensed by licensed U.S. pharmacies, including{' '}
              <a href={FULFILLMENT_PHARMACY.url} target="_blank" rel="noopener noreferrer">
                {FULFILLMENT_PHARMACY.name}
              </a>{' '}
              and{' '}
              <a href={EPIQ_SCRIPTS.url} target="_blank" rel="noopener noreferrer">
                {EPIQ_SCRIPTS.name}
              </a>
              .
            </p>
          </div>
        </div>

        <div className="footer-disclaimer">
          <p>
            <strong>Medication Options:</strong> The {BRAND_NAME} platform connects you with
            licensed medical providers who can prescribe medication based on their professional
            judgment. This may include access to a compounded medication program: our primary
            program provides compounded medications prepared and shipped by a state-licensed
            sterile compounding pharmacy. These compounded drugs are not FDA-approved, which means
            the FDA has not reviewed them for safety, effectiveness, or quality.
          </p>
          <p>
            <strong>No Guarantees:</strong> Individual results may vary. Outcomes are not
            guaranteed and are influenced by many factors, including diet, exercise, adherence, and
            individual biology. The information on this website is for educational purposes only and
            does not constitute medical advice. Always consult a healthcare professional before
            starting any new medication or treatment program. Submitting an intake or payment does
            not guarantee a prescription.
          </p>
          <p>
            {PLACEHOLDERS.legalEntity} is a {PLACEHOLDERS.entityType} and is not a medical practice,
            pharmacy, or healthcare provider. The assessment available on the {BRAND_NAME} website
            does not create a doctor–patient relationship. Clinical services are provided by{' '}
            {CLINICAL_PROVIDER.name} (
            <a
              href={CLINICAL_PROVIDER.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CLINICAL_PROVIDER.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </a>
            ), an independent network of U.S.-licensed clinicians who determine eligibility for
            treatment based on medical history and provider assessment. Providers make the final
            determination as to whether to prescribe any medication. Prescriptions, when issued, are
            filled and shipped by licensed U.S. pharmacies, including {FULFILLMENT_PHARMACY.name} (
            <a
              href={FULFILLMENT_PHARMACY.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {FULFILLMENT_PHARMACY.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </a>
            ) and {EPIQ_SCRIPTS.name} (
            <a href={EPIQ_SCRIPTS.url} target="_blank" rel="noopener noreferrer">
              {EPIQ_SCRIPTS.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </a>
            ). Compounded medications are
            produced in FDA-registered facilities but are not FDA-approved and have not been
            evaluated by the FDA for safety, efficacy, or quality. Results may vary depending on
            individual adherence, provider guidance, and lifestyle changes. {BRAND_NAME} does not
            produce, manufacture, or prescribe any medications, and product appearance may differ
            from website images. Products will not bear the {BRAND_NAME} name or logo. Service
            eligibility covers all 50 U.S. states.
          </p>
          <p>
            <strong>Safety information:</strong> GLP-1–based medications are used as part of medical
            weight-management and wellness programs for adults who meet specific clinical criteria.
            These medications may cause side effects, some of which can be serious (such as the
            potential risk of thyroid C-cell tumors). Do not use GLP-1 medications if you or your
            family have a history of medullary thyroid carcinoma (MTC) or Multiple Endocrine
            Neoplasia syndrome type 2 (MEN 2). Always consult a healthcare professional before
            starting or changing any medication.
          </p>
          <p>
            *Statements on this website have not been evaluated by the Food and Drug Administration.
            Compounded medications are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
          <p>
            †Results may vary. Medication prescriptions are at the discretion of medical providers
            and may not be suitable for everyone. This site is not for medical emergencies — call
            911. Must be 18 years or older to use this service.
          </p>
          <p>
            Certain images on this website may contain or consist entirely of AI-generated or
            AI-enhanced depictions. These synthetic visuals are created using artificial intelligence
            and may not represent authentic, unaltered content.
          </p>
          <p>
            By using our services you agree to our{' '}
            <Link to="/terms">Terms of Service</Link>,{' '}
            <Link to="/privacy">Privacy Policy</Link>,{' '}
            <Link to="/refund-policy">Refund Policy</Link>,{' '}
            <Link to="/telehealth-consent">Telehealth Informed Consent</Link>, and{' '}
            <Link to="/ai-use-policy">AI Use Policy</Link>.
          </p>
        </div>

        <div className="footer-bottom">
          <small>
            © {new Date().getFullYear()} {PLACEHOLDERS.legalEntity}. {PLACEHOLDERS.jurisdiction}. All
            rights reserved.
          </small>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://www.legitscript.com/websites/?checker_keywords=budgerx.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Verify LegitScript Approval for www.budgerx.com"
            >
              <img
                src="https://static.legitscript.com/seals/52034510.png"
                alt="Verify Approval for www.budgerx.com"
                width={73}
                height={79}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
