import React from 'react'
import './Contact.css'
import Solar from '../../Images/solar_system_vedio.mp4'
import Navbar from '../Navbar/Navbar'

function Contact() {
  return (
    <>
    <Navbar/>
    <div className='hero'>
      <video autoPlay loop muted playsInline>
        <source src={Solar} type='video/mp4'/>
        </video>
        <span className='heading'>Deep dive into the space.</span>
        <button className='shadow__btn'>Explore</button>
    </div>
    </>
  )
}

export default Contact