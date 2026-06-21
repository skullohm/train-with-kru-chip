import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ScrollReveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const { ref, visible } = useScrollReveal()
  const delayClass = delay ? `reveal-delay-${Math.min(delay, 4)}` : ''

  return (
    <Tag
      ref={ref}
      className={`reveal-hidden ${visible ? 'reveal-visible' : ''} ${delayClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  )
}