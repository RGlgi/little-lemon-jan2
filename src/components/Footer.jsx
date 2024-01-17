import footerLogo from '../Images/Asset 20@4x.png'
import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="Footer">
      <section section class="BLogo">
        <img className="LogoB" src={footerLogo} alt="footerLogo"></img>
      </section>
      <section class="FooterLinks">
        <ul>
          <li>
            <Link to="/" role="button">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" role="button">
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" role="button">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/Reservation" role="button">
              Reservation
            </Link>
          </li>
          <li>
            <Link to="/Reservation" role="button">
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/login" role="button">
              Login
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            {' '}
            <a href="/"> Address</a>
          </li>
          <li>
            {' '}
            <a href="/"> Phone Number</a>
          </li>
          <li>
            {' '}
            <a href="/"> Email</a>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
