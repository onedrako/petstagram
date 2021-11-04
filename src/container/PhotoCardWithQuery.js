import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql, useQuery } from '@apollo/client'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked  
  }
}
`

const renderProp = ({ loading, error, data }) => {
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <PhotoCard {...data.photo} />
  )
}

const PhotoCardWithQuery = ({ id }) => {
  console.log(id)
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: {
      id: id
    }
  })

  return renderProp({ loading, error, data })
}

export { PhotoCardWithQuery }
