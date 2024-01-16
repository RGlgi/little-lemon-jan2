import img1 from '../Images/3b97d1aaeb0c85a7222b2a4f2553d496ed5bd115.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

const BookNow = () => {
  return (
    <div className="BookNow">
      <div className="BookNowArticle">
        <h2>Book Now!</h2>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. "{' '}
        </p>
        <Link to="/Reservation" role="button">
          <button className="Button1">Book Now!</button>
        </Link>
      </div>
      <div className="BookNowImgContainer">
        <img src={img1} alt=""></img>
      </div>
    </div>
  )
}
export default BookNow
