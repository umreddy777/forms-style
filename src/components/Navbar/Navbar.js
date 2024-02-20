import React from 'react'
import './Navbar.css'
import logo from '../../Images/infinity-logo1.png'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='background'>
            <div className='links-style'>
                {/* <h5>Home</h5> */}
                <img src={logo} alt="earth" style={{ width: '264px', height: '41px' }} />
                <div className='nav-container'>
                    <Link to="/" style={{marginRight: '30px'}} className='nav-link'>Home</Link>
                    <Link to="/about" style={{marginRight: '30px'}} className='nav-link'>About</Link>
                    <Link to="/contact" className='nav-link'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar