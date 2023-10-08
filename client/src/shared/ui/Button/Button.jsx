import { useRef } from 'react'
import PropTypes from 'prop-types'
import { Ripple } from 'shared/ui/Ripple'
import { Spinner } from 'shared/ui/Spinner'
import { getClassName } from 'shared/utils'
import './styles.css'

function Button({
  styleType = 'filled',
  color = 'violet',
  onClick,
  className,
  styles,
  children,
  isLoading = false,
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
        `button_style-${styleType}`,
        {
          [className]: !!className,
          [`button_color-${color}`]: !!color,
        }
      )}
      style={styles}
      {...other}
    >
      {
        isLoading
          ? <Spinner />
          : (
            <>
              <div className="button__content">
                {children}
              </div>
              <Ripple
                ref={rippleRef}
                color={color === 'white' ? 'var(--gray-color-transparent-extra)' : null}
              />
            </>
          )
      }
    </button>
  )
}

Button.propTypes = {
  styleType: PropTypes.oneOf(['filled', 'outline']),
  size: PropTypes.oneOf(['sm', 'm', 'lg']),
  color: PropTypes.oneOf(['pink', 'orange', 'yellow', 'green', 'blue', 'violet', 'white']),
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  styles: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
}

export default Button
