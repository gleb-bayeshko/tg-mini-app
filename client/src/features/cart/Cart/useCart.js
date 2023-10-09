import { useSelector } from 'react-redux'
import { products } from 'mock/products'
import { roundNumber } from 'shared/utils'

function useCart() {
  const { cart } = useSelector(state => state.productCatalog)

  const productsCount = cart?.reduce((count, { count: currentCount }) => count + currentCount, 0)
  const totalPrice = cart?.reduce((price, { id, count }) => {
    const { price: productPrice } = products.find(({ id: productId }) => productId === id)

    return price + (productPrice * count)
  }, 0)

  return {
    productsCount,
    totalPrice: roundNumber(totalPrice)
  }
}

export default useCart
