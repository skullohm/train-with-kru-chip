import { useEffect, useState } from 'react'

// December is Eastern Standard Time (UTC-5), independent of the visitor's zone.
const FIGHT_TIME = Date.parse('2026-12-12T18:00:00-05:00')

export default function FightCountdown() {
  const [remaining, setRemaining] = useState(() => Math.max(0, FIGHT_TIME - Date.now()))
  useEffect(() => {
    const timer = setInterval(() => setRemaining(Math.max(0, FIGHT_TIME - Date.now())), 1000)
    return () => clearInterval(timer)
  }, [])
  const seconds = Math.floor(remaining / 1000)
  const units = [
    ['days', Math.floor(seconds / 86400)],
    ['hours', Math.floor(seconds / 3600) % 24],
    ['minutes', Math.floor(seconds / 60) % 60],
    ['seconds', seconds % 60],
  ]
  return (
    <div role="timer" aria-label="Countdown to December 12, 2026, 6 PM Eastern" className="flex flex-wrap gap-4 font-mono text-gold tabular-nums">
      {units.map(([label, value]) => (
        <span key={label}><strong className="text-xl">{String(value).padStart(2, '0')}</strong> <span className="text-xs">{label}</span></span>
      ))}
    </div>
  )
}
