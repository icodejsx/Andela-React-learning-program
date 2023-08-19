import React from 'react';
import ImageScoll from './ImageScoll';
import Button from './Button';

const SpeakerDetails = ({ id, firstName, lastName, favorite, bio, onHeartFavoriteHandler }) => {
    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-1'>
                <ImageScoll className=' ' primary={`/man${id}bw.jpg`} secondary={`/man${id}.jpg`} alt={`${firstName} ${lastName}`} />
                <div>
                    <h4>
                        <Button data-sessionid={id} className={favorite ? 'heartredbutton ' : 'heartdarkbutton'}
                            onClick={(e) => {
                                onHeartFavoriteHandler(e, !favorite)
                            }}
                        />
                        <span>{firstName} {lastName}</span>
                    </h4>
                    <span>{bio}</span>
                </div>
            </div>

        </div>
    );
}

export default SpeakerDetails;
