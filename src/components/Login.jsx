import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'
import fIm from '../Images/Asset 9@4x.png'
import 'react-time-picker/dist/TimePicker.css'
import 'react-clock/dist/Clock.css'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="formContainer">
      <form action="/submit-form" onSubmit={handleSubmit}>
        <div className="formTitle">
          <h1>Little Lemon </h1>
          <img src={fIm} alt=""></img>
          <h2>Chicago</h2>
          <p>Log in</p>
        </div>

        <label>Email:</label>
        <input type="email" />
        <label>Password:</label>
        <input type="password" />
        <button className="LoginButton" type="submit">
          Log In
        </button>
        <div className="bottomLogin">
          <Link to="/signup">
            <h3>Don't have an acoount?</h3>
          </Link>
          <h3>Forget Password?</h3>
        </div>
      </form>
    </div>
  )
}

export default Login
