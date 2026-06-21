import { GYM } from '../../data/content'
import { KRU } from '../../data/kruContent'
import CtaButton from '../CtaButton'
import ScrollReveal from '../ScrollReveal'

export default function KruHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src="/images/coach-chip.webp"
          alt=""
          className="h-full w-full object-cover object-top opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/90 to-void/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(201,0,0,0.2)_0%,transparent_50%)]" />
      </div>

      <div className="absolute top-1/4 right-0 hidden w-[40vw] lg:block">
        <div className="relative animate-float-slow">
          <div className="absolute -inset-4 border border-ember/20" aria-hidden="true" />
          <div className="absolute -inset-8 border border-ember/10" aria-hidden="true" />
          <img
            src="/images/chip-boxing.webp"
            alt="Kru Chip in the ring"
            className="relative z-10 w-full object-cover opacity-80"
            style={{
              maskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 lg:px-8">
        <div className="max-w-2xl">
          <ScrollReveal>
            <div className="mb-6 inline-flex items-center gap-3 border border-ember/30 bg-garnet/20 px-4 py-2">
              <span className="h-2 w-2 animate-pulse-neon rounded-full bg-ember" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-ember uppercase">
                Head Trainer · Surgeon Muay Thai
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <p className="font-mono text-xs tracking-[0.4em] text-steel uppercase">{KRU.tagline}</p>
            <h1 className="mt-3 font-display text-[clamp(3rem,10vw,7rem)] leading-[0.9] tracking-wide text-white">
              LEARN FROM
              <span className="block text-glow-ember text-ember">THE SURGEON</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p className="mt-6 text-xl leading-relaxed text-steel md:text-2xl">{KRU.intro}</p>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <CtaButton href={GYM.bookingUrl} external variant="primary">
                Train With Kru Chip
              </CtaButton>
              <CtaButton href="#path" variant="secondary">
                See Your Path
              </CtaButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={4}>
            <div className="mt-14 grid grid-cols-3 gap-4 border-t border-ember/20 pt-8">
              {[
                { val: 'WBC', lbl: 'World Champ' },
                { val: '7×', lbl: 'Defenses' },
                { val: '1st', lbl: 'Am. MTGP' },
              ].map((s) => (
                <div key={s.lbl}>
                  <p className="font-display text-2xl text-ember md:text-3xl">{s.val}</p>
                  <p className="font-mono text-[9px] tracking-[0.15em] text-steel uppercase">{s.lbl}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}