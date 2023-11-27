import './Card.css'
import React from 'react';
import { useState } from 'react';

export default function Card({ birthday }) {

    return (
        <div className='container'>
            {birthday.map((ele, i) => (

                <div className='card'>
                    <h1>{ele.name}</h1>
                    <ul>
                        <li>Birthday:{ele.birthday}</li>
                        <li>Meats:{ele.favoriteFoods.meats.join(', ')}</li>
                        <li>Fish:{ele.favoriteFoods.fish.join(', ')}</li>
                    </ul>
                </div>
            ))}



        </div>
    );


}