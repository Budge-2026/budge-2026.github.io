import { PLACEHOLDERS } from '../../constants/brand'
import { TreatmentPage } from '../TreatmentPage'

const treatment = {
  name: 'Teep Teeps',
  tagline: 'Ramelteon and magnesium L-threonate, prescribed when clinically appropriate',
  description:
    'A compounded sleep tablet of ramelteon 10 mg and magnesium L-threonate 250 mg per tablet. Supplied as 30 tablets per month. It may be prescribed by a licensed provider when clinically appropriate as part of a personalized BudgeRx telehealth visit. When compounded, it is prepared by a licensed pharmacy for an individual patient and is not an FDA-approved drug product.',
  whoItsFor:
    'Teep Teeps may be considered by a licensed provider for eligible adults who have difficulty falling asleep or staying asleep and whose health history and clinical evaluation support it. Ramelteon is a prescription medication, so a provider must review your history and current medications before this is considered. Only a provider can determine whether this treatment is appropriate for you.',
  howItWorks:
    'After completing your secure intake, an independent licensed provider reviews your information and may conduct a telehealth visit. If they determine Teep Teeps is clinically appropriate, they may issue a prescription to a licensed U.S. pharmacy. Each tablet contains ramelteon 10 mg and magnesium L-threonate 250 mg. The pharmacy prepares your 30-tablet monthly supply and ships it discreetly when applicable.',
  safetyNote:
    'Sleep medications can cause next-day drowsiness, dizziness, and impaired coordination. Do not drive or operate machinery until you know how this affects you. Take Teep Teeps only at bedtime, and do not take it with or right after a high-fat meal. Do not drink alcohol with this product. Tell your provider about all medications and supplements you take, especially fluvoxamine, which must not be combined with ramelteon, and other medications that affect liver enzymes. Magnesium L-threonate can cause loose stools, so tell your provider about any kidney problems. Report side effects promptly. This platform is not for emergencies — call 911 if you need immediate medical attention.',
  startingPrice: 83,
  priceLabel: 'Starting at' as const,
  image: '/img/product-sleep-blend.png',
  imageAlt: 'BudgeRx Teep Teeps tablets',
}

export function SleepBlend() {
  return (
    <TreatmentPage treatment={treatment} ctaUrl={PLACEHOLDERS.sleepBlendFunnelUrl} goal="sleep" />
  )
}
