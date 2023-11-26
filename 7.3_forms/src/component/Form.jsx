import './Form.css';
import React, { useState } from 'react';

export default function FormSurvey() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        setIsSubmitted(true);
    };

    return (
        <div className='container'>
            <form className='myForm' onSubmit={handleSubmit}>
                <div className='row'>
                    <label>First Name</label>
                    <input
                        type='text'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className='row'>
                    <label>Last Name</label>
                    <input
                        type='text'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className='row'>
                    <label>Age</label>
                    <select
                        name='age'
                        value={formData.age}
                        onChange={handleChange}
                    >
                        <option value='0-15'>0-15</option>
                        <option value='16-25'>16-25</option>
                        <option value='26-40'>26-40</option>
                        <option value='41-100'>41-100</option>
                    </select>
                </div>
                <div className='row'>
                    <label>Message</label>
                    <textarea
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className='row'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
            {isSubmitted && (<div className='info'>
                <h1>{formData.firstName}</h1>
                <h2>{formData.lastName}</h2>
                <h3>{formData.age}</h3>
                <h4>{formData.message}</h4>
            </div>)}
        </div>

    );
}
