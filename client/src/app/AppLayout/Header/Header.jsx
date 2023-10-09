import { useDispatch, useSelector } from 'react-redux'
import { Link, useMatch, useNavigate } from 'react-router-dom'
import { Drawer } from 'app/AppLayout/Drawer'
import { toggleDrawer } from 'app/AppLayout/Drawer/drawerSlice'
import { CartButton } from 'features/cart/CartButton'
import { useVerticalScrollThreshold } from 'shared/hooks'
import ArrowRightIcon from 'shared/icons/ArrowRightIcon'
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

  const isProductPage = useMatch('/products/:category/:id')
  const navigate = useNavigate()

  const handleBurgerButtonClick = () => {
    dispatch(toggleDrawer())
  }

  const handleArrowClick = () => {
    navigate(-1)
  }

  return (
    <header className={getClassName('header', { 'header_scrolled': isWindowScrolled })}>
      <Drawer />
      <Wrapper>
        <div className="header__content">
          <div className="header__left">
            {
              isProductPage
                ? (
                  <div className="header__arrow-icon-container" onClick={handleArrowClick}>
                    <ArrowRightIcon className="header__arrow-icon" />
                  </div>
                )
                : (
                  <BurgerButton
                    className="header__burger-button"
                    onClick={handleBurgerButtonClick}
                  />
                )
            }
            <Link
              to={routerPath.home} className={getClassName('header__logo', {
                'header__logo_shifted': isDrawerOpened,
                'header__logo_with-arrow': isProductPage,
              })}
            >
              <LogoIcon />
            </Link>
          </div>
          <CartButton />
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
