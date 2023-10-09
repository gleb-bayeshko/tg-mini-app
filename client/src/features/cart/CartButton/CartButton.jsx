import { useState } from 'react'
import { useSelector } from 'react-redux'
import { CartIcon } from 'shared/icons'
import { getClassName } from 'shared/utils'
import 'features/cart/CartButton/styles.css'

function CartButton () {
  //TODO: Implement increase of products count with store
  const { cart } = useSelector(state => state.productCatalog)
  const productsCount = cart?.reduce((count, { count: currentCount }) => count + currentCount, 0)

  return (
    <div
      key={productsCount}
      className={getClassName('cart', { 'cart_active': productsCount > 0 })}
    >
      <CartIcon className="cart-icon" />
      <div className="cart__background" />
      <div className="cart__animation-shadow" />
      {productsCount > 0 && (
        <div className="cart__products-count">{productsCount < 100 ? productsCount : '99+'}</div>
      )}
    </div>
  )
}

export default CartButton
