import { useEffect } from 'react';
import React, { useState, useContext, createContext } from 'react';

export const TimerContext = createContext();
export const TimerProvider = ({ children }) => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const intervalID =
            setInterval(()=>{
                setTimer((pre)=>pre + 1);
            }, 1000)
        
        console.log(timer);
        return () => clearInterval(intervalID);
        console.log(timer);

    }, [])


    return (
        <TimerContext.Provider value={{ timer}}>
            {children}
        </TimerContext.Provider>
    );
}

export const useTimer= ()=>{
    return useContext(TimerContext)
}
