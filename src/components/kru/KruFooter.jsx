import { GYM } from '../../data/content'

export default function KruFooter() {
  return (
    <footer className="border-t border-ember/15 bg-panel py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 md:flex-row lg:px-8">
        <p className="font-mono text-[10px] tracking-[0.15em] text-steel/60 uppercase">
          © {new Date().getFullYear()} Surgeon Muay Thai · Kru Chip
        </p>
        <div className="flex gap-4">
          <a href={GYM.socials.instagram} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-[0.15em] text-steel uppercase hover:text-ember">
            @surgeonmuaythai
          </a>
          <a href={GYM.socials.chipInstagram} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-[0.15em] text-steel uppercase hover:text-ember">
            @chipthesurgeon
          </a>
        </div>
      </div>
    </footer>
  )
}