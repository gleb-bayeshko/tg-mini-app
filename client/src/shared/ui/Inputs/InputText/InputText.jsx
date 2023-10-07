import PropTypes from 'prop-types'
import { getClassName } from 'shared/utils'
import 'shared/ui/Inputs/InputText/styles.css'

function InputText({ className, value, inputRef, ...other }) {
  return (
    <input
      className={getClassName('input', { [className]: !!className })}
      value={value}
      ref={inputRef}
      {...other}
    />
  )
}

InputText.propTypes = {
  className: PropTypes.string,
  value:  PropTypes.string,
}

export default InputText
