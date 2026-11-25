import { BRAND_SHORT } from '../../constants/brand'
import { VALUE_PROPS } from '../../constants/home'
import { FeaturesSectionWithCardGradient } from '../ui/feature-section-with-card-gradient'
import { Section, SectionHeader } from '../ui/Section'

export function ValueProps() {
  return (
    <Section variant="dark">
      <SectionHeader
        dark
        title={
          <>
            Telehealth should feel clear,
            <br />
            not <em>confusing.</em>
          </>
        }
        subtitle={`${BRAND_SHORT} brings your consult, prescription, and support into one straightforward experience. Here is what that looks like in practice.`}
      />
      <FeaturesSectionWithCardGradient features={VALUE_PROPS} />
    </Section>
  )
}
