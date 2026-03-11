import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { colors } from '../tokens/colors'

interface FormData {
  name: string
  email: string
  company: string
  interests: string[]
  budgetMin: number
  budgetMax: number
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

const INTEREST_OPTIONS = [
  'Digital Marketing Strategy & Tech',
  'AI & Machine Learning Integration',
  'Data Science & Advanced Analytics',
  'Full-Service Engagement',
]

const BUDGET_MIN = 1000
const BUDGET_MAX = 50000
const BUDGET_STEP = 1000

function pct(value: number) {
  return ((value - BUDGET_MIN) / (BUDGET_MAX - BUDGET_MIN)) * 100
}

function buildSliderBackground(min: number, max: number) {
  const lo = pct(min)
  const hi = pct(max)
  return `linear-gradient(to right,
    ${colors.surface.border} 0%,
    ${colors.surface.border} ${lo}%,
    ${colors.brand.blue} ${lo}%,
    ${colors.brand.blue} ${hi}%,
    ${colors.surface.border} ${hi}%,
    ${colors.surface.border} 100%)`
}

function Spinner() {
  return (
    <svg
      className="animate-spin h-5 w-5 text-text-inverse"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    interests: [],
    budgetMin: 5000,
    budgetMax: 25000,
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

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

  function validate(): boolean {
    const newErrors: FormErrors = {}
    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (at least 2 characters).'
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim() || form.message.trim().length < 20) {
      newErrors.message = 'Please describe your challenge (at least 20 characters).'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleInterestChange(option: string) {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(option)
        ? prev.interests.filter((i) => i !== option)
        : [...prev.interests, option],
    }))
  }

  function handleBudgetMin(e: React.ChangeEvent<HTMLInputElement>) {
    const val = Number(e.target.value)
    setForm((prev) => ({ ...prev, budgetMin: Math.min(val, prev.budgetMax - BUDGET_STEP) }))
  }

