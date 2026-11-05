import CtaButton from './CtaButton'
import ScrollReveal from './ScrollReveal'

export default function MemberApp() {
  return (
    <section aria-labelledby="member-app-title" className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
      <ScrollReveal>
        <div className="flex flex-col justify-between gap-6 border border-gold/30 bg-panel p-6 md:flex-row md:items-center md:p-8">
          <div>
            <h2 id="member-app-title" className="font-display text-3xl tracking-wider text-gold">MEMBER APP</h2>
            <p className="mt-3 max-w-xl text-lg">Already a member? Your class schedule, check-ins, and training home live in the ChipOS app.</p>
          </div>
          <CtaButton href="https://app.kruchip.com" variant="gold">Open the App</CtaButton>
        </div>
      </ScrollReveal>
    </section>
  )
}
