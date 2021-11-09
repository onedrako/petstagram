import React from 'react'
import { RenderFavorites } from '../container/GetFavorites'
import { Helmet } from 'react-helmet'
import { Layout } from '../components/Layout'

export const Favorites = () => {
  return (
    <Layout title='Tus favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
      <RenderFavorites />
    </Layout>
  )
}
