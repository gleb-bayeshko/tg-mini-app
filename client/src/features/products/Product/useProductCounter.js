import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeProductFromCart, setProductWithCount } from '../ProductCatalog/productCatalogSlice'

function useProductCounter(id) {
  const { cart } = useSelector(state => state.productCatalog)
  const dispatch = useDispatch()

  const handleCounterChange = useCallback(count => {
    if (count === 0 ) {
      dispatch(removeProductFromCart({ id }))

      return
    }

    dispatch(setProductWithCount({ count, id }))
  }, [id, dispatch])

  const getInitialCounterValue = () => {
    const productInCart = cart.find(({ id: inCartId }) => inCartId === +id)

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
