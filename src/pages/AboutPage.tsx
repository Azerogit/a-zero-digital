import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SchemaMarkup from '../components/ui/SchemaMarkup'
import PageHero from '../components/sections/shared/PageHero'
import SectionLabel from '../components/ui/SectionLabel'
import { useScrollReveal } from '../hooks/useScrollReveal'

const values = [
  {
    num: '01',
    title: 'Evidence Over Intuition',
    body: 'Every recommendation we make is grounded in data. We build models before we build campaigns. We measure before we scale.',
  },
  {
    num: '02',
    title: 'Outcome Obsession',
    body: 'We care about revenue, pipeline, and efficiency — not vanity metrics. Our engagements are structured around outputs that move your business forward.',
  },
  {
    num: '03',
    title: 'Honest Complexity',
    body: "AI marketing is hard. We won't oversimplify it to win a deal. We'll tell you what's achievable, what's realistic, and what the tradeoffs are.",
  },
  {
    num: '04',
    title: 'Long-Term Partnership',
    body: 'The best results come from deep context. We build long-term relationships because compounding insights require compounding investment.',
  },
]

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'A-zero Digital',
  legalName: 'A-ZERO DIGITAL PTE. LTD.',
  taxID: '202513521D',
  url: 'https://a-zero.co',
  description:
    'A-zero Digital is a Singapore-based AI marketing and data science consultancy. Founded in 2025, we help B2B brands across Southeast Asia build intelligent, data-driven growth systems.',
  foundingDate: '2025-03-27',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '336 Smith Street #05-303 New Bridge Centre',
    addressLocality: 'Singapore',
    postalCode: '050336',
    addressCountry: 'SG',
  },
  knowsAbout: ['AI Marketing', 'Machine Learning', 'Data Science', 'Marketing Analytics'],
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About A-zero Digital',
  url: 'https://a-zero.co/about',
  description: 'Learn about A-zero Digital — Singapore\'s AI-powered marketing and data science consultancy.',
  isPartOf: { '@type': 'WebSite', url: 'https://a-zero.co' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://a-zero.co' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://a-zero.co/about' },
  ],
}

export default function AboutPage() {
  const ref = useScrollReveal()

  return (
    <>
      <Helmet>
        <title>About | A-zero Digital — AI Marketing &amp; Data Science Consultancy Singapore</title>
        <meta
          name="description"
          content="A-zero Digital is Singapore's AI-native marketing and data science consultancy. Learn about our mission, values, and the team building intelligence into B2B growth."
        />
        <link rel="canonical" href="https://a-zero.co/about" />
      </Helmet>

      <SchemaMarkup schema={orgSchema} />
      <SchemaMarkup schema={aboutPageSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />

      <PageHero
        label="About"
        title="Built to Bridge the Gap"
        subtitle="Between data science and marketing strategy. Between AI potential and business results. That's the space A-zero was built to occupy."
      />

      <section
        ref={ref as React.RefObject<HTMLElement>}
        className="py-24 border-b border-az-border/20"
        aria-label="Our story"
      >
        <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div className="reveal">
              <SectionLabel className="mb-4 block">Our Story</SectionLabel>
              <div className="space-y-4 font-body text-base text-az-secondary leading-relaxed">
                <p>
                  A-zero was founded in Singapore in 2025 with a single observation: most businesses were sitting on more data than they knew what to do with, while most agencies were still running the same campaigns they ran a decade ago.
                </p>
                <p>
                  The opportunity — and the gap — was clear. Companies didn't need more marketing activity. They needed smarter marketing infrastructure. They needed data science embedded into strategy, not bolted on afterwards.
                </p>
                <p>
                  We built A-zero to be that bridge. A team with deep capability in machine learning and data engineering, but also fluent in the language of marketing ROI, conversion funnels, and B2B growth cycles.
                </p>
                <p>
                  Today we work with B2B brands across Singapore and Southeast Asia — from high-growth SaaS companies to established enterprises — helping them build marketing systems that become smarter over time.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 reveal">
              {[
                { num: '2025', label: 'Founded in Singapore' },
                { num: '40+', label: 'Brands accelerated' },
                { num: '3', label: 'Core service lines' },
                { num: 'SEA', label: 'Market focus' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col p-6 bg-az-bg-off border border-az-border/20 rounded-card"
                >
                  <span className="font-mono font-medium text-3xl text-az-primary leading-none mb-2">{s.num}</span>
                  <span className="font-body text-xs text-az-secondary">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-az-bg-off border-b border-az-border/20" aria-labelledby="values-heading">
        <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12">
          <div className="text-center mb-16">
            <SectionLabel className="mb-3 block">What We Stand For</SectionLabel>
            <h2 id="values-heading" className="font-display font-black text-4xl md:text-5xl text-az-primary">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {values.map((v, i) => (
              <div
                key={v.num}
                className={`flex flex-col px-8 py-10 border-b sm:border-b-0 ${
                  i < values.length - 1 ? 'sm:border-r border-az-border/20' : ''
                }`}
              >
                <span className="font-mono text-4xl font-medium text-az-border/40 mb-5 leading-none">{v.num}</span>
                <h3 className="font-display font-bold text-lg text-az-primary mb-3">{v.title}</h3>
                <p className="font-body text-sm text-az-secondary leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12">
          <h2 className="font-display font-black text-3xl md:text-4xl text-az-primary mb-4">
            Ready to work together?
          </h2>
          <p className="font-body text-base text-az-secondary mb-8 max-w-lg mx-auto">
            Let's start with a conversation about your growth goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-az-primary text-az-inverse font-body font-medium rounded-pill px-8 py-3.5 text-base hover:shadow-btn hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            Get in Touch
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
