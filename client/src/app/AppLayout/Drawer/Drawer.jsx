import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Overlay from 'shared/ui/Overlay/Overlay'
import { getClassName } from 'shared/utils'
import { DrawerMenuItem } from './DrawerMenuItem'
import { closeDrawer } from './drawerSlice'
import { drawerMenuItems } from './const'
import { routerPath } from 'pages/routes/const'
import './styles.css'

function Drawer() {
  const { isDrawerOpened } = useSelector(state => state.drawer)
  const dispatch = useDispatch()

  const handleOverlayClick = () => {
    dispatch(closeDrawer())
  }

  const renderMenuItems = () => drawerMenuItems.map(({
    id,
    name,
    category,
    imgSrc,
    color,
  }) => (
    <li className="drawer-menu__item-link" key={id}>
      <Link to={category === 'cart' ? '/cart' : `${routerPath.products}/${category}`}>
        <DrawerMenuItem
          name={name}
          className="drawer-menu__item"
          imgSrc={imgSrc}
          color={color}
        />
      </Link>
    </li>
  ))

  return (
    <>
      <div className={getClassName('drawer', { 'drawer_open': isDrawerOpened })}>
        <ul className="drawer-menu">
          {renderMenuItems()}
        </ul>
      </div>
      <Overlay
        isOpen={isDrawerOpened}
        onClick={handleOverlayClick}
      />
    </>
  )
}

export default Drawer
