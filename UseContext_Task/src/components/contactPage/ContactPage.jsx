import './ContactPage.css'
import React,{useContext,useState,useEffect,useRef} from 'react';
import { useTheme } from '../context/ThemeContext';

function ContactPage(){
    const { themeToggle, isChecked } = useTheme();


    return(
        <div className={isChecked ? 'contact-container-dark' : 'contact-container'}>
            <form className={isChecked ? 'ff-dark' :'ff'}>
                <h1>Contact Us</h1>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />

                <label htmlFor="email">Email:</label>
                <input type="text" name="email" />

                <label htmlFor="message">Message:</label>
                <textarea type="text" name="message" />

            </form>


        </div>
    )
}
export default ContactPage;