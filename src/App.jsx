import React, { useContext } from 'react'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { NavBar } from './components/NavBar'

import { Detail } from './pages/Detail'
import { Favorites } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegistered'
import { AppContext } from './Context/Context'

const App = () => {
  const { isAuth } = useContext(AppContext)

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favs' element={isAuth ? <Favorites /> : <NotRegisteredUser />} />
        <Route path='/user' element={isAuth ? <User /> : <NotRegisteredUser />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  )
}

export { App }
