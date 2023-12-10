import './InfoPage.css'
import React,{useContext,useEffect,useState} from 'react';
import Timer from '../Timer/Timer';
import { useNav } from '../context/NavigationContext';
import { useTheme } from '../context/ThemeContext';

function InfoPage(){
    const {currentPage, navigateTo} = useNav();
    const { themeToggle, isChecked } = useTheme();

    return(
        <div className= {isChecked? 'info-page-dark' : 'info-page'}>
            <Timer/>
            <h1>Info Page</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti delectus porro adipisci nam repellendus provident consequatur, ad nobis modi atque nesciunt facilis doloremque quae incidunt nulla dolores ut voluptates facere.</p>
            <button className={isChecked ? 'button-dark' : ''} onClick={()=>navigateTo('animal')}>Go To Animal Page</button>

        </div>
    )
}
export default InfoPage;