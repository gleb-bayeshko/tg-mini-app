import PropTypes from 'prop-types'

function FilterIcon({ className, styles, ...other }) {
  return (
    <svg
      className={className}
      style={styles}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="black"
      viewBox="0 0 20 20"
      {...other}
    >
      <path
        d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z"
      />
    </svg>
  )
}

FilterIcon.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.object,
}

export default FilterIcon
