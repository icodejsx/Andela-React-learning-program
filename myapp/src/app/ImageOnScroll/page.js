import React from 'react';
import ImageScoll from '../components/ImageScoll';


const pages = () => {
    return (
        <div>

            <div className='flex gap-2  w-96 '>
                <ImageScoll primary='/manbw.jpg' secondary='/man.jpg' />
                <ImageScoll primary='/man1bw.jpg' secondary='/man1.jpg' />

            </div>
        </div>
    );
}

export default pages;
