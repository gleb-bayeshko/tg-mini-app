import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ArrowRightIcon } from 'shared/icons'
import { Text } from 'shared/ui/Text'
import { getClassName } from 'shared/utils'
import './styles.css'

function Subheader({ children, className, href }) {
  return (
    <Text className={getClassName('subheader text-m-extra font-weight-7', { [className]: !!className })}>
      <span>
        {children}
      </span>
      {
        href && (
          <Link to={href}>
            <ArrowRightIcon className="subheader__arrow" />
          </Link>
        )
      }
    </Text>
  )
}

Subheader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
}

export default Subheader
