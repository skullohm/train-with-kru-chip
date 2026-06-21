import { useState } from 'react'
import { GYM, WEB3FORMS } from '../data/content'
import CtaButton from './CtaButton'
import ScrollReveal from './ScrollReveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(WEB3FORMS.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS.accessKey,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Training Inquiry from ${form.name}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const buttonLabel = {
    idle: 'Send Message',
    sending: 'Sending...',
    success: 'Message Sent!',
    error: 'Try Again',
  }[status]

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
              action={WEB3FORMS.endpoint}
              method="POST"
              onSubmit={handleSubmit}
              className="hud-corner border border-ember/20 bg-panel-light p-6 md:p-8"
            >
              <input type="hidden" name="access_key" value={WEB3FORMS.accessKey} />

              <p className="font-mono text-xs tracking-[0.25em] text-ember uppercase">Send a Message</p>

              {status === 'success' && (
                <p className="mt-4 border border-ember/30 bg-garnet/20 px-4 py-3 text-sm text-white">
                  Thanks for reaching out! We'll get back to you soon.
                </p>
              )}

              {status === 'error' && (
                <p className="mt-4 border border-ember/50 bg-garnet/30 px-4 py-3 text-sm text-white">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <div className="mt-6 space-y-5">
                <label className="block">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-steel uppercase">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={status === 'sending'}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full border border-steel/20 bg-void px-4 py-3 text-white outline-none transition-colors focus:border-ember disabled:opacity-50"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-steel uppercase">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={status === 'sending'}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full border border-steel/20 bg-void px-4 py-3 text-white outline-none transition-colors focus:border-ember disabled:opacity-50"
                    placeholder="you@email.com"
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-steel uppercase">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    disabled={status === 'sending'}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full resize-none border border-steel/20 bg-void px-4 py-3 text-white outline-none transition-colors focus:border-ember disabled:opacity-50"
                    placeholder="Tell us about your training goals..."
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="cta-shadow mt-6 w-full bg-ember px-8 py-3.5 font-display text-lg tracking-[0.12em] text-white uppercase transition-all hover:bg-ember-glow hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
              >
                {buttonLabel}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}