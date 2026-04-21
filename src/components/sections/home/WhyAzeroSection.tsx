import { Check } from 'lucide-react'
import SectionLabel from '../../ui/SectionLabel'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

const differentiators = [
  {
    title: 'AI-first, not AI-sprinkled',
    body: 'We design for AI from the ground up — not as an add-on. Every engagement starts with data architecture and model strategy, not just tactics.',
  },
  {
    title: 'Full-stack capability',
    body: 'Data engineering, machine learning, and performance marketing under one roof. No handoff gaps. No misaligned incentives.',
  },
  {
    title: 'Singapore-native, SEA-ready',
    body: 'Built for the B2B landscape across Singapore and Southeast Asia — we understand regional market dynamics, regulatory nuances, and growth levers.',
  },
  {
    title: 'Outcome-based engagement',
    body: 'Our engagements are tied to measurable KPIs — not billable hours. We grow when you grow.',
  },
]

export default function WhyAzeroSection() {
  const ref = useScrollReveal()

  return (
    <section
      id="why-azero"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 border-b border-az-border/20"
      aria-labelledby="why-heading"
    >
      <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="reveal">
            <SectionLabel className="mb-3 block">Why A-zero</SectionLabel>
            <h2 id="why-heading" className="font-display font-black text-4xl md:text-5xl text-az-primary leading-tight mb-6">
              The Bridge Between<br />Science and Scale
            </h2>
            <p className="font-body text-base text-az-secondary leading-relaxed">
              Most agencies do marketing. Most tech firms do data. Very few do both — and even fewer do it with the precision required to produce compounding, defensible growth. That's the gap A-zero was built to fill.
            </p>
          </div>

          {/* Right */}
          <ul className="flex flex-col gap-5" role="list">
            {differentiators.map((item, i) => (
              <li
                key={item.title}
                className={`flex gap-4 items-start reveal reveal-delay-${i + 1}`}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full border border-az-border/40 flex items-center justify-center mt-0.5">
                  <Check size={12} className="text-az-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body font-semibold text-az-primary text-sm mb-1">{item.title}</p>
                  <p className="font-body text-sm text-az-secondary leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  )
}
