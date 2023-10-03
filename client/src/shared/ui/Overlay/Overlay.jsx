import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { getClassName } from 'shared/utils'
import { useScrollContext } from 'app/AppLayout/context'
import './styles.css'

function Overlay({ isOpen, onClick }) {
  const { setIsScrollLocked } = useScrollContext()

  const handleOverlayClick = () => {
    onClick?.()
  }

  useEffect(() => {
    setIsScrollLocked(isOpen)
  }, [isOpen, setIsScrollLocked])

  return createPortal(
    <div
      className={getClassName('overlay', { 'overlay_visible': isOpen })}
      onClick={handleOverlayClick}
    />,
    document.getElementById('portal')
  )
}

Overlay.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Overlay
