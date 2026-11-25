import { useId, useState } from 'react'

export type FaqItem = {
  question: string
  answer: string
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const baseId = useId()

  return (
    <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
      {items.map((item, index) => {
        const open = openIndex === index
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`

        return (
          <div key={item.question}>
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                className="flex w-full items-start justify-between gap-4 py-4 text-left font-['Georgia','Iowan_Old_Style',Palatino,serif] text-[18px] leading-snug font-semibold text-[#001848] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001848]"
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#CBD5E1] text-[16px] leading-none text-[#001848]"
                >
                  {open ? '−' : '+'}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!open}
              inert={!open}
              className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
              style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-[16px] leading-[1.65] text-[#334155]">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
