import { GYM } from '../../data/content'
import { KRU_PATH } from '../../data/kruContent'
import CtaButton from '../CtaButton'
import ScrollReveal from '../ScrollReveal'

export default function KruStudentPath() {
  return (
    <section id="path" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          <p className="text-center font-mono text-xs tracking-[0.35em] text-ember uppercase">Your Journey</p>
          <h2 className="mt-3 text-center font-display text-5xl tracking-wide text-white md:text-6xl">
            ZERO TO <span className="text-glow-ember text-ember">NAK MUAY</span>
          </h2>
        </ScrollReveal>

        <div className="relative mt-16">
          <div className="absolute top-0 bottom-0 left-8 hidden w-px bg-gradient-to-b from-ember via-garnet to-transparent md:left-1/2 md:block" aria-hidden="true" />

          <div className="space-y-8">
            {KRU_PATH.map((step, i) => (
              <ScrollReveal key={step.step} delay={(i % 3) + 1}>
                <article
                  className={`relative grid items-center gap-6 md:grid-cols-2 md:gap-12 ${
                    i % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''
                  }`}
                >
                  <div className={`${i % 2 === 1 ? 'md:text-right' : ''}`}>
                    <span className="font-mono text-[10px] tracking-[0.25em] text-ember uppercase">
                      Step {step.step} · {step.duration}
                    </span>
                    <h3 className="mt-2 font-display text-3xl tracking-wider text-white">{step.title}</h3>
                    <p className="mt-1 font-mono text-xs tracking-[0.15em] text-steel uppercase">{step.level}</p>
                  </div>

                  <div className="hud-corner border border-ember/15 bg-panel p-6 transition-all duration-300 hover:border-ember/35 hover:box-glow-ember">
                    <p className="leading-relaxed text-steel">{step.description}</p>
                  </div>

                  <div
                    className="absolute left-8 hidden h-4 w-4 -translate-x-1/2 border border-ember bg-ember md:left-1/2 md:block"
                    aria-hidden="true"
                  />
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={2}>
          <div className="mt-20 text-center">
            <CtaButton href={GYM.bookingUrl} external variant="primary">
              Start Your Journey
            </CtaButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}