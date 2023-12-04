import './Boxes.css'
import React, { useState, useEffect } from 'react';

function Boxes() {
    const [boxes, setBoxes] = useState([]);
   
    useEffect(() => {
        function addBox(size) {
            setBoxes((pre)=>[...pre, size]);
        }

        addBox('small');
        addBox('medium');
        addBox('large');

        setTimeout(() => {
            setBoxes([]);
        }, 4000);
    }, []);
    console.log(boxes);

    return (
        <div className='box-container'>
            {boxes.map((box, index) => {
                return <div key={index} className={`box ${box}`}></div>
            })}
        </div>
    );
}

export default Boxes;
