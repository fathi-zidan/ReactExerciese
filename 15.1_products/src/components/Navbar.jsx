import './Navbar.css'
import React, { useContext, useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav>
            <Link to="/" className='title'>Website</Link>
            <div className='menu' onClick={() => {
                setIsOpen(!isOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={isOpen ? "open" : ""}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Products">Products </NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
