import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section
      className="py-16 md:py-24 bg-az-primary"
      aria-label="Call to action"
    >
      <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12 text-center">

        <p className="font-mono text-xs tracking-widest uppercase text-az-inverse/50 mb-5">
          Ready to Start?
        </p>

        <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-az-inverse mb-6 leading-tight">
          Let's Build Something<br />That Compounds.
        </h2>

        <p className="font-body text-base text-az-inverse/70 max-w-xl mx-auto mb-10 leading-relaxed">
          Book a complimentary 30-minute AI marketing audit. We'll identify your three highest-impact opportunities — no pitch, no pressure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-az-inverse text-az-primary font-body font-medium rounded-pill px-8 py-3.5 text-base hover:shadow-btn hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            Book a Free AI Audit
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-transparent border border-az-inverse/30 text-az-inverse font-body font-medium rounded-pill px-8 py-3.5 text-base hover:bg-az-inverse/10 active:scale-95 transition-all duration-200"
          >
            Explore Our Services
          </Link>
        </div>

      </div>
    </section>
  )
}
