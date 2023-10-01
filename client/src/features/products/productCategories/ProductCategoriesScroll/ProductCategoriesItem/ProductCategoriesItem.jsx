import PropTypes from 'prop-types'
import './styles.css'

function ProductCategoriesItem({ name, category, imgSrc }) {
  return (
    <a href="/" className="product-categories-scroll-list-item">
      <img
        src={imgSrc}
        alt={`${name} category image`}
        className="product-categories-scroll-list-item__image"
      />
      <p className="product-categories-scroll-list-item__title">
        {name}
      </p>
    </a>
  )
}

ProductCategoriesItem.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
}

export default ProductCategoriesItem
