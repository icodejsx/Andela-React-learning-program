"use client"
import { useState } from 'react';
import React from 'react';

const Home = () => {
    const [input, setInput] = useState()
    const [history, setHistory] = useState([])
    return (
        <div>
            <input onChange={(e) => {
                setInput(e.target.value)
                setHistory([...history, e.target.value])

            }} placeholder='Enter Some Text' />
            {input}

            <br />
            <ul>
                {history.map((rgg) => {
                    return <div>{rgg}</div>
                })}
            </ul>
        </div>
    );
}

export default Home;
