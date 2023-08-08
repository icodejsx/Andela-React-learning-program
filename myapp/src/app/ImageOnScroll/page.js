import React from 'react';
import ImageScoll from '../components/ImageScoll';


const pages = () => {
    return (
        <div>
            {[3, 4, 6, 7, 8, 9, 11, 12].map((speakerId) => {

                return (
                    <div key={speakerId} className=' '>
                        <ImageScoll primary={`/man${speakerId}bw.jpg`} secondary={`/man${speakerId}.jpg`} />
                    </div>
                )
            })}

        </div>
    );
}

export default pages;
