import { useEffect, useRef } from 'react'
import { Megaphone, Brain, BarChart2 } from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Digital Marketing Strategy & Tech',
    body: 'We architect performance marketing ecosystems built for scale — integrating SEO, paid media, CRM automation, and conversion optimisation into a single intelligent growth engine.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning Integration',
    body: 'From predictive lead scoring and personalisation engines to NLP-powered content intelligence, we embed machine learning directly into your marketing operations.',
  },
  {
    icon: BarChart2,
    title: 'Data Science & Advanced Analytics',
    body: 'We build analytics pipelines, executive dashboards, and multi-touch attribution models that turn raw data into clear, confident business decisions.',
  },
]

export default function ServicesSection() {
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
    <section id="services" className="py-24 border-b border-surface-border">
      <div ref={ref} className="max-w-container mx-auto px-4 md:px-8 xl:px-16">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
            Where Technology Meets{' '}
            <span className="text-text-muted">Growth</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Three integrated service lines, one outcome: scalable, intelligent business growth.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div
                key={svc.title}
                className={`flex flex-col items-center text-center px-8 py-12 reveal ${
                  i > 0 ? 'lg:border-l border-surface-border' : ''
                } ${i > 0 ? 'border-t lg:border-t-0 border-surface-border' : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                {/* Icon circle */}
                <div
                  className="flex items-center justify-center rounded-full border-2 border-surface-border bg-surface-card mb-6"
                  style={{ width: 92, height: 92 }}
                >
                  <Icon size={44} className="text-brand-blue" strokeWidth={1.5} aria-hidden="true" />
                </div>

                <h3 className="font-display font-semibold text-2xl text-text-primary mb-4">
                  {svc.title}
                </h3>
                <p className="font-body text-lg text-text-muted leading-relaxed">{svc.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
