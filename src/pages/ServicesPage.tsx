import { Helmet } from 'react-helmet-async'
import { Megaphone, Brain, BarChart2, Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SchemaMarkup from '../components/ui/SchemaMarkup'
import PageHero from '../components/sections/shared/PageHero'
import SectionLabel from '../components/ui/SectionLabel'
import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    id: 'digital-marketing',
    icon: Megaphone,
    title: 'Digital Marketing Strategy & Technology',
    body: 'We architect performance marketing ecosystems built for scale — integrating SEO, paid media, CRM automation, and conversion optimisation into a single intelligent growth engine. Every channel is measured, every dollar is attributed.',
    features: [
      'Full-funnel SEO architecture & content strategy',
      'Paid media optimisation (Google, Meta, LinkedIn)',
      'CRM integration & lifecycle automation',
      'Conversion rate optimisation (CRO)',
      'Marketing attribution modelling',
      'Generative Engine Optimisation (GEO/AEO)',
    ],
    cta: 'Talk to a Strategist',
  },
  {
    id: 'ai-ml',
    icon: Brain,
    title: 'AI & Machine Learning Integration',
    body: 'From predictive lead scoring and personalisation engines to NLP-powered content intelligence, we embed machine learning directly into your marketing operations — making every touchpoint smarter over time.',
    features: [
      'Predictive lead scoring & qualification',
      'Personalisation & recommendation engines',
      'NLP-powered content intelligence',
      'Churn prediction & retention modelling',
      'Automated A/B testing frameworks',
      'LLM integration & prompt engineering',
    ],
    cta: 'Explore AI Solutions',
  },
  {
    id: 'data-science',
    icon: BarChart2,
    title: 'Data Science & Advanced Analytics',
    body: "We build analytics pipelines, executive dashboards, and multi-touch attribution models that turn raw data into clear, confident business decisions. Real-time visibility into what's working and why.",
    features: [
      'Marketing analytics pipelines & ETL',
      'Executive dashboards & data visualisation',
      'Multi-touch attribution modelling (MTA)',
      'Customer segmentation & cohort analysis',
      'Forecasting & scenario modelling',
      'Data infrastructure consulting',
    ],
    cta: 'Get a Data Audit',
  },
]

const serviceSchemas = services.map((svc) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: svc.title,
  provider: { '@type': 'Organization', name: 'A-zero Digital Pte Ltd', url: 'https://a-zero.co' },
  description: svc.body,
  areaServed: 'Singapore',
  url: `https://a-zero.co/services#${svc.id}`,
}))

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://a-zero.co' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://a-zero.co/services' },
  ],
}

export default function ServicesPage() {
  const ref = useScrollReveal()

  return (
    <>
      <Helmet>
        <title>Services | A-zero Digital — AI Marketing &amp; Data Science Singapore</title>
        <meta
          name="description"
          content="Explore A-zero Digital's AI-powered services: digital marketing strategy, machine learning integration, and data science analytics for B2B brands in Singapore."
        />
        <link rel="canonical" href="https://a-zero.co/services" />
      </Helmet>

      {serviceSchemas.map((s, i) => <SchemaMarkup key={i} schema={s} />)}
      <SchemaMarkup schema={breadcrumbSchema} />

      <PageHero
        label="Services"
        title="Intelligent Services for Measurable Growth"
        subtitle="Three integrated service lines, one outcome: scalable, AI-augmented business growth built for the Singapore and SEA market."
      />

      <section
        ref={ref as React.RefObject<HTMLElement>}
        className="py-12 md:py-24"
        aria-label="Service details"
      >
        <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12">
          <div className="flex flex-col gap-8 md:gap-16">
            {services.map((svc, i) => {
              const Icon = svc.icon
              return (
                <article
                  key={svc.id}
                  id={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-16 border-b border-az-border/20 reveal reveal-delay-${i + 1}`}
                >
                  {/* Left */}
                  <div>
                    <div className="flex items-center justify-center w-14 h-14 rounded-full border border-az-border/30 bg-az-card mb-6">
                      <Icon size={26} className="text-az-primary" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <SectionLabel className="mb-3 block">Service 0{i + 1}</SectionLabel>
                    <h2 className="font-display font-black text-3xl md:text-4xl text-az-primary mb-5 leading-tight">
                      {svc.title}
                    </h2>
                    <p className="font-body text-base text-az-secondary leading-relaxed mb-8">
                      {svc.body}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-az-primary text-az-inverse font-body font-medium rounded-pill px-7 py-3 text-sm hover:shadow-btn hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                    >
                      {svc.cta}
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>

                  {/* Right — feature list */}
                  <ul className="flex flex-col gap-3 bg-az-bg-off border border-az-border/20 rounded-card p-8" role="list">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check size={14} className="text-az-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="font-body text-sm text-az-secondary leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-az-bg-off border-t border-az-border/20 text-center">
        <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12">
          <h2 className="font-display font-black text-3xl md:text-4xl text-az-primary mb-4">
            Not sure which service fits?
          </h2>
          <p className="font-body text-base text-az-secondary mb-8 max-w-lg mx-auto">
            Book a free 30-minute strategy call. We'll map the right solution to your specific goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-az-primary text-az-inverse font-body font-medium rounded-pill px-8 py-3.5 text-base hover:shadow-btn hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            Book a Free Consultation
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
