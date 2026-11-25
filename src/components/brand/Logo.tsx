import { Link } from 'react-router-dom'
import { BRAND_NAME } from '../../constants/brand'

/** Logo variants mapped to BudgeRx brand assets in /public/logos */
export type LogoVariant =
  | 'light' /** Wordmark — light backgrounds */
  | 'fullLight' /** Full lockup with tagline — light backgrounds */
  | 'fullWithEmblem' /** Emblem + wordmark + tagline — light backgrounds */
  | 'dark' /** Wordmark — dark backgrounds */
  | 'fullDark' /** Full lockup with tagline — dark backgrounds */
  | 'white' /** All-white wordmark — dark backgrounds */
  | 'emblem' /** Emblem only */

type LogoProps = {
  variant?: LogoVariant
  className?: string
  linkToHome?: boolean
  height?: number
}

const LOGO_SRC: Record<LogoVariant, string> = {
  light: '/logos/words-light.png',
  fullLight: '/logos/full-light.png',
  fullWithEmblem: '/logos/full-with-emblem.png',
  dark: '/logos/words-dark.png',
  fullDark: '/logos/full-dark.png',
  white: '/logos/all-white.png',
  emblem: '/logos/emblem.png',
}

const DEFAULT_HEIGHT: Record<LogoVariant, string> = {
  light: 'h-8 sm:h-9',
  fullLight: 'h-10 sm:h-12',
  fullWithEmblem: 'h-10 sm:h-12',
  dark: 'h-8 sm:h-9',
  fullDark: 'h-10 sm:h-12',
  white: 'h-8 sm:h-9',
  emblem: 'h-9 w-9 sm:h-10 sm:w-10',
}

export function Logo({
  variant = 'light',
  className = '',
  linkToHome = true,
  height,
}: LogoProps) {
  const isEmblem = variant === 'emblem'
  const img = (
    <img
      src={LOGO_SRC[variant]}
      alt={BRAND_NAME}
      height={height}
      className={`${isEmblem ? 'object-contain' : 'w-auto max-w-[220px] object-contain object-left sm:max-w-[280px]'} ${height ? '' : DEFAULT_HEIGHT[variant]} ${className}`}
      style={height ? { height, width: 'auto' } : undefined}
    />
  )

  if (linkToHome) {
    return (
      <Link to="/" className="inline-flex shrink-0 items-center">
        {img}
      </Link>
    )
  }

  return img
}
