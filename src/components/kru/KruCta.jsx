import { GYM } from '../../data/content'
import CtaButton from '../CtaButton'
import ScrollReveal from '../ScrollReveal'

export default function KruCta() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <img src="/images/gym-wall-01.webp" alt="" className="h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/90 to-void" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-xs tracking-[0.4em] text-ember uppercase animate-fade-glow">
            Surgeon Muay Thai · Plymouth, MA
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,7vw,4.5rem)] leading-none tracking-wide text-white">
            YOUR CORNER. <span className="text-glow-ember text-ember">HIS GYM.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-xl text-steel">
            Book your first class and train under a world champion who still fights,
            still teaches, and still bleeds muay thai.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CtaButton href={GYM.bookingUrl} external variant="primary">
              Book Free Class
            </CtaButton>
            <CtaButton href={GYM.membershipUrl} external variant="secondary">
              View Memberships
            </CtaButton>
          </div>

          <a
            href="/"
            className="mt-8 inline-block font-mono text-[10px] tracking-[0.2em] text-steel/60 uppercase transition-colors hover:text-ember"
          >
            ← Back to main site
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}