import { useRef } from 'react'
import { Lottie as CartLottie } from 'shared/ui/Lottie'
import cartAnimation from 'shared/assets/lotties/cart/cart.json'
import './styles.css'

function Cart () {
  const ref = useRef()

  return (
    <div
      className="cart" onClick={() => {
        ref.current?.play()
      }}>
      <CartLottie
        ref={ref}
        animationData={cartAnimation}
        styles={{ width: 55, }}
      />
    </div>
  )
}

export default Cart
