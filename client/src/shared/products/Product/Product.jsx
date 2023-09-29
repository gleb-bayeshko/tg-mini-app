import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProductCounter } from 'features/products/Product/index'
import { products } from 'mock/products'
import { Counter } from 'shared/ui/Counter'
import { Rating } from 'shared/ui/Rating'
import { Spinner } from 'shared/ui/Spinner'
import { Text } from 'shared/ui/Text'
import { Wrapper } from 'shared/ui/Wrapper'
import './styles.css'

function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { handleCounterChange, getInitialCounterValue } = useProductCounter(id)

  // Imitate request
  useEffect(() => {
    const product = products.find(({ id: productId }) => `${productId}` === `${id}`)
    setProduct(product)
  }, [id])

  return product
    ? (
      <div className="product-main">
        <Wrapper>
          <div className="product-main__image-container">
            <img src={product.imgSrc} alt="" className="product-main__image" />
          </div>
          <Text className="product-main__title h4">
            {product.name}
          </Text>
          <Text className="product-main__description text-m-extra">
            {product.description}
          </Text>
          <div className="product-main__rating">
            <Rating value={product.rating} />
          </div>
          <div className="product-main__price text-m-extra">
            {`$${product.price}`}
          </div>
          <Counter
            onChange={handleCounterChange}
            buttonText="Add to cart"
            className="product-main__add-to-cart"
            initialValue={getInitialCounterValue()}
          />
        </Wrapper>
      </div>
    )
    : (
      <div className="product-main__spinner">
        <Spinner />
      </div>
    )
}

export default Product
