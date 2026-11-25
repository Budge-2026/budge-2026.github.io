import { PLACEHOLDERS } from '../../constants/brand'
import { TreatmentPage } from '../TreatmentPage'

const treatment = {
  name: 'Tirzepatide',
  tagline: 'Dual-action GLP-1/GIP therapy, prescribed when clinically appropriate',
  description:
    'Compounded tirzepatide may be prescribed by a licensed provider when clinically appropriate as part of a personalized BudgeRx telehealth visit. When compounded, it is prepared by a licensed pharmacy for an individual patient and is not an FDA-approved drug product.',
  whoItsFor:
    'Tirzepatide may be considered by a licensed provider for eligible adults who, based on their health history and clinical evaluation, may benefit from dual GLP-1/GIP receptor agonist therapy as part of a broader metabolic wellness plan. Only a provider can determine whether this treatment is appropriate for you.',
  howItWorks:
    'After completing your secure intake, an independent licensed provider reviews your information and may conduct a telehealth visit. If they determine tirzepatide is clinically appropriate, they may issue a prescription to a licensed U.S. pharmacy. The pharmacy prepares your medication and ships it discreetly when applicable.',
  safetyNote:
    'Tirzepatide is not appropriate for everyone. Discuss your full medical history, current medications, and any concerns with your provider. Report side effects promptly. This platform is not for emergencies — call 911 if you need immediate medical attention.',
  image: '/img/product-tirz.png',
}

export function Tirzepatide() {
  return <TreatmentPage treatment={treatment} ctaUrl={PLACEHOLDERS.glp1FunnelUrl} />
}
