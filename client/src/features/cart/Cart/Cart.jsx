import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTelegramContext } from 'app/Telegram'
import { clearInvoiceLink, sendCartToInvoice } from 'features/cart/Cart/cartSlice'
import { ProductCard } from 'features/products/ProductCard'
import { MOCK_PROMO } from 'features/promo/PromoBanner/PromoBannerModal/PromoBannerModal'
import { products } from 'mock/products'
import { Button } from 'shared/ui/Button'
import { Card } from 'shared/ui/Card'
import { Text } from 'shared/ui/Text'
import { Wrapper } from 'shared/ui/Wrapper'
import useCart from './useCart'
import './styles.css'

function Cart() {
  const { products: productsInCart, invoiceLink } = useSelector(state => state.cart)
  const { totalPrice } = useCart()
  const { mainButton, tgApp, cloudStorage } = useTelegramContext()
  const [isCartEmpty, setIsCartEmpty] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    isCartEmpty
      ? mainButton.close()
      : mainButton.open()

    return () => {
      mainButton.close()
    }
  }, [isCartEmpty, mainButton])

  useEffect(() => {
    mainButton.setText('Make order')
  }, [])

  useEffect(() => {
    if (invoiceLink) {
      dispatch(clearInvoiceLink())
      console.log(invoiceLink)
      tgApp.openInvoice(invoiceLink, status => {
        if (status === 'paid') {
          tgApp.close()
        } else if (status === 'failed') {

        }
      })
    }
  }, [invoiceLink])

  useEffect(() => {
    const handleMainButtonClick = () => {
      dispatch(sendCartToInvoice())
    }
    window.addEventListener('tgMainButtonClick', handleMainButtonClick)

    return () => {
      window.removeEventListener('tgMainButtonClick', handleMainButtonClick)
    }
  }, [dispatch])

  useEffect(() => {
    setIsCartEmpty(productsInCart.length === 0)
  }, [productsInCart.length])

  const renderProducts = () => {
    return productsInCart?.map(({ id: productInCartId, count }) => {
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
          !isCartEmpty && (
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
              </Card>
            </>
          )
        }
        {
          isCartEmpty && (
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
