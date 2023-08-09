import React from 'react';

const Header = () => {
    return (
        <div className='flex md:flex-row flex-col bg-slate-400  items-center md:h-44 a justify-around'>
            <div className='font-bold'>
                <p>October 19-20  2023</p>
                <p> SAN JOSE, CALIFORNIAN</p>

            </div>
            <div className='flex justify-center flex-col items-center gap-2'>
                <div className='flex text-xl '> <p className='text-sky-100 bg-red-400 h-6 text-center flex justify-center font-semibold items-center w-6 text-xl rounded-r- '>s</p> <p className='text-sky-100 bg-yellow-400 h-6 text-center flex justify-center font-semibold items-center w-6 text-xl rounded-r- '>v</p> <p className='text-sky-100 bg-green-400 h-6 text-center flex justify-center font-semibold items-center w-6 text-xl rounded-r- '>c</p> <p className='text-sky-100 bg-blue-400 h-6 text-center flex justify-center font-semibold items-center w-6 text-xl rounded-r- '>c</p></div>
                <p className='text-4xl font-semibold'>Silicon Valley Code Camp 2023</p>
                <div className='flex gap-1'>
                    <input placeholder="Enter Email" type='email' />
                    <button>Get updates</button>
                </div>
            </div>

        </div>
    );
}

export default Header;
