import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import fIm from '../Images/Asset 9@4x.png'
import 'react-time-picker/dist/TimePicker.css'
import 'react-clock/dist/Clock.css'

export default function SignUp({ addUser }) {
  const [newUserName, setNewUserName] = useState('')
  const handleEventNewUserName = (e) => {
    setNewUserName(e.target.value)
  }
  const [newUserLastName, setNewUserLastName] = useState('')
  const handleEventNewUserLastName = (e) => {
    setNewUserLastName(e.target.value)
  }
  const [newUserEmail, setNewUserEmail] = useState('')
  const handleEventNewUserEmail = (e) => {
    setNewUserEmail(e.target.value)
  }
  const [newUserPassword, setNewUserPassword] = useState('')
  const handleEventNewUserPassword = (e) => {
    setNewUserPassword(e.target.value)
  }
  const [newUserPhone, setNewUserPhone] = useState('')
  const handleEventNewUserPhone = (e) => {
    setNewUserPhone(e.target.value)
  }
  const [userConfirmed, setUserConfirmed] = useState(false)
  const [error, setError] = useState('')

  const validateSigUpForm = () => {
    let isValid = true
    const newErrors = {} // Validate name
    if (newUserName.trim() === '') {
      newErrors.userName = 'Name is required'
      isValid = false
    } // Validate last name
    if (newUserLastName.trim() === '') {
      newErrors.userLastName = 'Last Name is required'
      isValid = false
    } // Validate email
    if (newUserEmail.trim() === '') {
      newErrors.userEmail = 'Email is required'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(newUserEmail)) {
      newErrors.userEmail = 'Email is invalid'
      isValid = false
    } // Validate phone
    if (newUserPhone.trim() === '') {
      newErrors.userPhone = 'Phone is required'
      isValid = false
    } else if (!/^\d{10}$/.test(newUserPhone)) {
      newErrors.userPhone = 'Phone is invalid'
      isValid = false
    } // Validate password
    if (newUserPassword.trim() === '') {
      newErrors.userPassword = 'Password is required'
      isValid = false
    }
    setError(newErrors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateSigUpForm()) {
      const newUser = {
        newUserName,
        newUserLastName,
        newUserEmail,
        newUserPhone,
        newUserPassword,
      }
      addUser(newUser)
      setNewUserName('')
      setNewUserLastName('')
      setNewUserEmail('')
      setNewUserPhone('')
      setNewUserPassword('')
      setError({})
    }
  }

  return (
    <div className="formContainer">
      {userConfirmed ? (
        <div>You have been added to our System. Thank you!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <div className="formTitle">
            <img src={fIm} alt="" /> <h1>Little Lemon</h1> <h2>Chicago</h2>
            <p>Sign in to collect points</p>
          </div>
          <label>
            {' '}
            <input
              placeholder="Name"
              type="text"
              value={newUserName}
              onChange={handleEventNewUserName}
            />
            {error.newUserName && <span>{error.newUserName}</span>}
          </label>

          <label>First name is required</label>
          <input
            placeholder="Lastname"
            type="text"
            value={newUserLastName}
            onChange={handleEventNewUserLastName}
          />
          {error.newUserLastName && <span>{error.newUserLastName}</span>}
          <label>Last name is required</label>
          <input
            placeholder="Phone Number"
            type="number"
            value={newUserPhone}
            onChange={handleEventNewUserPhone}
          />
          {error.newUserPhone && <span>{error.newUserPhone}</span>}
          <label>Phone number is required</label>
          <input
            placeholder="Email"
            type="email"
            value={newUserEmail}
            onChange={handleEventNewUserEmail}
          />
          {error.newUserEmail && <span>{error.newUserEmail}</span>}
          <label>Email is required</label>
          <input
            placeholder="Password"
            type="password"
            value={newUserPassword}
            onChange={handleEventNewUserPassword}
          />
          {error.newUserPassword && <span>{error.newUserPassword}</span>}
          <label>6-character password is all you need</label>
          <textarea
            placeholder="Add a special request (optional)"
            style={{
              height: '8rem',
              width: '25rem',
              borderRadius: '0.4rem',
              padding: '1rem',
              wrap: 'soft',
            }}
          />
          <button className="LoginButton" type="submit">
            Signup
          </button>
        </form>
      )}
    </div>
  )
}
