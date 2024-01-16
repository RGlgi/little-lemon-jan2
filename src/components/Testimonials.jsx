import TData from './TData'
import TP from './TP'
import React from 'react'

const Testimonials = () => {
  return (
    <section className="Testimonials">
      <div className="T-Title ">
        <h1>Testimonials</h1>
      </div>

      <section className="TList">
        {TData.map((t) => {
          const { img, name, time, star, review, id } = t
          return (
            <TP
              img={img}
              name={name}
              time={time}
              star={star}
              review={review}
              key={id}
            />
          )
        })}
      </section>
    </section>
  )
}

export default Testimonials
