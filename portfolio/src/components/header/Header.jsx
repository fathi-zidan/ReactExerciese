import './header.css'
import React, { useState } from 'react'
const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const ss=()=>{
        showMenu(!Toggle);
        console.log("Clicked",Toggle);

    }
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Fathi </a>
                <div className={Toggle ? "nav__menu show-menu" : "nav_menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="uil uil-estate nav__icons"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icons"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icons"></i>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icons"></i>Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icons"></i>Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icons"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i className='uil uil-times nav__close' onClick={() => showMenu(Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={ss}>
                    <i className='uil uil-apps'></i>
                </div>
            </nav>
        </header>
    );
}

export default Header