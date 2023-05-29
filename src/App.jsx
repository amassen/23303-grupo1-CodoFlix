import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import './App.css'
import { Footer } from './components/template/Footer'
import { Header } from './components/template/Header'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
