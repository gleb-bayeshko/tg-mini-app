import { useRef } from 'react'
import cartAnimation from 'assets/lotties/cart/cart.json'
import CartLottie from 'features/ui/Lottie/Lottie.jsx'
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
