import { useState } from 'react'
import { GYM } from '../data/content'
import CtaButton from './CtaButton'
import ScrollReveal from './ScrollReveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Training Inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${GYM.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-garnet/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <ScrollReveal>
              <p className="font-mono text-xs tracking-[0.35em] text-ember uppercase">Contact</p>
              <h2 className="mt-3 font-display text-5xl tracking-wide text-white md:text-6xl">
                STEP INTO <span className="text-glow-ember text-ember">THE RING</span>
              </h2>
              <p className="mt-6 text-lg text-steel">
                Ready to train with a world champion? Reach out or book your first class today.
                No ego. Just work.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="mt-10 space-y-6">
                <div className="hud-corner border border-ember/15 bg-panel p-5">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-ember uppercase">Address</p>
                  <p className="mt-2 text-lg text-white">{GYM.address}</p>
                </div>
                <div className="hud-corner border border-ember/15 bg-panel p-5">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-ember uppercase">Email</p>
                  <a
                    href={`mailto:${GYM.email}`}
                    className="mt-2 block text-lg text-white transition-colors hover:text-ember"
                  >
                    {GYM.email}
                  </a>
                </div>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(GYM.socials).map(([key, url]) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-steel/20 px-4 py-2 font-mono text-[10px] tracking-[0.15em] text-steel uppercase transition-all hover:border-ember hover:text-ember"
                    >
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="mt-10">
                <CtaButton href={GYM.bookingUrl} external variant="primary">
                  Book Your First Class
                </CtaButton>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={1}>
            <form
              onSubmit={handleSubmit}
              className="hud-corner border border-ember/20 bg-panel-light p-6 md:p-8"
            >
              <p className="font-mono text-xs tracking-[0.25em] text-ember uppercase">Send a Message</p>

              <div className="mt-6 space-y-5">
                <label className="block">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-steel uppercase">Name</span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full border border-steel/20 bg-void px-4 py-3 text-white outline-none transition-colors focus:border-ember"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-steel uppercase">Email</span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full border border-steel/20 bg-void px-4 py-3 text-white outline-none transition-colors focus:border-ember"
                    placeholder="you@email.com"
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-steel uppercase">Message</span>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full resize-none border border-steel/20 bg-void px-4 py-3 text-white outline-none transition-colors focus:border-ember"
                    placeholder="Tell us about your training goals..."
                  />
                </label>
              </div>

              <button
                type="submit"
                className="cta-shadow mt-6 w-full bg-ember px-8 py-3.5 font-display text-lg tracking-[0.12em] text-white uppercase transition-all hover:bg-ember-glow hover:scale-[1.01]"
              >
                {submitted ? 'Opening Email...' : 'Send Message'}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}