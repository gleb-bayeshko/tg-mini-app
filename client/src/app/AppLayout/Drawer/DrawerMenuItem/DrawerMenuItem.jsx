import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { Text } from 'shared/ui/Text'
import { Wrapper } from 'shared/ui/Wrapper'
import { getClassName } from 'shared/utils'
import { closeDrawer } from '../drawerSlice'
import './styles.css'

function DrawerMenuItem({
  name,
  className,
  imgSrc,
  color = 'pink',
}) {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(closeDrawer())
  }

  return (
    <div
      className={getClassName('drawer-menu-item', { [className]: !!className })}
      onClick={handleClick}
    >
      <Wrapper>
        <div className="drawer-menu-item__container">
          {
            imgSrc && (
              <div className={`drawer-menu-item__image-container drawer-menu-item__image-container_${color}`}>
                <img src={imgSrc} alt={`${name} icon`} className="drawer-menu-item__image" />
              </div>
            )
          }

          <Text className="drawer-menu-item__title">
            {name}
          </Text>
        </div>
      </Wrapper>
    </div>
  )
}

DrawerMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
}

export default DrawerMenuItem
