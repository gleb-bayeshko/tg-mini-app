import { useState } from 'react'
import { CartIcon } from 'shared/icons'
import { getClassName } from 'shared/utils'
import 'features/cart/CartButton/styles.css'

function CartButton () {
  //TODO: Implement increase of products count with store
  const [count, setCount] = useState(0)

  return (
    <div
      key={count}
      className={getClassName('cart', { 'cart_active': count > 0 })}
      onClick={() => {
        setCount(prev => ++prev)
      }}
    >
      <CartIcon className="cart-icon" />
      <div className="cart__background" />
      <div className="cart__animation-shadow" />
      {count > 0 && (
        <div className="cart__products-count">{count < 100 ? count : '99+'}</div>
      )}
    </div>
  )
}

export default CartButton
