import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { PolicyShell } from './components/layout/PolicyShell'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { CareQuizProvider } from './components/quiz/CareQuizContext'
import { CareQuizModal } from './components/quiz/CareQuizModal'
import { About } from './pages/About'
import { AiUsePolicy } from './pages/AiUsePolicy'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { HowItWorks } from './pages/HowItWorks'
import { Sales } from './pages/Sales'
import { NotFound } from './pages/NotFound'
import { Privacy } from './pages/Privacy'
import { RefundPolicy } from './pages/RefundPolicy'
import { TelehealthConsent } from './pages/TelehealthConsent'
import { Terms } from './pages/Terms'
import { TirzepatideAdvertorial } from './pages/TirzepatideAdvertorial'
import { Treatments } from './pages/Treatments'
import { Semaglutide } from './pages/treatments/Semaglutide'
import { Tirzepatide } from './pages/treatments/Tirzepatide'
import { Nad } from './pages/treatments/Nad'
import { Sermorelin } from './pages/treatments/Sermorelin'
import { Glutathione } from './pages/treatments/Glutathione'
import { GhkCuCream } from './pages/treatments/GhkCuCream'
import { Bpc157 } from './pages/treatments/Bpc157'
import { MicB12 } from './pages/treatments/MicB12'
import { SleepBlend } from './pages/treatments/SleepBlend'
import { CandlestickRx } from './pages/treatments/CandlestickRx'

export default function App() {
  return (
    <BrowserRouter>
      <CareQuizProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="s" element={<Sales />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="treatments" element={<Treatments />} />
            <Route path="treatments/semaglutide" element={<Semaglutide />} />
            <Route path="treatments/tirzepatide" element={<Tirzepatide />} />
            <Route path="treatments/nad" element={<Nad />} />
            <Route path="treatments/sermorelin" element={<Sermorelin />} />
            <Route path="treatments/glutathione" element={<Glutathione />} />
            <Route path="treatments/ghk-cu-cream" element={<GhkCuCream />} />
            <Route path="treatments/bpc-157" element={<Bpc157 />} />
            <Route path="treatments/mic-b12" element={<MicB12 />} />
            <Route path="treatments/sleep-blend" element={<SleepBlend />} />
            <Route path="treatments/candlestick-rx" element={<CandlestickRx />} />
            <Route path="treatments/tesamorelin" element={<Navigate to="/treatments" replace />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="articles/compounded-tirzepatide" element={<TirzepatideAdvertorial />} />

          <Route element={<PolicyShell />}>
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="telehealth-consent" element={<TelehealthConsent />} />
            <Route path="ai-use-policy" element={<AiUsePolicy />} />
          </Route>

          <Route element={<Layout />}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <CareQuizModal />
      </CareQuizProvider>
    </BrowserRouter>
  )
}
