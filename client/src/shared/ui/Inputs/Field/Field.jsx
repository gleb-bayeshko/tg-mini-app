import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from '../Checkbox'
import { InputText } from '../InputText'
import { FormContext, useFormContext } from '../Form/context'
import { inputTypes } from 'shared/ui/Inputs/Field/const'
import './styles.css'

const Field = forwardRef(
  function Field({ name, value, placeholder, className, type, ...otherProps }, ref) {
    const { values, errors, ...rest } = useFormContext(FormContext)

    const renderCheckBox = () => {
      const isCheckboxGroup = Array.isArray(values[name])
      const stringValue = `${value}`

      const isChecked =
        isCheckboxGroup
          ? values[name].includes(stringValue)
          : values[name] || false

      return (
        <Checkbox
          ref={ref}
          className={className}
          value={value}
          name={name}
          checked={isChecked}
          placeholder={placeholder}
          {...otherProps}
          { ...rest }
        />
      )
    }

    const renderTextInput = () => {
      return (
        <InputText
          ref={ref}
          name={name}
          className={className}
          value={values[name] ?? ''}
          placeholder={placeholder}
          type={type}
          {...otherProps}
          { ...rest }
        />
      )
    }

    const renderInput = () => {
      switch (type) {
        case inputTypes.checkbox:
          return renderCheckBox()
        case inputTypes.text:
        default:
          return renderTextInput()
      }
    }

    return (
      <div className="field">
        {renderInput()}
        {
          errors[name] && (
            <div className="field__error">
              {errors[name]}
            </div>
          )
        }
      </div>
    )
  }
)

Field.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  className: PropTypes.string,
}

export default Field
