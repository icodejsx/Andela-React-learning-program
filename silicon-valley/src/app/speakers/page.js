import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

const page = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <h1 className='text-4xl'>
                Speakers
            </h1>

        </div>
    );
}

export default page;
