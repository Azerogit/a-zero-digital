import { useEffect, useRef } from 'react'

export default function CtaSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.15 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="px-4 md:px-8 xl:px-16 py-8">
      <div
        ref={ref}
        className="relative bg-surface-card border border-surface-border rounded-card overflow-hidden px-8 md:px-20 py-20 text-center"
      >
        {/* Corner blob top-right — brand-blue */}
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'rgba(0,82,255,0.08)' }}
          aria-hidden="true"
        />
        {/* Corner blob bottom-left — brand-cyan */}
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'rgba(0,212,255,0.08)' }}
          aria-hidden="true"
        />

        <div className="relative z-10">
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-6 reveal">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto mb-4 reveal">
            Digital success in the AI era requires more than good campaigns — it requires a partner
            who understands both the technology and the commercial reality. A-zero Digital brings both
            to every engagement.
          </p>
          <p className="font-body text-base text-text-primary font-medium mb-10 reveal">
            Unlock Your Digital Potential Today
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal">
            <a
              href="#contact"
              className="bg-brand-blue text-text-inverse font-body font-medium rounded-pill px-8 py-4 text-base hover:opacity-90 active:scale-95 transition-all duration-150"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-surface-border text-text-primary font-body font-medium rounded-pill px-8 py-4 text-base hover:bg-white active:scale-95 transition-all duration-150"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
