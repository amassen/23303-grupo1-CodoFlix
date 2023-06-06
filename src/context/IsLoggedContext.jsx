import { createContext, useState } from 'react'

const IsLoggedContext = createContext()

// para simular que ya esta logueado el usuario, usar true
// para ver si no esta logueado usar null
const initialState = true

const IsLoggedProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(initialState)

  const handleIsLogedd = () => {
    if (isLogged) {
      setIsLogged(null)
    } else {
      setIsLogged(true)
    }
  }

  const data = { isLogged, handleIsLogedd }

  return (
    <IsLoggedContext.Provider value={data}>{children}</IsLoggedContext.Provider>
  )
}

export { IsLoggedProvider }
export default IsLoggedContext
