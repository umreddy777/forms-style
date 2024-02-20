import React from 'react'
import './About.css'
import Space from '../../Images/space_vedio.mp4'
import Navbar from '../Navbar/Navbar'

function About() {
  return (
    <>
    <Navbar/>
    <div className='hero'>
      <video autoPlay loop muted playsInline>
        <source src={Space} type='video/mp4'/>
        </video>
        <span className='heading'>We are made of star-stuff.</span>
        <button className='shadow__btn'>Explore</button>
    </div>
    </>
    
  )
}

export default About