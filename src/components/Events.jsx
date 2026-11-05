import { EVENTS, GYM } from '../data/content'
import CtaButton from './CtaButton'
import ScrollReveal from './ScrollReveal'
import FightCountdown from './FightCountdown'
import InquiryForm from './InquiryForm'

const FIGHT_FORM_KEY = 'a035ce70-0301-49c3-87a7-156b50d07a65'

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
                      {event.ticketsUrl && (
                        <div className="mt-3 space-y-2">
                          <p className="text-white">{event.promotion}</p>
                          <p>{event.fightDate}</p>
                          <p>{event.times} Eastern</p>
                          <FightCountdown />
                        </div>
                      )}
                      <p className="mt-3 max-w-xl text-steel">{event.description}</p>
                    </div>
                  </div>

                  {event.status === 'upcoming' && (
                    <CtaButton href={event.ticketsUrl} external variant="primary" className="rounded-lg">
                      GET TICKETS
                    </CtaButton>
                  )}
                </div>
              </article>
              {event.ticketsUrl && (
                <div className="mt-5">
                  <p className="mb-4 text-steel">Fight news and fight camp drops. Nothing else.</p>
                  <InquiryForm accessKey={FIGHT_FORM_KEY} subject="Kruchip Fight Updates Signup" fields={[{ name: 'email', label: 'Email', type: 'email' }]} buttonLabel="Get Fight Updates" successMessage="You're on the list. See you at the House of Blues." />
                </div>
              )}
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
