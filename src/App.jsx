import React, { useContext, Suspense } from 'react'

import { Logo } from './components/Logo'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
// import { Favorites } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegistered'
import { NotFound } from './pages/NotFound'

import { AppContext } from './Context/Context'

const Favorites = React.lazy(() => import('./pages/Favs'))

const App = () => {
  const { isAuth } = useContext(AppContext)

  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/pet/:id' element={<Home />} />
          <Route exact path='/detail/:id' element={<Detail />} />
          <Route exact path='/favs' element={isAuth ? <Favorites /> : <Navigate replace to='/login' />} />
          <Route exact path='/user' element={isAuth ? <User /> : <Navigate replace to='/login' />} />
          <Route exact path='/login' element={!isAuth ? <NotRegisteredUser /> : <Navigate replace to='/' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <NavBar />
      </Suspense>
    </BrowserRouter>
  )
}

export { App }
