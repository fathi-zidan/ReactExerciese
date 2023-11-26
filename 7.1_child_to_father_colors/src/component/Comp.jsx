import './Comp.css'
import React from 'react';
import { useState } from "react";
export default function Child_to_Parent(props){
    return(
            <button className='btn' style={{backgroundColor:props.color}} onClick={()=>props.onClick(props.color)}>{props.color}</button>
    );
}