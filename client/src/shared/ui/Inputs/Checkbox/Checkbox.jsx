import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { CheckboxIcon } from 'shared/icons'
import { getClassName } from 'shared/utils'
import './styles.css'

const Checkbox = forwardRef(
  function Checkbox({ className, label, ...other }, ref) {
    return (
      <div className={getClassName('checkbox', { [className]: !!className })}>
        <label className="checkbox__label">
          <input
            className="checkbox__input"
            ref={ref}
            {...other}
            type="checkbox"
          />
          <CheckboxIcon
            className="checkbox__icon"
          />
          <div className="checkbox__label-text">
            {label}
          </div>
        </label>
      </div>
    )
  }
)

Checkbox.propTypes = {
  className: PropTypes.string,
  name:  PropTypes.string,
  label:  PropTypes.string,
}

export default Checkbox
