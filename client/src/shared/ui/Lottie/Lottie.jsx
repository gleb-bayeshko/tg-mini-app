import { forwardRef, useEffect, useImperativeHandle } from 'react'
import lottie from 'lottie-web'
import PropTypes from 'prop-types'

function Lottie ({
  animationData,
  loop = false,
  autoplay = false,
  renderer = 'canvas',
  styles
}, ref) {
  let lottiElementRef
  let animation

  useImperativeHandle(ref, () => ({
    play: () => {
      animation?.stop()
      animation?.play()
    },
    stop: () => {
      animation?.stop()
    }
  }), [])

  useEffect(() => {
    animation = lottie.loadAnimation({
      animationData,
      autoplay,
      loop,
      renderer,
      container: lottiElementRef,
    })

    return () => {
      animation.destroy()
    }
  }, [])

  return (
    <div
      className="lottie"
      style={styles}
      ref={(r) => {
        lottiElementRef = r
      }}
    />
  )
}

Lottie.propTypes = {
  animationData: PropTypes.object.isRequired,
  loop: PropTypes.bool,
  autoplay: PropTypes.bool,
  renderer: PropTypes.oneOf(['canvas', 'svg']),
  styles: PropTypes.object
}

export default forwardRef(Lottie)
