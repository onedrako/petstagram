import React from 'react'
import { Link, Container, Image } from './styles/StyledFavorites'
import PropTypes from 'prop-types'

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

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}

export { ListOfFavs }
