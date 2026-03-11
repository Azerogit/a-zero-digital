import { useEffect, useRef } from 'react'
import { Search, Map, Wrench, TrendingUp } from 'lucide-react'

const cards = [
  {
    icon: Search,
    title: 'Audit',
    description:
      'We begin with a deep diagnostic of your current marketing stack, data infrastructure, and growth metrics — identifying gaps, opportunities, and quick wins.',
  },
  {
    icon: Map,
    title: 'Strategy',
    description:
      'Using audit findings, we design a bespoke roadmap that aligns AI capabilities and data insights with your commercial objectives and target markets.',
  },
  {
    icon: Wrench,
    title: 'Implementation',
    description:
      'Our team deploys the strategy — from ML model integration and marketing automation to analytics pipelines and campaign execution — with precision and speed.',
  },
  {
    icon: TrendingUp,
    title: 'Optimisation',
    description:
      'We continuously monitor, test, and refine every element of your growth engine, compounding gains over time through data-driven iteration.',
  },
]

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.08 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className="py-24">
      <div ref={ref} className="max-w-container mx-auto px-4 md:px-8 xl:px-16">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <h2 className="font-display font-semibold text-4xl md:text-5xl mb-4">
            <span className="text-text-muted">How We </span>
            <span className="text-text-primary">Work</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            A comprehensive four-phase engagement model designed to deliver measurable results at every
            stage — from discovery to continuous optimisation.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="relative bg-surface-card border border-surface-border rounded-card overflow-hidden hover:scale-[1.02] transition-transform duration-200 reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Top gradient strip */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background:
                      'linear-gradient(to right, rgba(0,212,255,0.15), rgba(0,82,255,0.15))',
                  }}
                  aria-hidden="true"
                />

                <div className="flex flex-col items-center text-center px-8 py-12">
                  {/* Triple-ring icon */}
                  <div
                    className="flex items-center justify-center rounded-full border-2 border-surface-border bg-white mb-6"
                    style={{ width: 88, height: 88 }}
                  >
                    <div
                      className="flex items-center justify-center rounded-full border-2 border-surface-border bg-white"
                      style={{ width: 64, height: 64 }}
                    >
                      <div
                        className="flex items-center justify-center rounded-full border-2 border-surface-border bg-white"
                        style={{ width: 44, height: 44 }}
                      >
                        <Icon size={22} className="text-brand-blue" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display font-semibold text-3xl text-text-primary mb-3">
                    {card.title}
                  </h3>
                  <p className="font-body text-lg text-text-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
