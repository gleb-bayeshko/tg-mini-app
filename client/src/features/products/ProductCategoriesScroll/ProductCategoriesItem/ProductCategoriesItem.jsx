import PropTypes from 'prop-types'
import './styles.css'

function ProductCategoriesItem({ name, imgSrc }) {
  return (
    <div className="product-categories-scroll-list-item">
      <img
        src={imgSrc}
        alt={`${name} category image`}
        className="product-categories-scroll-list-item__image"
      />
      <p className="product-categories-scroll-list-item__title">
        {name}
      </p>
    </div>
  )
}

ProductCategoriesItem.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
}

export default ProductCategoriesItem
