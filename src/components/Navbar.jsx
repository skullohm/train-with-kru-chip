import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NAV_ITEMS, GYM } from '../data/content'
import CtaButton from './CtaButton'

function NavigationLink({ href, ...props }) {
  // Keep native scrolling for home sections, including when returning from a page.
  return href.includes('#') ? <a href={href} {...props} /> : <Link to={href} {...props} />
}

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
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <NavigationLink href="/" className="group flex items-center gap-3">
          <img
            src="/images/smt-logo.svg"
            alt="Surgeon Muay Thai"
            className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="hidden sm:block">
            <p className="font-display text-xl tracking-wider text-white">THE SURGEON</p>
            <p className="font-mono text-[10px] tracking-[0.3em] text-ember uppercase">Train With Chip</p>
          </div>
        </NavigationLink>

        <ul className="hidden items-center gap-3 xl:gap-5 xl:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <NavigationLink
                href={item.href}
                className="group relative font-mono text-xs tracking-[0.2em] text-steel uppercase transition-colors hover:text-white"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-ember transition-all duration-300 group-hover:w-full" />
              </NavigationLink>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 items-center gap-2 whitespace-nowrap xl:flex">
          <CtaButton href="https://app.kruchip.com" variant="gold" className="!px-4">Open the App</CtaButton>
          <NavigationLink href="/support" className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-3.5 font-display text-lg tracking-[0.12em] text-void uppercase transition-colors hover:bg-white/90">
            Support
          </NavigationLink>
          <CtaButton href={GYM.bookingUrl} external variant="primary" className="!px-4">
            Start Training
          </CtaButton>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden"
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
        className={`fixed inset-0 top-[72px] z-40 overflow-y-auto bg-void/95 backdrop-blur-lg transition-all duration-400 xl:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-2 p-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <NavigationLink
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block border-l-2 border-ember/40 py-3 pl-4 font-display text-3xl tracking-wider text-white transition-colors hover:border-ember hover:text-ember"
              >
                {item.label}
              </NavigationLink>
            </li>
          ))}
          <li className="mt-6">
            <CtaButton href="https://app.kruchip.com" variant="gold" className="mb-3 w-full">Open the App</CtaButton>
            <NavigationLink href="/support" onClick={() => setMenuOpen(false)} className="mb-3 inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-3.5 font-display text-lg tracking-[0.12em] text-void uppercase transition-colors hover:bg-white/90">
              Support
            </NavigationLink>
            <CtaButton href={GYM.bookingUrl} external variant="primary" className="w-full">
              Start Training
            </CtaButton>
          </li>
        </ul>
      </div>
    </header>
  )
}
