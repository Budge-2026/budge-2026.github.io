import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaqAccordion } from '../components/advertorial/FaqAccordion'
import { ADVERTORIAL_INTAKE_URL, IntakeCta } from '../components/advertorial/IntakeCta'
import { useFunnelHref } from '../components/tracking/FunnelLink'
import { StickyEligibilityBar } from '../components/advertorial/StickyEligibilityBar'
import { BRAND_NAME, PLACEHOLDERS } from '../constants/brand'
import { CLINICAL_PROVIDER, FULFILLMENT_PHARMACY } from '../constants/policy'

const SERIF = "font-['Georgia','Iowan_Old_Style',Palatino,serif]"

const TRAPS = [
  {
    title: 'The 12-Month Upfront Lock-In Trap',
    detail:
      'Some programs ask for $900 or more before a clinician has finished a review, framed as a “commitment” or annual plan. If the dose, the side effects, or life changes, that cash is already gone.',
  },
  {
    title: 'The “Membership Fee” Bait-and-Switch',
    detail:
      'A $99 app or membership fee shows up in the ad. The medication invoice arrives later, sometimes near $400, and the two charges are easy to miss until checkout is almost done.',
  },
  {
    title: 'The Titration Price Gouge',
    detail:
      'The starter dose is the advertised price. Each step up in dose quietly raises the bill. People discover the real monthly cost only after they have already started.',
  },
  {
    title: 'The Shady “Research Chemical” Grey Market',
    detail:
      'Vials sold as “research only,” with no prescription and no licensed pharmacy, are not medical care. There is no clinician on the hook for what is in the vial or what happens after you take it.',
  },
  {
    title: 'The Ghost-Town Support',
    detail:
      'The chat that answered instantly before you paid goes quiet once the order is placed. Dose questions and side-effect worries sit unanswered.',
  },
] as const

const COMPARISON_ROWS = [
  {
    label: 'Typical monthly price',
    retail: 'About $1,000–$1,300 cash list for Mounjaro or Zepbound without coverage',
    competitors: 'A low advertised fee, then a separate medication bill',
    budgerx: 'Compounded tirzepatide from $149/mo',
  },
  {
    label: 'Membership fee',
    retail: 'Not sold as a membership',
    competitors: 'Often $49–$99 on top of the drug',
    budgerx: 'No membership fee',
  },
  {
    label: 'Upfront commitment',
    retail: 'Pay per fill at the pharmacy',
    competitors: 'Some require several months, or a year, paid upfront',
    budgerx: 'No 12-month upfront lock-in',
  },
  {
    label: 'What you receive',
    retail: 'FDA-approved branded product',
    competitors: 'Varies widely, including non-pharmacy sellers',
    budgerx: 'Compounded for one patient. Not FDA-approved.',
  },
  {
    label: 'Who decides',
    retail: 'Your own prescriber',
    competitors: 'Varies. Some shops skip a real clinical review.',
    budgerx: `Independent licensed clinicians through ${CLINICAL_PROVIDER.name}`,
  },
  {
    label: 'Pharmacy',
    retail: 'Retail or specialty pharmacy',
    competitors: 'Varies, including grey-market sources',
    budgerx: `Licensed U.S. pharmacy, including ${FULFILLMENT_PHARMACY.name}`,
  },
  {
    label: 'Visit format',
    retail: 'Office visit or the prescriber’s telehealth',
    competitors: 'Varies',
    budgerx: 'Online intake. No video call required in most cases.',
  },
  {
    label: 'Where it ships',
    retail: 'Pickup or pharmacy shipping',
    competitors: 'Varies',
    budgerx: 'All 50 states. Discreet shipping after approval.',
  },
] as const

