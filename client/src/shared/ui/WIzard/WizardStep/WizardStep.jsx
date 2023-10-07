import PropTypes from 'prop-types'
import { getClassName } from 'shared/utils'
import './styles.css'

function WizardStep({ children, className, stepNumber }) {
  return (
    <div className={getClassName('wizard-step', { [className]: !!className, })}>
      {children}
    </div>
  )
}

WizardStep.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  stepNumber: PropTypes.number,
}

export default WizardStep
