import React from 'react';
import ImageToogleOnHover from '../components/ImageToogleOnHover';

const Image = () => {
    return (
        <div className='flex gap-2  w-96 '>
            <ImageToogleOnHover primary='/manbw.jpg' secondary='/man.jpg' />
            <ImageToogleOnHover primary='/man1bw.jpg' secondary='/man1.jpg' />

        </div>
    );
}

export default Image;
