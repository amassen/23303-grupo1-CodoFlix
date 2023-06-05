import { createContext, useState } from 'react'

const AuthContext = createContext()

// para simular que ya esta logueado el usuario, usar true
// para ver si no esta logueado usar null
const initialAuth = null

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth)

  const handleAuth = (e) => {
    if (auth) {
      setAuth(null)
    } else {
      setAuth(true)
    }
  }

  const data = { auth, handleAuth }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export { AuthProvider }
export default AuthContext
