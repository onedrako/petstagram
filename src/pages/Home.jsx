import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

const Home = ({ id }) => {
  return (
    <>

      <ListOfCategories />
      <ListOfPhotoCardsComponent categoryId={id} />
    </>
  )
}

export { Home }
