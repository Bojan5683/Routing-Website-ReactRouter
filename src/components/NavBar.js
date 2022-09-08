import React from 'react'
import '../assets/NavBar.css';

import { Link } from "react-router-dom";


function NavBar() {
  return (
    <div>
    <nav>
        <div className='navbar'>
            <Link className='logo' to="/">Travel Agency</Link>
            <ul className='links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/products">Products</Link></li>
                <button className='gumb' type='submit'>SIGN UP</button>
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default NavBar