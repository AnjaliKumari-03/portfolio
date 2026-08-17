import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiChevronRight } from 'react-icons/hi'
import { profile } from '../data/portfolioData'

const routes = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

// Matches the mobile-menu collapse transition duration below, so we only
// scroll once the dropdown has actually finished closing and the page
// layout has settled.
const MENU_COLLAPSE_MS = 280

export default function Nav() {
  const [active, setActive] = useState('about')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)

    if (!onHome) return () => window.removeEventListener('scroll', onScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    routes.forEach((r) => {
      const el = document.getElementById(r.id)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [onHome])

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const goTo = (id) => {
    const wasOpen = menuOpen
    setMenuOpen(false)

    if (!onHome) {
      navigate('/')
      setTimeout(() => scrollToId(id), wasOpen ? MENU_COLLAPSE_MS + 80 : 80)
      return
    }

    // Wait for the mobile dropdown's collapse animation to finish before
    // measuring/scrolling — otherwise the browser scrolls using a layout
    // that's about to shift, and the section lands in the wrong place.
    if (wasOpen) {
      setTimeout(() => scrollToId(id), MENU_COLLAPSE_MS)
    } else {
      scrollToId(id)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen ? 'bg-cream/95 backdrop-blur border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-rose to-lavender flex items-center justify-center text-white text-xs font-display font-semibold">
            AK
          </span>
          <span className="font-display text-lg text-ink hidden sm:inline">Anjali Kumari</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-sm">
          {routes.map((r) => (
            <li key={r.id} className="relative">
              <button
                onClick={() => goTo(r.id)}
                className={`relative z-10 px-4 py-2 block transition-colors ${
                  onHome && active === r.id ? 'text-ink font-medium' : 'text-muted hover:text-ink'
                }`}
              >
                {r.label}
                {onHome && active === r.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 bg-rose/25 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          download
          className="hidden md:inline-flex items-center gap-1.5 text-sm bg-rose text-white px-4 py-1.5 rounded-full hover:bg-roseDeep transition-colors shadow-sm shadow-rose/30"
        >
          Resume
        </a>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-ink text-2xl relative z-10"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: MENU_COLLAPSE_MS / 1000 }}
            className="md:hidden overflow-hidden border-t border-line bg-cream"
          >
            <ul className="px-6 py-2">
              {routes.map((r) => (
                <li key={r.id}>
                  <button
                    onClick={() => goTo(r.id)}
                    className={`w-full flex items-center justify-between py-3.5 border-b border-line/70 text-base transition-colors ${
                      onHome && active === r.id ? 'text-roseDeep font-medium' : 'text-ink'
                    }`}
                  >
                    {r.label}
                    <HiChevronRight className="text-muted" />
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeUrl}
                  download
                  className="flex items-center justify-between py-3.5 text-base text-roseDeep font-medium"
                >
                  Download Resume
                  <HiChevronRight />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
