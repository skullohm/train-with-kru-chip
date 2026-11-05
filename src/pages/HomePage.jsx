import BackgroundEffects from '../components/BackgroundEffects'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MarqueeTape from '../components/MarqueeTape'
import AboutChip from '../components/AboutChip'
import Gym from '../components/Gym'
import Events from '../components/Events'
import TrainBanner from '../components/TrainBanner'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FightCountdown from '../components/FightCountdown'
import MemberApp from '../components/MemberApp'

export default function HomePage() {
  useDocumentMeta({
    title: 'Train With Chip | Surgeon Muay Thai',
    robots: 'index, follow',
  })

  return (
    <div className="relative">
      <BackgroundEffects />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="border-y border-gold/30 bg-panel px-5 py-4">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
            <a href="/#events" className="font-mono text-sm text-gold">Dec 12 · House of Blues Boston · Moraza vs Djellab</a>
            <FightCountdown />
          </div>
        </div>
        <MarqueeTape />
        <AboutChip />
        <MarqueeTape />
        <Gym />
        <MemberApp />
        <TrainBanner />
        <Events />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
