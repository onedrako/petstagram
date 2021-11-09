import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from '../components/Layout'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams()
  return (
    <Layout title={`Fotografia ${id}`}>
      <PhotoCardWithQuery />
    </Layout>
  )
}

export { Detail }
