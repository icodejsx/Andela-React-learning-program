"use client"
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import speakerData from '../lib/SpeakersData';
import SpeakerDetails from '../components/SpeakerDetails';

const page = () => {

    const [speakingSaturday, setSpeakingSaturday] = useState(true)
    const [speakingSunday, setSpeakingSunday] = useState(true)


    const [speakerList, setSpeakerList] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve()
            }, 2000)
        }).then(() => {
            setIsLoading(false)
        })
        setSpeakerList(speakerData)
        return () => {
            console.log('clean Up')
        }
    }, [])


    const handleChangeSaturday = () => {
        setSpeakingSaturday(!speakingSaturday)
    }

    const handleChangeSunday = () => {
        setSpeakingSunday(!speakingSunday)
    }
    const speakerListFiltered = isLoading ? [] :
        speakerList.filter(({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun)).sort(function (a, b) {
            if (a.firstName < b.firstName) {
                return -1;
            }
            if (a.firstName > b.firstName) {
                return 1;
            }
            return 0;
        });



    const heartFavoriteHandler = (e, favoriteValue) => {
        e.preventDefault()
        const sessionId = parseInt(e.target.attributes['data-session-id'].value)
        setSpeakerList(
            speakerList.map((item) => {
                if (item.id === sessionId) {
                    return { ...item, favorite: favoriteValue }
                }
                return item
            })
        )
    }

    if (isLoading) return <img className='justify-center items-center w-[500px] ' src='/spin.gif' />
    return (
        <div>
            <Header />
            <NavBar />
            <div className='p-10 flex gap-2'>
                <div className='flex gap-2'>

                    <input id="default-checkbox" type="checkbox" onChange={handleChangeSaturday} checked={speakingSaturday} />
                    <input id="default-checkbox" type="checkbox" onChange={handleChangeSunday} checked={speakingSunday} />
                </div>


                <div className=' w-20 h-20'>
                    {speakerListFiltered.map(({ id, firstName, lastName, bio, favorite }) => {
                        return (
                            <SpeakerDetails key={id} id={id} favorite={favorite} firstName={firstName} lastName={lastName} bio={bio} onHeartFavoriteHandler={heartFavoriteHandler} />
                        )
                    })

                    }

                </div>

            </div>

        </div>
    );
}

export default page;
