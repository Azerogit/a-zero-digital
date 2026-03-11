import { useEffect, useRef } from 'react'

const tags = [
  'AI & ML',
  'Marketing Tech',
  'Data Engineering',
  'Growth Strategy',
  'Analytics',
  'Automation',
]

export default function AboutSection() {
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
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 bg-blue-50">
      <div ref={ref} className="max-w-container mx-auto px-4 md:px-8 xl:px-16">
        <div className="max-w-4xl">
          {/* Heading */}
          <h2
            className="font-display font-semibold text-5xl md:text-6xl leading-tight mb-10 reveal"
          >
            <span className="text-text-primary">The Consultancy Built at the </span>
            <br />
            <span className="text-text-muted">Intersection</span>
          </h2>

          {/* Body paragraphs */}
          <div className="space-y-6 mb-12">
            <p className="font-body text-lg text-text-secondary leading-relaxed reveal">
              A-zero Digital was founded on a single conviction: that the companies who win the next
              decade will be those who can turn data into decisions, and decisions into growth — faster
              than anyone else. We exist at the precise intersection of advanced AI, data science, and
              performance marketing, because that&apos;s where real competitive advantage is created.
            </p>
            <p className="font-body text-lg text-text-secondary leading-relaxed reveal">
              Headquartered in Singapore and serving clients across Southeast Asia and beyond, we bring
              together strategists, machine learning engineers, and marketing technologists under one
              roof — so your growth strategy is never separated from the technology that powers it.
            </p>
          </div>

          {/* Tag pills */}
          <div className="flex flex-wrap gap-3 reveal">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-white border border-surface-border rounded-tag shadow-sm px-4 py-3 font-body text-sm text-text-secondary backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
