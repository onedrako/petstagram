import React, { createContext, useState } from 'react'

const AppContext = createContext(null)

const AppProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false)

  const activateAuth = () => setIsAuth(true)

  return (
    <AppContext.Provider value={{ isAuth, activateAuth }}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
