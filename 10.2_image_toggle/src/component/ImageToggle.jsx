import './ImageToggle.css';
import { useRef } from 'react';
import React from 'react';

export default function ImageToggle() {
    const image1Ref = useRef();
    const image2Ref = useRef();

    function handleMouseEnter(img) {
        img.current.src = img.current.dataset.color;
    }

    function handleMouseLeave(img) {
        img.current.src = img.current.dataset.black;
    }
    console.log(image1Ref.current?.dataset);

    return (
        <div className='Image-container'>
            <img
                className='im'
                ref={image1Ref}
                src='/p1-modified.jpg'
                alt='Mario'
                data-color='/p1.jpg'
                data-black='/p1-modified.jpg'
                onMouseEnter={() => handleMouseEnter(image1Ref)}
                onMouseLeave={() => handleMouseLeave(image1Ref)}
            />
            <img
                className='im'
                ref={image2Ref}
                src='/p2-modified.png'
                alt='Mario'
                data-color='/p2.png'
                data-black='/p1-modified.png'
                onMouseEnter={() => handleMouseEnter(image2Ref)}
                onMouseLeave={() => handleMouseLeave(image2Ref)}
            />
        </div>
    );
}
