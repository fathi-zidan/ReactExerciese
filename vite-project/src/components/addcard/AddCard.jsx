import './AddCard.css'
import React from 'react'
import { useState } from 'react'

function AddCard({ handleAddCard }) {
    const [data, setData] = useState({
        name: '',
        lastName: '',
        address: '',
        email: '',
    })
    function handleSubmit(e) {
        e.preventDefault();
        handleAddCard(data);
        setData({
            name: '',
            lastName: '',
            address: '',
            email: ''
        });

    }
    function handleChange(e){
        const {name,value} = e.target;
        setData({...data,[name]: value});
    }
    return (
        <div className="add-card">
            <form onSubmit={handleSubmit} className='form-card'>
                <label htmlFor='name'>Name:</label>
                <input type="text" name="name" value={data.name} onChange={handleChange} />

                <label htmlFor='lastName'>Last Name:</label>
                <input type="text" name="lastName" value={data.lastName} onChange={handleChange} />

                <label htmlFor='address'>Address:</label>
                <input type="text" name="address" value={data.address} onChange={handleChange} />

                <label htmlFor='email'>Email:</label>
                <input type="email" name="email" value={data.email} onChange={handleChange} />

                <button type="submit">Add Card</button>
            </form>

        </div>
    );
}
export default AddCard;