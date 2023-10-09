import { useEffect, useState } from 'react'

function useIntersectionObserver(
  elementRef,
  threshold = 0.1,
  root = null,
  rootMargin = '0%',
) {
  const [isIntersected, setIsIntersected] = useState(false)

  useEffect(() => {
    const element = elementRef?.current

    if (!element) {
      return
    }

    const handleIntersection = entries => {
      entries.forEach(entry => {
        setIsIntersected(entry.isIntersecting)
      })
    }

    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(handleIntersection, observerParams)

    observer.observe(element)

    return () => {
      observer.disconnect()
    }

  }, [elementRef, threshold, root, rootMargin])

  return isIntersected
}

export default useIntersectionObserver
