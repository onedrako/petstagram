import { useEffect, useState, useRef } from 'react'

const useNearScreen = () => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
      })
      observer.observe(element.current)
    })
  }, [element])

  return [show, element]
}

export { useNearScreen }
