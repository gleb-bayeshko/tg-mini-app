import PropTypes from 'prop-types'
import { getClassName } from 'shared/utils'
import './styles.css'

function Rating({ value }) {
  return (
    <div className="rating">
      {
        [...Array(5)].map((_, i) => (
          <span
            key={i}
            className={getClassName('fa fa-star rating-star', { 'rating-star_checked': i+1 <= value })}
          />
        ))
      }
    </div>
  )
}

Rating.propTypes = { value: PropTypes.number }

export default Rating
