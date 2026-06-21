import { KRU_MARQUEE } from '../../data/kruContent'

export default function KruMarquee() {
  const items = [...KRU_MARQUEE, ...KRU_MARQUEE]

  return (
    <div className="relative z-20 overflow-hidden border-y border-ember/25 bg-void py-3">
      <div className="flex w-max animate-marquee">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-5 flex items-center gap-5 font-mono text-[11px] tracking-[0.3em] text-white/80 uppercase"
          >
            <span>{item}</span>
            <span className="text-ember">▸</span>
          </span>
        ))}
      </div>
    </div>
  )
}