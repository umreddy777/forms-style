import React from 'react'
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Home.css'
// import logo from '../Images/imgasd-removebg-preview.png'
import Navbar from './Navbar/Navbar';
import Landing from './Landing/Landing';

function Home() {
    return (
        <>
        <Navbar/>
        <Landing/>
        </>
    )
}

export default Home