import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'shared/ui/Button'
import { getClassName } from 'shared/utils'
import './styles.css'

function Counter({ onChange, buttonText = 'Add', className, initialValue }) {
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
    <div className={getClassName('product-card__add-to-cart', { [className]: !!className })}>
      <Button
        className={getClassName(
          'product-card__add-to-cart-button',
          { 'product-card__add-to-cart-button_hide': counter > 0 }
        )}
        color="yellow"
        onClick={handleAddToCartClick}
      >
        {buttonText}
      </Button>
      <div
        className={getClassName(
          'product-card__add-to-cart-counter',
          { 'product-card__add-to-cart-counter_visible': counter > 0 }
        )}
      >
        <Button
          className="product-card__add-to-cart-counter-button"
          color="yellow"
          onClick={handleCounterDecrement}
        >
            -
        </Button>
        <div className="product-card__add-to-cart-counter-value">
          {counter}
        </div>
        <Button
          className="product-card__add-to-cart-counter-button"
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
}

export default Counter
