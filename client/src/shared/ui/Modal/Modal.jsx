import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { useDelayUnmount } from 'shared/hooks'
import { CloseIcon } from 'shared/icons'
import { getClassName } from 'shared/utils'
import { useScrollContext } from 'app/AppLayout/context'
import './styles.css'

function Modal({
  children,
  isOpen,
  onClose,
  modalClassName,
  contentClassName,
  withTopPadding = true,
  onUnmount,
}) {
  const { setIsScrollLocked } = useScrollContext()
  const shouldRender = useDelayUnmount(isOpen, 250, onUnmount)

  const handleClose = () => {
    onClose?.()
  }

  useEffect(() => {
    setIsScrollLocked(isOpen)
  }, [isOpen, setIsScrollLocked])

  return createPortal(
    shouldRender && (
      <div
        className={getClassName('modal', {
          'modal_open': isOpen,
          'modal_close': !isOpen,
          'modal_padding-top': withTopPadding,
          [modalClassName]: !!modalClassName,
        })}
      >
        <div
          className="modal__close-icon"
          onClick={handleClose}
        >
          <CloseIcon />
        </div>

        <div
          className={getClassName('modal__content', { [contentClassName]: !!contentClassName })}
        >
          {children}
        </div>
      </div>
    ),
    document.getElementById('portal')
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  modalClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  withTopPadding: PropTypes.bool,
  onUnmount: PropTypes.func,
}

export default Modal
