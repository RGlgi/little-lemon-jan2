import React, { useState } from 'react'
import fIm from '../Images/Asset 9@4x.png'
import { Link } from 'react-router-dom'
import img1 from '../Images/fine-dining-food-presentation-1327945.jpg'
import img2 from '../Images/paella-1442142.jpg'
import FeedbackForm from './FeedbackForm'

const BookingForm = () => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [diners, setDiners] = useState('')
  const handleEventDinersChange = (e) => {
    setDiners(e.target.value)
  }
  const [eventType, setEventType] = useState('')
  const handleEventTypeChange = (e) => {
    setEventType(e.target.value)
  }

  const [selectedOption, setSelectedOption] = useState('')
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value)
  }

  const [bookingConfirmed, setBookingConfirmed] = useState(false)
  const [error, setError] = useState('')

  //Validation

  const validateBookingForm = () => {
    let isValid = true
    const newErrors = {}
    if (date.trim() === '') {
      newErrors.date = 'Date is required'
      isValid = false
    }
    if (time.trim() === '') {
      newErrors.time = 'Time is required'
      isValid = false
    }
    if (diners.trim() === '') {
      newErrors.diners = 'diners number is required'
      isValid = false
    } else if (!/^\d{10}$/.test(diners)) {
      newErrors.diners = 'Diners number is invalid'
      isValid = false
    }
    setError(newErrors)
    return isValid
  }
  //END

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateBookingForm()) {
      setError('Please fill in all fields')
      return
    }
    setBookingConfirmed(true)
    setError('')
  }
  return (
    <div className="formContainer">
      {bookingConfirmed ? (
        <div className="BookingSubmited">
          <h2>Thank you for your booking!</h2>

          <h4>
            You Booked for {eventType}. <br />
            Your Guest number is {diners}. <br />
            on {date}, at {time}. <br />
            Your Seating option is {selectedOption}. <br />
            Please click the button below for payment.
          </h4>
          <Link to="/PaymentBook" role="button">
            <button className="Button2">Pay Now!</button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="formTitle">
            <h1>Little Lemon </h1>
            <img src={fIm} alt=""></img>
            <h2>Chicago</h2>
            <p>Find a table for any occasion</p>
          </div>
          <div className="BookImg">
            <img src={img1} alt=""></img>
            <img src={img2} alt=""></img>
          </div>
          {error && <p>{error}</p>}
          <label>
            <input
              placeholder="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />{' '}
            {error.date && <span>{error.date}</span>}
          </label>
          <br />
          <label>
            <input
              placeholder="Time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            {error.time && <span>{error.time}</span>}
          </label>
          <br />
          <label>
            <input
              value={diners}
              onChange={handleEventDinersChange}
              type="number"
              placeholder="Number of Guests"
              min="1"
              max="10"
              id="guests"
            />
            {error.diners && <span>{error.diners}</span>}
            <br />
          </label>
          <label>
            <select value={eventType} onChange={handleEventTypeChange}>
              <option value="" disabled>
                Select Occasion
              </option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Others">Others</option>
            </select>
          </label>
          <div className="sh3">
            <h3>Seating Options:</h3>
          </div>
          <label>
            Standard:
            <input
              type="checkbox"
              value="Standard"
              checked={selectedOption === 'Standard'}
              onChange={handleOptionChange}
            />
          </label>

          <label>
            isOutside:
            <input
              type="checkbox"
              value="isOutside"
              checked={selectedOption === 'isOutside'}
              onChange={handleOptionChange}
            />
          </label>
          <br />
          <button className="LoginButton " type="submit">
            Lets go
          </button>
        </form>
      )}
    </div>
  )
}

export default BookingForm
