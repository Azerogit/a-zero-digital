import { Quote } from 'lucide-react'
import SectionLabel from '../../ui/SectionLabel'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

const testimonials = [
  {
    quote:
      'A-zero rebuilt our entire attribution model in six weeks. We uncovered that 40% of our paid budget was going to channels with near-zero contribution to pipeline. The savings alone funded the engagement twice over.',
    name: 'Head of Growth',
    company: 'B2B SaaS — Singapore',
  },
  {
    quote:
      'Their predictive lead scoring model improved our sales team\'s conversion rate by 34% in the first quarter. They didn\'t just hand us a model — they embedded it into our CRM and trained the team.',
    name: 'VP Marketing',
    company: 'Enterprise Software — SEA',
  },
]

export default function TestimonialsSection() {
  const ref = useScrollReveal()

  return (
    <section
      id="testimonials"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-az-bg-off border-b border-az-border/20"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12">

        <div className="text-center mb-14 reveal">
          <SectionLabel className="mb-3 block">Client Results</SectionLabel>
          <h2 id="testimonials-heading" className="font-display font-black text-4xl md:text-5xl text-az-primary">
            Outcomes That Speak
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className={`relative flex flex-col p-8 bg-az-bg border border-az-border/20 rounded-card reveal reveal-delay-${i + 1}`}
            >
              <Quote
                size={32}
                className="text-az-border/40 mb-5"
                aria-hidden="true"
              />
              <p className="font-body text-base text-az-primary leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>
              <footer>
                <p className="font-body font-semibold text-sm text-az-primary">{t.name}</p>
                <p className="font-mono text-xs text-az-muted mt-0.5">{t.company}</p>
              </footer>
            </blockquote>
          ))}
        </div>

      </div>
    </section>
  )
}
