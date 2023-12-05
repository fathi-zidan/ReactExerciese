import { createContext, useState, useContext } from 'react';
import React from 'react';
import './ThemeContext.css'

export const ThemeContext = createContext();

export  function ThemeProvider({ children }) {
    const [isNightMode, setIsNightMode] = useState(false);

    function toggleMode() {
        setIsNightMode((isNightMode) => !isNightMode);
    }
    return (
        <div className='ThemeContainer'>
            <ThemeContext.Provider value={{ isNightMode, toggleMode }}>
                {children}
            </ThemeContext.Provider>
        </div>
    );


}