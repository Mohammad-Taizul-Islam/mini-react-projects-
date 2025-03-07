import React, { useState } from 'react'

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">
                    Name :
                </label>
                <input type="text" name='name' value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Email : </label>
                <input type="email" name='email' value={formData.email} onChange={handleChange} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form