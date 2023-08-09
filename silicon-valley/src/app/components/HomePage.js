import React from 'react'
import Header from './Header'
import NavBar from './NavBar'

const HomePage = () => {
    return (
        <>
            <Header />
            <NavBar />
            <div className='p-10'>
                <p className='text-2xl font-bold'>Home</p>
                <p>freeCodeCamp is a non-profit organization that consists of an interactive learning web platform, an online community forum, chat rooms, online publications and local organizations that intend to make learning software development accessible to anyone. Wikipedia
                    freeCodeCamp is a non-profit organization that consists of an interactive learning web platform, an online community forum, chat rooms, online publications and local organizations that intend to make learning software development accessible to anyone. Wikipedia</p>

            </div>
        </>
    )
}

export default HomePage
