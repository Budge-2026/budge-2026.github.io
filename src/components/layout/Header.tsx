import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS, PLACEHOLDERS } from '../../constants/brand'
import { withSalesPrefix } from '../../lib/funnelTracking'
import { Logo } from '../brand/Logo'
import { QuizCta } from '../quiz/QuizCta'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 980) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const headerFrom = withSalesPrefix(location.pathname, 'marketing-header')
  const topbarFrom = withSalesPrefix(location.pathname, 'marketing-topbar')

  return (
    <>
      <div className="topbar">
        Lowest price ever on Tirzepatide — starting at $149/mo ·{' '}
        <QuizCta className="topbar-quiz-link" from={topbarFrom}>
          Get started
        </QuizCta>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <Logo variant="fullWithEmblem" className="header-logo" />

          <nav className={`main-nav${menuOpen ? ' open' : ''}`} id="main-nav" aria-label="Main navigation">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('/#') || link.href.startsWith('#') ? (
                    <a href={link.href}>{link.label}</a>
                  ) : (
                    <Link to={link.href}>{link.label}</Link>
                  )}
                </li>
              ))}
              <li className="nav-mobile-only">
                <QuizCta className="btn btn-primary" from={headerFrom} onClick={() => setMenuOpen(false)}>
                  Get Started
                </QuizCta>
              </li>
              <li className="nav-mobile-only">
                <a className="btn btn-secondary" href={PLACEHOLDERS.loginUrl}>
                  Telehealth Login
                </a>
              </li>
            </ul>
          </nav>

          <div className="nav-ctas">
            <a className="btn btn-ghost btn-sm" href={PLACEHOLDERS.loginUrl}>
              Login
            </a>
            <QuizCta className="btn btn-primary" from={headerFrom}>
              Get Started
            </QuizCta>
          </div>

          <QuizCta className="btn btn-primary btn-sm header-cta-mobile" from={headerFrom}>
            Get Started
          </QuizCta>

          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      {menuOpen ? (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
    </>
  )
}
