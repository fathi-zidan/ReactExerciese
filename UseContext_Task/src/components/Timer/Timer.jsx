import { useTheme } from '../context/ThemeContext';
import { useTimer } from '../context/TimerContext';
import './Timer.css'
import React, { useContext, useEffect, useState } from 'react';

function Timer() {
    const { timer } = useTimer();
    const { themeToggle, isChecked } = useTheme();
    // console.log(isChecked);
    return (
        <div className="timer">
            <h3>Time Elapsed: {timer}</h3>
            <section className='cc-input'>
                <label htmlFor='time'>{isChecked ? 'Dark' : 'Light'}</label>
                <input type='checkbox' onClick={themeToggle} />
            </section>
        </div>
    );
}
export default Timer;