import { Cart } from 'features/cart/CartButton'
import { BurgerButton } from 'shared/ui/BurgerButton'
import { Wrapper } from 'shared/ui/Wrapper'
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
