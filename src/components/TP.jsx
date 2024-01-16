import React from 'react'
const TP = (props) => {
  const { img, name, time, star, review } = props
  return (
    <article className="TArticle">
      <img className="TImg" src={img} alt={name} />
      <div className="TName">
        <h2>{name}</h2>
      </div>
      <div className="TTime">
        <h4>{time}</h4>
      </div>
      <div className="TStar">
        <h4>{star}</h4>
      </div>
      <div className="TReview">
        <h4>{review}</h4>
      </div>
      <button className="ButtonMore">
        <h1>more...</h1>
      </button>
    </article>
  )
}

export default TP
