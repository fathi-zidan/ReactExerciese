import './DisplayAvatars.css'
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AvatarProvider, useAvatar } from './context/AvatarContext';

function DisplayAvatars() {
    const { avatars, setAvatars } = useAvatar();
    return (

        <section className='Avatars-container'>
            {

                avatars.map((ele, index) => (
                    <div key={index} className='A-card'>
                        <img src={ele.avatar} alt={ele.name}/>
                        <h2>{ele.name}</h2>
                        <h3>{ele.email}</h3>
                    </div>
                ))
            }


        </section>

    );
}
export default DisplayAvatars;