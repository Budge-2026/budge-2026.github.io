import { PLACEHOLDERS } from '../../constants/brand'
import { TreatmentPage } from '../TreatmentPage'

const treatment = {
  name: 'Candlestick Rx',
  tagline: 'Sildenafil, tadalafil, and apomorphine in a chewable rapid-dissolving tablet',
  description:
    'Candlestick Rx is a compounded chewable rapid-dissolving tablet that combines sildenafil, tadalafil, and apomorphine. It may be prescribed by a licensed provider when clinically appropriate as part of a personalized BudgeRx telehealth visit. When compounded, it is prepared by a licensed pharmacy for an individual patient and is not an FDA-approved drug product. Several doses are available, and your provider chooses the one that fits you. Monthly supplies are 6, 10, or 20 tablets.',
  whoItsFor:
    'Candlestick Rx may be considered by a licensed provider for eligible adults seeking erectile support whose health history and clinical evaluation support it. Sildenafil and tadalafil are prescription medications, and apomorphine is as well, so a provider must review your cardiovascular history and current medications before this is considered. Only a provider can determine whether this treatment is appropriate for you, which dose to use, and whether a monthly supply of 6, 10, or 20 tablets fits your plan.',
  howItWorks:
    'After completing your secure intake, an independent licensed provider reviews your information and may conduct a telehealth visit. If they determine Candlestick Rx is clinically appropriate, they select a dose and a monthly quantity of 6, 10, or 20 chewable rapid-dissolving tablets, then may issue a prescription to a licensed U.S. pharmacy. The pharmacy prepares your medication and ships it discreetly when applicable.',
  safetyNote:
    'Do not use sildenafil or tadalafil with nitrates or riociguat. Tell your provider about heart disease, low blood pressure, and any alpha-blockers or other medications you take. Apomorphine can cause nausea, dizziness, and low blood pressure, and it must not be combined with ondansetron or other 5-HT3 antagonist anti-nausea medicines. Seek emergency care for an erection lasting more than 4 hours, chest pain, or sudden vision or hearing changes. This platform is not for emergencies — call 911 if you need immediate medical attention.',
  startingPrice: 99,
  priceLabel: 'Starting at' as const,
  image: '/img/product-candlestick-rx.png',
  imageAlt: 'BudgeRx Candlestick Rx chewable rapid-dissolving tablet box',
}

export function CandlestickRx() {
  return (
    <TreatmentPage
      treatment={treatment}
      ctaUrl={PLACEHOLDERS.candlestickFunnelUrl}
      goal="sexual-health"
    />
  )
}
