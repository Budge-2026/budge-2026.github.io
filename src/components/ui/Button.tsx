import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold uppercase tracking-[0.06em] ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-brand-gradient text-white hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(40,40,168,0.35)]',
        primary:
          'bg-brand-gradient text-white hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(40,40,168,0.35)]',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border-2 border-brand bg-white text-ink hover:bg-brand hover:text-white',
        secondary:
          'border border-brand/25 bg-brand-light text-brand hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_28px_rgba(40,40,168,0.15)]',
        ghost:
          'border-2 border-brand bg-transparent text-brand hover:bg-brand hover:text-white',
        white:
          'bg-white text-brand hover:bg-brand-light hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(40,40,168,0.12)]',
        link: 'text-primary underline-offset-4 hover:underline normal-case tracking-normal',
      },
      size: {
        default: 'h-10 px-8 py-3.5 text-sm',
        sm: 'h-9 px-5 py-2 text-xs',
        lg: 'h-12 px-10 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href?: string
  to?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, to, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }))

    if (asChild) {
      return <Slot className={classes} ref={ref} {...props} />
    }

    if (href) {
      return (
        <a
          href={href}
          className={classes}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      )
    }

    if (to) {
      const linkProps = props as Omit<React.ComponentProps<typeof Link>, 'to' | 'className'>
      return <Link to={to} className={classes} {...linkProps} />
    }

    return <button className={classes} ref={ref} {...props} />
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