const PERSPECTIVES = [
  {
    name: 'Rachel M.',
    quote: 'The pharmacy counter was the moment the brand-name price became real.',
    body: 'She went in expecting a coupon to close the gap and left with a four-figure monthly quote. The next search was for a clinician-reviewed option that stated the medication price before she paid a separate membership.',
  },
  {
    name: 'Marcus T.',
    quote: 'Food noise was the symptom he wanted a doctor to take seriously.',
    body: 'He was not looking for a research-chemical website. He wanted a licensed clinician to read his history first, and a pharmacy that ships only if that clinician prescribes.',
  },
  {
    name: 'Elena R.',
    quote: 'A year paid upfront was the offer she walked away from.',
    body: 'A previous program wanted the annual amount before anyone finished a clinical review. Month-to-month pricing, with no membership stacked on the medication, was the filter she used the second time.',
  },
] as const

const FAQS = [
  {
    question: 'Is compounded tirzepatide the same product as Mounjaro or Zepbound?',
    answer:
      'No. Mounjaro and Zepbound are FDA-approved brand-name tirzepatide products. Compounded tirzepatide is prepared by a licensed pharmacy for an individual patient pursuant to a prescription. It is not an FDA-approved drug product, and the FDA has not reviewed it for safety, effectiveness, or quality.',
  },
  {
    question: 'Is compounded tirzepatide FDA-approved?',
    answer:
      'No. Compounded medications are not FDA-approved. A prescription is required. An independent licensed clinician decides whether treatment is appropriate. Submitting an intake does not guarantee a prescription.',
  },
  {
    question: 'What does BudgeRx charge for compounded tirzepatide?',
    answer:
      'Compounded tirzepatide through BudgeRx starts at $149 per month. There is no separate membership fee. Your clinician determines the dose. The price you see at intake is the price for the program you are offered — confirm the amount on the intake screen before you pay.',
  },
  {
    question: 'Do I have to prepay for a year?',
    answer:
      'No. BudgeRx does not require a 12-month upfront payment for compounded tirzepatide. Many services are billed as a monthly subscription you can cancel before the next cycle, subject to the refund policy once a clinician or pharmacy has started processing an order.',
  },
  {
    question: 'Who reviews my information, and who fills a prescription?',
    answer: `${BRAND_NAME} is not a medical practice or a pharmacy. Clinical services are provided by ${CLINICAL_PROVIDER.name}, an independent network of U.S.-licensed clinicians. If a clinician prescribes, the prescription is filled by a licensed U.S. pharmacy, including ${FULFILLMENT_PHARMACY.name}.`,
  },
  {
    question: 'Will I need a video visit?',
    answer:
      'Most people start with a secure online intake and do not need a video call. A clinician may still request a visit or more information before deciding. There is no guarantee of a prescription either way.',
  },
  {
    question: 'Where is this available, and how fast does it ship?',
    answer:
      'BudgeRx serves all 50 U.S. states. After a clinician approves a prescription, most orders ship within 2–3 days. Delivery time after that depends on your location. Medication is not shipped unless a licensed clinician prescribes it.',
  },
  {
    question: 'What if a clinician does not approve treatment?',
    answer:
      'You are not charged for medication unless a licensed clinician approves it. If you have already paid and the review has not started, contact team@budgerx.com. See the refund policy for the points at which an order can no longer be canceled, including after pharmacy processing.',
  },
  {
    question: 'Do the SURMOUNT trial results apply to compounded tirzepatide?',
    answer:
      'SURMOUNT-1 studied tirzepatide in a clinical trial, not a compounded preparation. At 72 weeks, people on the 15 mg dose lost about 20.9% of body weight in the treatment-regimen analysis and 22.5% in the efficacy analysis — on the order of 48 to 52 pounds from that trial’s average starting weight. Those figures are not a promise for any individual, and they are not a claim that a compounded product was studied in that trial.',
  },
  {
    question: 'Who should not use a GLP-1 medication?',
    answer:
      'Tirzepatide is not appropriate for everyone. Do not use GLP-1 medications if you or a family member has had medullary thyroid carcinoma, or if you have Multiple Endocrine Neoplasia syndrome type 2. Tell the clinician about pregnancy, plans to become pregnant, pancreatitis, gallbladder disease, and every medication you take. This page is not for emergencies — call 911. You must be 18 or older.',
  },
] as const

