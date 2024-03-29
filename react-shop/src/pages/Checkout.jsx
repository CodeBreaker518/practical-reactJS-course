import React from 'react'
import OrderItem from '../components/OrderItem'
import '../styles/Checkout.css'

const Checkout = () => {
  return (
    <div className='Checkout'>
      <div className='Checkout-container'>
        <h1 className='Checkout-title'>My order</h1>
        <div className='Checkout-content'>
          <div className='Checkout-order'>
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
        </div>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
    </div>
  )
}

export default Checkout
