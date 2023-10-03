import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Lottie as BurgerMenuLottie } from 'shared/ui/Lottie'
import { getClassName } from 'shared/utils'
import burgerMenuAnimation from 'shared/assets/lotties/burgerMenu/burgerMenu.json'
import './styles.css'

function BurgerButton({ isOpen, className, onClick }) {
  const ref = useRef()

  const handleBurgerClick = () => {
    onClick?.()
  }

  useEffect(() => {
    if (isOpen) {
      ref.current?.playFirstPart()
    }
  }, [isOpen])

  return (
    <div
      className={getClassName('burger-button' , {
        'burger-button_opened': isOpen,
        [`${className}`]: !!className
      } )}
      onClick={handleBurgerClick}
    >
      <BurgerMenuLottie
        ref={ref}
        animationData={burgerMenuAnimation}
        styles={{ width: 55 }}
        animationSpeed={1.7}
      />
    </div>
  )
}

BurgerButton.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
}

export default BurgerButton
