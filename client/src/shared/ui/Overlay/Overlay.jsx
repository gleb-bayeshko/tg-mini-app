import { useEffect } from 'react'
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

  return (
    <div
      className={getClassName('overlay', { 'overlay_visible': isOpen })}
      onClick={handleOverlayClick}
    />
  )
}

Overlay.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Overlay
