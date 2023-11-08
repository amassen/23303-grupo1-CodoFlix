

import { createContext, useState } from 'react'

const IsLoggedContext = createContext()

// para simular que ya esta logueado el usuario, usar true
// para ver si no esta logueado usar null

// const initialState = null
// si comento el initialState no termina haciendo nada al final 13/07/2023

export const IsLoggedProvider = ({ children }) => {

const [isLogged, setIsLogged] = useState(initialState)
}

  const handleIsLogedd = ({children}) => {
    if (isLogged) {
      setIsLogged(null)
    } else {
      setIsLogged(true)
    }
  

  const data = { isLogged, handleIsLogged }

  return (
    <IsLoggedContext.Provider value={data}>{children}</IsLoggedContext.Provider>
  )
}


// export {  handleIsLogedd }
export default IsLoggedContext