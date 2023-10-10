import { useEffect, useRef, useState } from 'react'
import { useTelegramContext } from 'app/Telegram'
import PropTypes from 'prop-types'
import { Button } from 'shared/ui/Button'
import { Field } from 'shared/ui/Inputs/Field'
import { Form } from 'shared/ui/Inputs/Form'
import { Lottie as SuccessLottie } from 'shared/ui/Lottie'
import Modal from 'shared/ui/Modal/Modal'
import { Text } from 'shared/ui/Text'
import { Wizard } from 'shared/ui/WIzard'
import { WizardStep } from 'shared/ui/WIzard/WizardStep'
import successAnimation from 'shared/assets/lotties/success/success.json'
import './styles.css'

import promoImage from '/images/promo/promoEnter.png'

const step = {
  ENTER_PROMO: 0,
  SUCCESS: 1,
}

const SUCCESS_ANIMATION_DELAY = 120

export const MOCK_PROMO = 'SUPER_PROMO'

function PromoBannerModal({ isOpen, onClose }) {
  const { cloudStorage } = useTelegramContext()
  const formRef = useRef(null)
  const successRef = useRef(null)
  const [wizardStep, setWizardStep] = useState(0)

  const handleClose = () => {
    formRef.current?.resetForm()
    onClose?.()
  }

  const handleSubmit = async (values, form) => {
    const promoCode = values['promo-code']

    await cloudStorage.getItem('promoCode', (error, value) => {
      if (error) {
        form.setErrors({ 'promo-code': 'Something went wrong, please, try again' })
        return
      }

      if (promoCode !== MOCK_PROMO) {
        form.setErrors({ 'promo-code': 'Invalid promo code' })
        return
      }

      if (value && value === MOCK_PROMO) {
        form.setErrors({ 'promo-code': 'You have already activated this promo code!' })
        return
      }

      cloudStorage.setItem('promoCode', promoCode, error => {
        if (error) {
          form.setErrors({ 'promo-code': 'Something went wrong, please, try again' })
          error = true
          return
        }

        form.resetForm()

        setWizardStep(1)
      })
    })
  }

  const handleUnmount = () => {
    setWizardStep(0)
  }

  const validateForm = fields => {
    const values = Object.values(fields)

    return (values.length > 0) && (values.every(val => val.length > 0))
  }

  useEffect(() => {
    let timer

    if (wizardStep === step.SUCCESS) {
      timer = setTimeout(() => {
        successRef.current?.play()
      }, SUCCESS_ANIMATION_DELAY)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [wizardStep])

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      imageSrc={promoImage}
      imageClassName="promo-banner-modal__image"
      onUnmount={handleUnmount}
    >
      <Wizard className="promo-banner-modal__wizard" currentStep={wizardStep}>
        <WizardStep stepNumber={step.ENTER_PROMO} className="promo-banner-modal__wizard-step">
          <Form
            onSubmit={handleSubmit}
            ref={formRef}
            className="promo-banner-modal__form"
            validationFunc={validateForm}
          >
            {({ isFormValid, isSubmitting }) => (
              <>
                <div>
                  <div className="promo-banner-modal__container">
                    <img src={promoImage} alt="promo-code" className="promo-banner-modal__image" />
                  </div>
                  <Text className="promo-banner-modal__text h3">
                    Enter your awesome and super special promo code
                  </Text>
                  <Field
                    name="promo-code"
                    placeholder="Enter promo code..."
                    className="promo-banner-modal__promo-code"
                  />
                </div>

                <Button
                  type="submit"
                  color="green"
                  className="promo-banner-modal__submit-button"
                  disabled={!isFormValid || isSubmitting}
                  isLoading={isSubmitting}
                >
                  Submit
                </Button>
              </>
            )}
          </Form>
        </WizardStep>
        <WizardStep stepNumber={step.SUCCESS} className="promo-banner-modal__wizard-step">
          <div className="promo-banner-modal__wizard-step-success">
            <div>
              <div className="wizard-step-success">
                <SuccessLottie
                  ref={successRef}
                  animationData={successAnimation}
                  styles={{ width: '100%', height: 160 }}
                  animationSpeed={2}
                />
              </div>
              <Text className="h2 promo-banner-modal__wizard-step-success-title">
                Your promo code is activated!
              </Text>
              <Text className="promo-banner-modal__wizard-step-success-description">
                The code will be automatically used on your next order. Is not that great?
              </Text>
            </div>

            <Button
              color="green"
              className="promo-banner-modal__back-button"
              onClick={handleClose}
            >
              Back to shop
            </Button>
          </div>
        </WizardStep>
      </Wizard>
    </Modal>
  )
}

PromoBannerModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default PromoBannerModal
