import React from 'react'
import { ImgWrapper, Img, Article } from './styles/styledPhotoCard'
import { useNearScreen } from '../hooks/useNearScreen'
import { FavButton } from './FavButton'
import { ToggleLikeMutation } from '../container/ToggleLikeMutation'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt='' />
              </ImgWrapper>
            </Link>

            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFavClick = () => {
                    toggleLike({ variables: { input: { id } } })
                  }

                  return (
                    <FavButton
                      liked={liked}
                      likes={likes}
                      onClick={handleFavClick}
                    />
                  )
                }
              }
            </ToggleLikeMutation>
          </>
    }
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }
    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}

export { PhotoCard }
