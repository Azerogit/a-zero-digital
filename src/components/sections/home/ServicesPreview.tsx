import { Link } from 'react-router-dom'
import { Megaphone, Brain, BarChart2, ArrowRight } from 'lucide-react'
import SectionLabel from '../../ui/SectionLabel'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

const services = [
  {
    icon: Megaphone,
    id: 'digital-marketing',
    title: 'Digital Marketing Strategy',
    body: 'Performance marketing ecosystems built for scale — integrating SEO, paid media, CRM automation, and conversion optimisation into one intelligent growth engine.',
    tags: ['SEO', 'Paid Media', 'CRM', 'CRO'],
  },
  {
    icon: Brain,
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    body: 'From predictive lead scoring and personalisation engines to NLP-powered content intelligence, we embed machine learning directly into your marketing operations.',
    tags: ['Predictive Analytics', 'NLP', 'Personalisation'],
  },
  {
    icon: BarChart2,
    id: 'data-science',
    title: 'Data Science & Analytics',
    body: 'Analytics pipelines, executive dashboards, and multi-touch attribution models that turn raw data into clear, confident business decisions.',
    tags: ['Attribution', 'Dashboards', 'Data Pipelines'],
  },
]

export default function ServicesPreview() {
  const ref = useScrollReveal()

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 border-b border-az-border/20"
      aria-labelledby="services-heading"
    >
      <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
          <div>
            <SectionLabel className="mb-3 block">What We Do</SectionLabel>
            <h2 id="services-heading" className="font-display font-black text-4xl md:text-5xl text-az-primary leading-tight">
              Where Technology<br />Meets Growth
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-body text-sm text-az-secondary hover:text-az-primary transition-colors duration-150 group shrink-0"
          >
            View all services
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-150" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <article
                key={svc.id}
                className={`flex flex-col p-8 bg-az-card border border-az-border/20 rounded-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-1 reveal reveal-delay-${i + 1}`}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-az-border/30 bg-az-bg mb-6"
                >
                  <Icon size={22} className="text-az-primary" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-xl text-az-primary mb-3">{svc.title}</h3>
                <p className="font-body text-sm text-az-secondary leading-relaxed flex-1">{svc.body}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider uppercase text-az-muted border border-az-border/30 rounded-tag px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
