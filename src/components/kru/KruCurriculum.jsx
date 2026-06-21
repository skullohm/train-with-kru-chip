import { KRU_CURRICULUM } from '../../data/kruContent'
import ScrollReveal from '../ScrollReveal'

export default function KruCurriculum() {
  return (
    <section id="curriculum" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 diagonal-slice bg-garnet/8" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <ScrollReveal>
              <p className="font-mono text-xs tracking-[0.35em] text-ember uppercase">What You Learn</p>
              <h2 className="mt-3 font-display text-5xl tracking-wide text-white md:text-6xl">
                THE 8 <span className="text-ember text-glow-ember">LIMBS</span>
              </h2>
              <p className="mt-6 text-lg text-steel">
                Muay Thai is the art of eight weapons. Under Kru Chip, every limb becomes a tool —
                drilled, refined, and applied with fight-tested precision.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="relative mt-10 overflow-hidden border border-ember/20">
                <img
                  src="/images/advanced-muay-thai.webp"
                  alt="Advanced muay thai training at Surgeon Muay Thai"
                  className="aspect-video w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/70 to-transparent" />
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-3">
            {KRU_CURRICULUM.map((item, i) => (
              <ScrollReveal key={item.limb} delay={(i % 3) + 1}>
                <div className="group flex items-start gap-5 border border-ember/10 bg-panel/80 p-5 transition-all duration-300 hover:border-ember/35 hover:bg-panel">
                  <div className="shrink-0 text-center">
                    <p className="font-display text-xl text-ember">{item.limb}</p>
                    <p className="font-mono text-[9px] tracking-[0.15em] text-steel uppercase">{item.thai}</p>
                  </div>
                  <div className="h-px w-8 shrink-0 self-center bg-ember/30 transition-all group-hover:w-12 group-hover:bg-ember" />
                  <p className="text-steel transition-colors group-hover:text-white">{item.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}