import { GYM } from '../../data/content'
import CtaButton from '../CtaButton'

export default function KruNavbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-ember/15 bg-void/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="/kru" className="group flex items-center gap-3">
          <img src="/images/smt-logo.svg" alt="" className="h-9 w-9" />
          <div>
            <p className="font-display text-lg tracking-wider text-white">KRU CHIP</p>
            <p className="font-mono text-[9px] tracking-[0.3em] text-ember uppercase">The Surgeon</p>
          </div>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#philosophy" className="font-mono text-[10px] tracking-[0.2em] text-steel uppercase transition-colors hover:text-ember">
            Philosophy
          </a>
          <a href="#curriculum" className="font-mono text-[10px] tracking-[0.2em] text-steel uppercase transition-colors hover:text-ember">
            Curriculum
          </a>
          <a href="#path" className="font-mono text-[10px] tracking-[0.2em] text-steel uppercase transition-colors hover:text-ember">
            Your Path
          </a>
        </div>

        <CtaButton href={GYM.bookingUrl} external variant="primary" className="!px-5 !py-2.5 !text-sm">
          Book Class
        </CtaButton>
      </nav>
    </header>
  )
}