import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { paths } from '../routes/paths'

type NavItem = {
  to: string
  label: string
  end?: boolean
}

const leftLinks: NavItem[] = [
  { to: paths.home, label: 'Home', end: true },
  { to: paths.products, label: 'Products' },
  { to: paths.collections, label: 'Collections' },
]

const rightLinks: NavItem[] = [
  { to: paths.about, label: 'About' },
  { to: paths.contact, label: 'Contact Us' },
]

const mobileLinks = [...leftLinks, ...rightLinks]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === paths.home

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const headerClass = [
    'header',
    scrolled ? 'header--scrolled' : '',
    !isHome ? 'header--inner' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `header__link${isActive ? ' is-active' : ''}`

  return (
    <header className={headerClass}>
      <div className="header__pill">
        <nav className="header__side" aria-label="Primary left navigation">
          {leftLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to={paths.home} className="brand">
          <span className="brand__name">TERRA</span>
          <span className="brand__tag">Fine Surfaces</span>
        </Link>

        <nav
          className="header__side header__side--right"
          aria-label="Primary right navigation"
        >
          {rightLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="header__toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        className={`header__mobile ${menuOpen ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
      >
        {mobileLinks.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
