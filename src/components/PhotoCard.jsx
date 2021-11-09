import React from 'react'
import { ImgWrapper, Img, Article } from './styles/styledPhotoCard'
import { useNearScreen } from '../hooks/useNearScreen'
import { FavButton } from './FavButton'
import { ToggleLikeMutation } from '../container/ToggleLikeMutation'
import { Link } from 'react-router-dom'

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

export { PhotoCard }
