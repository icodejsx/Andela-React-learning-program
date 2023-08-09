
"use client"
import React, { useState } from 'react';

const Signup = ({ signupCall }) => {
    const [email, setEmail] = useState('')
    return (
        <div className='flex gap-1'>
            <input placeholder="Enter Email" type='email' name='email' value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}

            />
            <button onClick={() => {
                setEmail('')
                alert('Signup successful ')
            }} disabled={!email.includes("@")} type='submit '>Get updates</button>
        </div>
    );
}

export default Signup;
