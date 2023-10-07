import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { getClassName } from 'shared/utils'
import 'shared/ui/Inputs/InputText/styles.css'

const InputText = forwardRef(
  function InputText({ className, value, ...other }, ref) {
    return (
      <input
        className={getClassName('input', { [className]: !!className })}
        value={value}
        ref={ref}
        {...other}
      />
    )
  }
)

InputText.propTypes = {
  className: PropTypes.string,
  value:  PropTypes.string,
}

export default InputText
