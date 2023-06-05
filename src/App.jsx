import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import { Home } from './pages/Home'
import { Footer } from './components/template/footer/Footer'
import { Header } from './components/template/header/Header'
import { LoginRegistrarse } from './pages/LoginRegistrarse'
import { Registrarse } from './pages/Registrarse'
import { Reproducir } from './pages/Reproducir'
import { Review } from './pages/Review'
import { PanelUsuarioFavoritos } from './pages/PanelUsuarioFavoritos'
import { PanelUsuarioDatos } from './pages/PanelUsuarioDatos'
import { AdminUsuarios } from './pages/AdminUsuarios'
import { AdminPeliculas } from './pages/AdminPeliculas'
import { Error } from './pages/Error'
import AuthContext from './context/AuthContext'
import './App.css'
function App() {
  const { auth } = useContext(AuthContext)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-registrarse" element={<LoginRegistrarse />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/reproducir" element={<Reproducir />} />
          <Route path="/review" element={<Review />} />
          <Route
            path="/panel-usuario-favoritos"
            element={auth ? <PanelUsuarioFavoritos /> : <Home />}
          />
          <Route
            path="/panel-usuario-datos"
            element={auth ? <PanelUsuarioFavoritos /> : <Home />}
          />
          <Route path="/admin-usuarios" element={<AdminUsuarios />} />
          <Route path="/admin-peliculas" element={<AdminPeliculas />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
