import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { DropdownContext } from './context'
import 'shared/ui/Dropdown/styles.css'

function Dropdown({ children, onOuterClick, isOpen }) {
  const dropdownContainerRef = useRef()

  useEffect(() => {
    const handleOuterClick = e => {
      if (isOpen && !dropdownContainerRef.current?.contains(e.target)) {
        onOuterClick?.()
      }
    }

    document.addEventListener('click', handleOuterClick)

    return () => {
      document.removeEventListener('click', handleOuterClick)
    }
  }, [isOpen, onOuterClick])

  return (
    <DropdownContext.Provider value={{ isOpen }}>
      <div className="dropdown" ref={dropdownContainerRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

Dropdown.propTypes = {
  children: PropTypes.node,
  onOuterClick: PropTypes.func,
  isOpen: PropTypes.bool,
}

export default Dropdown
