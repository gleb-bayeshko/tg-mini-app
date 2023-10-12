import PropTypes from 'prop-types'
import { Text } from 'shared/ui/Text'
import './styles.css'

function ProductCategoriesScrollItem({ name, imgSrc }) {
  return (
    <div className="product-categories-scroll-list-item">
      <img
        src={imgSrc}
        alt={`${name} category image`}
        className="product-categories-scroll-list-item__image"
      />
      <Text className="product-categories-scroll-list-item__title">
        {name}
      </Text>
    </div>
  )
}

ProductCategoriesScrollItem.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
}

export default ProductCategoriesScrollItem
