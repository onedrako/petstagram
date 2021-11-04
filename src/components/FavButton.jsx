import React from 'react'
import { Button } from './styles/StyledButton'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}

export { FavButton }
