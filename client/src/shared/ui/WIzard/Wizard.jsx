import PropTypes from 'prop-types'
import { getClassName } from 'shared/utils'
import { WizardContext } from './context'
import './styles.css'

function Wizard({
  children,
  currentStep = 0,
  className,
}) {

  return (
    <WizardContext.Provider value={{ currentStep }}>
      <div className={getClassName('wizard', { [className]: !!className })}>
        <div
          className="wizard__content"
          style={{ transform: `translateX(-${currentStep * 100}%)` }}
        >
          {children}
        </div>
      </div>
    </WizardContext.Provider>
  )
}

Wizard.propTypes = {
  children: PropTypes.node,
  currentStep: PropTypes.number,
  className: PropTypes.string,
}

export default Wizard
