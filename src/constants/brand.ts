export const BRAND_NAME = 'BudgeRx'
export const BRAND_SHORT = 'BudgeRx'
export const BRAND_MOTTO = 'Better Medicine. Better Living.'

/** BudgeRx logo kit — navy + vibrant blue */
export const BRAND_COLORS = {
  navy: '#001848',
  navyMid: '#002860',
  blue: '#0068d0',
  blueBright: '#0070d8',
  white: '#ffffff',
  offWhite: '#f2f6fb',
  brandLight: '#e8f1fb',
} as const

export const PLACEHOLDERS = {
  legalEntity: 'Budge Collinson LLC DBA BudgeRx',
  entityType: 'Florida limited liability company',
  jurisdiction: 'Florida',
  supportEmail: 'team@budgerx.com',
  supportPhone: '+1 (561) 652-2354',
  supportPhoneHref: 'tel:+15616522354',
  supportHours: 'Monday–Friday, 9:00 AM – 5:00 PM ET',
  domain: 'budgerx.com',
  intakeUrl: 'https://try.budgerx.com/f/br-prescription-weight-loss',
  loginUrl: 'https://try.budgerx.com',
  glp1FunnelUrl: 'https://try.budgerx.com/f/prescription-weightloss-offer-v5',
  growthHormoneFunnelUrl: 'https://try.budgerx.com/f/growth-hormone',
  antiAgingFunnelUrl: 'https://try.budgerx.com/f/anti-aging',
  glutathioneFunnelUrl: 'https://try.budgerx.com/f/glutathione',
  micB12FunnelUrl: 'https://try.budgerx.com/f/mic-b12',
  bpc157FunnelUrl: 'https://try.budgerx.com/f/bpc157-injections',
  ghkCuCreamFunnelUrl: 'https://try.budgerx.com/f/ghk-cu-injections?medication=13',
  candlestickFunnelUrl: 'https://try.budgerx.com/f/candlestick-rx-ed-medication',
  // No published intake yet — uses the general intake until a dedicated form exists.
  sleepBlendFunnelUrl: 'https://try.budgerx.com/f/teepteeps',
} as const

export const POLICY_LAST_UPDATED = 'August 31, 2026'

