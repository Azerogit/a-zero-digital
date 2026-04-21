import { type ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`font-mono text-xs tracking-widest uppercase text-az-muted ${className}`}
    >
      {children}
    </span>
  )
}
