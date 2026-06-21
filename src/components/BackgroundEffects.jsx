const SPARKS = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 4.13 + 3) % 100}%`,
  top: `${(i * 7.29 + 11) % 100}%`,
  delay: `${(i * 0.47) % 6}s`,
  duration: `${2.5 + (i % 5) * 0.6}s`,
  dx: `${-30 + (i % 7) * 12}px`,
  dy: `${-60 - (i % 4) * 20}px`,
}))

const EMBERS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 5.55 + 2) % 100}%`,
  delay: `${(i * 0.38) % 8}s`,
  duration: `${4 + (i % 6) * 0.5}s`,
  size: `${2 + (i % 3)}px`,
}))

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(107,0,0,0.35)_0%,transparent_50%),radial-gradient(ellipse_at_85%_20%,rgba(201,0,0,0.15)_0%,transparent_45%),radial-gradient(ellipse_at_50%_100%,rgba(107,0,0,0.2)_0%,transparent_55%)]" />

      <div className="industrial-grid absolute inset-0 opacity-[0.07]" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(201,0,0,0.4) 80px, rgba(201,0,0,0.4) 81px)',
        }}
      />

      {SPARKS.map((s) => (
        <span
          key={s.id}
          className="absolute h-1 w-1 rounded-full bg-ember"
          style={{
            left: s.left,
            top: s.top,
            '--dx': s.dx,
            '--dy': s.dy,
            animation: `spark-drift ${s.duration} ease-out ${s.delay} infinite`,
          }}
        />
      ))}

      {EMBERS.map((e) => (
        <span
          key={e.id}
          className="absolute rounded-full bg-ember-glow/60 animate-fade-glow"
          style={{
            left: e.left,
            bottom: '-4px',
            width: e.size,
            height: e.size,
            animation: `float-slow ${e.duration} ease-in-out ${e.delay} infinite`,
          }}
        />
      ))}

      <div className="scanlines absolute inset-0 opacity-25 mix-blend-overlay" />
    </div>
  )
}