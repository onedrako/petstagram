import React from 'react'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search) // parametro es la query stream de la barra de direcciones
  const detailId = urlParams.get('detail')

  return (
    <>
      <Logo />
      {detailId
        ? (
          <>
            <PhotoCardWithQuery id={detailId} />
          </>
          )
        : (
          <BrowserRouter>
            <Routes>
              <Route path='/pet/:id' component={Home} />
              <Route path='/' component={Home} />
            </Routes>
          </BrowserRouter>
          )}
    </>
  )
}

export { App }
