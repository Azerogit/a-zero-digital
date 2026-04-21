import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Mail, MapPin, ChevronDown } from 'lucide-react'
import SchemaMarkup from '../components/ui/SchemaMarkup'
import PageHero from '../components/sections/shared/PageHero'
import SectionLabel from '../components/ui/SectionLabel'

/* ── Types ─────────────────────────────────────────────────────── */

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

/* ── Constants ──────────────────────────────────────────────────── */

const INTEREST_OPTIONS = [
  'Digital Marketing Strategy & Tech',
  'AI & Machine Learning Integration',
  'Data Science & Advanced Analytics',
  'Full-Service Engagement',
]

const BUDGET_MIN  = 1000
const BUDGET_MAX  = 50000
const BUDGET_STEP = 1000

const FAQS = [
  {
    q: 'How long does a typical engagement take?',
    a: 'Initial diagnostic engagements typically take 2–4 weeks. Full implementation projects range from 8–24 weeks depending on scope and complexity.',
  },
  {
    q: 'Do you work with companies outside Singapore?',
    a: 'Yes. While we are Singapore-based, we serve clients across Southeast Asia, including Malaysia, Indonesia, Thailand, and Australia.',
  },
  {
    q: 'What size of business do you work with?',
    a: 'Our typical client is a B2B company with S$1M–S$50M in annual revenue, though we work with both earlier-stage and enterprise organisations when there is strategic fit.',
  },
  {
    q: 'Do you offer retainer arrangements?',
    a: 'Yes. Many clients start with a project engagement and transition to an ongoing advisory retainer. We design both models around measurable outcomes.',
  },
]

/* ── Helpers ────────────────────────────────────────────────────── */

function pct(value: number) {
  return ((value - BUDGET_MIN) / (BUDGET_MAX - BUDGET_MIN)) * 100
}

function buildSliderBg(min: number, max: number) {
  const lo = pct(min)
  const hi = pct(max)
  return `linear-gradient(to right,
    var(--az-border) 0%,
    var(--az-border) ${lo}%,
    var(--az-primary) ${lo}%,
    var(--az-primary) ${hi}%,
    var(--az-border) ${hi}%,
    var(--az-border) 100%)`
}

function Spinner() {
  return (
    <svg className="animate-spin h-5 w-5 text-az-inverse" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  )
}

/* ── Schema ─────────────────────────────────────────────────────── */

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact A-zero Digital',
  url: 'https://a-zero.co/contact',
  description: 'Get in touch with A-zero Digital for AI marketing and data science consulting in Singapore.',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'A-zero Digital',
  legalName: 'A-ZERO DIGITAL PTE. LTD.',
  taxID: '202513521D',
  url: 'https://a-zero.co',
  email: 'hello@a-zero.co',
  foundingDate: '2025-03-27',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '336 Smith Street #05-303 New Bridge Centre',
    addressLocality: 'Singapore',
    postalCode: '050336',
    addressCountry: 'SG',
  },
  areaServed: ['Singapore', 'Southeast Asia'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://a-zero.co' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://a-zero.co/contact' },
  ],
}

