import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { FinalCtaMarquee } from '../ui/cta-with-text-marquee'
import { PLACEHOLDERS } from '../../constants/brand'
import { Logo } from '../brand/Logo'

export function PolicyShell() {
  return (
    <div className="flex min-h-screen flex-col" style={{ background: 'var(--bg)' }}>
      <div className="topbar">
        Have questions?{' '}
        <a href={`mailto:${PLACEHOLDERS.supportEmail}`}>Email {PLACEHOLDERS.supportEmail}</a>
      </div>
      <header className="border-b border-smoke bg-white py-6">
        <div className="mx-auto flex max-w-[800px] justify-center px-6">
          <Logo variant="fullLight" />
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <div className="site-closer">
        <FinalCtaMarquee />
        <Footer />
      </div>
    </div>
  )
}
