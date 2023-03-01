import React, { useState } from 'react';

export default function Contact() {
    const [fullName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value) {
            if (name === "fullName") {
                setErrorMessage('Name input is required!');
            } else if (name === "email") {
                setErrorMessage('Email input is required!');
            } else if (name === "message") {
                setErrorMessage('Message input is required!');
            }
        } else {
            setErrorMessage('');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "fullName") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "message") {
            setMessage(value);
        }

    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
    };

    return (
        <div className='pages'>
            <h2>Contact Me</h2>

            <p>Email: travontazlowry@email.com</p>

            <form className="form">
                <input
                    value={fullName}
                    name="fullName"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Full Name"
                    className='form-control my-2'
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Email"
                    className='form-control my-2'
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Message"
                    className='form-control my-2'
                />
                <button type="button" className='btn btn-primary my-2' onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
            <p>{errorMessage}</p>
        </div>
    );
}