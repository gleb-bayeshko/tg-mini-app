import BurgerButton from 'features/ui/BurgerButton/BurgerButton.jsx'
import Cart from 'features/ui/Cart/Cart.jsx'
import Wrapper from 'features/ui/Wrapper/Wrapper.jsx'
import './styles.css'

function Header () {
  return (
    <div className="header">
      <Wrapper>
        <div className="header__content">
          <BurgerButton />
          <Cart />
        </div>
      </Wrapper>
    </div>
  )
}

export default Header
