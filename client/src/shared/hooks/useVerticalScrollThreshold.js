import { useEffect, useState } from 'react'

function useVerticalScrollThreshold(threshold) {
  const [isThresholdReached, setIsThresholdReached] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentVerticalScroll = window.scrollY

      setIsThresholdReached(currentVerticalScroll >= threshold)
    }

    window.addEventListener('scroll',handleScroll)

    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  }, [threshold])

  return isThresholdReached
}

export default useVerticalScrollThreshold
