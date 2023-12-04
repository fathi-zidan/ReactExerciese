import './Form.css'
import React from 'react'
import { useState } from 'react'

export default function Form(){
    const [name, setName] = useState('');
    function handleSubmit(e){
        e.preventDefault();
    }
    return(
        <form className='form-container'>
            <label htmlFor='name'>Name</label>
            <input type="text" name='name' id='name'  onChange={e => setName(e.target.value)}/>
            <button type='submit' onClick={handleSubmit}>Submit</button>
            <h1>my name is :{name}</h1>
        </form>
        

    );
}