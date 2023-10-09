import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Counter } from 'shared/ui/Counter'
import Rating from 'shared/ui/Rating/Rating'
import { Text } from 'shared/ui/Text'
import './styles.css'

function ProductCard({
  id,
  name,
  rating,
  price,
  category,
  imgSrc,
}) {
  const [counter, setCounter] = useState(0)

  const handleCounterChange = count => {
    setCounter(count)
  }

  return (
    <div className="product-card">
      <div className="product-card__content">
        <Link to={`../${category}/${id}`} relative="path">
          <div className="product-card__image-container">
            <img src={imgSrc} alt="" className="product-card__image" />
          </div>
          <Text className="product-card__title h5">
            {name}
          </Text>
        </Link>
        <div className="product-card__rating">
          <Rating value={rating} />
        </div>
        <div className="product-card__price text-m-extra">
          {`$${price}`}
        </div>
      </div>
      <Counter
        onChange={handleCounterChange}
        buttonText="Add to cart"
      />
    </div>
  )
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
}

export default ProductCard
