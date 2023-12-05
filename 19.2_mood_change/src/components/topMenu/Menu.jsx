import { ThemeContext } from '../context/ThemeContext';
import './Menu.css'
import React, { Component,useState,useContext } from 'react';

export default function Menu(){
    const {isNightMode, toggleMode} =useContext(ThemeContext);
    return(
        <nav className={isNightMode ? 'dark-nav' : 'nav-container'}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/#about-us">About</a></li>
            </ul>
            <button className={isNightMode ? 'dark_btn' : 'nav_btn'} onClick={toggleMode}>Change Mode</button>
        </nav>
    );

}