import PropTypes from 'prop-types'

function NavigationArrowRightIcon({ className, styles, ...other }) {
  return (
    <svg
      className={className}
      style={styles}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      {...other}
    >
      <path
        fill="#22343C"
        d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z"
      />
    </svg>
  )
}

NavigationArrowRightIcon.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.object,
}

export default NavigationArrowRightIcon
