import React from 'react'

import CartIcon from '../Images/shopping-cart-add.png'
import login from '../Images/people.png'

const Nav = () => {
  return (
    <section className="Nav">
      <nav className="NavList">
        <ul>
          <li>
            <a href="/" role="button">
              {' '}
              Home
            </a>
          </li>
          <li>
            {' '}
            <a href="/About" role="button">
              {' '}
              About
            </a>
          </li>
          <li>
            {' '}
            <a href="/Menu" role="button">
              {' '}
              Menu
            </a>
          </li>
          <li>
            {' '}
            <a href="/Reservation" role="button">
              {' '}
              Reservation
            </a>
          </li>

          <li>
            {' '}
            <a href="/Login" role="button">
              {' '}
              Login
            </a>
            <img className="icon" src={login} alt=""></img>
          </li>
          <li className="LinkDecor">
            {' '}
            <a href="/Cart" role="button">
              {' '}
              MyCart
            </a>
            <img className="icon" src={CartIcon} alt=""></img>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Nav
