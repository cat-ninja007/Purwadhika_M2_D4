import './App.css'
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage/ContactPage'
import LandingPage from './pages/LandingPage/LandingPage'

function App() {
  
  return (
    <>
      {/* <LandingPage /> */}
      {/* <ContactPage /> */}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
