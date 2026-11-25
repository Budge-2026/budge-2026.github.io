import { motion, type Variants } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import React from 'react'

interface StatProps {
  value: string
  label: string
  icon: React.ReactNode
}

interface ActionProps {
  text: string
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'outline' | 'ghost' | 'white'
  className?: string
}

interface HeroSectionProps {
  title: React.ReactNode
  subtitle: string
  actions: ActionProps[]
  stats: StatProps[]
  images: string[]
  className?: string
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const floatingVariants: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

const HeroSection = ({ title, subtitle, actions, stats, images, className }: HeroSectionProps) => {
  return (
    <section className={cn('w-full overflow-hidden bg-background py-12 sm:py-16 lg:py-20', className)}>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8">
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p className="mt-6 max-w-md text-lg text-muted-foreground" variants={itemVariants}>
            {subtitle}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
            variants={itemVariants}
          >
            {actions.map((action, index) => (
              <Button
                key={index}
                href={action.href}
                onClick={action.onClick}
                variant={action.variant ?? 'primary'}
                className={action.className}
              >
                {action.text}
              </Button>
            ))}
          </motion.div>
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  {stat.label ? <p className="text-sm text-muted-foreground">{stat.label}</p> : null}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-[400px] w-full sm:h-[500px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="absolute -top-4 left-1/4 h-16 w-16 rounded-full bg-brand-light"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-0 right-1/4 h-12 w-12 rounded-lg bg-brand/15"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: '0.5s' }}
          />
          <motion.div
            className="absolute bottom-1/4 left-4 h-6 w-6 rounded-full bg-brand-mid/30"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: '1s' }}
          />

          <motion.div
            className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-2xl bg-smoke p-2 shadow-lg sm:h-64 sm:w-64"
            style={{ transformOrigin: 'bottom center' }}
            variants={imageVariants}
          >
            <img
              src={images[0]}
              alt="Couple sharing a moment at home"
              className="h-full w-full rounded-xl object-cover bg-smoke"
            />
          </motion.div>
          <motion.div
            className="absolute right-0 top-1/3 h-40 w-40 rounded-2xl bg-smoke p-2 shadow-lg sm:h-56 sm:w-56"
            style={{ transformOrigin: 'left center' }}
            variants={imageVariants}
          >
            <img
              src={images[1]}
              alt="Adult enjoying outdoor wellness"
              className="h-full w-full rounded-xl object-cover bg-smoke"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 h-32 w-32 rounded-2xl bg-smoke p-2 shadow-lg sm:h-48 sm:w-48"
            style={{ transformOrigin: 'top right' }}
            variants={imageVariants}
          >
            <img
              src={images[2]}
              alt="Adult running along the waterfront"
              className="h-full w-full rounded-xl object-cover bg-smoke"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
