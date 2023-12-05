import React from "react";
import { useContext, useState } from "react";
import { GiftContext } from '../App'
export default function Grandson() {
    const { gifts } = useContext(GiftContext);
    console.log(gifts);
    return (
        <div>
            <h1>Grandson</h1>
            <ul>
                {gifts.map((ele, i) => {
                   return <li key={i}>{ele}</li>
                })}
            </ul>

        </div>
    );
}