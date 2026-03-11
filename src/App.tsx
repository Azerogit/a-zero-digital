import { Helmet } from 'react-helmet-async'
import { useScrollSpy } from './hooks/useScrollSpy'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import AboutSection from './components/AboutSection'
import FaqSection from './components/FaqSection'
import ContactSection from './components/ContactSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

const SECTION_IDS = ['hero', 'services', 'process', 'about', 'faq', 'contact']

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'A-zero Digital Pte Ltd',
  description:
    'AI-powered marketing consultancy bridging advanced data science with measurable marketing ROI through machine learning, predictive analytics, and intelligent automation.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'SG',
    addressLocality: 'Singapore',
  },
  url: 'https://a-zero.co',
  email: 'hello@a-zero.co',
  areaServed: 'Southeast Asia',
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Digital Marketing',
    'Data Science',
    'Marketing Analytics',
    'Marketing Automation',
  ],
}

export default function App() {
  const activeSection = useScrollSpy(SECTION_IDS)

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar activeSection={activeSection} />

      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
        <CtaSection />
      </main>

      <Footer />
    </>
  )
}
