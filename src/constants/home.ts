export const HOME_SECTION_LINKS = [
  { label: 'Our Process', href: '#how-it-works' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Support', href: '#faq' },
] as const

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Complete your intake',
    description:
      'Share your health history and goals through our secure online intake form.',
  },
  {
    number: '02',
    title: 'Provider review',
    description:
      'An independent licensed provider reviews your information and may ask follow-up questions.',
  },
  {
    number: '03',
    title: 'Pharmacy fulfillment',
    description:
      'If prescribed, your medication is prepared by a licensed U.S. pharmacy.',
  },
  {
    number: '04',
    title: 'Ship to you',
    description:
      'Your prescription ships directly to your door with tracking when applicable.',
  },
] as const

export const PROCESS_STICKY_CONTENT = PROCESS_STEPS.map((step) => ({
  title: step.title,
  description: step.description,
}))

export const VALUE_PROPS = [
  {
    title: 'Clear, upfront process',
    description:
      'From intake to fulfillment, every step is transparent. No hidden surprises — just a straightforward path to connect with a licensed provider.',
    icon: 'process',
  },
  {
    title: 'Licensed clinicians who review your case',
    description:
      'Every intake is reviewed by an independent, U.S.-licensed healthcare provider who makes all clinical decisions — not the platform.',
    icon: 'providers',
  },
  {
    title: 'Licensed U.S. pharmacies',
    description:
      'If a provider determines treatment is appropriate, prescriptions are filled by licensed U.S. pharmacies, which may compound medications individually.',
    icon: 'pharmacy',
  },
  {
    title: 'Care delivered to your door',
    description:
      'Complete your intake online from home. When prescribed, medications ship directly to you with tracking and support information.',
    icon: 'delivery',
  },
] as const
