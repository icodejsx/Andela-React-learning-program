import React from 'react';

const Signup = ({ signupCallBack }) => {
    return (
        <div className='flex gap-1'>
            <input placeholder="Enter Email" type='email' />
            <button>Get updates</button>
        </div>
    );
}

export default Signup;
