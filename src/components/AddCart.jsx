import React, { useState } from 'react'

export default function AddCart() {
  const clickHandler = () => console.log('clicked')
  const [cart, setCart] = useState(0)
  return (
    <div>
      <h1>Items at Cart: {cart}</h1>
      <button
        className="Button1"
        onClick={() => {
          setCart(cart + 1)
          clickHandler()
        }}
      >
        Add to Cart
      </button>
    </div>
  )
}
