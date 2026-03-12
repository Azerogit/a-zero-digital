import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/a-zero-digital',
    icon: Linkedin,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/azerodigi',
    icon: Instagram,
  },
  {
    label: 'X / Twitter',
    href: 'https://twitter.com/azerodigi',
    icon: Twitter,
  },
]

const contactInfo = [
  { icon: Mail, text: 'hello@a-zero.co', href: 'mailto:hello@a-zero.co' },
  { icon: Phone, text: '+65 XXXX XXXX', href: 'tel:+6500000000' },
  { icon: MapPin, text: 'Singapore, SG', href: null },
]

export default function Footer() {
  return (
    <footer className="bg-surface-muted border-t border-surface-border">
      <div className="max-w-container mx-auto px-4 md:px-8 xl:px-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-10">
          {/* Logo */}
          <a href="#hero" className="flex items-center flex-shrink-0" aria-label="A-zero Digital">
            <span className="font-logo text-3xl font-normal text-text-muted leading-none">a</span>
            <span className="font-logo text-3xl font-normal text-text-primary leading-none">0</span>
          </a>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-16 h-16 rounded-full border border-surface-border bg-surface-base hover:bg-surface-card transition-colors duration-150"
                >
                  <Icon size={20} className="text-text-secondary" aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-surface-border" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 gap-6">
          {/* Contact info */}
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8" role="list">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.text} className="flex items-center gap-2">
                  <Icon size={16} className="text-text-muted flex-shrink-0" aria-hidden="true" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="font-body text-sm text-text-secondary">{item.text}</span>
                  )}
                </li>
              )
            })}
          </ul>

          {/* Copyright */}
          <p className="font-body text-sm text-text-muted whitespace-nowrap">
            © 2026 A-zero Digital Pte Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
