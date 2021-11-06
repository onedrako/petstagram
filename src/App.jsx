import React from 'react'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './components/styles/GlobalStyles'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:id' element={<PhotoCardWithQuery />} />
      </Routes>
    </BrowserRouter>
  )
}

export { App }
