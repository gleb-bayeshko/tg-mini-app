import PropTypes from 'prop-types'
import { Text } from 'shared/ui/Text'
import { getClassName } from 'shared/utils'
import './styles.css'

function DrawerMenuItem({ title, icon: Icon, href, iconColor = 'pink', className }) {
  return (
    <a
      className={getClassName('drawer-menu-item', { [className]: !!className })}
      href="/"
    >
      <div
        className={`drawer-menu-item__icon-container drawer-menu-item__icon-container_${iconColor}`}
      >
        <Icon className="drawer-menu-item__icon" />
      </div>
      <Text className="drawer-menu-item__title">
        {title}
      </Text>
    </a>
  )
}

DrawerMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.func,
  iconColor: PropTypes.oneOf(['pink', 'orange', 'yellow', 'green', 'blue', 'violet']),
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default DrawerMenuItem
