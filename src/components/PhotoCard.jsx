import React from 'react'
import { ImgWrapper, Img, Button, Article } from './styles/styledPhotoCard'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useNearScreen } from '../hooks/useNearScreen'
import { FavButton } from './FavButton'
import { ToggleLikeMutation } from '../container/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`

  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} alt='' />
              </ImgWrapper>
            </a>

            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFavClick = () => {
                    !liked && toggleLike({ variables: { input: { id } } })
                    setLiked(!liked)
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
