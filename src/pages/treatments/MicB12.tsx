import { PLACEHOLDERS } from '../../constants/brand'
import { TreatmentPage } from '../TreatmentPage'

const treatment = {
  name: 'MIC + B12',
  tagline: 'Lipotropic and B12 support, prescribed when clinically appropriate',
  description:
    'Compounded MIC (methionine, inositol, and choline) with vitamin B12 may be prescribed by a licensed provider when clinically appropriate as part of a personalized BudgeRx telehealth visit. When compounded, it is prepared by a licensed pharmacy for an individual patient and is not an FDA-approved drug product.',
  whoItsFor:
    'MIC + B12 may be considered by a licensed provider for eligible adults who, based on their health history and clinical evaluation, may benefit from lipotropic and vitamin B12 support as part of a broader energy and nutrient plan. Only a provider can determine whether this treatment is appropriate for you.',
  howItWorks:
    'After completing your secure intake, an independent licensed provider reviews your information and may conduct a telehealth visit. If they determine MIC + B12 is clinically appropriate, they may issue a prescription to a licensed U.S. pharmacy. The pharmacy prepares your medication and ships it discreetly when applicable.',
  safetyNote:
    'MIC + B12 is not appropriate for everyone. Discuss your full medical history, current medications, and any concerns with your provider. Report side effects promptly. This platform is not for emergencies — call 911 if you need immediate medical attention.',
  image: '/img/product-mic-b12.png',
  startingPrice: 179,
}

export function MicB12() {
  return <TreatmentPage treatment={treatment} ctaUrl={PLACEHOLDERS.micB12FunnelUrl} goal="peptide" />
}
