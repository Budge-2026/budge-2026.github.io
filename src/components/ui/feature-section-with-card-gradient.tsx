import { useId } from 'react'
import { cn } from '@/lib/utils'

export type FeatureCard = {
  title: string
  description: string
}

type FeaturesSectionWithCardGradientProps = {
  features: readonly FeatureCard[]
  className?: string
}

const GRID_PATTERNS: number[][][] = [
  [
    [7, 1],
    [8, 3],
    [9, 5],
    [7, 7],
    [8, 2],
  ],
  [
    [8, 2],
    [7, 4],
    [9, 1],
    [8, 6],
    [7, 3],
  ],
  [
    [9, 3],
    [7, 5],
    [8, 1],
    [9, 7],
    [7, 2],
  ],
  [
    [7, 4],
    [9, 2],
    [8, 6],
    [7, 1],
    [9, 5],
  ],
  [
    [8, 5],
    [7, 2],
    [9, 4],
    [8, 7],
    [7, 6],
  ],
  [
    [9, 1],
    [8, 4],
    [7, 6],
    [9, 3],
    [8, 7],
  ],
  [
    [7, 3],
    [9, 6],
    [8, 2],
    [7, 5],
    [9, 4],
  ],
  [
    [8, 6],
    [7, 1],
    [9, 7],
    [8, 3],
    [7, 4],
  ],
]

export function FeaturesSectionWithCardGradient({
  features,
  className,
}: FeaturesSectionWithCardGradientProps) {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4',
        className,
      )}
    >
      {features.map((feature, index) => (
        <div
          key={feature.title}
          className="relative overflow-hidden rounded-3xl border border-brand/15 bg-gradient-to-b from-brand-light/80 to-white p-6"
        >
          <Grid size={20} pattern={GRID_PATTERNS[index % GRID_PATTERNS.length]} />
          <p className="relative z-20 text-base font-bold text-ink">{feature.title}</p>
          <p className="relative z-20 mt-4 text-base font-normal text-muted">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  )
}

type GridProps = {
  pattern?: number[][]
  size?: number
}

export function Grid({ pattern, size }: GridProps) {
  const squares = pattern ?? GRID_PATTERNS[0]

  return (
    <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-brand/10 to-brand/5 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={squares}
          className="absolute inset-0 h-full w-full fill-brand/20 stroke-brand/20 mix-blend-overlay"
        />
      </div>
    </div>
  )
}

type GridPatternProps = React.SVGProps<SVGSVGElement> & {
  width: number
  height: number
  x: string
  y: string
  squares?: number[][]
}

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  className,
  ...props
}: GridPatternProps) {
  const patternId = useId()

  return (
    <svg aria-hidden="true" className={className} {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([squareX, squareY]) => (
            <rect
              strokeWidth="0"
              key={`${squareX}-${squareY}`}
              width={width + 1}
              height={height + 1}
              x={squareX * width}
              y={squareY * height}
            />
          ))}
        </svg>
      )}
    </svg>
  )
}
