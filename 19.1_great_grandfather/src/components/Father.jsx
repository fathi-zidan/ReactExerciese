import React, { useEffect } from "react";
import { useContext, useState } from "react";
import Son from './Son'
import { GiftContext } from '../App'

export default function Father() {
    const { addGift } = useContext(GiftContext);
    useEffect(()=>{
        addGift('Football');
    },[])
    
    return (
        <div>
            <h1>Father</h1>

            <Son />
        </div>
    );
}