import React from 'react'
import { Button } from './styles/StyledButton'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import PropTypes from 'prop-types'

const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export { FavButton }
