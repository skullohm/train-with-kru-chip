import { ABOUT_CHIP, ACHIEVEMENTS } from '../data/content'
import ScrollReveal from './ScrollReveal'

export default function AboutChip() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-5">
            <ScrollReveal>
              <div className="hud-corner relative overflow-hidden border border-ember/20 bg-panel">
                <div className="absolute top-4 right-4 z-10 font-mono text-[10px] tracking-[0.2em] text-ember uppercase">
                  Kru // Head Trainer
                </div>
                <img
                  src="/images/coach-chip.webp"
                  alt="Kru Chip Moraza-Pollard coaching at Surgeon Muay Thai"
                  className="aspect-[3/4] w-full object-cover object-top grayscale-[20%] transition-all duration-700 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-garnet/10" />
                <div className="absolute right-0 bottom-0 left-0 border-t border-ember/30 bg-void/80 p-4 backdrop-blur-sm">
                  <p className="font-display text-2xl tracking-wider text-white">CHIP MORAZA-POLLARD</p>
                  <p className="font-mono text-xs tracking-[0.2em] text-ember uppercase">"The Surgeon"</p>
                </div>
              </div>
            </ScrollReveal>

            <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full border border-ember/15" aria-hidden="true" />
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="font-mono text-xs tracking-[0.35em] text-ember uppercase">About Chip</p>
              <h2 className="mt-3 font-display text-5xl tracking-wide text-white md:text-6xl">
                CUT WITH <span className="text-glow-ember text-ember">PRECISION</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p className="mt-8 text-lg leading-relaxed text-steel md:text-xl">{ABOUT_CHIP}</p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {ACHIEVEMENTS.map((item) => (
                  <div
                    key={item.label}
                    className="group hud-corner border border-ember/15 bg-panel-light p-4 transition-all duration-300 hover:border-ember/40 hover:box-glow-ember"
                  >
                    <p className="font-display text-3xl text-ember transition-colors group-hover:text-glow-ember md:text-4xl">
                      {item.value}
                    </p>
                    <p className="mt-1 font-mono text-[10px] leading-snug tracking-[0.15em] text-steel uppercase">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <blockquote className="mt-10 border-l-2 border-ember pl-6">
                <p className="font-display text-2xl tracking-wide text-white/90 italic md:text-3xl">
                  "The ring doesn't lie. Neither does the work."
                </p>
                <cite className="mt-2 block font-mono text-xs tracking-[0.2em] text-ember not-italic uppercase">
                  — Kru Chip
                </cite>
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}