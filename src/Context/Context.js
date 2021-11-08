import React, { createContext, useState } from 'react'

const AppContext = createContext(null)

const AppProvider = (props) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const activateAuth = (token) => {
    setIsAuth(true)
    window.sessionStorage.setItem('token', token)
  }

  return (
    <AppContext.Provider value={{ isAuth, activateAuth }}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
