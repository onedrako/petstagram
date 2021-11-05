import React from 'react'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './components/styles/GlobalStyles'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search) // parametro es la query stream de la barra de direcciones
  const detailId = urlParams.get('detail')
  console.log('detail' + detailId)

  const categoryId = urlParams.get('pet')
  console.log(typeof (categoryId))

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        {
          detailId && <Route path='/' element={<PhotoCardWithQuery id={detailId} />} />
        }
        {
          categoryId && <Route path='/' element={<Home id={categoryId} />} />
        }
        <Route exact path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export { App }

// <Routes>
// <>
//   <GlobalStyle />
//   <Logo />
//   {(detailId && (<PhotoCardWithQuery id={detailId} />) ||
// (<BrowserRouter>
//   <Route exact path='/' component={Home} />
//   <Route path='/pet/:id' component={Home} />
// </BrowserRouter>
// ))}
// </>
// </Routes>
