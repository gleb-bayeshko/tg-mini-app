import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetFilters, setFilters } from 'features/products/ProductCatalog/productCatalogSlice'
import { brands, lifeStages } from 'mock/productCategories'
import PropTypes from 'prop-types'
import { Button } from 'shared/ui/Button'
import { Field } from 'shared/ui/Inputs/Field'
import { Form } from 'shared/ui/Inputs/Form'
import Modal from 'shared/ui/Modal/Modal'
import { Text } from 'shared/ui/Text'
import { getClassName } from 'shared/utils'
import './styles.css'

function ProductFiltersModal({ isOpen, onClose }) {
  const formRef = useRef(null)

  const { filters } = useSelector(state => state.productCatalog)
  const dispatch = useDispatch()

  const handleClose = () => {
    onClose?.()
  }

  const handleClear = () => {
    formRef.current?.resetForm()
    dispatch(resetFilters())
  }

  const handleSubmit = async values => {
    dispatch(setFilters(values))
    handleClose()
  }

  const renderCheckboxes = (checkboxes, groupName) =>
    Object.values(checkboxes).map(({ id, name }) => (
      <Field
        key={`${groupName}-${id}`}
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
        initialValues={filters}
        className="product-filters-modal__form"
      >
        {({ isAnyValue }) => (
          <>
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
                  min={0}
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
              {renderCheckboxes(lifeStages, 'lifeStage')}
            </div>

            <div className="product-filters-modal__button-controls">
              <Button
                color="yellow"
                styleType="outline"
                className={getClassName(
                  'product-filters-modal__clear-button',
                  { 'product-filters-modal__clear-button_open': isAnyValue }
                )}
                onClick={handleClear}
              >
                Clear
              </Button>
              <Button
                type="submit"
                color="green"
                className="product-filters-modal__submit-button"
              >
                Apply
              </Button>
            </div>
          </>
        )}
      </Form>
    </Modal>
  )
}

ProductFiltersModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default ProductFiltersModal
