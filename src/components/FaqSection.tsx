import { useEffect, useRef, useState } from 'react'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'

interface FaqItem {
  question: string
  answer: string
}

const leftFaqs: FaqItem[] = [
  {
    question: 'What types of businesses do you work with?',
    answer:
      'We work with growth-stage startups and established enterprises across Southeast Asia — spanning e-commerce, fintech, SaaS, healthcare, and professional services. If your business generates digital data and has commercial growth ambitions, we can add value. Our engagements are sized for companies investing meaningfully in their digital future, typically from Series A stage or equivalent revenue threshold.',
  },
  {
    question: 'How is A-zero Digital different from a traditional agency?',
    answer:
      'Traditional agencies optimise campaigns. We engineer growth systems. Every recommendation we make is grounded in data, validated by machine learning models, and designed to compound over time. We embed directly with your team, own outcomes alongside you, and build internal capability — not dependency. We\'re a consultancy that builds, not just advises.',
  },
  {
    question: 'Do I need existing data infrastructure to work with you?',
    answer:
      'No. Our Audit phase is specifically designed to assess your current state — whether that\'s a mature data warehouse or a collection of spreadsheets. We\'ll identify what you have, what you need, and design a roadmap that builds infrastructure progressively as part of the engagement. Many of our most impactful engagements started from near-zero data maturity.',
  },
  {
    question: 'What does an engagement with A-zero Digital typically look like?',
    answer:
      'Every engagement follows our four-phase model: Audit → Strategy → Implementation → Optimisation. The Audit phase typically takes 2–4 weeks and produces a detailed diagnostic report. Strategy produces your bespoke growth roadmap. Implementation delivers the technology, campaigns, and models. Optimisation runs continuously, compounding gains every quarter. Engagements typically run 6–18 months.',
  },
]

const rightFaqs: FaqItem[] = [
  {
    question: 'How long before we see measurable results?',
    answer:
      'Early indicators — improved data visibility, campaign efficiency gains, and lead quality improvements — typically emerge within 30–60 days. Material business results (pipeline growth, CAC reduction, revenue attribution) are measurable within 60–90 days for most clients. Long-term compounding effects from ML model maturation typically manifest over 6–12 months.',
  },
  {
    question: 'Which AI and machine learning tools or platforms do you work with?',
    answer:
      'Our team works across the full modern data and ML stack: Python, TensorFlow, PyTorch, scikit-learn for modelling; dbt, BigQuery, Snowflake for data engineering; HubSpot, Salesforce, Segment for marketing technology; Google Analytics 4, Looker, Tableau for analytics; and Meta, Google, LinkedIn APIs for paid media automation. We\'re platform-agnostic and will work within your existing stack where possible.',
  },
  {
    question: 'Is this relevant if we are not a tech company?',
    answer:
      'Absolutely. In fact, some of our most impactful work has been with non-tech businesses — retail, real estate, professional services, and healthcare — where AI adoption is less mature and first-mover advantage is still available. Any business with a digital presence, customer data, and growth ambitions can benefit from AI-powered marketing.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Fill in the contact form on this page and tell us about your business and challenge. We\'ll review your submission and reach out within one business day to schedule a complimentary discovery call. On that call, we\'ll assess fit, discuss your objectives, and outline what an engagement could look like. If there\'s a strong match, we\'ll prepare a tailored proposal within 5 business days.',
  },
]

function FaqAccordion({ items, searchQuery }: { items: FaqItem[]; searchQuery: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const filtered = searchQuery.trim()
    ? items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : items

  return (
    <div className="flex flex-col">
      {filtered.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={item.question}
            className={`border-b border-surface-border ${isOpen ? 'bg-surface-card rounded-lg' : ''}`}
          >
            <button
              className="flex w-full justify-between items-center py-8 px-8 cursor-pointer text-left gap-4"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-display font-semibold text-lg text-text-primary">
                {item.question}
              </span>
              {isOpen ? (
                <ChevronUp
                  size={20}
                  className="text-text-muted flex-shrink-0"
                  aria-hidden="true"
                />
              ) : (
                <ChevronDown
                  size={20}
                  className="text-text-muted flex-shrink-0"
                  aria-hidden="true"
                />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="font-body text-base text-text-secondary leading-relaxed px-8 pb-8">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
      {filtered.length === 0 && (
        <p className="font-body text-text-muted py-8 px-8">No questions match your search.</p>
      )}
    </div>
  )
}

export default function FaqSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.05 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="faq" className="py-24 border-t border-surface-border">
      <div ref={ref} className="max-w-container mx-auto px-4 md:px-8 xl:px-16">
        {/* Heading */}
        <div className="text-center mb-10 reveal">
          <h2 className="font-display font-semibold text-4xl md:text-5xl mb-4">
            <span className="text-text-muted">Frequently </span>
            <span className="text-text-primary">Asked Questions</span>
          </h2>
        </div>

        {/* Search input */}
        <div className="max-w-xl mx-auto mb-12 reveal">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-card border border-surface-border rounded-full pl-12 pr-6 py-4 font-form text-base text-text-primary placeholder:text-text-muted outline-none focus:border-brand-blue transition-colors duration-150"
              aria-label="Search frequently asked questions"
            />
          </div>
        </div>

        {/* 2-column accordion layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 reveal">
          <FaqAccordion items={leftFaqs} searchQuery={searchQuery} />
          <FaqAccordion items={rightFaqs} searchQuery={searchQuery} />
        </div>
      </div>
    </section>
  )
}
