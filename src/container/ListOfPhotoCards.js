import { useQuery } from '@apollo/client'
import { getPhotos } from '../hoc/hocForPhotos'

const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(getPhotos, {
    variables: { categoryId }
  })

  return { loading, error, data }
}

export { ListOfPhotoCards }
