import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCardsComponent'
import { Helmet } from 'react-helmet'
import { Layout } from '../components/Layout'

const Home = ({ children }) => {
  return (
    <Layout title='PetGram tu App de Fotos de Mascotas' subtitle='Con petgram puedes encontrar animales Guay'>
      <ListOfCategories />
      <ListOfPhotoCardsComponent />
      {children}
    </Layout>
  )
}

export { Home }
