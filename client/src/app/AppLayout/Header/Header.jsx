import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawer } from 'app/AppLayout/Drawer/drawerSlice'
import { Cart } from 'features/cart/CartButton'
import useVerticalScrollThreshold from 'shared/hooks/useVerticalScrollThreshold'
import { BurgerButton } from 'shared/ui/BurgerButton'
import { Wrapper } from 'shared/ui/Wrapper'
import { getClassName } from 'shared/utils'
import './styles.css'

const SCROLL_VALUE = 8

function Header () {
  const { isDrawerOpened } = useSelector(state => state.drawer)
  const isWindowScrolled = useVerticalScrollThreshold(SCROLL_VALUE)
  const dispatch = useDispatch()

  const handleBurgerButtonClick = () => {
    dispatch(toggleDrawer())
  }

  return (
    <header className={getClassName('header', { 'header_scrolled': isWindowScrolled })}>
      <Wrapper>
        <div className="header__content">
          <BurgerButton
            isOpen={isDrawerOpened}
            className="header__burger-button"
            onClick={handleBurgerButtonClick}
          />
          <Cart />
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
