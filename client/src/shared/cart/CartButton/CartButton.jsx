import { Link } from 'react-router-dom'
import { CartIcon } from 'shared/icons'
import { getClassName } from 'shared/utils'
import useCart from '../Cart/useCart'
import { routerPath } from 'pages/routes/const'
import './styles.css'

function CartButton () {
  const { productsCount } = useCart()

  return (
    <Link
      to={routerPath.cart}
      key={productsCount}
      className={getClassName('cart-button', { 'cart-button_active': productsCount > 0 })}
    >
      <CartIcon className="cart-button-icon" />
      <div className="cart-button__background" />
      <div className="cart-button__animation-shadow" />
      {productsCount > 0 && (
        <div className="cart-button__products-count">{productsCount < 100 ? productsCount : '99+'}</div>
      )}
    </Link>
  )
}

export default CartButton
