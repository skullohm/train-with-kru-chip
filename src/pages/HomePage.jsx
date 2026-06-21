import BackgroundEffects from '../components/BackgroundEffects'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MarqueeTape from '../components/MarqueeTape'
import AboutChip from '../components/AboutChip'
import Gym from '../components/Gym'
import Events from '../components/Events'
import TrainBanner from '../components/TrainBanner'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="relative">
      <BackgroundEffects />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <MarqueeTape />
        <AboutChip />
        <MarqueeTape />
        <Gym />
        <TrainBanner />
        <Events />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}