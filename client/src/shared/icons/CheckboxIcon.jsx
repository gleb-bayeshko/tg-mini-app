import PropTypes from 'prop-types'

function CheckboxIcon({ className, styles, ...other }) {
  return (
    <svg
      className={className}
      style={styles}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 26"
      {...other}
    >
      <rect width="23" height="23" x="1" y="1" fill="#FFF" stroke="#006F94" rx="3" strokeWidth="1px" />
      <path
        className="tick" stroke="#FFF" fill="none" strokeLinecap="round" strokeWidth="4"
        d="M6 11l5 5 9-9"
      />
    </svg>
  )
}

CheckboxIcon.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.object,
}

export default CheckboxIcon
