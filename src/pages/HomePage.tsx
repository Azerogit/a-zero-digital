import { Helmet } from 'react-helmet-async'
import SchemaMarkup from '../components/ui/SchemaMarkup'
import HeroSection from '../components/sections/home/HeroSection'
import MetricsSection from '../components/sections/home/MetricsSection'
import ServicesPreview from '../components/sections/home/ServicesPreview'
import ProcessSection from '../components/sections/home/ProcessSection'
import WhyAzeroSection from '../components/sections/home/WhyAzeroSection'
import TestimonialsSection from '../components/sections/home/TestimonialsSection'
import CtaSection from '../components/sections/home/CtaSection'

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'A-zero Digital',
  legalName: 'A-ZERO DIGITAL PTE. LTD.',
  taxID: '202513521D',
  alternateName: 'A-zero Digital',
  url: 'https://a-zero.co',
  logo: 'https://a-zero.co/logo.png',
  description:
    "Singapore's AI-powered marketing consultancy bridging advanced data science with measurable marketing ROI through machine learning, predictive analytics, and intelligent automation.",
  foundingDate: '2025-03-27',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '336 Smith Street #05-303 New Bridge Centre',
    addressLocality: 'Singapore',
    postalCode: '050336',
    addressCountry: 'SG',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'hello@a-zero.co',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://linkedin.com/company/a-zero-digital',
    'https://twitter.com/azerodigi',
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Digital Marketing',
    'Data Science',
    'Marketing Analytics',
    'Marketing Automation',
    'Predictive Analytics',
  ],
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'A-zero Digital',
  url: 'https://a-zero.co',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'A-zero Digital — AI-Powered Marketing & Data Science Consultancy Singapore',
  url: 'https://a-zero.co',
  description:
    "Singapore's AI-driven marketing consultancy. We bridge advanced data science with measurable marketing ROI.",
  isPartOf: { '@type': 'WebSite', url: 'https://a-zero.co' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://a-zero.co' }],
  },
}

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>A-zero Digital | AI-Powered Marketing &amp; Data Science Consultancy Singapore</title>
        <meta
          name="description"
          content="Singapore's AI-driven marketing consultancy. We bridge advanced data science with measurable marketing ROI through machine learning, predictive analytics, and intelligent automation."
        />
        <link rel="canonical" href="https://a-zero.co" />
      </Helmet>

      <SchemaMarkup schema={orgSchema} />
      <SchemaMarkup schema={webSiteSchema} />
      <SchemaMarkup schema={webPageSchema} />

      <HeroSection />
      <MetricsSection />
      <ServicesPreview />
      <ProcessSection />
      <WhyAzeroSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
