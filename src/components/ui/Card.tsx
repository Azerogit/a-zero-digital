import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  as?: 'div' | 'article' | 'li'
}

export default function Card({ children, className = '', hover = true, as: Tag = 'div' }: CardProps) {
  return (
    <Tag
      className={`bg-az-card border border-az-border/30 rounded-card shadow-card ${
        hover ? 'transition-all duration-200 hover:shadow-card-hover hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
