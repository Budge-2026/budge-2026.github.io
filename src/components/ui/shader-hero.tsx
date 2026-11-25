import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { MeshGradient } from '@paper-design/shaders-react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { BRAND_NAME, PLACEHOLDERS } from '@/constants/brand'
import { HeroNav } from '@/components/home/HeroNav'
import { useFunnelHref } from '@/components/tracking/FunnelLink'

const letterAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const containerAnimation = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
}

export type ShaderHeroProps = {
  titleLines?: [string, string]
  subtitle?: string
  badge?: string
  intakeUrl?: string
}

export function ShaderHero({
  titleLines = ['Personalized telehealth,', 'built around you'],
  subtitle = `${BRAND_NAME} helps eligible adults connect with independent licensed providers for personalized telehealth visits. Prescriptions may be filled by licensed U.S. pharmacies when clinically appropriate.`,
  badge = 'Prescription required · Licensed U.S. providers',
  intakeUrl = PLACEHOLDERS.intakeUrl,
}: ShaderHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackedIntakeUrl = useFunnelHref(intakeUrl, { from: 'shader-hero', label: 'Get Started' })

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-dark"
    >
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.004" numOctaves={1} result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.25" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.9 0"
              result="tint"
            />
          </filter>
        </defs>
      </svg>

      <MeshGradient
        className="absolute inset-0 h-full w-full"
        colors={['#080818', '#121228', '#181868', '#2828a8']}
        speed={0.25}
      />
      <MeshGradient
        className="absolute inset-0 h-full w-full opacity-40"
        colors={['#080818', '#4040c8', '#2828a8']}
        speed={0.15}
        distortion={0.85}
        swirl={0.15}
        grainOverlay={0.08}
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <HeroNav variant="dark" />
      </div>

      <div className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-lg"
        >
          <Sparkles className="h-4 w-4 text-brand-mid" />
          {badge}
        </motion.div>

        <motion.h1
          variants={containerAnimation}
          initial="hidden"
          animate="visible"
          className="flex max-w-5xl flex-col items-center text-5xl font-extrabold tracking-tight text-white drop-shadow-lg md:text-7xl"
        >
          {titleLines.map((line, lineIndex) => (
            <span key={lineIndex} className="flex flex-wrap justify-center">
              {line.split('').map((char, index) => (
                <motion.span
                  key={`${lineIndex}-${char}-${index}`}
                  variants={letterAnimation}
                  className={char === ' ' ? 'w-2 md:w-3' : ''}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg text-white/75 md:text-xl"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="rounded-2xl bg-white px-6 py-6 text-lg text-ink hover:bg-white/90"
          >
            <a href={trackedIntakeUrl}>
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-2xl border-white/30 bg-white/5 px-6 py-6 text-lg text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
          >
            <a href="#how-it-works">How it works</a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export { ShaderHero as Component }
