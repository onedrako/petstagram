import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCardsComponent'
import { Layout } from '../components/Layout'

const HomePage = ({ children }) => {
  return (
    <Layout title='PetGram tu App de Fotos de Mascotas' subtitle='Con petgram puedes encontrar animales Guay'>
      <ListOfCategories />
      <ListOfPhotoCardsComponent />
      {children}
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
