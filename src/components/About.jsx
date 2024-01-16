import React from 'react'
import AboutImage from '../Images/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg'
import AIIcon from '../Images/Asset 9@4x.png'
export default function About() {
  return (
    <section className="About">
      <div className="ai">
        {' '}
        <img className="iconAbout" src={AIIcon} alt=""></img>
      </div>

      <div className="AboutUs">
        <h1>About Us</h1>
      </div>
      <div className="ap">
        {' '}
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist. We are a family owned
          Mediterranean restaurant, focused on traditional recipes served with a
          modern twist.
        </p>
      </div>

      <div className="aimg">
        <img className="imageAbout" src={AboutImage} alt=""></img>
      </div>
    </section>
  )
}
