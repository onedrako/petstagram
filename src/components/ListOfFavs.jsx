import React from 'react'
import { Link, Container, Image } from './styles/StyledFavorites'

const ListOfFavs = ({ favs = [] }) => {
  console.log(favs)
  return (
    <>
      <Container>
        {favs.map(fav => (
          <Link to={`/detail/${fav.id}`} key={fav.id}>
            <Image src={fav.src} alt='fav' />
          </Link>
        ))}
      </Container>
    </>
  )
}

export { ListOfFavs }
