import { useRef,useState } from 'react'
import PropTypes from 'prop-types'
import { Lottie as BurgerMenuLottie } from 'shared/ui/Lottie'
import { getClassName } from 'shared/utils'
import burgerMenuAnimation from 'shared/assets/lotties/burgerMenu/burgerMenu.json'
import './styles.css'

function BurgerButton() {
  const ref = useRef()

  const [isBurgerOpen, setIsBurgerOpen] = useState(false)

  const handleBurgerClick = () => {
    setIsBurgerOpen((currentStatus) => !currentStatus)

    if (!isBurgerOpen) {
      ref.current?.playFirstPart()
    } else {
      ref.current?.playSecondPart()
    }
  }

  return (
    <div
      className={getClassName('burger-button' , { 'burger-button_opened': isBurgerOpen } )}
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
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
}

export default BurgerButton
