import Navbar from './Navbar'
import Footer from './Footer'
import BackgroundEffects from './BackgroundEffects'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function InfoPageLayout({ title, description, children }) {
  useDocumentMeta({ title: `${title} | Surgeon Muay Thai`, robots: 'index, follow' })
  return (
    <div className="relative">
      <BackgroundEffects />
      <div className="relative z-10">
        <Navbar />
        <main className="mx-auto max-w-7xl px-5 pt-36 pb-24 lg:px-8">
          <header className="mb-14">
            <h1 className="font-display text-6xl tracking-wide text-ember md:text-7xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-xl text-steel">{description}</p>
          </header>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
