import './Card.css'
import React from 'react'
import { useState } from 'react'

function Card ({ name, lastName, address, email }){
    return (
        <section className='cardContainer'>
        <div className='card'>
          <p>Name:    {name}</p>
          <p>Last Name:   {lastName}</p>
          <p>Address:   {address}</p>
          <p>Email:   {email}</p>
        </div>
        </section>
      );

}

export default Card;