import Button from '../../ui/Button'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] md:min-h-[80vh] lg:min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-8 xl:px-12 pt-16 md:pt-20"
      aria-label="Hero"
    >
      {/* Diagonal beam — monochromatic shimmer motif */}
      <div className="hero-beam left-[15%]" aria-hidden="true" />
      <div className="hero-beam left-[55%] opacity-60" style={{ animationDelay: '3.5s' }} aria-hidden="true" />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, var(--az-primary) 0px, var(--az-primary) 1px, transparent 1px, transparent 80px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto pb-20 md:pb-8">

        {/* Eyebrow */}
        <div
          className="mb-6 inline-flex items-center gap-2 bg-az-card border border-az-border/30 rounded-tag px-4 py-2 reveal visible"
          style={{ animationDelay: '0.05s' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-az-muted inline-block" aria-hidden="true" />
          <span className="font-mono text-xs tracking-widest uppercase text-az-muted">
            Singapore's AI-Native Marketing Consultancy
          </span>
        </div>

        {/* H1 */}
        <h1
          className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 text-az-primary reveal visible"
          style={{ animationDelay: '0.15s' }}
        >
          <span className="block">Data-Driven.</span>
          <span className="block text-az-muted">AI-Powered.</span>
          <span className="block">Built to Convert.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="font-body text-lg md:text-xl text-az-secondary max-w-2xl mx-auto leading-relaxed mb-3 reveal visible"
          style={{ animationDelay: '0.28s' }}
        >
          We bridge advanced data science and marketing ROI — turning machine learning, predictive
          analytics, and intelligent automation into measurable business growth.
        </p>

        <p
          className="font-mono text-sm text-az-muted mb-10 tracking-wide reveal visible"
          style={{ animationDelay: '0.36s' }}
        >
          Trusted by B2B brands across Singapore &amp; Southeast Asia
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 items-center reveal visible"
          style={{ animationDelay: '0.44s' }}
        >
          <Button href="/contact" variant="primary">
            Start Your Growth Journey
          </Button>
          <Button href="/services" variant="secondary">
            Explore Our Services
          </Button>
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none hero-fade" aria-hidden="true" />
    </section>
  )
}
