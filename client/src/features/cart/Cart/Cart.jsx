import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ProductCard } from 'features/products/ProductCard'
import { products } from 'mock/products'
import { Button } from 'shared/ui/Button'
import { Card } from 'shared/ui/Card'
import { Text } from 'shared/ui/Text'
import { Wrapper } from 'shared/ui/Wrapper'
import useCart from './useCart'
import './styles.css'

function Cart() {
  const { cart } = useSelector(state => state.productCatalog)
  const { totalPrice } = useCart()

  const renderProducts = () => {
    return cart?.map(({ id: productInCartId, count }) => {
      const {
        id,
        imgSrc,
        category,
        price,
        rating,
        name
      } = products.find(({ id: productId }) => productId === productInCartId)

      return (
        <Card key={id} className="cart__product-card" color="white">
          <ProductCard
            id={id}
            price={price}
            category={category}
            rating={rating}
            name={name}
            priceMultiplier={count}
            imgSrc={imgSrc}
            type="row-card"
            noHref
          />
        </Card>
      )
    })
  }

  return (
    <div className="cart">
      <Wrapper>
        <Text className="cart__title h2">
          Cart
        </Text>
        {
          cart?.length > 0 && (
            <>
              {renderProducts()}
              <Card className="cart__product-card" color="white">
                <div className="cart__product-total-container">
                  <Text className="cart__product-total-title h5">
                    Total
                  </Text>
                  <Text className="cart__product-total-value h5">
                    {`$${totalPrice}`}
                  </Text>
                </div>

                <Button color="green" className="cart__product-total-button">
                  Order
                </Button>
              </Card>
            </>
          )
        }
        {
          cart?.length === 0 && (
            <>
              <div className="cart__product-empty-image-container">
                <img src="/images/cart/cartEmpty.png" className="cart__product-empty-image" alt="avatar" />
              </div>
              <Text className="cart__product-empty-title h4">
                Your cart is empty
              </Text>
              <Text className="cart__product-empty-description text-lg" color="gray">
                {'It looks like you haven\'t added anything to your cart yet. So it\'s time to go back to the store and choose something!'}
              </Text>
              <Link to="/">
                <Button color="green" className="cart__product-empty-button">
                  Go to store!
                </Button>
              </Link>
            </>
          )
        }
      </Wrapper>
    </div>
  )
}

export default Cart
