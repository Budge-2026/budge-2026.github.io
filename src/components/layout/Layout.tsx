import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { FinalCtaMarquee } from '../ui/cta-with-text-marquee'

export function Layout() {
  return (
    <div className="flex min-h-screen w-full max-w-full flex-col overflow-x-clip">
      <Header />
      <main id="main" className="w-full min-w-0 flex-1">
        <Outlet />
      </main>
      <div className="site-closer w-full">
        <FinalCtaMarquee />
        <Footer />
      </div>
    </div>
  )
}
