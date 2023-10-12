import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeProductFromCart } from 'features/cart/Cart/cartSlice'
import { useProductCounter } from 'features/products/Product'
import PropTypes from 'prop-types'
import { useDelayUnmount } from 'shared/hooks'
import { CloseIcon } from 'shared/icons'
import { Card } from 'shared/ui/Card'
import { Counter } from 'shared/ui/Counter'
import { Rating } from 'shared/ui/Rating'
import { Text } from 'shared/ui/Text'
import { getClassName, roundNumber } from 'shared/utils'
import { routerPath } from 'pages/routes/const'
import './styles.css'

function ProductCard({
  type = 'card',
  className,
  id,
  name,
  rating,
  price,
  category,
  imgSrc,
  priceMultiplier,
}) {
  const [isMounted, setIsMounted] = useState(true)
  const { handleCounterOnChange, handleCounterOnZero, getInitialCounterValue } = useProductCounter(id)
  const dispatch = useDispatch()

  const handleDeleteIcon = () => {
    setIsMounted(false)
  }

  const handleRemoveProduct = () => {
    dispatch(removeProductFromCart({ id }))
  }

  const shouldRender = useDelayUnmount(isMounted, 250, handleRemoveProduct)

  const isRowCard = type === 'row-card'
  const Tag = isRowCard ? Card : 'div'

  const renderCounter = size => (
    <Counter
      onChange={handleCounterOnChange}
      buttonText="Add to cart"
      initialValue={getInitialCounterValue()}
      onZeroCount={isRowCard ? handleDeleteIcon : handleCounterOnZero}
      size={size}
    />
  )

  return shouldRender && (
    <Tag
      className={getClassName(
        `product-card product-card_${type}`,
        {
          'product-card_deleted': isRowCard && !isMounted,
          [className]: !!className
        }
      )}
      color={isRowCard && 'white'}
    >
      {isRowCard && (
        <CloseIcon
          className="product-card__icon-delete"
          onClick={handleDeleteIcon}
        />
      )}
      <div className="product-card__content">
        <Link to={`${routerPath.products}/${category}/${id}`} className="product-card__image-link">
          <div className="product-card__image-container">
            <img src={imgSrc} alt="" className="product-card__image" />
          </div>
        </Link>

        <Link to={`${routerPath.products}/${category}/${id}`}>
          <Text className={`product-card__title ${isRowCard ? 'h6' : 'h5'}`}>
            {name}
          </Text>
        </Link>
        <div className="product-card__rating">
          <Rating value={rating} />
        </div>

        <div className="product-card__price text-m-extra">
          {`$${isRowCard ? ( roundNumber( price * priceMultiplier)) : price}`}
        </div>

        {isRowCard && renderCounter('small')}
      </div>

      {!isRowCard && renderCounter()}
    </Tag>
  )
}

ProductCard.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  priceMultiplier: PropTypes.number,
  category: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['card', 'row-card']),
}

export default ProductCard
