import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCardsComponent'
import { useParams } from 'react-router-dom'

const Home = (path) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCardsComponent />
    </>
  )
}

export { Home }
