import { CartIcon } from 'shared/icons'
import { getClassName } from 'shared/utils'
import 'features/cart/CartButton/styles.css'

function CartButton () {
  //TODO: Implement increase of products count with store
  const num = 0

  return (
    <div
      key={num}
      className={getClassName('cart', { 'cart_active': num > 0 })}
    >
      <CartIcon className="cart-icon" />
      <div className="cart__background" />
      <div className="cart__animation-shadow" />
      {num > 0 && (
        <div className="cart__products-count">{num}</div>
      )}
    </div>
  )
}

export default CartButton
