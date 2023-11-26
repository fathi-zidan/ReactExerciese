import './Box1.css'
import React from 'react';
import { useState } from 'react';
export default function hideAndSeek(){
    const [isVisible,setIsVisible] = useState(false);
    const ChangeButton=()=>{
        setIsVisible(!isVisible);
    }
    return(
        <div className="box">
            <button className='btn' onClick={ChangeButton}>
                {isVisible? 'Hide Box' : 'Show Box'}
            </button>
            {isVisible ? <div className='box2'></div> : ''}
        </div>
    );
}