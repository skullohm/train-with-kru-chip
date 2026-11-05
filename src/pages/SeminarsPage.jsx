import InfoPageLayout from '../components/InfoPageLayout'
import InquiryForm from '../components/InquiryForm'

const SUPPORT_FORM_KEY = 'bb8b342c-f6e5-40d1-a71b-a83841339daa'
// Add entries with date, hostGym, city, and detailsUrl when dates are confirmed.
const SEMINARS = []
const TOPICS = [
  { title: 'Precision Striking', description: 'The Surgeon system: accuracy, timing, shot selection.' },
  { title: 'Clinch and Knees', description: 'Real Muay Thai clinch work: control and damage.' },
  { title: 'Fight IQ', description: 'Reading opponents, building a game plan, championship mindset.' },
]

export default function SeminarsPage() {
  return (
    <InfoPageLayout title="SEMINARS" description="World champion instruction, brought to your gym.">
      <section aria-labelledby="upcoming-seminars">
        <h2 id="upcoming-seminars" className="font-display text-3xl tracking-wider text-white">UPCOMING</h2>
        <div className="mt-6 grid gap-6">
          {SEMINARS.length ? SEMINARS.map(seminar => (
            <article key={`${seminar.date}-${seminar.hostGym}`} className="hud-corner border border-ember/20 bg-panel p-8">
              <p className="font-mono text-gold">{seminar.date}</p>
              <h3 className="mt-3 font-display text-3xl text-white">{seminar.hostGym}</h3>
              <p>{seminar.city}</p>
              <a href={seminar.detailsUrl} className="mt-4 inline-block text-ember underline">View details</a>
            </article>
          )) : (
            <div className="hud-corner border border-ember/20 bg-panel p-8 text-lg">No seminars on the books right now. New dates get posted here first.</div>
          )}
        </div>
      </section>
      <section aria-label="Seminar training topics" className="my-16 grid gap-6 md:grid-cols-3">
        {TOPICS.map(topic => (
          <article key={topic.title} className="border border-ember/20 bg-panel p-6">
            <h2 className="font-display text-3xl tracking-wider text-white">{topic.title}</h2>
            <p className="mt-4 text-lg">{topic.description}</p>
          </article>
        ))}
      </section>
      <section aria-labelledby="host-seminar" className="max-w-2xl">
        <h2 id="host-seminar" className="font-display text-4xl tracking-wider text-ember">HOST A SEMINAR</h2>
        <p className="mt-3 mb-6 text-xl">Own a gym? Bring Kru Chip to your mats.</p>
        <InquiryForm accessKey={SUPPORT_FORM_KEY} subject="Seminar Inquiry" fields={[
          { name: 'name', label: 'Name' },
          { name: 'gym_name', label: 'Gym name' },
          { name: 'city', label: 'City' },
          { name: 'email', label: 'Email', type: 'email' },
          { name: 'message', label: 'Message', type: 'textarea' },
        ]} buttonLabel="Send Inquiry" successMessage="Got it. We'll be in touch about dates." />
      </section>
    </InfoPageLayout>
  )
}