/* ── FAQ Item ───────────────────────────────────────────────────── */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-az-border/20 last:border-b-0">
      <button
        type="button"
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-body font-medium text-sm text-az-primary">{q}</span>
        <ChevronDown
          size={16}
          className={`text-az-muted flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <p className="font-body text-sm text-az-secondary leading-relaxed pb-5">{a}</p>
      )}
    </div>
  )
}

/* ── Main component ─────────────────────────────────────────────── */

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', company: '',
    interests: [],
    budgetMin: 5000, budgetMax: 25000,
    message: '',
  })
  const [errors, setErrors]           = useState<FormErrors>({})
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  function validate(): boolean {
    const e: FormErrors = {}
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = 'Please enter your full name.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email address.'
    if (!form.message.trim() || form.message.trim().length < 20)
      e.message = 'Please describe your challenge (at least 20 characters).'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function toggleInterest(opt: string) {
    setForm((p) => ({
      ...p,
      interests: p.interests.includes(opt) ? p.interests.filter((i) => i !== opt) : [...p.interests, opt],
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitState('loading')
    try {
      const res = await fetch('https://formsubmit.co/ajax/hello@a-zero.co', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name:      form.name,
          email:     form.email,
          company:   form.company || 'Not provided',
          interests: form.interests.join(', ') || 'None specified',
          budget:    `SGD ${form.budgetMin.toLocaleString()} – ${form.budgetMax.toLocaleString()}`,
          message:   form.message,
          _subject:  `New inquiry from ${form.name} — A-zero Digital`,
        }),
      })
      if (!res.ok) throw new Error('Submit failed')
      setSubmitState('success')
    } catch {
      setSubmitState('error')
    }
  }

  const inputCls = (err?: string) =>
    `w-full bg-az-bg-off border rounded-input px-4 py-3 font-body text-sm text-az-primary placeholder:text-az-muted outline-none focus:border-az-primary transition-colors duration-150 ${
      err ? 'border-red-400' : 'border-az-border/30'
    }`

  return (
    <>
      <Helmet>
        <title>Contact | A-zero Digital — Book a Free AI Marketing Audit</title>
        <meta
          name="description"
          content="Get in touch with A-zero Digital. Book a free 30-minute AI marketing audit for your Singapore or SEA B2B business."
        />
        <link rel="canonical" href="https://a-zero.co/contact" />
      </Helmet>

      <SchemaMarkup schema={contactPageSchema} />
      <SchemaMarkup schema={localBusinessSchema} />
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />

      <PageHero
        label="Contact"
        title="Let's Build Something Significant"
        subtitle="Tell us about your business, goals, and challenges. We'll be in touch within one business day."
      />

      <section className="py-12 md:py-20" aria-label="Contact form and info">
        <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">

            {/* ── Form ── */}
            <div className="lg:col-span-2">
              {submitState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-20 text-center border border-az-border/20 rounded-card">
                  <div className="w-14 h-14 rounded-full border border-az-border/30 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-az-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-display font-black text-2xl text-az-primary mb-3">Inquiry Sent</h2>
                  <p className="font-body text-sm text-az-secondary max-w-sm">
                    Thank you for reaching out. We'll review your inquiry and be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {submitState === 'error' && (
                    <div className="bg-az-bg-off border border-az-border/30 rounded-input px-5 py-4" role="alert">
                      <p className="font-body text-sm text-az-primary">
                        Something went wrong. Please try again or email us at{' '}
                        <a href="mailto:hello@a-zero.co" className="underline">hello@a-zero.co</a>.
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block font-body font-medium text-xs text-az-secondary mb-2 tracking-wide uppercase">
                        Full Name <span className="text-az-muted">*</span>
                      </label>
                      <input id="name" type="text" placeholder="Jane Smith" value={form.name}
                        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                        className={inputCls(errors.name)} aria-required="true"
                        aria-describedby={errors.name ? 'name-error' : undefined} />
                      {errors.name && <p id="name-error" className="mt-1.5 text-xs text-red-500" role="alert">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-body font-medium text-xs text-az-secondary mb-2 tracking-wide uppercase">
                        Email <span className="text-az-muted">*</span>
                      </label>
                      <input id="email" type="email" placeholder="jane@company.com" value={form.email}
                        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                        className={inputCls(errors.email)} aria-required="true"
                        aria-describedby={errors.email ? 'email-error' : undefined} />
                      {errors.email && <p id="email-error" className="mt-1.5 text-xs text-red-500" role="alert">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block font-body font-medium text-xs text-az-secondary mb-2 tracking-wide uppercase">Company</label>
                    <input id="company" type="text" placeholder="Your Company Pte Ltd" value={form.company}
                      onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                      className={inputCls()} />
                  </div>

                  <div>
                    <p className="font-body font-medium text-xs text-az-secondary mb-3 tracking-wide uppercase">Area of Interest</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {INTEREST_OPTIONS.map((opt) => (
                        <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                          <input type="checkbox" checked={form.interests.includes(opt)}
                            onChange={() => toggleInterest(opt)}
                            className="checkbox-custom w-4 h-4 flex-shrink-0 rounded" />
                          <span className="font-body text-sm text-az-secondary group-hover:text-az-primary transition-colors duration-150">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Budget slider */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-body font-medium text-xs text-az-secondary tracking-wide uppercase">Monthly Budget (SGD)</p>
                      <span className="font-mono text-xs text-az-primary">
                        ${form.budgetMin.toLocaleString()} – ${form.budgetMax.toLocaleString()}
                      </span>
                    </div>
                    <div className="relative h-4 flex items-center">
                      <div className="absolute left-0 right-0 h-1 rounded-full" aria-hidden="true"
                        style={{ background: buildSliderBg(form.budgetMin, form.budgetMax) }} />
                      <input type="range" min={BUDGET_MIN} max={BUDGET_MAX} step={BUDGET_STEP}
                        value={form.budgetMin}
                        onChange={(e) => {
                          const v = Number(e.target.value)
                          setForm((p) => ({ ...p, budgetMin: Math.min(v, p.budgetMax - BUDGET_STEP) }))
                        }}
                        className="range-slider absolute left-0 right-0 w-full"
                        aria-label="Minimum budget" style={{ zIndex: form.budgetMin > BUDGET_MAX - BUDGET_STEP * 2 ? 5 : 3 }} />
                      <input type="range" min={BUDGET_MIN} max={BUDGET_MAX} step={BUDGET_STEP}
                        value={form.budgetMax}
                        onChange={(e) => {
                          const v = Number(e.target.value)
                          setForm((p) => ({ ...p, budgetMax: Math.max(v, p.budgetMin + BUDGET_STEP) }))
                        }}
                        className="range-slider absolute left-0 right-0 w-full"
                        aria-label="Maximum budget" style={{ zIndex: 4 }} />
                    </div>
                    <div className="flex justify-between mt-1.5">
                      <span className="font-mono text-xs text-az-muted">$1,000</span>
                      <span className="font-mono text-xs text-az-muted">$50,000</span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body font-medium text-xs text-az-secondary mb-2 tracking-wide uppercase">
                      Tell Us About Your Challenge <span className="text-az-muted">*</span>
                    </label>
                    <textarea id="message" rows={5}
                      placeholder="Describe your current situation, goals, and any specific challenges..."
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      className={`${inputCls(errors.message)} resize-none min-h-[120px]`}
                      aria-required="true" aria-describedby={errors.message ? 'message-error' : undefined} />
                    {errors.message && <p id="message-error" className="mt-1.5 text-xs text-red-500" role="alert">{errors.message}</p>}
                  </div>

                  <button type="submit" disabled={submitState === 'loading'}
                    className="inline-flex items-center gap-3 bg-az-primary text-az-inverse font-body font-medium rounded-pill px-8 py-3.5 text-base hover:shadow-btn hover:-translate-y-0.5 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200">
                    {submitState === 'loading' && <Spinner />}
                    {submitState === 'loading' ? 'Sending…' : 'Send Inquiry'}
                  </button>
                </form>
              )}
            </div>

            {/* ── Sidebar ── */}
            <aside className="flex flex-col gap-8">
              {/* Contact info */}
              <div className="border border-az-border/20 rounded-card p-6">
                <SectionLabel className="mb-4 block">Contact</SectionLabel>
                <ul className="space-y-4">
                  {[
                    { icon: Mail, label: 'Email', text: 'hello@a-zero.co', href: 'mailto:hello@a-zero.co' },
                    { icon: MapPin, label: 'Location', text: 'Singapore', href: null },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <li key={item.label} className="flex items-start gap-3">
                        <Icon size={14} className="text-az-muted mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <p className="font-mono text-[10px] tracking-widest uppercase text-az-muted mb-0.5">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="font-body text-sm text-az-primary hover:underline">{item.text}</a>
                          ) : (
                            <span className="font-body text-sm text-az-secondary">{item.text}</span>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* FAQ accordion */}
              <div className="border border-az-border/20 rounded-card p-6">
                <SectionLabel className="mb-4 block">Common Questions</SectionLabel>
                <div>
                  {FAQS.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  )
}
