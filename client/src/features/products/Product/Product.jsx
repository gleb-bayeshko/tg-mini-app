import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from 'mock/products'
import { Counter } from 'shared/ui/Counter'
import Rating from 'shared/ui/Rating/Rating'
import { Spinner } from 'shared/ui/Spinner'
import { Text } from 'shared/ui/Text'
import { Wrapper } from 'shared/ui/Wrapper'
import './styles.css'

function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  const [counter, setCounter] = useState(0)

  const handleCounterChange = count => {
    setCounter(count)
  }

  useEffect(() => {
    // {
    //   id: productId,
    //     name,
    //     rating,
    //     price,
    //     brand,
    //     lifeStage,
    //     category,
    //     imgSrc,
    // }

    // Imitate request
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
