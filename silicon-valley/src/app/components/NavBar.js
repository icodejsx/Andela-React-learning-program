import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <div className='bg-gray-800 text-white p-5 mt-7 mb-7 flex gap-3'>
            <Link href='/'>

                Home
            </Link>
            <Link href='/speakers'>

                Speakers
            </Link>

        </div>
    );
}

export default NavBar;
