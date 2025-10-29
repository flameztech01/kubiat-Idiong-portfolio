import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Works from '../components/Works'
import About from '../components/About'
import Contact from '../components/Contact'
import Form from '../components/Form'

const Homescreen = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Works />
      <Contact />
      <Form />
    </div>
  )
}

export default Homescreen
