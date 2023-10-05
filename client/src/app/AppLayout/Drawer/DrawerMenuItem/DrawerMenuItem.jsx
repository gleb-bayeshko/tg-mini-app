import PropTypes from 'prop-types'
import { Text } from 'shared/ui/Text'
import { getClassName } from 'shared/utils'
import './styles.css'

function DrawerMenuItem({ title, icon: Icon, href, className }) {
  return (
    <a
      className={getClassName('drawer-menu-item', { [`${className}`]: !!className })}
      href="/"
    >
      <Icon className="drawer-menu-item__icon" />
      <Text className="drawer-menu-item__title">
        {title}
      </Text>
    </a>
  )
}

DrawerMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default DrawerMenuItem
