import PropTypes from 'prop-types'

function HistoryIcon({ className, styles }) {
  return (
    <svg
      className={className}
      style={styles}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      id="document"
    >
      <g fill="none" fillRule="evenodd" stroke="#200E32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(3 2)"><line x1="12.716" x2="5.496" y1="14.223" y2="14.223" /><line x1="12.716" x2="5.496" y1="10.037" y2="10.037" /><line x1="8.251" x2="5.496" y1="5.86" y2="5.86" /><path d="M12.9086,0.7498 C12.9086,0.7498 5.2316,0.7538 5.2196,0.7538 C2.4596,0.7708 0.7506,2.5868 0.7506,5.3568 L0.7506,14.5528 C0.7506,17.3368 2.4726,19.1598 5.2566,19.1598 C5.2566,19.1598 12.9326,19.1568 12.9456,19.1568 C15.7056,19.1398 17.4156,17.3228 17.4156,14.5528 L17.4156,5.3568 C17.4156,2.5728 15.6926,0.7498 12.9086,0.7498 Z" /></g>
    </svg>
  )
}

HistoryIcon.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.object,
}

export default HistoryIcon
