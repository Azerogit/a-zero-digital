import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SchemaMarkup from '../components/ui/SchemaMarkup'
import PageHero from '../components/sections/shared/PageHero'
import SectionLabel from '../components/ui/SectionLabel'
import { useScrollReveal } from '../hooks/useScrollReveal'

const caseStudies = [
  {
    id: 'saas-attribution',
    industry: 'B2B SaaS',
    challenge:
      'A Singapore-based SaaS company was spending S$80K/month on paid acquisition with no reliable view of which channels were driving pipeline. Sales and marketing were misaligned, and CAC had grown 60% year-over-year.',
    solution:
      'We deployed a custom multi-touch attribution model integrating Salesforce CRM, HubSpot, and three paid media platforms. Combined with a predictive lead scoring model, the team could finally route high-intent leads to sales within minutes of first touch.',
    results: [
      { metric: '42%', label: 'Reduction in CAC' },
      { metric: '3.1×', label: 'Pipeline ROI improvement' },
      { metric: '6 wks', label: 'Time to full deployment' },
    ],
    title: 'Rebuilding Attribution for a High-Growth SaaS Company',
  },
  {
    id: 'ecommerce-ml',
    industry: 'E-commerce',
    challenge:
      'A Singaporean D2C retailer was struggling with high cart abandonment (78%) and a fragmented customer data stack. Email campaigns were batch-and-blast, and return on ad spend had plateaued.',
    solution:
      'A-zero implemented a real-time personalisation engine driven by behavioural data, integrating with their existing Shopify and Klaviyo stack. Predictive churn models triggered retention flows before customers showed intent to leave.',
    results: [
      { metric: '34%', label: 'Increase in email ROAS' },
      { metric: '21%', label: 'Reduction in cart abandonment' },
      { metric: '2.8×', label: 'Retention campaign ROI' },
    ],
    title: 'AI-Powered Personalisation for a D2C Retailer',
  },
  {
    id: 'fintech-seo',
    industry: 'Fintech',
    challenge:
      'A regional fintech company had strong product-market fit but near-zero organic visibility. All growth was paid, making CAC unsustainable as competition intensified. Their content was siloed and failed to capture AI-driven search engines.',
    solution:
      'We designed and executed a full AEO/GEO strategy — restructuring site architecture, implementing Schema.org markup, and publishing a cluster of high-authority content targeting AI and traditional search queries. Entity definitions were embedded across all key pages.',
    results: [
      { metric: '580%', label: 'Growth in organic traffic (12 months)' },
      { metric: '28', label: 'First-page rankings secured' },
      { metric: '61%', label: 'Reduction in paid dependency' },
    ],
    title: 'From Zero Organic to Market Leader via AEO/GEO Strategy',
  },
]

const articleSchemas = caseStudies.map((cs) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: cs.title,
  author: { '@type': 'Organization', name: 'A-zero Digital Pte Ltd' },
  publisher: { '@type': 'Organization', name: 'A-zero Digital Pte Ltd', url: 'https://a-zero.co' },
  description: cs.challenge,
  url: `https://a-zero.co/case-studies#${cs.id}`,
}))

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://a-zero.co' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://a-zero.co/case-studies' },
  ],
}

export default function CaseStudiesPage() {
  const ref = useScrollReveal()

  return (
    <>
      <Helmet>
        <title>Case Studies | A-zero Digital — Real Results for Singapore B2B Brands</title>
        <meta
          name="description"
          content="See how A-zero Digital has delivered measurable ROI for Singapore and SEA businesses through AI marketing, predictive analytics, and data science."
        />
        <link rel="canonical" href="https://a-zero.co/case-studies" />
      </Helmet>

      {articleSchemas.map((s, i) => <SchemaMarkup key={i} schema={s} />)}
      <SchemaMarkup schema={breadcrumbSchema} />

      <PageHero
        label="Case Studies"
        title="Outcomes That Define Us"
        subtitle="Real results for real businesses. Every engagement is measured against outcomes that matter — pipeline, revenue, efficiency."
      />

      <section
        ref={ref as React.RefObject<HTMLElement>}
        className="py-12 md:py-24"
        aria-label="Case study details"
      >
        <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12">
          <div className="flex flex-col gap-0">
            {caseStudies.map((cs, i) => (
              <article
                key={cs.id}
                id={cs.id}
                className={`grid grid-cols-1 lg:grid-cols-5 gap-0 border-b border-az-border/20 reveal reveal-delay-${i + 1}`}
              >
                {/* Main content */}
                <div className="lg:col-span-3 py-14 lg:pr-12">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-az-muted border border-az-border/30 rounded-tag px-2 py-1">
                      {cs.industry}
                    </span>
                    <SectionLabel>Case Study 0{i + 1}</SectionLabel>
                  </div>
                  <h2 className="font-display font-black text-2xl md:text-3xl text-az-primary mb-6 leading-tight">
                    {cs.title}
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <p className="font-mono text-xs tracking-widest uppercase text-az-muted mb-2">Challenge</p>
                      <p className="font-body text-sm text-az-secondary leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="font-mono text-xs tracking-widest uppercase text-az-muted mb-2">Solution</p>
                      <p className="font-body text-sm text-az-secondary leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Results sidebar */}
                <aside className="lg:col-span-2 flex flex-col justify-center bg-az-bg-off border-l-0 lg:border-l border-t lg:border-t-0 border-az-border/20 py-14 px-8 gap-8">
                  {cs.results.map((r) => (
                    <div key={r.label}>
                      <p className="font-mono font-medium text-4xl text-az-primary leading-none mb-2">{r.metric}</p>
                      <p className="font-body text-xs text-az-secondary leading-snug">{r.label}</p>
                    </div>
                  ))}
                </aside>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-az-bg-off border-t border-az-border/20 text-center">
        <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12">
          <h2 className="font-display font-black text-3xl md:text-4xl text-az-primary mb-4">
            Want results like these?
          </h2>
          <p className="font-body text-base text-az-secondary mb-8 max-w-lg mx-auto">
            Let's identify the highest-impact opportunities in your current marketing stack.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-az-primary text-az-inverse font-body font-medium rounded-pill px-8 py-3.5 text-base hover:shadow-btn hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            Book a Free Audit
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
