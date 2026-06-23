import BackgroundEffects from '../components/BackgroundEffects'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'
import { PROJECTS } from '../data/content'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function ProjectsPage() {
  useDocumentMeta({
    title: 'Projects | Surgeon Muay Thai',
    robots: 'index, follow',
  })

  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />
      <div className="relative z-10">
        <Navbar />

        <header className="border-b border-ember/15 pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
            <ScrollReveal>
              <p className="font-mono text-xs tracking-[0.35em] text-ember uppercase">Tools & Apps</p>
              <h1 className="mt-4 font-display text-5xl tracking-wide text-white md:text-7xl">
                <span className="text-glow-ember text-ember">PROJECTS</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg text-steel md:text-xl">
                Small apps built for fighters and fans — training tools and Muay Thai culture, crafted with care.
              </p>
            </ScrollReveal>
          </div>
        </header>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {PROJECTS.map((project, i) => (
                <ProjectCard key={project.id} project={project} delay={(i % 2) + 1} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}