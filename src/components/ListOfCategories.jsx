import React, { useState, useEffect } from 'react'
import { Category } from './Category'
import { List, Item } from './styles/stylesListCategories'
// import { categories as mockCategories } from '../../api/db.json'

function useCategoriesData () {
  const [categories, setCategories] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://petgramapionedrako.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      }
      )
  }, [])

  return { categories, loading }
}

const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'><Category /></Item>
          : categories.map(category =>
            <Item key={category.id}>
              <Category {...category} path={`/?pet=${category.id}`} />
            </Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export { ListOfCategories }
