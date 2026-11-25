import { PLACEHOLDERS } from '../../constants/brand'
import { TreatmentPage } from '../TreatmentPage'

const treatment = {
  name: 'GHK-Cu Cream',
  tagline: 'Topical copper peptide cream, prescribed when clinically appropriate',
  description:
    'Compounded topical GHK-Cu cream may be prescribed by a licensed provider when clinically appropriate as part of a personalized BudgeRx telehealth visit. When compounded, it is prepared by a licensed pharmacy for an individual patient and is not an FDA-approved drug product.',
  whoItsFor:
    'GHK-Cu cream may be considered by a licensed provider for eligible adults who, based on their health history and clinical evaluation, may benefit from topical copper peptide support as part of a broader skin plan. Only a provider can determine whether this treatment is appropriate for you.',
  howItWorks:
    'After completing your secure intake, an independent licensed provider reviews your information and may conduct a telehealth visit. If they determine GHK-Cu cream is clinically appropriate, they may issue a prescription to a licensed U.S. pharmacy. The pharmacy prepares your medication and ships it discreetly when applicable.',
  safetyNote:
    'GHK-Cu cream is not appropriate for everyone. Apply only as directed, avoid the eyes and broken skin, and tell your provider about any skin reactions. Discuss your full medical history, current medications, and any concerns with your provider. This platform is not for emergencies — call 911 if you need immediate medical attention.',
  image: '/img/product-ghk-cu-cream.png',
  imageAlt: 'BudgeRx GHK-Cu topical cream jar',
  startingPrice: 149,
}

export function GhkCuCream() {
  return (
    <TreatmentPage
      treatment={treatment}
      ctaUrl={PLACEHOLDERS.ghkCuCreamFunnelUrl}
      goal="anti-aging"
    />
  )
}
