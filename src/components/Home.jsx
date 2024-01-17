import Main from './Main'

import Footer from './Footer'
import BookNow from './BookNow'
import Testimonials from './Testimonials'
import SDataList from './SDataList'

import '../App.css'
import React from 'react'

function Home() {
  return (
    <div className="App">
      <Main />
      <SDataList />
      <Testimonials />
      <BookNow />

      <Footer />
      <section className="Bottom">
        <h2>Copyright 2024 Little Lemon Restaurant IP, Inc.</h2>
      </section>
    </div>
  )
}

export default Home
