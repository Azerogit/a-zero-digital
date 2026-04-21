import { type ReactNode } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  as?: 'section' | 'div' | 'article'
  threshold?: number
}

export default function AnimatedSection({
  children,
  className = '',
  as: Tag = 'section',
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useScrollReveal(threshold)
  return (
    <Tag ref={ref as React.RefObject<HTMLElement & HTMLDivElement & HTMLElement>} className={className}>
      {children}
    </Tag>
  )
}
