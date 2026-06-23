import { GYM, SITE } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-ember/20 bg-panel">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src="/images/smt-logo.svg" alt="" className="h-12 w-12" />
              <div>
                <p className="font-display text-2xl tracking-wider text-white">SURGEON MUAY THAI</p>
                <p className="font-mono text-[10px] tracking-[0.25em] text-ember uppercase">{SITE.tagline}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-steel">{SITE.theme}</p>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] text-ember uppercase">Quick Links</p>
            <ul className="mt-4 space-y-2">
              {['/', '/#about', '/#gym', '/#events', '/#contact', '/projects'].map((href) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-steel transition-colors hover:text-ember"
                  >
                    {href === '/' ? 'Home' : href.replace('/#', '').replace('/', '').charAt(0).toUpperCase() + href.replace('/#', '').replace('/', '').slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] text-ember uppercase">Connect</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={`mailto:${GYM.email}`} className="text-sm text-steel transition-colors hover:text-ember">
                  {GYM.email}
                </a>
              </li>
              <li>
                <a
                  href={GYM.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-steel transition-colors hover:text-ember"
                >
                  @surgeonmuaythai
                </a>
              </li>
              <li>
                <a
                  href={GYM.socials.chipInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-steel transition-colors hover:text-ember"
                >
                  @chipthesurgeon
                </a>
              </li>
              <li>
                <a
                  href="https://fight-forge-rounds.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-steel transition-colors hover:text-ember"
                >
                  F2F Timer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-steel/10 pt-8 md:flex-row">
          <p className="font-mono text-[10px] tracking-[0.15em] text-steel/60 uppercase">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="font-mono text-[10px] tracking-[0.2em] text-ember/60 uppercase">
            WBC World Champion · Kru Chip "The Surgeon" Moraza-Pollard
          </p>
        </div>
      </div>
    </footer>
  )
}