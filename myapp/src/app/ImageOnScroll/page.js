"use client"
import React, { useEffect, useState } from 'react';
import ImageScoll from '../components/ImageScoll';


const pages = () => {
    const [currentSpeakerId, setCurrentSpeakerId] = useState(0)
    const [mouseEventCount, setMouseEventCount] = useState(0)

    useEffect(() => {
        window.document.title = `SpeakerId: ${currentSpeakerId}`
        console.log(`useEffect: setting title to ${currentSpeakerId}`)
    }, [currentSpeakerId])
    return (
        <div>
            <span> mouseEventCount : ${mouseEventCount}</span>
            {[3, 4, 6, 7, 8, 9, 11, 12].map((speakerId) => {

                return (
                    <div key={speakerId} onMouseOver={() => {
                        setCurrentSpeakerId(speakerId)
                        setMouseEventCount(mouseEventCount + 1)
                        console.log(`onMouseOver : ${speakerId}`)
                    }} className=' '>

                        <ImageScoll primary={`/man${speakerId}bw.jpg`} secondary={`/man${speakerId}.jpg`} />
                    </div>
                )
            })}

        </div>
    );
}

export default pages;
