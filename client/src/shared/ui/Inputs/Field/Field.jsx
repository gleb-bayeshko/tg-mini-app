import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { InputText } from '../InputText'
import { FormContext, useFormContext } from '../Form/context'
import './styles.css'

const Field = forwardRef(
  function Field({ name, placeholder, className, ...otherProps }, ref) {
    const { values, errors, ...rest } = useFormContext(FormContext)

    return (
      <div className="field">
        <InputText
          ref={ref}
          name={name}
          className={className}
          value={values[name] ?? ''}
          placeholder={placeholder}
          {...otherProps}
          { ...rest }
        />
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
  className: PropTypes.string,
}

export default Field
