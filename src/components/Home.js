import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Home.css'
import logo from '../Images/imgasd-removebg-preview.png'

function Home() {
    return (
        <div className='margin'>
            <div className='links-style'>
            {/* <h5>Home</h5> */}
            <img src={logo} alt="My Image" style={{width: '100px', height: '100px'}}/>
            <div style={{padding: "1em"}}>
            <Link style={{marginRight: "30px"}} to="/">Home</Link>
            <Link style={{marginRight: "30px"}} to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </div>
            </div>
        </div>
    )
}

export default Home