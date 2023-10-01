import { forwardRef, useEffect, useImperativeHandle } from 'react'
import lottie from 'lottie-web'
import PropTypes from 'prop-types'
import { isNumber } from 'shared/utils'

function Lottie ({
  animationData,
  animationSpeed,
  loop = false,
  autoplay = false,
  renderer = 'canvas',
  styles
}, ref) {
  let lottiElementRef
  let animation

  useImperativeHandle(ref, () => {
    const maxFrame = animationData?.op
    const middleFrame = Math.floor(animationData?.op / 2)

    return {
      play: () => {
        animation?.stop()
        animation?.play()
      },
      stop: () => {
        animation?.stop()
      },
      playFirstPart: () => {
        animation?.playSegments([1, middleFrame], true)
      },
      playSecondPart: () => {
        animation?.playSegments([middleFrame, maxFrame], true)
      }
    }
  }, [animationData?.op])

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

  useEffect(() => {
    if ((isNumber(animationSpeed))) {
      animation?.setSpeed(animationSpeed)
    }
  }, [animation, animationSpeed])

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
  animationSpeed: PropTypes.number,
  loop: PropTypes.bool,
  autoplay: PropTypes.bool,
  renderer: PropTypes.oneOf(['canvas', 'svg']),
  styles: PropTypes.object,
}

const forwardedLottie = forwardRef(Lottie)

export default forwardedLottie
