export default function CtaButton({
  children,
  href,
  variant = 'primary',
  external = false,
  className = '',
  onClick,
}) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 overflow-hidden px-8 py-3.5 font-display text-lg tracking-[0.12em] uppercase transition-all duration-300'

  const variants = {
    primary:
      'cta-shadow bg-ember text-white hover:bg-ember-glow hover:scale-[1.03] active:scale-[0.98]',
    secondary:
      'border border-ember/60 bg-garnet/30 text-white backdrop-blur-sm hover:border-ember hover:bg-garnet/50',
    ghost: 'border border-steel/30 text-steel hover:border-ember/50 hover:text-white',
  }

  const inner = (
    <>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 -z-10 animate-pulse-neon bg-ember/20 blur-xl" />
      )}
    </>
  )

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {inner}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {inner}
    </button>
  )
}