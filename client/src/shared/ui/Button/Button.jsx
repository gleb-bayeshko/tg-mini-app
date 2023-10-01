import { useRef } from 'react'
import PropTypes from 'prop-types'
import { Ripple } from 'shared/ui/Ripple'
import { getClassName } from 'shared/utils'
import './styles.css'

function Button({
  type = 'default',
  color,
  onClick,
  className,
  styles,
  children,
  ...other
}) {
  const buttonRef = useRef()
  const rippleRef = useRef()

  const handleButtonClick = e => {
    rippleRef.current?.triggerRippleAnimation(e)
    onClick?.()
  }

  return (
    <button
      ref={buttonRef}
      onClick={handleButtonClick}
      className={getClassName(
        'button',
        `button_type-${type}`,
        {
          [`${className}`]: !!className,
          [`button_color-${color}`]: !!color,
        }
      )}
      style={styles}
      {...other}
    >
      <div className="button__content">
        {children}
      </div>
      <Ripple
        ref={rippleRef}
        color={color === 'white' ? 'var(--gray-color-transparent-extra)' : null}
      />
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['default, success, danger']),
  size: PropTypes.oneOf(['sm', 'm', 'lg']),
  color: PropTypes.oneOf(['pink', 'orange', 'yellow', 'green', 'blue', 'violet', 'white']),
  onClick: PropTypes.func,
  styles: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
}

export default Button
