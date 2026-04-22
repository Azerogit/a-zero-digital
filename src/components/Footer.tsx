import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Home',          to: '/' },
  { label: 'Services',      to: '/services' },
  { label: 'About',         to: '/about' },
  { label: 'Contact',       to: '/contact' },
]

const contactInfo = [
  { icon: Mail,    text: 'hello@a-zero.co', href: 'mailto:hello@a-zero.co' },
  { icon: MapPin,  text: 'Singapore',       href: null },
]

export default function Footer() {
  return (
    <footer className="bg-az-bg border-t border-az-border/20">
      <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 py-8 md:py-12">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-150" aria-label="A-zero Digital">
              <img src={`${import.meta.env.BASE_URL}a-zero-logo-light-mode.svg`} alt="A-zero Digital" className="h-9 w-auto dark:hidden" width={73} height={90} />
              <img src={`${import.meta.env.BASE_URL}a-zero-logo-dark-mode.svg`} alt="A-zero Digital" className="h-9 w-auto hidden dark:block" width={73} height={90} />
            </Link>
            <p className="font-body text-xs text-az-muted mt-2 max-w-[200px] leading-relaxed">
              AI-Powered Marketing &amp;<br />Data Science Consultancy
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-az-secondary hover:text-az-primary transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-az-border/15" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 gap-4">
          <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6" role="list">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.text} className="flex items-center gap-2">
                  <Icon size={14} className="text-az-muted flex-shrink-0" aria-hidden="true" />
                  {item.href ? (
                    <a href={item.href} className="font-body text-xs text-az-secondary hover:text-az-primary transition-colors duration-150">
                      {item.text}
                    </a>
                  ) : (
                    <span className="font-body text-xs text-az-secondary">{item.text}</span>
                  )}
                </li>
              )
            })}
          </ul>
          <p className="font-body text-xs text-az-muted">
            © 2025 A-zero Digital Pte Ltd. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