export const NAV_LINKS = [
  { label: 'Explore Treatments', href: '/treatments' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
] as const

export const POLICY_LINKS = [
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Telehealth Consent', href: '/telehealth-consent' },
  { label: 'AI Use Policy', href: '/ai-use-policy' },
] as const

export type TreatmentCategory = 'weight-loss' | 'anti-aging' | 'recovery' | 'sleep' | 'sexual-health'

export type Treatment = {
  slug: string
  name: string
  tagline: string
  description: string
  pageHref: string
  ctaUrl: string
  category: TreatmentCategory
  image?: string
  vialImage?: string
  startingPrice?: number
  /** Price label — omit for a fixed monthly rate */
  priceLabel?: 'Starting at' | 'From' | 'Price Locked'
}

export const TREATMENT_SECTIONS: {
  id: TreatmentCategory
  title: string
  subtitle: string
}[] = [
  {
    id: 'weight-loss',
    title: 'Weight Loss',
    subtitle: 'Clinician-guided GLP-1 therapies for metabolic support when appropriate.',
  },
  {
    id: 'anti-aging',
    title: 'Anti-Aging',
    subtitle: 'Cellular and skin-support therapies, prescribed only when a provider determines they fit.',
  },
  {
    id: 'recovery',
    title: 'Recovery',
    subtitle: 'Peptide and nutrient therapies for recovery and energy, prescribed only when a provider determines they fit.',
  },
  {
    id: 'sleep',
    title: 'Sleep',
    subtitle: 'A compounded sleep blend of ramelteon and magnesium L-threonate, prescribed only when a licensed provider determines it fits.',
  },
  {
    id: 'sexual-health',
    title: 'Sexual Health',
    subtitle: 'A compounded chewable rapid-dissolving tablet for erectile support, prescribed only when a licensed provider determines it fits.',
  },
]

export const TREATMENTS: Treatment[] = [
  {
    slug: 'semaglutide',
    name: 'Semaglutide',
    tagline: 'Precision GLP-1 therapy, prescribed when clinically appropriate',
    description:
      'Compounded semaglutide for metabolic support — reviewed by an independent licensed provider and filled by a licensed U.S. pharmacy when appropriate.',
    pageHref: '/treatments/semaglutide',
    ctaUrl: PLACEHOLDERS.glp1FunnelUrl,
    category: 'weight-loss',
    image: '/img/product-sema.png',
    vialImage: '/img/vial-sema.svg',
    startingPrice: 79,
    priceLabel: 'Starting at',
  },
  {
    slug: 'tirzepatide',
    name: 'Tirzepatide',
    tagline: 'Dual-action GLP-1/GIP therapy, prescribed when clinically appropriate',
    description:
      'Compounded tirzepatide for dual-pathway metabolic care — clinician judgment first, discreet pharmacy fulfillment when prescribed.',
    pageHref: '/treatments/tirzepatide',
    ctaUrl: PLACEHOLDERS.glp1FunnelUrl,
    category: 'weight-loss',
    image: '/img/product-tirz.png',
    vialImage: '/img/vial-tirz.svg',
    startingPrice: 149,
    priceLabel: 'Starting at',
  },
  {
    slug: 'nad',
    name: 'NAD+',
    tagline: 'Cellular energy support, prescribed when clinically appropriate',
    description:
      'Compounded NAD+ for cellular energy and recovery support — clinician-reviewed and fulfilled by a licensed U.S. pharmacy when appropriate.',
    pageHref: '/treatments/nad',
    ctaUrl: PLACEHOLDERS.antiAgingFunnelUrl,
    category: 'anti-aging',
    image: '/img/product-nad.png',
    vialImage: '/img/vial-nad.svg',
    startingPrice: 149,
    priceLabel: 'Starting at',
  },
  {
    slug: 'sermorelin',
    name: 'Sermorelin',
    tagline: 'Growth hormone–releasing peptide therapy, when clinically appropriate',
    description:
      'Compounded sermorelin 3 mg/mL to support restorative sleep, recovery, and vitality — personalized by an independent licensed provider when appropriate. Your monthly price is locked and never changes.',
    pageHref: '/treatments/sermorelin',
    ctaUrl: PLACEHOLDERS.growthHormoneFunnelUrl,
    category: 'recovery',
    image: '/img/product-sermorelin.png',
    vialImage: '/img/vial-sermorelin.svg',
    startingPrice: 189,
    priceLabel: 'Price Locked',
  },
  {
    slug: 'glutathione',
    name: 'Glutathione',
    tagline: 'Antioxidant support, prescribed when clinically appropriate',
    description:
      'Compounded glutathione injections for antioxidant support — reviewed by an independent licensed provider and filled by a licensed U.S. pharmacy when appropriate.',
    pageHref: '/treatments/glutathione',
    ctaUrl: PLACEHOLDERS.glutathioneFunnelUrl,
    category: 'anti-aging',
    image: '/img/product-glutathione.png',
    startingPrice: 149,
  },
  {
    slug: 'ghk-cu-cream',
    name: 'GHK-Cu Cream',
    tagline: 'Topical copper peptide cream, prescribed when clinically appropriate',
    description:
      'Compounded topical GHK-Cu cream for skin support — prescribed only when a licensed provider determines it fits.',
    pageHref: '/treatments/ghk-cu-cream',
    ctaUrl: PLACEHOLDERS.ghkCuCreamFunnelUrl,
    category: 'anti-aging',
    image: '/img/product-ghk-cu-cream.png',
    startingPrice: 149,
  },
  {
    slug: 'bpc-157',
    name: 'BPC-157',
    tagline: 'Recovery peptide therapy, prescribed when clinically appropriate',
    description:
      'Compounded BPC-157 for recovery support — reviewed by an independent licensed provider and filled by a licensed U.S. pharmacy when appropriate.',
    pageHref: '/treatments/bpc-157',
    ctaUrl: PLACEHOLDERS.bpc157FunnelUrl,
    category: 'recovery',
    image: '/img/product-bpc-157.png',
    startingPrice: 199,
  },
  {
    slug: 'mic-b12',
    name: 'MIC + B12',
    tagline: 'Lipotropic and B12 support, prescribed when clinically appropriate',
    description:
      'Compounded MIC (methionine, inositol, and choline) with vitamin B12 for energy and nutrient support — prescribed only when a provider determines it fits.',
    pageHref: '/treatments/mic-b12',
    ctaUrl: PLACEHOLDERS.micB12FunnelUrl,
    category: 'recovery',
    image: '/img/product-mic-b12.png',
    startingPrice: 179,
  },
  {
    slug: 'sleep-blend',
    name: 'Teep Teeps',
    tagline: 'Ramelteon and magnesium L-threonate, prescribed when clinically appropriate',
    description:
      'A compounded tablet blend of ramelteon 10 mg and magnesium L-threonate 250 mg, 30 tablets per month. Prescribed only when an independent licensed provider determines it fits.',
    pageHref: '/treatments/sleep-blend',
    ctaUrl: PLACEHOLDERS.sleepBlendFunnelUrl,
    category: 'sleep',
    startingPrice: 83,
    priceLabel: 'Starting at',
    image: '/img/product-sleep-blend.png',
  },
  {
    slug: 'candlestick-rx',
    name: 'Candlestick Rx',
    tagline: 'Sildenafil, tadalafil, and apomorphine, prescribed when clinically appropriate',
    description:
      'A compounded chewable rapid-dissolving tablet of sildenafil, tadalafil, and apomorphine. Monthly supplies are 6, 10, or 20 tablets, and your provider chooses the dose.',
    pageHref: '/treatments/candlestick-rx',
    ctaUrl: PLACEHOLDERS.candlestickFunnelUrl,
    category: 'sexual-health',
    startingPrice: 99,
    priceLabel: 'Starting at',
    image: '/img/product-candlestick-rx.png',
  },
]

export const MARQUEE_ITEMS = [
  'Premium Telehealth',
  'Licensed U.S. Providers',
  'Licensed U.S. Pharmacies',
  'Concierge-Style Support',
  'Transparent Pricing',
  'Discreet Delivery',
  'Prescription Required',
] as const

export const DIFF_ITEMS = [
  'Physician-led clinical review',
  'Concierge-style, discreet care',
  'Licensed U.S. pharmacy fulfillment',
  'HIPAA-aware platform',
  'Ongoing provider messaging',
  'Clear, transparent pricing',
] as const
