import PropTypes from 'prop-types'
import { useTg, useTgMainButton } from './hooks'
import { TelegramContext } from 'app/Telegram/context'

function Telegram({ children }) {
  const mainButton = useTgMainButton()
  const { tgApp, cloudStorage } = useTg()

  const context = { mainButton, tgApp, cloudStorage }

  return (
    <TelegramContext.Provider value={context}>
      {children}
    </TelegramContext.Provider>
  )
}

Telegram.propTypes = { children: PropTypes.node }

export default Telegram
