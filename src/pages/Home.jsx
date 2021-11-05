import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCardsComponent'

const Home = (path) => {
  console.log('path in home ' + path)
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCardsComponent categoryId={path.id} />
    </>
  )
}

export { Home }
