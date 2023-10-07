import { useEffect, useState } from 'react'

function useDelayUnmount(isMounted, delayTime, onUnmount) {
  const [ shouldRender, setShouldRender ] = useState(false)

  useEffect(() => {
    let timer

    if (isMounted && !shouldRender) {
      setShouldRender(true)
    }
    else if(!isMounted && shouldRender) {
      timer = setTimeout(() => {
        setShouldRender(false)
        onUnmount?.()
      }, delayTime)
    }

    return () =>{
      clearTimeout(timer)
    }
  }, [isMounted, delayTime, shouldRender])

  return shouldRender
}

export default useDelayUnmount