function ArticleDate({ className = 'text-[#64748B]' }: { className?: string }) {
  const updated = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <p className={`text-[14px] tracking-wide ${className}`}>
      Updated: {updated}
      <span aria-hidden="true"> | </span>
      <span className="whitespace-nowrap">6-Minute Read</span>
    </p>
  )
}

export function TirzepatideAdvertorial() {
  const headerHref = useFunnelHref(ADVERTORIAL_INTAKE_URL, {
    from: 'advertorial-tirzepatide-header',
    label: 'Check Your Eligibility for $149/mo Tirzepatide',
    goal: 'weight',
  })

  useEffect(() => {
    const previousTitle = document.title
    const meta = document.querySelector('meta[name="description"]')
    const previousDescription = meta?.getAttribute('content') ?? null
    document.title = 'Compounded Tirzepatide, Reviewed — The Metabolic Health Dispatch'
    meta?.setAttribute(
      'content',
      'A BudgeRx advertorial on physician-prescribed compounded tirzepatide: brand-name cash prices, compounded-market traps, and a 3-minute eligibility intake. From $149/mo. Not FDA-approved. All 50 states.',
    )
    return () => {
      document.title = previousTitle
      if (previousDescription) meta?.setAttribute('content', previousDescription)
    }
  }, [])

  return (
    <div className="dispatch-article min-h-screen bg-[#E6EDF5] text-[#1E293B] antialiased">
      <a
        href="#article"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to article
      </a>

      <header className="dispatch-hero bg-[#001848] text-[#F8FAFC]">
        <div className="mx-auto flex max-w-[1100px] flex-col items-stretch justify-between gap-4 px-5 py-4 sm:flex-row sm:items-center sm:px-6">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[#C5D0E0] uppercase">
              Clinical & Consumer Health Review
            </p>
            <p className={`${SERIF} mt-1 text-[26px] leading-none text-white sm:text-[32px]`}>
              The Metabolic Health Dispatch
            </p>
          </div>
          <a
            href={headerHref}
            data-analytics="advertorial-intake-cta"
            data-cta-position="header"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#059669] px-3.5 py-2.5 text-center text-[13px] leading-snug font-bold text-white hover:bg-[#047857] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-4 sm:text-[15px]"
          >
            Check Your Eligibility for $149/mo Tirzepatide →
          </a>
        </div>
        <div className="h-[3px] bg-[#C4A35A]" />
        <div className="h-px bg-white/30" />

        <div className="mx-auto max-w-[920px] px-5 pt-8 pb-14 sm:px-8 sm:pt-10 sm:pb-16 md:pb-20">
          <p className="text-[12px] font-semibold tracking-[0.16em] text-[#6EE7B7] uppercase">
            Sponsored report · {BRAND_NAME}
          </p>
          <h1 className={`${SERIF} mt-3 text-[32px] leading-[1.18] font-bold text-white sm:text-[40px]`}>
            Brand-name tirzepatide can run $1,200 a month. A clinician-reviewed compounded option starts at $149.
          </h1>
          <p className={`${SERIF} mt-4 text-[19px] leading-snug text-[#E2E8F0] italic sm:text-[22px]`}>
            What dual-action GLP-1/GIP therapy is, where the compounded market cuts corners, and what a
            prescription pathway actually requires.
          </p>
          <div className="mt-6 space-y-1 border-t border-white/20 pt-4">
            <ArticleDate className="text-[#D5DEE9]" />
            <p className="text-[14px] leading-relaxed text-[#F8FAFC]">
              By Metabolic Health Dispatch Editorial Board | Medically Reviewed by Clinical Review Board
            </p>
          </div>
        </div>
      </header>

      <article
        id="article"
        className="relative z-10 mx-auto -mt-8 max-w-[920px] bg-white px-5 pt-8 pb-8 text-[17px] leading-[1.7] shadow-[0_16px_40px_rgba(0,24,72,0.12)] sm:px-8 md:pb-16 md:text-[18.5px] md:leading-[1.68]"
      >
        <aside className="border-l-[3px] border-[#001848] bg-[#F8FAFC] px-5 py-6 sm:px-7">
          <p className="text-[12px] font-semibold tracking-[0.16em] text-[#001848] uppercase">
            Executive summary
          </p>
          <ul className="mt-4 space-y-3 text-[16px] leading-snug md:text-[17px]">
            <li>
              <strong className="text-[#001848]">$1,200 retail vs. from $149.</strong> Cash prices for
              brand-name Mounjaro and Zepbound often land near $1,000–$1,300 a month without coverage.
              Compounded tirzepatide through {BRAND_NAME} starts at $149 a month.
            </li>
            <li>
              <strong className="text-[#001848]">Patient-specific pharmacy, not a grey-market vial.</strong>{' '}
              If prescribed, medication is prepared for that patient by a licensed U.S. compounding
              pharmacy, including {FULFILLMENT_PHARMACY.name}. Compounded drugs are not FDA-approved.
            </li>
            <li>
              <strong className="text-[#001848]">No membership fee.</strong> The monthly price is the
              program price. There is no separate app membership stacked on a later drug bill, and no
              12-month amount due before a clinician reviews your intake.
            </li>
          </ul>
          <p className="mt-4 text-[13px] leading-relaxed text-[#64748B]">
            A prescription is required. An independent clinician decides. Individual results vary.
          </p>
        </aside>

        <div className="mt-8 space-y-5">
          <p>
            The prescription is the same word on the label — tirzepatide — and the prices are not in the
            same universe. At a retail counter, Mounjaro and Zepbound are FDA-approved brand-name
            products. Without insurance or a manufacturer savings card that actually applies, the cash
            price commonly sits around $1,200 a month. People hear that number, do the math for a year,
            and start searching.
          </p>
          <p>
            The search results are not all medical practices. Some are. Some are storefronts for
            research chemicals with a checkout button. The distance between those two is the entire
            point of this review: compounded tirzepatide can be a legitimate, prescription-only
            preparation from a licensed U.S. pharmacy, and it can also be a label on a vial that no
            clinician and no pharmacy will stand behind.
          </p>
          <p>
            {BRAND_NAME} sits in the first category. It is not a clinic and it is not a pharmacy. It
            connects adults with independent licensed clinicians through {CLINICAL_PROVIDER.name}. If a
            clinician prescribes compounded tirzepatide, a licensed pharmacy — including{' '}
            {FULFILLMENT_PHARMACY.name} — prepares it for that patient and ships it. The medication is
            not FDA-approved. Nothing on this page is a promise that you will qualify, or that you will
            lose a specific amount of weight.
          </p>
        </div>

        <h2 className={`${SERIF} mt-12 text-[28px] leading-tight font-bold text-[#001848]`}>
          Two receptors, one weekly medication
        </h2>
        <p className="mt-4">
          Tirzepatide is a dual agonist. It acts on GLP-1 and GIP receptors. Semaglutide, the drug in
          Ozempic and Wegovy, acts on GLP-1 alone. That second pathway is the reason clinicians and
          researchers talk about tirzepatide differently, and it is also the reason the cash price of
          the brands got so high.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
            <p className="text-[12px] font-semibold tracking-[0.14em] text-[#001848] uppercase">
              Pathway 1 · GLP-1
            </p>
            <p className={`${SERIF} mt-2 text-[20px] leading-snug font-bold text-[#001848]`}>
              Brain and gut
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-[#334155]">
              GLP-1 receptors in the brain and gut are tied to appetite signaling. This is the pathway
              people mean when they describe food noise going quiet — the constant pull toward the next
              meal turning down.
            </p>
          </div>
          <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
            <p className="text-[12px] font-semibold tracking-[0.14em] text-[#001848] uppercase">
              Pathway 2 · GIP
            </p>
            <p className={`${SERIF} mt-2 text-[20px] leading-snug font-bold text-[#001848]`}>
              Adipose tissue
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-[#334155]">
              GIP receptors are also found on fat tissue. Researchers studying this second pathway look
              at how dual agonists affect weight beyond appetite alone, including tolerability. Nausea
              and other stomach side effects can still occur.
            </p>
          </div>
        </div>

        <aside className="mt-4 rounded-xl border border-[#001848]/15 bg-[#F8FAFC] p-5 sm:p-6">
          <p className="text-[12px] font-semibold tracking-[0.14em] text-[#001848] uppercase">
            Clinical study · SURMOUNT-1
          </p>
          <p className={`${SERIF} mt-2 text-[26px] leading-tight font-bold text-[#001848]`}>
            Up to 22.5% average body-weight loss
          </p>
          <p className="mt-1 text-[15px] font-semibold text-[#334155]">
            About 48 to 52 pounds at the 15 mg dose, over 72 weeks
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-[#475569]">
            In the published SURMOUNT-1 trial, adults with obesity and without diabetes who took
            tirzepatide 15 mg lost an average of 20.9% of body weight on the treatment-regimen analysis
            and 22.5% on the efficacy analysis at 72 weeks. From that study’s average starting weight,
            those percentages are roughly 48 to 52 pounds. The trial did not study a compounded
            product. Compounded tirzepatide is not FDA-approved. Individual results vary, and a smaller
            loss — or no loss — is possible.
          </p>
        </aside>

        <IntakeCta position="early" />

        <h2 className={`${SERIF} mt-4 text-[28px] leading-tight font-bold text-[#001848]`}>
          The dark side of the compounded gold rush
        </h2>
        <p className="mt-4">
          Demand for tirzepatide outran brand supply and outran what most households can pay at retail.
          A market grew up in the gap. Some of it is licensed clinicians and licensed pharmacies. Some
          of it is a landing page and a vial. These are the patterns worth recognizing before you enter
          a card number.
        </p>

        <ol className="mt-6 space-y-3">
          {TRAPS.map((trap, index) => (
            <li
              key={trap.title}
              className="rounded-xl border border-[#F3D6B0] bg-[#FFFBEB] p-4 sm:p-5"
            >
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B45309] text-[13px] font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold text-[#7C2D12]">{trap.title}</p>
                  <p className="mt-1 text-[15.5px] leading-relaxed text-[#44403C]">{trap.detail}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <figure className="my-10">
          <img
            src="/img/product-tirz.png"
            alt="BudgeRx compounded tirzepatide vial, labeled GLP-1 and GIP agonist, prescription only"
            width={644}
            height={800}
            className="mx-auto w-full max-w-[420px] rounded-lg bg-[#F8FAFC] object-contain"
          />
          <figcaption className="mt-3 text-center text-[13px] leading-snug text-[#64748B]">
            BudgeRx compounded tirzepatide. Prepared for one patient by a licensed pharmacy. Not an
            FDA-approved product.
          </figcaption>
        </figure>

        <h2 className={`${SERIF} mt-12 text-[28px] leading-tight font-bold text-[#001848]`}>
          The turning point: why South Florida entrepreneur Budge Collinson broke ranks with the
          telehealth industry
        </h2>
        <div className="mt-6 grid items-start gap-8 md:grid-cols-[240px_minmax(0,1fr)]">
          <figure className="mx-auto w-full max-w-[280px] overflow-hidden rounded-xl bg-[#001848] shadow-[0_12px_30px_rgba(0,24,72,0.16)]">
            <img
              src="/img/budge-collinson.png"
              alt="Budge Collinson, founder of BudgeRx"
              width={1312}
              height={1199}
              className="aspect-[4/5] w-full bg-black object-cover object-top"
            />
            <figcaption className="px-4 py-3 text-white">
              <span className="block text-[15px] font-semibold">Budge Collinson</span>
              <span className="mt-0.5 block text-[11px] font-semibold tracking-[0.16em] text-[#C4A35A] uppercase">
                Founder, {BRAND_NAME}
              </span>
            </figcaption>
          </figure>
          <div className="space-y-5">
            <p>
              To understand why {BRAND_NAME} operates so differently from typical corporate telehealth
              platforms, you have to look at who built it.
            </p>
            <p>{BRAND_NAME} was founded by South Florida wellness entrepreneur Budge Collinson.</p>
            <p>
              Collinson is not a tech executive looking for a quick exit. He spent decades in
              nutritional science and metabolic optimization, previously helping bring national
              longevity formulations like Youth Infusion to shelves across America through The Vitamin
              Shoppe.
            </p>
            <p>Over the past three years, Collinson watched the GLP-1 boom with growing frustration:</p>
          </div>
        </div>
        <blockquote className="my-6 border-l-[3px] border-[#C4A35A] bg-[#F8FAFC] px-5 py-5 sm:px-6">
          <p className={`${SERIF} text-[20px] leading-snug text-[#001848] italic sm:text-[22px]`}>
            “Access to serious, life-changing longevity medicine was being treated like an exclusive
            club reserved for elite athletes, celebrities, and billionaires,” says Collinson.
            “Meanwhile, everyday people who desperately needed metabolic support were either getting
            gouged for $1,200 at retail, or getting tricked by venture-backed apps demanding $900
            upfront for rigid 12-month contracts.”
          </p>
        </blockquote>
        <div className="space-y-5">
          <p>
            Collinson set out to dismantle the gatekeeping. His mission was simple:{' '}
            <strong className="text-[#001848]">Better Medicine. Better Living.</strong>
          </p>
          <p>
            Instead of building another predatory subscription trap, he partnered directly with
            independent U.S.-licensed physicians through the {CLINICAL_PROVIDER.name} clinician network
            and accredited 503A state-licensed compounding pharmacies like {FULFILLMENT_PHARMACY.name}.
          </p>
          <p>
            By eliminating the middle layers, corporate sales teams, and venture capital bloat,{' '}
            {BRAND_NAME} made compounded tirzepatide accessible starting at $149 a month, with zero
            membership fees and zero 12-month lock-in contracts. Compounded tirzepatide is prepared for
            an individual patient and is not an FDA-approved drug.
          </p>
        </div>

        <h2 className={`${SERIF} mt-12 text-[28px] leading-tight font-bold text-[#001848]`}>
          What a cleaner pathway specifies up front
        </h2>
        <div className="mt-4 space-y-5">
          <p>
            A credible offer can be checked in a minute. The price of the medication is the price in
            the ad. A licensed clinician, not a chatbot, decides whether a prescription is appropriate.
            A licensed U.S. pharmacy prepares the medication for one patient. Support does not end at
            the receipt.
          </p>
          <p>
            That is the {BRAND_NAME} model for compounded tirzepatide. The program starts at $149 a
            month, with no membership fee and no year-long prepay. You complete a secure intake — about
            three minutes for most people. A clinician in the {CLINICAL_PROVIDER.name} network reviews
            it. If they prescribe, {FULFILLMENT_PHARMACY.name} or another licensed U.S. pharmacy fills
            the prescription and ships it, typically within 2–3 days of approval. If they do not
            prescribe, you are not charged for medication.
          </p>
          <p>
            The service is available in all 50 states. You must be 18 or
            older. Compounded tirzepatide is not an FDA-approved drug, and it is not a substitute claim
            for the branded pens studied under the Mounjaro and Zepbound labels.
          </p>
        </div>

        <h2 className={`${SERIF} mt-12 text-[28px] leading-tight font-bold text-[#001848]`}>
          Side by side
        </h2>
        <p className="mt-4">
          Brand-name retail, a typical telehealth offer, and {BRAND_NAME}. The highlighted column is
          the compounded program reviewed here.
        </p>
        <p className="mt-3 hidden text-center text-[13px] font-medium tracking-wide text-[#64748B] min-[390px]:block md:hidden">
          ← Swipe to compare →
        </p>

        <div className="mt-3 hidden min-[390px]:block">
          <div className="overflow-x-auto overscroll-x-contain scroll-smooth rounded-xl border border-[#E2E8F0]">
            <table className="w-full min-w-[680px] border-collapse text-left text-[14px] leading-snug">
              <caption className="sr-only">
                Comparison of brand-name retail tirzepatide, typical telehealth competitors, and
                BudgeRx compounded tirzepatide
              </caption>
              <thead>
                <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
                  <th scope="col" className="sticky left-0 z-10 bg-[#F8FAFC] px-3 py-3 font-semibold text-[#001848]">
                    <span className="sr-only">Feature</span>
                  </th>
                  <th scope="col" className="px-3 py-3 font-semibold text-[#001848]">
                    Brand-name retail
                    <span className="mt-1 block text-[12px] font-medium text-[#64748B]">
                      Mounjaro / Zepbound
                    </span>
                  </th>
                  <th scope="col" className="px-3 py-3 font-semibold text-[#001848]">
                    Typical telehealth competitors
                  </th>
                  <th scope="col" className="bg-[#ECFDF5] px-3 py-3 font-bold text-[#064E3B]">
                    <span className="mb-1 inline-block rounded-full bg-[#059669] px-2 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase">
                      Recommended
                    </span>
                    <span className="mt-1 block">{BRAND_NAME} compounded tirzepatide</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.label} className="border-b border-[#E2E8F0] last:border-b-0">
                    <th
                      scope="row"
                      className="sticky left-0 z-10 bg-white px-3 py-3 align-top font-semibold text-[#001848]"
                    >
                      {row.label}
                    </th>
                    <td className="px-3 py-3 align-top text-[#334155]">{row.retail}</td>
                    <td className="px-3 py-3 align-top text-[#334155]">{row.competitors}</td>
                    <td className="bg-[#ECFDF5] px-3 py-3 align-top font-semibold text-[#064E3B]">
                      {row.budgerx}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <article className="dispatch-winner mt-3 rounded-xl border-2 border-[#059669] bg-[#ECFDF5] p-4 min-[390px]:hidden">
          <p className="inline-block rounded-full bg-[#059669] px-2 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase">
            Recommended
          </p>
          <h3 className={`${SERIF} mt-2 text-[22px] leading-tight font-bold text-[#064E3B]`}>
            {BRAND_NAME} compounded tirzepatide
          </h3>
          <dl className="mt-4 space-y-4">
            {COMPARISON_ROWS.map((row) => (
              <div key={row.label} className="border-t border-[#A7F3D0] pt-3">
                <dt className="text-[12px] font-semibold tracking-wide text-[#047857] uppercase">{row.label}</dt>
                <dd className="mt-1 text-[16px] leading-snug font-semibold text-[#064E3B]">{row.budgerx}</dd>
                <dd className="mt-1 text-[13px] leading-snug text-[#475569]">
                  Brand-name retail: {row.retail}
                </dd>
                <dd className="mt-0.5 text-[13px] leading-snug text-[#475569]">
                  Typical telehealth: {row.competitors}
                </dd>
              </div>
            ))}
          </dl>
        </article>

        <IntakeCta position="matrix" />

        <h2 className={`${SERIF} mt-4 text-[28px] leading-tight font-bold text-[#001848]`}>
          Three decisions, up close
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-[#475569]">
          Patient experiences reflecting common feedback from adults seeking physician-guided care.
          Individual results vary based on biology, diet, and lifestyle.
        </p>

        <div className="mt-6 space-y-4">
          {PERSPECTIVES.map((person) => (
            <figure
              key={person.name}
              className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
            >
              <p className="text-[14px] tracking-[0.12em] text-[#B45309]" aria-label="5 out of 5 stars">
                ★★★★★
              </p>
              <blockquote>
                <p className={`${SERIF} mt-2 text-[20px] leading-snug font-bold text-[#001848]`}>
                  “{person.quote}”
                </p>
                <p className="mt-3 text-[16px] leading-relaxed text-[#334155]">{person.body}</p>
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-between gap-3 text-[13px]">
                <span className="font-semibold text-[#001848]">{person.name}</span>
                <span className="rounded-full bg-white px-2.5 py-1 font-semibold tracking-wide text-[#475569] uppercase">
                  Patient perspective
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <h2 className={`${SERIF} mt-12 text-[28px] leading-tight font-bold text-[#001848]`}>
          Questions worth answering before the intake
        </h2>
        <div className="mt-6">
          <FaqAccordion items={[...FAQS]} />
        </div>

        <h2 className={`${SERIF} mt-12 text-[28px] leading-tight font-bold text-[#001848]`}>
          The bottom line
        </h2>
        <div className="mt-4 space-y-5">
          <p>
            Brand-name tirzepatide is an FDA-approved drug with a cash price many people cannot carry.
            The compounded market that grew up underneath it includes licensed care and unlicensed
            shortcuts. The shortcuts are the lock-in, the membership stacked on a second bill, the dose
            that gets more expensive after you start, the research-chemical vial, and the support inbox
            that goes dark.
          </p>
          <p>
            {BRAND_NAME} is a narrower offer. Compounded tirzepatide from $149 a month. No membership
            fee. A clinician at {CLINICAL_PROVIDER.name} decides. A licensed pharmacy, including{' '}
            {FULFILLMENT_PHARMACY.name}, fills only if that clinician prescribes. The medication is not
            FDA-approved. Results vary. The intake takes about three minutes, and it is the only way to
            know whether this program is even an option for you.
          </p>
        </div>

        <IntakeCta position="bottom" />
      </article>

      <footer className="border-t border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="mx-auto max-w-[920px] px-5 py-8 pb-28 text-[12px] leading-relaxed text-[#64748B] sm:px-8 md:pb-10">
          <p>
            <strong className="font-semibold text-[#475569]">Important:</strong> {PLACEHOLDERS.legalEntity}{' '}
            is a {PLACEHOLDERS.entityType} and is not a medical practice, pharmacy, or healthcare
            provider. This page is a paid advertisement. It is educational and is not medical advice.
            Submitting an intake or a payment does not create a doctor–patient relationship and does not
            guarantee a prescription.
          </p>
          <p className="mt-3">
            Compounded medications are prepared for individual patients by licensed U.S. pharmacies,
            including {FULFILLMENT_PHARMACY.name}, and are not FDA-approved. The FDA has not reviewed
            them for safety, effectiveness, or quality. Clinical services are provided by{' '}
            {CLINICAL_PROVIDER.name}, an independent network of U.S.-licensed clinicians, who determine
            whether treatment is appropriate. Prescriptions, when issued, are filled by a licensed U.S.
            pharmacy. {BRAND_NAME} does not manufacture or prescribe medication. Individual results vary.
            Service is available in all 50 U.S. states. You must be 18 or
            older.
          </p>
          <p className="mt-3">
            GLP-1 medications may cause side effects, some serious, including a potential risk of
            thyroid C-cell tumors. Do not use a GLP-1 medication if you or your family have a history of
            medullary thyroid carcinoma or Multiple Endocrine Neoplasia syndrome type 2. This site is
            not for emergencies — call 911.
          </p>
          <p className="mt-3">
            By using {BRAND_NAME} you agree to the{' '}
            <Link to="/terms" className="underline">
              Terms of Service
            </Link>
            ,{' '}
            <Link to="/privacy" className="underline">
              Privacy Policy
            </Link>
            ,{' '}
            <Link to="/refund-policy" className="underline">
              Refund Policy
            </Link>
            ,{' '}
            <Link to="/telehealth-consent" className="underline">
              Telehealth Consent
            </Link>
            , and{' '}
            <Link to="/ai-use-policy" className="underline">
              AI Use Policy
            </Link>
            . Questions: {PLACEHOLDERS.supportEmail}.
          </p>
        </div>
      </footer>

      <StickyEligibilityBar />
    </div>
  )
}
