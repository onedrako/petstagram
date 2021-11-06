import React from 'react'
import { PhotoCard } from './PhotoCard'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { useParams } from 'react-router'

const ListOfPhotoCardsComponent = () => {
  const { id } = useParams()
  const categoryId = id

  const { loading, error, data } = ListOfPhotoCards({ categoryId })

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}

export { ListOfPhotoCardsComponent }
