import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ClipboardList, Package, Pill, Stethoscope, type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { PROCESS_STEPS } from '@/constants/home'

const STEP_ICONS: LucideIcon[] = [ClipboardList, Stethoscope, Pill, Package]

export type IntakePathFeaturesProps = {
  id?: string
  title?: ReactNode
  subtitle?: string
  showFooter?: boolean
}

export function IntakePathFeatures({
  id,
  title = (
    <>
      Your path from intake to <em className="not-italic text-brand">delivery</em>
    </>
  ),
  subtitle = 'A straightforward process with clinician review at every step. Submitting intake does not guarantee a prescription.',
  showFooter = false,
}: IntakePathFeaturesProps) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="@container mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>
        </div>

        <div className="mx-auto mt-8 grid max-w-sm gap-6 *:text-center sm:max-w-none sm:grid-cols-2 lg:mt-16 xl:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = STEP_ICONS[index] ?? ClipboardList
            return (
              <Card key={step.title} className="group border-0 bg-cloud shadow-none">
                <CardHeader className="pb-3">
                  <CardDecorator>
                    <Icon className="size-6 text-brand" aria-hidden />
                  </CardDecorator>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                    Step {step.number}
                  </p>
                  <h3 className="mt-3 font-medium text-ink">{step.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {showFooter && (
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
            Submitting an intake or payment does not guarantee a prescription. Compounded
            medications, when prescribed, are not FDA-approved drug products.
          </p>
        )}
      </div>
    </section>
  )
}

export { IntakePathFeatures as Features }

function CardDecorator({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden
      className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 [--border:var(--brand)]" />
      <div className="absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l border-brand/20 bg-background">
        {children}
      </div>
    </div>
  )
}
