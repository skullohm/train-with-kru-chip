import { MARQUEE_ITEMS } from '../data/content'

export default function MarqueeTape() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className="relative z-20 overflow-hidden border-y border-ember/30 bg-garnet/40 py-2.5 backdrop-blur-sm">
      <div className="flex w-max animate-marquee">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-6 flex items-center gap-6 font-mono text-xs tracking-[0.25em] text-white/90 uppercase"
          >
            <span className="text-glow-subtle">{item}</span>
            <span className="text-ember" aria-hidden="true">
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}