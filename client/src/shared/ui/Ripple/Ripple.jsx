import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const RIPPLE_ANIMATION_DURATION = 850

const Ripple = forwardRef(
  function Ripple({ color }, ref) {
    const [ripplesArray, setRipplesArray] = useState([])

    const addRipple = e => {
      const button = e.currentTarget.getBoundingClientRect()

      const diameter = Math.max(button.width, button.height)
      const radius = diameter / 2

      const x = e.pageX - button.x - radius
      const y = e.pageY - button.y - radius

      const newRipple = {
        x,
        y,
        diameter
      }

      setRipplesArray(prevState => [ ...prevState, newRipple])
    }

    useImperativeHandle(ref, () => ({ triggerRippleAnimation: addRipple }))

    useEffect(() => {
      const destroyRipplesTimer = setTimeout(() => {
        setRipplesArray([])
      }, RIPPLE_ANIMATION_DURATION)

      return () => {
        clearTimeout(destroyRipplesTimer)
      }
    }, [ripplesArray.length])

    return (
      <div className="ripple">
        {
          ripplesArray.map((ripple, i) => {
            return (
              <span
                key={`ripple-${i}`}
                style={{
                  top: ripple.y,
                  left: ripple.x,
                  width: ripple.diameter,
                  height: ripple.diameter,
                  background: color
                }}
              />
            )
          })}
      </div>
    )
  }
)

export default Ripple
