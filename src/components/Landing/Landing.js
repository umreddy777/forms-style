import React from 'react'
import './Landing.css'
import Earth from '../../Images/vedio_bg.mp4'

function Landing() {
  return (
    <div className='hero'>
      <video autoPlay loop muted playsInline>
        <source src={Earth} type='video/mp4'/>
        </video>
        <span className='heading'>Work at the speed of thought</span>
        <button className='shadow__btn'>Explore</button>
    </div>
    
  )
}

export default Landing