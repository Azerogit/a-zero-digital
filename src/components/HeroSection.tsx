export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-8 xl:px-16"
    >
      {/* Animated vertical column grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(0,212,255,0.045) 0px, rgba(0,212,255,0.045) 1px, transparent 1px, transparent 120px)',
          animation: 'fadeIn 1.4s ease forwards',
        }}
      />

      {/* Radial gradient overlay — soft centre light */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,82,255,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* Eyebrow tag */}
        <div
          className="mb-6 inline-flex items-center gap-2 bg-surface-card border border-surface-border rounded-tag px-4 py-2"
          style={{ animation: 'fadeInUp 0.6s ease both', animationDelay: '0.1s' }}
        >
          <span className="w-2 h-2 rounded-full bg-brand-blue inline-block" />
          <span className="font-body text-sm text-text-secondary font-medium">
            Singapore&apos;s AI-Native Marketing Consultancy
          </span>
        </div>

        {/* H1 */}
        <h1
          className="font-display font-semibold text-5xl lg:text-7xl leading-tight mb-6"
          style={{ animation: 'fadeInUp 0.6s ease both', animationDelay: '0.2s' }}
        >
          <span className="text-text-primary block">Data-Driven</span>
          <span className="text-brand-blue block">AI-Powered Marketing</span>
        </h1>

        {/* Subheadline */}
        <p
          className="font-body text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-4"
          style={{ animation: 'fadeInUp 0.6s ease both', animationDelay: '0.35s' }}
        >
          We bridge the gap between advanced technology and measurable marketing ROI — turning machine
          learning, predictive analytics, and intelligent automation into real business value.
        </p>

        {/* Tagline */}
        <p
          className="font-body text-base text-text-primary font-medium mb-10"
          style={{ animation: 'fadeInUp 0.6s ease both', animationDelay: '0.45s' }}
        >
          Unlock Your Digital Potential Today
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 items-center"
          style={{ animation: 'fadeInUp 0.6s ease both', animationDelay: '0.55s' }}
        >
          <a
            href="#contact"
            className="bg-brand-blue text-text-inverse font-body font-medium rounded-pill px-8 py-4 text-base hover:opacity-90 active:scale-95 transition-all duration-150 whitespace-nowrap"
          >
            Start Your Growth Journey
          </a>
          <a
            href="#services"
            className="bg-transparent border border-surface-border text-text-primary font-body font-medium rounded-pill px-8 py-4 text-base hover:bg-surface-card active:scale-95 transition-all duration-150 whitespace-nowrap"
          >
            Explore Our Services
          </a>
        </div>
      </div>

      {/* Bottom fade to page background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none hero-fade"
        aria-hidden="true"
      />
    </section>
  )
}
