import PropTypes from 'prop-types'

function ExploreIcon({ className, styles }) {
  return (
    <svg
      className={className}
      style={styles}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      id="discovery"
    ><g fill="none" fillRule="evenodd" stroke="#200E32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(2 2)">
        <polygon points="6.27 12.952 7.863 7.863 12.952 6.27 11.359 11.359" />
        <circle cx="9.611" cy="9.611" r="9.611" />
      </g>
    </svg>
  )
}

ExploreIcon.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.object,
}

export default ExploreIcon
