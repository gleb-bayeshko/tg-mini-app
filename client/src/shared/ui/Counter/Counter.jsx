import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'shared/ui/Button'
import { getClassName } from 'shared/utils'
import './styles.css'

function Counter({
  buttonText = 'Add',
  size = 'default',
  onChange,
  className,
  initialValue,
}) {
  const [counter, setCounter] = useState(initialValue)

  const handleAddToCartClick = () => {
    setCounter(1)
  }

  const handleCounterDecrement = () => {
    setCounter(prev => prev === 0 ? 0 : prev - 1)
  }

  const handleCounterIncrement = () => {
    setCounter(prev => prev + 1)
  }

  useEffect(() => {
    onChange?.(counter)
  }, [counter, onChange])

  return (
    <div className={getClassName('counter', {
      [className]: !!className ,
      'counter_small': size === 'small'
    })}
    >
      <Button
        className={getClassName(
          'counter__button-add',
          { 'counter__button-add_hide': counter > 0 }
        )}
        color="yellow"
        onClick={handleAddToCartClick}
      >
        {buttonText}
      </Button>
      <div
        className={getClassName(
          'counter__controls',
          { 'counter_visible': counter > 0 }
        )}
      >
        <Button
          className="counter__button"
          color="yellow"
          onClick={handleCounterDecrement}
        >
            -
        </Button>
        <div className="counter__value">
          {counter}
        </div>
        <Button
          className="counter__button"
          color="yellow"
          onClick={handleCounterIncrement}
        >
            +
        </Button>
      </div>
    </div>
  )
}

Counter.propTypes = {
  onChange: PropTypes.func,
  buttonText: PropTypes.string,
  initialValue: PropTypes.number,
  className: PropTypes.string,
  size: PropTypes.oneOf(['default', 'small']),
}

export default Counter
