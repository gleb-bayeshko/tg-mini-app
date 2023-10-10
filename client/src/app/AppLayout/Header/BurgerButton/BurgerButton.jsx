import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Lottie as BurgerMenuLottie } from 'shared/ui/Lottie'
import { getClassName } from 'shared/utils'
import burgerMenuAnimation from 'shared/assets/lotties/burgerMenu/burgerMenu.json'
import { useColorTheme } from 'app/AppLayout/context'
import 'app/AppLayout/Header/BurgerButton/styles.css'

function BurgerButton({ className, onClick }) {
  const { isDarkTheme } = useColorTheme()
  const [isButtonOpened, setIsButtonOpened] = useState(false)
  const { isDrawerOpened } = useSelector(state => state.drawer)
  const ref = useRef()

  const handleBurgerClick = () => {
    onClick?.()
  }

  useEffect(() => {
    if (isDrawerOpened && !isButtonOpened) {
      ref.current?.playFirstPart()
      setIsButtonOpened(true)
    }

    if (!isDrawerOpened && isButtonOpened) {
      ref.current?.playSecondPart()
      setIsButtonOpened(false)
    }
  }, [isDrawerOpened, isButtonOpened])

  return (
    <div
      className={getClassName('burger-button' , {
        'burger-button_opened': isButtonOpened,
        'burger-button_dark': isDarkTheme,
        [className]: !!className
      } )}
      onClick={handleBurgerClick}
    >
      <BurgerMenuLottie
        ref={ref}
        animationData={burgerMenuAnimation}
        styles={{ width: 55 }}
        animationSpeed={2}
        className="burger-button__lottie"
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
