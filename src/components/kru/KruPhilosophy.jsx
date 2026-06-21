import { KRU_PHILOSOPHY } from '../../data/kruContent'
import ScrollReveal from '../ScrollReveal'

export default function KruPhilosophy() {
  return (
    <section id="philosophy" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-xs tracking-[0.35em] text-ember uppercase">Teaching Philosophy</p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-white md:text-6xl">
            THE <span className="text-glow-ember text-ember">KRU</span> WAY
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {KRU_PHILOSOPHY.map((item, i) => (
            <ScrollReveal key={item.title} delay={(i % 3) + 1}>
              <article className="group hud-corner h-full border border-ember/15 bg-panel p-8 transition-all duration-500 hover:border-ember/40 hover:box-glow-ember">
                <span className="font-display text-5xl text-garnet transition-colors group-hover:text-ember">
                  {item.icon}
                </span>
                <h3 className="mt-4 font-display text-2xl tracking-wider text-white">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-steel">{item.text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={2}>
          <blockquote className="mt-16 border-l-2 border-ember bg-garnet/10 p-8 md:p-10">
            <p className="font-display text-2xl tracking-wide text-white md:text-3xl">
              "I don't just teach you how to fight. I teach you how to be a nak muay."
            </p>
            <cite className="mt-4 block font-mono text-xs tracking-[0.2em] text-ember not-italic uppercase">
              — Kru Chip "The Surgeon" Moraza-Pollard
            </cite>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  )
}