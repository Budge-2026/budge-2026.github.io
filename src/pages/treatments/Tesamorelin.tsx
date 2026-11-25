import { PLACEHOLDERS } from '../../constants/brand'
import { TreatmentPage } from '../TreatmentPage'

const treatment = {
  name: 'Tesamorelin',
  tagline: 'Targeted metabolic peptide therapy, when clinically appropriate',
  description:
    'Compounded tesamorelin may be prescribed by a licensed provider when clinically appropriate as part of a personalized BudgeRx telehealth visit. When compounded, it is prepared by a licensed pharmacy for an individual patient and is not an FDA-approved drug product.',
  whoItsFor:
    'Tesamorelin may be considered by a licensed provider for eligible adults who, based on their health history and clinical evaluation, may benefit from targeted metabolic peptide therapy. Only a provider can determine whether this treatment is appropriate for you.',
  howItWorks:
    'After completing your secure intake, an independent licensed provider reviews your information and may conduct a telehealth visit. If they determine tesamorelin is clinically appropriate, they may issue a prescription to a licensed U.S. pharmacy. The pharmacy prepares your medication and ships it discreetly when applicable.',
  safetyNote:
    'Tesamorelin is not appropriate for everyone. Discuss your full medical history, current medications, and any concerns with your provider. Report side effects promptly. This platform is not for emergencies — call 911 if you need immediate medical attention.',
  image: '/img/product-tesamorelin.png',
}

export function Tesamorelin() {
  return <TreatmentPage treatment={treatment} ctaUrl={PLACEHOLDERS.growthHormoneFunnelUrl} />
}
