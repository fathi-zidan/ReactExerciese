import './CheckBox.css'
import React from 'react';
import { useState } from 'react';

export default function CheckBox() {
    const [checkBox1, setCheckBox1] = useState(false);
    const [checkBox2, setCheckBox2] = useState(false);
    const [checkBox3, setCheckBox3] = useState(true);
    const [checkBox4, setCheckBox4] = useState(true);

    return (
        <div className="checkbox">
            <div className='cc'>
                <input type='checkbox' className='in' checked={checkBox1} onChange={() => setCheckBox1(!checkBox1)}></input>
                <label>I read The Term Of The App</label>
            </div>
            <div className='cc'>
                <input type='checkbox' className='in' checked={checkBox2} onChange={() => setCheckBox2(!checkBox2)}></input>
                <label>I accept the term of the app</label>
            </div>
            <div className='cc'>
                <input type='checkbox' className='in' checked={checkBox3} onChange={() => setCheckBox3(!checkBox3)}></input>
                <label>I Want to get the weekly news letter</label>
            </div>
            <div className='cc'>
                <input type='checkbox' className='in' checked={checkBox4} onChange={() => setCheckBox4(!checkBox4)}></input>
                <label>I Want to get sales and offers</label>
            </div>

        </div>
    )


}