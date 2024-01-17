import React, { useState } from 'react'

const Menu = (props) => {
  const { img, title, description, price } = props

  return (
    <article>
      <div></div>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{description}</h4>

      <h3>{price}</h3>

      <button className="Button2">Add to Cart</button>
      <hr />
      <br />
    </article>
  )
}

export default Menu
