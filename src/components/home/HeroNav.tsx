import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'
import { Button } from '../ui/Button'
import { useFunnelHref } from '../tracking/FunnelLink'
import { PLACEHOLDERS } from '../../constants/brand'
import { HOME_SECTION_LINKS } from '../../constants/home'

type HeroNavProps = {
  variant?: 'light' | 'dark'
}

export function HeroNav({ variant = 'light' }: HeroNavProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const isDark = variant === 'dark'
  const getStartedHref = useFunnelHref(PLACEHOLDERS.intakeUrl, {
    from: 'hero-nav',
    label: 'Get Started',
  })

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="relative z-20 grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-5 md:px-8">
      <Logo variant={isDark ? 'dark' : 'light'} className="h-9 sm:h-10" />

      <nav
        className={`hidden items-center gap-1 rounded-full border px-2 py-1.5 md:flex ${
          isDark
            ? 'border-white/15 bg-white/10 shadow-[0_2px_16px_rgba(0,0,0,0.2)] backdrop-blur-md'
            : 'border-brand/20 bg-white shadow-[0_2px_16px_rgba(40,40,168,0.1)]'
        }`}
        aria-label="Main navigation"
      >
        {HOME_SECTION_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isDark ? 'text-white/85 hover:text-white' : 'text-ink hover:text-brand'
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="hidden items-center justify-end gap-3 md:flex">
        <Button
          href={PLACEHOLDERS.loginUrl}
          variant="outline"
          size="sm"
          className={
            isDark
              ? 'border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white'
              : undefined
          }
        >
          Login
        </Button>
        <Button
          href={getStartedHref}
          variant="primary"
          size="sm"
          className={isDark ? 'bg-white text-ink hover:opacity-90' : undefined}
        >
          Get Started
        </Button>
      </div>

      <button
        type="button"
        className="col-start-3 justify-self-end md:hidden"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span
          className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full ${
            isDark ? 'bg-white/10 backdrop-blur-sm' : 'bg-cloud'
          }`}
        >
          <span
            className={`block h-0.5 w-5 transition-transform ${isDark ? 'bg-white' : 'bg-ink'} ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-5 transition-opacity ${isDark ? 'bg-white' : 'bg-ink'} ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-5 transition-transform ${isDark ? 'bg-white' : 'bg-ink'} ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </span>
      </button>

      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-dark/55"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <div className="absolute right-0 top-0 flex h-full w-[min(320px,85vw)] flex-col bg-white p-6 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <Link to="/" onClick={closeMenu}>
                <Logo variant="light" className="h-9" linkToHome={false} />
              </Link>
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="text-2xl text-muted"
              >
                ×
              </button>
            </div>
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {HOME_SECTION_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-cloud"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3 pt-8">
              <Button href={PLACEHOLDERS.loginUrl} variant="outline" className="w-full">
                Login
              </Button>
              <Button href={getStartedHref} className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
