import { PLACEHOLDERS } from '../../constants/brand'
import { TreatmentPage } from '../TreatmentPage'

const treatment = {
  name: 'Glutathione',
  tagline: 'Antioxidant support, prescribed when clinically appropriate',
  description:
    'Compounded glutathione injections may be prescribed by a licensed provider when clinically appropriate as part of a personalized BudgeRx telehealth visit. When compounded, they are prepared by a licensed pharmacy for an individual patient and are not an FDA-approved drug product.',
  whoItsFor:
    'Glutathione may be considered by a licensed provider for eligible adults who, based on their health history and clinical evaluation, may benefit from antioxidant support as part of a broader wellness plan. Only a provider can determine whether this treatment is appropriate for you.',
  howItWorks:
    'After completing your secure intake, an independent licensed provider reviews your information and may conduct a telehealth visit. If they determine glutathione is clinically appropriate, they may issue a prescription to a licensed U.S. pharmacy. The pharmacy prepares your medication and ships it discreetly when applicable.',
  safetyNote:
    'Glutathione is not appropriate for everyone. Discuss your full medical history, current medications, and any concerns with your provider. Report side effects promptly. This platform is not for emergencies — call 911 if you need immediate medical attention.',
  image: '/img/product-glutathione.png',
  startingPrice: 149,
}

export function Glutathione() {
  return (
    <TreatmentPage treatment={treatment} ctaUrl={PLACEHOLDERS.glutathioneFunnelUrl} goal="anti-aging" />
  )
}
