type SectionProps = {
  children: React.ReactNode
  id?: string
  variant?: 'white' | 'cloud' | 'dark'
  className?: string
}

export function Section({ children, id, variant = 'white', className = '' }: SectionProps) {
  const bg = {
    white: 'bg-white',
    cloud: 'bg-cloud',
    dark: 'bg-dark text-white',
  }[variant]

  return (
    <section id={id} className={`py-20 md:py-24 ${bg} ${className}`}>
      <div className="mx-auto max-w-[1200px] px-6">{children}</div>
    </section>
  )
}

type SectionHeaderProps = {
  title: React.ReactNode
  subtitle?: string
  align?: 'center' | 'left'
  dark?: boolean
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 md:mb-16 ${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      <h2
        className={`text-3xl font-bold tracking-tight md:text-5xl ${
          dark ? 'text-white' : 'text-ink'
        } [&_em]:not-italic [&_em]:text-brand`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${dark ? 'text-white/75' : 'text-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
