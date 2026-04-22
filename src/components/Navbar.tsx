import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'

interface NavbarProps {
  onThemeToggle: () => void
  currentTheme: 'light' | 'dark'
}

const navLinks = [
  { label: 'Services',      to: '/services' },
  { label: 'About',         to: '/about' },
  { label: 'Contact',       to: '/contact' },
]

export default function Navbar({ onThemeToggle, currentTheme }: NavbarProps) {
  const [scrolled, setScrolled]   = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setDrawerOpen(false) }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 navbar-glass backdrop-blur-md border-b border-az-border/20 transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-container mx-auto px-4 md:px-8 xl:px-12">
        <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Primary navigation">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="A-zero Digital — Home">
            <img
              src={currentTheme === 'dark' ? `${import.meta.env.BASE_URL}a-zero-logo-dark-mode.svg` : `${import.meta.env.BASE_URL}a-zero-logo-light-mode.svg`}
              alt="A-zero Digital"
              className="h-14 w-auto transition-opacity duration-150 hover:opacity-80"
              width={73}
              height={90}
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `font-body text-sm transition-colors duration-150 px-4 py-2 rounded-pill ${
                      isActive
                        ? 'bg-az-card text-az-primary font-medium'
                        : 'text-az-secondary hover:text-az-primary'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onThemeToggle}
              className="rounded-full p-2 bg-az-card border border-az-border/30 hover:bg-az-bg-off transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {currentTheme === 'dark' ? (
                <Sun className="w-4 h-4 text-az-primary" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4 text-az-primary" aria-hidden="true" />
              )}
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-az-primary text-az-inverse font-body font-medium rounded-pill px-6 py-2.5 text-sm hover:shadow-btn hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onThemeToggle}
              className="rounded-full p-2 bg-az-card border border-az-border/30"
              aria-label="Toggle theme"
            >
              {currentTheme === 'dark' ? (
                <Sun className="w-4 h-4 text-az-primary" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4 text-az-primary" aria-hidden="true" />
              )}
            </button>
            <button
              className="flex items-center justify-center w-10 h-10 text-az-primary"
              onClick={() => setDrawerOpen((v) => !v)}
              aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
            >
              {drawerOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden absolute top-full left-0 right-0 drawer-glass backdrop-blur-md border-b border-az-border/20 shadow-sm"
        >
          <ul className="flex flex-col px-4 py-4 gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block font-body text-base py-3 px-4 rounded-input transition-colors duration-150 ${
                      isActive
                        ? 'bg-az-card text-az-primary font-medium'
                        : 'text-az-secondary hover:text-az-primary hover:bg-az-card'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                className="block text-center bg-az-primary text-az-inverse font-body font-medium rounded-pill px-4 py-3 text-sm hover:shadow-btn active:scale-95 transition-all duration-200"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
