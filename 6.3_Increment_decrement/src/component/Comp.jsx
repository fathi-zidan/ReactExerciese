import './Comp.css'
import React from 'react';
import { useState } from 'react';

export default function ButtonComponent(){
    const [count,setCount] = useState(0);
    const increment = ()=>{
        if(count < 10){
            setCount(count + 1);
        }
    }
    const decrement = ()=>{
        if (count > -10) {
            setCount(count - 1);

        }
    }
    const Color = count>0 ? 'green' : count<0 ? 'red' : 'black';
    return(
        <div className='comp'>
            <button className='btn' onClick={increment}>Increment</button>
            <button className='btn' onClick={decrement}>Decrement</button>
            <p style={{color:Color}}>Count : {count}</p>
        </div>
    )
}