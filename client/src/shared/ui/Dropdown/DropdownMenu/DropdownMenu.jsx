import PropTypes from 'prop-types'
import { getClassName } from 'shared/utils'
import { useDropdownContext } from 'shared/ui/Dropdown/context'
import './styles.css'

function DropdownMenu({ className, children, onClick }) {
  const { isOpen } = useDropdownContext()

  const handleClick = () => {
    onClick?.()
  }

  return (
    <div
      className={getClassName('dropdown-menu',
        {
          [className]: !!className,
          'dropdown-menu_open': isOpen
        })}
      onClick={handleClick}
    >
      <div className="dropdown-menu__content">
        {children}
      </div>
    </div>
  )
}

DropdownMenu.propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default DropdownMenu
