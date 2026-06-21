import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import KruLanding from './pages/KruLanding'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kru" element={<KruLanding />} />
      </Routes>
    </BrowserRouter>
  )
}