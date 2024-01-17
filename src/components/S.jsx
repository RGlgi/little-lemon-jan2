import cartImg from '../Images/shopping-cart-add.png'
import React from 'react'

const S = (props) => {
  const { img, title, description, price } = props
  return (
    <article className="Specials-Article">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{description}</h4>
      <div className="PriceCartImg">
        <img src={cartImg} alt="cartImg"></img>
        <h3>{price}</h3>
      </div>
    </article>
  )
}

export default S
