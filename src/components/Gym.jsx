import { CLASSES, GYM, SITE } from '../data/content'
import CtaButton from './CtaButton'
import ScrollReveal from './ScrollReveal'

export default function Gym() {
  return (
    <section id="gym" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 diagonal-slice bg-garnet/10" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs tracking-[0.35em] text-ember uppercase">Surgeon Muay Thai</p>
              <h2 className="mt-3 font-display text-5xl tracking-wide text-white md:text-6xl">
                THE <span className="text-ember text-glow-ember">GYM</span>
              </h2>
              <p className="mt-4 max-w-xl text-lg text-steel">
                Plymouth's first and only dedicated Muay Thai gym. Authentic instruction rooted in real fight culture.
              </p>
            </div>
            <CtaButton href={SITE.url} external variant="secondary">
              surgeonmuaythai.com
            </CtaButton>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <ScrollReveal delay={1}>
            <div className="group relative h-72 overflow-hidden border border-ember/20 lg:h-96">
              <img
                src="/images/front-gym.webp"
                alt="Surgeon Muay Thai gym exterior"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/90 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="font-mono text-[10px] tracking-[0.25em] text-ember uppercase">Facility</p>
                <p className="font-display text-3xl text-white">88 Camelot Dr. #23</p>
                <p className="text-steel">Plymouth, MA 02360</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="group relative h-72 overflow-hidden border border-ember/20 lg:h-96">
              <img
                src="/images/gym-wall-01.webp"
                alt="Inside Surgeon Muay Thai training floor"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/90 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="font-mono text-[10px] tracking-[0.25em] text-ember uppercase">Training Floor</p>
                <p className="font-display text-3xl text-white">Bags. Pads. Ring.</p>
                <p className="text-steel">Everything you need to become a nak muay.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={1}>
          <h3 className="mt-16 font-display text-3xl tracking-wider text-white">CLASS SCHEDULE</h3>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CLASSES.map((cls, i) => (
            <ScrollReveal key={cls.title} delay={(i % 4) + 1}>
              <article className="group hud-corner overflow-hidden border border-ember/15 bg-panel transition-all duration-300 hover:border-ember/40 hover:box-glow-ember">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={cls.image}
                    alt={cls.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-garnet/30 mix-blend-multiply transition-opacity group-hover:opacity-50" />
                </div>
                <div className="p-4">
                  <h4 className="font-display text-xl tracking-wider text-white">{cls.title}</h4>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.15em] text-ember uppercase">{cls.schedule}</p>
                  <p className="mt-1 text-sm text-steel">{cls.level}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={2}>
          <div className="mt-14 hud-corner border border-ember/20 bg-panel-light p-6 md:p-8">
            <div className="flex flex-col gap-8 md:flex-row md:justify-between">
              <div>
                <p className="font-mono text-xs tracking-[0.25em] text-ember uppercase">Gym Hours</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {GYM.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4 border-b border-steel/10 py-2 text-sm">
                      <span className="font-mono tracking-wider text-white">{h.day}</span>
                      <span className="text-steel">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <CtaButton href={GYM.bookingUrl} external variant="primary">
                  Book Free Class
                </CtaButton>
                <CtaButton href={GYM.membershipUrl} external variant="ghost">
                  View Memberships
                </CtaButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}