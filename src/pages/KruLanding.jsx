import { useEffect } from 'react'
import BackgroundEffects from '../components/BackgroundEffects'
import KruNavbar from '../components/kru/KruNavbar'
import KruHero from '../components/kru/KruHero'
import KruMarquee from '../components/kru/KruMarquee'
import KruPhilosophy from '../components/kru/KruPhilosophy'
import KruCurriculum from '../components/kru/KruCurriculum'
import KruStudentPath from '../components/kru/KruStudentPath'
import KruCta from '../components/kru/KruCta'
import KruFooter from '../components/kru/KruFooter'

export default function KruLanding() {
  useEffect(() => {
    document.title = 'Train With Kru Chip | Surgeon Muay Thai'
    return () => {
      document.title = 'Train With Chip | Surgeon Muay Thai'
    }
  }, [])

  return (
    <div className="relative">
      <BackgroundEffects />
      <div className="relative z-10">
        <KruNavbar />
        <KruHero />
        <KruMarquee />
        <KruPhilosophy />
        <KruCurriculum />
        <KruStudentPath />
        <KruCta />
        <KruFooter />
      </div>
    </div>
  )
}