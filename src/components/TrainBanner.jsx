import { GYM } from '../data/content'
import CtaButton from './CtaButton'
import ScrollReveal from './ScrollReveal'

export default function TrainBanner() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-garnet/20" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/images/advanced-muay-thai.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void" />

      <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-xs tracking-[0.4em] text-ember uppercase">Your Corner</p>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,8vw,5.5rem)] leading-none tracking-wide text-white">
            TRAIN WITH A <span className="text-glow-ember text-ember">WORLD CHAMPION</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-steel">
            From first-time students to title-chasing fighters — Kru Chip meets you where you are
            and builds you into a real nak muay.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CtaButton href={GYM.bookingUrl} external variant="primary">
              Start Free Class
            </CtaButton>
            <CtaButton href="#gym" variant="ghost">
              Explore The Gym
            </CtaButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}