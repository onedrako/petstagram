import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCardsComponent'

const Home = () => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCardsComponent />
    </>
  )
}

export { Home }
