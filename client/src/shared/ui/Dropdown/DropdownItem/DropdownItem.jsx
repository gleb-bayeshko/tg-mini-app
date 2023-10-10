import PropTypes from 'prop-types'
import { getClassName } from 'shared/utils'
import './styles.css'

function DropdownItem({ children, isSelected, onClick }) {
  const handleClick = () => {
    onClick?.()
  }

  return (
    <div
      className={getClassName('dropdown-item', { 'dropdown-item_selected': isSelected })}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

DropdownItem.propTypes = {
  children: PropTypes.node,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
}

export default DropdownItem
