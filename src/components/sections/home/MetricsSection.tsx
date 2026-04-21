import { useCountUp } from '../../../hooks/useCountUp'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

function Stat({
  value,
  suffix,
  prefix,
  label,
  decimal,
}: {
  value: number
  suffix?: string
  prefix?: string
  label: string
  decimal?: number
}) {
  const { value: count, ref } = useCountUp(value)
  const display = decimal
    ? (count / Math.pow(10, decimal)).toFixed(1)
    : count.toString()

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex flex-col items-center text-center px-4 md:px-8 py-8 md:py-10 reveal"
    >
      <span className="font-mono font-medium text-5xl md:text-6xl text-az-primary leading-none mb-3">
        {prefix}{display}{suffix}
      </span>
      <span className="font-body text-sm text-az-secondary max-w-[140px] leading-snug">{label}</span>
    </div>
  )
}

export default function MetricsSection() {
  const ref = useScrollReveal()

  return (
    <section
      id="metrics"
      ref={ref as React.RefObject<HTMLElement>}
      className="border-y border-az-border/20 bg-az-bg-off"
      aria-label="Impact metrics"
    >
      <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-az-border/20">
          <Stat value={52} suffix="%" label="Average reduction in client acquisition cost" />
          <Stat value={32} suffix="×" decimal={1} label="Average ROI improvement within 6 months" />
          <Stat value={40} suffix="+" label="B2B brands accelerated across SEA" />
        </div>
      </div>
    </section>
  )
}
