import { EVENTS, GYM } from '../data/content'
import CtaButton from './CtaButton'
import ScrollReveal from './ScrollReveal'

const STATUS_STYLES = {
  upcoming: 'border-ember bg-ember/20 text-ember',
  gym: 'border-steel/40 bg-steel/10 text-steel',
}

export default function Events() {
  return (
    <section id="events" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <p className="font-mono text-xs tracking-[0.35em] text-ember uppercase">Fight Calendar</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-white md:text-6xl">
              UPCOMING <span className="text-glow-ember text-ember">EVENTS</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-steel">
              Title fights, gym events, and everything happening in the Surgeon camp.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 space-y-6">
          {EVENTS.map((event, i) => (
            <ScrollReveal key={event.id} delay={(i % 3) + 1}>
              <article className="group relative overflow-hidden border border-ember/15 bg-panel transition-all duration-500 hover:border-ember/35 hover:box-glow-ember">
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-ember via-garnet to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
                    <div className="animate-ring-pulse flex h-20 w-20 shrink-0 flex-col items-center justify-center border border-ember/30 bg-garnet/30">
                      <span className="font-mono text-[9px] tracking-[0.15em] text-ember uppercase">Date</span>
                      <span className="font-display text-lg leading-tight text-white">{event.date}</span>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`border px-2 py-0.5 font-mono text-[10px] tracking-[0.2em] uppercase ${STATUS_STYLES[event.status]}`}
                        >
                          {event.tag}
                        </span>
                        {event.status === 'upcoming' && (
                          <span className="font-mono text-[10px] tracking-[0.2em] text-ember uppercase animate-pulse-neon">
                            ● Live Updates
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 font-display text-3xl tracking-wider text-white transition-colors group-hover:text-ember">
                        {event.title}
                      </h3>
                      <p className="mt-1 font-mono text-xs tracking-[0.15em] text-steel uppercase">{event.venue}</p>
                      <p className="mt-3 max-w-xl text-steel">{event.description}</p>
                    </div>
                  </div>

                  {event.status === 'upcoming' && (
                    <CtaButton href={GYM.socials.chipInstagram} external variant="secondary">
                      Follow Updates
                    </CtaButton>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={2}>
          <div className="mt-12 text-center">
            <p className="font-mono text-xs tracking-[0.2em] text-steel uppercase">
              Fight announcements posted on Instagram
            </p>
            <a
              href={GYM.socials.chipInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-display text-2xl tracking-wider text-ember transition-colors hover:text-glow-ember"
            >
              @chipthesurgeon
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}