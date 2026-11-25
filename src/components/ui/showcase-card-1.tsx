import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export type ShowcaseCardProps = {
  name: string
  tagline: string
  description: string
  image: string
  imageAlt: string
  href: string
  className?: string
}

export function ShowcaseCard({
  name,
  tagline,
  description,
  image,
  imageAlt,
  href,
  className,
}: ShowcaseCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isInternal = href.startsWith('/')

  const cardClassName = cn(
    'group flex min-h-full flex-col gap-3 overflow-hidden rounded-4xl border border-brand/15 bg-white p-3 shadow-[0_12px_40px_rgba(40,40,168,0.08)]',
    className,
  )

  const cardContent = (
    <>
      <div className="flex justify-end p-1">
        <motion.div
          className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient text-white"
          whileHover={{
            scale: 1.08,
            boxShadow: '0 0 15px rgba(40, 40, 168, 0.45)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-1 pb-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">
            Prescription required
          </p>
          <motion.h3
            className="mt-1 text-2xl font-bold tracking-tight text-ink md:text-[1.65rem]"
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.45 }}
          >
            {name}
          </motion.h3>
          <p className="mt-1 text-sm text-muted">{tagline}</p>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.55 }}
        >
          <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl opacity-30">
            <motion.img
              src={image}
              alt=""
              aria-hidden="true"
              className="h-full w-full scale-150 object-cover blur-md"
              animate={{ scale: isHovered ? 1.6 : 1.5 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            />
          </div>
          <motion.div
            className="relative z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.25 }}
          >
            <img
              src={image}
              alt={imageAlt}
              className="aspect-[4/5] w-full rounded-2xl object-cover object-center shadow-md"
            />
          </motion.div>
        </motion.div>

        <motion.p
          className="text-center text-xs leading-relaxed text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          {description}
        </motion.p>
      </div>
    </>
  )

  const motionProps = {
    className: cardClassName,
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.35, ease: 'easeOut' as const },
    whileHover: {
      scale: 1.01,
      boxShadow: '0 20px 50px -15px rgba(40,40,168,0.18)',
      borderColor: 'rgba(40,40,168,0.35)',
    },
    onHoverStart: () => setIsHovered(true),
    onHoverEnd: () => setIsHovered(false),
  }

  if (isInternal) {
    return (
      <motion.div {...motionProps}>
        <Link to={href} className="flex min-h-full flex-col">
          {cardContent}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer" {...motionProps}>
      {cardContent}
    </motion.a>
  )
}
