import { Link } from 'react-router-dom'
import { useProductCounter } from 'features/products/Product'
import PropTypes from 'prop-types'
import { Counter } from 'shared/ui/Counter'
import Rating from 'shared/ui/Rating/Rating'
import { Text } from 'shared/ui/Text'
import { roundNumber } from 'shared/utils'
import './styles.css'

function ProductCard({
  type = 'card',
  noHref = false,
  id,
  name,
  rating,
  price,
  category,
  imgSrc,
  priceMultiplier,
}) {
  const { handleCounterChange, getInitialCounterValue } = useProductCounter(id)

  const isRowCard = type === 'row-card'

  const renderCounter = size => (
    <Counter
      onChange={handleCounterChange}
      buttonText="Add to cart"
      initialValue={getInitialCounterValue()}
      size={size}
    />
  )

  const LinkTag = noHref ? 'div' : Link

  return (
    <div className={`product-card product-card_${type}`}>
      <div className="product-card__content">
        <LinkTag to={`../${category}/${id}`} relative="path" className="product-card__image-link">
          <div className="product-card__image-container">
            <img src={imgSrc} alt="" className="product-card__image" />
          </div>
        </LinkTag>

        <LinkTag to={`../${category}/${id}`} relative="path">
          <Text className={`product-card__title ${isRowCard ? 'h6' : 'h5'}`}>
            {name}
          </Text>
        </LinkTag>
        <div className="product-card__rating">
          <Rating value={rating} />
        </div>

        <div className="product-card__price text-m-extra">
          {`$${isRowCard ? ( roundNumber( price * priceMultiplier)) : price}`}
        </div>

        {isRowCard && renderCounter('small')}
      </div>

      {!isRowCard && renderCounter()}
    </div>
  )
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  priceMultiplier: PropTypes.number,
  category: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  noHref: PropTypes.bool,
  type: PropTypes.oneOf(['card', 'row-card']),
}

export default ProductCard
