import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import isFunction from 'shared/utils/isFunction'

const mainButtonColor = {
  default: '#755FE2',
  success: '#3DD598',
  danger: '#f34e53'
}

const mainButtonTextColor = '#FFFFFF'

function useTgMainButton({
  text = 'Continue',
  type = 'default',
  isOpen = false,
  isEnabled = true,
  isLoading = false,
} = {}) {
  const [buttonText, setButtonText] = useState(text)
  const [buttonType, setButtonType] = useState(type)
  const [buttonIsOpen, setButtonIsOpen] = useState(isOpen)
  const [buttonIsEnabled, setButtonIsEnabled] = useState(isEnabled)
  const [buttonIsLoading, setButtonIsLoading] = useState(isLoading)

  useEffect(() => {
    const button = window.Telegram.WebApp.MainButton || {}

    const handleClick = () => {
      const myEvent = new CustomEvent('tgMainButtonClick', {
        bubbles: true,
        cancelable: true,
        composed: false,
      })
      window.dispatchEvent(myEvent)
    }

    if (isFunction(button.onClick)) {
      button.onClick(handleClick)
    }
  }, [])

  useEffect(() => {
    const button = window.Telegram.WebApp.MainButton || {}

    button.color = mainButtonColor[buttonType]
    button.textColor = mainButtonTextColor

    button.text = buttonText
    button.isVisible = buttonIsOpen
    button.isActive = buttonIsEnabled

    buttonIsLoading
      ? button.showProgress()
      : button.hideProgress()
  }, [
    buttonText,
    buttonType,
    buttonIsOpen,
    buttonIsEnabled,
    buttonIsLoading
  ])

  return {
    setText: text => setButtonText(text),
    setType: type => setButtonType(type),
    open: () => setButtonIsOpen(true),
    close: () => setButtonIsOpen(false),
    enable: () => setButtonIsEnabled(true),
    disable: () => setButtonIsEnabled(false),
    showLoading: () => setButtonIsLoading(true),
    hideLoading: () => setButtonIsLoading(false),
    isOpen: buttonIsOpen,
    isVisible: buttonIsEnabled,
  }
}

useTgMainButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['default, danger, success']),
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  isVisible: PropTypes.bool,
}

export default useTgMainButton
