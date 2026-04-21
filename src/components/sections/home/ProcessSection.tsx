import SectionLabel from '../../ui/SectionLabel'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

const steps = [
  {
    num: '01',
    title: 'Discover & Diagnose',
    body: 'We start with a deep-dive audit of your data, marketing stack, and growth metrics — identifying gaps, leakage points, and the highest-leverage opportunities.',
  },
  {
    num: '02',
    title: 'Strategy & Architecture',
    body: 'We design a bespoke AI-augmented marketing roadmap — aligned to your revenue targets, tech capabilities, and competitive landscape.',
  },
  {
    num: '03',
    title: 'Build & Integrate',
    body: 'Our team implements models, pipelines, and automation workflows directly into your existing stack — zero disruption, measurable output.',
  },
  {
    num: '04',
    title: 'Optimise & Scale',
    body: 'We continuously monitor, test, and iterate. Every insight feeds back into smarter models and sharper campaigns — compounding over time.',
  },
]

export default function ProcessSection() {
  const ref = useScrollReveal()

  return (
    <section
      id="process"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-az-bg-off border-b border-az-border/20"
      aria-labelledby="process-heading"
    >
      <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12">

        <div className="text-center mb-16 reveal">
          <SectionLabel className="mb-3 block">How We Work</SectionLabel>
          <h2 id="process-heading" className="font-display font-black text-4xl md:text-5xl text-az-primary">
            Four Steps to<br />Intelligent Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative flex flex-col px-8 py-10 reveal reveal-delay-${i + 1} ${
                i < steps.length - 1
                  ? 'border-b sm:border-b-0 sm:border-r lg:border-r border-az-border/20'
                  : ''
              }`}
            >
              <span className="font-mono text-5xl font-medium text-az-border/50 mb-5 leading-none">
                {step.num}
              </span>
              <h3 className="font-display font-bold text-lg text-az-primary mb-3">{step.title}</h3>
              <p className="font-body text-sm text-az-secondary leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
