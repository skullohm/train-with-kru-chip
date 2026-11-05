import { Link } from 'react-router-dom'
import InfoPageLayout from '../components/InfoPageLayout'

export default function NotFoundPage() {
  return (
    <InfoPageLayout title="This Page Does Not Exist" description="The page you're looking for could not be found.">
      <Link to="/" className="text-ember underline">Return home</Link>
    </InfoPageLayout>
  )
}
