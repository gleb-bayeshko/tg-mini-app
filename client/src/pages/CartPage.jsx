import { Cart } from 'features/cart/Cart'
import { Breadcrumbs } from 'shared/ui/Breadcrumbs'

function CartPage() {
  return (
    <div className="cart-page">
      <Breadcrumbs />
      <section className="cart-page__cart">
        <Cart />
      </section>
    </div>
  )
}

export default CartPage
