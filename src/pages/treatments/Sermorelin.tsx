import { PLACEHOLDERS } from '../../constants/brand'
import { TreatmentPage } from '../TreatmentPage'

const treatment = {
  name: 'Sermorelin',
  tagline: 'Growth hormone–releasing peptide therapy, when clinically appropriate',
  description:
    'Compounded sermorelin 3 mg/mL may be prescribed by a licensed provider when clinically appropriate as part of a personalized BudgeRx telehealth visit. Your monthly price is locked and never changes. When compounded, it is prepared by a licensed pharmacy for an individual patient and is not an FDA-approved drug product.',
  whoItsFor:
    'Sermorelin may be considered by a licensed provider for eligible adults who, based on their health history and clinical evaluation, may benefit from growth hormone–releasing peptide therapy as part of a broader recovery and vitality plan. Only a provider can determine whether this treatment is appropriate for you.',
  howItWorks:
    'After completing your secure intake, an independent licensed provider reviews your information and may conduct a telehealth visit. If they determine sermorelin is clinically appropriate, they may issue a prescription to a licensed U.S. pharmacy. The pharmacy prepares your medication and ships it discreetly when applicable.',
  safetyNote:
    'Sermorelin is not appropriate for everyone. Discuss your full medical history, current medications, and any concerns with your provider. Report side effects promptly. This platform is not for emergencies — call 911 if you need immediate medical attention.',
  image: '/img/product-sermorelin.png',
  startingPrice: 189,
  priceLabel: 'Price Locked' as const,
}

export function Sermorelin() {
  return <TreatmentPage treatment={treatment} ctaUrl={PLACEHOLDERS.growthHormoneFunnelUrl} />
}
