import MainLogo from '../Images/lemons-1568220.jpg'
import React from 'react'

const Main = () => {
  return (
    <section className="Main">
      <article className="MainArticle">
        <h1> Little Lemon </h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="Button1">Reserve a Table</button>
      </article>
      <section className="MainImg">
        <meta name="og:image" />

        <img src={MainLogo} alt="MainLogo"></img>
      </section>
    </section>
  )
}

export default Main
