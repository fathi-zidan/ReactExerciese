import React from 'react';
import './Home.css'
import { Component,useState,useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


const HomePage = () => {
    const {isNightMode, toggleMode} =useContext(ThemeContext);
  return (
    <div className={isNightMode ? 'homePage-dark' : 'homePage-day'}>
      <h2>Home Page</h2>
    </div>
  );
};

export default HomePage;