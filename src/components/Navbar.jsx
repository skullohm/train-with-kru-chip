import { useEffect, useState } from 'react'
import { NAV_ITEMS, GYM } from '../data/content'
import CtaButton from './CtaButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-ember/20 bg-void/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <img
            src="/images/smt-logo.svg"
            alt="Surgeon Muay Thai"
            className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="hidden sm:block">
            <p className="font-display text-xl tracking-wider text-white">THE SURGEON</p>
            <p className="font-mono text-[10px] tracking-[0.3em] text-ember uppercase">Train With Chip</p>
          </div>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative font-mono text-xs tracking-[0.2em] text-steel uppercase transition-colors hover:text-white"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-ember transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <CtaButton href={GYM.bookingUrl} external variant="primary">
            Start Training
          </CtaButton>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`h-0.5 w-6 bg-white transition-all ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-ember transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition-all ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      <div
        className={`fixed inset-0 top-[72px] z-40 bg-void/95 backdrop-blur-lg transition-all duration-400 lg:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-2 p-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block border-l-2 border-ember/40 py-3 pl-4 font-display text-3xl tracking-wider text-white transition-colors hover:border-ember hover:text-ember"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-6">
            <CtaButton href={GYM.bookingUrl} external variant="primary" className="w-full">
              Start Training
            </CtaButton>
          </li>
        </ul>
      </div>
    </header>
  )
}