import PropTypes from 'prop-types'
import { getClassName } from 'shared/utils'
import './styles.css'

function Card({ children, color, className, styles }) {
  return (
    <div
      className={getClassName( 'card', {
        [`${className}`]: className,
        [`card_${color}`]: color
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
  color: PropTypes.oneOf(['pink', 'orange', 'yellow', 'green', 'blue', 'violet', 'white'])
}

export default Card
