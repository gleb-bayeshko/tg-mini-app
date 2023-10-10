import PropTypes from 'prop-types'

function SortIcon({ className, styles }) {
  return (
    <svg
      className={className}
      style={styles}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M3 9l4 -4l4 4m-4 -4v14" />
      <path d="M21 15l-4 4l-4 -4m4 4v-14" />
    </svg>
  )
}

SortIcon.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.object,
}

export default SortIcon
