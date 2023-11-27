import './Name.css'
import React from 'react';
import { useState } from 'react';

export default function({names}){
    return(
        <div className="container">
            <ul>
                {names.map((name,i)=>{
                    return <li key={i}>{name}</li>
                })}
            </ul>
        </div>
    );

}