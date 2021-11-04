import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { GlobalStyle } from '../components/styles/GlobalStyles'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCardsComponent categoryId={1} />
    </>
  )
}

export { Home }
