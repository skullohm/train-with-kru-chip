import CtaButton from './CtaButton'
import ScrollReveal from './ScrollReveal'

function TimerPreview() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-garnet/40 via-void to-panel">
      <div className="absolute inset-0 industrial-grid opacity-30" />
      <div className="relative text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-ember/50 animate-ring-pulse">
          <span className="font-display text-4xl tracking-wider text-ember text-glow-ember">3:00</span>
        </div>
        <p className="mt-4 font-mono text-[10px] tracking-[0.3em] text-steel uppercase">Round 1</p>
      </div>
    </div>
  )
}

function ColorPreview() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-void via-garnet/20 to-void">
      <div className="absolute inset-0 opacity-40" style={{
        background: 'conic-gradient(from 180deg, #c90000, #6b0000, #a0a0a0, #ffffff33, #c90000)',
      }} />
      <div className="relative h-20 w-20 rounded-full border-2 border-white/20 bg-void/60 backdrop-blur-sm" />
      <p className="absolute bottom-6 font-mono text-[10px] tracking-[0.3em] text-white/70 uppercase">Lucky Hue</p>
    </div>
  )
}

const PREVIEWS = {
  timer: TimerPreview,
  color: ColorPreview,
}

export default function ProjectCard({ project, delay = 0 }) {
  const Preview = PREVIEWS[project.preview] ?? TimerPreview

  return (
    <ScrollReveal delay={delay}>
      <article className="group hud-corner flex h-full flex-col overflow-hidden border border-ember/15 bg-panel transition-all duration-500 hover:border-ember/40 hover:box-glow-ember">
        <div className="relative h-48 overflow-hidden border-b border-ember/10 sm:h-52">
          <Preview />
          <div className="absolute top-3 left-3 border border-ember/30 bg-void/70 px-2 py-1 font-mono text-[9px] tracking-[0.2em] text-ember uppercase backdrop-blur-sm">
            Lovable App
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-8">
          <h3 className="font-display text-2xl tracking-wider text-white transition-colors group-hover:text-ember md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 flex-1 leading-relaxed text-steel">{project.description}</p>
          <div className="mt-6">
            <CtaButton href={project.url} external variant="primary" className="w-full sm:w-auto">
              Open App
            </CtaButton>
          </div>
        </div>
      </article>
    </ScrollReveal>
  )
}