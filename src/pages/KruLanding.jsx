import BackgroundEffects from '../components/BackgroundEffects'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import KruNavbar from '../components/kru/KruNavbar'
import KruHero from '../components/kru/KruHero'
import KruMarquee from '../components/kru/KruMarquee'
import KruPhilosophy from '../components/kru/KruPhilosophy'
import KruCurriculum from '../components/kru/KruCurriculum'
import KruStudentPath from '../components/kru/KruStudentPath'
import KruCta from '../components/kru/KruCta'
import KruFooter from '../components/kru/KruFooter'

export default function KruLanding() {
  useDocumentMeta({
    title: 'Train With Kru Chip | Surgeon Muay Thai',
    robots: 'noindex, nofollow',
  })

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