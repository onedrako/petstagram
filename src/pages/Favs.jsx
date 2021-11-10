import React from 'react'
import { RenderFavorites } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export default () => {
  return (
    <Layout title='Tus favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
      <RenderFavorites />
    </Layout>
  )
}
