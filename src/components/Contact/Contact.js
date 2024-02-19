import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Contact() {
  return (
    <>
    <Navbar/>
    <div>Contact</div>
    <div><Link style={{marginRight: "30px"}} to="/" className='button-29'>Back</Link></div>
    <div>
      
    </div>
    </>
  )
}

export default Contact