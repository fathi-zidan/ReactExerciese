import React from 'react';
import './About.css'
import { Component,useState,useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


const AboutPage = () => {
    const {isNightMode, toggleMode} =useContext(ThemeContext);
  return (
    <div className={isNightMode ? 'aboutPage-dark' : 'aboutPage-day'}>
      <h2>About  Page</h2>
    </div>
  );
};

export default AboutPage;