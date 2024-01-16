import React from 'react'
import { Link } from 'react-router-dom'
import MenuData from './MenuData'
import OrderOnlineList from './OrderOnlineList'
import { useState } from 'react'

const OrderOnline = () => {
  const clickHandler = () => console.log('clicked')
  const [cart, setCart] = useState(0)
  return (
    <section className="OrderContainer">
      <article className="OrderMain">
        <h1> Little Lemon </h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="Button2">Reserve a Table</button>
      </article>
      <section className="orderLinks">
        <h1>ORDER FOR DELIVERY!</h1>
        <section class="oLinks">
          <ul>
            <li>
              <Link to="/" role="button">
                Lunch
              </Link>
            </li>
            <li>
              <Link to="/" role="button">
                Mains
              </Link>
            </li>
            <li>
              <Link to="/" role="button">
                Desserts
              </Link>
            </li>
            <li>
              <Link to="/" role="button">
                A La Carte
              </Link>
            </li>
            <li>
              <Link to="/" role="button">
                Salad
              </Link>
            </li>
            <li>
              <Link to="/" role="button">
                Cake
              </Link>
            </li>
          </ul>
          <hr />
        </section>
        <section>
          <h1>Items at Cart: {cart}</h1>
          {MenuData.map((menu) => {
            const { title, description, price, id } = menu
            return (
              <OrderOnlineList
                title={title}
                description={description}
                price={price}
                key={id}
              />
            )
          })}
          <button
            className="Button3"
            onClick={() => {
              setCart(cart + 1)
              clickHandler()
            }}
          >
            Add to Cart
          </button>
        </section>
      </section>
    </section>
  )
}

export default OrderOnline
