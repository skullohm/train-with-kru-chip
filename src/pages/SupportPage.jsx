import InfoPageLayout from '../components/InfoPageLayout'
import InquiryForm from '../components/InquiryForm'

const SUPPORT_FORM_KEY = 'bb8b342c-f6e5-40d1-a71b-a83841339daa'

export default function SupportPage() {
  return (
    <InfoPageLayout title="SUPPORT" description="Problems with the app, your account, or this site? Send it here and we'll sort it out.">
      <div className="max-w-2xl">
        <InquiryForm accessKey={SUPPORT_FORM_KEY} subject="Kruchip Support" fields={[
          { name: 'name', label: 'Name' },
          { name: 'email', label: 'Email', type: 'email' },
          { name: 'topic', label: 'Topic', options: ['App login', 'Schedule or check-in', 'Membership', 'Website problem', 'Something else'] },
          { name: 'message', label: 'Message', type: 'textarea' },
        ]} buttonLabel="Send Message" successMessage="Message received. We'll get back to you soon." />
        <p className="mt-5 text-sm">Gym members: you can always grab us at the gym too.</p>
      </div>
    </InfoPageLayout>
  )
}
