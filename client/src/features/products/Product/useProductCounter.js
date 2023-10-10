import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCartWithCount,removeProductFromCart } from 'features/cart/Cart/cartSlice'
import { products } from 'mock/products'

function useProductCounter(id) {
  const { products: productsInCart } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleCounterChange = useCallback(count => {
    if (count === 0 ) {
      dispatch(removeProductFromCart({ id }))

      return
    }

    const { name, price } = products.find(({ id: productId }) => `${productId}` === `${id}`)

    dispatch(addProductToCartWithCount({ count, id, name, price }))
  }, [id, dispatch])

  const getInitialCounterValue = () => {
    const productInCart = productsInCart.find(({ id: inCartId }) => inCartId === +id)

    if (productInCart) {
      return +productInCart.count
    }

    return 0
  }

  return {
    handleCounterChange,
    getInitialCounterValue,
  }
}

export default useProductCounter
