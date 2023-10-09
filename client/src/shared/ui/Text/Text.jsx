import PropTypes from 'prop-types'
import { getClassName } from 'shared/utils'
import { useColorTheme } from 'app/AppLayout/context'
import './styles.css'

function Text({
  children,
  color = 'black',
  colorThemeDepends = true,
  styles,
  className,
  tag
}) {
  const { isDarkTheme } = useColorTheme()

  const TextTag = tag ?? 'p'

  return (
    <TextTag
      className={getClassName('text', {
        [className]: !!className,
        'text_dark': colorThemeDepends && isDarkTheme,
        [`text_${color}`]: color,
      })}
      style={styles}
    >
      {children}
    </TextTag>
  )
}

Text.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.oneOf(['black', 'gray', 'white']),
  colorThemeDepends: PropTypes.bool,
  tag: PropTypes.string
}

export default Text
