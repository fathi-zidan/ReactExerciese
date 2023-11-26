import './comp1.css'
import React from 'react';
import { useState } from 'react';

export default function ButtonComponent(){
    const [count,setCount] = useState(0);
    const increment = ()=>{
        setCount(count + 1);
    }
    const decrement = ()=>{
        setCount(count - 1);
    }
    return(
        <div className='comp1'>
            <button className='btn' onClick={increment}>Increment</button>
            <button className='btn' onClick={decrement}>Decrement</button>
            <p>Count : {count}</p>
        </div>
    )
}