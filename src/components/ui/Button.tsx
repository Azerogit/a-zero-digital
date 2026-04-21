import { type ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  external?: boolean
}

const base =
  'inline-flex items-center justify-center font-body font-medium rounded-pill px-8 py-3.5 text-base transition-all duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-az-primary disabled:opacity-40 disabled:cursor-not-allowed active:scale-95'

const variants: Record<Variant, string> = {
  primary:
    'bg-az-primary text-az-inverse hover:shadow-btn hover:-translate-y-0.5',
  secondary:
    'bg-transparent border border-az-border text-az-primary hover:bg-az-card hover:-translate-y-0.5',
  ghost:
    'bg-transparent text-az-primary hover:bg-az-card',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  disabled,
  className = '',
  external,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  )
}
