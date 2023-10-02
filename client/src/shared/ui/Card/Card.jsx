import PropTypes from 'prop-types'
import { getClassName } from 'shared/utils'
import './styles.css'

function Card({
  type = 'contained',
  children,
  color,
  className,
  styles
}) {
  return (
    <div
      className={getClassName( `card card_${type}`, {
        [`${className}`]: className,
        [`card_${color}`]: !!color
      })}
      style={styles}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.oneOf(['pink', 'orange', 'yellow', 'green', 'blue', 'violet', 'white']),
  type: PropTypes.oneOf(['contained', 'outline-dashed']),
}

export default Card
