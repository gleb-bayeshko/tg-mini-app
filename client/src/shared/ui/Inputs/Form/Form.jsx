import { forwardRef, useEffect, useImperativeHandle, useReducer } from 'react'
import PropTypes from 'prop-types'
import { isFunction } from 'shared/utils'
import { FormContext } from 'shared/ui/Inputs/Form/context'
import './styles.css'

const actions = {
  SET_VALUE: 'SET_VALUE',
  RESET_VALUES: 'RESET_VALUES',
  SET_IS_SUBMITTING: 'SET_IS_SUBMITTING',
  SET_IS_FORM_VALID: 'SET_IS_FORM_VALID',
  SET_ERRORS: 'SET_ERRORS',
  REMOVE_ERROR: 'REMOVE_ERROR',
}

function reducer(state, action) {
  switch (action.type) {
  case actions.SET_VALUE:
    return {
      ...state,
      values: {
        ...state.values,
        [action.payload.name]: action.payload.value
      }
    }
  case actions.RESET_VALUES:
    return {
      ...state,
      values: { ...action.payload },
      errors: {}
    }
  case actions.SET_IS_SUBMITTING:
    return {
      ...state,
      isSubmitting: action.payload
    }
  case actions.SET_IS_FORM_VALID:
    return {
      ...state,
      isFormValid: action.payload
    }
  case actions.SET_ERRORS:
    return {
      ...state,
      errors: {
        ...state.errors,
        ...action.payload
      }
    }
  case actions.REMOVE_ERROR:
    return {
      ...state,
      errors: {
        ...state.errors,
        [action.payload.name]: undefined
      }
    }
  default:
    return { ...state }
  }
}

function Form({
  initialValues = {},
  onSubmit,
  children,
  className,
  validationFunc,
}, ref) {
  const [state, dispatch] = useReducer(reducer, {
    values: initialValues,
    errors: {},
    isSubmitting: false,
    isFormValid: true,
  })

  const onChange = e => {
    const name = e.currentTarget.name
    const value = e.currentTarget.value

    dispatch({
      type: actions.SET_VALUE,
      payload: {
        name,
        value
      },
    })

    dispatch({
      type: actions.REMOVE_ERROR,
      payload: { name },
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!state.isFormValid) {
      return
    }

    dispatch({
      type: actions.SET_IS_SUBMITTING,
      payload: true,
    })

    await onSubmit?.(state.values, ref.current)

    dispatch({
      type: actions.SET_IS_SUBMITTING,
      payload: false,
    })

  }

  const context = {
    onChange,
    values: state.values,
    errors: state.errors,
  }

  useImperativeHandle(ref, () => ({
    resetForm: () => {
      dispatch({
        type: actions.RESET_VALUES,
        payload: initialValues
      })
    },
    setErrors: errors => {
      dispatch({
        type: actions.SET_ERRORS,
        payload: errors
      })
    }
  }), [initialValues])

  useEffect(() => {
    dispatch({
      type: actions.SET_IS_FORM_VALID,
      payload: validationFunc
        ? validationFunc(state.values)
        : true,
    })
  }, [state.values, validationFunc])

  return (
    <FormContext.Provider value={context}>
      <form onSubmit={handleSubmit} className={className}>
        {
          isFunction(children)
            ? children({ isFormValid: state.isFormValid, isSubmitting: state.isSubmitting })
            : children
        }
      </form>
    </FormContext.Provider>

  )
}

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  validationFunc: PropTypes.func,
  initialValues: PropTypes.object,
  className: PropTypes.string
}

const forwardedForm = forwardRef(Form)

export default forwardedForm
