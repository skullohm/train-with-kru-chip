import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import KruLanding from './pages/KruLanding'
import SeminarsPage from './pages/SeminarsPage'
import SupportPage from './pages/SupportPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kru" element={<KruLanding />} />
        <Route path="/seminars" element={<SeminarsPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </BrowserRouter>
  )
}
