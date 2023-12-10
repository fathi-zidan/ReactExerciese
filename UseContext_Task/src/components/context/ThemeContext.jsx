import { useEffect } from 'react';
import React, { useState, useContext, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider= ({children})=>{
    const [isChecked,setIsChecked] = useState(false);

    function themeToggle(){
        setIsChecked((checked)=>!checked)
    }
    return(
        <ThemeContext.Provider value={{themeToggle,isChecked}}>
            {children}
        </ThemeContext.Provider>
    )

}
export const useTheme = () => {
    return useContext(ThemeContext);
};