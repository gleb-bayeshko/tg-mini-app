import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Drawer } from 'app/AppLayout/Drawer'
import { toggleDrawer } from 'app/AppLayout/Drawer/drawerSlice'
import { Cart } from 'features/cart/CartButton'
import { useVerticalScrollThreshold } from 'shared/hooks'
import LogoIcon from 'shared/icons/LogoIcon'
import { BurgerButton } from 'shared/ui/BurgerButton'
import { Wrapper } from 'shared/ui/Wrapper'
import { getClassName } from 'shared/utils'
import { routerPath } from 'pages/routes/const'
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
      <Drawer />
      <Wrapper>
        <div className="header__content">
          <div className="header__left">
            <BurgerButton
              className="header__burger-button"
              onClick={handleBurgerButtonClick}
            />
            <Link to={routerPath.home} className={getClassName('header__logo', { 'header__logo_shifted': isDrawerOpened })}>
              <LogoIcon />
            </Link>
          </div>
          <Cart />
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
