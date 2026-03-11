import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  activeSection: string
}

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const activeHref = `#${activeSection}`

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-surface-border transition-shadow duration-200 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-container mx-auto px-4 md:px-8 xl:px-16">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center" aria-label="A-zero Digital home">
            <span className="font-logo text-3xl font-normal text-text-muted leading-none">a</span>
            <span className="font-logo text-3xl font-normal text-text-primary leading-none">0</span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`font-body text-base transition-colors duration-150 ${
                      isActive
                        ? 'bg-surface-card border border-surface-border rounded-full px-5 py-2 text-text-primary'
                        : 'px-5 py-2 text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center bg-brand-blue text-text-inverse font-body font-medium rounded-pill px-6 py-3 text-sm hover:opacity-90 active:scale-95 transition-all duration-150"
          >
            Get Started
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-text-primary"
            onClick={() => setDrawerOpen((v) => !v)}
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={drawerOpen}
          >
            {drawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-surface-border shadow-sm">
          <ul className="flex flex-col px-4 py-4 gap-1" role="list">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}
                    className={`block font-body text-base py-3 px-4 rounded-input transition-colors duration-150 ${
                      isActive
                        ? 'bg-surface-card text-text-primary font-medium'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-muted'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setDrawerOpen(false)}
                className="block text-center bg-brand-blue text-text-inverse font-body font-medium rounded-pill px-6 py-3 text-sm hover:opacity-90 active:scale-95 transition-all duration-150"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
