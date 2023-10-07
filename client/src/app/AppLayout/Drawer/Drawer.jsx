import { useDispatch, useSelector } from 'react-redux'
import Overlay from 'shared/ui/Overlay/Overlay'
import { Text } from 'shared/ui/Text'
import { Wrapper } from 'shared/ui/Wrapper'
import { getClassName } from 'shared/utils'
import { DrawerMenuItem } from './DrawerMenuItem'
import { closeDrawer } from './drawerSlice'
import { drawerMenuItems } from './const'
import './styles.css'

function Drawer() {
  const { isDrawerOpened } = useSelector(state => state.drawer)
  const dispatch = useDispatch()

  const handleOverlayClick = () => {
    dispatch(closeDrawer())
  }

  const renderMenuItems = () => drawerMenuItems.map(({
    id,
    title,
    icon,
    color,
    href
  }) => (
    <DrawerMenuItem
      title={title}
      icon={icon}
      iconColor={color}
      href={href}
      key={id}
      className="drawer-menu__item"
    />
  ))

  return (
    <>
      <div className={getClassName('drawer', { 'drawer_open': isDrawerOpened })}>
        <Wrapper>
          <div className="drawer-user">
            <div className="drawer-user__avatar">
              <div className="drawer-user__avatar-image-container">
                <img src="/images/avatar/avatar-default.png" className="drawer-user__avatar-image" alt="avatar" />
              </div>
            </div>
            <div className="drawer-user__info">
              <Text className="text-m drawer-user__info-name">
                Todd Howard
              </Text>
              <Text className="text-sm-extra drawer-user__info-phone">
                +91-997-160-51-12
              </Text>
            </div>
          </div>
          <div className="drawer-menu">
            {renderMenuItems()}
          </div>
        </Wrapper>
      </div>
      <Overlay
        isOpen={isDrawerOpened}
        onClick={handleOverlayClick}
      />
    </>
  )
}

export default Drawer
