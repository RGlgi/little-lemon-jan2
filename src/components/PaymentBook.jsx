import React, { useState } from 'react'
import AIIcon from '../Images/Asset 9@4x.png'
import fIm from '../Images/Asset 9@4x.png'
import BookingForm from './BookingForm'
import cvvIcon from '../Images/cvv.png'

const PaymentBook = () => {
  const [CardHolderNameLastName, setCardHolderNameLastName] = useState('')
  const [CardNumber, setCardNumber] = useState('')
  const [CardExpDate, setCardExpDate] = useState('')
  const [CardCVV, setCardCVV] = useState('')
  const [isSelected, setelected] = useState('')

  const handleSelectedChange = (e) => {
    setelected(e.target.value)
  }

  const [bookingConfirmed, setBookingConfirmed] = useState(false)
  const [error, setError] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !CardHolderNameLastName ||
      !CardNumber ||
      !CardCVV ||
      !CardExpDate
      //   !DateTimeNumberOfDinners ||
      //   !selectedOption
    ) {
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
          <div className="ai">
            <img className="iconAbout" src={AIIcon} alt=""></img>
          </div>
          <h2>Thank you for your booking!</h2>

          <h3>We will send you {isSelected}</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="formTitle">
            <h1>Little Lemon </h1>
            <img src={fIm} alt=""></img>
            <h2>Chicago</h2>
            <br />
            <h1>Payment</h1>
            <br />
          </div>
          {error && <p>{error}</p>}

          <br />
          <h2>Credit Card Details</h2>
          <label>
            <input
              placeholder="*Card Number"
              type="number"
              value={CardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </label>
          <h5>Card Number is required</h5>
          <br />
          <label>
            <input
              placeholder="*First Name/Last Name"
              type="text"
              value={CardHolderNameLastName}
              onChange={(e) => setCardHolderNameLastName(e.target.value)}
            />
          </label>
          <h5>Name is required</h5>
          <br />
          <div className="cardPay">
            <input
              type="date"
              value={CardExpDate}
              onChange={(e) => setCardExpDate(e.target.value)}
            />
            <input
              type="number"
              value={CardCVV}
              onChange={(e) => setCardCVV(e.target.value)}
            />
            <div className="cvvIMG">
              <img src={cvvIcon} alt="" />
            </div>
          </div>
          <div className="radiosPayment">
            <label>
              Send me booking confirmation via email
              <input
                type="radio"
                value="email"
                checked={isSelected === 'email'}
                onChange={handleSelectedChange}
              />
            </label>

            <label>
              Send me booking confirmation via text
              <input
                type="radio"
                value="text"
                checked={isSelected === 'text'}
                onChange={handleSelectedChange}
              />
            </label>
          </div>

          <br />
          <button className="LoginButton " type="submit">
            Book
          </button>
        </form>
      )}
    </div>
  )
}

export default PaymentBook
