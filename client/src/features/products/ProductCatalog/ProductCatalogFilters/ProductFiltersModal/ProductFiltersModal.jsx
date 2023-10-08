import { useRef } from 'react'
import { brands, lifeStages } from 'mock/productCategories'
import PropTypes from 'prop-types'
import { Button } from 'shared/ui/Button'
import { Field } from 'shared/ui/Inputs/Field'
import { Form } from 'shared/ui/Inputs/Form'
import Modal from 'shared/ui/Modal/Modal'
import { Text } from 'shared/ui/Text'
import './styles.css'

function ProductFiltersModal({ isOpen, onClose }) {
  const formRef = useRef(null)

  const handleClose = () => {
    formRef.current?.resetForm()
    onClose?.()
  }

  const handleSubmit = async (values, form) => {
    console.log(values)
  }

  const renderCheckboxes = (checkboxes, groupName) => checkboxes.map(({ id, name }) => (
    <Field
      key={id}
      value={id}
      name={groupName}
      label={name}
      type="checkbox"
      className="product-filters-modal__checkbox"
    />
  ))

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      imageClassName="product-filters-modal__image"
    >
      <Form
        onSubmit={handleSubmit}
        ref={formRef}
        className="product-filters-modal__form"
      >
        <div className="product-filters-modal__form-content">
          <Text className="product-filters-modal__title h3">
            Filters
          </Text>

          <Text className="product-filters-modal__category-text text-lg font-weight-7">
            Brands
          </Text>
          {renderCheckboxes(brands, 'brand')}

          <Text className="product-filters-modal__category-text text-lg font-weight-7">
            Price
          </Text>
          <div className="product-filters-modal__price-input">
            <Field
              name="price-min"
              type="number"
              placeholder="From"
              className="product-filters-modal__number-input product-filters-modal__price-min"
            />
            <Field
              name="price-max"
              type="number"
              placeholder="To"
              className="product-filters-modal__number-input product-filters-modal__price-max"
            />
          </div>

          <Text className="product-filters-modal__category-text text-lg font-weight-7">
            Life Stages
          </Text>
          {renderCheckboxes(lifeStages, 'life-stage')}
        </div>

        <div>
          <Button
            type="submit"
            color="green"
            className="product-filters-modal__submit-button"
          >
            Apply
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

ProductFiltersModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default ProductFiltersModal