  function handleBudgetMax(e: React.ChangeEvent<HTMLInputElement>) {
    const val = Number(e.target.value)
    setForm((prev) => ({ ...prev, budgetMax: Math.max(val, prev.budgetMin + BUDGET_STEP) }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return
    setSubmitState('loading')
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: form.name,
          from_email: form.email,
          company: form.company,
          interests: form.interests.join(', ') || 'None specified',
          budget: `SGD ${form.budgetMin.toLocaleString()} – ${form.budgetMax.toLocaleString()}`,
          message: form.message,
        },
        'YOUR_PUBLIC_KEY',
      )
      setSubmitState('success')
    } catch {
      setSubmitState('error')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div ref={ref} className="max-w-container mx-auto px-4 md:px-8 xl:px-16">
        {/* Upper decorative header */}
        <div
          className="relative rounded-card overflow-hidden mb-8 px-8 py-16 text-center reveal"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(0,212,255,0.07) 0%, transparent 70%), ' +
              'radial-gradient(circle at 20px 20px, rgba(0,82,255,0.06) 1px, transparent 1px)',
            backgroundSize: 'auto, 28px 28px',
          }}
        >
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-4">
            Let&apos;s Build Something Significant
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-xl mx-auto">
            Tell us about your business, your goals, and your challenges. We&apos;ll be in touch within
            one business day.
          </p>
        </div>

        {/* Form card */}
        <div className="border border-surface-border rounded-card p-8 md:p-12 reveal">
          {submitState === 'success' ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-3xl text-text-primary mb-3">
                Inquiry Sent!
              </h3>
              <p className="font-body text-lg text-text-secondary max-w-md mx-auto">
                Thank you for reaching out. We&apos;ll review your inquiry and get back to you within
                one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {submitState === 'error' && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-input px-5 py-4">
                  <p className="font-body text-sm text-red-600">
                    Something went wrong sending your inquiry. Please try again or email us directly
                    at{' '}
                    <a href="mailto:hello@a-zero.co" className="underline">
                      hello@a-zero.co
                    </a>
                    .
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-form font-medium text-sm text-text-primary mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className={`w-full bg-surface-card border rounded-input px-5 py-3 font-form text-base text-text-primary placeholder:text-text-muted outline-none focus:border-brand-blue transition-colors duration-150 ${
                      errors.name ? 'border-red-400' : 'border-surface-border'
                    }`}
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-red-500 text-sm font-form">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-form font-medium text-sm text-text-primary mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className={`w-full bg-surface-card border rounded-input px-5 py-3 font-form text-base text-text-primary placeholder:text-text-muted outline-none focus:border-brand-blue transition-colors duration-150 ${
                      errors.email ? 'border-red-400' : 'border-surface-border'
                    }`}
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-red-500 text-sm font-form">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Company */}
              <div className="mb-6">
                <label
                  htmlFor="company"
                  className="block font-form font-medium text-sm text-text-primary mb-2"
                >
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Your Company Pte Ltd"
                  value={form.company}
                  onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                  className="w-full bg-surface-card border border-surface-border rounded-input px-5 py-3 font-form text-base text-text-primary placeholder:text-text-muted outline-none focus:border-brand-blue transition-colors duration-150"
                />
              </div>

              {/* Area of Interest */}
              <div className="mb-6">
                <p className="font-form font-medium text-sm text-text-primary mb-3">
                  Area of Interest
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {INTEREST_OPTIONS.map((option) => (
                    <label
                      key={option}
                      className="flex items-start gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={form.interests.includes(option)}
                        onChange={() => handleInterestChange(option)}
                        className="checkbox-custom mt-0.5 w-4 h-4 flex-shrink-0 cursor-pointer"
                      />
                      <span className="font-form text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget range slider */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-form font-medium text-sm text-text-primary">Your Budget</p>
                  <span className="font-form text-sm font-medium text-brand-blue">
                    SGD ${form.budgetMin.toLocaleString()} – ${form.budgetMax.toLocaleString()}
                  </span>
                </div>
                <div className="relative h-4 flex items-center">
                  {/* Track background */}
                  <div
                    className="absolute left-0 right-0 h-1 rounded-full"
                    style={{ background: buildSliderBackground(form.budgetMin, form.budgetMax) }}
                    aria-hidden="true"
                  />
                  {/* Min slider */}
                  <input
                    type="range"
                    min={BUDGET_MIN}
                    max={BUDGET_MAX}
                    step={BUDGET_STEP}
                    value={form.budgetMin}
                    onChange={handleBudgetMin}
                    className="range-slider absolute left-0 right-0 w-full"
                    aria-label="Minimum budget"
                    style={{ zIndex: form.budgetMin > BUDGET_MAX - BUDGET_STEP * 2 ? 5 : 3 }}
                  />
                  {/* Max slider */}
                  <input
                    type="range"
                    min={BUDGET_MIN}
                    max={BUDGET_MAX}
                    step={BUDGET_STEP}
                    value={form.budgetMax}
                    onChange={handleBudgetMax}
                    className="range-slider absolute left-0 right-0 w-full"
                    aria-label="Maximum budget"
                    style={{ zIndex: 4 }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="font-form text-xs text-text-muted">$1,000</span>
                  <span className="font-form text-xs text-text-muted">$50,000</span>
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block font-form font-medium text-sm text-text-primary mb-2"
                >
                  Tell Us About Your Challenge <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Describe your current situation, goals, and any specific challenges you're facing..."
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  className={`w-full bg-surface-card border rounded-input px-5 py-3 font-form text-base text-text-primary placeholder:text-text-muted outline-none focus:border-brand-blue transition-colors duration-150 resize-none min-h-[120px] ${
                    errors.message ? 'border-red-400' : 'border-surface-border'
                  }`}
                  aria-required="true"
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-red-500 text-sm font-form">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitState === 'loading'}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-blue text-text-inverse font-body font-medium rounded-pill px-10 py-4 text-base hover:opacity-90 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-150"
              >
                {submitState === 'loading' && <Spinner />}
                {submitState === 'loading' ? 'Sending…' : 'Send Inquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
