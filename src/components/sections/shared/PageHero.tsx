import SectionLabel from '../../ui/SectionLabel'

interface PageHeroProps {
  label: string
  title: string
  subtitle?: string
  centered?: boolean
}

export default function PageHero({ label, title, subtitle, centered = true }: PageHeroProps) {
  return (
    <section
      className={`pt-20 md:pt-32 pb-12 md:pb-16 border-b border-az-border/20 ${centered ? 'text-center' : ''}`}
      aria-label={`${label} page hero`}
    >
      <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12">
        <SectionLabel className="mb-4 block">{label}</SectionLabel>
        <h1 className="font-display font-black text-5xl md:text-6xl text-az-primary leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-lg text-az-secondary max-w-2xl leading-relaxed mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
