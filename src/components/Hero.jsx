import { GYM } from '../data/content'
import CtaButton from './CtaButton'
import ScrollReveal from './ScrollReveal'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0">
        <img
          src="/images/chip-win01.png"
          alt=""
          className="h-full w-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/60" />
      </div>

      <div className="absolute top-1/3 right-0 h-[50vh] w-[55vw] sm:h-[60vh] sm:w-[50vw] lg:h-[70vh] lg:w-[45vw]">
        <div className="relative h-full w-full animate-float-slow">
          <img
            src="/images/chip-win01.png"
            alt="Chip Moraza-Pollard celebrating a championship win"
            className="h-full w-full object-cover object-center opacity-50 lg:opacity-90"
            style={{
              maskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
            }}
          />
          <div className="absolute inset-0 box-glow-ember opacity-40" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 lg:px-8">
        <div className="max-w-3xl">
          <ScrollReveal>
            <p className="mb-4 font-mono text-xs tracking-[0.35em] text-ember uppercase animate-fade-glow">
              WBC Cruiserweight World Champion
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <h1 className="font-display text-[clamp(3.5rem,12vw,8rem)] leading-[0.9] tracking-wide text-white">
              <span className="block text-glow-ember animate-glitch">CHIP</span>
              <span className="block text-steel/80">THE SURGEON</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-steel md:text-2xl">
              Train with a world champion nak muay. Precision striking. Real fight culture.
              <span className="text-white"> Surgeon Muay Thai</span> — Plymouth, MA.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <CtaButton href={GYM.bookingUrl} external variant="primary">
                Train With Chip
              </CtaButton>
              <CtaButton href="#about" variant="secondary">
                His Story
              </CtaButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={4}>
            <div className="mt-14 flex flex-wrap gap-8 border-t border-ember/20 pt-8">
              {[
                { label: 'Status', value: 'ACTIVE CHAMP' },
                { label: 'Discipline', value: 'MUAY THAI' },
                { label: 'Location', value: 'PLYMOUTH, MA' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-[10px] tracking-[0.25em] text-ember uppercase">{stat.label}</p>
                  <p className="font-display text-2xl tracking-wider text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-float-slow">
        <a href="#about" className="flex flex-col items-center gap-2 text-steel/60 transition-colors hover:text-ember">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <span className="h-8 w-px bg-gradient-to-b from-ember to-transparent" />
        </a>
      </div>
    </section>
  )
}