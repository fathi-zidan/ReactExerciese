import './Button.css'
import React from 'react'
import { useState } from 'react'
export default function Buttons (){
    const [num, setNum] = useState(0);
    return (
        <div className='btn_container'>
            <h1>{num}</h1>
            <button onClick={() => setNum(num + 1)}>+</button>
            <button onClick={() => setNum(num - 1)}>-</button>
        </div>
    );
}
